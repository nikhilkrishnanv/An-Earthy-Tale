import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Eye, Target, Sprout, Scale, Handshake, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind An Earthy Tale — a sustainable fashion brand committed to ethical practices, natural materials, and fashion that doesn't harm the planet.",
};

const values = [
  {
    icon: Sprout,
    title: "Sustainability First",
    description:
      "Every decision we make — from fabric to packaging — is weighed against its environmental impact.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "We share our process, our partners, and our impact openly. No greenwashing, no half-truths.",
  },
  {
    icon: Scale,
    title: "Slow Fashion",
    description:
      "We create in small batches, on purpose. Quality and intention over speed and volume.",
  },
  {
    icon: Handshake,
    title: "Fair Trade",
    description:
      "Every artisan receives fair wages and works in safe, dignified conditions.",
  },
  {
    icon: HeartHandshake,
    title: "Community Over Competition",
    description:
      "We believe in lifting others up — sharing knowledge, supporting local artisans, growing together.",
  },
  {
    icon: Target,
    title: "Mindful Consumption",
    description:
      "We encourage buying less but better — pieces that last, that age beautifully, that mean something.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Our Story
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-bark sm:text-5xl lg:text-6xl">
              Born from Love
              <br />
              <span className="text-olive">for the Earth</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/about/founder.svg"
                  alt="The founder of An Earthy Tale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="font-display text-3xl font-semibold text-bark sm:text-4xl">
                The Story Behind the Brand
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-warm-gray">
                <p>
                  An Earthy Tale began with a simple question: Can fashion exist
                  without harming the planet? It started not in a factory or a
                  design studio, but in a quiet moment of realization — that the
                  clothes we wear carry a cost far beyond their price tag.
                </p>
                <p>
                  Our founder grew up surrounded by nature, watching artisans
                  create beautiful textiles using nothing but natural dyes and
                  traditional techniques passed down through generations. But as
                  fast fashion grew, those traditions were fading — replaced by
                  synthetic fabrics and chemical processes.
                </p>
                <p>
                  An Earthy Tale was born to bridge that gap. To take the wisdom
                  of traditional craftsmanship and present it to a modern
                  world — proving that sustainable fashion can be beautiful,
                  desirable, and accessible.
                </p>
                <p>
                  Every piece we create is a small act of resistance against
                  throwaway culture. A reminder that clothing can be made with
                  love, worn with pride, and returned to the earth without guilt.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl bg-olive/5 p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                  Our Mission
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-bark">
                  To Make Sustainable Fashion the Norm
                </h3>
                <p className="mt-4 text-base leading-relaxed text-warm-gray">
                  We exist to prove that beautiful, high-quality clothing can be
                  made without exploiting people or the planet. Every garment is
                  an act of care — for you and for the earth.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-3xl bg-terracotta/5 p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                  Our Vision
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-bark">
                  A World Where Fashion Heals
                </h3>
                <p className="mt-4 text-base leading-relaxed text-warm-gray">
                  We envision a future where every piece of clothing enriches the
                  soil it came from, empowers the hands that made it, and
                  inspires the person who wears it to live more consciously.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-offwhite py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              label="What We Stand For"
              title="Our Core Values"
              description="These aren't marketing words. They're promises we make — to ourselves, to our artisans, and to you."
            />
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <v.icon className="h-8 w-8 text-olive" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-bark">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-bark">
              Want to See How We Make Our Clothes?
            </h2>
            <p className="mt-4 text-warm-gray">
              Take a journey through our process — from raw fiber to finished
              garment.
            </p>
            <div className="mt-8">
              <Button href="/process">Explore Our Process</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
