"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Synthetic Torpor", href: "/synthetic-torpor" },
  {
    name: "Our Work",
    href: "/work",
    children: [
      { name: "Project Atlas", href: "/work/project-atlas" },
      { name: "Neural Systems Lab", href: "/work/neural-systems-lab" },
      { name: "Metabolic Engineering", href: "/work/metabolic-engineering" },
      { name: "Radiation Resilience", href: "/work/radiation-resilience" },
      { name: "Torpor Systems", href: "/work/torpor-systems" },
      { name: "Research Archive", href: "/work/research-archive" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const pathname = usePathname();
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/45 border-b border-white/45 backdrop-blur-2xl saturate-[160%] shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3.5"
            : "bg-white/30 border-b border-white/20 backdrop-blur-xl saturate-[140%] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl font-bold tracking-[0.22em] text-[#050A30] hover:opacity-80 transition-opacity"
          >
            PROJECT <span className="text-primary">TORPOR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={item.children ? handleMegaEnter : undefined}
                onMouseLeave={item.children ? handleMegaLeave : undefined}
              >
                <Link
                  href={item.href}
                  className={`relative text-[13px] font-sans font-bold uppercase tracking-[0.15em] px-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1.5 border border-transparent ${
                    isActive(item.href)
                      ? "text-primary bg-primary/[0.06] border-primary/20 backdrop-blur-xs shadow-2xs"
                      : "text-slate-700 hover:text-primary hover:bg-white/40 hover:backdrop-blur-md hover:border-white/50 hover:shadow-xs"
                  }`}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px] rounded-2xl p-3 z-50 bg-white/50 border border-white/50 backdrop-blur-2xl saturate-[150%] shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                      >
                        {/* Arrow pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white/50 border-l border-t border-white/50" />

                        <div className="relative z-10 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`px-4 py-3 rounded-xl text-[12px] font-sans font-bold uppercase tracking-[0.12em] transition-all duration-300 group flex items-center justify-between border border-transparent ${
                                isActive(child.href)
                                  ? "bg-primary/6 text-primary border-primary/25"
                                  : "text-slate-700 hover:bg-white/40 hover:backdrop-blur-md hover:border-white/50 hover:shadow-2xs hover:text-primary"
                              }`}
                            >
                              {child.name}
                              <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-md pt-24 px-8 flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/"
                className={`text-left text-2xl font-heading font-bold tracking-wide py-3 border-b border-slate-100 ${
                  pathname === "/"
                    ? "text-primary border-primary/20"
                    : "text-slate-800"
                }`}
              >
                HOME
              </Link>

              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                        className={`w-full flex items-center justify-between text-left text-2xl font-heading font-bold tracking-wide py-3 border-b border-slate-100 ${
                          isActive(item.href)
                            ? "text-primary border-primary/20"
                            : "text-slate-800"
                        }`}
                      >
                        {item.name.toUpperCase()}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            mobileWorkOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileWorkOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-4"
                          >
                            <Link
                              href={item.href}
                              className="block py-2 text-sm font-mono text-primary uppercase tracking-widest border-b border-slate-50"
                            >
                              View All Work →
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block py-2.5 text-base font-heading tracking-wide border-b border-slate-50 ${
                                  isActive(child.href)
                                    ? "text-primary font-semibold"
                                    : "text-slate-600"
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block text-left text-2xl font-heading font-bold tracking-wide py-3 border-b border-slate-100 ${
                        isActive(item.href)
                          ? "text-primary border-primary/20"
                          : "text-slate-800"
                      }`}
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
