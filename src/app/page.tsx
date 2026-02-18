import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Music from "@/components/Music";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Experiences />
      <Research />
      <Projects />
      <Skills />
      <Music />
      <About />
      <Footer />
    </main>
  );
}

