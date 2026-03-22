"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function StatsSection() {
  const stats = [
    { label: "Projects Delivered", value: "250+", color: "text-primary" },
    { label: "Client Satisfaction", value: "99%", color: "text-accent-pink" },
    { label: "Delivery Speed", value: "2x", color: "text-accent-cyan" },
    { label: "Support", value: "24/7", color: "text-foreground" },
  ];

  return (
    <Section className="bg-card/50 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.1}>
              <div className="text-center group">
                <div className={`text-5xl md:text-7xl font-black mb-4 tracking-tighter ${stat.color} group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
