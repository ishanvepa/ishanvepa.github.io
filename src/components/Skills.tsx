import { skills } from "@/app/data";
import styles from "@/app/page.module.css";

export default function Skills() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillsRow}>
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
