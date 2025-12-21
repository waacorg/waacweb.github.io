"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import acadsData from "@/data/academiciansData.json"

export default function Academicians() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Academicians</h1>
                <p className="text-slate-500 mb-16 max-w-2xl">WAAC Academicians are world-leading experts who have made foundational contributions to the theory and practice of artificial consciousness.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {acadsData.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(i * 0.02, 0.4) }}
                        >
                            <Card className="rounded-2xl border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full bg-white group">
                                <div className="relative aspect-square w-full bg-slate-50 border-b border-slate-50 italic">
                                    <Image
                                        src={member.image || "/images/waac_logo.png"}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold mb-1 text-slate-900">{member.name}</h3>
                                    <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-3 leading-tight">
                                        {member.role}
                                        {member.institution && member.institution !== member.role ? ` • ${member.institution}` : ''}
                                    </p>
                                    <div className="mt-auto pt-3 border-t border-slate-50">
                                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Field of Research</p>
                                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                                            {member.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <section className="mt-24 text-center bg-slate-50 rounded-[3rem] p-16 border border-slate-100">
                    <h2 className="text-2xl font-bold mb-6">Global Academic Ecosystem</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Academicians of the World Academy for Artificial Consciousness hail from institutions such as Harvard University, the Massachusetts Institute of Technology, the University of Cambridge, the University of California, the French Academy of Sciences, and other leading global research centers.
                    </p>
                </section>
            </div>
        </div>
    )
}
