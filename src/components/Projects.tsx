"use client";

import { useState } from "react";
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
        {visible.map((proj) => {
          const href = proj.website ?? proj.github;
          const content = (
            <>
              {proj.image ? (
                <ProjectImage src={proj.image} alt={proj.name} />
              ) : (
                <div className={styles.projImgWrap}>
                  <div className={styles.projImgPlaceholder} style={{ display: "flex" }}>
                    {proj.name}
                  </div>
                </div>
              )}
              <div className={styles.projName}>
                <span>{proj.name}</span>
                {href && (
                  <span className={styles.projLink}>
                    {proj.website ? "Read writeup →" : "GitHub ↗"}
                  </span>
                )}
              </div>
              <div className={styles.projDesc}>{proj.desc}</div>
            </>
          );

          return href ? (
            <a
              key={proj.name}
              href={href}
              target={proj.website ? undefined : "_blank"}
              rel={proj.website ? undefined : "noopener noreferrer"}
              className={styles.projCard}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {content}
            </a>
          ) : (
            <div key={proj.name} className={styles.projCard} style={{ cursor: "default" }}>
              {content}
            </div>
          );
        })}
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
