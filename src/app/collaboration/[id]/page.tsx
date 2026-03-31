import {
  CollaborationDetailPage,
  generateCollaborationStaticParams,
} from "@/features/collaboration/CollaborationDetailPage"

export const generateStaticParams = generateCollaborationStaticParams

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return <CollaborationDetailPage id={id} />
}
