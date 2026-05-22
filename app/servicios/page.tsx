import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Marketing Digital",
  description:
    "Conoce todos los servicios de Agencia 360: SEO, redes sociales, publicidad digital, diseño web, email marketing y estrategia de contenidos para el norte de Chile.",
  alternates: { canonical: "https://agencia360.cl/servicios" },
};

// TODO: Replace with final service list + pricing tiers from MET-2
const services = [
  {
    id: "marketing-digital",
    icon: "📈",
    title: "Marketing Digital",
    desc: "Diseñamos estrategias de marketing digital integrales adaptadas al mercado del norte de Chile. Analizamos tu industria, competencia y audiencia para crear un plan de acción que maximice tu visibilidad y conversión.",
    features: [
      "Auditoría digital completa",
      "Definición de KPIs y objetivos",
      "Plan de marketing personalizado",
      "Reportes mensuales de resultados",
      "Consultoría estratégica continua",
    ],
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO & Posicionamiento Web",
    desc: "Posicionamos tu sitio web en los primeros resultados de Google para que tus clientes te encuentren cuando más te necesitan. Trabajamos con técnicas de SEO on-page, off-page y técnico.",
    features: [
      "Investigación de palabras clave",
      "Optimización técnica del sitio",
      "Construcción de backlinks",
      "Creación de contenido SEO",
      "Seguimiento de posiciones",
    ],
  },
  {
    id: "redes-sociales",
    icon: "📱",
    title: "Gestión de Redes Sociales",
    desc: "Gestionamos tus perfiles en Instagram, Facebook, LinkedIn y TikTok con una estrategia de contenido coherente que construye comunidad y genera engagement real.",
    features: [
      "Creación de contenido diario",
      "Diseño gráfico y edición de video",
      "Gestión de comunidad",
      "Estrategia de crecimiento orgánico",
      "Análisis de métricas mensual",
    ],
  },
  {
    id: "publicidad-digital",
    icon: "📣",
    title: "Publicidad Digital (Paid Media)",
    desc: "Creamos y optimizamos campañas de publicidad en Google, Meta, Instagram y otras plataformas para que cada peso invertido genere el mayor retorno posible.",
    features: [
      "Google Ads (Search, Display, Shopping)",
      "Meta Ads (Facebook & Instagram)",
      "Retargeting y audiencias personalizadas",
      "Optimización continua de campañas",
      "Reportes de ROI detallados",
    ],
  },
  {
    id: "diseno-web",
    icon: "🎨",
    title: "Diseño & Desarrollo Web",
    desc: "Creamos sitios web modernos, rápidos y optimizados para conversión. Desde landing pages hasta tiendas online completas, construimos presencias digitales que convierten visitantes en clientes.",
    features: [
      "Diseño UI/UX responsive",
      "Optimización de velocidad (Core Web Vitals)",
      "Integración de analytics",
      "Formularios de captura de leads",
      "SEO técnico incluido",
    ],
  },
  {
    id: "email-marketing",
    icon: "✉️",
    title: "Email Marketing & Automatización",
    desc: "Diseñamos flujos de email marketing automatizados que nutren tus leads y mantienen a tus clientes comprometidos con tu marca a lo largo del tiempo.",
    features: [
      "Configuración de plataforma de email",
      "Diseño de plantillas responsivas",
      "Flujos de automatización",
      "Segmentación de audiencias",
      "A/B testing y optimización",
    ],
  },
  {
    id: "contenidos",
    icon: "✍️",
    title: "Estrategia de Contenidos",
    desc: "Creamos contenido relevante y valioso que atrae a tu audiencia objetivo, mejora tu posicionamiento en buscadores y establece a tu marca como referente en tu industria.",
    features: [
      "Estrategia editorial",
      "Blog corporativo",
      "Contenido para redes sociales",
      "Copywriting persuasivo",
      "Guías y material descargable",
    ],
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Analytics & Reportería",
    desc: "Implementamos herramientas de medición y creamos dashboards personalizados para que tengas visibilidad total del rendimiento de tus acciones de marketing.",
    features: [
      "Implementación de GA4",
      "Configuración de conversiones",
      "Dashboard en tiempo real",
      "Informes ejecutivos mensuales",
      "Análisis de atribución",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2744] text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#f59e0b]/20 text-[#f59e0b] rounded-full mb-4">
              Lo que hacemos
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-gray-300 text-lg">
              {/* TODO: Final copy from CMO via MET-2 */}
              Soluciones de marketing digital completas para cada etapa del crecimiento de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg hover:border-[#f59e0b]/30 transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-bold text-[#1a2744] mb-3">{s.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-[#1a2744] mb-4">
            ¿No sabes qué servicio necesitas?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Conversemos y te recomendamos la mejor solución para tu negocio.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#f59e0b] text-white font-bold text-lg rounded-xl hover:bg-[#d97706] transition-colors"
          >
            Hablar con un experto
          </Link>
        </div>
      </section>
    </>
  );
}
