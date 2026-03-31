"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Shield, Zap } from "lucide-react"
import { getFeaturedAcademicians } from "@/content/academicians/academicians"
import { getLatestNewsPosts } from "@/content/news/news"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const pillars = [
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Global Research",
    description:
      "Fostering international collaboration across more than 40 countries and 100+ prestigious institutions.",
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "Ethical Governance",
    description:
      "Defining the global standards and evaluation metrics for responsible artificial consciousness development.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    title: "Science & Tech",
    description:
      "Bridging the gap between philosophical theory and scalable engineering implementation.",
  },
]

const latestNews = getLatestNewsPosts(3)
const featuredAcademicians = getFeaturedAcademicians(3)

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(240,246,255,1)_0%,rgba(255,255,255,1)_100%)] pb-20 pt-32 md:pb-32 md:pt-48">
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-8 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-7xl">
                Decoding the Future of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Artificial Consciousness
                </span>
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                The world&apos;s leading interdisciplinary academy dedicated to the scientific
                study, ethical governance, and global advancement of artificial consciousness.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 rounded-full px-8 text-lg shadow-xl shadow-blue-200 transition-all hover:shadow-2xl"
                  asChild
                >
                  <Link href="/about">Learn Our Mission</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-full border-2 px-8 text-lg"
                  asChild
                >
                  <Link href="/news">Recent News</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 opacity-50 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50 opacity-50 blur-3xl" />
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full rounded-[2rem] border-none bg-slate-50/50 p-4 text-center shadow-sm transition-all hover:bg-white hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                      {pillar.icon}
                    </div>
                    <CardTitle className="mb-2 text-2xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed text-slate-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-4 block text-sm font-bold uppercase tracking-widest text-blue-400"
            >
              Introduction
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12 text-4xl font-bold md:text-5xl"
            >
              Defining the new era of <br />
              <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">
                Intelligent Systems
              </span>
            </motion.h2>

            <div className="grid gap-12 text-lg leading-relaxed text-slate-300 md:grid-cols-2">
              <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                The World Academy for Artificial Consciousness (WAAC) is a non-governmental,
                non-profit international academic organization formally established in Paris in
                2025. It serves as a unified platform for the world&apos;s most distinguished
                scholars in AI, neuroscience, and philosophy.
              </motion.p>
              <motion.p initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                Our goal is to ensure that the evolution of artificial consciousness is guided by
                rigorous scientific inquiry and a robust ethical framework, ultimately serving the
                betterment of humanity.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-4xl font-bold">Distinguished Academicians</h2>
              <p className="text-slate-500">
                Leading minds from across the globe driving the mission of WAAC.
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden gap-2 md:flex">
              <Link href="/academicians">
                View All Members <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredAcademicians.map((academician, index) => (
              <motion.div
                key={academician.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden rounded-[2.5rem] border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={
                        academician.image ||
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
                      }
                      alt={academician.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="mb-2 text-xs font-bold uppercase tracking-widest opacity-80">
                        {academician.role || "Academician"}
                      </p>
                      <h3 className="text-2xl font-bold">{academician.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="mb-4 line-clamp-1 text-sm font-medium text-blue-600">
                      {academician.institution}
                    </p>
                    <p className="line-clamp-2 text-sm italic text-slate-600">
                      &quot;{academician.description}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-4xl font-bold">Latest News & Announcements</h2>
              <p className="text-slate-500">
                Stay updated with our latest activities and global initiatives.
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden gap-2 md:flex">
              <Link href="/news">
                Read All News <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {latestNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group flex flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center">
                  <div className="flex-1">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {item.date}
                    </p>
                    <h3 className="text-lg font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </h3>
                  </div>
                  <Button
                    variant="ghost"
                    asChild
                    className="shrink-0 gap-2 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Link href={`/news/${item.id}`}>
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-600 py-24">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-4xl font-bold text-white">Join the Global Dialogue</h2>
            <p className="mb-12 text-xl text-blue-100">
              The World Academy for Artificial Consciousness welcomes collaboration with academic
              institutions, researchers, and policymakers worldwide.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 rounded-full bg-white px-8 text-lg font-bold text-blue-600 shadow-lg shadow-blue-900/20 hover:bg-blue-50"
                asChild
              >
                <Link href="/collaboration">Collaborate with Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-2 border-white bg-transparent px-8 text-lg font-bold text-white transition-all hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="mailto:contact@waac.ac">Contact Office</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </section>
    </div>
  )
}

