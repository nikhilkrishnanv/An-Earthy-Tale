"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { WHATSAPP } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero-bg.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Decorative floating leaves */}
        <svg className="absolute left-[10%] top-[20%] h-20 w-14 animate-[float_6s_ease-in-out_infinite] text-olive/10" viewBox="0 0 40 60" fill="currentColor">
          <path d="M20 0C8 10 0 25 0 40c0 10 8 18 20 20C32 58 40 50 40 40 40 25 32 10 20 0Z" />
          <path d="M20 12v38" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none" />
        </svg>
        <svg className="absolute right-[15%] top-[30%] h-16 w-11 animate-[float-slow_8s_ease-in-out_infinite] text-terracotta/10 rotate-[25deg]" viewBox="0 0 40 60" fill="currentColor">
          <path d="M20 0C8 10 0 25 0 40c0 10 8 18 20 20C32 58 40 50 40 40 40 25 32 10 20 0Z" />
          <path d="M20 12v38" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none" />
        </svg>
        <svg className="absolute left-[60%] top-[60%] h-24 w-16 animate-[float_7s_ease-in-out_infinite_1s] text-olive/8 -rotate-[15deg]" viewBox="0 0 40 60" fill="currentColor">
          <path d="M20 0C8 10 0 25 0 40c0 10 8 18 20 20C32 58 40 50 40 40 40 25 32 10 20 0Z" />
          <path d="M20 12v38" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none" />
        </svg>
        <svg className="absolute left-[25%] top-[70%] h-12 w-8 animate-[float-slow_9s_ease-in-out_infinite_2s] text-olive/10 rotate-[40deg]" viewBox="0 0 40 60" fill="currentColor">
          <path d="M20 0C8 10 0 25 0 40c0 10 8 18 20 20C32 58 40 50 40 40 40 25 32 10 20 0Z" />
          <path d="M20 12v38" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none" />
        </svg>
        <svg className="absolute right-[8%] top-[65%] h-14 w-10 animate-[float_8s_ease-in-out_infinite_3s] text-sand/15 -rotate-[30deg]" viewBox="0 0 40 60" fill="currentColor">
          <path d="M20 0C8 10 0 25 0 40c0 10 8 18 20 20C32 58 40 50 40 40 40 25 32 10 20 0Z" />
          <path d="M20 12v38" stroke="currentColor" strokeWidth="0.8" opacity="0.5" fill="none" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-olive"
        >
          Sustainable Fashion · Handcrafted with Love
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 font-display text-5xl font-bold leading-[1.1] text-bark sm:text-6xl lg:text-7xl"
        >
          Wear the{" "}
          <span className="text-olive">Change</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-gray sm:text-xl"
        >
          Fashion that doesn&apos;t harm the planet. Crafted from hemp, bamboo,
          and banana fabric — dyed by nature, made by hand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/collection" variant="primary" size="lg">
            Explore Collection
          </Button>
          <Button href={WHATSAPP.getLink()} variant="whatsapp" size="lg" external>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </Button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto h-10 w-6 rounded-full border-2 border-bark/20"
          >
            <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-bark/30" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
