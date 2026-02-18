import styles from "@/app/page.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>About</h2>
      <p className={styles.interests}>
        CS @ Georgia Tech · HCI concentration · 🎵 Jazz · ☕ Cold brew · ⚽ GGMU
      </p>
    </section>
  );
}
