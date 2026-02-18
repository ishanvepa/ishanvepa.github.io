import Link from "next/link";
import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Hero() {
  return (
    <>
      {/* Avatar */}
      <div className={styles.avatar}>
        <Image
          src="/profile_picture.jpeg"
          alt="Ishan Vepa"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

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
      <p className={styles.bio}>incoming eng @ <span style={{ background: "linear-gradient(90deg, #8B0000, #FF0000)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>adobe</span> | cs @ <span style={{ background: "linear-gradient(90deg, #1a5276, #B3A369)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>gatech</span></p>
      <p className={styles.bioExtended}>
        CS student at Georgia Tech studying Human-Computer Interaction. When I'm not programming, you may find me transcribing
        jazz records, trying new shaken espressos, and watching Premier League soccer (GGMU ifykyk).
      </p>
    </>
  );
}
