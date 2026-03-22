"use client";

import styles from "./WhyUs.module.css";

const reasons = [
  {
    num: "01",
    title: "Modern Tech Stack",
    desc: "We build with Next.js, React, and Tailwind for blazing-fast performance.",
  },
  {
    num: "02",
    title: "Business Results",
    desc: "Not just pretty designs—our websites are engineered specifically to convert visitors into clients.",
  },
  {
    num: "03",
    title: "Clean Code",
    desc: "Maintainable, scalable, and documented architecture that stands the test of time.",
  },
  {
    num: "04",
    title: "Absolute Reliability",
    desc: "On-time delivery, transparent communication, and 99.9% uptime architectures.",
  },
];

export default function WhyUs() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.splitLayout}`}>
        {/* Left: Stacked Floating Cards */}
        <div className={styles.leftCol}>
          <div className={styles.cardsStack}>
            <div className={`${styles.floatCard} ${styles.card1}`}>
              <div className={styles.cardHeader}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <div className={styles.placeholderLine} />
              <div className={styles.placeholderLine} style={{ width: "70%" }} />
              <div className={styles.cardGlow} />
            </div>
            
            <div className={`${styles.floatCard} ${styles.card2}`}>
              <div className={styles.cardHeader}>
                <div className={styles.dot} />
                <div className={styles.dot} />
                <div className={styles.dot} />
              </div>
              <div className={styles.metricsGrid}>
                <div className={styles.metricBlock} />
                <div className={styles.metricBlock} />
                <div className={styles.metricBlock} />
              </div>
              <div className={styles.cardGlow} />
            </div>

            <div className={`${styles.floatCard} ${styles.card3}`}>
              <span className={styles.bigLogo}>S</span>
              <div className={styles.cardGlow} />
            </div>
          </div>
        </div>

        {/* Right: Numbered List */}
        <div className={styles.rightCol}>
          <h2 className={styles.heading}>
            Why Choose <span className="gradient-text">Speion</span>
          </h2>
          <div className={styles.list}>
            {reasons.map((reason) => (
              <div key={reason.num} className={styles.listItem}>
                <div className={styles.num}>{reason.num}</div>
                <div className={styles.content}>
                  <h3 className={styles.title}>{reason.title}</h3>
                  <p className={styles.desc}>{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
