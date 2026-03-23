"use client";

import { Send } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function NewsletterSignup() {
  return (
    <section className="bg-olive py-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">
            Stay Connected
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-base text-cream/70">
            Get stories, not spam. Behind-the-scenes glimpses, new launches, and
            the occasional love letter from nature.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 rounded-full bg-white/10 px-6 py-3.5 text-sm text-cream placeholder:text-cream/40 outline-none ring-1 ring-cream/20 transition-all focus:bg-white/15 focus:ring-cream/40"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-olive transition-all hover:bg-offwhite"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-3 text-xs text-cream/40">
            No spam, ever. Unsubscribe anytime.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
