import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, BarChart3, Sparkles, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";
import { getAllPosts, CATEGORY_LABELS } from "@/lib/blog";

export const metadata: Metadata = {
  title: {
    absolute: "Marketing Digital Chile · bvyon — Automatizaciones, SEO e IA",
  },
  description:
    "Especialista freelance en marketing digital en Chile. Automatizaciones, SEO, contenido con IA y diseño web para PYMEs y emprendimientos en Chile.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marketing Digital Chile · bvyon — Automatizaciones, SEO e IA",
    description: "Automatizaciones, SEO y publicidad digital para PYMEs y emprendimientos en Chile.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Digital Chile · bvyon — Automatizaciones, SEO e IA",
    description: "Automatizaciones, SEO y publicidad digital para PYMEs y emprendimientos en Chile.",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: "bvyon marketing",
  description:
    "Especialista freelance en marketing digital: automatizaciones en la nube, SEO, publicidad digital y contenido con IA.",
  url: SITE_URL,
  telephone: "+56937441215",
  email: "metrilabcl@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CL",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  serviceType: "Marketing Digital",
  founder: {
    "@type": "Person",
    name: "Bastian Vega Yon",
    url: `${SITE_URL}/nosotros`,
    jobTitle: "Especialista Freelance en Marketing Digital",
  },
  priceRange: "CLP $290.000–$4.500.000",
  openingHours: "Mo-Fr 09:00-18:00",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "bvyon marketing",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#business` },
};

interface HomeService {
  Icon: LucideIcon;
  badge: string;
  title: string;
  desc: string;
  examples: { label: string; detail: string }[];
}

const services: HomeService[] = [
  {
    Icon: Zap,
    badge: "24/7",
    title: "Automatizaciones en la Nube",
    desc: "Sistemas que trabajan mientras duermes: flujos automatizados, CRM, notificaciones y seguimiento de leads sin intervención manual.",
    examples: [
      { label: "Lead → CRM automático", detail: "Cada formulario del sitio dispara un registro en tu CRM y un WhatsApp al instante." },
      { label: "Seguimiento sin esfuerzo", detail: "Si un lead no responde en 24 hrs, el sistema envía un recordatorio sin que hagas nada." },
      { label: "Reportes automáticos", detail: "Resumen de métricas en tu correo cada lunes, generado sin intervención manual." },
    ],
  },
  {
    Icon: BarChart3,
    badge: "Datos reales",
    title: "Análisis Estratégico Completo",
    desc: "Radiografía total de tu negocio digital: ADS, orgánico, web, competencia y comportamiento de clientes.",
    examples: [
      { label: "Auditoría de ADS", detail: "Identificamos qué campañas queman presupuesto sin convertir." },
      { label: "Benchmark de competencia", detail: "Mapeamos redes, SEO y pauta de tus competidores." },
      { label: "Roadmap de 90 días", detail: "Plan accionable con KPIs claros." },
    ],
  },
  {
    Icon: Sparkles,
    badge: "IA Generativa",
    title: "Contenido y Visuales con IA",
    desc: "Creatividades, copy y visuales de alto impacto generados con IA, alineados a tu marca.",
    examples: [
      { label: "Pack mensual", detail: "30 piezas para Instagram, TikTok y LinkedIn." },
      { label: "Ads creativos A/B", detail: "5 variaciones del mismo anuncio para testear." },
      { label: "Video con IA", detail: "Avatares, voice-over y subtítulos sin producción costosa." },
    ],
  },
  {
    Icon: Globe,
    badge: "Full Conversion",
    title: "Diseño Web Full Conversion",
    desc: "Sitios y landing pages diseñados para convertir visitantes en clientes: UX estratégico y velocidad.",
    examples: [
      { label: "Landing de alta conversión", detail: "Una página, un objetivo: formulario y chat integrado." },
      { label: "Sitio + CRM", detail: "Web conectada a GA4, Meta Pixel y tu CRM." },
      { label: "Velocidad", detail: "Core Web Vitals optimizados para mejor ranking." },
    ],
  },
];

const stats = [
  { value: "5+", label: "Años especialista en marketing digital" },
  { value: "4", label: "Servicios integrales bajo una sola mano" },
  { value: "Chile", label: "Clientes en todo el país" },
  { value: "30 min", label: "Diagnóstico gratis sin costo" },
];

const marqueeTags = [
  "Publicidad Digital",
  "Contenido con IA",
  "Diseño Web",
  "CRM & GA4",
  "Meta & Google Ads",
  "Automatizaciones",
];

