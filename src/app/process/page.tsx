import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { Wheat, Palette, Flower2, Scissors } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "Discover how An Earthy Tale creates sustainable clothing — from ethical sourcing and natural dyeing to botanical printing and artisan craftsmanship.",
};

const steps = [
  {
    icon: Wheat,
    number: "01",
    title: "Ethical Sourcing",
    subtitle: "Where it all begins",
    description:
      "We partner with small-scale farmers and cooperatives who grow hemp, bamboo, and banana plants using organic and regenerative practices. No pesticides, no synthetic fertilizers — just earth and patience.",
    details: [
      "Hemp from organic farms that enrich soil health",
      "Bamboo harvested sustainably from managed groves",
      "Banana fiber recovered from agricultural waste — zero additional land use",
      "Every supplier is personally vetted for ethical practices",
    ],
    image: "/images/process/sourcing.svg",
  },
  {
    icon: Palette,
    number: "02",
    title: "Natural Dyeing",
    subtitle: "Color from nature",
    description:
      "Our colors come from the earth itself — plants, roots, bark, and minerals. Each shade tells a story of the ingredient that created it. No synthetic chemicals enter our dyeing process.",
    details: [
      "Indigo from indigofera plants for deep blues",
      "Turmeric and pomegranate for warm yellows and golds",
      "Iron-rich mud for deep blacks and grays",
      "Walnut husks and tea leaves for rich browns",
    ],
    image: "/images/process/dyeing.svg",
  },
  {
    icon: Flower2,
    number: "03",
    title: "Botanical Printing",
    subtitle: "Nature's own art",
    description:
      "Real leaves, flowers, and ferns are pressed directly into fabric using heat and natural mordants. The result is a one-of-a-kind print that can never be exactly replicated — each piece is unique.",
    details: [
      "Locally foraged leaves and flowers",
      "Eco-friendly mordants like iron water and alum",
      "Steam-set prints that last with proper care",
      "Every garment carries its own natural fingerprint",
    ],
    image: "/images/process/printing.svg",
  },
  {
    icon: Scissors,
    number: "04",
    title: "Artisan Craftsmanship",
    subtitle: "Made by hand, made with heart",
    description:
      "Our garments are cut and sewn by skilled artisans who work in fair-wage, safe environments. Hand embroidery brings each piece to life with intricate spiral motifs in crimson — every stitch tells a story.",
    details: [
      "Hand embroidery using traditional techniques — each piece one-of-a-kind",
      "Zero-waste pattern cutting to minimize fabric waste",
      "Functional details like pockets on both sides for everyday ease",
      "Small-batch production — never mass-manufactured",
      "Fair wages and dignified working conditions for all artisans",
    ],
    image: "/images/process/crafting.svg",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Our Process
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-bark sm:text-5xl lg:text-6xl">
              From Earth
              <br />
              <span className="text-olive">to Wardrobe</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-warm-gray">
              Every garment begins as a seed in the earth and ends as a story you
              wear. Here&apos;s the journey in between.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <FadeIn delay={i % 2 === 1 ? 0.2 : 0}>
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${
                      i % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>

                {/* Content */}
                <FadeIn delay={i % 2 === 1 ? 0 : 0.2}>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/10">
                        <step.icon className="h-6 w-6 text-olive" />
                      </div>
                      <span className="font-display text-sm font-semibold text-olive">
                        Step {step.number}
                      </span>
                    </div>

                    <h2 className="mt-5 font-display text-3xl font-semibold text-bark">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-terracotta">
                      {step.subtitle}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-warm-gray">
                      {step.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-warm-gray"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-olive" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-bark">
              Curious About Our Materials?
            </h2>
            <p className="mt-4 text-warm-gray">
              Learn more about the incredible natural fabrics we use — hemp,
              bamboo, and banana fiber.
            </p>
            <div className="mt-8">
              <Button href="/materials">Explore Our Materials</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
