import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { Sprout, TreePalm, Droplets, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Materials",
  description:
    "Learn about the sustainable materials behind An Earthy Tale — hemp, bamboo, and banana fabric. Why they're better for the planet and incredible to wear.",
};

const materials = [
  {
    id: "hemp",
    icon: Sprout,
    name: "Hemp",
    tagline: "The ancient super-fiber",
    color: "olive",
    bgColor: "bg-olive/5",
    accentColor: "text-olive",
    description:
      "Hemp has been cultivated for over 10,000 years. It's one of the most sustainable crops on the planet — requiring minimal water, no pesticides, and actually improving soil health as it grows. The fabric it produces is naturally strong, breathable, and becomes softer with every wash.",
    environmentBenefits: [
      "Uses 50% less water than cotton",
      "Requires no pesticides or herbicides",
      "Enriches soil with nutrients as it grows",
      "Absorbs more CO₂ per hectare than most crops",
      "Fully biodegradable at end of life",
    ],
    wearerBenefits: [
      "Naturally UV-resistant",
      "Antibacterial and hypoallergenic",
      "Gets softer with each wash",
      "Highly breathable and moisture-wicking",
      "Incredibly durable — lasts for years",
    ],
  },
  {
    id: "bamboo",
    icon: TreePalm,
    name: "Bamboo",
    tagline: "Nature's fastest renewable resource",
    color: "terracotta",
    bgColor: "bg-terracotta/5",
    accentColor: "text-terracotta",
    description:
      "Bamboo is the fastest-growing plant on earth, capable of growing up to a meter per day. It requires no irrigation, no fertilizers, and regenerates from its own root system. The fabric made from bamboo is silky-soft, breathable, and has natural antibacterial properties.",
    environmentBenefits: [
      "Grows rapidly without irrigation",
      "Self-regenerates from roots — no replanting needed",
      "Produces 35% more oxygen than equivalent trees",
      "Requires no pesticides or chemicals",
      "Biodegradable and compostable",
    ],
    wearerBenefits: [
      "Silky-soft texture against skin",
      "Natural antibacterial properties",
      "Excellent temperature regulation",
      "Moisture-wicking and odor-resistant",
      "Hypoallergenic — gentle on sensitive skin",
    ],
  },
  {
    id: "banana",
    icon: Droplets,
    name: "Banana Fabric",
    tagline: "Beauty from agricultural waste",
    color: "bark",
    bgColor: "bg-bark/5",
    accentColor: "text-bark-light",
    description:
      "Banana fabric is made from the stems of banana plants — a byproduct of fruit harvesting that would otherwise be discarded. This transforms agricultural waste into a luxurious, silk-like textile. It's lightweight, breathable, and completely biodegradable.",
    environmentBenefits: [
      "Made from agricultural waste — zero additional land use",
      "Requires no extra water or resources to produce",
      "Reduces farm waste and supports circular agriculture",
      "No chemicals needed in fiber extraction",
      "100% biodegradable and compostable",
    ],
    wearerBenefits: [
      "Silk-like sheen and texture",
      "Extremely lightweight and breathable",
      "Naturally moisture-absorbent",
      "Strong and durable despite fine texture",
      "Unique appearance with natural variations",
    ],
  },
];

export default function MaterialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Our Materials
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-bark sm:text-5xl lg:text-6xl">
              Grown by Nature,
              <br />
              <span className="text-olive">Worn with Pride</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-warm-gray">
              We only use fabrics that respect the earth. Here&apos;s why hemp,
              bamboo, and banana fiber are the future of fashion.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Materials */}
      {materials.map((mat, i) => (
        <section
          key={mat.id}
          className={`py-24 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              {/* Image */}
              <FadeIn>
                <div
                  className={`relative aspect-square overflow-hidden rounded-3xl ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={`/images/materials/${mat.id}.svg`}
                    alt={`${mat.name} — sustainable fabric`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>

              {/* Content */}
              <FadeIn delay={0.2}>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3">
                    <mat.icon className={`h-8 w-8 ${mat.accentColor}`} />
                    <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${mat.accentColor}`}>
                      {mat.tagline}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-4xl font-bold text-bark">
                    {mat.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-warm-gray">
                    {mat.description}
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {/* Environment */}
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-olive">
                        For the Planet
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {mat.environmentBenefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-warm-gray">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-olive" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Wearer */}
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-terracotta">
                        For You
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {mat.wearerBenefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-warm-gray">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-terracotta" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-bark">
              See These Materials Come to Life
            </h2>
            <p className="mt-4 text-warm-gray">
              Browse our collection to experience the beauty of sustainable
              fabrics.
            </p>
            <div className="mt-8">
              <Button href="/collection">Browse Collection</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
