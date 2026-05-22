import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://agencia360.cl"),
  title: {
    default: "Agencia 360 | Marketing Digital en el Norte de Chile",
    template: "%s | Agencia 360",
  },
  description:
    "La mejor agencia de marketing 360 en el norte de Chile. Potenciamos tu marca con estrategias digitales integrales: SEO, redes sociales, publicidad digital y más.",
  keywords: [
    "agencia de marketing",
    "marketing digital",
    "norte de Chile",
    "Iquique",
    "Antofagasta",
    "SEO",
    "publicidad digital",
    "redes sociales",
    "agencia 360",
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Agencia 360",
    title: "Agencia 360 | Marketing Digital en el Norte de Chile",
    description:
      "La mejor agencia de marketing 360 en el norte de Chile. Potenciamos tu marca con estrategias digitales integrales.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Agencia 360 - Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia 360 | Marketing Digital en el Norte de Chile",
    description: "La mejor agencia de marketing 360 en el norte de Chile.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
