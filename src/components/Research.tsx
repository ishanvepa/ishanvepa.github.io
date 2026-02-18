import { research } from "@/app/data";
import { ExpLogo } from "@/app/ImageWithFallback";
import styles from "@/app/page.module.css";

export default function Research() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Research</h2>
      {research.map((r) => (
        <div key={r.institution} className={styles.expRow}>
          <ExpLogo src={r.logo} alt={r.institution} fallback={r.fallback} />
          <div>
            <div className={styles.expCompany}>{r.institution}</div>
            <div className={styles.expRole}>{r.role}</div>
            <div className={styles.expDesc}>{r.desc}</div>
          </div>
          <div className={styles.expDate}>{r.date}</div>
        </div>
      ))}
    </section>
  );
}
