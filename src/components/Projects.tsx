"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/app/data";
import { ProjectImage } from "@/app/ImageWithFallback";
import styles from "@/app/page.module.css";

const PAGE_SIZE = 4;

export default function Projects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PAGE_SIZE);
  const visible = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.projGrid}>
        {visible.map((proj) => (
          <Link
            key={proj.name}
            href={proj.github}
            target="_blank"
            className={styles.projCard}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProjectImage src={proj.image} alt={proj.name} />
            <div className={styles.projName}>
              <span>{proj.name}</span>
              <span className={styles.projLink}>GitHub ↗</span>
            </div>
            <div className={styles.projDesc}>{proj.desc}</div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.projPagination}>
          <button
            className={styles.projPageBtn}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page"
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.projDot} ${i === page ? styles.projDotActive : ""}`}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}

          <button
            className={styles.projPageBtn}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
