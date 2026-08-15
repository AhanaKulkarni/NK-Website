import { Metadata } from 'next';
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "NK Academy | Best Coaching Classes in Borivali | SSC CBSE ICSE NEET JEE",
  description: "Your child's best result starts here. 500+ students. Borivali's most trusted coaching since 2019. Expert coaching for SSC, CBSE, ICSE, Science, Commerce, NEET, JEE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet" />
        <SchemaMarkup />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
