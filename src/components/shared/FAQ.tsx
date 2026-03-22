"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the package. Our Starter websites take 5–7 days, Professional websites take 10–15 days, and Premium business websites take 3–6 weeks. We always share a detailed timeline before starting.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! Our Premium package includes 1 month of post-launch support. We also offer ongoing maintenance and support plans starting at ₹5,000/month for all clients.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use a modern tech stack including Next.js, React, TypeScript, Node.js, and Firebase. For CMS, we work with Sanity and Strapi. Our sites are deployed on Vercel for optimal performance.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely! We can redesign your current website with a modern look, improved performance, and better conversion architecture. We'll analyze your current site and propose improvements.",
  },
  {
    question: "What's included in the Brand Identity Kit?",
    answer:
      "Our Brand Identity Kit includes your logo in all formats, color palette, typography system, brand guidelines document, business card design, social media templates, and usage rules — everything needed for a cohesive brand.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes! For Professional and Premium packages, we offer a 50/30/20 payment structure — 50% upfront, 30% at midpoint review, and 20% on final delivery.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.heading}>
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.item} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>
              <div
                className={styles.answerWrapper}
                style={{
                  maxHeight: openIndex === index ? "300px" : "0px",
                }}
              >
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
