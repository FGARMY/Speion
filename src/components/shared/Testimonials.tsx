"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechFlow Solutions",
    content:
      "Speion transformed our online presence completely. The website they built is not only beautiful but has significantly increased our conversion rates. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, Lumina Studios",
    content:
      "The logo and brand identity kit Speion created for us perfectly captures our vision. Every time someone sees our brand, they remember it. Truly exceptional work.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Director, NovaStar Exports",
    content:
      "Working with Speion was a game-changer for our export business. The premium website with multi-language support opened up new markets we couldn't reach before.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Founder, Zenith Wellness",
    content:
      "From the initial consultation to the final delivery, the Speion team was professional, creative, and incredibly responsive. Our new website speaks volumes about our brand.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.heading}>
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
        </div>

        <div className={styles.carousel}>
          <div className={styles.cardWrapper}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`${styles.card} ${index === active ? styles.active : ""
                  } ${index === (active - 1 + testimonials.length) % testimonials.length
                    ? styles.prev
                    : ""
                  } ${index === (active + 1) % testimonials.length
                    ? styles.next
                    : ""
                  }`}
              >
                <Quote size={32} className={styles.quoteIcon} />
                <p className={styles.content}>{testimonial.content}</p>
                <div className={styles.stars}>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#fdcb6e"
                      color="#fdcb6e"
                    />
                  ))}
                </div>
                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <strong className={styles.name}>{testimonial.name}</strong>
                    <p className={styles.role}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button
              className={styles.navButton}
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === active ? styles.dotActive : ""
                    }`}
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              className={styles.navButton}
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
