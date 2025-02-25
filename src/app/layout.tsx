import type React from "react"
import type { Metadata } from "next"
import { Poppins, Volkhov } from "next/font/google"
import "./globals.css"
import { AOSInit } from "./components/AOS"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const volkhov = Volkhov({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-volkhov",
})

export const metadata: Metadata = {
  title: "Duality Domain | Desarrollo Web Profesional",
  description:
    "Expertos en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas para empresas en Argentina y Latinoamérica.",
  keywords: "desarrollo web, diseño web, aplicaciones móviles, SEO,landing pague, tienda, e-commerce, Villa del Dique, Córdoba, Argentina",
  authors: [{ name: "Duality Domain", url: "https://dualitydomain.com" }],
  creator: "Duality Domain",
  publisher: "Duality Domain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dualitydomain.com"),
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/es-ar",
    },
  },
  openGraph: {
    title: "Duality Domain | Desarrollo Web Profesional",
    description:
      "Expertos en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas para empresas en Argentina y Latinoamérica.",
    url: "https://dualitydomain.com",
    siteName: "Duality Domain",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://dualitydomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Duality Domain - Desarrollo Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duality Domain | Desarrollo Web Profesional",
    description:
      "Expertos en desarrollo web, aplicaciones móviles y soluciones digitales personalizadas para empresas en Argentina y Latinoamérica.",
    images: ["https://dualitydomain.com/twitter-image.jpg"],
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
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00a9ac" />
        <meta name="msapplication-TileColor" content="#00a9ac" />
        <meta name="theme-color" content="#00a9ac" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Duality Domain",
              image: "https://dualitydomain.com/logo.png",
              "@id": "https://dualitydomain.com",
              url: "https://dualitydomain.com",
              telephone: "+5493546501537",
              email: "dualitydomainoficial@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Villa del Dique",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                postalCode: "5862",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.1833,
                longitude: -64.4667,
              },
              sameAs: ["https://www.instagram.com/dualitydomain/", "https://dualitydomain.com"],
            }),
          }}
        />
      </head>
      <AOSInit />
      <body className={`${poppins.variable} ${volkhov.variable} font-sans`}>{children}</body>
    </html>
  )
}

