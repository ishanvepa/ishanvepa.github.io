import { publications, research } from "@/app/data";
import { ExpLogo } from "@/app/ImageWithFallback";
import styles from "@/app/page.module.css";

export default function Research() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Research</h2>
      {research.map((r) => (
        <div key={r.institution} className={styles.expCard}>
          <div className={styles.expRow}>
            <ExpLogo src={r.logo} alt={r.institution} fallback={r.fallback} />
            <div>
              <div className={styles.expCompany}>{r.institution}</div>
              <div className={styles.expRole}>{r.role}</div>
              <div className={styles.expDesc}>{r.desc}</div>
            </div>
            <div className={styles.expDate}>{r.date}</div>
          </div>
        </div>
      ))}

      <h2 className={styles.sectionTitle} style={{ marginTop: "32px" }}>Publications</h2>
      {publications.map((p) => (
        <div key={p.doi} className={styles.expCard}>
          <div style={{ textAlign: "left" }}>
            <p className={styles.expDesc} style={{ marginTop: 0 }}>
              {p.authors}. {p.year}.{" "}
              <a
                href={p.doi}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)", textDecoration: "none" }}
              >
                {p.title}
              </a>
              . <em>{p.venue}. {p.location}</em> {p.publisher}{" "}
              <a
                href={p.doi}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)", textDecoration: "none" }}
              >
                {p.doi}
              </a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
