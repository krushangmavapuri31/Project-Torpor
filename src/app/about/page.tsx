import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Project Torpor — our mission, objectives, and the scientific disciplines driving human hibernation technology.",
};

const disciplines = [
  {
    title: "Aerospace Medicine",
    description:
      "Adapting torpor protocols for the extreme conditions of spaceflight — microgravity, isolation, and cosmic radiation.",
  },
  {
    title: "Neurobiology",
    description:
      "Mapping the brain circuits that govern hibernation and ensuring complete cognitive preservation during metabolic suppression.",
  },
  {
    title: "Cellular Engineering",
    description:
      "Engineering metabolic transitions at the cellular level, ensuring tissue viability and preventing ischemic injury during torpor.",
  },
  {
    title: "Pharmacology",
    description:
      "Developing the drug cocktails that safely induce, maintain, and reverse the torpor state in human physiology.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT"
        subtitle="Redefining the boundaries of human physiology for long-duration deep space voyages."
        imageSrc="/images/hero_bg.png"
      />

      {/* Mission */}
      <section className="py-24 md:py-36 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} MISSION
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-snug tracking-tight text-[#050A30]">
              Project Torpor is a research initiative exploring synthetic
              torpor, human hibernation, and metabolic suppression for future
              medicine and deep-space exploration.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="mt-12">
            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Primary Objective
              </p>
              <p className="text-base text-slate-600 mt-2 font-light leading-relaxed">
                To induce a controlled, reversible metabolic state in human
                subjects, minimizing resources and protecting physiological
                systems during long-duration flight.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Scientific Disciplines — Timeline Layout */}
      <section className="py-24 md:py-36 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="mb-20 text-center md:text-left">
            <FadeIn direction="up">
              <h3 className="font-mono text-sm tracking-widest text-[#6B8AFD] font-medium mb-4 uppercase">
                Scientific Domains
              </h3>
              <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight max-w-2xl">
                Core Research Disciplines
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <p className="mt-6 text-[#A1A1AA] font-sans font-normal text-base md:text-lg leading-relaxed max-w-2xl">
                Four core research pillars driving the science of human
                hibernation — from neural circuitry to pharmacological
                intervention.
              </p>
            </FadeIn>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative mt-16 md:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
              {disciplines.map((d, i) => (
                <FadeIn key={d.title} direction="up" delay={0.1 + i * 0.1}>
                  <div className="group relative flex flex-col items-start cursor-default z-10 transition-transform duration-500 hover:-translate-y-1">
                    {/* Timeline Line extending to the right (except last item) */}
                    {i < disciplines.length - 1 && (
                      <div className="hidden md:block absolute top-[15px] left-[32px] w-full h-[1px] bg-[#2A2A2A] -z-10" />
                    )}

                    {/* Timeline Node (Circle) */}
                    <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#0B0B0B] border border-[#2A2A2A] text-[11px] font-mono font-medium text-[#A1A1AA] mb-6 group-hover:border-[#6B8AFD] group-hover:text-[#6B8AFD] transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <h3 className="font-sans text-lg md:text-xl font-bold text-[#F5F5F5] mb-3 transition-colors duration-300">
                      {d.title}
                    </h3>
                    <p className="font-sans text-[#A1A1AA] font-normal text-sm md:text-[15px] leading-relaxed md:pr-4 transition-colors duration-300">
                      {d.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
