import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito | bvyon marketing",
  description:
    "Casos reales de empresas que crecieron con estrategia digital. Automatizaciones, SEO y publicidad que convierte.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos de Éxito | bvyon marketing",
    description: "Casos reales de empresas que escalaron sus resultados digitales.",
    url: "/casos",
    type: "website",
  },
};

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

const challenges = [
  "Posicionamiento digital nulo: no aparecían en búsquedas de empresas buscando contratistas de sus servicios.",
  "Gestión manual de leads: cada consulta requería seguimiento humano sin sistema de CRM.",
  "Sin datos de conversión: desconocían cuál era su costo real de adquisición de clientes.",
  "Presupuesto digital mínimo: apenas invertían en pauta digital, confiaban en red personal.",
];

const strategy = [
  {
    badge: "SEO",
    title: "Posicionamiento orgánico en Google.",
    detail:
      "Optimizamos su sitio para palabras clave de nicho del servicio específico que ofrecían. En 5 meses: primeras posiciones en búsquedas específicas del rubro.",
  },
  {
    badge: "Automatización + CRM",
    title: "Sistema de leads automático.",
    detail:
      "Cada consulta desde el sitio se registra en su CRM, gatilla un email automático de confirmación, y el gerente recibe una notificación en Slack al instante. Ningún lead se pierde.",
  },
  {
    badge: "Publicidad Digital",
    title: "Pauta en Google Ads + LinkedIn.",
    detail:
      "Campañas B2B enfocadas en el segmento objetivo. A/B testing continuo para optimizar costo por lead. ROI mejorado cada mes.",
  },
  {
    badge: "Análisis y Reporting",
    title: "Dashboard mensual con KPIs claros.",
    detail:
      "Costo por lead, tasa de conversión, origen de cada cliente. Datos que guían cada decisión.",
  },
];

const results = [
  { value: "+85%", label: "Aumento en leads calificados de SEO + pauta" },
  { value: "-40%", label: "Reducción en costo por lead gracias a optimización" },
  { value: "0 min", label: "Tiempo de respuesta a nuevos leads (automático)" },
  { value: "3x", label: "ROI en campañas de pauta digital" },
];

