"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import Image from "next/image";

const projects = [
  {
    title: "Echo Reality",
    category: "CGI • Experience Design",
    description: "An immersive digital ecosystem for the next generation of spatial computing.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Quantum Flux",
    category: "Brand Identity • Web3",
    description: "Reimagining institutional finance through high-fidelity digital artistry.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1600",
  },
  {
    title: "Symmetry Lab",
    category: "Product Design • SaaS",
    description: "Building the standard for collaborative intelligence in enterprise workflows.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1600",
  }
];

export function WorkSection() {
  return (
    <section id="work" className="section-padding bg-background">
      <Container>
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-6 block">
            Selected Work
          </span>
          <h2 className="text-xl md:text-2xl font-black tracking-tight max-w-lg mb-10">
            WE CRAFT DIGITAL ARTIFACTS THAT COMMAND ATTENTION AND DRIVE ACTION.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-none"
            >
              <div className="relative aspect-[21/9] overflow-hidden mb-10 border border-foreground/5 transition-all duration-700 group-hover:border-foreground/20">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="text-[10px] uppercase font-bold tracking-[0.5em] px-8 py-4 bg-background border border-foreground/10">
                    View Case Study
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter transition-all duration-300 group-hover:tracking-[0.05em]">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm max-w-sm">
                    {project.description}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

