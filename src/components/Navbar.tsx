"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  {
    name: "Team Information",
    href: "/team",
    children: [
      { name: "Astronaut Candidate", href: "/team/astronaut-candidate" },
      { name: "TTM Members", href: "/team/ttm-members" },
      { name: "Team Neuroscience for Torpor", href: "/team/neuroscience-torpor" },
    ],
  },
  { name: "Join Torpor", href: "/join" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(
    null
  );
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setMobileOpen(false);
      setOpenDropdown(null);
      setMobileExpandedItem(null);
    }, 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = useCallback((name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  }, []);

  const toggleMobileExpand = (name: string) => {
    setMobileExpandedItem((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed z-50 top-[14px] sm:top-[20px] md:top-[28px] left-1/2 -translate-x-1/2
          w-[calc(100%-24px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-80px)] lg:w-[calc(100%-100px)]
          max-w-7xl transition-all duration-500 ease-out
          rounded-[28px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px]
          ${scrolled
            ? "bg-white/45 border border-white/40 backdrop-blur-[12px] saturate-[160%] shadow-[0_8px_30px_rgba(0,0,0,0.1)] py-2 sm:py-2.5"
            : "bg-white/35 border border-white/25 backdrop-blur-[12px] saturate-[140%] shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-2.5 sm:py-3.5"
          }`}
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 flex justify-between items-center min-w-0">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Project Torpor — Home"
          >
            {/* Responsive stacked logo — clamp-based font sizing */}
            <div className="flex flex-col leading-none">
              <span className="font-heading font-extrabold uppercase text-gray-200 tracking-[0.04em]"
                style={{ fontSize: "clamp(0.9rem, 3vw, 1.6rem)" }}>
                PROJECT
              </span>
              <span className="font-heading font-extrabold text-gray-200 tracking-[0.02em]"
                style={{ fontSize: "clamp(1.1rem, 3.8vw, 2rem)" }}>
                TORPOR.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={
                  item.children
                    ? () => handleDropdownEnter(item.name)
                    : undefined
                }
                onMouseLeave={item.children ? handleDropdownLeave : undefined}
              >
                <Link
                  href={item.href}
                  className={`relative text-[11px] xl:text-[13px] font-sans font-extrabold uppercase tracking-[0.1em] xl:tracking-[0.15em]
                    px-2.5 xl:px-4 py-2 xl:py-2.5 rounded-full transition-all duration-300 flex items-center gap-1 border border-transparent whitespace-nowrap
                    ${isActive(item.href)
                      ? "text-primary bg-primary/[0.06] border-primary/20 backdrop-blur-xs shadow-2xs"
                      : "text-slate-700 hover:text-primary hover:bg-white/40 hover:backdrop-blur-md hover:border-white/50 hover:shadow-xs"
                    }`}
                  onFocus={
                    item.children
                      ? () => handleDropdownEnter(item.name)
                      : undefined
                  }
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] xl:w-[320px] rounded-2xl p-3 z-50 bg-white/50 border border-white/50 backdrop-blur-2xl saturate-[150%] shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                        role="menu"
                        aria-label={`${item.name} submenu`}
                      >
                        {/* Arrow pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white/50 border-l border-t border-white/50" />

                        <div className="relative z-10 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`px-4 py-3 rounded-xl text-[12px] xl:text-[13px] font-sans font-extrabold uppercase tracking-[0.1em] transition-all duration-300 group flex items-center justify-between border border-transparent ${isActive(child.href)
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

          {/* Mobile / Tablet Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex-shrink-0 p-2 text-slate-800 focus:outline-none rounded-full hover:bg-white/30 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#050A30]/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-[#050A30]/98 backdrop-blur-2xl border-l border-white/10 flex flex-col overflow-y-auto"
            >
              {/* Menu header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10 flex-shrink-0">
                <Link
                  href="/"
                  className="flex flex-col leading-none"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="font-heading font-extrabold uppercase text-gray-200 text-lg tracking-[0.04em]">
                    PROJECT
                  </span>
                  <span className="font-heading font-extrabold text-gray-200 text-2xl tracking-[0.02em]">
                    TORPOR.
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-0 px-4 pt-4 pb-8 flex-1">
                <Link
                  href="/"
                  className={`flex items-center text-xl font-heading font-bold tracking-wide py-4 px-2 border-b border-white/10 transition-colors ${pathname === "/"
                    ? "text-primary"
                    : "text-white/80 hover:text-white"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  HOME
                </Link>

                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleMobileExpand(item.name)}
                          className={`w-full flex items-center justify-between text-xl font-heading font-bold tracking-wide py-4 px-2 border-b border-white/10 transition-colors ${isActive(item.href)
                            ? "text-primary"
                            : "text-white/80 hover:text-white"
                            }`}
                        >
                          {item.name.toUpperCase()}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${mobileExpandedItem === item.name
                              ? "rotate-180 text-primary"
                              : ""
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpandedItem === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="bg-white/5 rounded-xl mx-2 mb-2 mt-1 overflow-hidden">
                                <Link
                                  href={item.href}
                                  className="block py-3 px-4 text-xs font-mono text-primary uppercase tracking-widest border-b border-white/10"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  View All →
                                </Link>
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className={`block py-3 px-4 text-sm font-sans tracking-wide border-b border-white/5 last:border-0 transition-colors ${isActive(child.href)
                                      ? "text-primary font-semibold bg-white/10"
                                      : "text-slate-300 hover:text-white hover:bg-white/5"
                                      }`}
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center text-xl font-heading font-bold tracking-wide py-4 px-2 border-b border-white/10 transition-colors ${isActive(item.href)
                          ? "text-primary"
                          : "text-white/80 hover:text-white"
                          }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Bottom brand accent */}
              <div className="px-6 pb-8 flex-shrink-0 border-t border-white/10 pt-6">
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
                  Future-space human biological preservation initiative.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
