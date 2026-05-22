"use client";

import { useActionState } from "react";
import { submitLeadForm, type LeadFormState } from "@/lib/actions";

const serviceOptions = [
  "Marketing Digital",
  "SEO & Posicionamiento",
  "Gestión de Redes Sociales",
  "Publicidad Digital",
  "Diseño Web",
  "Email Marketing",
  "Estrategia de Contenidos",
  "Analytics & Reportería",
  "No sé todavía / Necesito asesoría",
];

const initialState: LeadFormState = { success: false };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLeadForm, initialState);

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">¡Mensaje recibido!</h3>
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre completo"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:border-[#f59e0b] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@empresa.cl"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:border-[#f59e0b] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+56 9 XXXX XXXX"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:border-[#f59e0b] transition-colors"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Nombre de tu empresa"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:border-[#f59e0b] transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
          ¿En qué servicio estás interesado?
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:border-[#f59e0b] transition-colors bg-white"
        >
          <option value="">Selecciona un servicio</option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Cuéntanos sobre tu empresa y lo que necesitas lograr..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40 focus:border-[#f59e0b] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 bg-[#f59e0b] text-white font-bold text-base rounded-xl hover:bg-[#d97706] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {pending ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Al enviar este formulario aceptas nuestra{" "}
        <a href="/privacidad" className="underline hover:text-gray-600">
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
