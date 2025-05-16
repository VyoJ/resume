import type { MetadataRoute } from "next";
import { getData } from "@/lib/data";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const data = await getData();
  const baseUrl =
    data?.profile.website || "https://demo-resume-optimised.vercel.app/";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
