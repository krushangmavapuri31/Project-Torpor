import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "TTM Members",
  description:
    "The Torpor Technology & Medicine team — researchers, engineers, and scientists advancing human hibernation.",
};

export default function TTMMembersPage() {
  return (
    <>
      <PageHero
        title="TTM MEMBERS"
        subtitle="The Torpor Technology & Medicine research collective driving every phase of the hibernation lifecycle."
        imageSrc="/images/hero_bg.png"
        labCode="TTM_CORE"
      />

      <section className="py-24 md:py-36 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} RESEARCH COLLECTIVE
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-snug tracking-tight text-[#050A30]">
              Multidisciplinary expertise across six research domains.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="mt-12">
            <div className="border-l-2 border-primary pl-6 py-2">
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Team Directory
              </p>
              <p className="text-base text-slate-600 mt-2 font-light leading-relaxed">
                Team member profiles, research specializations, and publication
                records are being compiled. The full TTM directory will be
                available following the next program review cycle.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
