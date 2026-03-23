import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://speion.com"),
  title: {
    default: "Speion | Digital Artistry & High-Performance Websites",
    template: "%s | Speion"
  },
  description: "Speion is a world-class digital agency crafting premium websites, brand identities, and high-conversion digital experiences for ambitious brands.",
  keywords: [
    "Premium Digital Agency", 
    "High-Performance Web Development", 
    "Brand Identity Design", 
    "UI/UX Design", 
    "Next.js Experts", 
    "Speion Agency"
  ],
  authors: [{ name: "Speion Team" }],
  creator: "Speion",
  publisher: "Speion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://speion.com",
    siteName: "Speion",
    title: "Speion | Digital Artistry & High-Performance Websites",
    description: "Crafting premium digital experiences that drive growth and command attention.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Speion Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speion | Premium Digital Agency",
    description: "Crafting premium digital experiences that drive growth.",
    images: ["/og-image.jpg"],
    creator: "@speion",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Analytics } from "@/components/analytics";
import { Suspense } from "react";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll>
            <Suspense fallback={null}>
              <Analytics />
            </Suspense>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
