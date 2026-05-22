import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Agencia 360 — Marketing sin límites";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "linear-gradient(135deg, #0D1B4B 0%, #152260 50%, #0D1B4B 100%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
          <span style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-1px" }}>
            Agencia
          </span>
          <span style={{ fontSize: 48, fontWeight: 900, color: "#FF6B2B", letterSpacing: "-1px" }}>
            360
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            maxWidth: 800,
            marginBottom: 24,
          }}
        >
          Marketing sin límites
        </div>

        <div style={{ fontSize: 28, color: "#CBD5E0", maxWidth: 700, lineHeight: 1.5 }}>
          La agencia 360 líder en el norte de Chile
        </div>

        {/* Cities */}
        <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
          {["Antofagasta", "Iquique", "Arica", "Calama"].map((city) => (
            <div
              key={city}
              style={{
                padding: "8px 16px",
                background: "rgba(255,107,43,0.2)",
                border: "1px solid rgba(255,107,43,0.4)",
                borderRadius: 8,
                color: "#FF6B2B",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {city}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
