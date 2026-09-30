// Generates tylerlam.com/sitemap.xml so search engines can find your site.
import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date(), priority: 1 }];
}
