export interface ColorVariant {
  name: string;
  color: string;
  image: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  category: "long-shirts" | "dresses" | "bottoms" | "bags";
  fabric: "Hemp" | "Bamboo" | "Banana Fabric" | "Hemp-Bamboo Blend" | "Bamboo Cotton" | "Hemp-Linen Blend";
  description: string;
  details: string;
  highlights?: string[];
  image: string;
  images?: string[];
  colors?: ColorVariant[];
  isNew?: boolean;
  comingSoon?: boolean;
}

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "long-shirts", label: "Long Shirts" },
  { id: "dresses", label: "Dresses" },
  { id: "bottoms", label: "Bottoms" },
  { id: "bags", label: "Bags" },
] as const;

export const products: Product[] = [
  {
    id: "eco-print-shirt-dress",
    name: "Eco Print Shirt Dress",
    category: "dresses",
    fabric: "Bamboo Cotton",
    description:
      "A soft, earthy shirt dress that blends comfort with quiet elegance. Crafted in a light, breathable fabric, the piece features delicate eco-inspired prints in warm, natural tones, reminiscent of leaves gently pressed onto fabric.",
    details:
      "The relaxed silhouette, button-down front, and rolled sleeves give it an effortless, lived-in charm, while the midi length adds a touch of grace.",
    highlights: ["Eco Print", "Button-Down Front", "Midi Length", "Rolled Sleeves"],
    isNew: true,
    image: "/images/products/eco_print_dress/main.jpeg",
    images: [
      "/images/products/eco_print_dress/main.jpeg",
      "/images/products/eco_print_dress/second.jpeg",
      "/images/products/eco_print_dress/third.jpeg",
      "/images/products/eco_print_dress/forth.jpeg",
    ],
  },
  {
    id: "eco-print-shirts",
    name: "Eco Print Shirts",
    category: "long-shirts",
    fabric: "Bamboo Cotton",
    description:
      "Breezy shirt crafted from soft bamboo cotton, offering a naturally breathable and lightweight feel. Adorned with eco-printed leaf impressions, each piece carries a unique, nature-inspired pattern.",
    details:
      "Made from soft bamboo cotton for a naturally breathable and lightweight feel. Each shirt features unique eco-printed leaf impressions, making every piece one of a kind.",
    highlights: ["Eco Print", "Bamboo Cotton", "Unique Leaf Impressions"],
    isNew: true,
    image: "/images/products/eco_print_shirt/main.JPG",
    images: [
      "/images/products/eco_print_shirt/main.JPG",
      "/images/products/eco_print_shirt/second.JPG",
    ],
  },
  {
    id: "hemp-linen-mix-shirt",
    name: "Hemp Linen Mix Shirt",
    category: "long-shirts",
    fabric: "Hemp-Linen Blend",
    description:
      "A relaxed hemp-linen blend shirt designed for breathable, all-day comfort. Its loose-fit silhouette drapes effortlessly, giving a soft, laid-back elegance.",
    details:
      "Lightweight and natural, it's perfect for easy styling with a timeless, earthy feel. The hemp-linen blend offers superior breathability and a beautiful natural drape.",
    highlights: ["Hemp-Linen Blend", "Loose Fit", "All-Day Comfort"],
    isNew: true,
    image: "/images/products/hemp_linen_shirt_blue/main.JPG",
    images: [
      "/images/products/hemp_linen_shirt_blue/main.JPG",
      "/images/products/hemp_linen_shirt_blue/second.JPG",
      "/images/products/hemp_linen_shirt_blue/third.JPG",
    ],
  },
  {
    id: "hemp-dress",
    name: "Hemp Dress",
    category: "dresses",
    fabric: "Hemp",
    description:
      "A relaxed hemp dress crafted from breathable, eco-friendly fabric for all-day comfort. Designed with a clean, minimal silhouette and elevated by delicate hand embroidery.",
    details:
      "Earthy, timeless, and consciously made — perfect for effortless everyday wear. Crafted from pure hemp with delicate hand embroidery for an elevated, artisan touch.",
    highlights: ["Hand Embroidered", "Pure Hemp", "Minimal Silhouette"],
    isNew: true,
    image: "/images/products/hemp_dresses/black/main.jpeg",
    images: [
      "/images/products/hemp_dresses/black/main.jpeg",
      "/images/products/hemp_dresses/black/second.jpeg",
      "/images/products/hemp_dresses/black/third.jpeg",
    ],
    colors: [
      {
        name: "Black",
        color: "#1a1a1a",
        image: "/images/products/hemp_dresses/black/main.jpeg",
        images: [
          "/images/products/hemp_dresses/black/main.jpeg",
          "/images/products/hemp_dresses/black/second.jpeg",
          "/images/products/hemp_dresses/black/third.jpeg",
        ],
      },
      {
        name: "Off White",
        color: "#f5f0e8",
        image: "/images/products/hemp_dresses/off_white/main.jpeg",
        images: [
          "/images/products/hemp_dresses/off_white/main.jpeg",
          "/images/products/hemp_dresses/off_white/second.jpeg",
          "/images/products/hemp_dresses/off_white/third.jpeg",
        ],
      },
      {
        name: "Tan",
        color: "#d2b48c",
        image: "/images/products/hemp_dresses/tan/main.jpeg",
        images: [
          "/images/products/hemp_dresses/tan/main.jpeg",
          "/images/products/hemp_dresses/tan/second.jpeg",
          "/images/products/hemp_dresses/tan/third.jpeg",
          "/images/products/hemp_dresses/tan/forth.jpeg",
        ],
      },
    ],
  },
];

export const comingSoonProducts = [
  {
    id: "mens-hemp-shirt",
    name: "Men's Hemp Shirts",
    description: "Classic silhouettes in pure hemp — coming soon.",
    image: "/images/products/coming-soon-mens.svg",
  },
  {
    id: "couple-combo",
    name: "Couple / Partner Outfits",
    description: "Matching sustainable sets for you and your partner — coming soon.",
    image: "/images/products/coming-soon-couple.svg",
  },
];
