import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto · Solicita tu Cotización",
  description:
    "Solicita tu cotización de marketing digital. Especialista freelance en Antofagasta. Primera consulta sin costo. Respuesta en menos de 48 horas.",
  alternates: { canonical: "https://bvyon-marketing.cl/contacto" },
  openGraph: {
    title: "Contacto · Solicita tu Cotización | bvyon marketing",
    description: "Primera consulta sin costo. Cotización de marketing digital para el norte de Chile.",
    url: "https://bvyon-marketing.cl/contacto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto · Solicita tu Cotización | bvyon marketing",
    description: "Primera consulta sin costo. Cotización de marketing digital para el norte de Chile.",
    images: ["/og-image.png"],
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-accent/20 text-accent rounded-full mb-4">
              Hablemos
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Contáctanos
            </h1>
            <p className="text-gray-300 text-lg">
              La primera consulta es sin costo. Cuéntanos sobre tu empresa y te ayudamos a crecer sin límites.
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
                <h2
                  className="text-2xl font-black text-primary mb-5"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  ¿Cómo trabajamos?
                </h2>
                <ol className="space-y-5">
                  {[
                    { step: "1", title: "Diagnóstico inicial (gratis)", desc: "30 minutos para entender tu negocio, objetivos y desafíos actuales." },
                    { step: "2", title: "Propuesta a medida", desc: "Enviamos propuesta con alcance, KPIs y presupuesto en 48 horas." },
                    { step: "3", title: "Kickoff", desc: "Sesión de onboarding, acceso a sistemas y definición de brand voice." },
                    { step: "4", title: "Ejecución y resultados", desc: "Trabajo semanal con dashboard en tiempo real y reuniones de resultados." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center shrink-0"
                        style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                      >
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                        <p className="text-slate text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-light rounded-2xl p-6">
                <h3
                  className="font-bold text-primary mb-4"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  También puedes escribirnos
                </h3>
                <ul className="space-y-3 text-sm text-slate">
                  <li className="flex gap-3 items-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:metrilabcl@gmail.com" className="hover:text-primary">
                      metrilabcl@gmail.com
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+56937441215" className="hover:text-primary">
                      +56 9 3744 1215
                    </a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Antofagasta · Iquique · Arica · Calama
                  </li>
                  <li className="flex gap-3 items-center">
                    <svg aria-hidden="true" className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Lun–Vie, 9:00–18:00
                  </li>
                </ul>
              </div>
            </div>

            {/* Form col */}
            <div className="lg:col-span-3">
              <h2
                className="text-2xl font-black text-primary mb-6"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
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
