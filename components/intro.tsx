"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">   
        <div className='flex items-center justify-center'>
            <div className="relative">
                <motion.div
                initial = {{ opacity: 0, scale: 0}}
                animate = {{ opacity: 1, scale: 1}}
                transition = {{
                    type: "tween",
                    duration: 0.2,
                }}
                >
                    <Image src="https://media.licdn.com/dms/image/D5603AQFjzNQv-eL93w/profile-displayphoto-shrink_200_200/0/1701155035481?e=1709769600&v=beta&t=Ps2AYAP0d7xXjPU2sEsrWRVWw13ImL2aFReEFChWEqs" 
                    alt="Ishan's portrait image"
                    width="300"
                    height="300"
                    quality="95"
                    priority={true}
                    className="h-70 w-70 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>   
                <motion.span className="absolute bottom-0 right-0 text-7xl"
                    initial = {{ opacity: 0, scale: 0 }}
                    animate = {{ opacity: 1, scale: 1 }}
                    transition = {{ 
                        delay: 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 125,
                        
                    }}
                >
                    👋
                </motion.span>             
            </div>

                

        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial = {{ opacity: 0, y: 100 }}
            animate = {{ opacity: 1, y: 0 }}
        >
            Hello, I am <span className="font-bold">Ishan Vepa</span>.
        </motion.h1>

        <motion.div className="flex flex-col gap-5 sm:flex-row"
            initial = {{ opacity: 0, y: 100 }}
            animate = {{ opacity: 1, y: 0}}
            transition = {{ 
                delay: 0.1,
            }}
        >
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                Contact Me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                
            
            </Link>

            <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10" href="/Ishan_Vepa_Resume.pdf" download>My Resume <HiDownload className="opacity-60 group-hover:translate-y-0.5" />
            </a>

            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10" href="https://linkedin.com/in/ishanvepa" target="_blank">
                <BsLinkedin />
            </a>

            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10" href="https://github.com/ishanvepa" target="_blank">
                <FaGithubSquare />
            </a>
        </motion.div>

    </section>
  )
}
