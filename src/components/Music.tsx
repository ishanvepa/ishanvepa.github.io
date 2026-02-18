import { music } from "@/app/data";
import styles from "@/app/page.module.css";

export default function Music() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Music</h2>
      <div className={styles.musicList}>
        {music.map((track) => (
          <iframe
            key={track.title}
            className={styles.spotifyEmbed}
            src={track.spotifyEmbedUrl}
            title={track.title}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
