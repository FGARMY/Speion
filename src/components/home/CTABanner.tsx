import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.noise} />
      </div>
      <div className={`container ${styles.content}`}>
        <h2 className={styles.heading}>
          READY TO BUILD<br />
          <span className={`${styles.highlight} gradient-text`}>SOMETHING?</span>
        </h2>
        <p className={styles.text}>
          Let&apos;s discuss your project and create something extraordinary
          together.
        </p>
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.ctaPrimary}>
            Start Your Project
            <ArrowUpRight size={18} />
          </Link>
          <Link href="/services" className={styles.ctaSecondary}>
            View Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
