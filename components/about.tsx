"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'


export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="about"
    >
        <SectionHeading>About Me</SectionHeading>
        
        <p className="mb-3">I have an avid interest in technology and computer science. I am currently pursuing a <span className="font-bold">Bachelor of Science in Computer Science</span> at the <a className="font-bold hover:opacity-65 hover:text-green-400 transition-opacity ease-in-out" href="https://gatech.edu">Georgia Institute of Technology</a> with a concentration in Human-Computer Interaction.
        </p>
        <p> When I am not programming you may find me transcribing jazz records, trying new cold brews, or watching premier league soccer (GGMU ifykyk).</p>
    </motion.section>
  )
}
