import { Metadata } from 'next';
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

import { EnquirySection } from "@/components/shared/EnquirySection";

export const metadata: Metadata = {
  metadataBase: new URL('https://nkacademy.in'),
  title: {
    default: "NK Academy | Best Coaching Classes in Borivali",
    template: "%s | NK Academy",
  },
  description: "Borivali's most trusted coaching institute for SSC, CBSE, ICSE, Science, Commerce, NEET, JEE and Sanskrit. Expert faculty and top results.",
  keywords: ["Coaching classes in Borivali", "Best CBSE classes", "Best ICSE classes", "SSC coaching", "NEET coaching Borivali", "JEE institute", "NK Academy"],
  openGraph: {
    title: "NK Academy | The Direction of Success",
    description: "Borivali's most trusted coaching institute for SSC, CBSE, ICSE, Science, Commerce, NEET, JEE and Sanskrit.",
    url: 'https://nkacademy.in',
    siteName: 'NK Academy',
    locale: 'en_IN',
    type: 'website',
  },
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
  twitter: {
    title: "NK Academy | The Direction of Success",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <EnquirySection />
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
