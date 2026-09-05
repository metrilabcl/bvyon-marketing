import type { Metadata } from "next";
import Link from "next/link";
import { Zap, BarChart3, Sparkles, Globe, Megaphone, Search, Palette, Compass, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de Marketing Digital — Chile",
  description:
    "Automatizaciones 24/7, SEO, contenido con IA y diseño web para PYMEs y emprendimientos en Chile. Planes a medida. Primera consulta sin costo.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Marketing Digital — Chile | bvyon marketing",
    description:
      "Automatizaciones, SEO, publicidad digital y contenido con IA para PYMEs y emprendimientos en Chile.",
    url: "/servicios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios de Marketing Digital — Chile | bvyon marketing",
    description:
      "Automatizaciones, SEO, publicidad digital y contenido con IA para PYMEs y emprendimientos en Chile.",
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

const planIncluye = [
  "Canales y volumen de contenido según tu operación",
  "Gestión de pauta en Meta, Google o TikTok",
  "Automatizaciones e integración con tu CRM",
  "SEO y contenido, si tu negocio lo requiere",
  "Reportes con los indicadores que te importan",
];

const heading = "var(--font-heading, Montserrat, sans-serif)";

const kicker: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 9,
  padding: "8px 16px",
  borderRadius: 999,
  border: "1px solid rgba(255,107,43,.35)",
  background: "rgba(255,107,43,.1)",
  color: "#FF6B2B",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
};

export default function ServiciosPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 110, paddingBottom: 20 }}>
        <div aria-hidden="true" style={{ position: "absolute", top: -120, left: -80, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,43,.16), transparent 70%)", filter: "blur(20px)", animation: "bvBlob 18s ease-in-out infinite" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: 60, right: -120, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,90,180,.2), transparent 70%)", filter: "blur(20px)", animation: "bvBlob 22s ease-in-out infinite reverse" }} />

        <div className="bv-container" style={{ position: "relative", zIndex: 2, paddingTop: "clamp(24px, 4vw, 48px)", paddingBottom: "clamp(40px, 6vw, 64px)" }}>
          <span style={kicker}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B2B", boxShadow: "0 0 12px #FF6B2B", display: "inline-block", animation: "bvPulse 2.4s ease-in-out infinite" }} />
            Lo que hago
          </span>
          <h1 style={{ fontFamily: heading, fontWeight: 900, fontSize: "clamp(38px, 5.6vw, 72px)", lineHeight: 1.02, letterSpacing: "-2px", margin: "24px 0 22px", maxWidth: 840 }}>
            Servicios de marketing digital en{" "}
            <span style={{ color: "#FF6B2B" }}>Chile</span>
          </h1>
          <p style={{ fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.65, color: "#aeb6c8", maxWidth: 640, margin: 0 }}>
            Automatizaciones, análisis estratégico, contenido con IA, diseño web, publicidad digital, branding y más — todo lo que necesita tu negocio digital, bajo una sola mano.
          </p>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section style={{ padding: "20px 0 clamp(72px, 9vw, 120px)" }}>
        <div className="bv-container">
          <div className="bv-svc-grid">
            {services.map((s) => (
              <article key={s.id} id={s.id} className="bv-card" style={{ position: "relative", padding: "36px 36px 36px 40px", overflow: "hidden" }}>
                <span aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 4, background: "#FF6B2B" }} />
                <span style={{ display: "grid", placeItems: "center", width: 56, height: 56, borderRadius: 16, background: "rgba(255,107,43,.12)", border: "1px solid rgba(255,107,43,.25)", color: "#FF6B2B", marginBottom: 20 }}>
                  <s.Icon className="w-7 h-7" style={{ color: "#FF6B2B" }} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h2 style={{ fontFamily: heading, fontWeight: 800, fontSize: 21, letterSpacing: "-.5px", margin: "0 0 12px" }}>{s.title}</h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#9aa3b8", margin: "0 0 20px" }}>{s.desc}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ display: "flex", gap: 10, fontSize: 13.5, color: "#c3cad8", lineHeight: 1.45 }}>
                      <Check className="w-4 h-4 shrink-0" style={{ color: "#FF6B2B", marginTop: 2 }} strokeWidth={2.5} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PLAN PERSONALIZADO ============ */}
      <section id="precios" className="bv-section" style={{ paddingTop: "clamp(48px, 7vw, 80px)" }}>
        <div className="bv-container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#FF6B2B" }}>Planes</span>
            <h2 className="bv-h2" style={{ fontWeight: 900, fontSize: "clamp(32px, 4.6vw, 54px)", letterSpacing: "-1.5px", margin: "16px 0" }}>Un plan a la medida de tu negocio</h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "#9aa3b8", margin: 0 }}>
              Cada negocio parte de un punto distinto. Definimos alcance y presupuesto después del diagnóstico.
            </p>
          </div>

          <div
            style={{
              maxWidth: 560,
              margin: "0 auto",
              borderRadius: 24,
              padding: "clamp(28px, 5vw, 40px)",
              background: "linear-gradient(165deg, #1b2c63, #0a1130)",
              border: "1px solid rgba(255,107,43,.45)",
              boxShadow: "0 30px 70px -35px rgba(255,107,43,.35)",
            }}
          >
            <h3 style={{ fontFamily: heading, fontWeight: 900, fontSize: "clamp(24px, 3.4vw, 32px)", margin: "0 0 12px" }}>Plan personalizado</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#c3cad8", margin: "0 0 26px" }}>
              Armamos el alcance según lo que tu negocio necesita hoy, sin pagar por servicios que no vas a usar.
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 30px", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {planIncluye.map((f) => (
                <li key={f} style={{ display: "flex", gap: 10, fontSize: 14.5, color: "#c3cad8", lineHeight: 1.5 }}>
                  <Check className="w-4 h-4 shrink-0" style={{ color: "#FF6B2B", marginTop: 3 }} strokeWidth={2.5} aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className="bv-btn"
              style={{ width: "100%", justifyContent: "center", padding: "15px 0", fontSize: 15 }}
            >
              Solicitar diagnóstico gratis
            </Link>
            <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#7e879c", margin: "18px 0 0", textAlign: "center" }}>
              Contrato mínimo 3 meses. El presupuesto de pauta va directo a las plataformas.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ padding: "0 24px 90px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden", borderRadius: 28, padding: "70px 40px", textAlign: "center", background: "linear-gradient(120deg, #FF6B2B, #ff9255)" }}>
          <h2 style={{ fontFamily: heading, fontWeight: 900, fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-2px", lineHeight: 1.04, color: "#060912", margin: "0 0 18px" }}>
            ¿No sabes qué necesitas?
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(6,9,18,.78)", margin: "0 0 34px" }}>
            Conversemos y te recomiendo la mejor solución para tu negocio. Primera consulta sin costo.
          </p>
          <Link href="/contacto" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#060912", color: "#fff", fontWeight: 800, fontSize: 17, padding: "18px 38px", borderRadius: 14, textDecoration: "none" }}>
            Solicitar diagnóstico gratis →
          </Link>
        </div>
      </section>

      <style>{`
        .bv-svc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (max-width: 980px) {
          .bv-svc-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
