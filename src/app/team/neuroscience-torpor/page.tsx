import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Team Neuroscience for Torpor",
  description:
    "A multidisciplinary neuroscience team focused on understanding neural regulation, brain-state transitions, and recovery mechanisms related to torpor induction.",
};

export default function NeuroscienceTorporPage() {
  return (
    <>
      <PageHero
        title="TEAM NEUROSCIENCE FOR TORPOR"
        subtitle="A multidisciplinary neuroscience team focused on understanding neural regulation, brain-state transitions, and recovery mechanisms related to torpor induction."
        imageSrc="/images/hero_bg.png"
        labCode="NEURO_DIV"
      />

      <section className="py-24 md:py-36 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section header */}
          <FadeIn direction="up">
            <span className="font-mono text-m tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} NEUROSCIENCE DIVISION
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-snug tracking-tight text-[#050A30]">
              Team Neuroscience for Torpor
            </h2>
            {/* Stats bar */}
            <div className="flex flex-wrap gap-6 mt-5 mb-4">
              <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                Global Researchers
              </span>
              <span className="font-mono text-xs text-slate-300">·</span>
              <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                Multiple Countries
              </span>
              <span className="font-mono text-xs text-slate-300">·</span>
              <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                Neural Research Domains
              </span>
            </div>
            <p className="text-base text-slate-500 font-light leading-relaxed max-w-2xl mt-2">
              A multidisciplinary neuroscience team focused on understanding neural regulation,
              brain-state transitions, and recovery mechanisms related to torpor induction.
            </p>
          </FadeIn>

          {/* Content sections */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full transition-transform hover:-translate-y-1 duration-300">
                <h3 className="font-heading text-xl font-bold text-[#050A30] mb-3">
                  Neural State Regulation
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Researching how brain activity changes during hypometabolic states.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full transition-transform hover:-translate-y-1 duration-300">
                <h3 className="font-heading text-xl font-bold text-[#050A30] mb-3">
                  Torpor Recovery Mechanisms
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Studying safe neural reactivation and post-torpor recovery.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] h-full transition-transform hover:-translate-y-1 duration-300">
                <h3 className="font-heading text-xl font-bold text-[#050A30] mb-3">
                  Cognitive Preservation
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Exploring preservation of memory and cognition during prolonged torpor.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
