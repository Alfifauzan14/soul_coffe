import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOUL COFFEE — One Liter of Soulful Coffee",
  description:
    "Soul Coffee is a premium cold brew coffee brand crafted in the heart of Indonesia. Explore our signature blends — House Blend, Gayo Dark, and White Soul — made from 100% Arabica beans with 24h cold extraction.",
  keywords: [
    "soul coffee",
    "cold brew",
    "kopi indonesia",
    "arabica",
    "gayo",
    "premium coffee",
    "order kopi",
  ],
  openGraph: {
    title: "SOUL COFFEE — One Liter of Soulful Coffee",
    description: "Premium cold brew coffee crafted in the heart of Indonesia.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-poppins antialiased">{children}</body>
    </html>
  );
}
