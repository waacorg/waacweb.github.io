import { notFound } from "next/navigation"
import {
  getCollaborationDetailById,
  getCollaborationDetailIds,
} from "@/content/collaboration/collaboration"
import { getCollaborationCategoryMeta } from "@/features/collaboration/categoryMeta"

export function generateCollaborationStaticParams() {
  return getCollaborationDetailIds().map((id) => ({ id }))
}

export function CollaborationDetailPage({ id }: { id: string }) {
  const project = getCollaborationDetailById(id)

  if (!project) {
    notFound()
  }

  const meta = getCollaborationCategoryMeta(project.category)
  const Icon = meta.icon

  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      <div className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2 font-medium text-blue-600">
              <Icon className="h-5 w-5" />
              <span>{project.category}</span>
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-4xl px-6 lg:px-8">
        <div className="bg-white p-8 md:p-0">
          <div
            className="prose prose-lg max-w-none leading-relaxed prose-a:text-blue-600 prose-headings:text-slate-900 prose-ol:text-slate-700 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 hover:prose-a:text-blue-500"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
      </div>
    </div>
  )
}

