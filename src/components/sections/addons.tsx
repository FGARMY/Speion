"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { Search, ShoppingCart, PenTool, Settings } from "lucide-react";

export function AddonsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const addons = [
    {
      title: "Advanced SEO",
      description: "Rank higher on search engines and get found by your ideal customers.",
      icon: <Search className="w-8 h-8 text-accent-cyan" />,
    },
    {
      title: "E-commerce Engine",
      description: "Add robust selling capabilities, product management, and payment gateways.",
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    },
    {
      title: "Complete Branding",
      description: "Full visual identity kits including logos, colors, and typography standards.",
      icon: <PenTool className="w-8 h-8 text-accent-pink" />,
    },
    {
      title: "Ongoing Maintenance",
      description: "Regular updates, backups, security checks, and priority support.",
      icon: <Settings className="w-8 h-8 text-foreground" />,
    },
  ];

  return (
    <Section className="bg-card/20 relative overflow-hidden px-4" ref={containerRef}>
      {/* Scroll-hooked animated background */}
      <motion.div 
        style={{ y: yOffset }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <Container>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Powerful <AnimatedText text="Add-ons" />
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-medium leading-relaxed">
                Enhance your digital presence with our specialized additional services designed to 
                scale your business and streamline your operations.
              </p>
            </Reveal>
          </div>

          {/* 3D scrolling grid container */}
          <motion.div 
            style={{ rotateX, transformPerspective: 1000 }}
            className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10"
          >
            {addons.map((addon, index) => (
              <Reveal key={addon.title} delay={index * 0.1}>
                <div
                  className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:border-primary/20 hover:bg-black/[0.07] dark:bg-white/[0.07] transition-all group shadow-2xl h-full"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-2xl"
                  >
                    {addon.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{addon.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{addon.description}</p>
                </div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
