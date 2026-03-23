"use client";

import { Wheat, Palette, Flower2, Scissors } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const steps = [
  {
    icon: Wheat,
    title: "Source",
    description: "Ethical sourcing of hemp, bamboo, and banana fiber from trusted partners.",
  },
  {
    icon: Palette,
    title: "Dye",
    description: "Natural dyeing using plant-based pigments — zero chemical waste.",
  },
  {
    icon: Flower2,
    title: "Print",
    description: "Botanical printing with real leaves and flowers pressed into fabric.",
  },
  {
    icon: Scissors,
    title: "Craft",
    description: "Handcrafted in small batches with fair wages for every artisan.",
  },
];

export default function ProcessTeaser() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="Our Process"
            title="From Earth to Wardrobe"
            description="Every garment follows a journey of intention — from raw material to the finished piece you wear."
          />
        </FadeIn>

        <div className="relative mt-14">
          {/* Connection line (desktop) */}
          <div className="absolute left-0 right-0 top-[3.5rem] hidden h-px bg-sand/50 md:block" />

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive/10">
                    <step.icon className="h-7 w-7 text-olive" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-bark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/process" variant="outline">
            See Our Full Process
          </Button>
        </div>
      </div>
    </section>
  );
}
