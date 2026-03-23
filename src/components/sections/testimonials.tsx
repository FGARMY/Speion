"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const reviews = [
  {
    quote: "Speion fundamentally transformed our digital acquisition pipeline. Our enterprise leads increased by 300% within the first two quarters.",
    author: "Sarah Jenkins",
    title: "VP Marketing, FinTech Global",
  },
  {
    quote: "Their engineering process is flawless. We needed a highly interactive experience that didn't sacrifice performance. They delivered exactly that.",
    author: "David Chen",
    title: "CTO, NextGen SaaS",
  },
  {
    quote: "We don't view Speion as an agency; they are a critical extension of our growth team. The ROI on their work paid for itself in weeks.",
    author: "Elena Rodriguez",
    title: "Founder, Bloom Logistics",
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <Container>
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-6 block">
            Client Authority
          </span>
          <h2 className="text-xl md:text-2xl font-black tracking-tight max-w-lg">
            WE COOPERATE WITH THE WORLD'S MOST AMBITIOUS BRANDS TO DEFINE THE DIGITAL FUTURE.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="mb-8 text-foreground">
                <p className="text-lg md:text-xl font-bold leading-relaxed tracking-tight mb-8">
                  "{review.quote}"
                </p>
              </div>
              <div className="mt-auto">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-1">{review.author}</h4>
                <p className="text-[10px] text-muted font-bold uppercase tracking-widest">{review.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

