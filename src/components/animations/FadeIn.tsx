"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, viewportOnce } from "@/lib/animations";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "none";
  delay?: number;
}

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
}: FadeInProps) {
  const variants = direction === "up" ? fadeInUp : fadeIn;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
