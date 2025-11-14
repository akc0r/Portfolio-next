"use client";

import { motion } from "framer-motion";

export function SpeedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent"
          style={{
            top: `${15 + i * 10}%`,
            width: "100%",
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{
            x: ["100%", "-100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
