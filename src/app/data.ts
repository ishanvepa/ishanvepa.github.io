export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experience = [
  {
    company: "Adobe",
    role: "Software Engineering Intern",
    date: "May 2026 – Aug 2026",
    logo: "/adobe_logo.png",
    fallback: "Ad",
  },
  {
    company: "SitScape",
    role: "AI Engineering Intern",
    date: "Jun 2025 – Aug 2025",
    logo: "/sitscape_logo.png",
    fallback: "SS",
  },
  // {
  //   company: "Georgia Tech Sonification Lab & Design Studio",
  //   role: "Graduate Researcher",
  //   date: "Aug 2024 - Present",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg",
  //   fallback: "GT",
  // },
  {
    company: "Datamaxx Group",
    role: "Software Engineering Intern",
    date: "May 2024 – Aug 2024",
    logo: "/datamaxx_logo.png",
    fallback: "Dm",
  },
] as const;

export const research = [
  {
    institution: "Georgia Tech Sonification Lab & Design Studio",
    role: "Graduate Researcher",
    date: "Aug 2024 – Present",
    desc: "Conducting HCI research on accessible big data systems.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg",
    fallback: "GT",
  },
] as const;

export const projects = [
  {
    name: "Agentic AI Email Assistant",
    desc: "Built a multi-agent AI assistant that fetches, summarizes, and takes actions on emails via natural prompts. Integrated LangGraph with ReAct agents to dynamically parse Gmail and schedule Google Calendar events through structured prompting and tool use.",
    tags: ["LangGraph", "LangChain", "ReAct Multi-Agentic Architecture", "Gmail API", "Google Calendar API", "Python", "Flask", "Next.js"],
    github: "https://github.com/ishanvepa/agentic-email-assistant",
    image: "/agenticEmailAssistant.png",
  },
  {
    name: "AI Academic Research Engine",
    desc: "Engineered a scalable RAG pipeline that ingests papers via academic journal APIs into FAISS vectorstore. Enabled vector search for 200M+ abstracts, designing 10+ REST endpoints for query processing. Fine-tuned BART model using PEFT to perform literature review through abstractive text summarization.",
    tags: ["Next.js", "React.js", "Flask", "LangChain FAISS", "Python"],
    github: "https://github.com/ishanvepa/AI-Academic-Research-Engine",
    image: "/AI_Academic_Search_Engine.png",
  },
  // {
  //   name: "Personal Website",
  //   desc: "Leveraged Next.js and Tailwind CSS, and HTML to build a high-performance personal website.",
  //   tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML"],
  //   github: "https://github.com/ishanvepa/ishanvepa.github.io",
  //   image: "https://opengraph.githubassets.com/1/ishanvepa/ishanvepa.github.io",
  // },
  // {
  //   name: "Dungeon Crawler Android Game",
  //   desc: "Used Java and MVVM architecture to code 'Luigi's Mansion'-themed dungeon crawler android game. Utilized UML infrastructures: System-Sequence Diagram, Design Class Diagram, Use-Case Diagram. Implemented software design patterns: Strategy, Observer, Singleton, Factory, Decorator.",
  //   tags: ["Java", "Android Studio", "Git"],
  //   github: "https://github.com/ishanvepa/CS2340C_Team35",
  //   image: "https://opengraph.githubassets.com/1/ishanvepa/CS2340C_Team35",
  // },
  {
    name: "Computational Analysis of Contemporary Music",
    desc: "Web-scraped Billboard Hot 100, comparative analysis, transcribed melodies, chord progressions, tempos, and keys of songs in Python. Leveraged Python API: BeautifulSoup, urllib, xlsxwriter, openpyxl. Completed research paper guided by the research question: \"Why do people enjoy music?\"",
    tags: ["Python", "BeautifulSoup", "urllib", "xlsxwriter", "openpyxl"],
    github: "https://github.com/ishanvepa/pop-music-comparative-analyzer",
    image: "/billboard_web_scraper_code.png",
  },
] as const;

// Spotify embed URLs: https://open.spotify.com/embed/track/{id} or /album/{id}
export const music = [
  {
    title: "Track Title",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/1oSukkADTjJzuzo31OHWRC?utm_source=generator",
  },
] as const;

export const skills = [
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
  "RAG API",
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
  "LangChain",
  "LangGraph",
  "LLMs",
] as const;
