import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehul Sartanpara — Full-Stack Shopify Developer",
  description:
    "Full-Stack Shopify Developer specializing in Shopify Plus, Checkout Extensions, Hydrogen & high-performance e-commerce solutions.",
  keywords: [
    "Shopify Developer",
    "Shopify Plus",
    "Hydrogen",
    "Checkout Extensions",
    "Freelance Shopify",
    "Mehul Sartanpara",
  ],
  authors: [{ name: "Mehul Sartanpara" }],
  openGraph: {
    title: "Mehul Sartanpara — Full-Stack Shopify Developer",
    description:
      "Building scalable, high-performance e-commerce on Shopify Plus.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
