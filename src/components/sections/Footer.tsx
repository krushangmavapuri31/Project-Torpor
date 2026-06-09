"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="glass-footer relative overflow-hidden py-16 px-6 md:px-12 bg-[#050A30] border-t border-white/5">
      {/* Top accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-glow/50 to-transparent shadow-[0_0_15px_#60A5FA]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Link href="/" className="font-heading text-lg font-bold tracking-[0.2em] text-white hover:opacity-80 transition-opacity">
            PROJECT <span className="text-accent-glow">TORPOR</span>
          </Link>
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            Future-space human biological preservation initiative.
          </p>
        </div>

        {/* Center: Nav links */}
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-mono text-slate-400 uppercase tracking-[0.15em]">
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <span>•</span>
          <Link href="/synthetic-torpor" className="hover:text-white transition-colors">Synthetic Torpor</Link>
          <span>•</span>
          <Link href="/work" className="hover:text-white transition-colors">Our Work</Link>
        </div>

        {/* Right: Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 text-[10px] font-mono text-slate-400">
          <p>© {new Date().getFullYear()} PROJECT TORPOR. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">SYSTEM SCHEMA</span>
            <span>/</span>
            <span className="hover:text-white cursor-pointer transition-colors">SECURITY ACCESS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
