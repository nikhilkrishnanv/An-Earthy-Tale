import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anearthlytale.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/process`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/materials`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/collection`, lastModified: new Date(), priority: 0.9 },
    {
      url: `${baseUrl}/sustainability`,
      lastModified: new Date(),
      priority: 0.7,
    },
    { url: `${baseUrl}/connect`, lastModified: new Date(), priority: 0.7 },
  ];
}
