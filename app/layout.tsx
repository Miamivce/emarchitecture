import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emarchitecture.be'),
  title: "EM Architecture | Architect Brasschaat Antwerp",
  description: "High-end architectural design studio in Brasschaat and Antwerp. Exceptional residential and commercial architecture with a focus on timeless, sophisticated design.",
  keywords: "architect Brasschaat, architect Antwerp, architecture Brasschaat, architecture Antwerp, high-end architect Belgium, luxury architect, EM Architecture, residential architecture, commercial architecture",
  authors: [{ name: "EM Architecture" }],
  creator: "EM Architecture",
  publisher: "EM Architecture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://emarchitecture.be',
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://emarchitecture.be",
    siteName: "EM Architecture",
    title: "EM Architecture | Architect Brasschaat Antwerp",
    description: "High-end architectural design studio in Brasschaat and Antwerp. Exceptional residential and commercial architecture.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EM Architecture - Architect Brasschaat Antwerp',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EM Architecture | Architect Brasschaat Antwerp",
    description: "High-end architectural design studio in Brasschaat and Antwerp.",
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  other: {
    'geo.region': 'BE-VAN',
    'geo.placename': 'Brasschaat',
    'geo.position': '51.2913;4.4913',
    'ICBM': '51.2913, 4.4913',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#faf9f7" />
        <StructuredData />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
