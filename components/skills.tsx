"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'

const fadeInAnimation = {
    initial: {opacity: 0, y: 150,},
    animate: {opacity: 1, y: 0,},


}


export default function Skills() {
  return (
        <section className = "mt-[8rem] mb-30 max-w-[53rem] scroll-mt-50 text-center sm:mb-40" id="skills">
            <SectionHeading>My Skills</SectionHeading>


            <ul className = "flex flex-wrap justify-center gap-2 text-lg">
                {
                    skillsData.map((skill, index) =>(
                        <motion.li className = "bg-green-950 border border-green-950 rounded-3xl px-4 py-2 hover:bg-green-800 hover:scale-105 ease-in-out transition-colors " key={index} variants={fadeInAnimation} initial="initial" whileInView="animate"> {skill} </motion.li>
                    ))
                }

            </ul>




        </section>

)
}
