import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "bvyon marketing | Marketing Digital en el Norte de Chile",
  },
  description:
    "Especialista freelance en marketing digital en el norte de Chile. Automatizaciones, SEO, contenido con IA y diseño web para empresas de Antofagasta e Iquique.",
  alternates: { canonical: "https://bvyon-marketing.cl" },
  openGraph: {
    title: "bvyon marketing | Marketing Digital en el Norte de Chile",
    description: "Marketing sin límites. Automatizaciones, SEO y publicidad digital para el norte de Chile.",
    url: "https://bvyon-marketing.cl",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bvyon marketing | Marketing Digital en el Norte de Chile",
    description: "Marketing sin límites. Automatizaciones, SEO y publicidad digital para el norte de Chile.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://bvyon-marketing.cl/#business",
  name: "bvyon marketing",
  description:
    "Especialista freelance en marketing digital: automatizaciones en la nube, SEO, publicidad digital y contenido con IA. Norte de Chile.",
  url: "https://bvyon-marketing.cl",
  telephone: "+56937441215",
  email: "metrilabcl@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antofagasta",
    addressRegion: "Región de Antofagasta",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.6509,
    longitude: -70.3975,
  },
  areaServed: [
    { "@type": "City", name: "Antofagasta" },
    { "@type": "City", name: "Iquique" },
    { "@type": "City", name: "Arica" },
    { "@type": "City", name: "Calama" },
  ],
  founder: {
    "@type": "Person",
    name: "Bastian Vega Yon",
    url: "https://bvyon-marketing.cl/nosotros",
    jobTitle: "Especialista Freelance en Marketing Digital",
  },
  priceRange: "CLP $290.000–$4.500.000",
  openingHours: "Mo-Fr 09:00-18:00",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bvyon-marketing.cl/#website",
  name: "bvyon marketing",
  url: "https://bvyon-marketing.cl",
  publisher: { "@id": "https://bvyon-marketing.cl/#business" },
};

const services = [
  {
    icon: "⚡",
    color: "from-[#0D1B4B] to-[#152260]",
    badge: "24/7",
    title: "Automatizaciones en la Nube",
    desc: "Sistemas que trabajan mientras duermes: flujos automatizados, CRM, notificaciones y seguimiento de leads sin intervención manual.",
    examples: [
      { label: "Lead → CRM automático", detail: "Cada formulario del sitio dispara un registro en tu CRM y envía un WhatsApp al instante." },
      { label: "Seguimiento sin esfuerzo", detail: "Si un lead no responde en 24 hrs, el sistema envía un recordatorio por email o WhatsApp sin que hagas nada." },
      { label: "Reportes automáticos", detail: "Cada lunes recibes un resumen de métricas de la semana en tu correo, generado sin intervención manual." },
    ],
  },
  {
    icon: "📊",
    color: "from-[#1a3a6b] to-[#0D1B4B]",
    badge: "Datos reales",
    title: "Análisis Estratégico Completo",
    desc: "Radiografía total de tu negocio digital: ADS, orgánico, web, competencia y comportamiento de clientes.",
    examples: [
      { label: "Auditoría de ADS", detail: "Revisamos tus campañas activas e identificamos qué está quemando presupuesto sin convertir." },
      { label: "Benchmark de competencia", detail: "Mapeamos qué están haciendo tus competidores en redes, SEO y pauta para encontrar tus ventanas de oportunidad." },
      { label: "Roadmap de 90 días", detail: "Entregamos un plan accionable con KPIs claros: qué hacer primero, por qué y cuánto invertir." },
    ],
  },
  {
    icon: "✨",
    color: "from-[#2d1a4b] to-[#0D1B4B]",
    badge: "IA generativa",
    title: "Contenido y Visuales con IA",
    desc: "Creatividades, copy y visuales de alto impacto generados con inteligencia artificial, alineados a tu marca.",
    examples: [
      { label: "Pack mensual de contenido", detail: "30 piezas listas para publicar: imágenes, carruseles y copy para Instagram, TikTok y LinkedIn." },
      { label: "Ads creativos A/B", detail: "Generamos 5 variaciones visuales del mismo anuncio para testear cuál convierte mejor." },
      { label: "Video con IA en minutos", detail: "Avatares, voice-over y subtítulos generados con IA para campañas de video sin producción costosa." },
    ],
  },
  {
    icon: "🌐",
    color: "from-[#0D1B4B] to-[#1a2f5e]",
    badge: "Full conversion",
    title: "Diseño Web Full Conversion",
    desc: "Sitios web y landing pages diseñados para convertir visitantes en clientes: UX estratégico y velocidad.",
    examples: [
      { label: "Landing de alta conversión", detail: "Una página enfocada en un solo objetivo: capturar leads o cerrar ventas, con formulario y chat integrado." },
      { label: "Sitio corporativo con CRM", detail: "Web institucional conectada a GA4, Meta Pixel y tu CRM para rastrear cada visitante y lead." },
      { label: "Optimización de velocidad", detail: "Mejoramos Core Web Vitals para que Google te posicione mejor y los usuarios no abandonen antes de cargar." },
    ],
  },
];

