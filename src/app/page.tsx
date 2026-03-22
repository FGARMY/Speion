import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import dynamic from "next/dynamic";

const PricingSection = dynamic(() => import("@/components/sections/pricing").then(mod => ({ default: mod.PricingSection })));
const AddonsSection = dynamic(() => import("@/components/sections/addons").then(mod => ({ default: mod.AddonsSection })));
const WhyChooseUsSection = dynamic(() => import("@/components/sections/why-choose-us").then(mod => ({ default: mod.WhyChooseUsSection })));
const StatsSection = dynamic(() => import("@/components/sections/stats").then(mod => ({ default: mod.StatsSection })));
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
        <ServicesSection />
        <WhyChooseUsSection />
        <PricingSection />
        <AddonsSection />
        <StatsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
