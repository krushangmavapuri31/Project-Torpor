"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { workDomains } from "@/lib/work-data";
import FadeIn from "@/components/animations/FadeIn";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] pt-32 pb-32 font-sans text-[#F5F5F5]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-32 text-center md:text-left">
        <FadeIn direction="up">
          <h3 className="font-mono text-sm tracking-widest text-[#6B8AFD] font-medium mb-4 uppercase">
            {"//"} Research Directory
          </h3>
          <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
            Our Work
          </h2>
        </FadeIn>
        <FadeIn direction="up" delay={0.15}>
          <p className="text-[#A1A1AA] font-normal text-lg mt-6 max-w-2xl leading-relaxed">
            Six dedicated research domains exploring every phase of the
            hibernation lifecycle — from neural mapping to flight-grade
            hardware.
          </p>
        </FadeIn>
      </div>

      {/* Vertical Workflow Layout */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative">
        {/* Subtle Vertical Line */}
        <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-[1px] bg-[#2A2A2A] -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-16 md:gap-32 relative z-10 py-8">
          {workDomains.map((domain, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={domain.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full group ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Node (Number on the line - Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 items-center justify-center w-[48px] h-[48px] rounded-full bg-[#0B0B0B] border border-[#2A2A2A] text-lg font-mono font-medium text-[#A1A1AA] group-hover:border-[#6B8AFD] group-hover:text-[#6B8AFD] transition-colors duration-500 z-10 hidden md:flex">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Node (Mobile) */}
                <div className="flex md:hidden items-center justify-center w-[40px] h-[40px] rounded-full bg-[#0B0B0B] border border-[#2A2A2A] text-sm font-mono font-medium text-[#A1A1AA] group-hover:border-[#6B8AFD] group-hover:text-[#6B8AFD] transition-colors duration-500 z-10 absolute left-[4px] top-[4px]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Content Box */}
                <Link
                  href={`/work/${domain.slug}`}
                  className={`w-full md:w-[45%] pl-[64px] md:pl-0 ${
                    isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
                  }`}
                >
                  <div className="flex flex-col gap-4 group-hover:-translate-y-1 transition-transform duration-500 cursor-pointer">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#A1A1AA] uppercase group-hover:text-[#6B8AFD] transition-colors duration-300">
                      {domain.labCode}
                    </span>
                    <h3 className="font-sans text-2xl md:text-4xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors duration-300">
                      {domain.title}
                    </h3>
                    <p className="text-[#A1A1AA] font-normal text-base leading-relaxed mt-2 line-clamp-3 md:line-clamp-none">
                      {domain.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
