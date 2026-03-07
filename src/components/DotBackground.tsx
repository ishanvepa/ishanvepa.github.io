"use client";

import { useEffect, useRef } from "react";

const SPACING = 28;
const BASE_RADIUS = 1.4;
const MAX_RADIUS = 3.5;
const INFLUENCE_RADIUS = 80;

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
      const isDark =
        document.documentElement.getAttribute("data-theme") !== "light";
      return {
        base: isDark ? "rgba(255,255,255,0.12)" : "rgba(139,101,60,0.18)",
        glow: isDark ? "rgba(255,255,255,0.75)" : "rgba(139,101,60,0.65)",
      };
    }

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
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

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let radius = BASE_RADIUS;
          let color = base;

          if (dist < INFLUENCE_RADIUS) {
            const t = 1 - dist / INFLUENCE_RADIUS; // 0 → 1 as cursor approaches
            radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * t * t;
            // Interpolate colour strings — use alpha blending shortcut via globalAlpha
            color = glow;
            ctx!.globalAlpha = 0.12 + 0.63 * t * t;
          } else {
            ctx!.globalAlpha = 1;
          }

          ctx!.beginPath();
          ctx!.arc(x, y, radius, 0, Math.PI * 2);
          ctx!.fillStyle = color;
          ctx!.fill();
          ctx!.globalAlpha = 1;
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

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
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
      aria-hidden="true"
    />
  );
}
