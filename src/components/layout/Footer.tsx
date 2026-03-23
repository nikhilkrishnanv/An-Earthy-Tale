import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { BRAND, SOCIAL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-bark text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.svg"
                alt={BRAND.name}
                width={36}
                height={36}
                className="h-9 w-auto brightness-200"
              />
              <span
                className="text-xl font-light tracking-[0.15em] uppercase text-cream"
                style={{ fontFamily: "var(--font-logo)" }}
              >
                An Earthy Tale
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/80">
              Fashion should not harm the planet. We craft every piece with
              intention — using sustainable materials, natural dyes, and the
              hands of skilled artisans.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-cream" />
              </a>
              <a
                href={SOCIAL.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-cream/20"
                aria-label="Chat on WhatsApp"
              >
                <svg className="h-5 w-5 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-sand">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>
                <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-cream">
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-cream">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cream"
                >
                  {SOCIAL.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-cream/10 pt-8 text-center">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} {BRAND.name}. Made with 🌿 for the planet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
