import React, { ReactNode } from 'react'



export default function SectionHeading({children}: {
  children:ReactNode
}
  
  
  
  ) {
  return (
    <h2 className="text-3xl capitalize font-medium mb-8 justify-center flex">{children}</h2>  

  );
}
