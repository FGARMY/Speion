"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import styles from "./contact.module.css";

const serviceOptions = [
  "Starter Website",
  "Professional Website",
  "Premium Business Website",
  "Logo Design",
  "Brand Identity Kit",
  "Other",
];

const budgetOptions = [
  "₹20,000 – ₹30,000",
  "₹45,000 – ₹65,000",
  "₹90,000 – ₹1,50,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

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
            <MessageCircle size={14} />
            Contact Us
          </span>
          <h1 className={styles.heroHeading}>
            Let&apos;s <span className="gradient-text">Talk</span>
          </h1>
          <p className={styles.heroText}>
            Have a project in mind? Let&apos;s discuss how we can bring your
            vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contact}`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formWrapper}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div className={styles.progress}>
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`${styles.progressStep} ${
                          s <= step ? styles.progressActive : ""
                        }`}
                      >
                        <span className={styles.progressDot}>{s}</span>
                        <span className={styles.progressLabel}>
                          {s === 1
                            ? "Your Info"
                            : s === 2
                            ? "Project"
                            : "Details"}
                        </span>
                      </div>
                    ))}
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1 */}
                    {step === 1 && (
                      <div className={styles.stepContent}>
                        <div className={styles.field}>
                          <label className={styles.label}>Full Name</label>
                          <input
                            type="text"
                            className={styles.input}
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) =>
                              updateField("name", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label}>Email</label>
                          <input
                            type="email"
                            className={styles.input}
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              updateField("email", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label}>Phone</label>
                          <input
                            type="tel"
                            className={styles.input}
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                              updateField("phone", e.target.value)
                            }
                          />
                        </div>
                        <button
                          type="button"
                          className={styles.nextBtn}
                          onClick={nextStep}
                        >
                          Next
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <div className={styles.stepContent}>
                        <div className={styles.field}>
                          <label className={styles.label}>
                            What service are you looking for?
                          </label>
                          <div className={styles.optionGrid}>
                            {serviceOptions.map((option) => (
                              <button
                                type="button"
                                key={option}
                                className={`${styles.optionBtn} ${
                                  formData.service === option
                                    ? styles.optionActive
                                    : ""
                                }`}
                                onClick={() => updateField("service", option)}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label}>Budget range</label>
                          <div className={styles.optionGrid}>
                            {budgetOptions.map((option) => (
                              <button
                                type="button"
                                key={option}
                                className={`${styles.optionBtn} ${
                                  formData.budget === option
                                    ? styles.optionActive
                                    : ""
                                }`}
                                onClick={() => updateField("budget", option)}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className={styles.btnRow}>
                          <button
                            type="button"
                            className={styles.backBtn}
                            onClick={prevStep}
                          >
                            <ArrowLeft size={16} />
                            Back
                          </button>
                          <button
                            type="button"
                            className={styles.nextBtn}
                            onClick={nextStep}
                          >
                            Next
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <div className={styles.stepContent}>
                        <div className={styles.field}>
                          <label className={styles.label}>
                            Tell us about your project
                          </label>
                          <textarea
                            className={styles.textarea}
                            placeholder="Describe your project, goals, inspiration, anything that helps us understand your vision..."
                            rows={5}
                            value={formData.message}
                            onChange={(e) =>
                              updateField("message", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className={styles.btnRow}>
                          <button
                            type="button"
                            className={styles.backBtn}
                            onClick={prevStep}
                          >
                            <ArrowLeft size={16} />
                            Back
                          </button>
                          <button type="submit" className={styles.submitBtn}>
                            <Send size={16} />
                            Send Message
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>

            {/* Info Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h3>Get in Touch</h3>
                <p>
                  We&apos;d love to hear from you. Reach out through any of
                  these channels.
                </p>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Email</span>
                      <a href="mailto:hello@speion.com" className={styles.infoValue}>
                        hello@speion.com
                      </a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Phone</span>
                      <a href="tel:+919876543210" className={styles.infoValue}>
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Location</span>
                      <span className={styles.infoValue}>India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hi%20Speion%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsapp}
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
