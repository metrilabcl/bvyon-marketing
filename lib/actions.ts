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
  const honeypot = String(formData.get("website") ?? "");
  if (honeypot) return { success: true }; // bot trap — silently discard

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
        return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor escríbenos directamente a metrilabcl@gmail.com" };
      }
    } catch (err) {
      console.error("[contact-form] webhook fetch error", err);
      return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor escríbenos directamente a metrilabcl@gmail.com" };
    }
    return { success: true };
  }

  // 3. Email notification via Web3Forms — set WEB3FORMS_ACCESS_KEY to enable
  //    Sign up free at web3forms.com (250 submissions/month, no domain verification needed)
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!web3formsKey) {
    console.error("[contact-form] No delivery channel configured. Set WEB3FORMS_ACCESS_KEY or CONTACT_WEBHOOK_URL.");
    return {
      success: false,
      error: "El sistema de mensajes no está activo aún. Contáctanos directamente a metrilabcl@gmail.com o por WhatsApp.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: `Nuevo lead: ${name}${company ? ` (${company})` : ""}`,
        from_name: "bvyon marketing",
        replyto: email,
        name,
        email,
        ...(phone && { phone }),
        ...(company && { empresa: company }),
        ...(service && { servicio: service }),
        message,
      }),
    });
    if (!res.ok) {
      console.error("[contact-form] Web3Forms error", res.status, await res.text().catch(() => ""));
      return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor escríbenos directamente a metrilabcl@gmail.com" };
    }
  } catch (err) {
    console.error("[contact-form] Web3Forms fetch error", err);
    return { success: false, error: "Hubo un error al enviar tu mensaje. Por favor escríbenos directamente a metrilabcl@gmail.com" };
  }

  return { success: true };
}
