import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto · Solicita tu Cotización",
  description:
    "Contáctanos para recibir una cotización personalizada. Agencia 360 está lista para potenciar tu marca en el norte de Chile.",
  alternates: { canonical: "https://agencia360.cl/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2744] text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#f59e0b]/20 text-[#f59e0b] rounded-full mb-4">
              Hablemos
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              Contáctanos
            </h1>
            <p className="text-gray-300 text-lg">
              La primera consulta es sin costo. Cuéntanos sobre tu empresa y te
              ayudamos a definir la mejor estrategia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Info col */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-[#1a2744] mb-4">
                  ¿Cómo trabajamos?
                </h2>
                <ol className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Conversación inicial",
                      desc: "Nos cuentas sobre tu empresa, objetivos y desafíos actuales.",
                    },
                    {
                      step: "2",
                      title: "Diagnóstico",
                      desc: "Analizamos tu situación digital y preparamos una propuesta a medida.",
                    },
                    {
                      step: "3",
                      title: "Propuesta",
                      desc: "Te presentamos la estrategia recomendada con objetivos claros y tiempos.",
                    },
                    {
                      step: "4",
                      title: "¡A trabajar!",
                      desc: "Una vez alineados, empezamos a ejecutar con reportes periódicos.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-white text-sm font-bold flex items-center justify-center shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a2744] text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-[#1a2744] mb-4">También puedes escribirnos</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {/* TODO: Replace with real contact data */}
                  <li className="flex gap-3 items-center">
                    <svg className="w-5 h-5 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:hola@agencia360.cl" className="hover:text-[#1a2744]">
                      hola@agencia360.cl
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg className="w-5 h-5 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+56900000000" className="hover:text-[#1a2744]">
                      +56 9 XXXX XXXX
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg className="w-5 h-5 text-[#f59e0b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Lun–Vie, 9:00–18:00
                  </li>
                </ul>
              </div>
            </div>

            {/* Form col */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black text-[#1a2744] mb-6">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
