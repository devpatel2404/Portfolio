import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Patel Portfolio",
  description: "Dev Patel Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <link rel="preload" href="/fonts/futura.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
      <body className={inter.className}>{children}</body>
      </html>
  );
}