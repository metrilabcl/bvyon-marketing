import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito | bvyon marketing",
  description:
    "Casos reales de empresas que crecieron con estrategia digital. Automatizaciones, SEO y publicidad que convierte.",
  alternates: { canonical: "https://bvyon-marketing.cl/casos" },
  openGraph: {
    title: "Casos de Éxito | bvyon marketing",
    description: "Casos reales de empresas que escalaron sus resultados digitales.",
    url: "https://bvyon-marketing.cl/casos",
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center text-white pt-16 relative overflow-hidden bg-[#060c1e]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#091438] to-[#060c1e]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-accent/20 text-accent rounded-full mb-6">
              Resultados reales
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Empresas que crecieron con{" "}
              <span className="text-accent">estrategia digital</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Casos reales de empresas del sector minero y retail que escalaron sus resultados con automatizaciones, SEO y publicidad digital enfocada en conversión.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg aria-hidden="true" className="relative block w-full" style={{height: "60px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,60 C300,0 900,0 1200,60 L1200,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">Minería</span>
            </div>
            <h2
              className="text-4xl font-black text-primary mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Empresa contratista: +85% en leads calificados
            </h2>
            <p className="text-lg text-slate mb-8 leading-relaxed max-w-2xl">
              Una empresa de servicios al sector minero regional operaba con poca visibilidad online. Sin estrategia de SEO ni publicidad digital, dependían casi exclusivamente de referencias personales — lo que limitaba su escalabilidad.
            </p>
          </div>

          {/* The Challenge */}
          <div className="mb-12 pb-8 border-b border-primary-light">
            <h3
              className="text-2xl font-bold text-primary mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              El desafío
            </h3>
            <ul className="space-y-3 text-slate">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Posicionamiento digital nulo: no aparecían en búsquedas de empresas mineras buscando contratistas de sus servicios.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Gestión manual de leads: cada consulta requería seguimiento humano sin sistema de CRM.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Sin datos de conversión: desconocían cuál era su costo real de adquisición de clientes.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Presupuesto digital mínimo: apenas invertían en pauta digital, confiaban en red personal.</span>
              </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="mb-12 pb-8 border-b border-primary-light">
            <h3
              className="text-2xl font-bold text-primary mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              La estrategia
            </h3>
            <div className="grid gap-6">
              <div>
                <span className="inline-block px-2 py-0.5 bg-accent text-primary text-xs font-bold rounded-full mb-2">SEO</span>
                <p className="text-slate"><strong>Posicionamiento orgánico en Google.</strong> Optimizamos su sitio para palabras clave como "contratista minería", "servicios especializados industria". En 5 meses: primeras posiciones en búsquedas específicas del sector.</p>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 bg-accent text-primary text-xs font-bold rounded-full mb-2">Automatización + CRM</span>
                <p className="text-slate"><strong>Sistema de leads automático.</strong> Cada consulta desde el sitio se registra en su CRM, gatilla un email automático de confirmación, y el gerente recibe una notificación en Slack al instante. Ningún lead se pierde.</p>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 bg-accent text-primary text-xs font-bold rounded-full mb-2">Publicidad Digital</span>
                <p className="text-slate"><strong>Pauta en Google Ads + LinkedIn.</strong> Campañas B2B enfocadas en empresas mineras. A/B testing continuo para optimizar costo por lead. ROI mejorado cada mes.</p>
              </div>
              <div>
                <span className="inline-block px-2 py-0.5 bg-accent text-primary text-xs font-bold rounded-full mb-2">Análisis y Reporting</span>
                <p className="text-slate"><strong>Dashboard mensual con KPIs claros.</strong> Costo por lead, tasa de conversión, origen de cada cliente. Datos que guían cada decisión.</p>
              </div>
            </div>
          </div>

          {/* The Results */}
          <div className="mb-12">
            <h3
              className="text-2xl font-bold text-primary mb-6"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Los resultados
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-light rounded-2xl p-6 border border-primary-light">
                <div
                  className="text-4xl font-black text-accent mb-2"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  +85%
                </div>
                <p className="text-slate text-sm">Aumento en leads calificados de SEO + pauta</p>
              </div>
              <div className="bg-light rounded-2xl p-6 border border-primary-light">
                <div
                  className="text-4xl font-black text-accent mb-2"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  -40%
                </div>
                <p className="text-slate text-sm">Reducción en costo por lead gracias a optimización</p>
              </div>
              <div className="bg-light rounded-2xl p-6 border border-primary-light">
                <div
                  className="text-4xl font-black text-accent mb-2"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  0 min
                </div>
                <p className="text-slate text-sm">Tiempo de respuesta a nuevos leads (automático)</p>
              </div>
              <div className="bg-light rounded-2xl p-6 border border-primary-light">
                <div
                  className="text-4xl font-black text-accent mb-2"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  3x
                </div>
                <p className="text-slate text-sm">ROI en campañas de pauta digital</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-primary to-[#152260] rounded-2xl p-8 text-white mb-12">
            <svg className="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2-7-2s-7 .75-7 2v10c0 1 0 4 3 5z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.25-2-7-2s-7 .75-7 2v10c0 1 0 4 3 5z" />
            </svg>
            <p className="text-lg mb-4 italic">
              "Antes no sabíamos si nuestro dinero en publicidad estaba funcionando. Ahora vemos cada lead, de dónde viene, y cuánto nos costó traerlo. El sistema automático nos ahorra horas cada semana."
            </p>
            <p className="font-semibold">— Gerente General, Empresa Contratista (Minería)</p>
          </div>
        </div>
      </section>

      {/* More Cases Coming */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            Más casos próximamente
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto mb-8">
            Casos de éxito en retail, e-commerce y servicios digitales. Próximas historias disponibles en los próximos meses.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black text-primary mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            ¿Tu negocio podría ser el próximo caso?
          </h2>
          <p className="text-primary/80 text-lg mb-8">
            Hablemos sobre tu desafío digital. La primera consulta es sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-[#0a1540] transition-colors"
          >
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </>
  );
}
