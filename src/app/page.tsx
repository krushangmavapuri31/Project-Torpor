import HeroSection from "@/components/sections/HeroSection";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const previews = [
  {
    number: "01",
    title: "ABOUT",
    description:
      "Project Torpor is a research initiative exploring synthetic torpor, human hibernation, and metabolic suppression for future medicine and deep-space exploration.",
    href: "/about",
    cta: "Read more",
  },
  {
    number: "02",
    title: "SYNTHETIC TORPOR",
    description:
      "Safely suppressing human metabolism to biological minimums through targeted hypothalamic intervention — the key to unlocking interstellar travel.",
    href: "/synthetic-torpor",
    cta: "Explore the science",
  },
  {
    number: "03",
    title: "OUR WORK",
    description:
      "Six dedicated research domains spanning spaceflight integration, neural mapping, metabolic engineering, radiation defense, hardware prototyping, and open publication.",
    href: "/work",
    cta: "Enter research directory",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Preview Sections */}
      {previews.map((preview, idx) => (
        <section
          key={preview.title}
          className={`py-16 md:py-24 lg:py-36 ${
            idx % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white"
          } relative overflow-hidden`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
              {/* Left: Section heading */}
              <div className="lg:col-span-7">
                <FadeIn direction="up" delay={0.1}>
                  <h2 className="section-heading-xl text-[#050A30] uppercase">
                    {preview.title}
                  </h2>
                </FadeIn>
              </div>

              {/* Right: Description + CTA */}
              <div className="lg:col-span-5 flex flex-col justify-end gap-6">
                <FadeIn direction="up" delay={0.3}>
                  <p className="text-slate-600 font-light text-lg md:text-xl leading-relaxed">
                    {preview.description}
                  </p>
                </FadeIn>
                <FadeIn direction="up" delay={0.4}>
                  <Link
                    href={preview.href}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-blue-700 transition-colors group"
                  >
                    {preview.cta}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
