import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe. Vuelve al inicio de bvyon marketing.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F7F9FC] px-4">
      <div className="text-center max-w-md mx-auto">
        <div
          className="text-9xl font-black text-[#0D1B4B] mb-2 leading-none"
          style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
        >
          404
        </div>
        <div className="w-16 h-1 bg-[#FF6B2B] mx-auto mb-8 rounded-full" />
        <h1
          className="text-2xl font-bold text-[#0D1B4B] mb-4"
          style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
        >
          Página no encontrada
        </h1>
        <p className="text-[#4A5568] mb-8 leading-relaxed">
          La página que buscas no existe o fue movida. Pero podemos ayudarte a
          encontrar lo que necesitas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-[#FF6B2B] text-[#0D1B4B] font-bold rounded-xl hover:bg-[#e85e22] transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-3 border-2 border-[#0D1B4B] text-[#0D1B4B] font-bold rounded-xl hover:bg-[#0D1B4B] hover:text-white transition-colors"
          >
            Contactarme
          </Link>
        </div>
      </div>
    </section>
  );
}
