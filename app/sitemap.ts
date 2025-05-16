import type { MetadataRoute } from "next";
import { getData } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getData();

  const baseUrl = data?.profile.website || "https://johndoe.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}