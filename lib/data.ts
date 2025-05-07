import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/mywebsite_pic.png";
import rmtdevImg from "@/public/rmtdev.png";

import billboardwebscraper from "@/public/billboard_web_scraper_code.png";
import AIAcademicSearchEngine from "@/public/AI_Academic_Search_Engine.png";

import MarioGame2 from "../public/mariogame2.png";
import SleepApp1 from "@/public/sleepapphome1_edit.png";
import marketMaven from "../public/market_maven_proto.png";
import senserfy from "@/public/senserfy.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Intern",
    company: "Datamaxx Group",
    location: "Tallahassee, FL",
    description:
      "Led the shift from Excel to Tableau dashboards, improving research administration efficiency. Prototyped app using Figma, streamlining access to InfoReady guides through a user-friendly interface. Collaborated alongside Senior Executive Research Administrators at Georgia Tech. Iterated on root cause analysis to solve centralization and compliance inefficiencies in research.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2024 - Present",
  },
  {
    title: "Undergraduate Researcher, Data Team Leader",
    company: "Georgia Tech Vertically Integrated Project",
    location: "Atlanta, GA",
    description:
      "Led the shift from Excel to Tableau dashboards, improving research administration efficiency. Prototyped app using Figma, streamlining access to InfoReady guides through a user-friendly interface. Collaborated alongside Senior Executive Research Administrators at Georgia Tech. Iterated on root cause analysis to solve centralization and compliance inefficiencies in research.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Present",
  },
  {
    title: "Founder, Director of Post-Production, Web-Development",
    company: "Generation Z Media",
    location: "Tallahassee, FL",
    description:
      "Reached 500,000+ impressions, through static blog and website in 1 year via configuring SEO. Initiated & managed chapters in Oregon, Michigan, and Connecticut, overseeing 25 members. Led Video Post-Production across all videos and documentaries.",
    icon: React.createElement(CgWorkAlt),
    date: " Jul 2019 - Aug 2022",
  },
  {
    title: "Technology Deployment Coordinator",
    company: "South City Foundation, E&Y",
    location: "Tallahasee, FL",
    description:
      "Deployed computer hardware and software to grant 1000+ students access to technology necessary for educational opportunities.",
    icon: React.createElement(FaReact),
    date: "Jul 2021 - Oct 2021",
  },
] as const;

export const projectsData = [
  {
    title: "AI Academic Research Engine",
    description:
      "Built an AI academic search engine to perform LLM-based similarity search beyond keyword matching. Engineered a scalable RAG pipeline that ingests papers via the Semantic Scholar API into FAISS vectorstore. Designed REST endpoints for ingestion and similarity queries, enabling vector search for 1,000,000+ abstracts",
    tags: ["React.js", "Flask", "LangChain FAISS", "Python", "Semantic Scholar API"],
    imageUrl: AIAcademicSearchEngine,
    projectUrl: "https://github.com/ishanvepa/AI-Academic-Research-Engine",
  },
  {
    title: "Senserfy: Spotify Dashboard & AI Recommendations ",
    description:
      "Built dashboard using Spotify REST API showing 10 listening metrics, such as top artists, genres, and tracks. Developed RAG AI song curation tool that analyzes musical sentiment and recommends songs using FAISS",
    tags: ["Next.js", "TypeScript", "Flask", "Spotipy", "FAISS", "Python"],
    imageUrl: senserfy,
    projectUrl: "https://github.com/ishanvepa/senserfy",
  },
  // {
  //   title: "Market Maven",
  //   description:
  //     "Analyzes social sentiment of stock through scraping Stocktwits and Twitter, Provides relevant market news on specified stocks related to price fluctuations, Leveraged Bavest Rest API to retrieve and process stock price history and market news",
  //   tags: ["React Native", "TypeScript", "Flask", "Python"],
  //   imageUrl: marketMaven,
  //   projectUrl: "https://github.com/ishanvepa/market-maven",
  // },
  {
    title: "Personal Website",
    description:
      "Leveraged Next.js and Tailwind CSS, and HTML to build a high-performance personal website.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML"],
    imageUrl: corpcommentImg,
    projectUrl: "https://github.com/ishanvepa/ishanvepa.github.io",
  },
  {
    title: "Dungeon Crawler Android Game",
    description:
      " Used Java and MVVM architecture to code 'Luigi's Mansion'-themed dungeon crawler android game. Utilized UML infrastructures: System-Sequence Diagram, Design Class Diagram, Use-Case Diagram. Implemented software design patterns: Strategy, Observer, Singleton, Factory, Decorator.",
    tags: ["Java", "Android Studio", "Git"],
    imageUrl: MarioGame2,
    projectUrl: "https://github.com/ishanvepa/CS2340C_Team35",
  },
  // {
  //   title: "Gamified Sleep Tracker App",
  //   description:
  //     "Used Figma to create a high fidelity gamified social sleep-tracking app prototype for college students. Iterated on user insights, design principles, and wellness usability.",
  //   tags: ["Figma"],
  //   imageUrl: SleepApp1,
  //   projectUrl: "https://www.figma.com/design/yvubBPRovKAzeR4Asxx04b/CS-3873-Project?node-id=283-1429&t=oXGC2XPekCsKIOtp-1",
  // },

  {
    title: "Computational Analysis of Contemporary Music",
    description:
      "Web-scraped Billboard Hot 100, comparative analysis, transcribed melodies, chord progressions, tempos, and keys of songs in Python. Leveraged Python API: BeautifulSoup, urllib, xlsxwriter, openpyxl. Completed research paper guided by the research question: “Why do people enjoy music?”",
    tags: ["Python", "BeautifulSoup", "urllib", "xlsxwriter", "openpyxl"],
    imageUrl: billboardwebscraper,
    projectUrl: "https://github.com/ishanvepa/pop-music-comparative-analyzer",
  },

] as const;

export const skillsData = [
  "Java",
  "C",
  "C#",
  "ASP.NET Framework",
  "jQuery",
  "React.js",
  "Next.js",
  "Python",
  "Flask",
  "Rest API",
  "HTML",
  "CSS",
  "Javascript",
  "Assembly",
  "TypeScript",
  "Git",
  "Accurev SCM",
  "Tailwind CSS",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "AWS API",
  "Figma",
  "Tableau",
  "AWS Amplify",
  "Android Studio",


] as const;