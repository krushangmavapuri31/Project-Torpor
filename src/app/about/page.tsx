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
              // MISSION
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

      {/* Scientific Disciplines */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              // DISCIPLINES
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#050A30] mb-16">
              Scientific Domains
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disciplines.map((d, i) => (
              <FadeIn key={d.title} direction="up" delay={i * 0.1}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-[#050A30] mb-3">
                    {d.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
