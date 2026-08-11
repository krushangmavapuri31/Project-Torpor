"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TorporIntro() {
    const [showIntro, setShowIntro] = useState(true);

    const project = "PROJECT";

    const torpor = "TORPOR";

    if (!showIntro) return null;

    return (
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
                delay: 2.8,
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => setShowIntro(false)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-blue-600"
        >
            <div className="flex flex-col items-center justify-center">

                {/* PROJECT */}
                <div className="flex overflow-hidden">
                    {project.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.12,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            className="text-6xl font-bold tracking-[0.12em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* TORPOR */}
                <div className="flex overflow-hidden">
                    {torpor.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.9 + index * 0.12,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            className="text-6xl font-semibold tracking-[0.12em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

            </div>
        </motion.div>
    );
}