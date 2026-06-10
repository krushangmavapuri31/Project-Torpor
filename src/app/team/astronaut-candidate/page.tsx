import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Astronaut Candidate",
  description:
    "Meet the astronaut candidates selected for Project Torpor's human hibernation research program.",
};

export default function AstronautCandidatePage() {
  return (
    <>
      <PageHero
        title="ASTRONAUT CANDIDATE"
        subtitle="Personnel selected for integration with Project Torpor's synthetic hibernation flight protocols."
        imageSrc="/images/hero_bg.png"
        labCode="CREW_01"
      />

      <section className="py-24 md:py-36 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} CANDIDATE PROFILE
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-snug tracking-tight text-[#050A30]">
              Crew selection and qualification for deep-space torpor missions.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="mt-12">
            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Program Status
              </p>
              <p className="text-base text-slate-600 mt-2 font-light leading-relaxed">
                Candidate profiles and selection criteria are currently under
                review. Full team rosters and biographies will be published upon
                completion of the qualification phase.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
