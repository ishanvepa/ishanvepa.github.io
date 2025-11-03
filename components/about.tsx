"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Link from 'next/link'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section 
      ref={ref}
      className="py-24 px-6 md:px-8 lg:px-12 bg-card relative overflow-hidden"
      id="about"
    >
      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-primary/5 pointer-events-none" /> */}
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Left side - Professional headshot */}
          {/* <motion.div 
            className="relative flex justify-center lg:justify-end group"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          > 
            {/* <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-purple-500/30 rounded-2xl blur-2xl scale-110"
                animate={{
                  scale: [1.1, 1.2, 1.1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              /> 
              
              
              <motion.div 
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-border/50 bg-gradient-to-br from-muted via-muted/80 to-primary/10 shadow-2xl group-hover:border-primary/50 transition-all duration-500"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-purple-500/20 flex items-center justify-center text-6xl text-muted-foreground group-hover:text-primary transition-colors duration-500">
                  👨‍💻
                </div>
                
                
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/60 rounded-full"
                      style={{
                        left: `${20 + (i * 10)}%`,
                        top: `${20 + (i % 4) * 20}%`,
                      }}
                      animate={{
                        y: [-5, -15, -5],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 2 + (i * 0.2),
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              
              
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-2xl opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </motion.div>
            */}

          {/* Right side - About content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl tracking-tight text-foreground sm:text-3xl bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                About Me
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed font-[var(--font-body)]">
                <motion.p 
                  className="text-text-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I have an avid interest in technology and computer science. I am currently pursuing a Bachelor of Science in Computer Science at the{' '}
                  <Link
                    href="https://gatech.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-500/80 font-semibold transition-all"
                  >
                    Georgia Institute of Technology
                  </Link>
                  {' '}with a concentration in Human-Computer Interaction.
                </motion.p>

                <motion.p 
                  className="text-text-secondary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  When I am not programming you may find me transcribing jazz records, trying new cold brews, or watching premier league soccer (GGMU ifykyk).
                </motion.p>
              </div>
              
            </div>

            {/* Enhanced skills highlight with gradients */}
            {/* <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              {[
                { skill: 'Full-Stack Development', gradient: 'from-blue-500 to-cyan-500' },
                { skill: 'Problem Solving', gradient: 'from-emerald-500 to-teal-500' },
                { skill: 'Open Source', gradient: 'from-purple-500 to-pink-500' },
                { skill: 'Emerging Tech', gradient: 'from-orange-500 to-red-500' }
              ].map((item, index) => (
                <motion.span 
                  key={item.skill}
                  className={`px-4 py-2 bg-gradient-to-r ${item.gradient} bg-opacity-10 border border-border/50 rounded-lg text-sm font-medium hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-cyan-400 transition-all duration-300">
                    {item.skill}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`} />
                </motion.span>
              ))}
            </motion.div> */}
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}