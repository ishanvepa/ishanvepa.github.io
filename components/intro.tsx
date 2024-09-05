"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';

import profilePic from "@/public/profpic.jpeg";
import TypewriterComponent from 'typewriter-effect';
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 min-w-[180px]"
    id = "home">   
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
                    <Image src={profilePic} 
                    alt="Ishan's portrait image"
                    width="300"
                    height="300"
                    quality="95"
                    priority={true}
                    className="h-70 w-70 rounded-full object-cover border-[0.35rem] border-neutral-200 shadow-xl"
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

        <motion.h1 className="mb-1 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial = {{ opacity: 0, y: 100 }}
            animate = {{ opacity: 1, y: 0 }}
        >
            Hello, I am <span className="font-bold">Ishan Vepa</span>.
        </motion.h1>

        <motion.div className="mb-10 mt-5 px-4 text-xl font-light !leading-[1.5] sm:text-xl"
            initial = {{ opacity: 0, y: 100 }}
            animate = {{ opacity: 1, y: 0 }}
        >
            {/* <Typewriter
                onInit={(typewriter) => { 
                    typewriter.typeString('Hello, I am <span style="font-weight:bold;">Ishan Vepa</span>') 
                        .start(); 
                        // .stop();
                    }} 
            />  */}
            <Typewriter
                onInit={(typewriter) => { 
                    typewriter.typeString('<em>Currently: HCI Research @ <span style="font-weight:bold;"><a href="http://sonify.psych.gatech.edu/" target="_blank">GT Sonification Lab</span></a></em>') 
                        .start(); 
                        // .stop();
                    }} 
            /> 
        </motion.div>

        

        <motion.div className="flex flex-col gap-5 sm:flex-row"
            initial = {{ opacity: 0, y: 100 }}
            animate = {{ opacity: 1, y: 0}}
            transition = {{ 
                delay: 0.1,
            }}
        >

        
            <Link href="#contact" className="group bg-green-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-green-950 active:scale-105 transition ml-auto mr-auto">
                Contact Me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />    
            </Link>

            <a className="group text-black bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10 ml-auto mr-auto" href="/Ishan_Vepa_Resume.pdf" download>My Resume <HiDownload className="opacity-60 group-hover:translate-y-0.5" />
            </a>

            {/* <div className="flex-row sm:flex-col w-57px"> */}
                <a className="bg-white text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10 ml-auto mr-auto p-5" href="https://linkedin.com/in/ishanvepa" target="_blank">
                    <BsLinkedin />
                </a>

                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10 ml-auto mr-auto" href="https://github.com/ishanvepa" target="_blank">
                    <FaGithubSquare />
                </a>
            {/* </div> */}

        </motion.div>

    </section>
  )
}
