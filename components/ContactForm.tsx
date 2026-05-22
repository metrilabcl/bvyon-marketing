"use client";

import { useActionState } from "react";
import { submitLeadForm, type LeadFormState } from "@/lib/actions";

const serviceOptions = [
  "Gestión de Redes Sociales",
  "Publicidad Digital (Paid Media)",
  "Creación de Contenido",
  "Branding e Identidad Visual",
  "SEO y Posicionamiento Web",
  "Diseño y Desarrollo Web",
  "Email Marketing y Automatización",
  "Consultoría y Estrategia de Marketing",
  "Paquete Emprendedor ($290.000/mes)",
  "Paquete Crecimiento ($750.000/mes)",
  "Paquete Expansión ($1.800.000/mes)",
  "Paquete Corporativo / Minería",
  "No sé todavía / Necesito asesoría",
];

const initialState: LeadFormState = { success: false };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLeadForm, initialState);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3
          className="text-xl font-bold text-green-800 mb-2"
          style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
        >
          ¡Mensaje recibido!
        </h3>
        <p className="text-green-700 text-sm">
          Gracias por contactarnos. Nuestro equipo te responderá en menos de 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0D1B4B] mb-1.5">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            placeholder="Tu nombre completo"
            className="w-full px-4 py-3 border border-[#E8EDF7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0D1B4B] mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" required autoComplete="email"
            placeholder="tu@empresa.cl"
            className="w-full px-4 py-3 border border-[#E8EDF7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0D1B4B] mb-1.5">
            Teléfono
          </label>
          <input
            id="phone" name="phone" type="tel" autoComplete="tel"
            placeholder="+56 9 XXXX XXXX"
            className="w-full px-4 py-3 border border-[#E8EDF7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#0D1B4B] mb-1.5">
            Empresa
          </label>
          <input
            id="company" name="company" type="text" autoComplete="organization"
            placeholder="Nombre de tu empresa"
            className="w-full px-4 py-3 border border-[#E8EDF7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-[#0D1B4B] mb-1.5">
          ¿En qué servicio estás interesado?
        </label>
        <select
          id="service" name="service"
          className="w-full px-4 py-3 border border-[#E8EDF7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors bg-white"
        >
          <option value="">Selecciona un servicio o paquete</option>
          {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0D1B4B] mb-1.5">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={4}
          placeholder="Cuéntanos sobre tu empresa y lo que necesitas lograr..."
          className="w-full px-4 py-3 border border-[#E8EDF7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30 focus:border-[#FF6B2B] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 bg-[#FF6B2B] text-white font-bold text-base rounded-xl hover:bg-[#e85e22] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {pending ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="text-xs text-[#4A5568] text-center">
        Al enviar este formulario aceptas nuestra{" "}
        <a href="/privacidad" className="underline hover:text-[#0D1B4B]">política de privacidad</a>.
      </p>
    </form>
  );
}
