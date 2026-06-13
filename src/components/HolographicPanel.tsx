"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity } from "lucide-react";

export default function HolographicPanel({
  title,
  description,
  delay = 0,
}: {
  title: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full [perspective:1000px] z-10"
    >
      {/* Floating wrapper */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
        className="relative w-full h-full p-[1px] rounded-xl overflow-hidden group bg-gradient-to-br from-cyan-500/40 via-transparent to-blue-500/40 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-shadow duration-500"
      >
        {/* Core panel background */}
        <div className="relative w-full h-full bg-[#03071E]/85 backdrop-blur-2xl rounded-xl p-6 md:p-8 flex flex-col justify-between overflow-hidden">
          
          {/* Scanning Line using framer-motion */}
          <motion.div
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-cyan-400/50 blur-[2px] shadow-[0_0_15px_#22d3ee] z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Grid background / HUD elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />
          
          {/* Cyan Glow on hover */}
          <div
            className="absolute inset-0 bg-cyan-500/10 blur-2xl pointer-events-none transition-opacity duration-700"
            style={{ opacity: isHovered ? 1 : 0 }}
          />

          <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: "translateZ(40px)" }}>
            {/* Header: Icon & Title */}
            <div className="flex items-start gap-4 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-sm border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <Activity className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg md:text-xl font-bold tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  {title}
                </h3>
                {/* Thin animated divider */}
                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-700 mt-2 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </div>
            </div>

            {/* Description */}
            <div className="flex-grow mb-6">
              <p className="text-cyan-100/70 font-mono text-sm leading-relaxed group-hover:text-cyan-50 transition-colors duration-300 drop-shadow-md">
                {description}
              </p>
            </div>

            {/* Status Badge */}
            <div className="mt-auto flex items-center gap-2 pt-4 border-t border-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-mono text-[10px] tracking-widest text-cyan-400/80 uppercase font-semibold">
                ACTIVE RESEARCH
              </span>
            </div>
          </div>
          
          {/* Corner structural elements (HUD style) */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400/60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400/60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400/60 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400/60 pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
}
