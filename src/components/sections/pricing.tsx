"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { Magnetic } from "@/components/ui/magnetic";

const pricingPlans = [
  {
    name: "Starter Website",
    price: "₹20,000 – ₹30,000",
    description: "Perfect for small businesses looking to establish an online presence.",
    features: ["3–5 Pages", "Responsive Design", "Basic SEO Setup", "Timeline: 5–7 Days"],
    highlighted: false,
    buttonText: "Get Started",
  },
  {
    name: "Professional Website",
    price: "₹45,000 – ₹65,000",
    description: "Ideal for growing businesses needing custom functionality and design.",
    features: ["Custom UI/UX", "Advanced SEO Optimization", "CMS / Blog Integration", "Third-party Integrations", "Timeline: 10–15 Days"],
    highlighted: true,
    buttonText: "Most Popular",
  },
  {
    name: "Premium Website",
    price: "₹90,000 – ₹1,50,000+",
    description: "For enterprises needing complex systems and advanced features.",
    features: ["Custom Web Application", "Backend + CMS Setup", "Advanced Animations", "Custom Dashboard", "Timeline: 3–6 Weeks"],
    highlighted: false,
    buttonText: "Consult Us",
  },
];

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll position to animate the width of a decorative bar on top
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25, mass: 0.5 });
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <Section id="pricing" className="bg-background relative overflow-hidden" ref={containerRef}>
      <Container>
        <div className="text-center mb-16 px-4">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Transparent <AnimatedText text="Pricing" />
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Choose the perfect package tailored to your business needs and growth goals.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1}>
              <div className="relative h-full group">
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                    <span className="bg-gradient-to-r from-accent-pink to-accent-cyan text-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xl animate-pulse">
                      Recommended
                    </span>
                  </div>
                )}
                <Card 
                  className={`h-full flex flex-col transition-all duration-500 border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 backdrop-blur-sm group-hover:border-primary/20 ${
                    plan.highlighted 
                      ? "shadow-[0_0_50px_-10px_rgba(108,71,255,0.3)] border-primary/20" 
                      : "shadow-xl"
                  }`}
                >
                {plan.highlighted && (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" 
                  />
                )}
                <CardHeader className="flex-none relative z-10">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="h-10">{plan.description}</CardDescription>
                  <div className="mt-4 text-3xl font-bold text-foreground">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow relative z-10">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start text-sm"
                      >
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex-none pt-8 relative z-10 mt-auto">
                  <Magnetic>
                    <Button 
                      className={`w-full h-14 rounded-2xl font-bold tracking-tight relative overflow-hidden group/btn ${
                        plan.highlighted ? "bg-primary glow-primary shadow-primary/20" : "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 hover:bg-primary hover:text-white"
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                      size="lg"
                    >
                      <span className="relative z-10">{plan.buttonText}</span>
                      {plan.highlighted && (
                         <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
                      )}
                    </Button>
                  </Magnetic>
                </CardFooter>
              </Card>
            </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
