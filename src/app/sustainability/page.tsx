import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHATSAPP } from "@/lib/constants";
import {
  Leaf,
  Recycle,
  Handshake,
  ShieldCheck,
  Droplets,
  TreePalm,
  Heart,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Our commitment to sustainability — ethical sourcing, zero-waste production, fair trade practices, and full transparency. No greenwashing, just honest fashion.",
};

const commitments = [
  {
    icon: Leaf,
    title: "100% Natural Materials",
    description:
      "Only hemp, bamboo, and banana fiber. No synthetic fabrics, no polyester, no microplastic shedding.",
  },
  {
    icon: Droplets,
    title: "Natural Dyeing Only",
    description:
      "Every color comes from plants, roots, and minerals. Zero chemical dyes enter our process.",
  },
  {
    icon: Recycle,
    title: "Zero-Waste Approach",
    description:
      "We use pattern cutting techniques that minimize fabric waste. Scraps are repurposed or composted.",
  },
  {
    icon: Handshake,
    title: "Fair Trade Artisans",
    description:
      "Every artisan receives fair wages, works reasonable hours, and operates in safe, dignified conditions.",
  },
  {
    icon: TreePalm,
    title: "Biodegradable Products",
    description:
      "Every garment can return to the earth. No synthetic components that persist in landfills for centuries.",
  },
  {
    icon: ShieldCheck,
    title: "Chemical-Free Processing",
    description:
      "No bleaches, no formaldehyde, no harmful finishing agents. Just natural processes and patient craftsmanship.",
  },
];

const honestFacts = [
  {
    icon: Eye,
    title: "What We Share Openly",
    items: [
      "Our exact material sources and suppliers",
      "The dyeing and printing techniques we use",
      "How our artisans are compensated",
      "The environmental impact of each product",
      "Where we still have room to improve",
    ],
  },
  {
    icon: Heart,
    title: "Where We're Still Growing",
    items: [
      "Working toward certified organic sources for all materials",
      "Exploring fully compostable packaging solutions",
      "Building carbon-neutral shipping partnerships",
      "Developing take-back and repair programs",
      "Expanding our artisan network for greater impact",
    ],
  },
];

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Our Commitment
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-bark sm:text-5xl lg:text-6xl">
              Transparency,
              <br />
              <span className="text-olive">Not Greenwashing</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-warm-gray">
              We believe you deserve to know exactly how your clothes are made,
              what they&apos;re made from, and who made them. Here&apos;s our
              honest account.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              label="Our Promises"
              title="What We Stand Behind"
              description="These aren't aspirational goals — they're practices we follow today, in every piece we create."
            />
          </FadeIn>

          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => (
              <StaggerItem key={c.title}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
                  <c.icon className="h-8 w-8 text-olive" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-bark">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {c.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Images */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              label="Behind the Scenes"
              title="Real Process, Real People"
              description="No stock photos, no staged shots. This is what sustainable fashion actually looks like."
            />
          </FadeIn>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={`/images/sustainability/bts-${i + 1}.svg`}
                    alt={`Behind the scenes ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Transparency */}
      <section className="bg-offwhite py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              label="Honest Talk"
              title="We're Proud — and We're Still Learning"
              description="True sustainability is a journey, not a destination. Here's where we are."
            />
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {honestFacts.map((section) => (
              <FadeIn key={section.title}>
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-olive" />
                    <h3 className="font-display text-xl font-semibold text-bark">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-warm-gray"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-olive" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold text-bark">
              Have Questions About Our Practices?
            </h2>
            <p className="mt-4 text-warm-gray">
              We&apos;re an open book. Ask us anything — we&apos;ll give you an
              honest answer.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href={WHATSAPP.getLink()} variant="whatsapp" external>
                Ask on WhatsApp
              </Button>
              <Button href="/connect" variant="outline">
                Contact Us
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
