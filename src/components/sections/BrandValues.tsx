"use client";

import { Leaf, Heart, Hand } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import { VALUES } from "@/lib/constants";

const iconMap = {
  Leaf,
  Heart,
  Hand,
} as const;

export default function BrandValues() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = iconMap[value.icon];
            return (
              <StaggerItem key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive/10">
                  <Icon className="h-7 w-7 text-olive" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-bark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {value.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
