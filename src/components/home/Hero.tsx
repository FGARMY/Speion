"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {

  return (
    <section className={styles.hero} id="hero">
      {/* Mesh Gradient Background */}
      <div className={styles.meshBg} aria-hidden="true">
        <div className={styles.meshOrb1} />
        <div className={styles.meshOrb2} />
        <div className={styles.meshOrb3} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for New Projects
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          <span className={styles.word}>We</span>{" "}
          <span className={styles.word}>Build</span>{" "}
          <span className={`${styles.word} gradient-text`}>Digital</span>{" "}
          <span className={styles.word}>Experiences</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtext}>
          High-performance websites and digital experiences designed for conversion, speed, and business growth.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <Link href="/services" className={styles.ctaPrimary}>
            View Packages
            <ArrowUpRight size={18} />
          </Link>
          <Link href="/work" className={styles.ctaSecondary}>
            See Our Work
          </Link>
        </div>

        {/* Stats Pill */}
        <div className={styles.statsPill}>
          <div className={styles.statItem}>
            <strong>20+</strong>
            <span>Projects</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <strong>15+</strong>
            <span>Happy Clients</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <strong>100%</strong>
            <span>Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <ChevronDown size={20} className={styles.scrollChevron} />
      </div>
    </section>
  );
}
