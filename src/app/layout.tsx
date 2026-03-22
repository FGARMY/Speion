import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Preloader from "@/components/shared/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Preloader />
        <CustomCursor />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
