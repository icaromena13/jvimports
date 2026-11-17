"use client";

import { MotionConfig } from "motion/react";

/** Faz toda animação do motion respeitar prefers-reduced-motion. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
