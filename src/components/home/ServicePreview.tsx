"use client";

import { Globe, Palette, Layers } from "lucide-react";
import styles from "./ServicePreview.module.css";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance, responsive websites built with modern tech stacks for speed, SEO, and conversion.",
    gradient: "linear-gradient(135deg, #6c5ce7, #a78bfa)",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "Unique, memorable logos that capture your brand essence and leave a lasting impression.",
    gradient: "linear-gradient(135deg, #00cec9, #55efc4)",
  },
  {
    icon: Layers,
    title: "Branding Kits",
    description:
      "Complete brand identity systems — colors, typography, guidelines — everything for a cohesive brand.",
    gradient: "linear-gradient(135deg, #fd79a8, #e17055)",
  },
];

export default function ServicePreview() {
  return (
    <section className={`section ${styles.section}`} id="services-preview">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>What We Do</span>
          <h2 className={styles.heading}>
            Services Built for{" "}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className={styles.description}>
            From concept to launch, we deliver digital solutions that drive real
            business results.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={styles.card}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={styles.iconWrapper}
                style={{ background: service.gradient }}
              >
                <service.icon size={24} color="white" />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
