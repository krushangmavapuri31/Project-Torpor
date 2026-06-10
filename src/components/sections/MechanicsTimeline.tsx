"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Neuroprotection Protocols",
    desc: "Keeps cerebral blood flow optimized at reduced metabolic states, preventing hypoxia and preserving neural integrity throughout the torpor cycle.",
  },
  {
    number: "02",
    title: "Metabolic Reduction",
    desc: "Reduces cellular energy consumption by up to 95%, conserving critical oxygen and water reserves for extended deep-space missions.",
  },
  {
    number: "03",
    title: "Rapid Reversibility",
    desc: "Warm-up cycles within a 4-hour window restore full cognitive and physical status with zero measurable degradation.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.8,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.7 + i * 0.8,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function MechanicsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs tracking-widest text-blue-600 font-semibold uppercase block mb-4">
            {"//"} METABOLIC SUPPRESSION
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-[#050A30] mb-6">
            The Mechanics of Suspension
          </h2>
          <p className="text-slate-500 font-light text-base md:text-lg max-w-2xl leading-relaxed mb-20">
            A three-phase protocol enabling safe, controlled, and fully
            reversible suppression of human vital functions.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div ref={containerRef}>
          {/* ── Desktop: Horizontal Timeline ── */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Steps row */}
              <div className="grid grid-cols-3 gap-0 relative z-10 w-full">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.number}
                    custom={idx}
                    variants={stepVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative flex flex-col items-center w-full"
                  >
                    {/* Line to next step */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-[50%] top-[20px] w-full h-4 -translate-y-1/2 pointer-events-none z-0">
                        <svg className="w-full h-full overflow-visible">
                          <line
                            x1="20"
                            y1="8"
                            x2="calc(100% - 20px)"
                            y2="8"
                            stroke="#E2E8F0"
                            strokeWidth="2"
                          />
                          <motion.line
                            x1="20"
                            y1="8"
                            x2="calc(100% - 20px)"
                            y2="8"
                            stroke="#0000FF"
                            strokeWidth="2"
                            custom={idx}
                            variants={lineVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                          />
                        </svg>
                        {/* Arrow */}
                        <div className="absolute right-[20px] top-1/2 -translate-y-1/2 translate-x-[2px]">
                          <motion.div
                            custom={idx}
                            variants={{
                              hidden: { opacity: 0, x: -6 },
                              visible: (i: number) => ({
                                opacity: 1,
                                x: 0,
                                transition: {
                                  delay: 1.4 + i * 0.8,
                                  duration: 0.4,
                                },
                              }),
                            }}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                          >
                            <svg width="8" height="10" viewBox="0 0 8 10" className="overflow-visible">
                              <path
                                d="M 1 1 L 5 5 L 1 9"
                                fill="none"
                                stroke="#0000FF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    )}

                    {/* Step number + dot */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="relative">
                        <div
                          className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white relative z-10"
                        >
                          <span className="font-mono text-xs font-bold text-primary">
                            {step.number}
                          </span>
                        </div>
                        {/* Pulse ring */}
                        <div
                          className="absolute inset-0 rounded-full border border-primary/20 timeline-step-dot"
                          style={{ "--dot-delay": `${idx * 0.8}s` } as React.CSSProperties}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-left w-full max-w-[280px] px-4">
                      <h3 className="font-heading text-lg md:text-xl font-bold text-[#050A30] mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile: Vertical Timeline ── */}
          <div className="md:hidden">
            <div className="relative pl-12">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-0 bottom-0 timeline-vertical-line" />

              {steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  custom={idx}
                  variants={stepVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className={`relative ${idx < steps.length - 1 ? "pb-14" : ""}`}
                >
                  {/* Dot on the line */}
                  <div className="absolute left-[-30px] top-0">
                    <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center bg-white relative z-10">
                      <span className="font-mono text-[11px] font-bold text-primary">
                        {step.number}
                      </span>
                    </div>
                    <div
                      className="absolute inset-0 rounded-full border border-primary/20 timeline-step-dot"
                      style={{ "--dot-delay": `${idx * 0.8}s` } as React.CSSProperties}
                    />
                  </div>

                  {/* Arrow between steps */}
                  {idx < steps.length - 1 && (
                    <motion.div
                      className="absolute left-[-22px] bottom-4"
                      custom={idx}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: (i: number) => ({
                          opacity: 0.6,
                          transition: { delay: 0.8 + i * 0.2 },
                        }),
                      }}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8">
                        <path
                          d="M0 0 L4 8 L8 0"
                          fill="none"
                          stroke="#0000FF"
                          strokeWidth="1"
                        />
                      </svg>
                    </motion.div>
                  )}

                  {/* Content */}
                  <h3 className="font-heading text-lg font-bold text-[#050A30] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom telemetry bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-slate-100 flex items-center justify-between"
        >
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
            3-PHASE PROTOCOL // SEQUENTIAL EXECUTION
          </span>
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest hidden sm:inline">
            RECOVERY WINDOW: 4 HRS
          </span>
        </motion.div>
      </div>
    </section>
  );
}
