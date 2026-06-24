import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto · Solicita tu Cotización",
  description:
    "Solicita tu cotización de marketing digital. Especialista freelance. Primera consulta sin costo. Respuesta en menos de 48 horas.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto · Solicita tu Cotización | bvyon marketing",
    description: "Primera consulta sin costo. Cotización de marketing digital.",
    url: "/contacto",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto · Solicita tu Cotización | bvyon marketing",
    description: "Primera consulta sin costo. Cotización de marketing digital.",
  },
};

const HEADING = "var(--font-heading, Montserrat, sans-serif)";

const PROCESS_STEPS = [
  { step: "1", title: "Diagnóstico inicial (gratis)", desc: "30 minutos para entender tu negocio, objetivos y desafíos actuales." },
  { step: "2", title: "Propuesta a medida", desc: "Te envío una propuesta con alcance, KPIs y presupuesto en 48 horas." },
  { step: "3", title: "Kickoff", desc: "Sesión de onboarding, acceso a sistemas y definición de brand voice." },
  { step: "4", title: "Ejecución y resultados", desc: "Trabajo semanal con dashboard en tiempo real y reuniones de resultados." },
];

export default function ContactoPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 150 }}>
        {/* background image + gradient wash */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.38,
          }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,9,18,.85), #060912 82%)" }} />
        {/* animated grid */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            animation: "bvGrid 9s linear infinite",
            WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, #000 20%, transparent 72%)",
            maskImage: "radial-gradient(120% 90% at 50% 0%, #000 20%, transparent 72%)",
          }}
        />
        {/* ambient blob */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-25%",
            right: "-5%",
            width: "42vw",
            height: "42vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,43,.18), transparent 65%)",
            filter: "blur(34px)",
            animation: "bvBlob 20s ease-in-out infinite",
          }}
        />

        <div className="bv-container" style={{ position: "relative", zIndex: 5, paddingBottom: 70 }}>
          <span
            className="bv-kicker"
            style={{
              padding: "8px 16px",
              borderRadius: 999,
              border: "1px solid rgba(255,107,43,.35)",
              background: "rgba(255,107,43,.1)",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#FF6B2B",
                boxShadow: "0 0 12px #FF6B2B",
                animation: "bvPulse 2.4s ease-in-out infinite",
              }}
            />
            Hablemos
          </span>
          <h1
            style={{
              fontFamily: HEADING,
              fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 76px)",
              lineHeight: 1,
              letterSpacing: "-2px",
              margin: "0 0 20px",
            }}
          >
            Contáctame
          </h1>
          <p style={{ fontSize: "clamp(16px, 1.4vw, 19px)", lineHeight: 1.65, color: "#aeb6c8", maxWidth: 600, margin: 0 }}>
            La primera consulta es sin costo. Cuéntame sobre tu empresa y te ayudo a crecer sin límites.
          </p>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section style={{ padding: "10px 24px clamp(72px, 9vw, 120px)" }}>
        <div className="bv-contact-grid">
          {/* left: process + data */}
          <div>
            <h2
              style={{
                fontFamily: HEADING,
                fontWeight: 900,
                fontSize: "clamp(26px, 3.2vw, 38px)",
                letterSpacing: "-1px",
                margin: "0 0 32px",
              }}
            >
              ¿Cómo trabajo?
            </h2>
            <ol style={{ listStyle: "none", margin: "0 0 40px", padding: 0, display: "flex", flexDirection: "column" }}>
              {PROCESS_STEPS.map((item, i) => {
                const isLast = i === PROCESS_STEPS.length - 1;
                return (
                  <li key={item.step} style={{ display: "flex", gap: 18, paddingBottom: isLast ? 0 : 26, position: "relative" }}>
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: 19,
                          top: 40,
                          bottom: 0,
                          width: 2,
                          background: "linear-gradient(rgba(255,107,43,.5), rgba(255,107,43,.05))",
                        }}
                      />
                    )}
                    <span
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        background: "#FF6B2B",
                        color: "#060912",
                        fontFamily: HEADING,
                        fontWeight: 900,
                        fontSize: 16,
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h4 style={{ fontFamily: HEADING, fontWeight: 800, fontSize: 16, margin: "8px 0 5px" }}>{item.title}</h4>
                      <p style={{ fontSize: 14, lineHeight: 1.55, color: "#9aa3b8", margin: 0 }}>{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, padding: 24, background: "rgba(255,255,255,.025)" }}>
              <h3 style={{ fontFamily: HEADING, fontWeight: 800, fontSize: 15, margin: "0 0 16px" }}>Datos de contacto</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                <a
                  href="tel:+56937441215"
                  className="bv-data-link"
                  style={{ display: "flex", gap: 11, alignItems: "center", fontSize: 14, color: "#c3cad8", textDecoration: "none", transition: "color .2s" }}
                >
                  <span aria-hidden="true" style={{ color: "#FF6B2B", fontSize: 16 }}>☎</span> +56 9 3744 1215
                </a>
                <div style={{ display: "flex", gap: 11, alignItems: "center", fontSize: 14, color: "#c3cad8" }}>
                  <span aria-hidden="true" style={{ color: "#FF6B2B", fontSize: 16 }}>◆</span> Chile
                </div>
                <div style={{ display: "flex", gap: 11, alignItems: "center", fontSize: 14, color: "#c3cad8" }}>
                  <span aria-hidden="true" style={{ color: "#FF6B2B", fontSize: 16 }}>◷</span> Lun–Vie, 9:00–18:00
                </div>
              </div>
            </div>
          </div>

          {/* right: channels */}
          <ContactForm />
        </div>
      </section>

      <style>{`
        .bv-contact-grid {
          max-width: 1180px; margin: 0 auto;
          display: grid; grid-template-columns: 1.1fr 1fr; gap: 56px; align-items: start;
        }
        .bv-data-link:hover { color: #fff; }
        @media (max-width: 980px) {
          .bv-contact-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </>
  );
}
