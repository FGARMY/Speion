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
          Web Development &bull; Logo Design &bull; Branding
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          <span className={styles.word}>We</span>{" "}
          <span className={styles.word}>Build</span>{" "}
          <span className={styles.word}>Brands</span>{" "}
          <span className={styles.word}>That</span>{" "}
          <span className={`${styles.word} gradient-text`}>Convert</span>
        </h1>

        {/* Subtext */}
        <p className={styles.subtext}>
          High-performance websites, stunning logos, and complete brand identity
          kits — designed for conversion, speed, and business growth.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <Link href="/work" className={styles.ctaPrimary}>
            View Our Work
            <ArrowUpRight size={18} />
          </Link>
          <Link href="/contact" className={styles.ctaSecondary}>
            Get a Quote
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
