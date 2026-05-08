import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["700", "800"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export const metadata: Metadata = {
  title: "ActivaWeb | Páginas Web para Abogados y Médicos",
  description: "Desarrollamos infraestructura web de alto rendimiento y carga instantánea en Ecuador. Planes sin suscripciones eternas.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "ActivaWeb | Tecnología Ágil para su Prestigio",
    description: "Páginas web ultra rápidas para captar pacientes y clientes reales. Pago único, sin sorpresas.",
    url: "https://activawebpro.com",
    siteName: "ActivaWeb",
    images: [
      {
        url: "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/hero.webp",
        width: 1200,
        height: 630,
        alt: "ActivaWeb Infraestructura Web",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ActivaWeb | Infraestructura Web",
    description: "Su prestigio merece una web con tecnología ágil.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ActivaWeb",
    "image": "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/activaweblogofinal.svg",
    "description": "Desarrollamos infraestructura web de carga instantánea enfocada en la captación de clientes para profesionales exigentes en Ecuador.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ambato",
      "addressCountry": "EC"
    },
    "telephone": "+593994715278",
    "priceRange": "$150 - $450",
    "areaServed": ["Ambato", "Quito", "Guayaquil", "Cuenca"],
    "url": "https://activawebpro.com"
  };

  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://pub-25cde2184a5249da96fa022aae951321.r2.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://pub-25cde2184a5249da96fa022aae951321.r2.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
