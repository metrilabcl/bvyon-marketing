"use server";

import { writeFile, mkdir } from "fs/promises";
import path from "path";

export type LeadFormState = {
  success: boolean;
  error?: string;
};

export async function submitLeadForm(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { success: false, error: "Nombre, email y mensaje son obligatorios." };
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return { success: false, error: "Por favor ingresa un email válido." };
  }

  const lead = {
    timestamp: new Date().toISOString(),
    name,
    email,
    phone,
    company,
    service,
    message,
  };

  let persistError: string | null = null;

  // 1. Persist to JSONL (non-fatal in production environments)
  try {
    const leadsDir = path.join(process.cwd(), "data", "leads");
    await mkdir(leadsDir, { recursive: true });
    await writeFile(path.join(leadsDir, "leads.jsonl"), JSON.stringify(lead) + "\n", { flag: "a" });
  } catch {
    persistError = "file_write_failed";
  }

  // 2. Outbound webhook — set CONTACT_WEBHOOK_URL in env to enable
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) persistError = `webhook_${res.status}`;
    } catch (err) {
      persistError = `webhook_error: ${String(err)}`;
    }
  }

  // 3. Email via Resend — set RESEND_API_KEY and CONTACT_EMAIL in env to enable
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? "marketing@agencia360.cl";
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Agencia 360 Website <noreply@agencia360.cl>",
          to: [contactEmail],
          reply_to: email,
          subject: `Nuevo lead: ${name} (${company || "sin empresa"})`,
          html: `<h2>Nuevo contacto desde agencia360.cl</h2>
<table>
<tr><td><strong>Nombre</strong></td><td>${name}</td></tr>
<tr><td><strong>Email</strong></td><td>${email}</td></tr>
<tr><td><strong>Teléfono</strong></td><td>${phone || "—"}</td></tr>
<tr><td><strong>Empresa</strong></td><td>${company || "—"}</td></tr>
<tr><td><strong>Servicio</strong></td><td>${service || "—"}</td></tr>
<tr><td><strong>Mensaje</strong></td><td>${message}</td></tr>
</table>`,
        }),
      });
      if (!res.ok) persistError = `resend_${res.status}`;
    } catch (err) {
      persistError = `resend_error: ${String(err)}`;
    }
  }

  // Return failure only when ALL persistence paths failed and none were configured
  if (persistError && !webhookUrl && !resendKey) {
    // File write failed, no fallbacks configured — surface the error in production
    if (process.env.NODE_ENV === "production") {
      console.error("[contact-form] All persistence failed:", persistError, lead);
      return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o escríbenos directamente a marketing@agencia360.cl" };
    }
  }

  return { success: true };
}
