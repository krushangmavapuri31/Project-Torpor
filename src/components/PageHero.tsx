"use client";

import FadeIn from "./animations/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backLink?: { href: string; label: string };
  imageSrc?: string;
  labCode?: string;
}

export default function PageHero({
  title,
  subtitle,
  backLink,
  imageSrc,
  labCode,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] w-full flex items-end overflow-hidden bg-[#050A30] pt-32 md:pt-40 pb-16 md:pb-24">
      {/* Background Image */}
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 mix-blend-luminosity scale-105"
          />
        </div>
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050A30] via-[#050A30]/80 to-[#050A30]/60 z-[1]" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-primary/8 rounded-full blur-[100px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Back link */}
        {backLink && (
          <FadeIn direction="none" delay={0.1} className="mb-8">
            <Link
              href={backLink.href}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {backLink.label}
            </Link>
          </FadeIn>
        )}

        {/* Lab code */}
        {labCode && (
          <FadeIn direction="none" delay={0.15} className="mb-4">
            <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
              {"//"} {labCode}
            </span>
          </FadeIn>
        )}

        {/* Title */}
        <FadeIn direction="up" delay={0.2} duration={1}>
          <h1 className="section-heading-xl text-white uppercase">{title}</h1>
        </FadeIn>

        {/* Subtitle */}
        {subtitle && (
          <FadeIn direction="up" delay={0.4} duration={1}>
            <p className="mt-6 text-lg md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
