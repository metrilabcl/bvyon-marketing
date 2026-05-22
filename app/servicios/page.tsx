import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios de Marketing Digital",
  description:
    "Gestión de redes sociales, publicidad digital, SEO, branding, diseño web, email marketing y consultoría estratégica para empresas del norte de Chile. Paquetes desde $290.000 CLP/mes.",
  alternates: { canonical: "https://agencia360.cl/servicios" },
};

const services = [
  {
    id: "redes-sociales",
    icon: "📱",
    title: "Gestión de Redes Sociales",
    desc: "Administración completa de Instagram, Facebook, TikTok y LinkedIn: estrategia, calendario editorial, diseño, publicación y community management.",
    features: ["Calendario editorial mensual", "Diseño de publicaciones, stories y reels", "Community management Lun–Sáb", "Estrategia de crecimiento orgánico", "Reporte mensual de métricas"],
  },
  {
    id: "publicidad-digital",
    icon: "📢",
    title: "Publicidad Digital (Paid Media)",
    desc: "Campañas de performance en Meta Ads, Google Ads y TikTok Ads con optimización continua y ROAS transparente.",
    features: ["Google Ads (Search, Display, Shopping)", "Meta Ads & TikTok Ads", "Retargeting y audiencias personalizadas", "A/B testing semanal", "Reporte de inversión, CPC, CPM y ROAS"],
  },
  {
    id: "contenido",
    icon: "🎬",
    title: "Creación de Contenido",
    desc: "Producción de contenido de alta calidad: fotografía, video y redacción para todos los formatos digitales.",
    features: ["Sesiones fotográficas en locación", "Videos cortos para Reels / TikTok (hasta 60 seg)", "Redacción de blog posts y artículos SEO", "Guiones para videos corporativos", "Diseño gráfico para campañas"],
  },
  {
    id: "branding",
    icon: "🎨",
    title: "Branding e Identidad Visual",
    desc: "Construcción y evolución de la identidad de marca: logo, paleta, tipografía, tono de voz y manual de marca.",
    features: ["Diseño o rediseño de logotipo (3 propuestas)", "Manual de identidad visual completo", "Plantillas para redes y presentaciones", "Guía de tono de voz y estilo editorial", "Animaciones e identidad en movimiento"],
  },
  {
    id: "seo",
    icon: "🔍",
    title: "SEO y Posicionamiento Web",
    desc: "Optimización técnica y de contenido para que tus clientes te encuentren en Google antes que a la competencia.",
    features: ["Auditoría técnica SEO completa", "Investigación de keywords regionales y sectoriales", "Optimización on-page (meta tags, headings, contenido)", "Link building local y en directorios", "Reporte mensual de posiciones y tráfico orgánico"],
  },
  {
    id: "diseno-web",
    icon: "🌐",
    title: "Diseño y Desarrollo Web",
    desc: "Sitios web y landing pages modernos, rápidos y optimizados para conversión, con integración de analytics y CRM.",
    features: ["Diseño UI/UX responsive (mobile-first)", "Optimización Core Web Vitals (LCP, CLS, FID)", "Integración GA4, Meta Pixel y CRM", "Formularios de captura de leads", "E-commerce hasta 50 productos"],
  },
  {
    id: "email",
    icon: "✉️",
    title: "Email Marketing y Automatización",
    desc: "Flujos de email marketing automatizados que nutren tus leads y retienen clientes en el tiempo.",
    features: ["Diseño de plantillas responsivas", "Flujos de automatización (bienvenida, carrito, reactivación)", "Segmentación de audiencias", "A/B testing de asuntos y contenido", "Reporte de apertura, clics y conversiones"],
  },
  {
    id: "consultoria",
    icon: "📊",
    title: "Consultoría y Estrategia de Marketing",
    desc: "Dirección estratégica para empresas que necesitan orientación sin delegar la ejecución completa.",
    features: ["Consultoría puntual (sesión de 2 hrs)", "Sprint de estrategia mensual (4 sesiones)", "Auditoría de marketing 360 + roadmap 90 días", "Definición de KPIs y mapa de objetivos", "Revisión de campañas activas"],
  },
];

