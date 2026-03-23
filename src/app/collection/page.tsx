"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import FadeIn from "@/components/animations/FadeIn";
import { products, comingSoonProducts, CATEGORIES } from "@/lib/products";
import { WHATSAPP } from "@/lib/constants";
import { Clock } from "lucide-react";

const newProducts = products.filter((p) => p.isNew);

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Our Collection
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-bark sm:text-5xl lg:text-6xl">
              Handcrafted
              <br />
              <span className="text-olive">with Intention</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-warm-gray">
              Each piece tells a story. Browse our collection and reach out on
              WhatsApp to make it yours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* New Arrivals Banner */}
      {newProducts.length > 0 && (
        <section className="bg-bark py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeIn>
              <div className="flex items-center justify-between">
                <div>
                  <span className="rounded-full bg-terracotta px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-cream">
                    New Arrivals
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold text-cream sm:text-4xl">
                    Fresh from our studio
                  </h2>
                </div>
              </div>
            </FadeIn>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
              {newProducts.map((product) => (
                <FadeIn key={product.id}>
                  <div className="group relative overflow-hidden rounded-2xl border border-cream/10">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-transparent to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-display text-xl font-semibold text-cream">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-sand/70 line-clamp-2">
                        {product.description}
                      </p>
                      <a
                        href={WHATSAPP.getProductLink(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#20BD5A]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter & Products */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-olive text-cream shadow-sm"
                    : "bg-white text-warm-gray hover:bg-olive/5 hover:text-olive"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-warm-gray">
              No products in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              label="Coming Soon"
              title="Something Special is Brewing"
              description="We're working on new collections. Follow us to be the first to know."
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:max-w-2xl lg:mx-auto">
            {comingSoonProducts.map((product) => (
              <FadeIn key={product.id}>
                <div className="group relative overflow-hidden rounded-2xl">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover opacity-50"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-bark/40 backdrop-blur-[2px]">
                    <Clock className="h-8 w-8 text-cream/80" />
                    <h3 className="mt-3 font-display text-xl font-semibold text-cream">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-cream/70">
                      {product.description}
                    </p>
                    <span className="mt-4 rounded-full bg-cream/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
