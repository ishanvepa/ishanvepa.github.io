"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from 'next/image'
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Card, CardContent } from "@/components/card"

const projects = [
  {
    id: 1,
    title: "Agentic AI Email Assistant",
    description:
      "Built a multi-agent AI assistant that fetches, summarizes, and takes actions on emails via natural prompts. Integrated LangGraph with ReAct agents to dynamically parse Gmail and schedule Google Calendar events through structured prompting and tool use.",
    image: "/agenticEmailAssistant.png",
    techStack: [
      "LangGraph",
      "LangChain",
      "ReAct Multi-Agentic Architecture",
      "Gmail API",
      "Google Calendar API",
      "Python",
      "Flask",
      "Next.js",
    ],
    demoLink: "#",
    sourceLink: "https://github.com/ishanvepa/agentic-email-assistant",
    
    category: "Agentic Systems",
  gradient: "from-orange-600 to-amber-500",
  },
  {
    id: 2,
    title: "AI Academic Research Engine",
    description:
      "Engineered a scalable RAG pipeline that ingests papers via academic journal APIs into FAISS vectorstore. Enabled vector search for 200M+ abstracts, designing 10+ REST endpoints for query processing. Fine-tuned BART model using PEFT to perform literature review through abstractive text summarization.",
    image: "/AI_Academic_Search_Engine.png",
    techStack: [
      "Next.js",
      "React.js",
      "Flask",
      "LangChain FAISS",
      "Python",
      "BART",
      "PEFT",
    ],
    demoLink: "#",
    sourceLink: "https://github.com/ishanvepa/AI-Academic-Research-Engine",
    
    category: "NLP / Retrieval",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    id: 3,
    title: "Personal Website",
    description:
      "Leveraged Next.js and Tailwind CSS, and HTML to build a high-performance personal website.",
    image: "/bg_personal_website.png",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML"],
    demoLink: "#",
    sourceLink: "https://github.com/ishanvepa/ishanvepa.github.io",
    
    category: "Web",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    id: 4,
    title: "Dungeon Crawler Android Game",
    description:
      "Used Java and MVVM architecture to code 'Luigi's Mansion'-themed dungeon crawler android game. Utilized UML infrastructures and implemented design patterns: Strategy, Observer, Singleton, Factory, Decorator.",
    image: "/mariogame1.png",
    techStack: ["Java", "Android Studio", "Git"],
    demoLink: "#",
    sourceLink: "https://github.com/ishanvepa/CS2340C_Team35",
    
    category: "Mobile Game",
    gradient: "from-orange-600 to-amber-500",
  },
  {
    id: 5,
    title: "Computational Analysis of Contemporary Music",
    description:
      "Web-scraped Billboard Hot 100, comparative analysis, transcribed melodies, chord progressions, tempos, and keys of songs in Python. Leveraged BeautifulSoup, urllib, xlsxwriter and openpyxl. Completed a research paper exploring why people enjoy music.",
    image: "/billboard_web_scraper_code.png",
    techStack: ["Python", "BeautifulSoup", "urllib", "xlsxwriter", "openpyxl"],
    demoLink: "#",
    sourceLink: "https://github.com/ishanvepa/pop-music-comparative-analyzer",
    
    category: "Research",
  gradient: "from-orange-600 to-amber-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" /> */}
      
      
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl tracking-tight text-foreground sm:text-3xl bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm" />
                
                <CardContent className="p-0 relative">
                  {/* Project Image with gradient overlay */}
                  <div className="relative overflow-hidden aspect-video">
                    <div className={`aspect-video
                       bg-gradient-to-br ${project.gradient} flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500`}>
                      <div className="absolute inset-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      {/* Animated particles on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={`${project.id}-p-${i}`}
                            className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                            style={{
                              left: `${20 + (i * 15)}%`,
                              top: `${30 + (i % 3) * 20}%`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    {/* Category Badge with gradient */}
                    <div className="mb-3">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs font-medium bg-gradient-to-r ${project.gradient} text-white border-0 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300`}
                      >
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Title with hover gradient */}
                    <h3 className="mb-3 text-lg font-semibold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="mb-4 text-sm text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack with hover effects */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="default"
                          className="bg-muted/50 text-muted-foreground hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:text-white text-xs font-medium border border-border/50  transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Links - only Source */}
                    <div className="flex gap-3">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-border/50 hover:bg-gradient-to-r hover:from-muted/50 hover:to-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                      >
                        <a 
                          href={project.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}