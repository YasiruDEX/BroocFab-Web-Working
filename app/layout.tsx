import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://broocfab.com"),
  title: {
    default: "BroocFab | Professional 3D Printing & Rapid Prototyping Sri Lanka",
    template: "%s | BroocFab 3D Printing",
  },
  description: "Premium engineering-grade 3D printing, rapid prototyping, and custom digital fabrication services in Colombo, Sri Lanka. FDM, SLA resin, and rapid delivery.",
  keywords: [
    "3D Printing Sri Lanka",
    "Rapid Prototyping Sri Lanka",
    "Custom 3D Printing Colombo",
    "FDM printing Sri Lanka",
    "SLA printing Sri Lanka",
    "Prototype Manufacturing Sri Lanka",
    "Engineering prototyping Sri Lanka",
    "3D fabrication studio Sri Lanka",
    "On-demand 3D printing Sri Lanka",
    "Industrial 3D printing Sri Lanka",
    "Resin 3D Printing Sri Lanka",
    "BroocFab"
  ],
  authors: [{ name: "BroocFab" }],
  creator: "BroocFab",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://broocfab.com",
    title: "BroocFab | Professional 3D Printing & Rapid Prototyping Sri Lanka",
    description: "Premium engineering-grade 3D printing, rapid prototyping, and custom digital fabrication services in Colombo, Sri Lanka. FDM, SLA resin, and rapid delivery.",
    siteName: "BroocFab",
    images: [
      {
        url: "/main.jpg",
        width: 1200,
        height: 630,
        alt: "BroocFab 3D Printing Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BroocFab | Professional 3D Printing & Rapid Prototyping Sri Lanka",
    description: "Premium engineering-grade 3D printing and custom digital fabrication services in Colombo, Sri Lanka.",
    images: ["/main.jpg"],
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
  alternates: {
    canonical: "https://broocfab.com",
  },
  icons: [
    {
      rel: "icon",
      url: "/logo_main.png",
      href: "/logo_main.png",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BroocFab",
  "image": "https://broocfab.com/logo_main.png",
  "description": "Professional 3D Printing & Rapid Prototyping in Sri Lanka. FDM and SLA resin printing for engineering, architectural, and consumer projects.",
  "@id": "https://broocfab.com",
  "url": "https://broocfab.com",
  "telephone": "+94702534485",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Colombo",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.9271,
    "longitude": 79.8612
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://facebook.com/broocfab",
    "https://instagram.com/broocfab"
  ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
