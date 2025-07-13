"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Smartphone, Brain, Database, Globe } from "lucide-react"
import { Badge } from "@/components/badge"
import { Button } from "@/components/button"
import { Card, CardContent } from "@/components/card"

const projects = [
  {
    id: 1,
    title: "TaskFlow - Project Management",
    description: "Full-stack web application for team collaboration with real-time updates, task management, and project analytics.",
    image: "/api/placeholder/400/250",
    techStack: ["React", "Node.js", "PostgreSQL", "WebSockets", "TypeScript"],
    demoLink: "https://taskflow-demo.com",
    sourceLink: "https://github.com/username/taskflow",
    icon: Globe,
    category: "Web Application",
    gradient: "from-blue-600 via-purple-600 to-indigo-600"
  },
  {
    id: 2,
    title: "GraphQL Analytics API",
    description: "Scalable GraphQL API for business analytics with advanced querying capabilities and data visualization endpoints.",
    image: "/api/placeholder/400/250",
    techStack: ["GraphQL", "Apollo", "MongoDB", "Express", "Docker"],
    demoLink: "https://analytics-api-docs.com",
    sourceLink: "https://github.com/username/graphql-analytics",
    icon: Database,
    category: "API Project",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600"
  },
  {
    id: 3,
    title: "FitTracker Mobile App",
    description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
    image: "/api/placeholder/400/250",
    techStack: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    demoLink: "https://fittracker-preview.com",
    sourceLink: "https://github.com/username/fittracker",
    icon: Smartphone,
    category: "Mobile App",
    gradient: "from-orange-600 via-red-600 to-pink-600"
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Machine learning powered content generation tool with natural language processing and automated optimization.",
    image: "/api/placeholder/400/250",
    techStack: ["Python", "TensorFlow", "FastAPI", "OpenAI", "Redis"],
    demoLink: "https://ai-content-gen.com",
    sourceLink: "https://github.com/username/ai-content-gen",
    icon: Brain,
    category: "AI/ML Project",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600"
  }
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
    <section className="bg-card py-24 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
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
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 relative">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm" />
                
                <CardContent className="p-0 relative">
                  {/* Project Image with gradient overlay */}
                  <div className="relative overflow-hidden aspect-video">
                    <div className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500`}>
                      <project.icon className="h-12 w-12 text-white/90 relative z-10" />
                      {/* Animated particles on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
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
                    <p className="mb-4 text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack with hover effects */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="default"
                          className="bg-muted/50 text-muted-foreground hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:text-white text-xs font-medium border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Links with enhanced gradients */}
                    <div className="flex gap-3">
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-primary to-emerald-400 hover:from-primary/90 hover:to-emerald-500 text-primary-foreground flex-1 shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 border-0"
                      >
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-border/50 hover:bg-gradient-to-r hover:from-muted/50 hover:to-primary/10 flex-1 hover:border-primary/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                      >
                        <a 
                          href={project.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
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