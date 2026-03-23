"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function CtaSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

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
    <section id="contact" className="section-padding bg-background border-t border-foreground/5 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted mb-6 block">
              Start a Conversation
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[-0.04em] mb-10 leading-[1.1] uppercase">
              LET'S BUILD <br /> SOMETHING <br /> ICONIC.
            </h2>
            <p className="text-muted text-base max-w-sm mb-12 leading-relaxed">
              We are currently accepting a limited number of high-impact projects for Q2-Q3 2026. Secure your discovery audit today.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:hello@speion.com" className="text-xl md:text-2xl font-black tracking-tight hover:text-muted transition-colors transition-all duration-300">
                hello@speion.com
              </a>
              <p className="text-[10px] uppercase font-bold tracking-widest text-muted">
                Response time: &lt; 24 hours
              </p>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-foreground/5 p-12 lg:p-16 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-6 text-foreground" />
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Transmission Received</h3>
                  <p className="text-muted text-sm mb-10 max-w-xs mx-auto">Our strategy team will review your requirements and contact you shortly.</p>
                  <Button 
                    onClick={() => setStatus("idle")} 
                    className="text-[10px] uppercase font-bold tracking-[0.25em] px-10 py-6 h-auto bg-foreground text-background hover:bg-foreground/90 transition-all rounded-none"
                  >
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
                  className="space-y-10"
                >
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name" 
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none focus:border-foreground transition-all text-lg font-bold placeholder:text-muted/30",
                        errors.name ? "border-red-500/50" : "border-foreground/10"
                      )}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Enter your email" 
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none focus:border-foreground transition-all text-lg font-bold placeholder:text-muted/30",
                        errors.email ? "border-red-500/50" : "border-foreground/10"
                      )}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-1">Project Details</label>
                    <textarea 
                      required
                      rows={1} 
                      placeholder="Briefly describe your project" 
                      className={cn(
                        "w-full bg-transparent border-b py-4 focus:outline-none focus:border-foreground transition-all text-lg font-bold placeholder:text-muted/30 resize-none",
                        errors.message ? "border-red-500/50" : "border-foreground/10"
                      )}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full text-[10px] uppercase font-bold tracking-[0.25em] py-8 h-auto bg-foreground text-background hover:bg-foreground/90 transition-all rounded-none disabled:opacity-70 group"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <span className="flex items-center gap-4">
                        Secure Discovery Audit
                        <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                  
                  {status === "error" && (
                    <p className="text-red-500 text-[10px] font-bold text-center mt-4 uppercase tracking-widest">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

