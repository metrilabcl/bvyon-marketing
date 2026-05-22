import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agencia 360 | Marketing Digital en el Norte de Chile",
  alternates: { canonical: "https://agencia360.cl" },
};

// TODO: Replace service list with final offerings from MET-2
const services = [
  {
    icon: "📈",
    title: "Marketing Digital",
    desc: "Estrategias integrales para hacer crecer tu marca en el mundo digital.",
  },
  {
    icon: "🔍",
    title: "SEO & Posicionamiento",
    desc: "Posiciona tu negocio en los primeros resultados de Google.",
  },
  {
    icon: "📱",
    title: "Redes Sociales",
    desc: "Gestión profesional de tus cuentas para conectar con tu audiencia.",
  },
  {
    icon: "📣",
    title: "Publicidad Digital",
    desc: "Campañas de alto impacto en Google Ads, Meta Ads y más.",
  },
  {
    icon: "🎨",
    title: "Diseño Web",
    desc: "Sitios web modernos, rápidos y optimizados para conversión.",
  },
  {
    icon: "✍️",
    title: "Contenidos",
    desc: "Creamos contenido relevante que atrae y convierte visitantes.",
  },
];

// TODO: Replace with real client logos once available
const stats = [
  { value: "50+", label: "Clientes satisfechos" },
  { value: "200+", label: "Campañas ejecutadas" },
  { value: "5x", label: "ROI promedio" },
  { value: "98%", label: "Tasa de satisfacción" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#1a2744] via-[#1e3a6e] to-[#1a2744] text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#f59e0b]/20 text-[#f59e0b] rounded-full mb-6">
              {/* TODO: Update tagline from MET-2 copy */}
              Marketing 360° · Norte de Chile
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              {/* TODO: Final headline from CMO via MET-2 */}
              Potencia tu marca con marketing que{" "}
              <span className="text-[#f59e0b]">genera resultados reales</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              {/* TODO: Final subheadline from CMO */}
              Somos la agencia de marketing 360 líder en el norte de Chile. Diseñamos estrategias digitales integrales que conectan tu marca con las personas correctas en el momento correcto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#f59e0b] text-white font-bold rounded-xl hover:bg-[#d97706] transition-colors text-center text-lg"
              >
                Solicitar cotización
              </Link>
              <Link
                href="/servicios"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-white hover:bg-white/10 transition-colors text-center text-lg"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full" style={{height: "60px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,60 C300,0 900,0 1200,60 L1200,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-[#1a2744] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              {/* TODO: Final copy from CMO */}
              Todo lo que tu empresa necesita para crecer en el mundo digital.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#f59e0b]/30 transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2744] mb-2 group-hover:text-[#f59e0b] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-block px-8 py-3.5 bg-[#1a2744] text-white font-semibold rounded-xl hover:bg-[#0f1b35] transition-colors"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-6">
                {/* TODO: Final copy from CMO */}
                ¿Por qué elegir Agencia 360?
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Expertos locales", desc: "Conocemos el mercado del norte de Chile como nadie más." },
                  { title: "Enfoque en resultados", desc: "Cada acción que tomamos está orientada a métricas de negocio reales." },
                  { title: "Estrategia integral", desc: "No somos especialistas en una sola área — cubrimos todo el ecosistema digital." },
                  { title: "Transparencia total", desc: "Reportes claros, sin tecnicismos, con foco en lo que importa para tu negocio." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#f59e0b]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#f59e0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a2744]">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a2744] to-[#1e3a6e] rounded-3xl p-8 text-white">
              <div className="text-5xl font-black mb-2">360°</div>
              <h3 className="text-2xl font-bold mb-4">Marketing Integral</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cubrimos todos los ángulos de tu presencia digital para que nada quede al azar.
              </p>
              <Link
                href="/nosotros"
                className="inline-block px-6 py-3 bg-[#f59e0b] text-white font-semibold rounded-xl hover:bg-[#d97706] transition-colors"
              >
                Conoce el equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f59e0b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {/* TODO: Final CTA copy from CMO */}
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Conversemos. La primera consulta es sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#1a2744] text-white font-bold text-lg rounded-xl hover:bg-[#0f1b35] transition-colors"
          >
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}
