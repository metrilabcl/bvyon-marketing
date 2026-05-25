import type { Metadata } from "next";
import Link from "next/link";
import { Zap, BarChart3, Sparkles, Globe, Megaphone, Search, Palette, Compass, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de Marketing Digital",
  description:
    "Automatizaciones 24/7, SEO, contenido con IA y diseño web para empresas del norte de Chile. Paquetes desde $290.000 CLP/mes. Primera consulta sin costo.",
  alternates: { canonical: "https://bvyon-marketing.cl/servicios" },
  openGraph: {
    title: "Servicios de Marketing Digital | bvyon marketing",
    description:
      "Automatizaciones, SEO, publicidad digital y contenido con IA para empresas del norte de Chile.",
    url: "https://bvyon-marketing.cl/servicios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Marketing Digital | bvyon marketing",
    description:
      "Automatizaciones, SEO, publicidad digital y contenido con IA para empresas del norte de Chile.",
  },
};

interface ServicioCard {
  id: string;
  Icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
}

const services: ServicioCard[] = [
  {
    id: "automatizaciones",
    Icon: Zap,
    title: "Automatizaciones en la Nube 24/7",
    desc: "Sistemas que trabajan mientras duermes: flujos automatizados, CRM, notificaciones y seguimiento de leads sin intervención manual. Tu negocio siempre activo.",
    features: ["Flujos de automatización con n8n / Make / Zapier", "Integración CRM (HubSpot, Pipedrive, Notion)", "Notificaciones y seguimiento automático de leads", "Reportes automáticos y alertas de negocio", "Chatbots y respuestas automáticas 24/7"],
  },
  {
    id: "analisis-estrategico",
    Icon: BarChart3,
    title: "Análisis Estratégico Completo",
    desc: "Radiografía total de tu negocio digital: ADS, orgánico, web, competencia y comportamiento de clientes. Cada decisión respaldada en datos reales, no suposiciones.",
    features: ["Auditoría completa de ADS (Meta, Google, TikTok)", "Análisis de tráfico orgánico y SEO", "Benchmarking de competidores", "Análisis de comportamiento de clientes", "Roadmap estratégico 90 días con KPIs"],
  },
  {
    id: "contenido-ia",
    Icon: Sparkles,
    title: "Contenido y Visuales con IA",
    desc: "Creatividades, copy y visuales de alto impacto generados con inteligencia artificial, alineados a tu marca y optimizados para conversión en cada plataforma.",
    features: ["Copy para ads, redes y landing pages", "Visuales y creatividades con IA (imagen + video)", "Calendarios editoriales y estrategia de contenido", "Reels, stories y piezas para TikTok / Instagram", "Prompts y sistemas de generación de contenido replicable"],
  },
  {
    id: "diseno-web",
    Icon: Globe,
    title: "Diseño Web Full Conversion",
    desc: "Sitios web y landing pages modernos, rápidos y optimizados para conversión, con integración de analytics y CRM.",
    features: ["Diseño UI/UX responsive (mobile-first)", "Optimización Core Web Vitals (LCP, CLS, FID)", "Integración GA4, Meta Pixel y CRM", "Formularios de captura de leads", "E-commerce hasta 50 productos"],
  },
  {
    id: "publicidad-digital",
    Icon: Megaphone,
    title: "Publicidad Digital (Paid Media)",
    desc: "Campañas de performance en Meta Ads, Google Ads y TikTok Ads con optimización continua y ROAS transparente.",
    features: ["Google Ads (Search, Display, Shopping)", "Meta Ads & TikTok Ads", "Retargeting y audiencias personalizadas", "A/B testing semanal", "Reporte de inversión, CPC, CPM y ROAS"],
  },
  {
    id: "seo",
    Icon: Search,
    title: "SEO y Posicionamiento Web",
    desc: "Optimización técnica y de contenido para que tus clientes te encuentren en Google antes que a la competencia.",
    features: ["Auditoría técnica SEO completa", "Investigación de keywords regionales y sectoriales", "Optimización on-page (meta tags, headings, contenido)", "Link building local y en directorios", "Reporte mensual de posiciones y tráfico orgánico"],
  },
  {
    id: "branding",
    Icon: Palette,
    title: "Branding e Identidad Visual",
    desc: "Construcción y evolución de la identidad de marca: logo, paleta, tipografía, tono de voz y manual de marca.",
    features: ["Diseño o rediseño de logotipo (3 propuestas)", "Manual de identidad visual completo", "Plantillas para redes y presentaciones", "Guía de tono de voz y estilo editorial", "Animaciones e identidad en movimiento"],
  },
  {
    id: "consultoria",
    Icon: Compass,
    title: "Consultoría y Estrategia",
    desc: "Orientación estratégica para empresas que necesitan dirección sin delegar la ejecución completa.",
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
      <section className="bg-primary text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-accent/20 text-accent rounded-full mb-4">
              Lo que hacemos
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Servicios
            </h1>
            <p className="text-gray-300 text-lg">
              Automatizaciones, análisis estratégico, contenido con IA, diseño web, publicidad digital, branding y más — todo lo que necesita tu negocio digital en el norte de Chile.
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
                className="relative overflow-hidden bg-white rounded-2xl border border-[#E8EDF7] p-8 hover:shadow-xl hover:border-[#FF6B2B]/30 transition-all group"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-[#FF6B2B] transition-all duration-200 group-hover:w-1.5" aria-hidden="true" />
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#FF6B2B]/10 mb-5">
                  <s.Icon className="w-10 h-10 text-[#0D1B4B]" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h2
                  className="text-xl font-bold text-[#0D1B4B] mb-3"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {s.title}
                </h2>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-slate">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
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
      <section className="py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-primary mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Paquetes y Tarifas
            </h2>
            <p className="text-slate text-lg max-w-xl mx-auto">
              Precios en CLP. Contrato mínimo 3 meses. El presupuesto de pauta va directo a las plataformas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border transition-all ${
                  pkg.highlight
                    ? "bg-primary border-primary text-white shadow-xl ring-2 ring-accent/40"
                    : "bg-white border-primary-light hover:shadow-md"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block px-2 py-0.5 bg-accent text-primary text-xs font-bold rounded-full mb-3">
                    Popular
                  </span>
                )}
                <h3
                  className={`text-lg font-bold mb-2 ${pkg.highlight ? "text-white" : "text-primary"}`}
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {pkg.name}
                </h3>
                <div className={`text-xl font-black mb-0.5 ${pkg.highlight ? "text-accent" : "text-primary"}`}>
                  {pkg.price}
                </div>
                {pkg.period && (
                  <div className={`text-xs mb-3 ${pkg.highlight ? "text-gray-400" : "text-slate"}`}>{pkg.period}</div>
                )}
                <p className={`text-sm leading-relaxed mb-4 ${pkg.highlight ? "text-gray-300" : "text-slate"}`}>{pkg.desc}</p>
                <ul className={`space-y-1.5 mb-6 ${pkg.highlight ? "" : ""}`}>
                  {pkg.features.map((f) => (
                    <li key={f} className={`flex gap-1.5 text-xs ${pkg.highlight ? "text-gray-300" : "text-slate"}`}>
                      <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contacto"
                  className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    pkg.highlight
                      ? "bg-accent text-primary hover:bg-accent-hover"
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
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
            className="text-3xl font-black text-primary mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            ¿No sabes qué necesitas?
          </h2>
          <p className="text-slate text-lg mb-8">
            Conversemos y te recomiendo la mejor solución para tu negocio. Primera consulta sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-accent text-primary font-bold text-lg rounded-xl hover:bg-accent-hover transition-colors"
          >
            Solicitar cotización
          </Link>
        </div>
      </section>
    </>
  );
}
