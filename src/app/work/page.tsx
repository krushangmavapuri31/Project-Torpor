"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { workDomains } from "@/lib/work-data";
import FadeIn from "@/components/animations/FadeIn";

// Asymmetric positioning for each domain — intentionally staggered
const positions = [
  "self-start ml-0 md:ml-4",           // PROJECT ATLAS — left
  "self-end mr-0 md:mr-12",            // NEURAL SYSTEMS LAB — right
  "self-center",                        // METABOLIC ENGINEERING — center
  "self-start ml-0 md:ml-16",          // RADIATION RESILIENCE — left offset
  "self-end mr-0 md:mr-4",             // TORPOR SYSTEMS — right
  "self-center md:self-end mr-0 md:mr-20", // RESEARCH ARCHIVE — center-right
];

export default function WorkPage() {
  return (
    <>
      {/* Dark full-screen hero with artistic text */}
      <section className="relative min-h-screen w-full bg-[#050A30] pt-24 pb-12 flex flex-col justify-center overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-accent-glow/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Section label */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-16">
          <FadeIn direction="up" delay={0.1}>
            <span className="font-mono text-xs font-semibold tracking-[0.4em] text-accent-glow uppercase">
              // RESEARCH DIRECTORY
            </span>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-slate-400 font-light text-lg mt-4 max-w-xl">
              Six dedicated research domains exploring every phase of the
              hibernation lifecycle — from neural mapping to flight-grade
              hardware.
            </p>
          </FadeIn>
        </div>

        {/* Artistic asymmetric text layout */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col gap-4 md:gap-6">
          {workDomains.map((domain, idx) => (
            <motion.div
              key={domain.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: idx * 0.1,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`flex flex-col ${positions[idx]}`}
            >
              <Link
                href={`/work/${domain.slug}`}
                className="group flex flex-col gap-1"
              >
                {/* Lab code */}
                <span className="font-mono text-[10px] tracking-[0.25em] text-slate-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {domain.labCode} — {domain.subtitle}
                </span>

                {/* Domain name — oversized text */}
                <span className="work-item-text text-white/85 group-hover:text-accent-glow inline-block cursor-pointer">
                  {domain.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom telemetry */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-20">
          <FadeIn direction="none" delay={0.6}>
            <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em]">
              <span>6 ACTIVE DOMAINS</span>
              <span>•</span>
              <span>OPEN ACCESS</span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                STATUS: NOMINAL
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
