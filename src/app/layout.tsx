import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "An Earthy Tale | Sustainable Fashion for a Better Tomorrow",
    template: "%s | An Earthy Tale",
  },
  description:
    "Eco-friendly, ethically made clothing using hemp, bamboo, and banana fabric. Handcrafted with botanical printing and natural dyeing. Fashion that doesn't harm the planet.",
  keywords: [
    "sustainable fashion",
    "eco-friendly clothing",
    "hemp clothing",
    "bamboo fabric",
    "banana fabric",
    "botanical printing",
    "natural dyeing",
    "ethical fashion",
    "slow fashion",
    "handmade clothing",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "An Earthy Tale",
    title: "An Earthy Tale | Sustainable Fashion for a Better Tomorrow",
    description:
      "Eco-friendly, ethically made clothing. Handcrafted with botanical printing and natural dyeing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "An Earthy Tale | Sustainable Fashion",
    description:
      "Eco-friendly, ethically made clothing. Handcrafted with botanical printing and natural dyeing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
