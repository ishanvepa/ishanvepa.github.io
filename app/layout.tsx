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
      <body className={` ${inter.className} bg-black	 text-[#000000] relative h-[2000px] justify-center `} >
        {/* <Header /> */}
        <div className="bg-amber-400 absolute top-[2rem] -z-30 left-[0rem] h-[25rem] w-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>     
        <div className="bg-yellow-600 absolute top-[20rem] -z-30 right-[0rem] h-[20rem] w-[20rem] rounded-full blur-[8rem] sm:w-[45rem] sm:h-[45rem]"></div>
        <div className="hidden md:block absolute inset-x-28 top-28 bottom-28 bg-white/30 rounded-3xl -z-20 backdrop-blur-3xl"></div>
        <div className="relative bg-black/60 z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
