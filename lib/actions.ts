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

  // Basic validation
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

  // Persist lead to a JSON log (later: wire to CRM / email via ENV vars)
  try {
    const leadsDir = path.join(process.cwd(), "data", "leads");
    await mkdir(leadsDir, { recursive: true });
    const file = path.join(leadsDir, "leads.jsonl");
    await writeFile(file, JSON.stringify(lead) + "\n", { flag: "a" });
  } catch {
    // Non-fatal: continue even if file write fails in read-only environments
  }

  // TODO: Send confirmation email via Resend / SendGrid once ENV vars configured:
  // await sendEmail({ to: email, subject: "¡Recibimos tu mensaje!", ... })
  // TODO: Push lead to CRM (HubSpot / Notion DB) once integration is set up

  return { success: true };
}
