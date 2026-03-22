"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";

export function ProcessSection() {
  const steps = [
    { num: "01", title: "Discovery & Strategy", text: "We analyze your market, dissect competitors, and map a bespoke revenue architecture." },
    { num: "02", title: "UX/UI Design", text: "Pixel-perfect, high-conversion design systems engineered to build immediate brand trust." },
    { num: "03", title: "Elite Engineering", text: "Lightning-fast Next.js architecture with zero technical debt and perfect active SEO technicals." },
    { num: "04", title: "Launch & Scale", text: "Continuous conversion optimization, A/B testing, and scaling your new digital asset." }
  ];

  return (
    <Section id="process" className="bg-card/40 relative border-y border-border/50">
      <Container>
        <div className="mb-20 px-4 max-w-3xl">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
              Our Precise <AnimatedText text="Process" />
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              We don't guess. We execute a proven, four-step methodology meticulously designed to print ROI for our enterprise clients.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.1} className="relative">
              {/* Connector Line */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[70%] w-[100%] h-[2px] bg-border z-0 overflow-hidden">
                  <div className="w-full h-full bg-primary/20 animate-[translateX_2s_infinite]" />
                </div>
              )}
              
              <div className="relative z-10 flex flex-col p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-background/50 backdrop-blur-sm shadow-xl hover:border-primary/30 transition-colors duration-300">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary/80 to-transparent mb-6">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
