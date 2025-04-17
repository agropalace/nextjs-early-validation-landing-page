import type { Metadata } from "next";
import Footer from '@/layout/Footer';
import "./globals.css";

export const metadata: Metadata = {
  title: "AgroPalace",
  description: "Agricultural products market place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
