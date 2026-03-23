"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Instagram, Mail, Phone, Send, MapPin } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { BRAND, WHATSAPP, SOCIAL } from "@/lib/constants";

export default function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Connect With Us
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-bark sm:text-5xl lg:text-6xl">
              Let&apos;s Start a
              <br />
              <span className="text-olive">Conversation</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-warm-gray">
              Whether you have a question, want to place an order, or just want
              to say hello — we&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — CTAs */}
            <FadeIn>
              <div className="space-y-6">
                {/* WhatsApp — Primary */}
                <a
                  href={WHATSAPP.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl bg-[#25D366] p-6 text-white transition-shadow hover:shadow-lg hover:shadow-[#25D366]/20"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Chat on WhatsApp</p>
                    <p className="text-sm text-white/80">
                      Fastest way to reach us — enquire, order, or just chat
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-6 text-white transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                    <Instagram className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Follow on Instagram</p>
                    <p className="text-sm text-white/80">
                      {SOCIAL.instagram.handle} — behind-the-scenes & new drops
                    </p>
                  </div>
                </a>

                {/* Contact Details */}
                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <h3 className="font-display text-lg font-semibold text-bark">
                    Other Ways to Reach Us
                  </h3>
                  <div className="mt-5 space-y-4">
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="flex items-center gap-3 text-warm-gray transition-colors hover:text-olive"
                    >
                      <Mail className="h-5 w-5 text-olive" />
                      <span className="text-sm">{BRAND.email}</span>
                    </a>
                    <a
                      href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-warm-gray transition-colors hover:text-olive"
                    >
                      <Phone className="h-5 w-5 text-olive" />
                      <span className="text-sm">{BRAND.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-warm-gray">
                      <MapPin className="h-5 w-5 text-olive" />
                      <span className="text-sm">Kerala, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right — Contact Form */}
            <FadeIn delay={0.2}>
              <div className="rounded-2xl bg-white p-8 shadow-sm lg:p-10">
                <h3 className="font-display text-xl font-semibold text-bark">
                  Send Us a Message
                </h3>
                <p className="mt-2 text-sm text-warm-gray">
                  We&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl bg-olive/5 p-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-olive/10">
                      <Send className="h-7 w-7 text-olive" />
                    </div>
                    <h4 className="mt-4 font-display text-lg font-semibold text-bark">
                      Message Sent!
                    </h4>
                    <p className="mt-2 text-sm text-warm-gray">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-bark"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-xl border border-sand/50 bg-offwhite px-4 py-3 text-sm text-bark outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-bark"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1.5 w-full rounded-xl border border-sand/50 bg-offwhite px-4 py-3 text-sm text-bark outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-bark"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="mt-1.5 w-full resize-none rounded-xl border border-sand/50 bg-offwhite px-4 py-3 text-sm text-bark outline-none transition-colors focus:border-olive focus:ring-1 focus:ring-olive"
                        placeholder="Tell us what you're looking for..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive px-6 py-3.5 text-sm font-medium text-cream transition-all hover:bg-olive-dark"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
