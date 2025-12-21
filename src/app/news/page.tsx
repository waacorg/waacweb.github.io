"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import newsData from "@/data/newsData.json"

// Sort news by date descending
const newsItems = Object.values(newsData).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export default function News() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-12">Latest News</h1>

                <div className="grid gap-12">
                    {newsItems.map((news, i) => (
                        <motion.article
                            key={news.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(i * 0.05, 0.5) }} // Cap delay for large lists
                            className="group border-b pb-12 last:border-0"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-sm font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{news.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                                        <Link href={`/news/${news.id}`}>{news.title}</Link>
                                    </h2>
                                    <Link href={`/news/${news.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:gap-3 transition-all">
                                        Read full story <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    )
}
