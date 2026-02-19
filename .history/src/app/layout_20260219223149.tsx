import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import FloatingCallButton from "@/components/FloatingCallButton";
import AnalyticsTracker from "@/components/AnalyticsTracker";

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
        {/* Google tag (gtag.js) - GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2NPYSQMZNV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2NPYSQMZNV');
            `,
          }}
        />

        {/* Google Tag Manager - First GTM */}
        <Script
          id="gtm-script-1"
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

        {/* Google Tag Manager - Second GTM (new one for ads) */}
        <Script
          id="gtm-script-2"
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
              })(window,document,'script','dataLayer','GTM-T6KQBNGW');
            `,
          }}
        />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="MUuHDQMBv1xW6tSKEtjSqCuF42KSvQrkrzAYCh9k2zQ" />
      </head>

      <body>
        {/* Google Tag Manager (noscript) - First GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WH7KD8GK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager (noscript) - Second GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T6KQBNGW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <AnalyticsTracker />
        <LayoutShell>{children}</LayoutShell>
        <FloatingCallButton />
      </body>
    </html>
  );
}