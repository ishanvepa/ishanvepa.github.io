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
            <Link 
              href="mailto:alex.chen@email.com"
              className="block text-2xl text-[#10B981] hover:text-[#059669] transition-colors duration-200 font-medium"
            >
              alex.chen@email.com
            </Link>
            
            <Link 
              href="https://linkedin.com/in/alexchen"
              className="inline-flex items-center gap-2 text-[#10B981] hover:text-[#059669] transition-colors duration-200 font-medium"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}