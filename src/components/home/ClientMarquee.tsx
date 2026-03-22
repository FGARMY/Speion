import styles from "./ClientMarquee.module.css";

const clients = [
  "TechFlow",
  "Lumina",
  "NovaStar",
  "Zenith",
  "Praxis",
  "Orbital",
  "Vertex",
  "Catalyst",
  "Helix",
  "Pinnacle",
];

export default function ClientMarquee() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.label}>Trusted by innovative brands</p>
      </div>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {[...clients, ...clients].map((client, i) => (
            <div key={`${client}-${i}`} className={styles.clientItem}>
              <span className={styles.clientName}>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
