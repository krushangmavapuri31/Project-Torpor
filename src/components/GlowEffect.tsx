"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GlowEffectProps {
  color?: string;
  size?: number;
}

export default function GlowEffect({ color = "rgba(96, 165, 250, 0.12)", size = 600 }: GlowEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 80, damping: 20, mass: 0.1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    // Track mouse move globally within screen, but offset relative to the container
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY, size]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, rgba(96, 165, 250, 0) 70%)`,
        }}
        className="absolute rounded-full filter blur-[50px]"
      />
    </div>
  );
}
