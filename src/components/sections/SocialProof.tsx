"use client";

import Image from "next/image";
import { Star, Instagram } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerChildren";
import { SOCIAL } from "@/lib/constants";

const testimonials = [
  {
    name: "Priya M.",
    text: "I've never felt this good about a purchase. The fabric is incredibly soft, and knowing it's truly sustainable makes it special.",
    rating: 5,
  },
  {
    name: "Anika R.",
    text: "The botanical print on my dress is literally one of a kind. I get compliments everywhere I go. Worth every penny.",
    rating: 5,
  },
  {
    name: "Meera S.",
    text: "Finally, a brand that's honest about their process. The transparency and quality are unmatched. I'm a customer for life.",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Testimonials */}
        <FadeIn>
          <SectionHeading
            label="What People Say"
            title="Stories from Our Community"
            description="Real words from people who choose to wear the change."
          />
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-terracotta text-terracotta"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-warm-gray italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold text-bark">{t.name}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Instagram Preview */}
        <div className="mt-20">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
                Follow Along
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-bark sm:text-3xl">
                {SOCIAL.instagram.handle}
              </h3>
            </div>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={`/images/instagram/insta-${i + 1}.svg`}
                    alt={`Instagram post ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-bark/0 transition-colors group-hover:bg-bark/30">
                    <Instagram className="h-6 w-6 text-cream opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
