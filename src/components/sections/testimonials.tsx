"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";

export function TestimonialsSection() {
  const reviews = [
    {
      quote: "Speion fundamentally transformed our digital acquisition pipeline. Our enterprise leads increased by 300% within the first two quarters of the new platform launch.",
      author: "Sarah Jenkins",
      title: "VP Marketing, FinTech Global",
    },
    {
      quote: "Their engineering process is flawless. We needed a highly interactive WebGL experience that didn't sacrifice performance or SEO. They delivered exactly that.",
      author: "David Chen",
      title: "CTO, NextGen SaaS",
    },
    {
      quote: "We don't view Speion as an agency; they are a critical extension of our growth team. The ROI on their website structuring paid for itself in 21 days.",
      author: "Elena Rodriguez",
      title: "Founder, Bloom Logistics",
    }
  ];

  return (
    <Section id="testimonials" className="bg-background relative">
      <Container>
        <div className="mb-16 px-4 text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
              Client <AnimatedText text="Authority" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              We focus purely on elite business outcomes. Don't take our word for it—listen to the industry leaders who trust us.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.1} className="h-full">
              <div className="h-full flex flex-col justify-between p-8 rounded-[2rem] border border-black/5 dark:border-white/5 bg-card hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 shadow-xl">
                <div className="mb-8">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-medium leading-relaxed italic text-foreground/90">
                    "{review.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary via-accent-pink to-accent-cyan" />
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{review.author}</h4>
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">{review.title}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
