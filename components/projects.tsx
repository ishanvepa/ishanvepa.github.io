import React from 'react';
import Project from './project';
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <section>

        <SectionHeading>My Projects</SectionHeading>

        <div>
            {
            projectsData.map((project, index) => (
               <React.Fragment key={index}>
                   <Project {...project} />
               </React.Fragment>
               


            ))

            
            
            
            
            }



        </div>
    </section>  
    );
}
