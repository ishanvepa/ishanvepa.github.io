import Link from "next/link";
import { experience, projects, skills } from "./data";
import styles from "./page.module.css";
import { ExpLogo, ProjectImage } from "./ImageWithFallback";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Avatar */}
      <div className={styles.avatar}>IV</div>

      {/* Name */}
      <h1 className={styles.name}>Ishan Vepa</h1>

      {/* Links */}
      <nav className={styles.links}>
        <Link href="https://github.com/ishanvepa" target="_blank">GitHub ↗</Link>
        <Link href="https://www.linkedin.com/in/ishanvepa/" target="_blank">LinkedIn ↗</Link>
        <Link href="mailto:ishanvepa171@gmail.com">Email ↗</Link>
        <Link href="/Ishan_Vepa_Resume.pdf" target="_blank">Resume ↗</Link>
      </nav>

      {/* Bio */}
      <p className={styles.bio}>incoming eng @ adobe | cs @ gatech</p>
      <p className={styles.bioExtended}>
        CS student at Georgia Tech studying Human-Computer Interaction. I build
        AI-powered tools and full-stack apps. When not programming — transcribing
        jazz records, trying new cold brews, and watching Premier League soccer.
      </p>

      {/* Experience */}
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

      {/* Projects */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        {projects.map((proj) => (
          <div key={proj.name} className={styles.projRow}>
            <ProjectImage src={proj.image} alt={proj.name} />
            <div className={styles.projName}>
              <span>{proj.name}</span>
              <Link href={proj.github} target="_blank" className={styles.projLink}>
                GitHub ↗
              </Link>
            </div>
            <div className={styles.projDesc}>{proj.desc}</div>
            <div className={styles.projTags}>
              {proj.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillsRow}>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>About</h2>
        <p className={styles.interests}>
          CS @ Georgia Tech · HCI concentration · 🎵 Jazz · ☕ Cold brew · ⚽ GGMU
        </p>
      </section>

      <footer className={styles.footer}>© 2026 Ishan Vepa</footer>
    </main>
  );
}

