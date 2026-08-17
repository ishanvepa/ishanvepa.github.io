export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experience = [
  // {
  //   company: "IBM",
  //   role: "Software Development Engineer Co-op",
  //   date: "Aug 2026 – Dec 2026",
  //   location: "San Jose, CA",
  //   logo: "/ibm_logo_legacy.png",
  //   fallback: "IBM",
  // },
  {
    company: "Adobe",
    role: "Software Engineer Intern",
    date: "May 2026 – Aug 2026",
    location: "San Jose, CA",
    logo: "/adobe_logo.png",
    fallback: "Ad",
    bullets:[
      "Mitigated bot abuse across Adobe’s commerce services with ML-based risk detection, flagging XXK+ abusive transactions daily and preventing $XXM+ in annualized fraud and compute losses",
      "Engineered LightGBM fraud detection model scoring 200k+ transactions/day with 86% precision and 91% recall for identifying fraud, reducing false positives by 27%",
      "Built an automated model retraining pipeline via Databricks cron job over XM+ transactions, engineering proprietary features, tuning with Optuna, and serving in real-time via internal inference service",
      "Developed ARP Policy SDK: an agentic fraud-policy auditing service identifying duplicate/overlapping rules via Jaccard similarity, simulating impact over Databricks data, and drafting rule-engines from natural language",
      "Skills: Python, LightGBM, Optuna, Scikit-Learn, Spark, Databricks, Jupyter Notebook, OpenAI API, SQL"
    ],
  },
  {
    company: "SitScape",
    role: "Software Engineer Intern",
    date: "Jun 2025 – Aug 2025",
    location: "McLean, VA",
    logo: "/sitscape_logo.png",
    fallback: "SS",
    bullets: [
      "Engineered a Generative UI system with a multi-agent AI ReAct service using LangGraph/LangChain in Python that automates front-end UI and event handling, reducing developer build time by 75%.",
      "Shipped a no-code RAG API, enabling 10+ Fortune 500 clients to deploy LLM-powered chat in production.",
      "Authored comprehensive documentation on both services for use by a team of 30+ developers.",
      "Skills: Python, LangGraph, LangChain, Flask, JavaScript, SQL, OpenAI API.",
    ],
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
    role: "Software Engineer Intern",
    date: "May 2024 – Aug 2024",
    location: "Tallahassee, FL",
    logo: "/datamaxx_logo.png",
    fallback: "Dm",
    bullets: [
      "Reduced user identity verification time by 67% (1 minute to 20 seconds) by developing an automated ID parsing and user face verification service in ASP.NET with AWS Textract and Rekognition API.",
      "Enhanced user security screening efficiency for 100+ vendors by implementing a QR code visitor check-in system.",
      "Skills: C#, ASP.NET MVC, jQuery, HTML, CSS, SQL, AWS API.",
    ],
  },
] as const;

export const education = [
  {
    institution: "Georgia Institute of Technology",
    degree: "M.S. Computer Science: Human-Computer Interaction",
    date: "Jan 2026 – Present",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg",
    fallback: "GT",
  },
  {
    institution: "Georgia Institute of Technology",
    degree: "B.S. Computer Science",
    date: "Aug 2022 – Dec 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg",
    fallback: "GT",
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

export const publications = [
  {
    authors: "Ishan Vepa, Jessica Herring, Isabella Martincic, and Bruce N. Walker",
    year: "2026",
    title: "Inclusive Climate Communications: Accessible Hurricane Tracking Maps for the Web",
    venue: "Web4All 2026: 23rd International Web for All Conference (W4A '26)",
    location: "April 13–14, 2026, Dubai, UAE.",
    publisher: "ACM, New York, NY, USA. 2 pages.",
    doi: "https://doi.org/10.1145/3800424.3800436",
  },
] as const;

export const projects = [
  {
    name: "Agentic Data Visualization",
    desc: "Generates visualizations and insights from any type of data.",
    tags: ["React Native", "Python", "Scikit-Learn", "LangChain FAISS", "Supabase", "Flask", "OpenAI API"],
    github: "https://github.com/ishanvepa/agentic-data-visualization",
    image: "/agenticDataVisualization.png",
  },
  {
    name: "Dryft Notes",
    desc: "AI-powered cross-platform note‑taking app.",
    tags: ["React Native", "Python", "Scikit-Learn", "LangChain FAISS", "Supabase", "Flask", "OpenAI API"],
    github: "https://github.com/ishanvepa/dryft-notes",
    image: "/dryftNotes.png",
  },
  {
    name: "Agentic AI Email Assistant",
    desc: "Multi-agent assistant for email & calendar.",
    tags: ["LangGraph", "LangChain", "ReAct Multi-Agentic Architecture", "Gmail API", "Google Calendar API", "Python", "Flask", "Next.js"],
    github: "https://github.com/ishanvepa/agentic-email-assistant",
    image: "/agenticEmailAssistant.png",
  },
  {
    name: "AI Academic Research Engine",
    desc: "RAG pipeline for 200M+ research papers.",
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
    desc: "Analyzed Billboard Hot 100 song patterns.",
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
