"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050A30] pt-24 md:pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="Deep space nebula and hibernation chamber silhouette"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50 mix-blend-lighten scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#050A30]/80 to-[#050A30]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-primary/20 to-accent-glow/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-6 md:pt-8 flex flex-col justify-between h-[85vh]">
        {/* Empty spacer to keep flex layout balanced */}
        <div />

        {/* Hero headline — oversized stacked */}
        <div className="my-auto max-w-6xl">
          <h1 className="hero-headline text-white uppercase">
            <span className="block">HUMAN TORPOR</span>
            <span className="block">FOR THE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-glow to-blue-400 py-1">
              NEXT FRONTIER
            </span>
          </h1>

          <FadeIn direction="up" delay={0.3} duration={1}>
            <p
              className="text-black-400 text-lg md:text-2xl font-light leading-relaxed max-w-4xl mt-10"
            >
              Exploring synthetic torpor, metabolic suppression, and human
              hibernation technologies for future medicine and deep-space exploration.
            </p>
          </FadeIn>


        </div>

        {/* Bottom indicator */}
        <div className="flex justify-between items-end">
          <FadeIn direction="none" delay={1} className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              {/* Remove this (TORPOR_V2.99 and green dot) */}
            </span>
            {/* <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> */}
          </FadeIn>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80">
              {/* Remove this (Scroll to explore and arrow) */}
            </span>
            {/* {<ArrowDown className="w-4 h-4 text-accent-glow" />} */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
