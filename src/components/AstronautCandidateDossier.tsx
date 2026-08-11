"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";
import type { TeamMember } from "@/lib/team-data";

interface AstronautCandidateDossierProps {
  candidate: TeamMember;
}

export default function AstronautCandidateDossier({ candidate }: AstronautCandidateDossierProps) {
  // Candidate info rows using actual project data
  const infoRows = [
    {
      label: "NAME",
      value: candidate.name,
      code: "REC_01",
    },
    {
      label: "AFFILIATION / EDUCATION",
      value: candidate.education,
      code: "INST_ID",
    },
    {
      label: "PRIMARY ROLE",
      value: candidate.majorRole,
      code: "DIR_RES",
    },
    {
      label: "SPECIALIZATION",
      value: candidate.specialRole,
      code: "TTM_LEAD",
    },
    {
      label: "RESEARCH DOMAIN",
      value: candidate.domain,
      code: "DOM_SPEC",
    },
    {
      label: "PROGRAM STATUS",
      value: "Candidate Selected • Active Qualification Phase",
      code: "STAT_ACT",
    },
    {
      label: "DOSSIER IDENTIFIER",
      value: "CREW_01 // AT-RES-01",
      code: "DOS_REG",
    },
  ];

  // Parse research interests from candidate domain description
  const researchInterests = candidate.domainDescription
    .replace("Research interests include ", "")
    .replace(/\.$/, "")
    .split(/,\s*|\s+and\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  // Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemUpVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111111] pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-24 md:pb-36 overflow-hidden">
      {/* Background grid accent (subtle aerospace document guidelines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Subtle radial ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/4 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 w-full">
        {/* Dossier Technical Metadata Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 md:mb-12 border-b border-slate-200/80 font-mono text-[11px] uppercase tracking-widest text-slate-500"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-blue-600 font-bold">PROJECT TORPOR</span>
            <span className="text-slate-300">|</span>
            <span>FLIGHT CREW DOSSIER</span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-slate-400">REF: CREW_01</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] text-slate-400">
            <span>SEC_LEVEL: 01</span>
            <span className="text-slate-300">·</span>
            <span>QUALIFIED_PERSONNEL</span>
          </div>
        </motion.div>

        {/* 
          MAIN EDITORIAL COMPOSITION
          Matches the reference sketch:
          - Upper-left heading with arrow: → MY INFORMATION
          - Upper-right candidate photo in portrait frame
          - Minimal horizontal information rows under heading
        */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start"
        >
          {/* LEFT COLUMN: Heading + Information Rows */}
          <div className="lg:col-span-7 flex flex-col justify-start min-w-0">
            {/* Heading Block */}
            <motion.div variants={itemUpVariants} className="mb-8 lg:mb-12">
              <div className="flex items-center gap-2.5 sm:gap-4 group flex-wrap">
                <span className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light select-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#050A30] tracking-tight uppercase leading-none">
                  MY INFORMATION
                </h1>
              </div>
              <p className="mt-3 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-slate-500 uppercase">
                PERSONNEL FILE // CANDIDATE 01 — {candidate.name.toUpperCase()}
              </p>
            </motion.div>

            {/* MOBILE ONLY PHOTO PLACEMENT (Mobile vertical stack structure) */}
            <div className="block lg:hidden mb-10">
              <motion.div variants={photoVariants} className="w-full max-w-sm mx-auto">
                <div className="relative aspect-[3/4] w-full bg-slate-900 border border-slate-300/80 rounded-xs shadow-lg overflow-hidden group">
                  {/* Technical reticles */}
                  <div className="absolute top-2 left-2 z-20 w-2.5 h-2.5 border-t border-l border-white/70 pointer-events-none" />
                  <div className="absolute top-2 right-2 z-20 w-2.5 h-2.5 border-t border-r border-white/70 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 z-20 w-2.5 h-2.5 border-b border-l border-white/70 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 z-20 w-2.5 h-2.5 border-b border-r border-white/70 pointer-events-none" />

                  <Image
                    src={candidate.image}
                    alt={`${candidate.name} - Astronaut Candidate`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-[center_18%] scale-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-4 z-20 font-mono text-[9px] tracking-widest text-white/90 uppercase bg-[#050A30]/80 backdrop-blur-sm px-2 py-0.5 rounded-xs border border-white/10">
                    CREW_01 // PORTRAIT
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-center text-white/90 font-mono text-[9px] tracking-widest uppercase bg-[#050A30]/85 backdrop-blur-sm px-3 py-1 rounded-xs border border-white/10">
                    <span>{candidate.name.toUpperCase()}</span>
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* HORIZONTAL INFORMATION ROWS */}
            <div className="w-full flex flex-col space-y-0">
              {infoRows.map((row, idx) => (
                <motion.div
                  key={row.label}
                  variants={itemUpVariants}
                  className="group relative py-5 sm:py-6 transition-colors duration-300 hover:bg-white/50 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                    {/* Label */}
                    <div className="sm:col-span-4 flex items-center justify-between sm:justify-start gap-2">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-blue-600 font-semibold group-hover:text-primary transition-colors">
                        {row.label}
                      </span>
                      <span className="font-mono text-[10px] text-slate-300 group-hover:text-slate-400 sm:hidden">
                        [{row.code}]
                      </span>
                    </div>

                    {/* Value */}
                    <div className="sm:col-span-8 flex items-baseline justify-between gap-4">
                      <span className="font-sans text-base sm:text-lg lg:text-xl font-medium text-[#050A30] tracking-tight group-hover:text-primary transition-colors leading-snug">
                        {row.value}
                      </span>
                      <span className="hidden sm:inline font-mono text-[10px] text-slate-300 group-hover:text-slate-400 flex-shrink-0">
                        [{row.code}]
                      </span>
                    </div>
                  </div>

                  {/* Thin Separator Line with Reveal Animation */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 + idx * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-200/90 group-hover:bg-blue-400/60 transition-colors origin-left"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* DESKTOP RIGHT COLUMN: Candidate Photograph Frame */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 lg:sticky lg:top-36">
            <motion.div variants={photoVariants} className="w-full">
              <div className="relative aspect-[3/4] w-full max-w-[420px] ml-auto bg-slate-900 border border-slate-300/80 rounded-xs shadow-[0_20px_60px_rgba(5,10,48,0.12)] overflow-hidden group">
                {/* Technical Corner Reticles */}
                <div className="absolute top-3 left-3 z-20 w-3 h-3 border-t-2 border-l-2 border-white/80 pointer-events-none" />
                <div className="absolute top-3 right-3 z-20 w-3 h-3 border-t-2 border-r-2 border-white/80 pointer-events-none" />
                <div className="absolute bottom-3 left-3 z-20 w-3 h-3 border-b-2 border-l-2 border-white/80 pointer-events-none" />
                <div className="absolute bottom-3 right-3 z-20 w-3 h-3 border-b-2 border-r-2 border-white/80 pointer-events-none" />

                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050A30]/30 via-transparent to-[#050A30]/80 z-10 pointer-events-none" />

                {/* Photograph */}
                <Image
                  src={candidate.image}
                  alt={`${candidate.name} - Astronaut Candidate`}
                  fill
                  priority
                  sizes="(max-width: 1200px) 40vw, 450px"
                  className="object-cover object-[center_18%] scale-[1.03] transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-5 z-20 font-mono text-[10px] tracking-widest text-white/90 uppercase bg-[#050A30]/80 backdrop-blur-md px-2.5 py-1 rounded-xs border border-white/15">
                  CREW_01 // CANDIDATE PORTRAIT
                </div>

                {/* Bottom Identification Tag */}
                <div className="absolute bottom-4 left-5 right-5 z-20 flex justify-between items-center text-white/90 font-mono text-[10px] tracking-widest uppercase bg-[#050A30]/85 backdrop-blur-md px-3.5 py-2 rounded-xs border border-white/15">
                  <div>
                    <span className="block text-white font-bold text-[11px]">{candidate.name.toUpperCase()}</span>
                    <span className="text-slate-400 text-[9px]">{candidate.education}</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-xs border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    QUALIFIED
                  </span>
                </div>
              </div>

              {/* Technical Caption */}
              <div className="max-w-[420px] ml-auto mt-4 px-1 flex justify-between items-center text-slate-400 font-mono text-[10px] uppercase tracking-widest">
                <span>FIG 1.0 — FLIGHT SUIT INTEGRATION</span>
                <span>PROJECT TORPOR</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 
          EXTENDED DOSSIER SECTIONS
          Preserves and elevates all existing candidate data naturally
        */}
        <div className="mt-24 md:mt-36 pt-16 border-t border-slate-200/90">
          <div className="mb-12">
            <span className="font-mono text-xs tracking-[0.2em] text-blue-600 font-semibold uppercase block mb-3">
              {"//"} DETAILED DOSSIER & RESPONSIBILITIES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#050A30] tracking-tight uppercase">
              Scientific Vision & Flight Protocols
            </h2>
          </div>

          {/* TWO-COLUMN SCOPE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Major Role */}
            <div className="bg-white border border-slate-200/80 p-8 md:p-10 rounded-xs shadow-sm hover:border-slate-300 transition-colors relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-transparent" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600 font-bold block mb-2">
                SECTION 01 // SCIENTIFIC STRATEGY
              </span>
              <h3 className="font-heading text-xl font-bold text-[#050A30] mb-4">
                {candidate.majorRole}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-base">
                {candidate.majorDescription}
              </p>
            </div>

            {/* Special Role */}
            <div className="bg-white border border-slate-200/80 p-8 md:p-10 rounded-xs shadow-sm hover:border-slate-300 transition-colors relative group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600 font-bold block mb-2">
                SECTION 02 // METHODOLOGY LEADERSHIP
              </span>
              <h3 className="font-heading text-xl font-bold text-[#050A30] mb-4">
                {candidate.specialRole}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed text-base">
                {candidate.specialDescription}
              </p>
            </div>
          </div>

          {/* RESEARCH INTERESTS / SPECIALIZATION MATRIX */}
          <div className="mt-16 bg-white border border-slate-200/80 p-8 md:p-12 rounded-xs shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-5 h-5 text-blue-600" />
              <h3 className="font-heading text-lg font-bold text-[#050A30] uppercase tracking-wider">
                Interdisciplinary Research Fields & Focus Areas
              </h3>
            </div>

            <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
              Research focus spans synthetic hypometabolism, hypothermia control, space medicine, and deep-space crew survival technologies.
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="font-mono text-xs px-3.5 py-2 rounded-xs bg-slate-50 border border-slate-200 text-slate-700 font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500" />
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* PROGRAM STATUS NOTICE */}
          <div className="mt-12 border-l-2 border-primary pl-6 py-3 bg-blue-50/40 rounded-r-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-700 font-semibold block mb-1">
              OPERATIONAL STATUS NOTICE
            </span>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Astronaut candidate profiles and qualification criteria undergo continuous review by Project Torpor&apos;s biological safety committee. Operational flight rosters will be published following final terrestrial chamber qualification trials.
            </p>
          </div>
        </div>

        {/* JOIN TORPOR APPLICATION CTA */}
        <div className="mt-24 md:mt-32 bg-[#050A30] text-white p-8 sm:p-12 md:p-16 rounded-xs relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] text-blue-400 font-semibold uppercase block mb-4">
              {"//"} JOIN THE MISSION
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase mb-4 text-white">
              Interested in contributing to Project Torpor?
            </h2>
            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed mb-8">
              We are looking for researchers, engineers, and scientists to join our mission advancing synthetic human hibernation.
            </p>

            <Link
              href="/join"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-[0.18em] font-semibold rounded-xs transition-colors duration-300 group shadow-lg shadow-primary/25"
            >
              Apply For Integration
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
