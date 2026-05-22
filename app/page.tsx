import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agencia 360 | Marketing sin límites en el Norte de Chile",
  alternates: { canonical: "https://agencia360.cl" },
};

const services = [
  { icon: "📱", title: "Redes Sociales", desc: "Gestión profesional de Instagram, Facebook, TikTok y LinkedIn para construir comunidad y engagement real." },
  { icon: "📣", title: "Publicidad Digital", desc: "Campañas de alto impacto en Meta Ads, Google Ads y TikTok Ads con ROAS claro y optimización continua." },
  { icon: "🎬", title: "Creación de Contenido", desc: "Fotografía, video y redacción de alto nivel para todos los formatos digitales." },
  { icon: "🎨", title: "Branding", desc: "Construcción y evolución de identidad de marca: logo, paleta, tipografía y manual de marca." },
  { icon: "🔍", title: "SEO", desc: "Posicionamiento orgánico con investigación de palabras clave regionales y optimización técnica." },
  { icon: "🌐", title: "Diseño Web", desc: "Sitios web y landing pages modernos, rápidos y optimizados para conversión." },
];

const stats = [
  { value: "50+", label: "Clientes satisfechos" },
  { value: "200+", label: "Campañas ejecutadas" },
  { value: "5x", label: "ROI promedio" },
  { value: "98%", label: "Satisfacción" },
];

const whyUs = [
  { title: "Raíces en el norte", desc: "Entendemos el mercado del norte de Chile como nadie más: la cultura, el consumidor y la competencia local." },
  { title: "Datos en cada decisión", desc: "Cada estrategia está respaldada por métricas reales. Leads, conversiones y ROI — no vanity metrics." },
  { title: "Cobertura 360°", desc: "Estrategia, contenido, pauta, web y branding bajo un mismo techo, sin coordinaciones externas." },
  { title: "Transparencia total", desc: "Reportes claros con atribución de cada peso invertido. Siempre sabes dónde va tu inversión." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-[#0D1B4B] via-[#152260] to-[#0D1B4B] text-white pt-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#FF6B2B]/20 text-[#FF6B2B] rounded-full mb-6">
              Marketing 360° · Norte de Chile
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Marketing sin límites para el{" "}
              <span className="text-[#FF6B2B]">norte de Chile</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              Somos la agencia de marketing 360 líder en Antofagasta, Iquique, Arica y Calama. Combinamos estrategia de datos, creatividad local y ejecución impecable para conectar tu marca con las personas correctas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#FF6B2B] text-white font-bold rounded-xl hover:bg-[#e85e22] transition-colors text-center text-lg"
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
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg className="relative block w-full" style={{height: "60px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,60 C300,0 900,0 1200,60 L1200,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-4xl font-black text-[#0D1B4B] mb-1"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {s.value}
                </div>
                <div className="text-sm text-[#4A5568]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Nuestros Servicios
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
              Todo lo que tu empresa necesita para crecer en el mundo digital, bajo un mismo techo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-[#E8EDF7] hover:shadow-lg hover:border-[#FF6B2B]/30 transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3
                  className="text-lg font-bold text-[#0D1B4B] mb-2 group-hover:text-[#FF6B2B] transition-colors"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/servicios"
              className="inline-block px-8 py-3.5 bg-[#0D1B4B] text-white font-semibold rounded-xl hover:bg-[#0a1540] transition-colors"
            >
              Ver todos los servicios y tarifas
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-6"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                El único socio de marketing full-circle en el norte
              </h2>
              <div className="space-y-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B2B]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#FF6B2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D1B4B]">{item.title}</h4>
                      <p className="text-[#4A5568] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0D1B4B] to-[#152260] rounded-3xl p-8 text-white">
              <div
                className="text-5xl font-black mb-2 text-[#FF6B2B]"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                360°
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                Marketing Integral
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Cubrimos todos los ángulos de tu presencia digital — estrategia, contenido, pauta, web y branding — para que nada quede al azar.
              </p>
              <div className="text-sm text-gray-400 mb-2">Cobertura regional:</div>
              <div className="flex flex-wrap gap-2">
                {["Antofagasta", "Iquique", "Arica", "Calama"].map((city) => (
                  <span key={city} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">{city}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Paquetes para cada etapa
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
              Desde emprendimientos hasta grandes empresas del sector minero.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Emprendedor", price: "$290.000", period: "CLP / mes", desc: "Para PyMEs que inician su presencia digital." },
              { name: "Crecimiento", price: "$750.000", period: "CLP / mes", desc: "Empresas establecidas que quieren escalar.", highlight: true },
              { name: "Expansión", price: "$1.800.000", period: "CLP / mes", desc: "Marcas con presencia multi-ciudad." },
              { name: "Corporativo", price: "A cotizar", period: "", desc: "Sector minero y grandes empresas." },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border transition-all ${
                  pkg.highlight
                    ? "bg-[#0D1B4B] border-[#0D1B4B] text-white shadow-xl scale-105"
                    : "bg-white border-[#E8EDF7] hover:shadow-md"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block px-2 py-0.5 bg-[#FF6B2B] text-white text-xs font-bold rounded-full mb-3">
                    Popular
                  </span>
                )}
                <h3
                  className={`text-lg font-bold mb-2 ${pkg.highlight ? "text-white" : "text-[#0D1B4B]"}`}
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {pkg.name}
                </h3>
                <div className={`text-2xl font-black mb-0.5 ${pkg.highlight ? "text-[#FF6B2B]" : "text-[#0D1B4B]"}`}>
                  {pkg.price}
                </div>
                {pkg.period && (
                  <div className={`text-xs mb-3 ${pkg.highlight ? "text-gray-400" : "text-[#4A5568]"}`}>{pkg.period}</div>
                )}
                <p className={`text-sm leading-relaxed mb-4 ${pkg.highlight ? "text-gray-300" : "text-[#4A5568]"}`}>{pkg.desc}</p>
                <Link
                  href="/contacto"
                  className={`block text-center py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    pkg.highlight
                      ? "bg-[#FF6B2B] text-white hover:bg-[#e85e22]"
                      : "border border-[#0D1B4B] text-[#0D1B4B] hover:bg-[#0D1B4B] hover:text-white"
                  }`}
                >
                  Solicitar
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#4A5568] mt-6">
            * Presupuesto de pauta no incluido. Contrato mínimo 3 meses.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FF6B2B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            ¿Listo para crecer sin límites?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            La primera consulta es sin costo. Cuéntanos sobre tu empresa.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#0D1B4B] text-white font-bold text-lg rounded-xl hover:bg-[#0a1540] transition-colors"
          >
            Contáctanos ahora
          </Link>
        </div>
      </section>
    </>
  );
}
