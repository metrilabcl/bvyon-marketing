import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio bvyon-marketing.cl: objeto, propiedad intelectual, limitación de responsabilidad y ley aplicable.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: false },
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-heading, Montserrat, sans-serif)",
  fontWeight: 800,
  fontSize: 20,
  color: "#fff",
  margin: "34px 0 12px",
};

const ul: React.CSSProperties = {
  margin: "0 0 14px",
  paddingLeft: 22,
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

export default function TerminosPage() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "130px 24px 90px" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "46vw",
          height: "46vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,43,.1), transparent 65%)",
          filter: "blur(40px)",
          animation: "bvBlob 22s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 5, maxWidth: 820, margin: "0 auto" }}>
        <span className="bv-kicker" style={{ letterSpacing: "3px" }}>Legal</span>
        <h1
          style={{
            fontFamily: "var(--font-heading, Montserrat, sans-serif)",
            fontWeight: 900,
            fontSize: "clamp(30px, 4.4vw, 48px)",
            letterSpacing: "-1.4px",
            lineHeight: 1.05,
            margin: "14px 0 10px",
          }}
        >
          Términos y Condiciones
        </h1>
        <p style={{ fontSize: 13, color: "#6b7488", margin: "8px 0 36px" }}>Última actualización: mayo 2026</p>

        <div
          className="prose prose-invert max-w-none"
          style={{ fontSize: 15.5, lineHeight: 1.75, color: "#cdd3e0", maxWidth: 760 }}
        >
          <p style={{ margin: "0 0 20px" }}>
            Estos términos regulan el uso del sitio <strong style={{ color: "#fff" }}>bvyon-marketing.cl</strong>, operado por <strong style={{ color: "#fff" }}>Bastián Vega Yon</strong> (en adelante, &ldquo;bvyon marketing&rdquo; o &ldquo;el responsable&rdquo;). Al acceder al sitio aceptas estos términos. Si no estás de acuerdo, te pido que no lo utilices.
          </p>

          <h2 style={h2}>1. Identificación del responsable</h2>
          <ul style={ul}>
            <li>Responsable: Bastián Vega Yon (bvyon marketing) — especialista freelance en marketing digital.</li>
            <li>País de operación: República de Chile.</li>
            <li>Contacto: <a href="mailto:metrilabcl@gmail.com" style={{ color: "#FF6B2B", textDecoration: "none" }}>metrilabcl@gmail.com</a></li>
          </ul>

          <h2 style={h2}>2. Objeto del sitio</h2>
          <p style={{ margin: "0 0 14px" }}>
            El sitio es un canal informativo cuyo objeto es:
          </p>
          <ul style={ul}>
            <li>Presentar los servicios de marketing digital que ofrezco como freelance.</li>
            <li>Publicar contenidos del blog con fines educativos e informativos.</li>
            <li>Permitir el contacto comercial a través del formulario y los canales de correo y teléfono.</li>
          </ul>
          <p style={{ margin: 0 }}>
            El sitio no vende productos ni servicios en línea, no procesa pagos y no formaliza contratos por sí mismo. Las propuestas comerciales se acuerdan por escrito y de forma separada.
          </p>

          <h2 style={h2}>3. Uso aceptable</h2>
          <p style={{ margin: "0 0 14px" }}>
            Al usar el sitio te comprometes a:
          </p>
          <ul style={ul}>
            <li>No utilizarlo para fines ilícitos o que infrinjan derechos de terceros.</li>
            <li>No intentar acceder, alterar o dañar sistemas o datos a los que no estés autorizado.</li>
            <li>No enviar contenido difamatorio, ofensivo, fraudulento o malicioso a través del formulario.</li>
            <li>No utilizar bots, scrapers ni mecanismos automatizados que sobrecarguen el sitio.</li>
          </ul>

          <h2 style={h2}>4. Propiedad intelectual</h2>
          <p style={{ margin: "0 0 14px" }}>
            Los textos, imágenes, diseño, marcas, logos y contenidos publicados en el sitio son de mi titularidad o se utilizan con la autorización correspondiente, y están protegidos por la Ley N° 17.336 sobre Propiedad Intelectual de la República de Chile y los tratados internacionales aplicables. Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otro uso sin mi autorización previa y por escrito, salvo los usos permitidos por la ley.
          </p>
          <p style={{ margin: 0 }}>
            Puedes citar fragmentos del blog con fines no comerciales siempre que indiques la fuente y un enlace al sitio.
          </p>

          <h2 style={h2}>5. Servicios contratados</h2>
          <p style={{ margin: 0 }}>
            Las condiciones específicas de cada servicio (alcance, plazos, entregables, precio, propiedad de los activos creados, confidencialidad y vigencia) se acuerdan caso a caso mediante una propuesta comercial escrita y aceptada por ambas partes. Esa propuesta prevalece sobre estos términos generales en lo relativo a la prestación del servicio.
          </p>

          <h2 style={h2}>6. Limitación de responsabilidad</h2>
          <p style={{ margin: "0 0 14px" }}>
            La información del sitio se proporciona con fines informativos y de orientación general. No constituye asesoría legal, contable, tributaria, ni recomendación de inversión.
          </p>
          <p style={{ margin: 0 }}>
            Hago esfuerzos razonables para mantener el sitio operativo, actualizado y libre de errores, pero no garantizo disponibilidad ininterrumpida ni ausencia total de inexactitudes. En la máxima medida permitida por la ley chilena, no soy responsable por daños indirectos, incidentales o lucro cesante derivados del uso o imposibilidad de uso del sitio, salvo dolo o culpa grave.
          </p>

          <h2 style={h2}>7. Enlaces a sitios de terceros</h2>
          <p style={{ margin: 0 }}>
            El sitio puede incluir enlaces a páginas externas. Esos sitios se rigen por sus propios términos y políticas; no respondo por su contenido, disponibilidad ni prácticas de privacidad.
          </p>

          <h2 style={h2}>8. Protección de datos</h2>
          <p style={{ margin: 0 }}>
            El tratamiento de los datos personales que entregues a través del sitio se rige por mi{" "}
            <Link href="/privacidad" style={{ color: "#FF6B2B", textDecoration: "none" }}>Política de Privacidad</Link>, que forma parte integrante de estos términos.
          </p>

          <h2 style={h2}>9. Modificaciones</h2>
          <p style={{ margin: 0 }}>
            Puedo actualizar estos términos para reflejar cambios legales o de funcionamiento del sitio. La versión vigente estará siempre publicada en esta página con su fecha de última actualización. Si los cambios son sustantivos, lo informaré con un aviso visible en el sitio.
          </p>

          <h2 style={h2}>10. Ley aplicable y jurisdicción</h2>
          <p style={{ margin: 0 }}>
            Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia derivada de su interpretación o cumplimiento se someterá a los tribunales ordinarios de justicia de la República de Chile, sin perjuicio de los derechos del consumidor que corresponda invocar conforme a la Ley N° 19.496.
          </p>

          <h2 style={h2}>11. Contacto</h2>
          <p style={{ margin: 0 }}>
            Para consultas sobre estos términos, escríbeme a{" "}
            <a href="mailto:metrilabcl@gmail.com" style={{ color: "#FF6B2B", textDecoration: "none" }}>metrilabcl@gmail.com</a>.
          </p>
        </div>

        <div style={{ marginTop: 44 }}>
          <Link href="/" className="bv-btn-ghost" style={{ padding: "13px 24px" }}>
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
