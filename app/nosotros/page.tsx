import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros · Equipo Agencia 360",
  description:
    "Conoce al equipo detrás de Agencia 360, la agencia de marketing digital líder en el norte de Chile. Nuestra misión, valores y el equipo de expertos.",
  alternates: { canonical: "https://agencia360.cl/nosotros" },
};

// TODO: Replace with real team bios once confirmed with CEO/CMO
const team = [
  {
    name: "Por confirmar",
    role: "CEO & Fundador",
    bio: "Visionario apasionado por conectar empresas del norte de Chile con sus clientes a través del marketing digital.",
    initials: "CE",
  },
  {
    name: "Por confirmar",
    role: "Directora de Marketing",
    bio: "Estratega de marketing con amplia experiencia en campañas digitales para el mercado regional.",
    initials: "DM",
  },
  {
    name: "Por confirmar",
    role: "Diseñadora UX/UI",
    bio: "Especialista en crear experiencias digitales que convierten visitantes en clientes satisfechos.",
    initials: "UX",
  },
  {
    name: "Por confirmar",
    role: "Especialista SEO",
    bio: "Experto en posicionamiento orgánico con track record comprobado en resultados de búsqueda locales.",
    initials: "SE",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Orientados a resultados",
    desc: "Cada estrategia que diseñamos tiene métricas claras de éxito. Tu crecimiento es nuestro éxito.",
  },
  {
    icon: "🤝",
    title: "Transparencia",
    desc: "Reportamos con honestidad, sin tecnicismos vacíos. Siempre sabes dónde están tus inversiones.",
  },
  {
    icon: "🌍",
    title: "Expertos locales",
    desc: "Entendemos el mercado del norte de Chile desde adentro. Eso hace toda la diferencia.",
  },
  {
    icon: "🚀",
    title: "Innovación constante",
    desc: "Nos actualizamos continuamente en las últimas tendencias y herramientas digitales.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2744] text-white pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#f59e0b]/20 text-[#f59e0b] rounded-full mb-4">
              Quiénes somos
            </span>
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              Nosotros
            </h1>
            <p className="text-gray-300 text-lg">
              {/* TODO: Final about copy from CEO/CMO */}
              Un equipo apasionado por el marketing digital, comprometido con el crecimiento de las empresas del norte de Chile.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-6">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {/* TODO: Final mission statement from CEO */}
                Ser el motor de crecimiento digital de las empresas del norte de Chile. Creemos que cada negocio, sin importar su tamaño, merece acceder a estrategias de marketing de clase mundial adaptadas a su realidad local.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nacimos en el norte de Chile porque creemos en su potencial. Conocemos sus desafíos, sus oportunidades y su gente. Eso nos permite crear estrategias que realmente funcionan en este mercado.
              </p>
            </div>
            <div className="relative">
              {/* Visual placeholder — TODO: Replace with actual agency photo */}
              <div className="bg-gradient-to-br from-[#1a2744] to-[#1e3a6e] rounded-3xl p-10 text-white text-center">
                <div className="text-6xl font-black mb-2 text-[#f59e0b]">360°</div>
                <p className="text-xl font-bold mb-2">Visión completa</p>
                <p className="text-gray-300 text-sm">Marketing integral para el norte de Chile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-4">
              Nuestros Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a2744] mb-4">
              El Equipo
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              {/* TODO: Update team section when team bios confirmed with CEO */}
              Profesionales apasionados por el marketing digital y comprometidos con tu éxito.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.role} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a2744] to-[#1e3a6e] flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#1a2744]">{member.name}</h3>
                <p className="text-[#f59e0b] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2744] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">
            Trabajemos juntos
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Cuéntanos sobre tu empresa y te ayudamos a crecer.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#f59e0b] text-white font-bold text-lg rounded-xl hover:bg-[#d97706] transition-colors"
          >
            Contactar al equipo
          </Link>
        </div>
      </section>
    </>
  );
}
