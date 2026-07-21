import type { Metadata } from "next";
import Header from "./components/Header/Header";

import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-family",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--second-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camper Rental",
  description: "Find and book your perfect camper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
