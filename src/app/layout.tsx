import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Celebra - Acceso Anticipado",
  description: "Acceso anticipado para organizadores de eventos. Antes del lanzamiento público, abrimos un cupo limitado.",
  keywords: [
    "eventos",
    "bodas",
    "quinceañeras",
    "celebraciones",
    "organizadores de eventos",
    "waitlist",
    "pre-lanzamiento"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
