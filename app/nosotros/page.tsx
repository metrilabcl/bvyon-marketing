import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí · Bastian Vega Yon",
  description:
    "Bastian Vega Yon, especialista freelance en marketing digital en Antofagasta. Automatizaciones, SEO y contenido con IA para el norte de Chile. Sin intermediarios.",
  alternates: { canonical: "https://bvyon-marketing.cl/nosotros" },
  openGraph: {
    title: "Sobre mí · Bastian Vega Yon | bvyon marketing",
    description:
      "Especialista freelance en marketing digital basado en Antofagasta. Automatizaciones, SEO y contenido con IA para el norte de Chile.",
    url: "https://bvyon-marketing.cl/nosotros",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mí · Bastian Vega Yon | bvyon marketing",
    description:
      "Especialista freelance en marketing digital basado en Antofagasta. Norte de Chile.",
    images: ["/og-image.png"],
  },
};

const values = [
  { icon: "🎯", title: "Orientado a resultados", desc: "Cada estrategia tiene KPIs claros. Tu crecimiento es mi éxito — leads, conversiones y ROI, no vanity metrics." },
  { icon: "📊", title: "Datos en cada decisión", desc: "Soy técnicamente riguroso. Cada peso invertido tiene atribución clara y reportes que cualquiera puede entender." },
  { icon: "🤝", title: "Raíces locales", desc: "Nacido en Antofagasta. Conozco el mercado del norte, sus consumidores y sus dinámicas mejor que nadie." },
  { icon: "🚀", title: "Sin intermediarios", desc: "Trabajas directamente conmigo — sin cuentas ejecutivas, sin burocracia. Más velocidad, más foco, mejores resultados." },
];

const regions = ["Antofagasta", "Iquique", "Arica", "Calama"];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-accent/20 text-accent rounded-full mb-4">
              Quién soy
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Sobre mí
            </h1>
            <p className="text-gray-300 text-lg">
              Especialista freelance en marketing digital donde los datos impulsan cada decisión.
              Basado en Antofagasta, trabajando para todo el norte de Chile.
            </p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-black text-primary mb-6"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                Bastian Vega Yon
              </h2>
              <p className="text-accent font-semibold mb-4">Especialista Freelance · Marketing Digital</p>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Me especializo en tres pilares que mueven negocios digitales hoy: automatizaciones en la nube que trabajan 24/7, análisis estratégico completo basado en datos reales, y creación de contenido visual con inteligencia artificial.
              </p>
              <p className="text-slate leading-relaxed mb-6">
                Creo que cada empresa del norte de Chile merece acceder a estrategias de marketing de clase mundial, sin importar su tamaño. Trabajo directamente contigo — sin capas, sin intermediarios, con foco total en tu resultado.
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((city) => (
                  <span key={city} className="px-3 py-1.5 bg-primary-light text-primary text-sm font-medium rounded-full">
                    <span aria-hidden="true">📍</span> {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-[#152260] rounded-3xl p-10 text-white text-center">
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-white text-3xl font-black mx-auto mb-6"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                BV
              </div>
              <p
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                Bastian Vega Yon
              </p>
              <p className="text-accent text-sm font-medium mb-4">Especialista Freelance</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Automatizaciones · Análisis Estratégico · Contenido con IA · Diseño Web
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-primary mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Mi forma de trabajar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-primary-light">
                <div className="text-3xl mb-3" aria-hidden="true">{v.icon}</div>
                <h3
                  className="text-lg font-bold text-primary mb-2"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {v.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            Trabajemos juntos
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Cuéntame sobre tu negocio y te ayudo a crecer sin límites.
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
