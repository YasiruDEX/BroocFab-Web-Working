import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BroocFab | Professional 3D Printing & Rapid Prototyping Sri Lanka",
  description: "From precision FDM prototypes to high-detail SLA resin parts, BroocFab delivers engineering-grade 3D printing and custom digital fabrication services in Sri Lanka with rapid 48-hour delivery.",
  keywords: [
    "3D Printing Sri Lanka",
    "Rapid Prototyping Sri Lanka",
    "Custom 3D Printing Colombo",
    "Resin 3D Printing Sri Lanka",
    "Prototype Manufacturing Sri Lanka",
    "BroocFab",
    "SLA Resin printing",
    "FDM 3D printing"
  ],
  icons: [
    {
      rel: "icon",
      url: "/logo_main.png",
      href: "/logo_main.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
