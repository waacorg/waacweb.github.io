"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { getAllNewsPosts } from "@/content/news/news"
import { PageIntro } from "@/shared/components/sections/PageIntro"

const newsItems = getAllNewsPosts()

export function NewsListPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <PageIntro
          title="Latest News"
          description="Updates, announcements, and reports from the global WAAC community."
        />

        <div className="grid gap-12">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.5) }}
              className="group border-b pb-12 last:border-0"
            >
              <div className="flex flex-col items-start gap-8 md:flex-row">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-sm text-blue-600">
                      {news.date}
                    </span>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-blue-600">
                    <Link href={`/news/${news.id}`}>{news.title}</Link>
                  </h2>
                  <Link
                    href={`/news/${news.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-all group-hover:gap-3"
                  >
                    Read full story
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
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

