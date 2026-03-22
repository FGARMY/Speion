import { Target, Lightbulb, Shield, TrendingUp, Users, Award } from "lucide-react";
import type { Metadata } from "next";
import styles from "./about.module.css";
import Testimonials from "@/components/shared/Testimonials";

export const metadata: Metadata = {
  title: "About — Speion | Our Story & Team",
  description:
    "Learn about Speion — a modern web development and branding agency dedicated to building digital experiences that drive growth.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the cutting edge of web technology, using modern frameworks and design patterns.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "Every pixel and every line of code meets our high standards — clean, scalable, production-ready.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We don't just build — we engineer for conversion, speed, and measurable business outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We build with scale in mind, ensuring your digital presence grows with your business.",
  },
];

const milestones = [
  {
    year: "2023",
    title: "The Beginning",
    description:
      "Speion was founded with a vision to bridge the gap between beautiful design and real business results.",
  },
  {
    year: "2023",
    title: "First 5 Clients",
    description:
      "Delivered our first set of websites and branding kits, earning 100% client satisfaction.",
  },
  {
    year: "2024",
    title: "Growing the Team",
    description:
      "Expanded our capabilities with dedicated UI/UX designers and full-stack developers.",
  },
  {
    year: "2024",
    title: "Premium Launch",
    description:
      "Introduced our Premium Business package with advanced animations and CMS integration.",
  },
  {
    year: "2025",
    title: "20+ Projects",
    description:
      "Crossed 20 delivered projects across web development, logos, and complete brand identities.",
  },
  {
    year: "2026",
    title: "Scaling Up",
    description:
      "Expanding into international markets and building partnerships with growing brands.",
  },
];

const team = [
  {
    name: "Founder",
    role: "CEO & Lead Developer",
    initial: "S",
    gradient: "linear-gradient(135deg, #6c5ce7, #a78bfa)",
  },
  {
    name: "Creative Lead",
    role: "UI/UX Designer",
    initial: "D",
    gradient: "linear-gradient(135deg, #00cec9, #55efc4)",
  },
  {
    name: "Tech Lead",
    role: "Full-Stack Developer",
    initial: "A",
    gradient: "linear-gradient(135deg, #fd79a8, #e17055)",
  },
];

export default function AboutPage() {
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
            <Users size={14} />
            About Us
          </span>
          <h1 className={styles.heroHeading}>
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h1>
          <p className={styles.heroText}>
            We&apos;re a team of passionate designers and developers building
            brands that make a real impact in the digital world.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={`section ${styles.story}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className={styles.label}>Our Story</span>
              <h2>
                Born from a Passion for{" "}
                <span className="gradient-text">Great Design</span>
              </h2>
              <p>
                Speion started with a simple belief: businesses deserve more than
                just a pretty website. They deserve a digital presence that
                drives growth, builds trust, and converts visitors into
                customers.
              </p>
              <p>
                We combine cutting-edge technology with strategic design thinking
                to create websites, logos, and brand identities that truly stand
                out. Every project we take on is treated as a partnership — we
                invest in your success.
              </p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.storyCard}>
                <Award size={32} className={styles.storyIcon} />
                <h3>Our Mission</h3>
                <p>
                  To empower businesses with premium digital experiences that are
                  accessible, performant, and designed to convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.values}`}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <span className={styles.label}>Our Values</span>
            <h2>
              What <span className="gradient-text">Drives</span> Us
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <value.icon size={24} />
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div className={styles.timelineHeader}>
            <span className={styles.label}>Our Journey</span>
            <h2>
              The <span className="gradient-text">Timeline</span>
            </h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${index}`}
                className={`${styles.timelineItem} ${
                  index % 2 === 0 ? styles.left : styles.right
                }`}
              >
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{milestone.year}</span>
                  <h4 className={styles.timelineTitle}>{milestone.title}</h4>
                  <p className={styles.timelineDesc}>
                    {milestone.description}
                  </p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.label}>Our Team</span>
            <h2>
              Meet the <span className="gradient-text">People</span>
            </h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div
                  className={styles.teamAvatar}
                  style={{ background: member.gradient }}
                >
                  {member.initial}
                </div>
                <h4 className={styles.teamName}>{member.name}</h4>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
