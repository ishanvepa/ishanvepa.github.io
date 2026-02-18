import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

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
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
