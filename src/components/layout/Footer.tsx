import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

const socials = [
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.topRow}>
          {/* Brand */}
          <Link href="/" className={styles.footerLogo}>
            <span className={styles.logoIcon}>S</span>
            <span className={`${styles.logoText} gradient-text`}>SPEION</span>
          </Link>

          {/* Socials */}
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
                <social.icon size={20} />
              </a>
            ))}
            <a
              href="#"
              className={styles.socialLink}
              aria-label="Dribbble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Speion. All rights reserved.
          </p>
          <p className={styles.designer}>
            Designed with ⚡ by <span className="gradient-text">Speion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
