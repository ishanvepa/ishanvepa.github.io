import Header from "@/components/header"
import './globals.css'
import { Inter } from 'next/font/google'
import React from "react"
import Typewriter from "typewriter-effect"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ishan Vepa | My Portfolio",
  description: "Ishan Vepa is an undergraduate computer science student at the Georgia Institute of Technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className = "scroll-smooth" lang="en">
      <body className={`${inter.className} bg-neutral-900	 text-[#eaeaea] relative h-[5000px] pt-28 sm:pt-36 justify-center`}>
        <Header />
        <div className="bg-[#308341] absolute top[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem]"></div>     
        <div className="bg-[#ffd787] absolute top[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {children}
        
      </body>
    </html>
  )
}
