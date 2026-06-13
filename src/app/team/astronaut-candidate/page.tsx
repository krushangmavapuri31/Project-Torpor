import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

          <FadeIn direction="up" delay={0.4} className="mt-16">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-slate-200/50 bg-white shadow-sm">
              <Image
                src="/Astronaut.png"
                alt="Astronaut Candidate Profile"
                fill
                className="object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <FadeIn direction="up">
            <p className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase mb-4">
              {"//"} Open Applications
            </p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-[#050A30] mb-4">
              Interested in contributing to Project Torpor?
            </h2>
            <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              We are looking for researchers, engineers, and scientists to join
              our mission.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-blue-700 transition-colors group"
            >
              Apply Now
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
