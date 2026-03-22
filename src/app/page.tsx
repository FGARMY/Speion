import Hero from "@/components/home/Hero";
import ClientMarquee from "@/components/home/ClientMarquee";
import ServicePreview from "@/components/home/ServicePreview";
import StatsCounter from "@/components/home/StatsCounter";
import Testimonials from "@/components/shared/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import FAQ from "@/components/shared/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicePreview />
      <StatsCounter />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
