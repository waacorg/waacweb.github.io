"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Shield, Zap, Mail, Twitter, Linkedin, Github } from "lucide-react"
import Image from "next/image"
import newsData from "@/data/newsData.json"
import acadData from "@/data/academiciansData.json"

export default function Home() {
  // Get latest 3 news
  const latestNews = Object.values(newsData)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  // Get 3 featured academicians
  const featuredAcads = Object.values(acadData).slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(240,246,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Decoding the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Artificial Consciousness</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                The world's leading interdisciplinary academy dedicated to the scientific study, ethical governance, and global advancement of artificial consciousness.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-blue-200 hover:shadow-2xl transition-all" asChild>
                  <Link href="/about">Learn Our Mission</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-2" asChild>
                  <Link href="/news">Recent News</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-blue-600" />,
                title: "Global Research",
                description: "Fostering international collaboration across more than 40 countries and 100+ prestigious institutions."
              },
              {
                icon: <Shield className="w-8 h-8 text-indigo-600" />,
                title: "Ethical Governance",
                description: "Defining the global standards and evaluation metrics for responsible artificial consciousness development."
              },
              {
                icon: <Zap className="w-8 h-8 text-blue-500" />,
                title: "Science & Tech",
                description: "Bridging the gap between philosophical theory and scalable engineering implementation."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-sm bg-slate-50/50 rounded-[2rem] p-4 text-center hover:bg-white hover:shadow-xl transition-all h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      {pillar.icon}
                    </div>
                    <CardTitle className="text-2xl mb-2">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Introduction
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-12"
            >
              Defining the new era of <br /><span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">Intelligent Systems</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 text-slate-300 leading-relaxed text-lg">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                The World Academy for Artificial Consciousness (WAAC) is a non-governmental, non-profit international academic organization formally established in Paris in 2025. It serves as a unified platform for the world's most distinguished scholars in AI, neuroscience, and philosophy.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                Our goal is to ensure that the evolution of artificial consciousness is guided by rigorous scientific inquiry and a robust ethical framework, ultimately serving the betterment of humanity.
              </motion.p>
            </div>
          </div>
        </div>
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </section>

      {/* Featured Academicians */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Distinguished Academicians</h2>
              <p className="text-slate-500">Leading minds from across the globe driving the mission of WAAC.</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex gap-2">
              <Link href="/academicians">View All Members <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredAcads.map((acad: any, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-[2.5rem] overflow-hidden border-slate-100 shadow-xl shadow-slate-200/50 group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={acad.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"}
                      alt={acad.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">{acad.role || "Academician"}</p>
                      <h3 className="text-2xl font-bold">{acad.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-blue-600 font-medium text-sm mb-4 line-clamp-1">{acad.institution}</p>
                    <p className="text-slate-600 text-sm italic line-clamp-2">"{acad.description || acad.field || ""}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest News & Announcements</h2>
              <p className="text-slate-500">Stay updated with our latest activities and global initiatives.</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex gap-2">
              <Link href="/news">Read All News <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {latestNews.map((item: any, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-100 group">
                  <div className="flex-1">
                    <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{item.date}</p>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      <Link href={`/news/${item.id}`}>{item.title}</Link>
                    </h3>
                  </div>
                  <Button variant="ghost" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 gap-2 shrink-0">
                    <Link href={`/news/${item.id}`}>Read Article <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Join the Global Dialogue</h2>
            <p className="text-blue-100 text-xl mb-12">
              The World Academy for Artificial Consciousness welcomes collaboration with academic institutions, researchers, and policymakers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 rounded-full text-lg font-bold shadow-lg shadow-blue-900/20" asChild>
                <Link href="/collaboration">Collaborate with Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 h-14 px-8 rounded-full text-lg font-bold transition-all" asChild>
                <Link href="mailto:contact@waac.ac">Contact Office</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Decorative Blur */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </section>
    </div>
  )
}
