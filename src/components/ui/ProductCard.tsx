"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
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
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="rounded-full bg-terracotta px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-cream">
              New
            </span>
          )}
          <span className="rounded-full bg-cream/90 px-3 py-1 text-xs font-medium text-olive backdrop-blur-sm">
            {product.fabric}
          </span>
        </div>
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
