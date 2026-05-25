import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio bvyon-marketing.cl: objeto, propiedad intelectual, limitación de responsabilidad y ley aplicable.",
  alternates: { canonical: "https://bvyon-marketing.cl/terminos" },
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-3xl sm:text-4xl font-black text-primary mb-6"
          style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
        >
          Términos y Condiciones
        </h1>
        <p className="text-slate mb-8 text-sm">Última actualización: mayo 2026</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate leading-relaxed">
          <p>
            Estos términos regulan el uso del sitio <strong className="text-primary">bvyon-marketing.cl</strong>, operado por <strong className="text-primary">Bastián Vega Yon</strong> (en adelante, &ldquo;bvyon marketing&rdquo; o &ldquo;el responsable&rdquo;). Al acceder al sitio aceptas estos términos. Si no estás de acuerdo, te pido que no lo utilices.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">1. Identificación del responsable</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Responsable: Bastián Vega Yon (bvyon marketing) — especialista freelance en marketing digital.</li>
            <li>País de operación: República de Chile.</li>
            <li>Contacto: <a href="mailto:metrilabcl@gmail.com" className="text-accent hover:underline">metrilabcl@gmail.com</a></li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8">2. Objeto del sitio</h2>
          <p>
            El sitio es un canal informativo cuyo objeto es:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Presentar los servicios de marketing digital que ofrezco como freelance.</li>
            <li>Publicar contenidos del blog con fines educativos e informativos.</li>
            <li>Permitir el contacto comercial a través del formulario y los canales de correo y teléfono.</li>
          </ul>
          <p>
            El sitio no vende productos ni servicios en línea, no procesa pagos y no formaliza contratos por sí mismo. Las propuestas comerciales se acuerdan por escrito y de forma separada.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">3. Uso aceptable</h2>
          <p>
            Al usar el sitio te comprometes a:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>No utilizarlo para fines ilícitos o que infrinjan derechos de terceros.</li>
            <li>No intentar acceder, alterar o dañar sistemas o datos a los que no estés autorizado.</li>
            <li>No enviar contenido difamatorio, ofensivo, fraudulento o malicioso a través del formulario.</li>
            <li>No utilizar bots, scrapers ni mecanismos automatizados que sobrecarguen el sitio.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8">4. Propiedad intelectual</h2>
          <p>
            Los textos, imágenes, diseño, marcas, logos y contenidos publicados en el sitio son de mi titularidad o se utilizan con la autorización correspondiente, y están protegidos por la Ley N° 17.336 sobre Propiedad Intelectual de la República de Chile y los tratados internacionales aplicables. Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otro uso sin mi autorización previa y por escrito, salvo los usos permitidos por la ley.
          </p>
          <p>
            Puedes citar fragmentos del blog con fines no comerciales siempre que indiques la fuente y un enlace al sitio.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Servicios contratados</h2>
          <p>
            Las condiciones específicas de cada servicio (alcance, plazos, entregables, precio, propiedad de los activos creados, confidencialidad y vigencia) se acuerdan caso a caso mediante una propuesta comercial escrita y aceptada por ambas partes. Esa propuesta prevalece sobre estos términos generales en lo relativo a la prestación del servicio.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">6. Limitación de responsabilidad</h2>
          <p>
            La información del sitio se proporciona con fines informativos y de orientación general. No constituye asesoría legal, contable, tributaria, ni recomendación de inversión.
          </p>
          <p>
            Hago esfuerzos razonables para mantener el sitio operativo, actualizado y libre de errores, pero no garantizo disponibilidad ininterrumpida ni ausencia total de inexactitudes. En la máxima medida permitida por la ley chilena, no soy responsable por daños indirectos, incidentales o lucro cesante derivados del uso o imposibilidad de uso del sitio, salvo dolo o culpa grave.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">7. Enlaces a sitios de terceros</h2>
          <p>
            El sitio puede incluir enlaces a páginas externas. Esos sitios se rigen por sus propios términos y políticas; no respondo por su contenido, disponibilidad ni prácticas de privacidad.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">8. Protección de datos</h2>
          <p>
            El tratamiento de los datos personales que entregues a través del sitio se rige por mi{" "}
            <Link href="/privacidad" className="text-accent hover:underline">Política de Privacidad</Link>, que forma parte integrante de estos términos.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">9. Modificaciones</h2>
          <p>
            Puedo actualizar estos términos para reflejar cambios legales o de funcionamiento del sitio. La versión vigente estará siempre publicada en esta página con su fecha de última actualización. Si los cambios son sustantivos, lo informaré con un aviso visible en el sitio.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">10. Ley aplicable y jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia derivada de su interpretación o cumplimiento se someterá a los tribunales ordinarios de justicia de la República de Chile, sin perjuicio de los derechos del consumidor que corresponda invocar conforme a la Ley N° 19.496.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">11. Contacto</h2>
          <p>
            Para consultas sobre estos términos, escríbeme a{" "}
            <a href="mailto:metrilabcl@gmail.com" className="text-accent hover:underline">metrilabcl@gmail.com</a>.
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
