"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${
        isScrolled 
          ? "border-foreground/10 bg-background/80 backdrop-blur-xl py-3" 
          : "border-transparent bg-transparent py-6"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="group flex items-center">
          <span className="text-xl font-black tracking-tighter transition-all duration-300 group-hover:tracking-[0.1em]">
            SPEION
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-10">
          {["Work", "Services", "About", "Process"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Button 
            className="hidden sm:flex text-[10px] uppercase font-bold tracking-[0.25em] px-8 py-6 h-auto bg-foreground text-background hover:bg-foreground/90 transition-all rounded-none"
          >
            Start a Project
          </Button>
        </div>
      </Container>
    </motion.header>
  );
}

