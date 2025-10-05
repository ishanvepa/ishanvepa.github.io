"use client";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-card bg-gradient-to-br from-primary/5 via-transparent to-accent/5 w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-20">
        <div className="mx-auto w-full max-w-lg text-center">
          <div>
            <h1 className="text-3xl font-bold leading-9 tracking-tight text-white font-[var(--font-display)]">
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
             </Link> 
             or 
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