import styles from "./ClientMarquee.module.css";

const clients = [
  "Website Development",
  "Branding",
  "UI/UX",
  "SEO",
  "React",
  "Next.js",
];

export default function ClientMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div key={`${client}-${i}`} className={styles.clientItem}>
              <span className={styles.clientName}>{client}</span>
              <span className={styles.dot}>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
