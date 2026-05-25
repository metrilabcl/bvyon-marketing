import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de bvyon marketing.",
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
        <p className="text-slate mb-8 text-sm">Última actualización: mayo 2025</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate leading-relaxed">
          <p>
            Al acceder y utilizar el sitio web de <strong className="text-primary">bvyon marketing</strong> aceptas los presentes términos. Si no estás de acuerdo, te pedimos que no utilices el sitio.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">1. Objeto del sitio</h2>
          <p>
            Este sitio web tiene como finalidad presentar los servicios de marketing digital de Bastian Vega Yon (bvyon marketing) y facilitar el contacto con potenciales clientes.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">2. Propiedad intelectual</h2>
          <p>
            Todo el contenido del sitio (textos, imágenes, diseño, logotipos) es propiedad de bvyon marketing y está protegido por la legislación chilena de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">3. Limitación de responsabilidad</h2>
          <p>
            La información del sitio se proporciona con fines informativos. bvyon marketing no garantiza que el sitio esté libre de errores o interrupciones. No somos responsables por daños derivados del uso del sitio.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">4. Servicios contratados</h2>
          <p>
            Los términos específicos de cada contrato de prestación de servicios se rigen por la propuesta comercial firmada entre las partes, la cual prevalece sobre estos términos generales.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Ley aplicable</h2>
          <p>
            Estos términos se rigen por la legislación vigente en la República de Chile. Cualquier disputa será sometida a los tribunales de la ciudad de Antofagasta.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">6. Contacto</h2>
          <p>
            Para consultas sobre estos términos, escríbenos a{" "}
            <a href="mailto:metrilabcl@gmail.com" className="text-accent hover:underline">
              metrilabcl@gmail.com
            </a>.
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
