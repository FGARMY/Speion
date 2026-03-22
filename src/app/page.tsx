import Hero from "@/components/home/Hero";
import ClientMarquee from "@/components/home/ClientMarquee";
import ServicePreview from "@/components/home/ServicePreview";
import AddOns from "@/components/home/AddOns";
import WhyUs from "@/components/home/WhyUs";
import StatsCounter from "@/components/home/StatsCounter";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/shared/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import FAQ from "@/components/shared/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicePreview />
      <AddOns />
      <WhyUs />
      <StatsCounter />
      <TechStack />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
