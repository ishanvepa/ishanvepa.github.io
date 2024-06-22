"use client"
import React from 'react'
import { experiencesData, projectsData } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const fadeInAnimation = {
    initial: {opacity: 0, y: 150,},
    animate: {opacity: 1, y: 0,},
}


export default function Experiences() {
  return (
    <section id="Experience">
        <SectionHeading>Work Experience</SectionHeading>
        <VerticalTimeline>
            {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement visible={true}
                        contentStyle={{
                            background: "#f3f4f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            padding: "1.3rem 2rem",
                        }}

                        contentArrowStyle={{
                            borderRight: "1.5rem solid #9ca3af",
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: "white",
                            fontSize: "1.5rem",
                        }}                    
                    >
                        <h2 className="font-semibold">{item.title}</h2>
                        <h3 className="font-bold">{item.company}</h3>
                        <p>{item.location}</p>
                        <p>{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>

    </section>



  );
}
