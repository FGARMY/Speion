"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { AnimatedText } from "@/components/ui/animated-text";
import { Magnetic } from "@/components/ui/magnetic";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export function CtaSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" className="bg-background relative overflow-hidden py-32 md:py-48">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[180px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="max-w-xl text-left">
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                Let&apos;s Scale Your <br />
                <AnimatedText text="Revenue" />
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium leading-relaxed">
                Stop guessing. Start growing. Our team architects elite digital high-ticket funnels 
                designed for maximum business impact and measurable ROI.
              </p>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-bold">hello@speion.com</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent-pink rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-card/50 backdrop-blur-2xl border border-black/10 dark:border-white/10 p-10 md:p-14 rounded-[2.5rem] shadow-2xl">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                      <h3 className="text-3xl font-black mb-4 tracking-tight">Message Received!</h3>
                      <p className="text-muted-foreground text-lg mb-8">Our strategy team will review your project and contact you within 24 hours.</p>
                      <Button onClick={() => setStatus("idle")} variant="outline" className="rounded-full px-8 h-12 font-bold transition-all hover:bg-primary hover:text-white">
                        Send Another
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full h-16 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-lg font-medium"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                        <input 
                          required
                          type="email" 
                          placeholder="hello@example.com" 
                          className="w-full h-16 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-lg font-medium"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                        <textarea 
                          required
                          rows={4} 
                          placeholder="Tell us about your project..." 
                          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-lg font-medium resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <Magnetic>
                        <Button 
                          type="submit" 
                          disabled={status === "loading"}
                          className="w-full h-16 rounded-2xl text-xl font-black bg-primary glow-primary flex items-center justify-center gap-3 relative overflow-hidden group/btn disabled:opacity-70"
                        >
                          {status === "loading" ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                          ) : (
                            <>
                              <span>Secure My Audit</span>
                              <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </>
                          )}
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        </Button>
                      </Magnetic>
                      {status === "error" && (
                        <p className="text-red-500 text-sm font-bold text-center mt-4">Something went wrong. Please try hello@speion.com</p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
