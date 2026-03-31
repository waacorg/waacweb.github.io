"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { PageIntro } from "@/shared/components/sections/PageIntro"

const missionCards = [
  {
    title: "Research",
    description: "Build the global AI consciousness research community through collaboration.",
  },
  {
    title: "DIKWP Model",
    description: "Promote the DIKWP Model of artificial consciousness as a theoretical foundation.",
  },
  {
    title: "Standards",
    description: "Develop rigorous standards and ethical guidelines for AI applications.",
  },
]

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <PageIntro
          title="About WAAC"
          description="The World Academy for Artificial Consciousness is an international, interdisciplinary scientific institution focused on the theory, governance, and practical future of conscious AI."
        />

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              World Academy for Artificial Consciousness (WAAC)
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              The <strong>World Academy for Artificial Consciousness (WAAC)</strong> is an
              international, interdisciplinary scientific institution officially established in
              Paris in April 2025.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              WAAC is co-initiated by four global academic organizations from the UK, US, China,
              and Singapore. Its foundation represents a unified global effort to address one of
              the most profound challenges of the 21st century: the nature and governance of
              conscious machines.
            </p>
          </section>

          <section className="mt-12 rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-800">Our Mission</h2>
            <p className="leading-relaxed text-slate-600">
              Our mission is to advance global cooperation and frontier research in artificial
              consciousness, while promoting the responsible and ethical development of AI
              technologies. We believe that as AI systems become increasingly complex,
              understanding the potential for consciousness is essential for their safe integration
              into society.
            </p>
          </section>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {missionCards.map((card) => (
              <Card
                key={card.title}
                className="rounded-2xl border-slate-100 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-mono font-bold uppercase tracking-tight text-blue-600">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-800">Global Governance</h2>
            <p className="leading-relaxed text-slate-600">
              WAAC serves as a bridge between technical innovation and policy-making. We provide
              expert advice to governments and international bodies on the implications of
              artificial consciousness, ensuring that humanity&apos;s future is protected through
              proactive governance.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
