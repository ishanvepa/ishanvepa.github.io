import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/mywebsite_pic.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import MarioGame1 from "@/public/mariogame1.png";
import MarioGame2 from "../public/mariogame2.png";
import SleepApp1 from "@/public/sleepapphome1_edit.png";
import SleepApp2 from "@/public/sleepappleaderboard2.png";

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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Website",
    description:
      "Leveraged Next.js and Tailwind CSS, and HTML to build a high-performance personal website.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Dungeon Crawler Android Game",
    description:
      " Used Java and MVVM architecture to code 'Luigi's Mansion'-themed dungeon crawler android game. Utilized UML infrastructures: System-Sequence Diagram, Design Class Diagram, Use-Case Diagram. Implemented software design patterns: Strategy, Observer, Singleton, Factory, Decorator.",
    tags: ["Java", "Android Studio", "Git"],
    imageUrl: MarioGame2,
  },
  {
    title: "Gamified Sleep Tracker App",
    description:
      "Used Figma to create a high fidelity gamified social sleep-tracking app prototype for college students. Iterated on user insights, design principles, and wellness usability.",
    tags: ["Figma"],
    imageUrl: SleepApp1,
  },

  {
    title: "Computational Analysis of Contemporary Music",
    description:
      "Used Figma to create a high fidelity gamified social sleep-tracking app prototype for college students. Iterated on user insights, design principles, and wellness usability.",
    tags: ["Python", "BeautifulSoup", "urllib", "xlsxwriter", "openpyxl"],
    imageUrl: wordanalyticsImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;