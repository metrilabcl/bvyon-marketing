import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Cómo trato los datos personales que recibo a través de bvyon-marketing.cl: qué recopilo, para qué, por cuánto tiempo y qué derechos tienes.",
  alternates: { canonical: "https://bvyon-marketing.cl/privacidad" },
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-black text-primary mb-6"
          style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
        >
          Política de Privacidad
        </h1>
        <p className="text-slate mb-8 text-sm">Última actualización: mayo 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate leading-relaxed">
          <p>
            Soy <strong className="text-primary">Bastián Vega Yon</strong>, especialista freelance en marketing digital y responsable del sitio <strong className="text-primary">bvyon-marketing.cl</strong> (en adelante, &ldquo;bvyon marketing&rdquo; o &ldquo;el sitio&rdquo;). Esta política explica cómo trato los datos personales que recibo cuando visitas el sitio o me escribes a través del formulario de contacto, en cumplimiento de la Ley N° 19.628 sobre Protección de la Vida Privada de la República de Chile.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">1. Responsable del tratamiento</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responsable: Bastián Vega Yon (bvyon marketing)</li>
            <li>Domicilio: República de Chile</li>
            <li>Correo de contacto: <a href="mailto:metrilabcl@gmail.com" className="text-accent hover:underline">metrilabcl@gmail.com</a></li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8">2. Datos que recopilo</h2>
          <p>
            Solo recopilo los datos que tú me entregas voluntariamente al completar el formulario de contacto del sitio:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre y apellido</li>
            <li>Correo electrónico</li>
            <li>Teléfono (opcional)</li>
            <li>Empresa u organización (opcional)</li>
            <li>Servicio o paquete de interés (opcional)</li>
            <li>El contenido del mensaje que me envíes</li>
          </ul>
          <p>
            No recopilo datos sensibles (origen racial, opiniones políticas, convicciones religiosas, estado de salud, vida sexual, ni datos biométricos) y te pido que no incluyas ese tipo de información en tu mensaje.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">3. Finalidad y base legal</h2>
          <p>
            Trato tus datos con las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responder tu consulta y evaluar si puedo ayudarte con tu proyecto.</li>
            <li>Enviarte una propuesta comercial si la solicitas.</li>
            <li>Mantener un registro mínimo de la conversación para dar continuidad al proyecto si decides contratarme.</li>
          </ul>
          <p>
            La base legal del tratamiento es tu <strong>consentimiento</strong>, que entregas de forma libre, informada y específica al enviar el formulario de contacto. Sin tus datos no puedo responder tu consulta.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">4. Plazo de conservación</h2>
          <p>
            Conservo los datos del formulario por un máximo de <strong>24 meses</strong> desde el último contacto. Si en ese plazo no iniciamos un proyecto, elimino tus datos. Si llegamos a contratar servicios, los datos se conservan mientras dure la relación comercial y por los plazos que exija la legislación tributaria y comercial chilena.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Destinatarios y proveedores</h2>
          <p>
            No vendo ni cedo tus datos a terceros con fines comerciales. Para operar el sitio y responder tus consultas utilizo los siguientes proveedores que pueden tratar tus datos como encargados:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Vercel Inc.</strong> — alojamiento del sitio web.</li>
            <li><strong>Resend</strong> — envío del correo con tu mensaje hacia mi bandeja.</li>
            <li><strong>Google Workspace (Gmail)</strong> — recepción y gestión del correo.</li>
          </ul>
          <p>
            Estos proveedores pueden almacenar datos fuera de Chile. Selecciono proveedores con estándares reconocidos de protección de datos.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">6. Cookies y analítica</h2>
          <p>
            El sitio no instala cookies publicitarias ni de seguimiento de terceros por defecto. Si en el futuro habilito una herramienta de analítica (por ejemplo, Google Analytics 4 o un equivalente respetuoso de la privacidad), lo informaré en esta política y, cuando corresponda, mediante un aviso visible en el sitio. Puedes bloquear cookies desde la configuración de tu navegador en cualquier momento.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">7. Tus derechos</h2>
          <p>
            Como titular de los datos, puedes ejercer en cualquier momento los siguientes derechos:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Acceso</strong>: solicitar copia de los datos que tengo sobre ti.</li>
            <li><strong>Rectificación</strong>: pedir que corrija datos inexactos o desactualizados.</li>
            <li><strong>Supresión</strong>: pedir que elimine tus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposición</strong>: oponerte al tratamiento por motivos legítimos.</li>
            <li><strong>Revocación del consentimiento</strong>: retirar tu consentimiento en cualquier momento.</li>
          </ul>
          <p>
            Para ejercerlos, escríbeme a{" "}
            <a href="mailto:metrilabcl@gmail.com" className="text-accent hover:underline">metrilabcl@gmail.com</a>{" "}
            indicando el derecho que deseas ejercer. Respondo en un plazo máximo de 15 días hábiles. Si consideras que mi respuesta no satisface tu solicitud, puedes reclamar ante los tribunales competentes de la República de Chile.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">8. Seguridad</h2>
          <p>
            Aplico medidas técnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, pérdida o alteración. Aun así, ninguna transmisión por internet es 100% segura; en caso de incidente que afecte tus datos, te informaré por correo electrónico tan pronto como sea posible.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">9. Menores de edad</h2>
          <p>
            El sitio está dirigido a personas mayores de 18 años. Si eres menor, te pido no enviar datos a través del formulario de contacto sin la autorización de tu representante legal.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">10. Cambios en esta política</h2>
          <p>
            Puedo actualizar esta política para reflejar cambios legales o de funcionamiento del sitio. La versión vigente siempre estará publicada en esta página, con la fecha de última actualización al inicio del documento.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-[#0a1540] transition-colors text-sm"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
