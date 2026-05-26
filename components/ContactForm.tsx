"use client";

import { useActionState } from "react";
import { submitLeadForm, type LeadFormState } from "@/lib/actions";

const WHATSAPP_NUMBER = "56937441215";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, me interesa conocer más sobre sus servicios de marketing digital."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

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
  "No sé todavía / Necesito asesoría",
];

const initialState: LeadFormState = { success: false };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLeadForm, initialState);

  if (state.success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
      >
        <div className="text-4xl mb-4" aria-hidden="true">✅</div>
        <h3
          className="text-xl font-bold text-green-800 mb-2"
          style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
        >
          ¡Mensaje recibido!
        </h3>
        <p className="text-green-700 text-sm mb-5">
          Gracias por escribirme. Te responderé personalmente en menos de 24 horas hábiles.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-sm font-semibold rounded-xl hover:bg-[#1ebe5a] transition-colors"
        >
          <WhatsAppIcon />
          ¿Necesitas respuesta rápida? Escríbeme por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* WhatsApp CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl px-5 py-4 hover:bg-[#25D366]/20 transition-colors group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 text-white group-hover:scale-105 transition-transform">
          <WhatsAppIcon />
        </span>
        <div>
          <p className="font-bold text-primary text-sm">Respuesta inmediata por WhatsApp</p>
          <p className="text-slate text-xs">Clic para abrir la conversación directamente</p>
        </div>
        <svg aria-hidden="true" className="ml-auto w-4 h-4 text-slate shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-primary-light" />
        <span className="text-xs text-slate font-medium">o déjame un mensaje</span>
        <div className="flex-1 h-px bg-primary-light" />
      </div>

      {/* Form */}
      <form action={formAction} className="space-y-5" noValidate>
        {/* honeypot — hidden from real users, bots fill it */}
        <input type="text" name="website" tabIndex={-1} aria-hidden="true" autoComplete="off" className="hidden" />
        {state.error && (
          <div
            role="alert"
            aria-live="assertive"
            className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700"
          >
            {state.error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              id="name" name="name" type="text" required autoComplete="name"
              placeholder="Tu nombre completo"
              className="w-full px-4 py-3 border border-primary-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email" name="email" type="email" required autoComplete="email"
              placeholder="tu@empresa.cl"
              className="w-full px-4 py-3 border border-primary-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
              Teléfono
            </label>
            <input
              id="phone" name="phone" type="tel" autoComplete="tel"
              placeholder="+56 9 XXXX XXXX"
              className="w-full px-4 py-3 border border-primary-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">
              Empresa
            </label>
            <input
              id="company" name="company" type="text" autoComplete="organization"
              placeholder="Nombre de tu empresa"
              className="w-full px-4 py-3 border border-primary-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-primary mb-1.5">
            ¿En qué servicio estás interesado?
          </label>
          <select
            id="service" name="service"
            className="w-full px-4 py-3 border border-primary-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
          >
            <option value="">Selecciona un servicio o paquete</option>
            {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message" name="message" required rows={4}
            placeholder="Cuéntanos sobre tu empresa y lo que necesitas lograr..."
            className="w-full px-4 py-3 border border-primary-light rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-y"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full py-4 bg-accent text-primary font-bold text-base rounded-xl hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {pending ? "Enviando..." : "Enviar mensaje"}
        </button>

        <p className="text-xs text-slate text-center">
          Al enviar este formulario aceptas nuestra{" "}
          <a href="/privacidad" className="underline hover:text-primary">política de privacidad</a>.
        </p>
      </form>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
