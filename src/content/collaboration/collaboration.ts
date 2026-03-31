import collaborationData from "./data/collaborationData.json"
import collaborationDetails from "./data/collaborationDetails.json"
import type {
  CollaborationDetail,
  CollaborationProjectLink,
} from "@/shared/types/content"

interface RawCollaborationProject {
  title: string
  link: string
}

interface RawCollaborationSection {
  category: string
  projects: RawCollaborationProject[]
}

function getProjectSlug(link: string) {
  return link.split("/").pop()?.replace(".html", "") ?? ""
}

const sections = (collaborationData as RawCollaborationSection[]).map((section) => ({
  ...section,
  projects: section.projects.map(
    (project): CollaborationProjectLink => ({
      ...project,
      slug: getProjectSlug(project.link),
    })
  ),
}))

const details = collaborationDetails as CollaborationDetail[]

export function getCollaborationSections() {
  return sections
}

export function getCollaborationDetailById(id: string) {
  return details.find((detail) => detail.id === id)
}

export function getCollaborationDetailIds() {
  return details.map((detail) => detail.id)
}
