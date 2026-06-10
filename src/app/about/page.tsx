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

      {/* Scientific Disciplines — Editorial Layout */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Label + Heading */}
            <div className="lg:col-span-5">
              <FadeIn direction="up">
                <h3 className="font-mono text-sm tracking-widest text-blue-600 font-medium mb-3">
                  {"//"} DISCIPLINES
                </h3>
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#050A30] leading-tight">
                  Scientific Domains
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.15}>
                <p className="mt-6 text-slate-500 font-light text-base md:text-lg leading-relaxed">
                  Four core research pillars driving the science of human
                  hibernation — from neural circuitry to pharmacological
                  intervention.
                </p>
              </FadeIn>
            </div>

            {/* Right: Numbered vertical list */}
            <div className="lg:col-span-7">
              {disciplines.map((d, i) => (
                <FadeIn key={d.title} direction="up" delay={0.1 + i * 0.1}>
                  <div
                    className={`domain-item cursor-default py-7 ${
                      i < disciplines.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <div className="flex gap-5 items-start">
                      {/* Number */}
                      <span className="domain-number font-mono text-sm font-bold text-slate-300 mt-0.5 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="domain-title font-heading text-lg md:text-xl font-bold text-[#050A30] tracking-tight">
                          {d.title}
                        </h3>
                        <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed mt-2">
                          {d.description}
                        </p>
                        {/* Accent line — expands on hover */}
                        <div className="domain-accent-line mt-4" />
                      </div>
                    </div>
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
