"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { NewsPost } from "@/shared/types/content"

interface NewsPostClientProps {
  post: Pick<NewsPost, "title" | "date" | "content">
}

export function NewsPostClient({ post }: NewsPostClientProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-3xl"
    >
      <Link
        href="/news"
        className="mb-8 flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
      >
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
          <line x1="19" x2="5" y1="12" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to News
      </Link>

      <header className="mb-12">
        <p className="mb-4 font-mono text-sm text-slate-400">{post.date}</p>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {post.title}
        </h1>
      </header>

      <div
        className="news-html-content prose prose-slate prose-lg max-w-none leading-relaxed text-slate-600 prose-img:block prose-img:mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-20 border-t pt-10">
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/news">View all news</Link>
        </Button>
      </div>
    </motion.article>
  )
}

