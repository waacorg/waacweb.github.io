"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getEvents } from "@/content/events/events"
import { PageIntro } from "@/shared/components/sections/PageIntro"

const events = getEvents()

export function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <PageIntro
          title="Events"
          description="WAAC organizes and supports global events that promote academic exchange and ethical discourse."
        />

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={`${event.title}-${index}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-[2rem] border-slate-100 shadow-xl shadow-slate-200/50">
                <div className="md:flex">
                  <div
                    className={`flex flex-col justify-center p-8 text-center md:w-64 ${
                      event.status === "Upcoming"
                        ? "bg-blue-600 text-white"
                        : event.status === "Recent"
                          ? "bg-slate-800 text-white"
                          : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest opacity-80">
                      {event.status}
                    </p>
                    <p className="text-lg font-bold">{event.date}</p>
                  </div>
                  <div className="flex-1 p-8">
                    <h3 className="mb-3 text-2xl font-bold leading-tight text-slate-900">
                      {event.title}
                    </h3>
                    <p className="mb-6 flex items-center gap-1.5 font-mono text-sm font-semibold text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {event.location}
                    </p>
                    <p className="mb-6 leading-relaxed text-slate-600">{event.description}</p>

                    {event.themes ? (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {event.themes.map((theme) => (
                          <Badge
                            key={theme}
                            variant="secondary"
                            className="border-slate-100 bg-slate-50 text-slate-600 shadow-none"
                          >
                            {theme}
                          </Badge>
                        ))}
                      </div>
                    ) : null}

                    {event.image ? (
                      <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-slate-100">
                        <Image src={event.image} alt={event.title} fill className="object-cover" />
                      </div>
                    ) : null}
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
