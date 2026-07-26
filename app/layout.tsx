import type { Metadata } from "next";
import Header from "./components/Header/Header";

import { Inter, Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import QueryProvider from "./components/providers/QueryProvider";

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
  icons: {
    icon: "/favicon.png ",
  },
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
        <Toaster position="top-right" />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
