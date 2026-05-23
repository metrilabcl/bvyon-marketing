import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bvyon-marketing.cl"),
  title: {
    default: "bvyon marketing | Marketing Digital en el Norte de Chile",
    template: "%s | bvyon marketing",
  },
  description:
    "La mejor agencia de marketing digital en el norte de Chile. Potenciamos tu marca con estrategias digitales integrales: SEO, redes sociales, publicidad digital y más. Presencia en Antofagasta, Iquique, Arica y Calama.",
  keywords: [
    "agencia de marketing",
    "marketing digital",
    "norte de Chile",
    "Antofagasta",
    "Iquique",
    "Arica",
    "Calama",
    "SEO",
    "publicidad digital",
    "redes sociales",
    "bvyon marketing",
    "marketing sin límites",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "bvyon marketing",
    title: "bvyon marketing | Marketing Digital en el Norte de Chile",
    description:
      "Marketing sin límites. bvyon marketing en el norte de Chile — donde los datos impulsan cada decisión.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "bvyon marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "bvyon marketing | Marketing Digital en el Norte de Chile",
    description: "Marketing sin límites. bvyon marketing en el norte de Chile.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body
        className="antialiased"
        style={{
          fontFamily: "var(--font-body, Inter, system-ui, sans-serif)",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
