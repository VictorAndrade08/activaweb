import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos nivel 2026 para dominar al compartir links por WhatsApp/LinkedIn
export const metadata: Metadata = {
  title: "ActivaWeb | Páginas Web para Abogados y Médicos",
  description: "Desarrollamos infraestructura web de alto rendimiento y carga instantánea en Ecuador. Planes sin suscripciones eternas.",
  openGraph: {
    title: "ActivaWeb | Tecnología Ágil para su Prestigio",
    description: "Páginas web ultra rápidas para captar pacientes y clientes reales. Pago único, sin sorpresas.",
    url: "https://activaweb.com", // Cambiar por tu dominio real
    siteName: "ActivaWeb",
    images: [
      {
        url: "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/hero.webp", // Imagen por defecto al compartir
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
  // Schema Markup inyectado para SEO Local en Ambato y posicionamiento de servicios
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ActivaWeb",
    "image": "https://capitalstudioec.com/wp-content/uploads/activa-web.png",
    "description": "Desarrollamos infraestructura web de carga instantánea enfocada en la captación de clientes para profesionales exigentes en Ecuador.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ambato",
      "addressCountry": "EC"
    },
    "telephone": "+593994715278",
    "priceRange": "$150 - $450",
    "areaServed": ["Ambato", "Quito", "Guayaquil", "Cuenca"],
    "url": "https://activaweb.com"
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}