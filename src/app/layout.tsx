import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import DotBackground from "@/components/DotBackground";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Ishan Vepa",
  description: "CS student at Georgia Tech studying Human-Computer Interaction. When I'm not programming, you may find me transcribing jazz records, trying new shaken espressos, and watching Premier League soccer (GGMU ifykyk).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {/* <DotBackground />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "560px", margin: "0 auto" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            {children}
          </div>
        </div> */}
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
