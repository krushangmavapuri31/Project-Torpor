import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Shield,
  Microscope,
  Cpu,
  Users,
  ShieldCheck,
  Network,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Rocket,
  ArrowDown,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Team Information | Project Torpor",
  description:
    "Meet the multidisciplinary team driving Project Torpor's research into synthetic hibernation, neuroscience, aerospace medicine, biomedical engineering, and long-duration human spaceflight.",
};

interface TeamStructurePillar {
  title: string;
  description: string;
  icon: React.ElementType;
}

const teamStructure: TeamStructurePillar[] = [
  {
    title: "Leadership",
    description:
      "Responsible for project direction, research planning, collaborations, and long-term strategy.",
    icon: Shield,
  },
  {
    title: "Research Teams",
    description:
      "Focus on neuroscience, synthetic torpor, biomedical engineering, physiology, aerospace medicine, and experimental studies.",
    icon: Microscope,
  },
  {
    title: "Engineering",
    description:
      "Develop software platforms, AI systems, simulations, databases, web infrastructure, and technical tools supporting the project.",
    icon: Cpu,
  },
  {
    title: "Community & Operations",
    description:
      "Handles outreach, publications, conferences, partnerships, recruitment, documentation, and organizational coordination.",
    icon: Users,
  },
];

interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Research",
    description:
      "Grounding our work in foundational neuroscience, hypothalamic thermoregulation, and metabolic suppression pathways.",
  },
  {
    step: "02",
    title: "Simulation",
    description:
      "Developing high-fidelity computational models and physiological simulations to map metabolic state transitions.",
  },
  {
    step: "03",
    title: "Validation",
    description:
      "Conducting rigorous empirical testing and bio-compatibility validation to ensure cognitive and tissue safety.",
  },
  {
    step: "04",
    title: "Collaboration",
    description:
      "Building interdisciplinary networks across universities, medical institutes, and aerospace research entities.",
  },
  {
    step: "05",
    title: "Future Space Applications",
    description:
      "Integrating validated torpor protocols into next-generation life support systems for long-duration deep-space missions.",
  },
];

interface CoreValue {
  title: string;
  description: string;
  icon: React.ElementType;
}

const coreValues: CoreValue[] = [
  {
    title: "Scientific Integrity",
    description:
      "Uncompromising commitment to evidence-based research, peer review, and absolute data transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Interdisciplinary Collaboration",
    description:
      "Bridging the gaps between neuroscience, medicine, software engineering, and space operations.",
    icon: Network,
  },
  {
    title: "Innovation",
    description:
      "Pushing past existing medical paradigms to pioneer entirely new frameworks in metabolic suspension.",
    icon: Lightbulb,
  },
  {
    title: "Open Research",
    description:
      "Sharing findings, data models, and literature freely to accelerate global scientific advancement.",
    icon: BookOpen,
  },
  {
    title: "Continuous Learning",
    description:
      "Cultivating a dynamic environment of constant experimentation, education, and skill expansion.",
    icon: GraduationCap,
  },
  {
    title: "Future-Focused Exploration",
    description:
      "Designing technology not just for today's medicine, but for humanity's multi-planetary future.",
    icon: Rocket,
  },
];