const stats = [
  { value: "50+", label: "Clientes satisfechos" },
  { value: "200+", label: "Campañas ejecutadas" },
  { value: "5x", label: "ROI promedio" },
  { value: "98%", label: "Satisfacción" },
];

const whyUs = [
  { title: "Siempre encendido", desc: "Las automatizaciones en la nube trabajan las 24 horas, los 7 días. Tu negocio genera resultados incluso fuera del horario laboral." },
  { title: "Datos en cada decisión", desc: "Cada estrategia está respaldada por métricas reales: ADS, orgánico, web, competencia y clientes. Sin suposiciones, sin vanity metrics." },
  { title: "IA al servicio de tu marca", desc: "Contenido generado con inteligencia artificial de vanguardia, revisado y ajustado para que suene humano y convierta de verdad." },
  { title: "Sitios que venden", desc: "No solo diseño bonito — cada página está construida para guiar al visitante hacia la acción que importa: cotizar, comprar o contactar." },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      {/* Hero — Profile layout with founder photo */}
      <section className="min-h-screen flex items-center text-white pt-16 relative overflow-hidden bg-[#060c1e]">
        {/* Brand gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B4B] via-[#091438] to-[#060c1e]" />
        {/* Subtle ambient glow behind photo (right half) */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden lg:block"
          style={{ backgroundImage: "url('/banner.png')", backgroundSize: "cover", backgroundPosition: "center top", filter: "blur(48px)" }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text content */}
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#FF6B2B]/20 text-[#FF6B2B] rounded-full mb-6">
                Marketing Digital · Chile
              </span>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
                style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
              >
                Marketing sin{" "}
                <span className="text-[#FF6B2B]">límites</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
                Soy Bastian Vega Yon, especialista en automatizaciones en la nube, análisis estratégico digital, contenido con IA y diseño web orientado a conversión. Resultados reales, sin intermediarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="px-8 py-4 bg-[#FF6B2B] text-[#0D1B4B] font-bold rounded-xl hover:bg-[#e85e22] transition-colors text-center text-lg"
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
            {/* Right — profile photo */}
            <div className="hidden lg:flex justify-center lg:justify-end items-center">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#FF6B2B]/40 to-[#0D1B4B]/60 blur-md" />
                {/* Portrait card */}
                <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden border-2 border-[#FF6B2B]/50 shadow-2xl">
                  <Image
                    src="/banner.png"
                    alt="Bastian Vega Yon — Especialista en marketing digital"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1280px) 320px, 384px"
                  />
                </div>
                {/* Decorative accent dots */}
                <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-[#FF6B2B]/25 border border-[#FF6B2B]/40" />
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#FF6B2B]/35 border border-[#FF6B2B]/60" />
                {/* Name tag */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FF6B2B] text-[#0D1B4B] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Bastian Vega Yon · bvyon
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg aria-hidden="true" className="relative block w-full" style={{height: "60px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
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

      {/* Banner — full-bleed landscape background */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        {/* Background: landscape scene */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/hero.png')", backgroundSize: "cover", backgroundPosition: "center top" }}
        />
        {/* Horizontal gradient: dark left (text legibility) → transparent right (person visible) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/10" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#F7F9FC] to-transparent" />

        <div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center"
          style={{ minHeight: "70vh" }}
        >
          <div className="max-w-lg text-white py-20">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-white/10 text-white/70 rounded-full mb-6">
              Quién soy
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6"
              style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
            >
              La persona detrás de tu{" "}
              <span className="text-[#FF6B2B]">estrategia</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Soy un especialista freelance en marketing digital con enfoque en automatización, análisis de datos y resultados medibles. Trabajo directamente contigo — sin capas, sin intermediarios, sin burocracia.
            </p>
            <Link
              href="/nosotros"
              className="inline-block px-8 py-4 bg-[#FF6B2B] text-[#0D1B4B] font-bold rounded-xl hover:bg-[#e85e22] transition-colors text-lg"
            >
              Conocer más
            </Link>
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
              Mis Servicios
            </h2>
            <p className="text-[#4A5568] text-lg max-w-xl mx-auto">
              Mis servicios para hacer crecer tu negocio digital. Con ejemplos reales de lo que hago.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8EDF7] hover:shadow-xl hover:border-[#FF6B2B]/30 transition-all group"
              >
                {/* Visual header */}
                <div className={`bg-gradient-to-br ${s.color} px-6 pt-7 pb-6 flex items-start gap-4`}>
                  <div className="text-4xl" aria-hidden="true">{s.icon}</div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 bg-[#FF6B2B] text-[#0D1B4B] text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                      {s.badge}
                    </span>
                    <h3
                      className="text-lg font-bold text-white leading-snug group-hover:text-[#FF6B2B] transition-colors"
                      style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
                    >
                      {s.title}
                    </h3>
                  </div>
                </div>
                {/* Body */}
                <div className="px-6 py-5">
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{s.desc}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B2B] mb-3">Ejemplos prácticos</p>
                  <div className="space-y-3">
                    {s.examples.map((ex) => (
                      <div key={ex.label} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B] shrink-0 mt-2" />
                        <div>
                          <span className="text-sm font-semibold text-[#0D1B4B]">{ex.label}:</span>{" "}
                          <span className="text-sm text-[#4A5568]">{ex.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                Tu socio de marketing digital sin límites
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
                Automatizaciones, estrategia, contenido con IA y diseño web — los cuatro ángulos que mueven negocios digitales hoy. Todo bajo una sola mano, con foco total en tu resultado.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Automatizaciones 24/7", "Análisis estratégico", "Contenido con IA", "Web que convierte"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">{tag}</span>
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
              { name: "Corporativo", price: "Desde $4.500.000", period: "CLP / mes", desc: "Sector minero y grandes empresas." },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border transition-all ${
                  pkg.highlight
                    ? "bg-[#0D1B4B] border-[#0D1B4B] text-white shadow-xl lg:scale-105"
                    : "bg-white border-[#E8EDF7] hover:shadow-md"
                }`}
              >
                {pkg.highlight && (
                  <span className="inline-block px-2 py-0.5 bg-[#FF6B2B] text-[#0D1B4B] text-xs font-bold rounded-full mb-3">
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
                      ? "bg-[#FF6B2B] text-[#0D1B4B] hover:bg-[#e85e22]"
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
            className="text-3xl sm:text-4xl font-black text-[#0D1B4B] mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            ¿Listo para crecer sin límites?
          </h2>
          <p className="text-[#0D1B4B]/80 text-lg mb-8">
            La primera consulta es sin costo. Cuéntame sobre tu negocio.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#0D1B4B] text-white font-bold text-lg rounded-xl hover:bg-[#0a1540] transition-colors"
          >
            Contáctame ahora
          </Link>
        </div>
      </section>
    </>
  );
}
