import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, BarChart3, Globe, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Sobre mí · Bastian Vega Yon",
  description:
    "Bastian Vega Yon, especialista freelance en marketing digital. Automatizaciones, SEO y contenido con IA. Sin intermediarios.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Sobre mí · Bastian Vega Yon | bvyon marketing",
    description:
      "Especialista freelance en marketing digital. Automatizaciones, SEO y contenido con IA.",
    url: "/nosotros",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mí · Bastian Vega Yon | bvyon marketing",
    description:
      "Especialista freelance en marketing digital con 5+ años de experiencia en marketing digital.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/nosotros#person`,
  name: "Bastian Vega Yon",
  jobTitle: "Especialista en Marketing Digital",
  description: "Especialista freelance en marketing digital. Automatizaciones, SEO y contenido con IA.",
  url: SITE_URL,
  worksFor: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#business`,
    name: "bvyon marketing",
  },
  knowsAbout: ["Marketing Digital", "SEO", "Marketing B2B", "Publicidad Digital", "Content Marketing"],
  sameAs: [] as string[],
};

interface Value {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const values: Value[] = [
  { Icon: Target, title: "Orientado a resultados", desc: "Cada estrategia tiene KPIs claros. Tu crecimiento es mi éxito — leads, conversiones y ROI, no vanity metrics." },
  { Icon: BarChart3, title: "Datos en cada decisión", desc: "Soy técnicamente riguroso. Cada peso invertido tiene atribución clara y reportes que cualquiera puede entender." },
  { Icon: Globe, title: "Adaptable a cualquier industria", desc: "He trabajado con PYMEs y emprendimientos de distintos rubros en Chile. Adapto la estrategia al modelo de negocio y ciclo de venta de cada cliente." },
  { Icon: Zap, title: "Sin intermediarios", desc: "Trabajas directamente conmigo — sin cuentas ejecutivas, sin burocracia. Más velocidad, más foco, mejores resultados." },
];

const pillars = ["Automatizaciones", "Análisis Estratégico", "Contenido con IA", "Diseño Web"];

const kicker: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#FF6B2B",
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* ============ HERO / PROFILE ============ */}
      <section
        id="sobre"
        style={{ position: "relative", overflow: "hidden", padding: "150px 0 80px", paddingTop: 150 }}
      >
        {/* background image + scrims */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
          <Image src="/hero.webp" alt="" fill className="object-cover" style={{ objectPosition: "center" }} sizes="100vw" priority />
        </div>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, #060912 10%, rgba(6,9,18,.9) 45%, rgba(6,9,18,.45) 80%, rgba(6,9,18,.7) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "-15%", left: "-5%", width: "42vw", height: "42vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,43,.16), transparent 65%)", filter: "blur(34px)", animation: "bvBlob 20s ease-in-out infinite" }} />

        <div className="bv-profile-grid" style={{ position: "relative", zIndex: 5 }}>
          <div>
            <span style={{ ...kicker, padding: "8px 16px", borderRadius: 999, border: "1px solid rgba(255,107,43,.35)", background: "rgba(255,107,43,.1)", marginBottom: 24 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B2B", boxShadow: "0 0 12px #FF6B2B", display: "inline-block", animation: "bvPulse 2.4s ease-in-out infinite" }} />
              Quién soy
            </span>
            <h1 style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: "clamp(40px, 5.6vw, 72px)", lineHeight: 1, letterSpacing: "-2px", margin: "0 0 10px" }}>
              Bastian Vega <span style={{ color: "#FF6B2B" }}>Yon</span>
            </h1>
            <p style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 700, fontSize: 16, color: "#FF6B2B", margin: "0 0 22px", letterSpacing: ".3px" }}>
              Especialista Freelance · Marketing Digital
            </p>
            <p style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: 1.7, color: "#c0c7d6", maxWidth: 560, margin: "0 0 18px" }}>
              Me especializo en tres pilares que mueven negocios digitales hoy: automatizaciones en la nube que trabajan 24/7, análisis estratégico completo basado en datos reales, y creación de contenido visual con inteligencia artificial.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "#9aa3b8", maxWidth: 560, margin: "0 0 32px" }}>
              Creo que cada empresa merece acceder a estrategias de marketing de clase mundial, sin importar su tamaño. Trabajo directamente contigo — sin capas, sin intermediarios, con foco total en tu resultado.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="/contacto" className="bv-btn" style={{ padding: "15px 28px", fontSize: 15 }}>
                Trabajemos juntos →
              </Link>
              <Link href="/servicios" className="bv-btn-ghost" style={{ padding: "15px 28px", fontSize: 15 }}>
                Ver servicios
              </Link>
            </div>
          </div>

          {/* portrait */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", animation: "bvFloat 7s ease-in-out infinite" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: -22, borderRadius: 34, background: "radial-gradient(circle at 50% 40%, rgba(255,107,43,.4), transparent 70%)", filter: "blur(28px)" }} />
              <div style={{ position: "relative", width: "clamp(280px, 32vw, 400px)", aspectRatio: "1 / 1", borderRadius: 28, overflow: "hidden", border: "1px solid rgba(255,255,255,.14)", boxShadow: "0 40px 80px -30px rgba(0,0,0,.8)" }}>
                <Image src="/banner.webp" alt="Bastian Vega Yon — especialista en marketing digital" fill className="object-cover" style={{ objectPosition: "top" }} sizes="(max-width: 980px) 90vw, 400px" priority />
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(6,9,18,.55), transparent 45%)" }} />
              </div>
              <div style={{ position: "absolute", bottom: -14, left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap", background: "#FF6B2B", color: "#060912", fontSize: 12.5, fontWeight: 800, padding: "8px 18px", borderRadius: 999, boxShadow: "0 12px 28px -10px rgba(255,107,43,.8)" }}>
                5+ años · Marketing Digital
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STRIP: pillars ============ */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.07)", borderBottom: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.015)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "26px 24px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "14px 28px", fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 700, fontSize: 15, color: "#8a93a8" }}>
          {pillars.map((p, i) => (
            <span key={p} style={{ display: "inline-flex", alignItems: "center", gap: 28 }}>
              <span>{p}</span>
              {i < pillars.length - 1 && <span style={{ color: "#FF6B2B" }} aria-hidden="true">◆</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ============ VALUES ============ */}
      <section className="bv-section" style={{ background: "#060912" }}>
        <div className="bv-container">
          <div style={{ maxWidth: 560, marginBottom: 52 }}>
            <span style={kicker}>Mi forma de trabajar</span>
            <h2 className="bv-h2" style={{ marginTop: 16 }}>Principios que guían cada proyecto</h2>
          </div>
          <div className="bv-values-grid">
            {values.map((v) => (
              <div key={v.title} className="bv-card" style={{ padding: 32 }}>
                <span style={{ display: "grid", placeItems: "center", width: 50, height: 50, borderRadius: 14, background: "rgba(255,107,43,.12)", border: "1px solid rgba(255,107,43,.25)", color: "#FF6B2B", marginBottom: 18 }}>
                  <v.Icon className="w-6 h-6" style={{ color: "#FF6B2B" }} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 style={{ fontSize: 19, fontWeight: 800, margin: "0 0 10px" }}>{v.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#9aa3b8", margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ position: "relative", overflow: "hidden", padding: "clamp(80px,10vw,130px) 24px", background: "#FF6B2B" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-40%", left: "-10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,.18), transparent 65%)", animation: "bvBlob 20s ease-in-out infinite" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-50%", right: "-5%", width: "46vw", height: "46vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(13,27,75,.4), transparent 62%)", animation: "bvBlob 24s ease-in-out infinite reverse" }} />
        <div style={{ position: "relative", zIndex: 5, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-2px", lineHeight: 1.04, color: "#060912", margin: "0 0 18px" }}>
            Trabajemos juntos
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(6,9,18,.72)", margin: "0 0 34px" }}>
            Cuéntame sobre tu negocio y te ayudo a crecer sin límites.
          </p>
          <Link href="/contacto" className="bv-cta-dark" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "18px 38px", background: "#060912", color: "#fff", fontWeight: 800, fontSize: 17, borderRadius: 14, textDecoration: "none", boxShadow: "0 20px 44px -18px rgba(0,0,0,.6)" }}>
            Solicitar cotización →
          </Link>
        </div>
      </section>

      <style>{`
        .bv-profile-grid { max-width: 1180px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: 1.15fr .85fr; gap: 56px; align-items: center; }
        .bv-values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        .bv-cta-dark { transition: transform .25s, box-shadow .25s; }
        .bv-cta-dark:hover { transform: translateY(-3px); box-shadow: 0 28px 54px -18px rgba(0,0,0,.7); }
        @media (max-width: 980px) {
          .bv-profile-grid { grid-template-columns: 1fr; gap: 40px; }
          .bv-values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