export default function TeamInformationPage() {
  return (
    <>
      {/* PAGE HERO */}
      <PageHero
        title="TEAM INFORMATION"
        subtitle="Meet the multidisciplinary team driving Project Torpor's research into synthetic hibernation, neuroscience, aerospace medicine, biomedical engineering, and long-duration human spaceflight."
        imageSrc="/images/hero_bg.png"
        labCode="TEAM_01"
      />

      {/* SECTION 1 — ABOUT THE TEAM */}
      <section className="py-20 md:py-32 bg-[#F8FAFC] border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} ABOUT THE TEAM
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-snug tracking-tight text-[#050A30] mb-8">
              A multidisciplinary research initiative.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="space-y-6">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
              <p className="text-slate-900 font-normal text-lg md:text-xl leading-relaxed border-l-4 border-primary pl-5">
                Project Torpor is supported by a growing team of researchers,
                engineers, medical professionals, designers, students, and
                collaborators working together toward the future of synthetic
                hibernation.
              </p>
              <p>
                The project combines expertise from neuroscience, aerospace
                medicine, biomedical engineering, physiology, artificial
                intelligence, systems engineering, and scientific research to
                explore technologies that could enable safe long-duration space
                missions.
              </p>
              <p>
                Our objective is to build an open, collaborative research
                environment where innovation, experimentation, and
                interdisciplinary thinking drive every milestone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — OUR TEAM STRUCTURE */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <FadeIn direction="up">
              <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
                {"//"} ORGANIZATION
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#050A30]">
                Our Team Structure
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <p className="mt-4 text-slate-500 font-light text-base md:text-lg max-w-2xl">
                Structured into four foundational pillars of excellence to drive
                scientific discovery, technical innovation, and strategic execution.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {teamStructure.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} direction="up" delay={0.1 * (index + 1)}>
                  <div className="group relative p-8 md:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-500/40 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-[#050A30] mb-4 group-hover:text-primary transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span>PILLAR 0{index + 1}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        EXPLORE →
                      </span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR APPROACH */}
      <section className="py-20 md:py-32 bg-[#0B0B0B] text-white relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <FadeIn direction="up">
              <span className="font-mono text-xs tracking-widest text-[#6B8AFD] font-semibold uppercase block mb-4">
                {"//"} METHODOLOGY
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#F5F5F5]">
                Our Approach
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <p className="mt-4 text-[#A1A1AA] font-light text-base md:text-lg max-w-2xl">
                A rigorous, multi-stage pipeline advancing synthetic torpor from
                neurological principles to active spaceflight deployment.
              </p>
            </FadeIn>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 relative">
            {approachSteps.map((stepItem, index) => (
              <FadeIn key={stepItem.title} direction="up" delay={0.1 * (index + 1)}>
                <div className="group relative flex flex-col h-full bg-[#121212] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#6B8AFD] hover:bg-[#18181B] transition-all duration-300">
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#6B8AFD] bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/40">
                      STEP {stepItem.step}
                    </span>
                    {index < approachSteps.length - 1 && (
                      <span className="text-slate-600 group-hover:text-[#6B8AFD] font-mono text-sm transition-colors">
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-[#6B8AFD] transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed mt-auto">
                    {stepItem.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Mobile & Tablet Process Flow */}
          <div className="lg:hidden space-y-6 relative">
            {approachSteps.map((stepItem, index) => (
              <FadeIn key={stepItem.title} direction="up" delay={0.1 * (index + 1)}>
                <div className="relative bg-[#121212] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#6B8AFD] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-xs font-bold text-[#6B8AFD] bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/40">
                      STEP {stepItem.step}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {stepItem.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 font-light text-sm leading-relaxed">
                    {stepItem.description}
                  </p>
                  {index < approachSteps.length - 1 && (
                    <div className="flex justify-center my-3 text-[#6B8AFD]">
                      <ArrowDown className="w-5 h-5 animate-pulse" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CORE VALUES */}
      <section className="py-20 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 text-center md:text-left">
            <FadeIn direction="up">
              <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
                {"//"} GUIDING PRINCIPLES
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#050A30]">
                Core Values
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <p className="mt-4 text-slate-500 font-light text-base md:text-lg max-w-2xl">
                The fundamental principles driving our research standards, ethics,
                and interdisciplinary operations.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <FadeIn key={value.title} direction="up" delay={0.08 * (index + 1)}>
                  <div className="group p-8 rounded-3xl bg-white border border-slate-200/70 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-[#050A30] mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TEAM PHILOSOPHY */}
      <section className="relative py-24 md:py-36 bg-gradient-to-r from-[#050A30] via-[#0A164E] to-[#050A30] text-white overflow-hidden">
        {/* Background ambient radial light */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-[#60A5FA] font-semibold uppercase block mb-6">
              {"//"} TEAM PHILOSOPHY
            </span>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <blockquote className="font-heading text-2xl md:text-4xl font-light italic leading-snug text-slate-100 max-w-3xl mx-auto drop-shadow-sm">
              &ldquo;Advancing human spaceflight requires more than technology—it requires collaboration between science, engineering, medicine, and imagination.&rdquo;
            </blockquote>
          </FadeIn>

          <FadeIn direction="up" delay={0.35}>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto my-8 rounded-full" />
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Project Torpor Research Collective
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 — JOIN THE TEAM */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} OPEN POSITIONS
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#050A30] mb-6">
              Become Part of Project Torpor
            </h2>
            <p className="text-slate-600 font-light text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              We welcome students, researchers, engineers, designers, medical
              professionals, and collaborators who are passionate about shaping
              the future of human space exploration.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 group"
            >
              Join Project Torpor
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
