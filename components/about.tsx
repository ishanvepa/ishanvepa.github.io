"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'


export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
    
    >
        <SectionHeading>About Me</SectionHeading>
        
        <p className="mb-3">I have an avid interest in technology and computer science. I am currently pursuing a <span className="font-bold">Bachelor of Science in Computer Science</span> at the <a className="font-bold hover:opacity-65 transition-opacity ease-in-out" href="https://gatech.edu">Georgia Institute of Technology</a> with a concentration in Human-Computer Interaction.
        </p>
        <p> I also pursue creative passions such as video production and music. I have produced documentaries, and am a jazz saxophonist musician.</p>
    </motion.section>
  )
}
