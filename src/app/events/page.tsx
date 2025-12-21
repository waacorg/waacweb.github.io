"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const events = [
    {
        title: "3rd World Conference on Artificial Consciousness (WCAC 2025)",
        date: "December 26–28, 2025",
        location: "Northwestern Polytechnical University Taicang Campus (Suzhou, China)",
        status: "Upcoming",
        description: "The first offline gathering of the conference, focusing on exploration of fundamental theories and practical applications.",
        themes: ["DIKWP framework", "Embodied intelligence", "Ethics and Governance", "Evaluation Standards"]
    },
    {
        title: "WAAC Annual Meeting 2025",
        date: "October 2025",
        location: "Singapore",
        status: "Upcoming",
        description: "Annual gathering focused on global evaluation standards and human-aligned AI governance.",
        themes: ["Global standards", "AI alignment", "Ethical systems design"]
    },
    {
        title: "WAAC Annual Meeting & Preparatory Meeting for the 3rd World Artificial Consciousness Conference",
        date: "July 2025",
        location: "Global (Haikou)",
        status: "Recent",
        description: "Focus on Proactive Medicine, Standards for Artificial Consciousness, and Global Ethical Governance.",
        image: "/images/Annual_Meeting/hz.jpg"
    },
    {
        title: "WAAC Inauguration Ceremony",
        date: "April 2025",
        location: "Paris, France",
        status: "Recent",
        description: "The formal establishment of WAAC, co-initiated by four international academic institutions."
    },
    {
        title: "The 2nd World Conference on Artificial Consciousness (AC2024)",
        date: "December 2024",
        location: "Global (Online)",
        status: "Past",
        description: "Theme: Proactive Medicine: AI Embracing the Integration of Traditional and Modern Medicine.",
        image: "/images/Annual_Meeting/Main4.png"
    },
    {
        title: "2nd World Conference on Artificial Consciousness (Prep) & 1st DIKWP Cup",
        date: "June 2024",
        location: "Global & China",
        status: "Past",
        description: "Preparatory meeting drawing leading figures from technology, ethics, and public policy.",
        image: "/images/Annual_Meeting/Main1.png"
    },
    {
        title: "The Inaugural World Conference on Artificial Consciousness (AC2023)",
        date: "August 2023",
        location: "Global (Online)",
        status: "Past",
        description: "Co-hosted by the DIKWP research team at Hainan University and Nagasaki Institute of Applied Science.",
        image: "/images/Annual_Meeting/Main3.png"
    }
]

export default function Events() {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Events</h1>
                <p className="text-slate-500 mb-12">WAAC organizes and supports global events that promote academic exchange and ethical discourse.</p>

                <div className="space-y-12">
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="rounded-[2rem] border-slate-100 overflow-hidden shadow-xl shadow-slate-200/50">
                                <div className="md:flex">
                                    <div className={`p-8 md:w-64 flex flex-col justify-center text-center ${event.status === 'Upcoming' ? 'bg-blue-600 text-white' :
                                            event.status === 'Recent' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">{event.status}</p>
                                        <p className="text-lg font-bold">{event.date}</p>
                                    </div>
                                    <div className="p-8 flex-1">
                                        <h3 className="text-2xl font-bold mb-3 text-slate-900 leading-tight">{event.title}</h3>
                                        <p className="text-sm text-blue-600 font-semibold mb-6 flex items-center gap-1.5 font-mono">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                            {event.location}
                                        </p>
                                        <p className="text-slate-600 mb-6 leading-relaxed">{event.description}</p>

                                        {event.themes && (
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {event.themes.map(theme => (
                                                    <Badge key={theme} variant="secondary" className="bg-slate-50 text-slate-600 border-slate-100 shadow-none">
                                                        {theme}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}

                                        {event.image && (
                                            <div className="relative aspect-video w-full rounded-2xl overflow-hidden mt-4 border border-slate-100">
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
