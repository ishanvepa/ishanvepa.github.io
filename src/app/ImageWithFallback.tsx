"use client";

import Image from "next/image";
import styles from "./page.module.css";

export function ExpLogo({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  return (
    <div className={styles.expLogoWrap}>
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className={styles.expLogo}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const fb = target.nextElementSibling as HTMLElement;
          if (fb) fb.style.display = "flex";
        }}
      />
      <div className={styles.expLogoFallback} style={{ display: "none" }}>
        {fallback}
      </div>
    </div>
  );
}

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles.projImgWrap}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.projImg}
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.style.display = "none";
          const placeholder = target.nextElementSibling as HTMLElement;
          if (placeholder) placeholder.style.display = "flex";
        }}
      />
      <div className={styles.projImgPlaceholder} style={{ display: "none" }}>
        {alt}
      </div>
    </div>
  );
}
