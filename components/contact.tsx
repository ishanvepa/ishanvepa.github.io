"use client";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <div id="contact" className="bg-black w-full flex items-center justify-center">      

      <div className="flex relative px-4 z-20 items-center w-full justify-center py-20">
        <div className="mx-auto w-full max-w-lg text-center">
          <div>
            <h1 className="text-3xl tracking-tight text-foreground sm:text-3xl bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Contact Me
            </h1>
            {/* <p className="mt-6 text-[#888888] text-base max-w-sm mx-auto">
              Open to opportunities and collaborations
            </p> */}
          </div>

          <div className="py-10 space-y-6">
            <p> Feel free to reach out to me via
            <Link 
              href="mailto:ishanvepa171@gmail.com"
              className="text-[#f97316] hover:text-[#fb923c] transition-colors duration-200 font-medium"
            > email 
             </Link> or 
            <Link 
              href="https://linkedin.com/in/ishanvepa"
              className="text-[#f97316] hover:text-[#fb923c] transition-colors duration-200 font-medium"
            > linkedin.
            </Link>
            </p>       
          </div>

        </div>
      </div>
    </div>
  );
}