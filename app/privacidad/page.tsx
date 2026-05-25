import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de bvyon marketing. Información sobre cómo tratamos tus datos personales.",
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
        <p className="text-slate mb-8 text-sm">Última actualización: mayo 2025</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate leading-relaxed">
          <p>
            En <strong className="text-primary">bvyon marketing</strong> (RUT individual de Bastian Vega Yon, Antofagasta, Chile) nos comprometemos a proteger la privacidad de quienes visitan nuestro sitio web y se ponen en contacto con nosotros.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">1. Datos que recopilamos</h2>
          <p>
            Recopilamos únicamente los datos que tú nos proporcionas voluntariamente a través del formulario de contacto: nombre, correo electrónico, empresa y el mensaje que envíes. No recopilamos datos sensibles.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">2. Uso de los datos</h2>
          <p>
            Los datos se utilizan exclusivamente para responder tu consulta y, con tu consentimiento, para enviarte información sobre nuestros servicios. No vendemos ni cedemos tus datos a terceros.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">3. Cookies y analítica</h2>
          <p>
            Este sitio puede utilizar Google Analytics 4 para medir el tráfico de forma agregada. Puedes desactivar las cookies analíticas desde la configuración de tu navegador.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">4. Tus derechos</h2>
          <p>
            Puedes solicitar acceso, rectificación o eliminación de tus datos en cualquier momento escribiendo a{" "}
            <a href="mailto:metrilabcl@gmail.com" className="text-accent hover:underline">
              metrilabcl@gmail.com
            </a>.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Actualizaciones</h2>
          <p>
            Esta política puede actualizarse ocasionalmente. Los cambios se publicarán en esta misma página.
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
