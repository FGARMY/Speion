import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import dynamic from "next/dynamic";

const ValueProposition = dynamic(() => import("@/components/sections/value-proposition").then(mod => ({ default: mod.ValueProposition })));
const WorkSection = dynamic(() => import("@/components/sections/work").then(mod => ({ default: mod.WorkSection })));
const ProcessSection = dynamic(() => import("@/components/sections/process").then(mod => ({ default: mod.ProcessSection })));
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials").then(mod => ({ default: mod.TestimonialsSection })));
const CtaSection = dynamic(() => import("@/components/sections/cta").then(mod => ({ default: mod.CtaSection })));
import { SiteFooter } from "@/components/site-footer";

import { Marquee } from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <Marquee />
        <ValueProposition />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
