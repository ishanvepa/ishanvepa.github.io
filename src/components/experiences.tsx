import { experience } from "@/app/data";
import { ExpLogo } from "@/app/ImageWithFallback";
import styles from "@/app/page.module.css";

export default function Experiences() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      {experience.map((exp) => (
        <div key={exp.company} className={styles.expRow}>
          <ExpLogo src={exp.logo} alt={exp.company} fallback={exp.fallback} />
          <div>
            <div className={styles.expCompany}>{exp.company}</div>
            <div className={styles.expRole}>{exp.role}</div>
          </div>
          <div className={styles.expDate}>{exp.date}</div>
        </div>
      ))}
    </section>
  );
}
