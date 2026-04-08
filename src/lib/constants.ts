export const BRAND = {
  name: "An Earthy Tale",
  tagline: "Wear the Change",
  subtitle: "Sustainable fashion handcrafted with love for the planet",
  description:
    "Eco-friendly, ethically made clothing using hemp, bamboo, and banana fabric. Handcrafted with botanical printing and natural dyeing techniques.",
  email: "social.anearthytale@gmail.com",
  phone: "+91 9037785716",
} as const;

export const WHATSAPP = {
  number: "919037785716",
  defaultMessage: "Hi! I'm interested in An Earthy Tale products.",
  getLink: (message?: string) =>
    `https://wa.me/919037785716?text=${encodeURIComponent(message || WHATSAPP.defaultMessage)}`,
  getProductLink: (productName: string) =>
    `https://wa.me/919037785716?text=${encodeURIComponent(`Hi! I'd like to know more about the "${productName}" from An Earthy Tale.`)}`,
} as const;

export const SOCIAL = {
  instagram: {
    handle: "@an_earthy_tale",
    url: "https://www.instagram.com/an_earthy_tale",
  },
  whatsapp: {
    url: WHATSAPP.getLink(),
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Materials", href: "/materials" },
  { label: "Collection", href: "/collection" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Connect", href: "/connect" },
] as const;

export const VALUES = [
  {
    icon: "Leaf" as const,
    title: "Eco-Friendly",
    description: "Every piece is crafted with materials that respect the earth.",
  },
  {
    icon: "Heart" as const,
    title: "Ethically Made",
    description: "Fair wages, safe conditions, and dignity for every artisan.",
  },
  {
    icon: "Hand" as const,
    title: "Handcrafted",
    description: "Slow fashion, made with care — not mass-produced.",
  },
] as const;
