"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const floatingItems = [
  { label: "Hemp Dress — Black", image: "/images/products/hemp_dresses/black/second.jpeg", delay: 0, speed: 6 },
  { label: "Hemp Dress — Off White", image: "/images/products/hemp_dresses/off_white/second.jpeg", delay: 0.3, speed: 6.5 },
  { label: "Eco Print Shirt", image: "/images/products/eco_print_shirt/main.JPG", delay: 1, speed: 7 },
  { label: "Eco Print Dress", image: "/images/products/eco_print_dress/second.jpeg", delay: 0.5, speed: 8 },
  { label: "Hemp Dress — Tan", image: "/images/products/hemp_dresses/tan/second.jpeg", delay: 2, speed: 7.5 },
  { label: "Hemp Linen Shirt", image: "/images/products/hemp_linen_shirt_blue/main.JPG", delay: 1.5, speed: 5.5 },
];

// Deterministic particle positions to avoid hydration mismatch
const leafParticles = [
  { id: 0, x: "8%", y: "12%", size: 6, delay: 0, duration: 7, rotation: 30 },
  { id: 1, x: "22%", y: "75%", size: 8, delay: 1.2, duration: 9, rotation: 120 },
  { id: 2, x: "35%", y: "25%", size: 5, delay: 0.5, duration: 6, rotation: 200 },
  { id: 3, x: "48%", y: "85%", size: 10, delay: 2.5, duration: 8, rotation: 60 },
  { id: 4, x: "60%", y: "18%", size: 7, delay: 1.8, duration: 7.5, rotation: 290 },
  { id: 5, x: "75%", y: "65%", size: 5, delay: 3, duration: 6.5, rotation: 150 },
  { id: 6, x: "88%", y: "30%", size: 9, delay: 0.8, duration: 8.5, rotation: 340 },
  { id: 7, x: "15%", y: "50%", size: 6, delay: 2, duration: 7, rotation: 80 },
  { id: 8, x: "42%", y: "42%", size: 8, delay: 3.5, duration: 9.5, rotation: 210 },
  { id: 9, x: "55%", y: "90%", size: 5, delay: 1.5, duration: 6, rotation: 10 },
  { id: 10, x: "82%", y: "55%", size: 7, delay: 0.3, duration: 8, rotation: 260 },
  { id: 11, x: "92%", y: "80%", size: 11, delay: 2.8, duration: 7.5, rotation: 180 },
];

// Extract floating item into its own component so useTransform is called at component level
function FloatingGarment({
  item,
  index,
  scrollYProgress,
}: {
  item: (typeof floatingItems)[number];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const itemY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [40, 0, -30 - index * 10]
  );

  return (
    <motion.div
      style={{ y: itemY }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: item.delay * 0.3,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: item.speed,
          delay: item.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="group aspect-[3/4] w-full"
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl shadow-black/30 ring-1 ring-cream/15">
          <Image
            src={item.image}
            alt={item.label}
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bark/90 via-bark/40 to-transparent p-3 pt-8">
            <p className="text-xs font-semibold text-cream/90 tracking-wide">
              {item.label}
            </p>
          </div>
        </div>
        <div className="mx-auto mt-3 h-3 w-3/4 rounded-full bg-black/15 blur-md" />
      </motion.div>
    </motion.div>
  );
}

export default function AntiGravity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-bark py-24"
    >
      {/* Background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-bark via-bark-light/30 to-bark"
      />

      {/* Floating leaf particles */}
      {leafParticles.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute rounded-full bg-olive/10"
          style={{
            left: leaf.x,
            top: leaf.y,
            width: leaf.size,
            height: leaf.size,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            rotate: [leaf.rotation, leaf.rotation + 180, leaf.rotation + 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title */}
        <FadeIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-olive-light">
              Anti-Gravity Experience
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              Light on the Earth.
              <br />
              <span className="text-terracotta-light">Bold in Style.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-cream/60">
              Our garments tread gently on the planet — floating through your
              life with intention and grace.
            </p>
          </div>
        </FadeIn>

        {/* Floating garments grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
          {floatingItems.map((item, i) => (
            <FloatingGarment
              key={item.label}
              item={item}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Bottom text */}
        <FadeIn>
          <p className="mt-12 text-center text-sm text-cream/40">
            Fashion this light deserves to be experienced. Every piece leaves the
            smallest footprint while making the boldest statement.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
