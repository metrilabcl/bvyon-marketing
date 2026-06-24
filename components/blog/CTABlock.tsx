import Link from "next/link";

export default function CTABlock() {
  return (
    <aside
      className="not-prose"
      style={{
        margin: "44px 0",
        borderRadius: 24,
        overflow: "hidden",
        padding: "44px 32px",
        textAlign: "center",
        background: "linear-gradient(120deg, #FF6B2B, #ff9255)",
      }}
    >
      <h3
        style={{
          fontFamily: "var(--font-heading, Montserrat, sans-serif)",
          fontWeight: 900,
          fontSize: "clamp(22px, 3vw, 28px)",
          letterSpacing: "-0.5px",
          color: "#060912",
          margin: "0 0 10px",
        }}
      >
        ¿Necesitas ayuda con tu marketing digital?
      </h3>
      <p style={{ fontSize: 15, color: "rgba(6,9,18,.78)", lineHeight: 1.6, margin: "0 auto 24px", maxWidth: 480 }}>
        Soy Bastian Vega Yon, especialista freelance en automatizaciones, estrategia digital y contenido con IA. La primera consulta es sin costo.
      </p>
      <Link
        href="/contacto"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "#060912",
          color: "#fff",
          fontWeight: 700,
          fontSize: 15,
          padding: "14px 30px",
          borderRadius: 14,
          textDecoration: "none",
        }}
      >
        Contáctame ahora →
      </Link>
    </aside>
  );
}
