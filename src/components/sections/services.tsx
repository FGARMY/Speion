"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { Code, PenTool, Layers } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Website Development",
      description: "Fast, responsive, and SEO-optimized websites built to convert visitors into customers.",
      benefit: "Scalable architecture & seamless user experience.",
      icon: <Code className="w-8 h-8 text-primary" />,
    },
    {
      title: "Logo Design",
      description: "Unique and memorable logos that instantly communicate your brand's core identity.",
      benefit: "Stand out in your industry with custom aesthetics.",
      icon: <PenTool className="w-8 h-8 text-accent-pink" />,
    },
    {
      title: "Brand Identity",
      description: "Comprehensive branding kits including typography, color palettes, and visual guidelines.",
      benefit: "Maintain consistency across all marketing channels.",
      icon: <Layers className="w-8 h-8 text-accent-cyan" />,
    },
  ];

  return (
    <Section id="services" className="bg-card/30 relative">
      <Container>
        <div className="text-center mb-16 px-4">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Our Core <AnimatedText text="Services" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              We provide everything you need to establish a powerful digital presence from the ground up.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <SpotlightCard className="h-full bg-background/50 border-black/5 dark:border-white/5 backdrop-blur-sm hover:border-primary/20 transition-all shadow-xl group">
                <CardHeader>
                  <div className="mb-6 bg-black/5 dark:bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500 shadow-2xl">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center gap-3 text-sm font-semibold text-foreground/80 py-3 px-4 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                    <span className="text-primary text-xl">✦</span>
                    {service.benefit}
                  </div>
                </CardContent>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
