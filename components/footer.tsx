import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Footer() {
  const pages = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects", 
      href: "#projects",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    // <div className="border-border px-8 py-20 bg-black w-full relative overflow-hidden bg-gradient-to-bl from-accent/5 via-transparent to-primary/5 ">
    <div className="border-border px-8 py-20 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-text-secondary justify-between items-start md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          {/* <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div> */}

          {/* <ul className="transition-colors flex sm:flex-row flex-col hover:text-white text-text-secondary list-none gap-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-accent"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul> */}

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-text-secondary mb-8 sm:mb-0 text-s">
            Ishan Vepa
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/ishanvepa">
              <Github className="h-6 w-6 text-orange-500/70 hover:text-orange-500/100 transition-colors duration-200" />
            </Link>
            <Link href="https://linkedin.com/in/ishanvepa">
              <Linkedin className="h-6 w-6 text-orange-500/70 hover:text-orange-500/100 transition-colors duration-200" />
            </Link>
            {/* <Link href="#" className="transition-colors hover:text-accent">
              <Mail className="h-6 w-6 text-accent" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const Logo = () => {
  return (
    <img
      src="largeishan_favicon(1).png"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20 w-16"
    >
      {/* <span className="font-medium text-white font-[var(--font-display)] text-lg">Ishan Vepa</span> */}
    </img>
  );
};