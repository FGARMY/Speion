"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Identity",
    description: "Defining the core essence of your brand through rigorous strategy and world-class visual identity systems.",
    items: ["Visual Identity", "Brand Strategy", "Guidelines", "Messaging"],
  },
  {
    number: "02",
    title: "Experience Design",
    description: "Creating immersive digital experiences that blend artistry with technical performance to drive deep engagement.",
    items: ["UI / UX Design", "Motion Design", "Interactive Art", "Rapid Prototyping"],
  },
  {
    number: "03",
    title: "Technical Engineering",
    description: "Building bleeding-edge platforms focused on extreme speed, scalability, and technical perfection.",
    items: ["Next.js / React", "Headless CMS", "Performance Audit", "Web3 Integration"],
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background border-y border-foreground/5">
      <Container>
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-6 block">
            Core Expertise
          </span>
          <h2 className="text-xl md:text-2xl font-black tracking-tight max-w-lg">
            WE PROVIDE THE TOOLS AND ARTISTRY TO SCALE AMBITIOUS IDEAS INTO GLOBAL REALITIES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-foreground/5">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-foreground/5 group hover:bg-foreground/5 transition-all duration-700"
            >
              <div className="flex flex-col h-full">
                <span className="text-display font-black text-muted/10 mb-8 transition-all duration-700 group-hover:text-foreground/5">
                  {service.number}
                </span>
                
                <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-muted text-sm mb-12 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="text-[9px] font-bold uppercase tracking-widest text-muted/60 transition-colors group-hover:text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

