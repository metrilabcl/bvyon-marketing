import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-url";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "bvyon marketing | Marketing Digital",
    template: "%s | bvyon marketing",
  },
  description:
    "Especialista freelance en marketing digital. Automatizaciones, SEO y publicidad digital para PYMEs y emprendimientos en Chile.",
  keywords: [
    "agencia de marketing",
    "marketing digital",
    "PYMEs Chile",
    "emprendimientos",
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
    title: "bvyon marketing | Marketing Digital",
    description:
      "Marketing sin límites. Donde los datos impulsan cada decisión.",
  },
  twitter: {
    card: "summary_large_image",
    title: "bvyon marketing | Marketing Digital",
    description: "Marketing sin límites.",
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
          background: "#060912",
          color: "#ffffff",
        }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:font-bold focus:rounded-lg focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <div aria-hidden="true" className="bv-grain" />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
