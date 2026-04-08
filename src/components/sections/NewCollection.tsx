"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { products } from "@/lib/products";
import type { Product } from "@/lib/products";
import { WHATSAPP } from "@/lib/constants";

const newProducts = products.filter((p) => p.isNew);

function NewCollectionCard({ product, index }: { product: Product; index: number }) {
  const defaultImages = product.images?.length ? product.images : [product.image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeColor, setActiveColor] = useState<string | null>(null);

  const activeVariant = activeColor
    ? product.colors?.find((c) => c.name === activeColor)
    : null;
  const allImages = activeVariant?.images?.length
    ? activeVariant.images
    : defaultImages;
  const displayImage = allImages[currentIndex];

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? allImages.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === allImages.length - 1 ? 0 : i + 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: index === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-bark-light/30 shadow-2xl">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={displayImage}
            alt={product.name}
            fill
            unoptimized
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />

          {/* Bold "New Collection" watermark */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 pointer-events-none">
            <span className="text-6xl font-extrabold leading-[0.95] text-white/12 sm:text-7xl lg:text-8xl select-none">
              New
              <br />
              Colle
              <span className="text-white/8">ction</span>
            </span>
          </div>

          {/* "NEW" badge */}
          <span className="absolute left-4 top-4 rounded-full bg-terracotta px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-cream">
            New
          </span>

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="absolute right-4 top-4 flex flex-col gap-1.5">
              {product.colors.map((variant) => (
                <button
                  key={variant.name}
                  onClick={() => {
                    setActiveColor(variant.name);
                    setCurrentIndex(0);
                  }}
                  title={variant.name}
                  className={`h-6 w-6 rounded-full border-2 shadow-sm transition-all ${
                    activeColor === variant.name
                      ? "border-cream scale-110"
                      : "border-white/70 hover:border-cream/60"
                  }`}
                  style={{ backgroundColor: variant.color }}
                />
              ))}
            </div>
          )}

          {/* Nav arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white"
              >
                <ChevronLeft className="h-4 w-4 text-bark" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white"
              >
                <ChevronRight className="h-4 w-4 text-bark" />
              </button>
              <div className="absolute bottom-[42%] left-1/2 flex -translate-x-1/2 gap-1.5">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Gradient bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bark via-bark/60 to-transparent" />
        </div>

        {/* Info below image */}
        <div className="bg-bark-light/20 p-6">
          <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-sand/70 line-clamp-2">
            {product.description}
          </p>

          {/* Highlights */}
          {product.highlights && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.highlights
                .filter((h) => h !== "New Collection")
                .map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-cream/15 bg-cream/5 px-2.5 py-0.5 text-[11px] font-medium text-cream/80"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          )}

          {/* CTA */}
          <a
            href={WHATSAPP.getProductLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#20BD5A] hover:shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function NewCollection() {
  if (newProducts.length === 0) return null;

  return (
    <section className="bg-bark py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand/70">
              Just Dropped
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
              New{" "}
              <span className="text-olive-light">Collection</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-sand/60">
              Thoughtfully designed, naturally crafted. Our latest pieces are here.
            </p>
          </div>
        </FadeIn>

        {/* Cards grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {newProducts.map((product, i) => (
            <NewCollectionCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-14 text-center">
          <Button href="/collection" variant="outline" className="border-cream/20 text-cream hover:bg-cream/10">
            View Full Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