const whyUs = [
  { title: "Siempre encendido", desc: "Las automatizaciones trabajan 24/7. Tu negocio genera resultados incluso fuera del horario laboral." },
  { title: "Datos en cada decisión", desc: "Cada estrategia respaldada por métricas reales. Sin suposiciones, sin vanity metrics." },
  { title: "IA al servicio de tu marca", desc: "Contenido generado con IA de vanguardia, revisado para que suene humano y convierta." },
  { title: "Sitios que venden", desc: "Cada página construida para guiar al visitante hacia la acción que importa." },
];

const packages = [
  { name: "Emprendedor", price: "$290.000", period: "CLP / mes", desc: "Para PyMEs que inician su presencia digital." },
  { name: "Crecimiento", price: "$750.000", period: "CLP / mes", desc: "Negocios establecidos que quieren escalar.", highlight: true },
  { name: "Expansión", price: "$1.800.000", period: "CLP / mes", desc: "Marcas con presencia multi-ciudad." },
  { name: "Corporativo", price: "Desde $4.500.000", period: "CLP / mes", desc: "Grandes empresas en crecimiento." },
];

const kicker: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#FF6B2B",
  marginBottom: 18,
};

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* ============ HERO ============ */}
      <section id="top" style={{ position: "relative", overflow: "hidden", paddingTop: 74 }}>
        {/* ambient glows */}
        <div aria-hidden="true" style={{ position: "absolute", top: -120, left: -80, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,43,.18), transparent 70%)", filter: "blur(20px)", animation: "bvBlob 18s ease-in-out infinite" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: 80, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,90,180,.22), transparent 70%)", filter: "blur(20px)", animation: "bvBlob 22s ease-in-out infinite reverse" }} />

        <div className="bv-hero-grid" style={{ position: "relative", zIndex: 2 }}>
          {/* left */}
          <div>
            <span style={kicker}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B2B", display: "inline-block" }} />
              Marketing Digital · Chile
            </span>
            <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-2px", margin: "0 0 22px" }}>
              Marketing<br />digital{" "}
              <span style={{ color: "#FF6B2B" }}>sin límites.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#aab2c5", maxWidth: 520, margin: "0 0 34px" }}>
              Soy Bastian Vega Yon, especialista en automatizaciones en la nube, análisis estratégico, contenido con IA y diseño web orientado a conversión. Resultados reales, sin intermediarios.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="/contacto" className="bv-btn" style={{ padding: "15px 28px", fontSize: 15 }}>
                Solicitar cotización →
              </Link>
              <Link href="/servicios" className="bv-btn-ghost" style={{ padding: "15px 28px", fontSize: 15 }}>
                Ver servicios
              </Link>
            </div>
          </div>

          {/* right — portrait card */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420, animation: "bvFloat 7s ease-in-out infinite" }}>
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 40px 80px -30px rgba(0,0,0,.8)", aspectRatio: "4 / 5" }}>
                <Image src="/banner.webp" alt="Bastian Vega Yon — especialista en marketing digital" fill priority className="object-cover" style={{ objectPosition: "center top" }} sizes="(max-width: 980px) 90vw, 420px" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,9,18,0) 40%, rgba(6,9,18,.85))" }} />
                <div style={{ position: "absolute", left: 18, bottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ display: "grid", placeItems: "center", width: 30, height: 30, borderRadius: 8, background: "#FF6B2B", color: "#060912", fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: 15 }}>bY</span>
                  <span style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 800, fontSize: 16 }}>Bastian Vega Yon</span>
                </div>
              </div>
              <span style={{ position: "absolute", top: 16, right: -10, background: "rgba(11,15,28,.9)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(8px)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "8px 14px", borderRadius: 12, boxShadow: "0 10px 30px -12px rgba(0,0,0,.7)" }}>
                <span style={{ color: "#FF6B2B" }}>24/7</span> Automatización
              </span>
              <span style={{ position: "absolute", top: "44%", left: -14, background: "rgba(11,15,28,.9)", border: "1px solid rgba(255,255,255,.12)", backdropFilter: "blur(8px)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "8px 14px", borderRadius: 12, boxShadow: "0 10px 30px -12px rgba(0,0,0,.7)" }}>
                <span style={{ color: "#FF6B2B" }}>✦</span> IA Generativa
              </span>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div aria-hidden="true" style={{ position: "relative", zIndex: 2, marginTop: 70, padding: "20px 0", borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)", overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
          <div style={{ display: "flex", gap: 0, width: "max-content", animation: "bvMarquee 26s linear infinite" }}>
            {[...marqueeTags, ...marqueeTags, ...marqueeTags, ...marqueeTags].map((t, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 26, paddingRight: 26, fontSize: 15, fontWeight: 700, color: "#5b6479" }}>
                {t}
                <span style={{ color: "#FF6B2B" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section style={{ padding: "70px 0" }}>
        <div className="bv-container">
          <div className="bv-stats-grid">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: 44, color: "#FF6B2B", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 14, color: "#aab2c5", lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="servicios" className="bv-section">
        <div className="bv-container">
          <span style={kicker}>Qué hago</span>
          <h2 className="bv-h2" style={{ marginBottom: 14 }}>Cuatro ángulos que mueven tu negocio</h2>
          <p style={{ color: "#aab2c5", fontSize: 18, maxWidth: 560, margin: "0 0 48px" }}>
            Servicios diseñados para crecer, con ejemplos reales de lo que entrego.
          </p>
          <div className="bv-cards-2">
            {services.map((s) => (
              <article key={s.title} className="bv-card" style={{ padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <span style={{ display: "grid", placeItems: "center", width: 46, height: 46, borderRadius: 13, background: "rgba(255,107,43,.12)", border: "1px solid rgba(255,107,43,.3)", flexShrink: 0 }}>
                    <s.Icon className="w-5 h-5" style={{ color: "#FF6B2B" }} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "#FF6B2B", background: "rgba(255,107,43,.1)", padding: "5px 10px", borderRadius: 999 }}>{s.badge}</span>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 800, margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ color: "#aab2c5", fontSize: 14.5, lineHeight: 1.6, margin: "0 0 18px" }}>{s.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {s.examples.map((ex) => (
                    <div key={ex.label} style={{ display: "flex", gap: 11 }}>
                      <span style={{ color: "#FF6B2B", fontWeight: 800, flexShrink: 0 }}>›</span>
                      <p style={{ margin: 0, fontSize: 13.5, color: "#cdd3e0", lineHeight: 1.5 }}>
                        <strong style={{ color: "#fff" }}>{ex.label}:</strong> {ex.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link href="/servicios" className="bv-btn-ghost" style={{ padding: "14px 26px" }}>
              Ver todos los servicios y tarifas →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ BANNER / QUIÉN SOY ============ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "62vh", display: "flex", alignItems: "center" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.webp" alt="" fill className="object-cover" style={{ objectPosition: "center" }} sizes="100vw" />
        </div>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(6,9,18,.95) 0%, rgba(6,9,18,.7) 45%, rgba(6,9,18,.2) 100%)" }} />
        <div className="bv-container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 520, padding: "60px 0" }}>
            <span style={kicker}>Quién soy</span>
            <h2 className="bv-h2" style={{ marginBottom: 18 }}>
              La persona detrás de tu <span style={{ color: "#FF6B2B" }}>estrategia</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#cdd3e0", margin: "0 0 30px" }}>
              Especialista freelance en marketing digital con enfoque en automatización, análisis de datos y resultados medibles. Trabajo directamente contigo — sin capas, sin intermediarios, sin burocracia.
            </p>
            <Link href="/nosotros" className="bv-btn" style={{ padding: "14px 26px" }}>Conocer más →</Link>
          </div>
        </div>
      </section>

      {/* ============ WHY US ============ */}
      <section className="bv-section">
        <div className="bv-container">
          <div className="bv-why-grid">
            <div>
              <h2 className="bv-h2" style={{ marginBottom: 28 }}>Tu socio de marketing digital sin límites</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {whyUs.map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 14 }}>
                    <span style={{ display: "grid", placeItems: "center", width: 26, height: 26, borderRadius: "50%", background: "rgba(255,107,43,.15)", color: "#FF6B2B", fontWeight: 800, flexShrink: 0, marginTop: 2 }}>✓</span>
                    <div>
                      <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700 }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: 14, color: "#aab2c5", lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "linear-gradient(160deg, #15224d, #0c1430)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 24, padding: 36 }}>
              <div style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: 56, color: "#FF6B2B", lineHeight: 1, marginBottom: 8 }}>360°</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 14px" }}>Marketing Integral</h3>
              <p style={{ color: "#cdd3e0", lineHeight: 1.7, margin: "0 0 22px", fontSize: 15 }}>
                Automatizaciones, estrategia, contenido con IA y diseño web — los cuatro ángulos que mueven negocios digitales hoy. Todo bajo una sola mano.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Automatizaciones 24/7", "Análisis estratégico", "Contenido con IA", "Web que convierte"].map((tag) => (
                  <span key={tag} style={{ padding: "7px 13px", background: "rgba(255,255,255,.07)", borderRadius: 999, fontSize: 12.5, fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="precios" className="bv-section">
        <div className="bv-container">
          <span style={kicker}>Precios</span>
          <h2 className="bv-h2" style={{ marginBottom: 14 }}>Paquetes para cada etapa</h2>
          <p style={{ color: "#aab2c5", fontSize: 18, maxWidth: 520, margin: "0 0 48px" }}>
            Desde emprendimientos hasta grandes marcas en Chile.
          </p>
          <div className="bv-pricing-grid">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  padding: 26,
                  background: pkg.highlight ? "linear-gradient(170deg, #1b2c63, #101a3d)" : "rgba(255,255,255,.03)",
                  border: pkg.highlight ? "1px solid rgba(255,107,43,.5)" : "1px solid rgba(255,255,255,.08)",
                  boxShadow: pkg.highlight ? "0 30px 60px -30px rgba(255,107,43,.35)" : "none",
                }}
              >
                {pkg.highlight && (
                  <span style={{ position: "absolute", top: -11, left: 26, background: "#FF6B2B", color: "#060912", fontSize: 11, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", padding: "4px 12px", borderRadius: 999 }}>Popular</span>
                )}
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 12px" }}>{pkg.name}</h3>
                <div style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: 28, color: pkg.highlight ? "#FF6B2B" : "#fff", lineHeight: 1 }}>{pkg.price}</div>
                <div style={{ fontSize: 12, color: "#6b7488", margin: "6px 0 16px" }}>{pkg.period}</div>
                <p style={{ fontSize: 13.5, color: "#aab2c5", lineHeight: 1.5, margin: "0 0 22px", minHeight: 60 }}>{pkg.desc}</p>
                <Link href="/contacto" className={pkg.highlight ? "bv-btn" : "bv-btn-ghost"} style={{ width: "100%", justifyContent: "center", padding: "11px 0", fontSize: 14 }}>
                  Solicitar
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 12.5, color: "#6b7488", marginTop: 24 }}>
            * Presupuesto de pauta no incluido. Contrato mínimo 3 meses.
          </p>
        </div>
      </section>

      {/* ============ BLOG ============ */}
      <section className="bv-section">
        <div className="bv-container">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 16, marginBottom: 44 }}>
            <div>
              <span style={kicker}>Blog</span>
              <h2 className="bv-h2">Últimas noticias</h2>
            </div>
            <Link href="/blog" className="bv-link" style={{ fontWeight: 600, color: "#FF6B2B" }}>Ver todas →</Link>
          </div>
          <div className="bv-cards-3">
            {recentPosts.map((post) => {
              const href = `/blog/${post.category}/${post.slug}`;
              return (
                <article key={`${post.category}/${post.slug}`} className="bv-card" style={{ overflow: "hidden" }}>
                  <Link href={href} aria-label={post.frontmatter.title} style={{ display: "block", position: "relative", height: 190 }}>
                    <Image src={post.frontmatter.coverImage} alt="" fill className="object-cover" sizes="(max-width: 980px) 100vw, 380px" />
                  </Link>
                  <div style={{ padding: 22 }}>
                    <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", background: "rgba(255,107,43,.1)", padding: "4px 10px", borderRadius: 999, marginBottom: 12 }}>
                      {CATEGORY_LABELS[post.category]}
                    </span>
                    <Link href={href} style={{ textDecoration: "none", color: "#fff" }}>
                      <h3 style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.35, margin: "0 0 8px" }}>{post.frontmatter.title}</h3>
                    </Link>
                    <p style={{ fontSize: 13.5, color: "#aab2c5", lineHeight: 1.55, margin: "0 0 12px" }}>{post.frontmatter.excerpt}</p>
                    <time dateTime={post.frontmatter.date} style={{ fontSize: 12, color: "#6b7488" }}>
                      {new Date(post.frontmatter.date + "T12:00:00").toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ padding: "0 24px 90px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden", borderRadius: 28, padding: "70px 40px", textAlign: "center", background: "linear-gradient(120deg, #FF6B2B, #ff9255)" }}>
          <h2 style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-1px", color: "#060912", margin: "0 0 14px" }}>
            ¿Listo para crecer sin límites?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(6,9,18,.78)", margin: "0 0 30px" }}>
            La primera consulta es sin costo. Cuéntame sobre tu negocio.
          </p>
          <Link href="/contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#060912", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 34px", borderRadius: 14, textDecoration: "none" }}>
            Contáctame ahora →
          </Link>
        </div>
      </section>

      <style>{`
        .bv-hero-grid { max-width: 1180px; margin: 0 auto; padding: clamp(48px,8vw,96px) 24px 0; display: grid; grid-template-columns: 1.1fr .9fr; gap: 56px; align-items: center; }
        .bv-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .bv-cards-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        .bv-cards-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .bv-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .bv-pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        @media (max-width: 980px) {
          .bv-hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .bv-cards-2, .bv-why-grid { grid-template-columns: 1fr; }
          .bv-cards-3, .bv-pricing-grid { grid-template-columns: 1fr 1fr; }
          .bv-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
        }
        @media (max-width: 560px) {
          .bv-cards-3, .bv-pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
