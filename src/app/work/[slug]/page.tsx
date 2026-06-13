import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkDomain, getAllWorkSlugs } from "@/lib/work-data";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/animations/FadeIn";

// Generate all 6 child pages statically
export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

// Dynamic metadata per child page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domain = getWorkDomain(slug);
  if (!domain) return { title: "Not Found" };
  return {
    title: `${domain.title} — Our Work`,
    description: domain.heroDescription,
  };
}

export default async function WorkChildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const domain = getWorkDomain(slug);

  if (!domain) notFound();

  return (
    <>
      <PageHero
        title={domain.title}
        subtitle={domain.heroDescription}
        backLink={{ href: "/work", label: "Back to Research Directory" }}
        imageSrc="/images/research_abstract.png"
        labCode={domain.labCode}
      />

      {/* Research Sections */}
      {domain.sections.map((section, idx) => (
        <section
          key={section.heading}
          className={`py-24 md:py-32 ${
            idx % 2 === 0 ? "bg-[#050A30]" : "bg-[#080E38]"
          }`}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
            <div className="max-w-4xl">
              <FadeIn direction="up">
                <span className="font-mono text-xs tracking-widest text-blue-400 font-semibold uppercase block mb-4">
                  {"//"}{"  "}{section.heading.toUpperCase()}
                </span>
                <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-white mb-8">
                  {section.heading}
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.15}>
                <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
                  {section.body}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Neural Systems Lab — Laboratory Visualisation */}
      {slug === "neural-systems-lab" && (
        <section className="py-20 bg-[#050A30]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FadeIn direction="up" delay={0.1}>
              <span className="font-mono text-xs tracking-widest text-blue-400 font-semibold uppercase block mb-6">
                {"// LABORATORY VISUALIZATION"}
              </span>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(96,165,250,0.08)]">
                <Image
                  src="/Neural_Systems_Laboratory_image.png"
                  alt="Neural Systems Laboratory — brain circuit mapping and torpor induction research facility"
                  width={1400}
                  height={800}
                  className="w-full object-cover"
                  priority={false}
                />
                {/* Gradient blend into next dark section */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#050A30] to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Key Focus Areas */}
      <section className="py-24 md:py-32 bg-[#050A30]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <h3 className="font-mono text-sm tracking-widest text-blue-400 font-medium mb-4 uppercase">
              {"//"} Key Focus Areas
            </h3>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Research Focus
            </h2>
          </FadeIn>

          <div className="flex flex-col border-t border-white/10 mt-16">
            {domain.features.map((feat, i) => (
              <FadeIn key={feat.title} direction="up" delay={i * 0.05}>
                <div className="group relative py-8 md:py-10 border-b border-white/10 cursor-default">
                  
                  {/* Hover Accent Line expansion */}
                  <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-500/60 group-hover:w-full transition-all duration-700 ease-out z-10" />

                  {/* Content Container with slight text shift */}
                  <div className="flex flex-col gap-2 md:gap-3 group-hover:translate-x-4 transition-transform duration-500 ease-out">
                    
                    {/* Number & Title */}
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm font-semibold text-slate-500 group-hover:text-blue-400 transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/20 text-sm font-light">|</span>
                      <h3 className="font-sans text-xl md:text-2xl font-bold text-slate-100 group-hover:text-white transition-colors duration-500 tracking-tight">
                        {feat.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="font-sans text-slate-400 font-normal text-sm md:text-base leading-relaxed max-w-3xl md:pl-[3.5rem]">
                      {feat.description}
                    </p>

                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Future Direction */}
      <section className="py-24 md:py-32 bg-[#080E38]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <h3 className="font-mono text-xs tracking-widest text-blue-400 font-medium mb-3">
                {"// FUTURE DIRECTION"}
              </h3>
              <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-white mb-8">
                What Comes Next
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              {/* Left blue accent border */}
              <div className="border-l-2 border-blue-500/40 pl-8">
                <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
                  {domain.futureDirection}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom telemetry bar */}
      <div className="bg-[#050A30] border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em]">
            <span>{domain.labCode}</span>
            <span>•</span>
            <span>{domain.subtitle}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              STATUS: ACTIVE
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
