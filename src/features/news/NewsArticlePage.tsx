import fs from "node:fs/promises"
import path from "node:path"
import { getNewsPostById, getNewsPostIds } from "@/content/news/news"
import { NewsPostClient } from "@/features/news/NewsPostClient"

async function loadHtmlFromPublic(publicUrl: string) {
  const filePath = path.join(process.cwd(), "public", publicUrl.replace(/^\/+/, ""))
  const rawHtml = await fs.readFile(filePath, "utf8")

  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  let html = bodyMatch ? bodyMatch[1] : rawHtml

  html = html.replace(/<script[\s\S]*?<\/script>/gi, "")

  const baseUrl = path.posix.dirname(publicUrl)
  html = html.replace(
    /(src|href)=["'](?!https?:|\/\/|\/|#|data:|mailto:)([^"']+)["']/gi,
    (_match, attr, url) => `${attr}="${path.posix.join(baseUrl, url)}"`
  )

  return html
}

function normalizeNewsContent(content: string) {
  return content.replace(/src="\/images\//g, 'src="/images/').replace(/src="\//g, 'src="/')
}

export function generateNewsStaticParams() {
  return getNewsPostIds().map((id) => ({ id }))
}

export async function NewsArticlePage({ id }: { id: string }) {
  const post = getNewsPostById(id)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20">
        <NewsPostClient
          post={{
            title: "Post Not Found",
            date: "",
            content: "<p>The requested news post could not be found.</p>",
          }}
        />
      </div>
    )
  }

  const content = post.htmlUrl ? await loadHtmlFromPublic(post.htmlUrl) : post.content || ""
  const cleanedContent = normalizeNewsContent(content)

  return (
    <div className="container mx-auto px-4 py-20">
      <NewsPostClient post={{ ...post, content: cleanedContent }} />
    </div>
  )
}
