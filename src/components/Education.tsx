import { education } from "@/app/data";
import { ExpLogo } from "@/app/ImageWithFallback";
import styles from "@/app/page.module.css";

export default function Education() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Education</h2>
      {education.map((edu) => (
        <div key={edu.degree} className={styles.expRow}>
          <ExpLogo src={edu.logo} alt={edu.institution} fallback={edu.fallback} />
          <div>
            <div className={styles.expCompany}>{edu.institution}</div>
            <div className={styles.expRole}>{edu.degree}</div>
          </div>
          <div className={styles.expDate}>{edu.date}</div>
        </div>
      ))}
    </section>
  );
}
