import { MetadataRoute } from 'next'
import newsData from '@/data/newsData.json'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.waac.ac'

    const newsRoutes = Object.keys(newsData).map((id) => ({
        url: `${baseUrl}/news/${id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    const staticRoutes = [
        '',
        '/about',
        '/events',
        '/academicians',
        '/collaboration',
        '/charter',
        '/news'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    return [...staticRoutes, ...newsRoutes]
}
