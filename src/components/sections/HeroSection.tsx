"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import FadeIn from "../animations/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050A30] pt-16">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 flex flex-col justify-between h-[85vh]">
        {/* Top telemetry */}
        <div className="flex justify-between items-center text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em]">
          <FadeIn direction="none" delay={0.2}>
            <span>SYS STATUS: [METABOLIC_SUPPRESSION_READY]</span>
          </FadeIn>
          <FadeIn direction="none" delay={0.3}>
            <span className="hidden md:inline">COORDS: 51.5074° N, 0.1278° W // ORBIT</span>
          </FadeIn>
        </div>

        {/* Hero headline — oversized stacked */}
        <div className="my-auto max-w-6xl">
          <FadeIn direction="up" delay={0.3} duration={1}>
            <span className="font-mono text-xs font-semibold tracking-[0.4em] text-accent-glow uppercase block mb-8">
              NASA INTEGRATED BIOMEDICAL PROGRAM
            </span>
          </FadeIn>

          <h1 className="hero-headline text-white uppercase">
            <span className="block">HUMAN TORPOR</span>
            <span className="block">FOR THE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-glow to-blue-400 py-1">
              NEXT FRONTIER
            </span>
          </h1>

          <FadeIn direction="up" delay={0.6} duration={1}>
            <p
              style={{ color: '#050A30' }}
              className="text-lg md:text-2xl font-normal leading-relaxed max-w-4xl mt-10"
            >
              Exploring synthetic torpor, metabolic suppression, and human
              hibernation technologies for future medicine and deep-space exploration.

            </p>
          </FadeIn>

          <FadeIn
            direction="up"
            delay={0.8}
            duration={1}
            className="mt-10 flex gap-6 flex-wrap"
          >
            <Link
              href="/about"
              className="bg-primary text-white font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(0,0,255,0.3)] hover:shadow-[0_0_30px_rgba(96,165,250,0.5)]"
            >
              Initialize Deep Dive
            </Link>
            <Link
              href="/work"
              style={{ borderColor: 'rgba(5, 10, 48, 0.3)', color: '#050A30' }}
              className="border font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#050A30]/5 hover:border-[#050A30] transition-all backdrop-blur-sm"
            >
              Research Directory
            </Link>
          </FadeIn>
        </div>

        {/* Bottom indicator */}
        <div className="flex justify-between items-end">
          <FadeIn direction="none" delay={1} className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
              TORPOR_V2.99
            </span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          </FadeIn>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80">
              Scroll to explore
            </span>
            <ArrowDown className="w-4 h-4 text-accent-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
