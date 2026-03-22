import type { Metadata } from "next";
import { Bebas_Neue, Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Preloader from "@/components/shared/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speion — Web Development, Logo Design & Branding Agency",
  description:
    "We build high-performance websites, stunning logos, and complete brand identity kits that convert visitors into customers. Modern tech stack, premium design, reliable delivery.",
  keywords: [
    "web development agency",
    "logo design",
    "branding",
    "Next.js",
    "React",
    "UI/UX design",
    "Speion",
  ],
  openGraph: {
    title: "Speion — Web Development, Logo Design & Branding Agency",
    description:
      "Premium websites, logos, and branding kits built for conversion and growth.",
    type: "website",
    locale: "en_IN",
    siteName: "Speion",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speion — Web Development, Logo Design & Branding Agency",
    description:
      "Premium websites, logos, and branding kits built for conversion and growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${syne.variable} ${dmSans.variable}`}>
      <body>
        <Preloader />
        <CustomCursor />
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
