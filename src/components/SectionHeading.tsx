"use client";

import FadeIn from "./animations/FadeIn";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <FadeIn className={`mb-16 md:mb-24 ${className}`} direction="up" duration={0.8}>
      <div className="flex flex-col gap-4">
        {number && (
          <span className={`font-mono text-sm tracking-widest ${light ? "text-blue-400" : "text-blue-600"} font-medium`}>
            {"//"} SECTION {number}
          </span>
        )}
        <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${light ? "text-white" : "text-[#111111]"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`max-w-3xl text-lg md:text-xl font-light leading-relaxed mt-2 ${light ? "text-slate-300" : "text-slate-600"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