export default function CasesPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 110 }}>
        {/* ambient glows */}
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: -120, left: -80, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,43,.18), transparent 70%)", filter: "blur(20px)", animation: "bvBlob 18s ease-in-out infinite" }}
        />
        <div
          aria-hidden="true"
          style={{ position: "absolute", top: 60, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(56,90,180,.22), transparent 70%)", filter: "blur(20px)", animation: "bvBlob 22s ease-in-out infinite reverse" }}
        />

        <div className="bv-container" style={{ position: "relative", zIndex: 2, paddingTop: "clamp(20px,5vw,48px)", paddingBottom: "clamp(20px,5vw,48px)" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={kicker}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B2B", display: "inline-block" }} />
              Resultados reales
            </span>
            <h1 style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontSize: "clamp(38px, 6.5vw, 68px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 22px" }}>
              Empresas que crecieron con{" "}
              <span style={{ color: "#FF6B2B" }}>estrategia digital</span>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#aab2c5", maxWidth: 620, margin: 0 }}>
              Casos reales de PYMEs y emprendimientos en Chile que escalaron sus resultados con automatizaciones, SEO y publicidad digital enfocada en conversión.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CASE STUDY ============ */}
      <section className="bv-section" style={{ paddingTop: "clamp(40px,6vw,72px)" }}>
        <div className="bv-container" style={{ maxWidth: 880 }}>
          {/* intro */}
          <div style={{ marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", color: "#FF6B2B", background: "rgba(255,107,43,.1)", padding: "5px 12px", borderRadius: 999, marginBottom: 18 }}>
              Empresa de Servicios
            </span>
            <h2 className="bv-h2" style={{ marginBottom: 16 }}>
              Empresa contratista: +85% en leads calificados
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#aab2c5", maxWidth: 640, margin: 0 }}>
              Una empresa de servicios B2B regional operaba con poca visibilidad online. Sin estrategia de SEO ni publicidad digital, dependían casi exclusivamente de referencias personales — lo que limitaba su escalabilidad.
            </p>
          </div>

          {/* The Challenge */}
          <div style={{ marginBottom: 44, paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 18px", letterSpacing: "-0.5px" }}>El desafío</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {challenges.map((c) => (
                <div key={c} style={{ display: "flex", gap: 12 }}>
                  <span style={{ color: "#FF6B2B", fontWeight: 800, flexShrink: 0, marginTop: 1 }}>›</span>
                  <p style={{ margin: 0, fontSize: 15.5, color: "#cdd3e0", lineHeight: 1.6 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div style={{ marginBottom: 44, paddingBottom: 36, borderBottom: "1px solid rgba(255,255,255,.08)" }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 22px", letterSpacing: "-0.5px" }}>La estrategia</h3>
            <div className="bv-casos-strategy">
              {strategy.map((s) => (
                <article key={s.badge} className="bv-card" style={{ padding: 24 }}>
                  <span style={{ display: "inline-block", fontSize: 11, fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#FF6B2B", background: "rgba(255,107,43,.1)", border: "1px solid rgba(255,107,43,.3)", padding: "5px 11px", borderRadius: 999, marginBottom: 14 }}>
                    {s.badge}
                  </span>
                  <p style={{ margin: 0, fontSize: 14.5, color: "#aab2c5", lineHeight: 1.6 }}>
                    <strong style={{ color: "#fff" }}>{s.title}</strong> {s.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* The Results */}
          <div style={{ marginBottom: 44 }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 24px", letterSpacing: "-0.5px" }}>Los resultados</h3>
            <div className="bv-casos-results">
              {results.map((r) => (
                <div key={r.label} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 20, padding: 26 }}>
                  <div style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: 40, color: "#FF6B2B", lineHeight: 1, marginBottom: 10 }}>
                    {r.value}
                  </div>
                  <p style={{ margin: 0, fontSize: 14, color: "#aab2c5", lineHeight: 1.5 }}>{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div style={{ background: "linear-gradient(160deg, #15224d, #0c1430)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 24, padding: 36 }}>
            <svg className="w-8 h-8" style={{ color: "#FF6B2B", marginBottom: 16 }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.25-2-7-2s-7 .75-7 2v10c0 1 0 4 3 5z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.25-2-7-2s-7 .75-7 2v10c0 1 0 4 3 5z" />
            </svg>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "#fff", fontStyle: "italic", margin: "0 0 16px" }}>
              &ldquo;Antes no sabíamos si nuestro dinero en publicidad estaba funcionando. Ahora vemos cada lead, de dónde viene, y cuánto nos costó traerlo. El sistema automático nos ahorra horas cada semana.&rdquo;
            </p>
            <p style={{ margin: 0, fontWeight: 700, color: "#cdd3e0" }}>— Gerente General, Empresa de Servicios B2B</p>
          </div>
        </div>
      </section>

      {/* ============ MORE CASES COMING ============ */}
      <section className="bv-section" style={{ paddingTop: 0 }}>
        <div className="bv-container" style={{ maxWidth: 880, textAlign: "center" }}>
          <span style={{ ...kicker, justifyContent: "center" }}>Próximamente</span>
          <h2 className="bv-h2" style={{ marginBottom: 16 }}>Más casos próximamente</h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#aab2c5", maxWidth: 620, margin: "0 auto" }}>
            Casos de éxito en e-commerce, servicios y más rubros. Próximas historias disponibles en los próximos meses.
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section style={{ padding: "0 24px 90px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", overflow: "hidden", borderRadius: 28, padding: "70px 40px", textAlign: "center", background: "linear-gradient(120deg, #FF6B2B, #ff9255)" }}>
          <h2 style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)", fontWeight: 900, fontSize: "clamp(28px, 4.5vw, 44px)", letterSpacing: "-1px", color: "#060912", margin: "0 0 14px" }}>
            ¿Tu negocio podría ser el próximo caso?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(6,9,18,.78)", margin: "0 0 30px" }}>
            Hablemos sobre tu desafío digital. La primera consulta es sin costo.
          </p>
          <Link href="/contacto" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#060912", color: "#fff", fontWeight: 700, fontSize: 16, padding: "16px 34px", borderRadius: 14, textDecoration: "none" }}>
            Solicitar diagnóstico →
          </Link>
        </div>
      </section>

      <style>{`
        .bv-casos-strategy { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .bv-casos-results { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        @media (max-width: 980px) {
          .bv-casos-strategy { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .bv-casos-results { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
