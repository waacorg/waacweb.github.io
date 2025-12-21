"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, BookOpen, Globe, Shield, Link as LinkIcon, Activity, Brain, Users, Stethoscope, Cpu, Zap } from "lucide-react"
import collabData from "@/data/collaborationData.json"

const iconMap: Record<string, any> = {
    "🧠": Brain,
    "🧬": Stethoscope,
    "🤖": Cpu,
    "⚙️": Zap,
    "🏥": Activity,
    "📩": Users
}


export default function Collaboration() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl font-bold mb-4">International Collaboration</h1>
                    <p className="text-xl text-slate-500 mb-12">Building a global network for responsible artificial consciousness research.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <Card className="rounded-[2rem] border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden bg-white">
                        <CardContent className="p-8">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Global Research Network</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                WAAC collaborates with over 100 institutions worldwide, facilitating cross-border research transitions from theory to engineering.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="rounded-[2rem] border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden bg-white">
                        <CardContent className="p-8">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Ethics & Standards</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Our international standardization committee works with ISO/IEEE to define the first benchmarking protocols for consciousness in AI.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-16">
                    {collabData.map((section, idx) => {
                        const emoji = section.category.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/)?.[0] || ""
                        const title = section.category.replace(emoji, "").trim()
                        const IconComponent = iconMap[emoji] || BookOpen

                        return (
                            <motion.section
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-8 border-l-4 border-blue-600 pl-6">
                                    <div className="text-3xl">{emoji}</div>
                                    <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
                                </div>
                                <div className="grid gap-3">
                                    {section.projects.map((item, i) => {
                                        // Extract ID from the original link
                                        const projectId = item.link.split('/').pop()?.replace('.html', '') || '';

                                        return (
                                            <a
                                                key={i}
                                                href={`/collaboration/${projectId}`}
                                                className="group block p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                                            >
                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                            <IconComponent className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{item.title}</span>
                                                    </div>
                                                    <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-blue-600 transition-colors shrink-0" />
                                                </div>
                                            </a>
                                        )
                                    })}
                                </div>
                            </motion.section>
                        )
                    })}
                </div>

                <div className="mt-24 p-12 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden text-center">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Start a Partnership</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            We are actively seeking research partners and philanthropic organizations aligned with our vision of ethical AI evolution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:contact@waac.ac"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
                            >
                                Contact our office <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    {/* Abstract background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[100px]" />
                </div>
            </div>
        </div>
    )
}
