import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import DotBackground from "@/components/DotBackground";
import StatusWidget from "../components/StatusWidget";
import ChatBot from "@/components/ChatBot";

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Ishan Vepa",
  description: "CS student at Georgia Tech studying Human-Computer Interaction and Artificial Intelligence. When I'm not programming, you may find me transcribing jazz records, trying new shaken espressos, and watching Premier League soccer (GGMU ifykyk).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {/* <DotBackground /> */}
        <StatusWidget />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
        <ThemeToggle />
        <ChatBot />
      </body>
    </html>
  );
}
