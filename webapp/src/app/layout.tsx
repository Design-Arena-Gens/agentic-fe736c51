import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier · Modern Interior Furniture",
  description:
    "Discover Atelier, a modern interior furniture collection featuring modular sofas, sculpted tables, and curated lighting. Manage the catalog with an integrated admin panel.",
  metadataBase: new URL("https://agentic-fe736c51.vercel.app"),
  openGraph: {
    title: "Atelier · Modern Interior Furniture",
    description:
      "Explore a contemporary collection of interior furniture and manage items via the Atelier admin panel.",
    type: "website",
    url: "https://agentic-fe736c51.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
