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
  title: "EM Architecture | Architect Brasschaat Antwerp",
  description: "High-end architectural design studio in Brasschaat and Antwerp. Exceptional residential and commercial architecture with a focus on timeless, sophisticated design.",
  keywords: "architect Brasschaat, architect Antwerp, architecture Brasschaat, architecture Antwerp, high-end architect Belgium, luxury architect, EM Architecture",
  authors: [{ name: "EM Architecture" }],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://emarchitecture.be",
    siteName: "EM Architecture",
    title: "EM Architecture | Architect Brasschaat Antwerp",
    description: "High-end architectural design studio in Brasschaat and Antwerp. Exceptional residential and commercial architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EM Architecture | Architect Brasschaat Antwerp",
    description: "High-end architectural design studio in Brasschaat and Antwerp.",
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
        <StructuredData />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
