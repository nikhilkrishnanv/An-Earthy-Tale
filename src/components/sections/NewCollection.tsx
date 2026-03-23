"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { products } from "@/lib/products";
import { WHATSAPP } from "@/lib/constants";

const newProducts = products.filter((p) => p.isNew);

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

        {/* Instagram-style cards grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
          {newProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, rotate: i === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-bark-light/30 shadow-2xl">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  <span className="absolute left-4 top-4 rounded-full bg-terracotta px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-cream">
                    New
                  </span>

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
