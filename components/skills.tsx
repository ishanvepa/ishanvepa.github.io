"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Database, 
  Cloud, 
  Brain,
  Smartphone,
  Server,
  FileCode,
  Palette,
  Terminal,
  Package,
  GitBranch,
  Cpu,
  Globe,
  Video,
  BarChart3,
  Settings,
  Layers,
  Zap
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: Code2, gradient: "from-orange-400 to-red-500" },
      { name: "C", icon: Terminal, gradient: "from-blue-600 to-blue-800" },
      { name: "C#", icon: Code2, gradient: "from-purple-500 to-purple-700" },
      { name: "Python", icon: Terminal, gradient: "from-yellow-400 to-blue-500" },
      { name: "JavaScript", icon: FileCode, gradient: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", icon: FileCode, gradient: "from-blue-500 to-indigo-600" },
      { name: "Assembly", icon: Cpu, gradient: "from-gray-500 to-gray-700" },
    ],
    bgGradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "React.js", icon: Code2, gradient: "from-cyan-400 to-blue-600" },
      { name: "Next.js", icon: Layers, gradient: "from-slate-400 to-slate-600" },
      { name: "jQuery", icon: Code2, gradient: "from-blue-400 to-blue-700" },
      { name: "HTML", icon: Globe, gradient: "from-orange-500 to-red-500" },
      { name: "CSS", icon: Palette, gradient: "from-blue-400 to-purple-600" },
      { name: "Tailwind CSS", icon: Palette, gradient: "from-cyan-400 to-teal-600" },
    ],
    bgGradient: "from-cyan-500/10 to-blue-500/10"
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "ASP.NET Framework", icon: Server, gradient: "from-purple-500 to-indigo-600" },
      { name: "Flask", icon: Package, gradient: "from-gray-400 to-gray-600" },
  { name: "Rest API", icon: Zap, gradient: "from-green-400 to-orange-600" },
      { name: "RAG API", icon: Brain, gradient: "from-violet-400 to-purple-600" },
      { name: "AWS API", icon: Cloud, gradient: "from-orange-400 to-orange-600" },
    ],
  bgGradient: "from-green-500/10 to-orange-500/10"
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: GitBranch, gradient: "from-red-400 to-red-600" },
      { name: "Accurev SCM", icon: GitBranch, gradient: "from-blue-500 to-indigo-600" },
      { name: "Android Studio", icon: Smartphone, gradient: "from-green-400 to-green-600" },
      { name: "Figma", icon: Palette, gradient: "from-purple-400 to-pink-600" },
      { name: "Adobe Premiere Pro", icon: Video, gradient: "from-purple-600 to-indigo-700" },
      { name: "Adobe After Effects", icon: Video, gradient: "from-blue-600 to-purple-700" },
    ],
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "Cloud & Analytics",
    skills: [
      { name: "AWS Amplify", icon: Cloud, gradient: "from-orange-400 to-yellow-500" },
      { name: "Tableau", icon: BarChart3, gradient: "from-blue-500 to-cyan-600" },
    ],
    bgGradient: "from-orange-500/10 to-yellow-500/10"
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LangChain", icon: Brain, gradient: "from-violet-400 to-purple-600" },
      { name: "LangGraph", icon: Settings, gradient: "from-purple-500 to-pink-600" },
      { name: "LLMs", icon: Cpu, gradient: "from-pink-400 to-rose-600" },
    ],
    bgGradient: "from-violet-500/10 to-pink-500/10"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-card py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl tracking-tight text-foreground sm:text-3xl bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent"
          >
            Skills & Technologies
          </motion.h2>
          {/* <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive toolkit spanning multiple programming languages, frameworks, and cutting-edge technologies
          </motion.p> */}
        </motion.div>

        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`space-y-6 p-6 rounded-2xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 group`}
            >
              <h3 className="text-xl font-semibold text-foreground text-center group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        x: 5,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }}
                      className="group/skill flex items-center gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-transparent hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300 rounded-xl`} />
                      
                      <div className="relative z-10 w-8 h-8 flex items-center justify-center flex-shrink-0">
                        <div className={`w-full h-full rounded-lg bg-gradient-to-br ${skill.gradient} flex items-center justify-center group-hover/skill:shadow-md group-hover/skill:shadow-primary/20 transition-all duration-300`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300 relative z-10 flex-1">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {skillCategories.map((category) =>
              category.skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${skill.gradient} text-white hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {skill.name}
                </motion.span>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}