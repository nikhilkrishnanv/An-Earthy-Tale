"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
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

  const prev = () => {
    setCurrentIndex((i) => (i === 0 ? allImages.length - 1 : i - 1));
  };
  const next = () => {
    setCurrentIndex((i) => (i === allImages.length - 1 ? 0 : i + 1));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-offwhite">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-all duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Nav arrows — only if multiple images */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4 text-bark" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4 text-bark" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {product.isNew && (
            <span className="rounded-full bg-terracotta px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-cream">
              New
            </span>
          )}
          <span className="rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-olive backdrop-blur-sm">
            {product.fabric}
          </span>
        </div>

        {/* Color swatches on image */}
        {product.colors && product.colors.length > 0 && (
          <div className="absolute right-3 top-3 flex flex-col gap-1.5">
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
                    ? "border-olive scale-110"
                    : "border-white/70 hover:border-olive/60"
                }`}
                style={{ backgroundColor: variant.color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-bark">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-warm-gray">
          {product.description}
        </p>

        {/* Highlights */}
        {product.highlights && product.highlights.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.highlights.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-olive/20 bg-olive/5 px-2.5 py-0.5 text-[11px] font-medium text-olive"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP.getProductLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#20BD5A] hover:shadow-md"
        >
          <MessageCircle className="h-4 w-4" />
          Enquire on WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
