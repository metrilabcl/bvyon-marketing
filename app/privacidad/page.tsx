import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo trato los datos personales que recibo a través de bvyon-marketing.cl: qué recopilo, para qué, por cuánto tiempo y qué derechos tienes.",
  alternates: { canonical: "/privacidad" },
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

export default function PrivacidadPage() {
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
          Política de Privacidad
        </h1>
        <p style={{ fontSize: 13, color: "#6b7488", margin: "8px 0 36px" }}>Última actualización: mayo 2026</p>

        <div
          className="prose prose-invert max-w-none"
          style={{ fontSize: 15.5, lineHeight: 1.75, color: "#cdd3e0", maxWidth: 760 }}
        >
          <p style={{ margin: "0 0 20px" }}>
            Soy <strong style={{ color: "#fff" }}>Bastián Vega Yon</strong>, especialista freelance en marketing digital y responsable del sitio <strong style={{ color: "#fff" }}>bvyon-marketing.cl</strong> (en adelante, &ldquo;bvyon marketing&rdquo; o &ldquo;el sitio&rdquo;). Esta política explica cómo trato los datos personales que recibo cuando visitas el sitio o me escribes a través del formulario de contacto, en cumplimiento de la Ley N° 19.628 sobre Protección de la Vida Privada de la República de Chile.
          </p>

          <h2 style={h2}>1. Responsable del tratamiento</h2>
          <ul style={ul}>
            <li>Responsable: Bastián Vega Yon (bvyon marketing)</li>
            <li>Domicilio: República de Chile</li>
            <li>Correo de contacto: <a href="mailto:metrilabcl@gmail.com" style={{ color: "#FF6B2B", textDecoration: "none" }}>metrilabcl@gmail.com</a></li>
          </ul>

          <h2 style={h2}>2. Datos que recopilo</h2>
          <p style={{ margin: "0 0 14px" }}>
            Solo recopilo los datos que tú me entregas voluntariamente al completar el formulario de contacto del sitio:
          </p>
          <ul style={ul}>
            <li>Nombre y apellido</li>
            <li>Correo electrónico</li>
            <li>Teléfono (opcional)</li>
            <li>Empresa u organización (opcional)</li>
            <li>Servicio o paquete de interés (opcional)</li>
            <li>El contenido del mensaje que me envíes</li>
          </ul>
          <p style={{ margin: "0 0 14px" }}>
            No recopilo datos sensibles (origen racial, opiniones políticas, convicciones religiosas, estado de salud, vida sexual, ni datos biométricos) y te pido que no incluyas ese tipo de información en tu mensaje.
          </p>

          <h2 style={h2}>3. Finalidad y base legal</h2>
          <p style={{ margin: "0 0 14px" }}>
            Trato tus datos con las siguientes finalidades:
          </p>
          <ul style={ul}>
            <li>Responder tu consulta y evaluar si puedo ayudarte con tu proyecto.</li>
            <li>Enviarte una propuesta comercial si la solicitas.</li>
            <li>Mantener un registro mínimo de la conversación para dar continuidad al proyecto si decides contratarme.</li>
          </ul>
          <p style={{ margin: 0 }}>
            La base legal del tratamiento es tu <strong style={{ color: "#fff" }}>consentimiento</strong>, que entregas de forma libre, informada y específica al enviar el formulario de contacto. Sin tus datos no puedo responder tu consulta.
          </p>

          <h2 style={h2}>4. Plazo de conservación</h2>
          <p style={{ margin: 0 }}>
            Conservo los datos del formulario por un máximo de <strong style={{ color: "#fff" }}>24 meses</strong> desde el último contacto. Si en ese plazo no iniciamos un proyecto, elimino tus datos. Si llegamos a contratar servicios, los datos se conservan mientras dure la relación comercial y por los plazos que exija la legislación tributaria y comercial chilena.
          </p>

          <h2 style={h2}>5. Destinatarios y proveedores</h2>
          <p style={{ margin: "0 0 14px" }}>
            No vendo ni cedo tus datos a terceros con fines comerciales. Para operar el sitio y responder tus consultas utilizo los siguientes proveedores que pueden tratar tus datos como encargados:
          </p>
          <ul style={ul}>
            <li><strong style={{ color: "#fff" }}>Vercel Inc.</strong> — alojamiento del sitio web.</li>
            <li><strong style={{ color: "#fff" }}>Resend</strong> — envío del correo con tu mensaje hacia mi bandeja.</li>
            <li><strong style={{ color: "#fff" }}>Google Workspace (Gmail)</strong> — recepción y gestión del correo.</li>
          </ul>
          <p style={{ margin: 0 }}>
            Estos proveedores pueden almacenar datos fuera de Chile. Selecciono proveedores con estándares reconocidos de protección de datos.
          </p>

          <h2 style={h2}>6. Cookies y analítica</h2>
          <p style={{ margin: 0 }}>
            El sitio no instala cookies publicitarias ni de seguimiento de terceros por defecto. Si en el futuro habilito una herramienta de analítica (por ejemplo, Google Analytics 4 o un equivalente respetuoso de la privacidad), lo informaré en esta política y, cuando corresponda, mediante un aviso visible en el sitio. Puedes bloquear cookies desde la configuración de tu navegador en cualquier momento.
          </p>

          <h2 style={h2}>7. Tus derechos</h2>
          <p style={{ margin: "0 0 14px" }}>
            Como titular de los datos, puedes ejercer en cualquier momento los siguientes derechos:
          </p>
          <ul style={ul}>
            <li><strong style={{ color: "#fff" }}>Acceso</strong>: solicitar copia de los datos que tengo sobre ti.</li>
            <li><strong style={{ color: "#fff" }}>Rectificación</strong>: pedir que corrija datos inexactos o desactualizados.</li>
            <li><strong style={{ color: "#fff" }}>Supresión</strong>: pedir que elimine tus datos cuando ya no sean necesarios.</li>
            <li><strong style={{ color: "#fff" }}>Oposición</strong>: oponerte al tratamiento por motivos legítimos.</li>
            <li><strong style={{ color: "#fff" }}>Revocación del consentimiento</strong>: retirar tu consentimiento en cualquier momento.</li>
          </ul>
          <p style={{ margin: 0 }}>
            Para ejercerlos, escríbeme a{" "}
            <a href="mailto:metrilabcl@gmail.com" style={{ color: "#FF6B2B", textDecoration: "none" }}>metrilabcl@gmail.com</a>{" "}
            indicando el derecho que deseas ejercer. Respondo en un plazo máximo de 15 días hábiles. Si consideras que mi respuesta no satisface tu solicitud, puedes reclamar ante los tribunales competentes de la República de Chile.
          </p>

          <h2 style={h2}>8. Seguridad</h2>
          <p style={{ margin: 0 }}>
            Aplico medidas técnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, pérdida o alteración. Aun así, ninguna transmisión por internet es 100% segura; en caso de incidente que afecte tus datos, te informaré por correo electrónico tan pronto como sea posible.
          </p>

          <h2 style={h2}>9. Menores de edad</h2>
          <p style={{ margin: 0 }}>
            El sitio está dirigido a personas mayores de 18 años. Si eres menor, te pido no enviar datos a través del formulario de contacto sin la autorización de tu representante legal.
          </p>

          <h2 style={h2}>10. Cambios en esta política</h2>
          <p style={{ margin: 0 }}>
            Puedo actualizar esta política para reflejar cambios legales o de funcionamiento del sitio. La versión vigente siempre estará publicada en esta página, con la fecha de última actualización al inicio del documento.
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
