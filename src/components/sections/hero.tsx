"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background">
      <Container className="relative z-10">
        <div className="max-w-[1200px] mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity, scale }}
          >
            <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-muted mb-8">
              Based in Bengaluru • Serving Globally
            </span>
            
            <h1 className="text-display font-black leading-[0.9] tracking-[-0.04em] mb-10 text-balance">
              WE BUILD <br />
              <span className="text-muted/20">DIGITAL</span> KINGS.
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-lg md:text-xl text-muted leading-relaxed max-w-md">
                  A elite digital collective crafting premium brand identities and high-performance platforms for ambitious companies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
                <Button 
                  className="text-[10px] uppercase font-bold tracking-[0.25em] px-12 py-8 h-auto bg-foreground text-background hover:bg-foreground/90 transition-all rounded-none"
                >
                  Start a Project
                </Button>
                <Button 
                  variant="outline"
                  className="text-[10px] uppercase font-bold tracking-[0.25em] px-12 py-8 h-auto border-foreground/10 hover:bg-foreground/5 transition-all rounded-none"
                >
                  View Work
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-muted">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-foreground/20 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
          />
        </div>
      </motion.div>

      {/* Subtle Background Detail */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      </div>
    </section>
  );
}

