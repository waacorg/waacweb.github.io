"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 border-b pb-4">About WAAC</h1>

                <div className="prose prose-slate lg:prose-lg max-w-none space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">World Academy for Artificial Consciousness (WAAC)</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            The <strong>World Academy for Artificial Consciousness (WAAC)</strong> is an international, interdisciplinary scientific institution officially established in Paris in April 2025.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            WAAC is co-initiated by four global academic organizations from the UK, US, China, and Singapore. Its foundation represents a unified global effort to address one of the most profound challenges of the 21st century: the nature and governance of conscious machines.
                        </p>
                    </section>

                    <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mt-12">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Our mission is to advance global cooperation and frontier research in artificial consciousness, while promoting the responsible and ethical development of AI technologies. We believe that as AI systems become increasingly complex, understanding the potential for consciousness is essential for their safe integration into society.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                        {[
                            { title: "Research", desc: "Build the global AI consciousness research community through collaboration." },
                            { title: "DIKWP Model", desc: "Promote the DIKWP Model of artificial consciousness as a theoretical foundation." },
                            { title: "Standards", desc: "Develop rigorous standards and ethical guidelines for AI applications." }
                        ].map((obj, i) => (
                            <Card key={i} className="rounded-2xl border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-blue-600 mb-2 font-mono uppercase tracking-tight">{obj.title}</h3>
                                    <p className="text-sm text-slate-600">{obj.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <section className="mt-16">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Global Governance</h2>
                        <p className="text-slate-600 leading-relaxed">
                            WAAC serves as a bridge between technical innovation and policy-making. We provide expert advice to governments and international bodies on the implications of artificial consciousness, ensuring that Humanity's future is protected through proactive governance.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    )
}
