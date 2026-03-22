"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/ui/magnetic";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40 bg-background flex flex-col items-center justify-center min-h-screen">
      {/* Floating Blurred Orbs - Reduced for mobile performance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] md:w-[40%] md:h-[40%] bg-primary/15 blur-[80px] md:blur-[120px] rounded-full transform-gpu"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[5%] w-[50%] h-[50%] md:w-[35%] md:h-[35%] bg-accent-pink/10 blur-[70px] md:blur-[100px] rounded-full transform-gpu hidden sm:block"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[15%] w-[40%] h-[40%] md:w-[30%] md:h-[30%] bg-accent-cyan/10 blur-[80px] md:blur-[120px] rounded-full transform-gpu hidden md:block"
        />
      </div>

      {/* Interactive Background Tracker - Optimized stiffness */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden lg:block"
        style={{ opacity }}
      >
        <motion.div
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 25, mass: 1 }}
          className="absolute w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full transform-gpu"
        />
      </motion.div>

      <Container className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md shadow-2xl text-sm font-semibold text-foreground/80 tracking-wide">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Premium Digital Agency 2026
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[9rem] 2xl:text-[11rem] font-black tracking-[-0.04em] mb-8 max-w-[100rem] mx-auto leading-[0.85] text-foreground text-balance">
            We Build High-Converting <br />
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(94,23,235,0.2)]">
              Revenue Engines
            </span>
          </h1>
        </motion.div>

        <motion.div
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Stop losing premium clients to average design. We engineer elite digital experiences 
            that position your brand as the undisputed authority in your industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 relative z-20"
        >
          <Magnetic>
            <Button size="lg" className="w-full sm:w-auto text-xl h-16 px-10 rounded-full font-bold group relative overflow-hidden transition-all shadow-[0_0_40px_-5px_rgba(108,71,255,0.5)] hover:shadow-primary/80">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-black/10 dark:bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-xl h-16 px-10 rounded-full font-bold border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 backdrop-blur-md hover:bg-primary hover:text-white transition-all">
              Book a Call
            </Button>
          </Magnetic>
        </motion.div>
      </Container>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-xs uppercase tracking-[0.4em] font-black">Explore</span>
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[2px] h-12 rounded-full bg-gradient-to-b from-primary via-accent-pink to-transparent"
        />
      </motion.div>
    </section>
  );
}
