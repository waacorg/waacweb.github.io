"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NewsPostClient({ post }: { post: any }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
        >
            <Link href="/news" className="text-sm font-bold text-blue-600 flex items-center gap-2 mb-8 hover:gap-3 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="19" x2="5" y1="12" y2="12" /><polyline points="12 19 5 12 12 5" /></svg> Back to News
            </Link>

            <header className="mb-12">
                <p className="text-sm font-mono text-slate-400 mb-4">{post.date}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {post.title}
                </h1>
            </header>

            <div
                className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-20 pt-10 border-t">
                <Button asChild variant="outline" className="rounded-full">
                    <Link href="/news">View all news</Link>
                </Button>
            </div>
        </motion.div>
    )
}
