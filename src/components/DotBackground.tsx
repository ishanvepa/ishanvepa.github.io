"use client";

import { useEffect, useRef } from "react";

const SPACING = 36;
const BASE_RADIUS = 1;
const MAX_RADIUS = 2.6;
const INFLUENCE_RADIUS = 80;
const OPACITY_SECTIONS = [
  [0.08, 0.13, 0.26, 0.14, 0.09],
  [0.11, 0.2, 0.32, 0.24, 0.12],
  [0.07, 0.15, 0.27, 0.19, 0.1],
  [0.05, 0.11, 0.18, 0.12, 0.07],
];

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function getSectionOpacity(x: number, y: number, width: number, height: number) {
  const maxCol = OPACITY_SECTIONS[0].length - 1;
  const maxRow = OPACITY_SECTIONS.length - 1;
  const normalizedX = width <= 0 ? 0 : (x / width) * maxCol;
  const normalizedY = height <= 0 ? 0 : (y / height) * maxRow;
  const col0 = Math.floor(normalizedX);
  const row0 = Math.floor(normalizedY);
  const col1 = Math.min(col0 + 1, maxCol);
  const row1 = Math.min(row0 + 1, maxRow);
  const blendX = normalizedX - col0;
  const blendY = normalizedY - row0;

  const top = lerp(OPACITY_SECTIONS[row0][col0], OPACITY_SECTIONS[row0][col1], blendX);
  const bottom = lerp(OPACITY_SECTIONS[row1][col0], OPACITY_SECTIONS[row1][col1], blendX);

  return lerp(top, bottom, blendY);
}

export default function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    const mouse = { x: -9999, y: -9999 };

    function getThemeColors() {
      const isDark = document.documentElement.dataset.theme !== "light";
      return {
        base: isDark ? "255,255,255" : "139,101,60",
        glow: isDark ? "255,255,255" : "139,101,60",
      };
    }

    function resize() {
      canvas!.width = globalThis.innerWidth;
      canvas!.height = globalThis.innerHeight;
    }

    function draw() {
      const { base, glow } = getThemeColors();
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      const cols = Math.ceil(canvas!.width / SPACING) + 1;
      const rows = Math.ceil(canvas!.height / SPACING) + 1;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING;
          const y = row * SPACING;
          const baseOpacity = getSectionOpacity(x, y, canvas!.width, canvas!.height);

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.hypot(dx, dy);

          let radius = BASE_RADIUS;
          let alpha = baseOpacity;
          let color = base;

          if (dist < INFLUENCE_RADIUS) {
            const t = 1 - dist / INFLUENCE_RADIUS;
            radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * t * t;
            color = glow;
            alpha = Math.min(0.82, baseOpacity + 0.58 * t * t);
          }

          ctx!.beginPath();
          ctx!.arc(x, y, radius, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${color}, ${alpha})`;
          ctx!.fill();
        }
      }

      animFrameId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    resize();
    draw();

    globalThis.addEventListener("resize", resize);
    globalThis.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameId);
      globalThis.removeEventListener("resize", resize);
      globalThis.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
