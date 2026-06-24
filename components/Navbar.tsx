"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Sobre mí" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        transition: "background .4s ease, backdrop-filter .4s ease, border-color .4s ease",
        background: scrolled ? "rgba(6,9,18,.85)" : "rgba(6,9,18,0)",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,.08)" : "rgba(255,255,255,0)"}`,
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 74,
        }}
      >
        <Link
          href="/"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
        >
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: 34,
              height: 34,
              borderRadius: 9,
              background: "var(--acc,#FF6B2B)",
              color: "#060912",
              fontFamily: "var(--font-heading, Montserrat, sans-serif)",
              fontWeight: 900,
              fontSize: 18,
              letterSpacing: "-1px",
            }}
          >
            bY
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading, Montserrat, sans-serif)",
              fontWeight: 800,
              fontSize: 19,
              letterSpacing: "-.5px",
              color: "#fff",
            }}
          >
            bvyon<span style={{ color: "var(--acc,#FF6B2B)" }}> marketing</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegación principal" className="bv-desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="bv-nav-link">
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="bv-btn" style={{ padding: "11px 20px", fontSize: 13.5 }}>
            Diagnóstico gratis
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="bv-mobile-btn"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="bv-mobile-menu"
          style={{
            background: "rgba(8,12,24,.97)",
            backdropFilter: "blur(14px)",
            borderTop: "1px solid rgba(255,255,255,.08)",
            padding: "18px 24px 26px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "#cdd3e0",
                textDecoration: "none",
                padding: "12px 6px",
                fontWeight: 500,
                borderRadius: 8,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 8,
              textAlign: "center",
              color: "#060912",
              background: "var(--acc,#FF6B2B)",
              fontWeight: 700,
              padding: 14,
              borderRadius: 11,
              textDecoration: "none",
            }}
          >
            Diagnóstico gratis
          </Link>
        </div>
      )}

      <style>{`
        .bv-desktop-nav { display: flex; align-items: center; gap: 34px; }
        .bv-nav-link { font-size: 14px; font-weight: 500; color: #aab2c5; text-decoration: none; transition: color .2s; }
        .bv-nav-link:hover { color: #fff; }
        .bv-mobile-btn {
          display: none; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12);
          color: #fff; width: 44px; height: 44px; border-radius: 11px; cursor: pointer; font-size: 20px;
          align-items: center; justify-content: center;
        }
        @media (max-width: 860px) {
          .bv-desktop-nav { display: none; }
          .bv-mobile-btn { display: inline-flex; }
        }
        @media (min-width: 861px) { .bv-mobile-menu { display: none !important; } }
      `}</style>
    </header>
  );
}
