"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const steps = [
  {
    tag: "Phase 01",
    title: "Intelligence & Audit",
    description: "We begin with a deep dive into your business metrics, identifying hidden friction points and growth opportunities through technical audits.",
  },
  {
    tag: "Phase 02",
    title: "Strategic Blueprint",
    description: "An architected roadmap defining every interaction, visual benchmark, and technical requirement for your digital asset.",
  },
  {
    tag: "Phase 03",
    title: "Elite Production",
    description: "Our collective of designers and engineers work in high-fidelity to build your platform using cutting-edge technologies.",
  },
  {
    tag: "Phase 04",
    title: "Deployment & Scale",
    description: "A seamless transition to live production followed by active monitoring and iterative optimizations for maximum ROI.",
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-background border-t border-foreground/5">
      <Container>
        <div className="mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-6 block">
            Our Modus Operandi
          </span>
          <h2 className="text-xl md:text-2xl font-black tracking-tight max-w-lg uppercase">
            A RIGOROUS 4-STEP SYSTEM TO TRANSFORM VISION INTO DIGITAL AUTHORITY.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-8 transition-colors group-hover:text-foreground">
                {step.tag}
              </span>
              
              <h3 className="text-xl font-black mb-6 uppercase tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
