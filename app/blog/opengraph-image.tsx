import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0D1B4B 0%, #152260 50%, #0D1B4B 100%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: "#FF6B2B",
            display: "flex",
          }}
        />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-1px",
            }}
          >
            bvyon
          </span>
          <span
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#FF6B2B",
              letterSpacing: "-1px",
              marginLeft: 8,
            }}
          >
            marketing
          </span>
        </div>

        {/* Heading */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 24,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Blog de Marketing Digital
        </div>

        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 700,
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Guías, tendencias y casos de éxito para PYMEs y emprendimientos en Chile.
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
          {["Automatizaciones", "SEO", "Publicidad Digital", "Contenido con IA"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  background: "rgba(255,107,43,0.15)",
                  border: "1px solid rgba(255,107,43,0.4)",
                  borderRadius: 8,
                  color: "#FF6B2B",
                  fontSize: 18,
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
