"use client";

import { Check } from "lucide-react";
import styles from "./ServicePreview.module.css";

const packages = [
  {
    tier: "Starter",
    price: "₹20,000",
    timeline: "5 – 7 Days",
    features: [
      "3–5 Pages",
      "Clean, modern UI",
      "Mobile responsive",
      "Contact form setup",
    ],
    popular: false,
  },
  {
    tier: "Professional",
    price: "₹45,000",
    timeline: "2 – 3 Weeks",
    features: [
      "6–10 Pages",
      "Custom UI/UX design",
      "Speed & SEO optimized",
      "CMS integration",
    ],
    popular: true,
  },
  {
    tier: "Premium",
    price: "₹85,000+",
    timeline: "4 – 6 Weeks",
    features: [
      "Unlimited Pages",
      "Advanced animations",
      "Custom backend / Logic",
      "Priority support",
    ],
    popular: false,
  },
];

export default function ServicePreview() {
  return (
    <section className={`section ${styles.section}`} id="services-preview">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Packages</span>
          <h2 className={styles.heading}>
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className={styles.description}>
            Choose the right package for your business needs. 
            High-end design and performance at every tier.
          </p>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <div
              key={pkg.tier}
              className={`${styles.card} ${pkg.popular ? styles.popular : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3 className={styles.tier}>{pkg.tier}</h3>
              <div className={styles.price}>{pkg.price}</div>
              <div className={styles.timeline}>{pkg.timeline}</div>
              
              <ul className={styles.features}>
                {pkg.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={16} className={styles.checkIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
