import type { MetadataRoute } from "next";
import { getData } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getData();

  const baseUrl = data?.profile.website || "https://demo-resume-optimised.vercel.app/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}