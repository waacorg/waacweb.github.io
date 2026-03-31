"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Globe, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getCollaborationSections } from "@/content/collaboration/collaboration"
import { getCollaborationCategoryMeta } from "@/features/collaboration/categoryMeta"
import { PageIntro } from "@/shared/components/sections/PageIntro"

const collaborationSections = getCollaborationSections()

export function CollaborationPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <PageIntro
            title="International Collaboration"
            description="Building a global network for responsible artificial consciousness research."
          />
        </motion.div>

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="overflow-hidden rounded-[2rem] border-slate-100 bg-white shadow-xl shadow-slate-200/50">
            <CardContent className="p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Global Research Network</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                WAAC collaborates with over 100 institutions worldwide, facilitating cross-border
                research transitions from theory to engineering.
              </p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden rounded-[2rem] border-slate-100 bg-white shadow-xl shadow-slate-200/50">
            <CardContent className="p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold">Ethics & Standards</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Our international standardization committee works with ISO/IEEE to define the
                first benchmarking protocols for consciousness in AI.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-16">
          {collaborationSections.map((section, sectionIndex) => {
            const meta = getCollaborationCategoryMeta(section.category)
            const Icon = meta.icon

            return (
              <motion.section
                key={`${section.category}-${sectionIndex}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 flex items-center gap-4 border-l-4 border-blue-600 pl-6">
                  <div className="text-3xl">{meta.emoji}</div>
                  <h2 className="text-2xl font-bold text-slate-900">{meta.title}</h2>
                </div>
                <div className="grid gap-3">
                  {section.projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/collaboration/${project.slug}`}
                      className="group block rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600">
                            {project.title}
                          </span>
                        </div>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-colors group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>

        <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-slate-900 p-12 text-center text-white">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold">Start a Partnership</h2>
            <p className="mb-8 leading-relaxed text-slate-400">
              We are actively seeking research partners and philanthropic organizations aligned
              with our vision of ethical AI evolution.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@waac.ac"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold transition-colors hover:bg-blue-700"
              >
                Contact our office <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-64 w-64 bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-64 w-64 bg-indigo-500/10 blur-[100px]" />
        </div>
      </div>
    </div>
  )
}
