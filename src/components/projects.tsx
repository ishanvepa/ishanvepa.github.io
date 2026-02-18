import Link from "next/link";
import { projects } from "@/app/data";
import { ProjectImage } from "@/app/ImageWithFallback";
import styles from "@/app/page.module.css";

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      {projects.map((proj) => (
        <Link key={proj.name} href={proj.github} target="_blank" className={styles.projRow} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
          <ProjectImage src={proj.image} alt={proj.name} />
          <div className={styles.projName}>
            <span>{proj.name}</span>
            <span className={styles.projLink}>GitHub ↗</span>
          </div>
          <div className={styles.projDesc}>{proj.desc}</div>
          <div className={styles.projTags}>
            {proj.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </Link>
      ))}
    </section>
  );
}
