import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import TeamGrid from "@/components/TeamGrid";
import { teamMembers } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "TTM Members",
  description:
    "The Torpor Technology & Medicine team — researchers, engineers, and scientists advancing human hibernation.",
};

export default function TTMMembersPage() {
  const memberCount = teamMembers.length;

  return (
    <>
      <PageHero
        title="TTM MEMBERS"
        subtitle="The Torpor Technology & Medicine research collective driving every phase of the hibernation lifecycle."
        imageSrc="/images/hero_bg.png"
        labCode="TTM_CORE"
      />

      <section className="py-24 md:py-36 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Section header */}
          <FadeIn direction="up">
            <span className="font-mono text-m tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} MISSION CREW
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-snug tracking-tight text-[#050A30]">
              Global Research Team
            </h2>
            {/* Stats bar */}
            <div className="flex flex-wrap gap-6 mt-5 mb-4">
              <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                {memberCount} Members
              </span>
              <span className="font-mono text-xs text-slate-300">·</span>
              <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                Multiple Countries
              </span>
              <span className="font-mono text-xs text-slate-300">·</span>
              <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
                10 Research Domains
              </span>
            </div>
            <p className="text-base text-slate-500 font-light leading-relaxed max-w-2xl mt-2">
              Project Torpor brings together researchers, engineers, communicators,
              and advisors from diverse disciplines across the globe to advance
              synthetic torpor research and its applications in space medicine.
            </p>
          </FadeIn>

          {/* Team grid + filter + drawer — all managed client-side */}
          <div className="mt-14">
            <TeamGrid />
          </div>

        </div>
      </section>
    </>
  );
}
