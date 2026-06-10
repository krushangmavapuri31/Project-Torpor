import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxImage from "@/components/animations/ParallaxImage";
import MechanicsTimeline from "@/components/sections/MechanicsTimeline";

export const metadata: Metadata = {
  title: "Synthetic Torpor",
  description:
    "Discover synthetic torpor technology — safe, reversible metabolic suppression through targeted hypothalamic intervention for medicine and spaceflight.",
};

export default function SyntheticTorporPage() {
  return (
    <>
      <PageHero
        title="SYNTHETIC TORPOR"
        subtitle="Safely suppressing human metabolism to biological minimums through targeted hypothalamic intervention."
        imageSrc="/images/synthetic_torpor.png"
      />

      {/* What Is Synthetic Torpor */}
      <section className="py-24 md:py-36 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <FadeIn direction="left" duration={1}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-100">
                  <ParallaxImage
                    src="/images/synthetic_torpor.png"
                    alt="Cryo-hibernation laboratory"
                    containerClassName="w-full h-full min-h-[350px] md:min-h-[450px]"
                  />
                  <div className="absolute bottom-6 left-6 right-6 glass-card py-4 px-6 rounded-xl border border-white/20 flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">SESSION RECORD</span>
                      <span className="font-heading text-sm font-semibold text-[#050A30]">THERMAL_DRIFT_SUPPRESSION</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-primary">0.035 Hz</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-6">
              <FadeIn direction="up">
                <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
                  {"//"} WHAT IS SYNTHETIC TORPOR
                </span>
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#050A30] mb-8">
                  Not Hypothermia. Not Cryogenics. Something New.
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
                <p>
                  Unlike therapeutic hypothermia, which simply chills the body to
                  slow damage, synthetic torpor acts directly on the brain&apos;s
                  thermoregulatory core in the hypothalamus.
                </p>
                <p>
                  By delivering specific pharmacocutaneous agonists, we
                  down-regulate the body&apos;s set-point temperature, mimicking the
                  natural signals of mammalian hibernation. This allows for safe,
                  controlled, and fully reversible suppression of vital functions.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Metabolic Suppression — Process Timeline */}
      <MechanicsTimeline />
    </>
  );
}
