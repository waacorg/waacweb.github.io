import { MetadataRoute } from "next"
import { getNewsPostIds } from "@/content/news/news"
import { siteConfig } from "@/shared/config/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const newsRoutes = getNewsPostIds().map((id) => ({
    url: `${siteConfig.url}/news/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const staticRoutes = ["", "/about", "/events", "/academicians", "/collaboration", "/charter", "/news"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  )

  return [...staticRoutes, ...newsRoutes]
}
