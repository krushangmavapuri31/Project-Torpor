import type { Metadata } from "next";
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
            idx % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="max-w-4xl">
              <FadeIn direction="up">
                <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
                  // {section.heading.toUpperCase()}
                </span>
                <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-[#050A30] mb-8">
                  {section.heading}
                </h2>
              </FadeIn>
              <FadeIn direction="up" delay={0.15}>
                <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
                  {section.body}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* Key Focus Areas */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn direction="up">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              // KEY FOCUS AREAS
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-[#050A30] mb-16">
              Research Focus
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {domain.features.map((feat, i) => (
              <FadeIn key={feat.title} direction="up" delay={i * 0.1}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 h-full">
                  <h3 className="font-heading text-lg font-bold text-[#050A30] mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Future Direction */}
      <section className="py-24 md:py-32 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
                // FUTURE DIRECTION
              </span>
              <h2 className="font-heading text-2xl md:text-4xl font-bold tracking-tight text-[#050A30] mb-8">
                What Comes Next
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed">
                {domain.futureDirection}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
