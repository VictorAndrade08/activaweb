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

const SITE_URL = "https://activawebpro.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Diseño Web Abogados y Médicos en Ambato | ActivaWeb",
    template: "%s | ActivaWeb",
  },
  description:
    "Diseño web de alto rendimiento para abogados y médicos en Ambato. Entrega en 48 horas, pago único sin suscripciones eternas. Páginas que captan clientes.",
  keywords: [
    "diseño web Ambato",
    "páginas web para abogados",
    "páginas web para médicos",
    "agencia de diseño web Ambato",
    "desarrollo web Ecuador",
    "páginas web 48 horas",
    "diseño web pago único",
    "SEO local Ambato",
    "landing page médicos",
    "páginas web sin suscripciones",
    "páginas web carga rápida",
    "diseño web para dentistas Ambato",
    "páginas web para estudios jurídicos",
  ],
  authors: [{ name: "ActivaWeb", url: SITE_URL }],
  creator: "ActivaWeb",
  publisher: "ActivaWeb",
  applicationName: "ActivaWeb",
  category: "Web Development",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
    description:
      "Páginas web ultra rápidas para captar pacientes y clientes reales en Ecuador. Pago único, sin sorpresas. Entrega en 48 horas.",
    url: SITE_URL,
    siteName: "ActivaWeb",
    images: [
      {
        url: "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/hero.webp",
        width: 1200,
        height: 630,
        alt: "ActivaWeb — Infraestructura web para abogados y médicos en Ecuador",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ActivaWeb | Diseño Web para Abogados y Médicos en Ambato",
    description: "Su prestigio merece una web con tecnología ágil. Entrega en 48 horas, pago único.",
    images: ["https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/hero.webp"],
  },
  verification: {
    // google: "TU_CODIGO_DE_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "ActivaWeb",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/activaweblogofinal.svg",
          width: 512,
          height: 512,
        },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "ActivaWeb",
        description:
          "Diseño web de alto rendimiento para abogados y médicos en Ecuador.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "es-EC",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#localbusiness`,
        name: "ActivaWeb",
        image:
          "https://pub-25cde2184a5249da96fa022aae951321.r2.dev/activaweb/activaweblogofinal.svg",
        description:
          "Desarrollamos infraestructura web de carga instantánea enfocada en la captación de clientes para profesionales exigentes en Ecuador.",
        url: SITE_URL,
        telephone: "+593994715278",
        priceRange: "$150 - $450",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Bank Transfer, WhatsApp Payments",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ambato",
          addressRegion: "Tungurahua",
          addressCountry: "EC",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -1.2491,
          longitude: -78.6168,
        },
        areaServed: [
          { "@type": "City", name: "Ambato" },
          { "@type": "City", name: "Quito" },
          { "@type": "City", name: "Guayaquil" },
          { "@type": "City", name: "Cuenca" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planes de Diseño Web ActivaWeb",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Plan Profesional" },
              price: "150",
              priceCurrency: "USD",
              description: "Landing page de alta conversión, entrega en 48 horas, pago único.",
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Plan Business Pro" },
              price: "300",
              priceCurrency: "USD",
              description: "Sitio web multi-página de 5 secciones con sistema de citas y blog.",
            },
            {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: "Plan Élite Corporativo" },
              price: "450",
              priceCurrency: "USD",
              description: "Solución integral con pasarela de pagos, multi-idioma y CRM.",
            },
          ],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Diseño Web para Abogados y Médicos",
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        serviceType: [
          "Diseño web para abogados",
          "Diseño web para médicos",
          "Diseño web para clínicas dentales",
          "Desarrollo de landing pages",
          "SEO local",
        ],
        areaServed: ["Ambato", "Quito", "Guayaquil", "Cuenca"],
      },
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://pub-25cde2184a5249da96fa022aae951321.r2.dev" />
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
