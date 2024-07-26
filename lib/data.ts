import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/mywebsite_pic.png";
import rmtdevImg from "@/public/rmtdev.png";
import billboardwebscraper from "@/public/billboard_web_scraper_code.png";

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
      "Reached 200,000+ impressions, through static blog and website in 1 year via configuring SEO. Initiated & managed chapters in Oregon, Michigan, and Connecticut, overseeing 25 members. Led Video Post-Production across all videos and documentaries.",
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
      "Web-scraped Billboard Hot 100, comparative analysis, transcribed melodies, chord progressions, tempos, and keys of songs in Python. Leveraged Python API: BeautifulSoup, urllib, xlsxwriter, openpyxl. Completed research paper guided by the research question: “Why do people enjoy music?”",
    tags: ["Python", "BeautifulSoup", "urllib", "xlsxwriter", "openpyxl"],
    imageUrl: billboardwebscraper,
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