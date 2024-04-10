import Header from "@/components/header"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ishan Vepa | My Portfolio",
  description: "Ishan Vepa is a computer science student at the Georgia Institute of Technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className = "scroll-smooth" lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className="bg-[#cf8f91] absolute top[-6rem] right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem]"></div>     
        <div className="bg-[#ffd787] absolute top[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        
        <Header />
        {children}
      </body>
    </html>
  )
}
