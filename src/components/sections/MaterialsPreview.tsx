"use client";

import { Sprout, Droplets, TreePalm } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";

const materials = [
  {
    icon: Sprout,
    name: "Hemp",
    benefit: "Uses 50% less water than cotton and enriches the soil it grows in.",
    color: "bg-olive/10 text-olive",
  },
  {
    icon: TreePalm,
    name: "Bamboo",
    benefit: "Grows rapidly without pesticides and is naturally antibacterial.",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    icon: Droplets,
    name: "Banana Fabric",
    benefit: "Made from agricultural waste — silky, breathable, and fully biodegradable.",
    color: "bg-bark/10 text-bark-light",
  },
];

export default function MaterialsPreview() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            label="Our Materials"
            title="Grown by Nature, Worn with Pride"
            description="We source only materials that respect the earth — and feel incredible on your skin."
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-8 md:grid-cols-3">
          {materials.map((mat) => (
            <StaggerItem key={mat.name}>
              <div className="group rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${mat.color}`}>
                  <mat.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-bark">
                  {mat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {mat.benefit}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Button href="/materials" variant="outline">
            Learn About Our Materials
          </Button>
        </div>
      </div>
    </section>
  );
}