const packages = [
  {
    name: "Emprendedor",
    price: "$290.000",
    period: "CLP / mes",
    desc: "PyMEs y emprendimientos que inician su presencia digital.",
    features: ["2 canales (Instagram + Facebook)", "12 posts/mes + stories", "Community management Lun–Vie", "Gestión de 1 campaña de pauta", "Reunión mensual (30 min)"],
    highlight: false,
  },
  {
    name: "Crecimiento",
    price: "$750.000",
    period: "CLP / mes",
    desc: "Empresas establecidas que quieren escalar su presencia y captar nuevos clientes.",
    features: ["3 canales (Instagram + Facebook + TikTok/LinkedIn)", "20 posts/mes + stories + 2 reels", "Community management Lun–Sáb", "Hasta 3 campañas de pauta", "1 sesión fotográfica/trimestre", "SEO básico + 1 artículo/mes", "2 reuniones/mes (45 min)"],
    highlight: true,
  },
  {
    name: "Expansión",
    price: "$1.800.000",
    period: "CLP / mes",
    desc: "Marcas en crecimiento, franquicias y empresas con presencia multi-ciudad.",
    features: ["Todos los canales relevantes", "30+ piezas/mes", "Community management 7 días (<4 hrs)", "Campañas ilimitadas de pauta", "Fotos + 2 videos/mes", "SEO completo + 2 artículos/mes", "2 campañas de email/mes", "Account manager dedicado"],
    highlight: false,
  },
  {
    name: "Corporativo",
    price: "Desde $4.500.000",
    period: "CLP / mes",
    desc: "Sector minero, grandes retailers y grupos empresariales.",
    features: ["Suite completa de marketing 360", "Comunicaciones corporativas", "Marketing en español e inglés", "SLA personalizado", "Ejecutivo sénior + visitas en terreno", "Reportes ejecutivos semanales"],
    highlight: false,
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B4B] text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#FF6B2B]/20 text-[#FF6B2B] rounded-full mb-4">
              Lo que hacemos
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Servicios
            </h1>
            <p className="text-gray-300 text-lg">
              Soluciones de marketing digital completas para cada etapa del crecimiento de tu empresa en el norte de Chile.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.id} id={s.id} className="rounded-2xl border border-[#E8EDF7] p-8 hover:shadow-lg hover:border-[#FF6B2B]/30 transition-all">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2
                  className="text-xl font-bold text-[#0D1B4B] mb-3"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {s.title}
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-[#4A5568]">
                      <svg className="w-4 h-4 text-[#FF6B2B] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Pricing */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Paquetes y Tarifas
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
              Precios en CLP. Contrato mínimo 3 meses. El presupuesto de pauta va directo a las plataformas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border transition-all ${
                  pkg.highlight
                    ? "bg-[#0D1B4B] border-[#0D1B4B] text-white shadow-xl ring-2 ring-[#FF6B2B]/40"
                    : "bg-white border-[#E8EDF7] hover:shadow-md"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block px-2 py-0.5 bg-[#FF6B2B] text-[#0D1B4B] text-xs font-bold rounded-full mb-3">
                    ⭐ Popular
                  </span>
                )}
                <h3
                  className={`text-lg font-bold mb-2 ${pkg.highlight ? "text-white" : "text-[#0D1B4B]"}`}
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {pkg.name}
                </h3>
                <div className={`text-xl font-black mb-0.5 ${pkg.highlight ? "text-[#FF6B2B]" : "text-[#0D1B4B]"}`}>
                  {pkg.price}
                </div>
                {pkg.period && (
                  <div className={`text-xs mb-3 ${pkg.highlight ? "text-gray-400" : "text-[#4A5568]"}`}>{pkg.period}</div>
                )}
                <p className={`text-sm leading-relaxed mb-4 ${pkg.highlight ? "text-gray-300" : "text-[#4A5568]"}`}>{pkg.desc}</p>
                <ul className={`space-y-1.5 mb-6 ${pkg.highlight ? "" : ""}`}>
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex gap-1.5 text-xs ${pkg.highlight ? "text-gray-300" : "text-[#4A5568]"}`}>
                      <svg className="w-3.5 h-3.5 text-[#FF6B2B] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    pkg.highlight
                      ? "bg-[#FF6B2B] text-[#0D1B4B] hover:bg-[#e85e22]"
                      : "border border-[#0D1B4B] text-[#0D1B4B] hover:bg-[#0D1B4B] hover:text-white"
                  }`}
                >
                  Solicitar
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-black text-[#0D1B4B] mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            ¿No sabes qué necesitas?
          </h2>
          <p className="text-[#4A5568] text-lg mb-8">
            Conversemos y te recomendamos la mejor solución para tu negocio. Primera consulta sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#FF6B2B] text-[#0D1B4B] font-bold text-lg rounded-xl hover:bg-[#e85e22] transition-colors"
          >
            Hablar con un experto
          </Link>
        </div>
      </section>
    </>
  );
}
