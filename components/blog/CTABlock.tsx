import Link from "next/link";

export default function CTABlock() {
  return (
    <aside className="my-10 rounded-2xl bg-gradient-to-br from-[#0D1B4B] to-[#152260] text-white p-8 text-center">
      <h3
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
      >
        ¿Necesitas ayuda con tu marketing digital?
      </h3>
      <p className="text-gray-300 text-sm mb-5">
        Soy Bastian Vega Yon, especialista freelance en automatizaciones, estrategia digital y contenido con IA. La primera consulta es sin costo.
      </p>
      <Link
        href="/contacto"
        className="inline-block px-7 py-3 bg-[#FF6B2B] text-[#0D1B4B] font-bold rounded-xl hover:bg-[#e85e22] transition-colors"
      >
        Contáctame ahora
      </Link>
    </aside>
  );
}
