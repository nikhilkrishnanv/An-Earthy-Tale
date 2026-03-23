"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function BrandPhilosophy() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/about/lifestyle.svg"
                alt="An Earthy Tale — sustainable fashion lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.2}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Our Philosophy
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-bark sm:text-4xl">
              Fashion Should Not Harm the Planet
            </h2>
            <p className="mt-5 text-base leading-relaxed text-warm-gray">
              At An Earthy Tale, we believe that what you wear tells a story.
              Our story is one of respect — for the earth, for the hands that
              craft each piece, and for the person who wears it. Every garment
              is a gentle conversation between nature and design.
            </p>
            <p className="mt-4 text-base leading-relaxed text-warm-gray">
              We don&apos;t chase trends. We create timeless pieces that age
              beautifully — just like the materials they&apos;re made from.
              Slow fashion, intentional choices, and a deep commitment to
              leaving the lightest footprint possible.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Read Our Story
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
