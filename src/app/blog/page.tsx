import { Rss, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog — Speion | Insights & Updates",
  description:
    "Coming soon — insights on web development, design trends, and business growth from the Speion team.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOrb1} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.badge}>
            <Rss size={14} />
            Blog
          </span>
          <h1 className={styles.heroHeading}>
            Insights & <span className="gradient-text">Updates</span>
          </h1>
          <p className={styles.heroText}>
            Our thoughts on web development, design trends, and building
            brands that convert.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className={`section ${styles.comingSoon}`}>
        <div className="container">
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Rss size={32} />
            </div>
            <h2 className={styles.cardTitle}>Coming Soon</h2>
            <p className={styles.cardText}>
              We&apos;re preparing high-quality content on web development
              best practices, design trends, and business growth strategies.
              Stay tuned!
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Get Notified
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Skeleton Cards */}
          <div className={styles.skeletonGrid}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.skeleton}>
                <div className={styles.skeletonImage} />
                <div className={styles.skeletonContent}>
                  <div className={styles.skeletonTag} />
                  <div className={styles.skeletonTitle} />
                  <div className={styles.skeletonText} />
                  <div className={styles.skeletonTextShort} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
