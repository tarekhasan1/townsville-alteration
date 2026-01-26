import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WH7KD8GK');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH7KD8GK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LayoutShell>{children}</LayoutShell>

        {/* Global Floating Call Button */}
        <FloatingCallButton />
      </body>
    </html>
  );
}
