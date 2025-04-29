import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import DevelopedBy from "@/components/DevelopedBy";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Townsville Alterations and Formal Wear | Tailoring, Suit Hire, Alterations",
  description: "Townsville Alterations and Formal Wear - Reinvent Your Wardrobe. Hire or tailor-make outfits that turn heads. Expert suit hire, bridal alterations, and tailoring in Townsville.",
  keywords: "Townsville Tailoring, Formal Wear Townsville, Suit Hire, Alterations, Wedding Dress Alterations, Custom Tailoring",
  authors: [{ name: "Townsville Alterations & Formal Wear" }],
  creator: "Townsville Alterations & Formal Wear",
  publisher: "Townsville Alterations & Formal Wear",
  robots: "index, follow",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <ContactSection />
        <DevelopedBy />
      </body>
    </html>
  );
}
