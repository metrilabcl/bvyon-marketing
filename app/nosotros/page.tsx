import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros · Equipo Agencia 360",
  description:
    "Conoce al equipo detrás de Agencia 360. Fundada por Bastian Vega Yon y Gianpiero Latini en Antofagasta. La agencia de marketing digital líder en el norte de Chile.",
  alternates: { canonical: "https://agencia360.cl/nosotros" },
};

const team = [
  {
    name: "Bastian Vega Yon",
    role: "Co-fundador · Paid Media Specialist",
    bio: "Especialista en publicidad digital con enfoque en performance. Experto en Meta Ads, Google Ads y estrategias de ROAS para el mercado del norte de Chile.",
    initials: "BV",
  },
  {
    name: "Gianpiero Latini",
    role: "Co-fundador · Marketing Specialist",
    bio: "Estratega de marketing con visión integral. Especializado en conectar marcas locales con sus audiencias a través de estrategias digitales basadas en datos.",
    initials: "GL",
  },
];

const values = [
  { icon: "🎯", title: "Orientados a resultados", desc: "Cada estrategia tiene KPIs claros. Tu crecimiento es nuestro éxito — leads, conversiones y ROI, no vanity metrics." },
  { icon: "📊", title: "Datos en cada decisión", desc: "Somos técnicamente rigurosos. Cada peso invertido tiene atribución clara y reportes que cualquiera puede entender." },
  { icon: "🤝", title: "Raíces locales", desc: "Nacimos en Antofagasta. Conocemos el mercado del norte, sus consumidores y sus dinámicas mejor que nadie." },
  { icon: "🚀", title: "Ambición de ser los mejores", desc: "No nos conformamos con 'suficientemente bueno'. Queremos ser la referencia de marketing digital en la región." },
];

const regions = ["Antofagasta", "Iquique", "Arica", "Calama"];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B4B] text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#FF6B2B]/20 text-[#FF6B2B] rounded-full mb-4">
              Quiénes somos
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Nosotros
            </h1>
            <p className="text-gray-300 text-lg">
              La agencia de marketing 360 donde los datos impulsan cada decisión.
              Fundada en Antofagasta, construida para el norte de Chile.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-6"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                Nuestra Misión
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
                Ser la mejor agencia de marketing 360 en la zona norte del país. Creemos que cada empresa del norte de Chile merece acceder a estrategias de marketing de clase mundial, sin importar su tamaño.
              </p>
              <p className="text-[#4A5568] leading-relaxed mb-6">
                Combinamos estrategia de datos, creatividad local y ejecución impecable. No somos generalistas: cada especialidad de nuestro equipo está orientada a generar resultados medibles para tu negocio.
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((city) => (
                  <span key={city} className="px-3 py-1.5 bg-[#E8EDF7] text-[#0D1B4B] text-sm font-medium rounded-full">
                    📍 {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0D1B4B] to-[#152260] rounded-3xl p-10 text-white text-center">
              <div
                className="text-7xl font-black mb-2 text-[#FF6B2B]"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                360°
              </div>
              <p
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                Marketing sin límites
              </p>
              <p className="text-gray-300 text-sm">
                El único socio de marketing full-circle en el norte de Chile — donde los datos impulsan cada decisión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Nuestros Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-[#E8EDF7]">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3
                  className="text-lg font-bold text-[#0D1B4B] mb-2"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {v.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-4"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              Los Fundadores
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
              Dos especialistas unidos por la misión de hacer crecer los negocios del norte de Chile.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center bg-[#F7F9FC] rounded-2xl p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0D1B4B] to-[#152260] flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {member.initials}
                </div>
                <h3
                  className="font-bold text-[#0D1B4B] text-lg"
                  style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                >
                  {member.name}
                </h3>
                <p className="text-[#FF6B2B] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-[#4A5568] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B4B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            Trabajemos juntos
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Cuéntanos sobre tu empresa y te ayudamos a crecer sin límites.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#FF6B2B] text-white font-bold text-lg rounded-xl hover:bg-[#e85e22] transition-colors"
          >
            Contactar al equipo
          </Link>
        </div>
      </section>
    </>
  );
}
