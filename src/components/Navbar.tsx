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
        className={`fixed z-50 top-[20px] md:top-[30px] left-1/2 -translate-x-1/2 w-[calc(100%-80px)] md:w-[calc(100%-120px)] max-w-7xl transition-all duration-500 ease-out rounded-[40px] md:rounded-[60px] ${scrolled
          ? "bg-white/45 border border-white/40 backdrop-blur-[12px] saturate-[160%] shadow-[0_8px_30px_rgba(0,0,0,0.1)] py-2.5"
          : "bg-white/35 border border-white/25 backdrop-blur-[12px] saturate-[140%] shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-3.5"
          }`}
      >
        <div className="w-full px-6 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl font-bold tracking-[0.22em] text-[#050A30] hover:opacity-80 transition-opacity"
          >
            <h1 className="text-gray-200 uppercase text-4xl font-extrabold">PROJECT</h1>
            <h1 className="text-gray-200 text-5xl font-extrabold">TORPOR.</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
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
                  className={`relative text-[15px] font-sans font-extrabold uppercase tracking-[0.15em] px-5 py-3 rounded-full transition-all duration-300 flex items-center gap-1.5 border border-transparent ${isActive(item.href)
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
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === item.name ? "rotate-180" : ""
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
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px] rounded-2xl p-3 z-50 bg-white/50 border border-white/50 backdrop-blur-2xl saturate-[150%] shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
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
                              className={`px-5 py-3.5 rounded-xl text-[14px] font-sans font-extrabold uppercase tracking-[0.12em] transition-all duration-300 group flex items-center justify-between border border-transparent ${isActive(child.href)
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
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-md pt-[150px] px-8 flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/"
                className={`text-left text-2xl font-heading font-bold tracking-wide py-3 border-b border-slate-100 ${pathname === "/"
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
                        onClick={() => toggleMobileExpand(item.name)}
                        className={`w-full flex items-center justify-between text-left text-5xl font-heading font-bold tracking-wide py-3 border-b border-slate-100 ${isActive(item.href)
                          ? "text-primary border-primary/20"
                          : "text-slate-800"
                          }`}
                      >
                        {item.name.toUpperCase()}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${mobileExpandedItem === item.name
                            ? "rotate-180"
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
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pl-4"
                          >
                            <Link
                              href={item.href}
                              className="block py-2 text-sm font-mono text-primary uppercase tracking-widest border-b border-slate-50"
                            >
                              View All →
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block py-2.5 text-base font-heading tracking-wide border-b border-slate-50 ${isActive(child.href)
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
                      className={`block text-left text-2xl font-heading font-bold tracking-wide py-3 border-b border-slate-100 ${isActive(item.href)
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
