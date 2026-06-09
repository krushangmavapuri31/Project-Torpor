import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "PROJECT TORPOR — Human Torpor for the Next Frontier",
    template: "%s — PROJECT TORPOR",
  },
  description:
    "Exploring synthetic torpor, metabolic suppression, and human hibernation technologies for future medicine and deep-space exploration.",
  openGraph: {
    title: "PROJECT TORPOR — Human Torpor for the Next Frontier",
    description:
      "Exploring synthetic torpor, metabolic suppression, and human hibernation technologies for future medicine and deep-space exploration.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#111111] font-sans">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
