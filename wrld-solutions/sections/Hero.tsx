

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridBackground from "@/components/GridBackground";

import MouseGlow from "@/components/MouseGlow";


export default function Hero() {
  const heroRef = useRef(null);
  const badgesRef = useRef(null);



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(badgesRef.current, {
  opacity: 0,
  y: 40,
  duration: 1.5,
  delay: 0.8,
});

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
      <MouseGlow />

      <div ref={badgesRef}> </div>

      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl top-20 left-20"></div>

<div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl bottom-20 right-20"></div>

      <div
  ref={heroRef}
  className="max-w-7xl mx-auto text-center px-6 relative z-10"
>

  <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-medium">
    SOFTWARE • AI • AUTOMATION
  </p>

  <h1 className="mt-6 text-6xl md:text-8xl font-bold leading-tight">

    Transforming Organizations Through

    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
      Software, AI & Intelligent Automation
    </span>

  </h1>

  <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
    WRLD SOLUTIONS designs enterprise software,
    AI agents, workflow automation systems,
    cloud infrastructure and digital transformation
    solutions for modern organizations.
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-10">

    <button
      className="
      bg-blue-600
      hover:bg-blue-500
      px-8
      py-4
      rounded-xl
      font-semibold
      shadow-lg
      shadow-blue-500/30
      transition-all
      hover:scale-105
      "
    >
      Explore Solutions
    </button>

    <button
      className="
      bg-white/5
      backdrop-blur-lg
      border
      border-white/10
      hover:border-blue-500
      px-8
      py-4
      rounded-xl
      text-white
      transition-all
      "
    >
      Contact Us
    </button>

  </div>

  <div
    ref={badgesRef}
    className="
    mt-16
    flex
    flex-wrap
    justify-center
    gap-4
    "
  >

    {[
      "AI Agents",
      "ERP Systems",
      "Workflow Automation",
      "Mobile Apps",
      "Cybersecurity",
      "Cloud Infrastructure",
    ].map((item) => (
      <span
        key={item}
        className="
        px-5
        py-3
        rounded-full
        bg-white/5
        backdrop-blur-lg
        border
        border-white/10
        text-slate-300
        hover:border-blue-500
        transition
        "
      >
        {item}
      </span>
    ))}

  </div>

</div>




      <div
  className="
  absolute
  bottom-0
  left-0
  w-full
  h-24
  bg-gradient-to-b
  from-transparent
  to-white
"
/>

    </section>
  );
}