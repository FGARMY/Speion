"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ValueProposition() {
  const cards = [
    {
      title: "Built for SaaS & Startups",
      desc: "We don't build generic corporate sites. We architect high-performance acquisition funnels for fast-scaling digital products.",
      tag: "NICHE FOCUS"
    },
    {
      title: "Revenue-First Design",
      desc: "Every pixel is engineered with one goal: conversion. We turn your traffic into measurable business growth and ROI.",
      tag: "PERFORMANCE"
    },
    {
      title: "Zero Technical Debt",
      desc: "Next.js 16 foundations with perfect Lighthouse scores. We build digital assets that remain fast and scalable for years.",
      tag: "ELITE CODE"
    }
  ];

  return (
    <Section id="why-us" className="bg-card/20 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32 px-4">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.9] mb-8">
              The Standard for <br />
              <span className="text-primary italic">High-Stakes</span> Digital Assets.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl">
              Most agencies settle for "pretty." We deliver **Elite**. We partner with ambitious SaaS founders and startup teams to translate complex visions into world-class digital experiences that command authority and print revenue.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group relative p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-background shadow-2xl hover:border-primary/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-8xl font-black italic">{i + 1}</div>
                </div>
                <span className="text-xs font-bold tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full mb-8 inline-block">
                  {card.tag}
                </span>
                <h3 className="text-2xl font-black mb-6 tracking-tight text-foreground">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
