"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { getAcademicians } from "@/content/academicians/academicians"
import { PageIntro } from "@/shared/components/sections/PageIntro"

const academicians = getAcademicians()

export function AcademiciansPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <PageIntro
          title="Academicians"
          description="WAAC Academicians are world-leading experts who have made foundational contributions to the theory and practice of artificial consciousness."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {academicians.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.02, 0.4) }}
            >
              <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border-slate-100 bg-white shadow-sm transition-all hover:shadow-lg">
                <div className="relative aspect-square w-full border-b border-slate-50 bg-slate-50">
                  <Image
                    src={member.image || "/images/waac_logo.png"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col p-5">
                  <h3 className="mb-1 text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    {member.role}
                    {member.institution && member.institution !== member.role
                      ? ` / ${member.institution}`
                      : ""}
                  </p>
                  <div className="mt-auto border-t border-slate-50 pt-3">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Field of Research
                    </p>
                    <p className="line-clamp-3 text-xs leading-relaxed text-slate-600">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <section className="mt-24 rounded-[3rem] border border-slate-100 bg-slate-50 p-16 text-center">
          <h2 className="mb-6 text-2xl font-bold">Global Academic Ecosystem</h2>
          <p className="mx-auto max-w-3xl leading-relaxed text-slate-600">
            Academicians of the World Academy for Artificial Consciousness hail from institutions
            such as Harvard University, the Massachusetts Institute of Technology, the University
            of Cambridge, the University of California, the French Academy of Sciences, and other
            leading global research centers.
          </p>
        </section>
      </div>
    </div>
  )
}

