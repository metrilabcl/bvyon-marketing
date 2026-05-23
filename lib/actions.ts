"use server";

import { writeFile, mkdir } from "fs/promises";
import path from "path";

export type LeadFormState = {
  success: boolean;
  error?: string;
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

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

  // 1. Persist to JSONL — non-fatal (serverless environments may have read-only fs)
  try {
    const leadsDir = path.join(process.cwd(), "data", "leads");
    await mkdir(leadsDir, { recursive: true });
    await writeFile(path.join(leadsDir, "leads.jsonl"), JSON.stringify(lead) + "\n", { flag: "a" });
  } catch {
    // Intentionally swallowed: file write is a backup, not the primary channel
  }

  // 2. Outbound webhook — set CONTACT_WEBHOOK_URL to enable
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) {
        console.error("[contact-form] webhook error", res.status, await res.text().catch(() => ""));
        return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o escríbenos directamente a metrilabcl@gmail.com" };
      }
    } catch (err) {
      console.error("[contact-form] webhook fetch error", err);
      return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o escríbenos directamente a metrilabcl@gmail.com" };
    }
  }

  // 3. Email via Resend — set RESEND_API_KEY (and optionally CONTACT_EMAIL) to enable
  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL ?? "metrilabcl@gmail.com";
  if (resendKey) {
    const rows = [
      ["Nombre", name],
      ["Email", email],
      ...(phone ? [["Teléfono", phone]] : []),
      ...(company ? [["Empresa", company]] : []),
      ...(service ? [["Servicio", service]] : []),
      ["Mensaje", message],
    ] as [string, string][];

    const tableRows = rows
      .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;font-weight:600;white-space:nowrap">${escapeHtml(k)}:</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`)
      .join("");

    const html = `<!DOCTYPE html><html lang="es"><body style="font-family:sans-serif;color:#0D1B4B;max-width:600px;margin:0 auto;padding:24px">
<h2 style="color:#FF6B2B;margin-top:0">Nuevo Lead — bvyon marketing</h2>
<table style="border-collapse:collapse">${tableRows}</table>
</body></html>`;

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "bvyon marketing Website <noreply@bvyon-marketing.cl>",
          to: [contactEmail],
          reply_to: email,
          subject: `Nuevo lead: ${name}${company ? ` (${company})` : ""}`,
          html,
        }),
      });
      if (!res.ok) {
        console.error("[contact-form] Resend error", res.status, await res.text().catch(() => ""));
        return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o escríbenos directamente a metrilabcl@gmail.com" };
      }
    } catch (err) {
      console.error("[contact-form] Resend fetch error", err);
      return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o escríbenos directamente a metrilabcl@gmail.com" };
    }
  }

  return { success: true };
}
