"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'


export default function ContactMe() {
  return (
    <motion.section className="mt-[8rem] mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-50"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="contact"
    >
        <SectionHeading>Contact Me</SectionHeading>
        
        <p className="mb-3 inline">Feel free to reach out to me via <a href="mailto:ishanvepa171@gmail.com" className="text-green-700 hover:opacity-65 transition-opacity ease-in-out">email</a> or <a className="text-green-700 hover:opacity-65 transition-opacity ease-in-out" href="https://www.linkedin.com/in/ishanvepa/">Linkedin</a>. </p>
        
    </motion.section>
  )
}
