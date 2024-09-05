"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
title,
description,
tags,
imageUrl,
projectUrl

}: ProjectProps){
    const ref = useRef<HTMLElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["0 1", "0.33 0.75"],
        

    });
    return (
    <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <motion.section 
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}

        className="group bg-green-900 max-w-[42rem]  border-black/5 overflow-hidden sm:pr-8 relative sm:h-[10rem]mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-green-950 transition rounded-xl mt-[30px]">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-250 pb-2">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li className="bg-black/[0.3] px-3 py-1 text-[0.7rem] uppercase tarcking-wider text-white rounded-full hover:bg-black/[0.6]" key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            
            <Image src={imageUrl} alt={title} quality={95} className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3 
            group-even:group-hover:-translate-y-3 
            group-even:group-hover:rotate-2

            group-hover:scale-110 transition" />

        </motion.section>

    </a>


    );
}