"use client";

import { useState } from "react";
import { Check, ArrowUpRight, Clock, Sparkles, Star, Zap } from "lucide-react";
import Link from "next/link";
import styles from "./services.module.css";
import FAQ from "@/components/shared/FAQ";

const packages = [
  {
    name: "Starter Website",
    price: "₹20,000 – ₹30,000",
    bestFor: "Small businesses, personal brands, early-stage startups",
    icon: Zap,
    timeline: "5 – 7 Days",
    popular: false,
    features: [
      "3–5 Pages (Home, About, Services, Contact)",
      "Clean, modern UI (template-based)",
      "Fully responsive (mobile + tablet)",
      "Contact form integration",
      "Basic SEO setup (meta tags, structure)",
      "Fast deployment (Vercel / hosting support)",
      "1 revision round",
    ],
  },
  {
    name: "Professional Website",
    price: "₹45,000 – ₹65,000",
    bestFor: "Growing businesses & serious brands",
    icon: Star,
    timeline: "10 – 15 Days",
    popular: true,
    features: [
      "6–10 Pages",
      "Custom UI/UX design (no templates)",
      "Speed & performance optimization",
      "SEO-ready structure (on-page optimization)",
      "Blog / content management setup",
      "WhatsApp + API integrations",
      "Conversion-focused forms & CTA strategy",
      "Google Analytics integration",
      "2–3 revision rounds",
    ],
  },
  {
    name: "Premium Business",
    price: "₹90,000 – ₹1,50,000+",
    bestFor: "Startups, export businesses, scaling companies",
    icon: Sparkles,
    timeline: "3 – 6 Weeks",
    popular: false,
    features: [
      "Fully custom UI/UX (premium design system)",
      "Advanced animations (GSAP / Framer Motion)",
      "CMS integration (Sanity / Strapi)",
      "Backend development (Node.js / Firebase)",
      "Admin dashboard (data & content control)",
      "Advanced API integrations",
      "Performance & security optimization",
      "Conversion-focused architecture",
      "1 Month post-launch support",
    ],
  },
];

const addons = [
  { name: "Multi-language Website", price: "₹15,000+" },
  { name: "Advanced SEO (content + ranking)", price: "₹10,000+" },
  { name: "E-commerce Functionality", price: "₹25,000+" },
  { name: "Maintenance & Support", price: "₹5,000/month" },
  { name: "Logo Design & Brand Identity Kit", price: "₹8,000 – ₹20,000" },
];

const reasons = [
  {
    title: "Modern Tech Stack",
    description: "Next.js, React, TypeScript — built for speed and scale",
  },
  {
    title: "Business-Focused Approach",
    description: "Every design decision is driven by conversion goals",
  },
  {
    title: "Clean, Scalable Code",
    description: "Production-ready code that's easy to maintain and extend",
  },
  {
    title: "Reliable Communication",
    description: "Transparent updates and timely delivery, always",
  },
  {
    title: "Long-term Support",
    description: "We grow with you — upgrades, maintenance, and strategy",
  },
  {
    title: "Premium Design Quality",
    description: "Designs that stand out and make lasting impressions",
  },
];

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.badge}>
            <Sparkles size={14} />
            Our Services
          </span>
          <h1 className={styles.heroHeading}>
            Service <span className="gradient-text">Packages</span>
          </h1>
          <p className={styles.heroText}>
            We build high-performance websites designed for conversion, speed,
            and business growth — not just design.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={`section ${styles.pricing}`}>
        <div className="container">
          <div className={styles.pricingGrid}>
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`${styles.card} ${
                  pkg.popular ? styles.popular : ""
                } ${hoveredCard === index ? styles.hovered : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {pkg.popular && (
                  <div className={styles.popularBadge}>Most Popular</div>
                )}
                <div className={styles.cardHeader}>
                  <div
                    className={styles.cardIcon}
                    style={{
                      background: pkg.popular
                        ? "var(--gradient-primary)"
                        : "var(--accent-subtle)",
                    }}
                  >
                    <pkg.icon
                      size={20}
                      color={pkg.popular ? "white" : "#a78bfa"}
                    />
                  </div>
                  <h3 className={styles.cardName}>{pkg.name}</h3>
                  <p className={styles.cardPrice}>{pkg.price}</p>
                  <p className={styles.bestFor}>{pkg.bestFor}</p>
                </div>
                <div className={styles.cardFeatures}>
                  {pkg.features.map((feature) => (
                    <div key={feature} className={styles.feature}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.cardFooter}>
                  <div className={styles.timeline}>
                    <Clock size={14} />
                    <span>{pkg.timeline}</span>
                  </div>
                  <Link
                    href="/contact"
                    className={`${styles.cardCta} ${
                      pkg.popular ? styles.ctaFilled : ""
                    }`}
                  >
                    Get Started
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className={`section ${styles.addons}`}>
        <div className="container">
          <div className={styles.addonsHeader}>
            <h2>
              Add-on <span className="gradient-text">Services</span>
            </h2>
            <p>Enhance your package with these additional services</p>
          </div>
          <div className={styles.addonsGrid}>
            {addons.map((addon) => (
              <div key={addon.name} className={styles.addonCard}>
                <span className={styles.addonName}>{addon.name}</span>
                <span className={styles.addonPrice}>{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <div className={styles.whyHeader}>
            <span className={styles.badge2}>Why Choose Us</span>
            <h2>
              Built for <span className="gradient-text">Results</span>
            </h2>
          </div>
          <div className={styles.reasonsGrid}>
            {reasons.map((reason, index) => (
              <div key={reason.title} className={styles.reasonCard}>
                <span className={styles.reasonNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className={styles.reasonTitle}>{reason.title}</h4>
                <p className={styles.reasonDesc}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
