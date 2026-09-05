import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, BarChart3, Sparkles, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";

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
  title: string;
  desc: string;
}

const services: HomeService[] = [
  {
    Icon: Zap,
    title: "Automatización",
    desc: "Conecta tus formularios, contactos y seguimiento comercial.",
  },
  {
    Icon: BarChart3,
    title: "Estrategia digital",
    desc: "Identifica qué mejorar y dónde invertir.",
  },
  {
    Icon: Sparkles,
    title: "Contenido con IA",
    desc: "Piezas visuales y anuncios alineados con tu marca.",
  },
  {
    Icon: Globe,
    title: "Diseño web",
    desc: "Sitios claros, rápidos y orientados a generar consultas.",
  },
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
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* ============ HERO ============ */}
      <section id="top" style={{ position: "relative", overflow: "hidden", paddingTop: 74 }}>
        {/* ambient glow */}
        <div aria-hidden="true" style={{ position: "absolute", top: 80, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,90,180,.18), transparent 70%)", filter: "blur(20px)", animation: "bvBlob 22s ease-in-out infinite reverse" }} />

        <div className="bv-hero-grid" style={{ position: "relative", zIndex: 2 }}>
          {/* left */}
          <div>
            <span style={kicker}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B2B", display: "inline-block" }} />
              Marketing Digital · Chile
            </span>
            <h1 style={{ fontSize: "clamp(38px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 22px" }}>
              Marketing digital para hacer{" "}
              <span style={{ color: "#FF6B2B" }}>crecer tu negocio.</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "#aab2c5", maxWidth: 520, margin: "0 0 34px" }}>
              Diseño sitios web, automatizo procesos y desarrollo estrategias para captar clientes.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="/contacto" className="bv-btn" style={{ padding: "15px 28px", fontSize: 15 }}>
                Solicitar diagnóstico gratis →
              </Link>
              <Link href="/servicios" className="bv-btn-ghost" style={{ padding: "15px 28px", fontSize: 15 }}>
                Ver servicios
              </Link>
            </div>
          </div>

          {/* right — portrait card */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 420 }}>
              <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", border: "1px solid rgba(255,255,255,.1)", boxShadow: "0 40px 80px -30px rgba(0,0,0,.8)", aspectRatio: "4 / 5" }}>
                <Image src="/banner.webp" alt="Bastian Vega Yon — especialista en marketing digital" fill priority className="object-cover" style={{ objectPosition: "center top" }} sizes="(max-width: 980px) 90vw, 420px" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,9,18,0) 40%, rgba(6,9,18,.85))" }} />
                <div style={{ position: "absolute", left: 18, bottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ display: "grid", placeItems: "center", width: 30, height: 30, borderRadius: 8, background: "#FF6B2B", color: "#060912", fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: 15 }}>bY</span>
                  <span style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 800, fontSize: 16 }}>Bastian Vega Yon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="servicios" className="bv-section">
        <div className="bv-container">
          <span style={kicker}>Servicios</span>
          <h2 className="bv-h2" style={{ marginBottom: 44 }}>En qué te ayudo</h2>
          <div className="bv-cards-2">
            {services.map((s) => (
              <article key={s.title} className="bv-card" style={{ padding: 28 }}>
                <span style={{ display: "grid", placeItems: "center", width: 44, height: 44, borderRadius: 13, background: "rgba(255,107,43,.1)", border: "1px solid rgba(255,107,43,.25)", marginBottom: 16 }}>
                  <s.Icon className="w-5 h-5" style={{ color: "#FF6B2B" }} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ color: "#aab2c5", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </article>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 36 }}>
            <Link href="/servicios" className="bv-link" style={{ fontWeight: 600, color: "#FF6B2B" }}>
              Explorar servicios →
            </Link>
            <Link href="/servicios#precios" className="bv-link" style={{ fontWeight: 600 }}>
              Ver planes y alcances →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ QUIÉN SOY ============ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "48vh", display: "flex", alignItems: "center" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.webp" alt="" fill className="object-cover" style={{ objectPosition: "center" }} sizes="100vw" />
        </div>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(6,9,18,.95) 0%, rgba(6,9,18,.7) 45%, rgba(6,9,18,.2) 100%)" }} />
        <div className="bv-container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: 520, padding: "56px 0" }}>
            <h2 className="bv-h2" style={{ marginBottom: 18 }}>Trabaja directamente conmigo.</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#cdd3e0", margin: "0 0 28px" }}>
              Soy Bastian Vega Yon, especialista en marketing digital con más de 5 años de experiencia. Te acompaño desde la estrategia hasta la implementación.
            </p>
            <Link href="/nosotros" className="bv-btn-ghost" style={{ padding: "14px 26px" }}>Sobre mí →</Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ padding: "clamp(64px, 9vw, 110px) 24px 90px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden", borderRadius: 28, padding: "70px 40px", textAlign: "center", background: "linear-gradient(120deg, #FF6B2B, #ff9255)" }}>
          <h2 style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-1px", color: "#060912", margin: "0 0 14px" }}>
            Hablemos de tu próximo proyecto.
          </h2>
          <p style={{ fontSize: 18, color: "rgba(6,9,18,.78)", margin: "0 0 30px" }}>
            Agenda un diagnóstico gratuito de 30 minutos.
          </p>
          <Link href="/contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#060912", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 34px", borderRadius: 14, textDecoration: "none" }}>
            Solicitar diagnóstico gratis →
          </Link>
        </div>
      </section>

      <style>{`
        .bv-hero-grid { max-width: 1180px; margin: 0 auto; padding: clamp(48px,8vw,96px) 24px 0; display: grid; grid-template-columns: 1.1fr .9fr; gap: 56px; align-items: center; }
        .bv-cards-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
        @media (max-width: 980px) {
          .bv-hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .bv-cards-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
