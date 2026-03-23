"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { products } from "@/lib/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="Our Collection"
            title="Handcrafted with Intention"
            description="Each piece is made with care, using sustainable materials and natural processes. No two are exactly alike."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/collection" variant="outline">
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
