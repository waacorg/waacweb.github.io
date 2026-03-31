import type { EventItem } from "@/shared/types/content"

const events: EventItem[] = [
  {
    title: "3rd World Conference on Artificial Consciousness (WCAC 2025)",
    date: "December 26-28, 2025",
    location: "Northwestern Polytechnical University Taicang Campus (Suzhou, China)",
    status: "Upcoming",
    description:
      "The first offline gathering of the conference, focusing on exploration of fundamental theories and practical applications.",
    themes: ["DIKWP framework", "Embodied intelligence", "Ethics and Governance", "Evaluation Standards"],
  },
  {
    title: "WAAC Annual Meeting 2025",
    date: "October 2025",
    location: "Singapore",
    status: "Upcoming",
    description:
      "Annual gathering focused on global evaluation standards and human-aligned AI governance.",
    themes: ["Global standards", "AI alignment", "Ethical systems design"],
  },
  {
    title:
      "WAAC Annual Meeting & Preparatory Meeting for the 3rd World Artificial Consciousness Conference",
    date: "July 2025",
    location: "Global (Haikou)",
    status: "Recent",
    description:
      "Focus on Proactive Medicine, Standards for Artificial Consciousness, and Global Ethical Governance.",
    image: "/images/Annual_Meeting/hz.jpg",
  },
  {
    title: "WAAC Inauguration Ceremony",
    date: "April 2025",
    location: "Paris, France",
    status: "Recent",
    description:
      "The formal establishment of WAAC, co-initiated by four international academic institutions.",
  },
  {
    title: "The 2nd World Conference on Artificial Consciousness (AC2024)",
    date: "December 2024",
    location: "Global (Online)",
    status: "Past",
    description:
      "Theme: Proactive Medicine: AI Embracing the Integration of Traditional and Modern Medicine.",
    image: "/images/Annual_Meeting/Main4.png",
  },
  {
    title: "2nd World Conference on Artificial Consciousness (Prep) & 1st DIKWP Cup",
    date: "June 2024",
    location: "Global & China",
    status: "Past",
    description:
      "Preparatory meeting drawing leading figures from technology, ethics, and public policy.",
    image: "/images/Annual_Meeting/Main1.png",
  },
  {
    title: "The Inaugural World Conference on Artificial Consciousness (AC2023)",
    date: "August 2023",
    location: "Global (Online)",
    status: "Past",
    description:
      "Co-hosted by the DIKWP research team at Hainan University and Nagasaki Institute of Applied Science.",
    image: "/images/Annual_Meeting/Main3.png",
  },
]

export function getEvents() {
  return events
}
