import Link from "next/link";

const services = [
  "Automatizaciones 24/7",
  "Análisis Estratégico",
  "Contenido con IA",
  "Diseño Web",
  "SEO y Posicionamiento",
];

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/blog", label: "Blog" },
  { href: "/nosotros", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

const colHeading: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#6b7488",
  margin: "0 0 16px",
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "#04060f",
        borderTop: "1px solid rgba(255,255,255,.07)",
        padding: "64px 24px 36px",
      }}
    >
      <div className="bv-footer-grid">
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span
              style={{
                display: "grid",
                placeItems: "center",
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "var(--acc,#FF6B2B)",
                color: "#060912",
                fontFamily: "var(--font-heading, Montserrat, sans-serif)",
                fontWeight: 900,
                fontSize: 16,
                letterSpacing: "-1px",
              }}
            >
              bY
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading, Montserrat, sans-serif)",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              bvyon<span style={{ color: "var(--acc,#FF6B2B)" }}> marketing</span>
            </span>
          </div>
          <p style={{ fontSize: 14, color: "#aab2c5", margin: "0 0 6px" }}>Marketing sin límites.</p>
          <p style={{ fontSize: 12.5, color: "#6b7488", margin: "0 0 20px" }}>
            Especialista freelance en marketing digital. Chile.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://www.instagram.com/bastian.yon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bv-social">
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/bvyon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bv-social">
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://www.facebook.com/bastian.yon/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bv-social">
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={colHeading}>Servicios</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {services.map((s) => (
              <Link key={s} href="/servicios" className="bv-link" style={{ fontSize: 13.5 }}>
                {s}
              </Link>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 style={colHeading}>Navegación</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="bv-link" style={{ fontSize: 13.5 }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={colHeading}>Contacto</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <div style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 13.5, color: "#aab2c5" }}>
              <span style={{ color: "var(--acc,#FF6B2B)" }}>◆</span> Chile
            </div>
            <a href="mailto:metrilabcl@gmail.com" className="bv-link" style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 13.5 }}>
              <span style={{ color: "var(--acc,#FF6B2B)" }}>✉</span> metrilabcl@gmail.com
            </a>
            <a href="tel:+56937441215" className="bv-link" style={{ display: "flex", gap: 9, alignItems: "center", fontSize: 13.5 }}>
              <span style={{ color: "var(--acc,#FF6B2B)" }}>☎</span> +56 9 3744 1215
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1180,
          margin: "40px auto 0",
          paddingTop: 26,
          borderTop: "1px solid rgba(255,255,255,.07)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 14,
          fontSize: 12.5,
          color: "#6b7488",
        }}
      >
        <p style={{ margin: 0 }}>© {year} bvyon marketing. Todos los derechos reservados.</p>
        <div style={{ display: "flex", gap: 18 }}>
          <Link href="/privacidad" className="bv-link">Privacidad</Link>
          <Link href="/terminos" className="bv-link">Términos</Link>
        </div>
      </div>

      <style>{`
        .bv-footer-grid { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.4fr 1fr 1fr 1.2fr; gap: 40px; }
        .bv-social { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 10px; background: rgba(255,255,255,.06); color: #cdd3e0; transition: background .25s, color .25s; }
        .bv-social:hover { background: var(--acc,#FF6B2B); color: #060912; }
        @media (max-width: 860px) { .bv-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media (max-width: 520px) { .bv-footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
