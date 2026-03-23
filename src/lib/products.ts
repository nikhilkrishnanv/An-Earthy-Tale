export interface Product {
  id: string;
  name: string;
  category: "long-shirts" | "dresses" | "bottoms" | "bags";
  fabric: "Hemp" | "Bamboo" | "Banana Fabric" | "Hemp-Bamboo Blend";
  description: string;
  details: string;
  highlights?: string[];
  image: string;
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
    id: "hand-embroidered-hemp-long-shirt",
    name: "Hand Embroidered Hemp Long Shirt",
    category: "long-shirts",
    fabric: "Hemp",
    description:
      "A sleeveless long shirt in pure hemp fabric, adorned with hand-embroidered spiral motifs in crimson red.",
    details:
      "Crafted from 100% pure hemp fabric with intricate hand embroidery. Features pockets on both sides for everyday ease. Each piece is uniquely embroidered by skilled artisans.",
    highlights: ["Hand Embroidered", "Pure Hemp", "Pockets on Both Sides"],
    image: "/images/products/long-shirt-1.svg",
  },
  {
    id: "earthy-tunic-shirt",
    name: "Earthy Tunic Shirt",
    category: "long-shirts",
    fabric: "Bamboo",
    description:
      "A relaxed-fit tunic shirt in soft bamboo fabric, dyed with natural indigo.",
    details:
      "Ultra-soft bamboo fiber, naturally breathable and antibacterial. Dyed using traditional indigo techniques.",
    image: "/images/products/long-shirt-2.svg",
  },
  {
    id: "charcoal-hemp-dress",
    name: "Charcoal Hemp Sleeveless Dress",
    category: "dresses",
    fabric: "Hemp",
    description:
      "A stunning sleeveless midi dress in deep charcoal hemp — effortlessly elegant with a relaxed A-line silhouette and functional pockets.",
    details:
      "100% pure hemp fabric dyed with natural iron-rich mud for a deep charcoal tone. Features a round neckline, roomy pockets, and a flowing A-line cut that drapes beautifully.",
    highlights: ["New Collection", "Natural Dyed", "Pockets", "Pure Hemp"],
    isNew: true,
    image: "/images/products/dress-1.svg",
  },
  {
    id: "cream-embroidered-hemp-dress",
    name: "Cream Embroidered Hemp Dress",
    category: "dresses",
    fabric: "Hemp",
    description:
      "A natural cream hemp midi dress with terracotta hand-embroidered details along the neckline and side slits — timeless and artisan-crafted.",
    details:
      "Pure hemp fabric in its natural off-white shade, accented with terracotta embroidery at the neckline and hem slits. Relaxed A-line fit with pockets. Pairs beautifully with our handcrafted terracotta block-print bag.",
    highlights: ["New Collection", "Hand Embroidered", "Terracotta Details", "Pockets"],
    isNew: true,
    image: "/images/products/dress-2.svg",
  },
  {
    id: "hemp-wide-leg-pants",
    name: "Hemp Wide-Leg Pants",
    category: "bottoms",
    fabric: "Hemp",
    description:
      "Comfortable wide-leg pants in naturally dyed hemp, perfect for everyday ease.",
    details:
      "Pure hemp fabric with a relaxed drape. Dyed using walnut husks for a rich, earthy brown tone.",
    image: "/images/products/bottom-1.svg",
  },
  {
    id: "bamboo-lounge-pants",
    name: "Bamboo Lounge Pants",
    category: "bottoms",
    fabric: "Bamboo",
    description:
      "Incredibly soft lounge pants in bamboo fabric with a natural olive tone.",
    details:
      "Bamboo-derived viscose blend for maximum comfort. Naturally dyed with chlorophyll-based green pigments.",
    image: "/images/products/bottom-2.svg",
  },
  {
    id: "botanical-tote-bag",
    name: "Botanical Tote Bag",
    category: "bags",
    fabric: "Hemp",
    description:
      "A sturdy tote bag with real botanical prints — functional art you can carry.",
    details:
      "Heavy-weight hemp canvas with pressed leaf prints. Reinforced stitching for daily use. Fully biodegradable.",
    image: "/images/products/bag-1.svg",
  },
  {
    id: "banana-fiber-crossbody",
    name: "Banana Fiber Crossbody",
    category: "bags",
    fabric: "Banana Fabric",
    description:
      "A compact crossbody bag woven from banana fiber with artisan detailing.",
    details:
      "Handwoven banana fiber with coconut shell button closure. Each bag supports local artisan cooperatives.",
    image: "/images/products/bag-2.svg",
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
