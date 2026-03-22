"use client";

import styles from "./TechStack.module.css";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Vercel",
  "Supabase",
  "PostgreSQL",
  "Prisma",
  "Figma",
];

export default function TechStack() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Modern <span className="gradient-text-accent">Technologies</span>
          </h2>
          <p className={styles.description}>
            We use the best tools in the industry to build fast, scalable, and secure digital products.
          </p>
        </div>

        <div className={styles.tagsContainer}>
          {technologies.map((tech, i) => (
            <div 
              key={tech} 
              className={styles.tag}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
