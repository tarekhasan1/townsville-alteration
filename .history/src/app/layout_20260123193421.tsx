import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import FloatingCallButton from "@/components/FloatingCallButton";

export const metadata: Metadata = {
  title: "Townsville Alterations and Formal Wear | Tailoring, Suit Hire, Alterations",
  description:
    "Townsville Alterations and Formal Wear - Reinvent Your Wardrobe. Hire or tailor-make outfits that turn heads. Expert suit hire, bridal alterations, and tailoring in Townsville.",
  keywords:
    "Townsville Tailoring, Formal Wear Townsville, Suit Hire, Alterations, Wedding Dress Alterations, Custom Tailoring",
  authors: [{ name: "Townsville Alterations & Formal Wear" }],
  creator: "Townsville Alterations & Formal Wear",
  publisher: "Townsville Alterations & Formal Wear",
  robots: "index, follow",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LayoutShell>{children}</LayoutShell>

        {/* Global Floating Call Button */}
        <FloatingCallButton />
      </body>
    </html>
  );
}
