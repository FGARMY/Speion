"use client";

import { useState } from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import styles from "./work.module.css";

const categories = ["All", "Websites", "Logos", "Branding"];

const projects = [
  {
    title: "TechFlow Solutions",
    category: "Websites",
    tags: ["Next.js", "React", "GSAP"],
    description:
      "A premium SaaS website with advanced animations and conversion-focused design.",
    color: "#6c5ce7",
  },
  {
    title: "Lumina Studios",
    category: "Branding",
    tags: ["Brand Identity", "Logo", "Guidelines"],
    description:
      "Complete brand identity kit including logo, color system, and brand guidelines.",
    color: "#00cec9",
  },
  {
    title: "NovaStar Exports",
    category: "Websites",
    tags: ["Next.js", "CMS", "Multi-language"],
    description:
      "Multi-language export business website with CMS integration and analytics.",
    color: "#fd79a8",
  },
  {
    title: "Zenith Wellness",
    category: "Logos",
    tags: ["Logo Design", "Typography"],
    description:
      "Minimalist logo design with modern typography for a wellness brand.",
    color: "#fdcb6e",
  },
  {
    title: "Praxis Digital",
    category: "Websites",
    tags: ["React", "Node.js", "Dashboard"],
    description:
      "Full-stack web application with admin dashboard and API integrations.",
    color: "#a78bfa",
  },
  {
    title: "Orbital Media",
    category: "Branding",
    tags: ["Visual Identity", "Social Media"],
    description:
      "Visual branding system with social media templates and marketing collateral.",
    color: "#55efc4",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.badge}>
            <Sparkles size={14} />
            Our Portfolio
          </span>
          <h1 className={styles.heroHeading}>
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className={styles.heroText}>
            A showcase of websites, logos, and brand identities we&apos;ve
            crafted for businesses.
          </p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className={`section ${styles.projects}`}>
        <div className="container">
          {/* Filter Tabs */}
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeFilter === cat ? styles.filterActive : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project.title} className={styles.card}>
                <div
                  className={styles.cardImage}
                  style={{
                    background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
                  }}
                >
                  <div
                    className={styles.cardImageInner}
                    style={{
                      background: `linear-gradient(135deg, ${project.color}40, ${project.color}15)`,
                    }}
                  >
                    <span
                      className={styles.projectInitial}
                      style={{ color: project.color }}
                    >
                      {project.title[0]}
                    </span>
                  </div>
                  <div className={styles.cardOverlay}>
                    <ExternalLink size={20} />
                    <span>View Project</span>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <span className={styles.cardCategory}>
                    {project.category}
                  </span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
