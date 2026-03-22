"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";

const projects = [
  {
    client: "Acme FinTech",
    metric: "+240% User Acquisition",
    role: "UX/UI & Next.js Development",
    color: "bg-primary/20",
  },
  {
    client: "Global Logistics",
    metric: "$2.4M Recovered Revenue",
    role: "E-Commerce Replatforming",
    color: "bg-accent-pink/20",
  },
  {
    client: "HealthCorp SaaS",
    metric: "45% Lower Churn Rate",
    role: "Product Design & Strategy",
    color: "bg-accent-cyan/20",
  },
  {
    client: "Enterprise B2B",
    metric: "12x Lead Generation",
    role: "Corporate Rebranding",
    color: "bg-indigo-500/20",
  }
];

export function WorkSection() {
  return (
    <Section id="work" className="bg-background relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
              Featured <AnimatedText text="Work" />
            </h2>
            <p className="text-xl text-muted-foreground mt-6 max-w-lg font-medium">
              We don't build brochures. We engineer revenue engines. Here is the proof.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className={`relative aspect-video rounded-3xl overflow-hidden border border-border group cursor-pointer ${project.color} dark:bg-black/40 backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                
                {/* Simulated Mockup Container */}
                <div className="absolute inset-x-8 -bottom-12 top-20 bg-card rounded-t-xl border border-border/50 shadow-2xl overflow-hidden transform group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-700 ease-out">
                    <div className="w-full h-8 bg-black/5 dark:bg-white/5 border-b border-border flex items-center px-4 gap-2 backdrop-blur-md">
                        <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-sm" />
                    </div>
                    {/* Placeholder content inside mockup */}
                    <div className="p-8 opacity-20 dark:opacity-20 flex flex-col gap-4">
                        <div className="w-1/2 h-8 bg-foreground rounded-lg" />
                        <div className="w-full h-4 bg-muted rounded" />
                        <div className="w-3/4 h-4 bg-muted rounded mb-4" />
                        <div className="w-full h-32 bg-primary/20 rounded-xl" />
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-3">
                    {project.role}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                    <h3 className="text-3xl font-black tracking-tight">{project.client}</h3>
                    <div className="px-5 py-2.5 bg-primary/90 backdrop-blur-md text-white border border-white/20 text-sm font-bold rounded-full shadow-[0_0_30px_rgba(94,23,235,0.4)]">
                        {project.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
