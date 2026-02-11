import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://tenda360.com'),
  title: {
    default: "Tenda 360 Limited | Marketing & Business Development Agency",
    template: "%s | Tenda 360 Limited"
  },
  description: "Tenda 360 Limited is a dynamic marketing and business development agency specializing in bridging the gap between brands and consumers through integrated marketing solutions.",
  keywords: ["marketing agency", "business development", "digital marketing", "merchandising", "sales as a service", "Uganda marketing", "brand activation"],
  authors: [{ name: "Tenda 360 Limited" }],
  creator: "Tenda 360 Limited",
  publisher: "Tenda 360 Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tenda360.com",
    siteName: "Tenda 360 Limited",
    title: "Tenda 360 Limited | Marketing & Business Development Agency",
    description: "Dynamic marketing and business development agency bridging the gap between brands and consumers through integrated solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tenda 360 Limited Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenda 360 Limited | Marketing & Business Development Agency",
    description: "Dynamic marketing and business development agency bridging the gap between brands and consumers.",
    images: ["/logo.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tenda 360 Limited",
              "description": "Dynamic marketing and business development agency specializing in integrated marketing solutions",
              "url": "https://tenda360.com",
              "logo": "https://tenda360.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+256-761-041370",
                "contactType": "customer service",
                "areaServed": "UG",
                "availableLanguage": "English"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
