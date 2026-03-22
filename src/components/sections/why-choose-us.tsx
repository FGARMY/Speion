"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { Zap, Target, Code2, Clock } from "lucide-react";

export function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Modern Tech Stack",
      description: "We use Next.js, React, and Tailwind CSS to build blazing fast, future-proof platforms.",
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
    {
      title: "Business-Focused",
      description: "Designs optimized for conversions, ensuring your site generates leads, not just traffic.",
      icon: <Target className="w-8 h-8 text-accent-cyan" />,
    },
    {
      title: "Clean, Scalable Code",
      description: "Maintainable architecture that grows automatically with your business needs.",
      icon: <Code2 className="w-8 h-8 text-accent-pink" />,
    },
    {
      title: "Reliable Delivery",
      description: "Transparent timelines and consistent communication from kick-off to launch.",
      icon: <Clock className="w-8 h-8 text-foreground" />,
    },
  ];

  return (
    <Section className="bg-background relative">
      <Container>
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Why Choose <AnimatedText text="Speion" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              We don&apos;t just build websites; we engineer digital growth engines.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 backdrop-blur-sm hover:border-primary/20 hover:bg-black/[0.07] dark:bg-white/[0.07] transition-all group">
                <div className="w-20 h-20 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{reason.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
