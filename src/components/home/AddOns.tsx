"use client";

import { Search, PenTool, Zap, Server } from "lucide-react";
import styles from "./AddOns.module.css";

const addons = [
  {
    icon: Search,
    title: "Advanced SEO Audit",
    price: "₹15,000",
  },
  {
    icon: PenTool,
    title: "Custom Copywriting",
    price: "₹10,000 / page",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    price: "₹12,000",
  },
  {
    icon: Server,
    title: "Managed Hosting",
    price: "₹5,000 / month",
  },
];

export default function AddOns() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Power-up Your <span className="gradient-text-accent">Project</span>
          </h2>
          <p className={styles.description}>
            Optional add-ons to take your digital presence to the next level.
          </p>
        </div>

        <div className={styles.grid}>
          {addons.map((addon, i) => (
            <div
              key={addon.title}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                <addon.icon size={24} className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{addon.title}</h3>
              <p className={styles.cardPrice}>{addon.price}</p>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
