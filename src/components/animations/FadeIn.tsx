"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  viewportOnce?: boolean;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  viewportOnce = true,
}: FadeInProps) {
  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
    none: 0,
  };

  const isHorizontal = direction === "left" || direction === "right";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "none" ? 0 : isHorizontal ? 0 : directionOffset[direction],
        x: direction === "none" ? 0 : isHorizontal ? directionOffset[direction] : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{ once: viewportOnce, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
