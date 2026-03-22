"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur-xl py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-black tracking-tighter text-gradient group-hover:scale-105 transition-transform">SPEION</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-muted hover:[&_a]:text-foreground transition-all">
          <Link href="#services" className="hover:glow-text">Services</Link>
          <Link href="#pricing" className="hover:glow-text">Pricing</Link>
          <Link href="#addons" className="hover:glow-text">Add-ons</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button size="sm" className="rounded-full px-6 bg-primary hover:glow-primary transition-all">
            Get Started
          </Button>
        </div>
      </Container>
    </motion.header>
  );
}
