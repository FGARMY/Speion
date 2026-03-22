import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Website Development",
  "Logo Design",
  "Brand Identity Kits",
  "UI/UX Design",
  "SEO Optimization",
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h2 className={styles.ctaHeading}>
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Amazing</span> Together
          </h2>
          <p className={styles.ctaText}>
            Ready to transform your digital presence? Let&apos;s talk about your
            project.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Start a Project
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className={styles.divider} />

        {/* Footer Grid */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.footerLogo}>
              <span className={styles.logoIcon}>S</span>
              <span className={styles.logoText}>Speion</span>
            </Link>
            <p className={styles.brandDescription}>
              Crafting high-performance websites, stunning logos, and brand
              identities that convert visitors into customers.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialLink}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className={styles.footerLink}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Mail size={16} />
                <a href="mailto:hello@speion.com">hello@speion.com</a>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Speion. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
