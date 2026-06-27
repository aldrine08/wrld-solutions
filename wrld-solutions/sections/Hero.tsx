"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridBackground from "@/components/GridBackground";


export default function Hero() {
  const heroRef = useRef(null);

useEffect(() => {

  gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(heroRef.current, {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out",
  });
}, []);
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#081120] via-[#0b1730] to-[#081120] text-white flex items-center justify-center relative overflow-hidden">

      <GridBackground />

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-20 left-20"></div>

<div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl bottom-20 right-20"></div>

      <div
  ref={heroRef}
  className="max-w-4xl text-center px-6"
>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Transforming Organizations Through
          <span className="text-blue-500">
            {" "}Software, AI & Intelligent Automation
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          WRLD SOLUTIONS builds enterprise software,
          AI agents and workflow automation systems
          for modern organizations.
        </p>

        <div className="mt-8">
          <button
  className="
    bg-blue-600
    hover:bg-blue-500
    hover:scale-105
    px-8
    py-4
    rounded-xl
    font-semibold
    transition-all
    duration-300
    shadow-lg
    shadow-blue-500/20
  "
>
  Explore Solutions
</button>

<button
  className="
    border
    border-white/20
    hover:border-blue-400
    px-8
    py-4
    rounded-xl
    ml-4
    transition-all
  "
>
  Contact Us
</button>
        </div>
      </div>
    </section>
  );
}