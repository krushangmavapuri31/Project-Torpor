"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CandidateProfile() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F6F3] text-[#080D2D] selection:bg-[#1647FF] selection:text-white font-sans overflow-hidden">
      {/* Background container wrapper */}
      <div className="pt-32 md:pt-48 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">

        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-32 items-start mb-32 md:mb-48"
        >
          {/* Left: Text content */}
          <div className="flex-1 max-w-3xl pt-8 lg:pt-16">
            <motion.p variants={fadeInUp} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 mb-8 md:mb-12">
              PROJECT TORPOR / RESEARCH DIVISION
            </motion.p>

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#080D2D] mb-6 leading-[0.9]">
              ANTRIKSH<br />GUJARATI
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-light text-slate-600 mb-8">
              DIRECTOR OF RESEARCH
            </motion.p>

            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-medium leading-snug mb-8 text-[#080D2D] max-w-2xl">
              Pioneering Synthetic Torpor & Human Spaceflight Life Support Systems
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed font-light max-w-xl">
              Coordinating interdisciplinary research across aerospace, biomedical, and neurological domains to architect deep-space survival frameworks.
            </motion.p>
          </div>

          {/* Right: Portrait */}
          <motion.div variants={fadeInUp} className="w-full lg:w-[450px] xl:w-[500px] shrink-0">
            <div className="relative aspect-[3/4] w-full mb-5">
              {/* Subtle offset frame */}
              <div className="absolute inset-0 border border-[#080D2D]/15 translate-x-4 translate-y-4 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden bg-[#EAEBE8]">
                <Image
                  src="/images/Astronaut.png"
                  alt="Antriksh Gujarati"
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-500 flex flex-col gap-1 font-medium mt-6">
              <span>01 / CANDIDATE PORTRAIT</span>
              <span>PROJECT TORPOR — RESEARCH DIVISION</span>
            </div>
          </motion.div>
        </motion.section>

        {/* EDITORIAL INTRODUCTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-48 max-w-4xl"
        >
          <motion.p variants={fadeInUp} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 mb-8">
            01 / RESEARCH PROFILE
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-medium leading-tight text-[#080D2D] mb-10 tracking-tight">
            Pioneering Synthetic Torpor & Human Spaceflight Life Support Systems
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            As Director of Research, I lead the scientific vision, research strategy, and technological development of synthetic torpor systems designed to enable long-duration deep-space exploration. By bridging the gap between cutting-edge medical science and aerospace engineering, my work focuses on turning visionary hypometabolic concepts into mission-ready human spaceflight solutions.
          </motion.p>
        </motion.section>

        {/* PROFILE FACTS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-48 border-t border-[#080D2D]/10 pt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8">
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold">NAME</span>
              <span className="text-lg font-medium text-[#080D2D]">Antriksh Gujarati</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold">INSTITUTION</span>
              <span className="text-lg font-medium text-[#080D2D]">Nirma University</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold">ROLE</span>
              <span className="text-lg font-medium text-[#080D2D]">Director of Research</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold">PRIMARY FOCUS</span>
              <span className="text-lg font-medium text-[#080D2D]">Synthetic Torpor / TTM</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold">STATUS</span>
              <span className="text-lg font-medium text-[#080D2D]">Candidate — Active Qualification</span>
            </motion.div>
          </div>
        </motion.section>

        {/* LEADERSHIP DIRECTIVES */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-48"
        >
          <motion.p variants={fadeInUp} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 mb-16">
            02 / LEADERSHIP DIRECTIVES
          </motion.p>

          <div className="flex flex-col">
            {[
              {
                num: "01",
                title: "STRATEGIC RESEARCH VISION",
                desc: "Spearhead long-term scientific objectives and coordinate interdisciplinary teams across aerospace, biomedical, and neurological domains."
              },
              {
                num: "02",
                title: "TARGETED TEMPERATURE MANAGEMENT",
                desc: "Architect and refine core TTM methodologies to optimize human physiological suppression for deep-space missions."
              },
              {
                num: "03",
                title: "CROSS-DIVISIONAL INTEGRATION",
                desc: "Oversee experimental frameworks, supervise peer-reviewed publications, and translate laboratory breakthroughs into scalable aerospace hardware."
              }
            ].map((item, i) => (
              <motion.div
                key={item.num}
                variants={fadeInUp}
                className={`py-12 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 ${i !== 0 ? 'border-t border-[#080D2D]/10' : 'border-t border-[#080D2D]/10'} ${i === 2 ? 'border-b border-[#080D2D]/10' : ''}`}
              >
                <div className="text-4xl md:text-5xl font-light text-[#080D2D]/20 w-16 shrink-0">{item.num}</div>
                <div className="flex-1 max-w-3xl">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#080D2D] mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* RESEARCH DOMAINS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-48"
        >
          <motion.p variants={fadeInUp} className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-500 mb-16">
            03 / RESEARCH DOMAINS
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-[#080D2D] uppercase tracking-wider">Human Hypometabolism & Physiology</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Synthetic Torpor · Targeted Temperature Management (TTM) · Neuroscience · Hypometabolism · Thermoregulation · Aerospace Physiology
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-[#080D2D] uppercase tracking-wider">Biomedical Engineering & Cryobiology</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Metabolic Engineering · Cryobiology · Biomedical Systems · Space Medicine
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-[#080D2D] uppercase tracking-wider">Spaceflight Systems & Engineering</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Human Factors Engineering · Long-Duration Deep Space Technologies
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* SCIENTIFIC VISUAL */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-48 flex justify-center py-16"
        >
          <div className="flex flex-col items-center justify-center text-center max-w-md w-full">
            {[
              "Human Physiology",
              "Temperature Regulation",
              "Metabolic Suppression",
              "Synthetic Torpor",
              "Long-Duration Spaceflight"
            ].map((step, index, arr) => (
              <motion.div key={step} variants={fadeInUp} className="flex flex-col items-center w-full">
                <div className="py-4 px-8 border border-[#080D2D]/15 bg-transparent w-full">
                  <span className="text-sm md:text-base font-medium tracking-wide text-[#080D2D] uppercase">{step}</span>
                </div>
                {index !== arr.length - 1 && (
                  <div className="h-10 w-[1px] bg-[#1647FF]/40 my-2 relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 border-r border-b border-[#1647FF]/60" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FEATURE STATEMENT */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 md:mb-48 flex justify-center text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-[#080D2D] max-w-5xl tracking-tight">
            Turning visionary hypometabolic concepts into mission-ready human spaceflight systems.
          </motion.h2>
        </motion.section>

      </div>

      {/* FINAL CTA */}
      <section className="bg-[#080D2D] text-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">CONTRIBUTE TO THE RESEARCH</h2>
            <p className="text-lg text-white/70 font-light leading-relaxed">
              Project Torpor is building an interdisciplinary research community across aerospace engineering, biomedical science, neuroscience and human factors.
            </p>
          </div>

          <Link
            href="/join"
            className="group flex items-center justify-center gap-3 px-8 py-5 bg-[#F5F6F3] text-[#080D2D] text-[11px] uppercase tracking-[0.15em] font-bold transition-colors hover:bg-white shrink-0"
          >
            APPLY FOR INTEGRATION
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
