"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Adaptado do Highlighted Text do Spell UI (MIT).
 * Vira a pílula laranja inclinada da marca: fundo laranja sólido no lugar do
 * preto com mix-blend, folga vertical, cantos arredondados e contorno branco.
 */
type From = "left" | "right" | "top" | "bottom";

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  from?: From;
  delay?: number;
  inView?: boolean;
  once?: boolean;
  /** Inclina a pílula em -8°, como nos posts. */
  tilt?: boolean;
}

const fromVariants = {
  left: { hidden: { x: "-101%" }, visible: { x: "0%" } },
  right: { hidden: { x: "101%" }, visible: { x: "0%" } },
  top: { hidden: { y: "-101%" }, visible: { y: "0%" } },
  bottom: { hidden: { y: "101%" }, visible: { y: "0%" } },
};

export function HighlightedText({
  children,
  className,
  from = "left",
  delay = 0,
  inView = true,
  once = true,
  tilt = true,
}: HighlightedTextProps) {
  return (
    <motion.span
      data-reveal=""
      className={cn(
        "relative inline-flex overflow-hidden rounded-full border-2 border-white align-middle font-extrabold uppercase text-primary-foreground",
        tilt && "rotate-(--jv-tilt)",
        className,
      )}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={inView ? undefined : "visible"}
      viewport={{ once }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-jv-orange"
        variants={fromVariants[from]}
        transition={{ type: "spring", damping: 30, stiffness: 300, delay }}
      />
      <span className="relative z-10 px-[0.9em] py-[0.35em] leading-none">{children}</span>
    </motion.span>
  );
}
