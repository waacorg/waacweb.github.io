import fs from "node:fs/promises"
import path from "node:path"
import { NewsPostClient } from "@/components/news/NewsPostClient"
import newsDataImport from "@/data/newsData.json"

const newsData = newsDataImport as Record<string, any>

export async function generateStaticParams() {
  return Object.keys(newsData).map((id) => ({
    id,
  }))
}

async function loadHtmlFromPublic(publicUrl: string) {
  const filePath = path.join(process.cwd(), "public", publicUrl.replace(/^\/+/, ""))
  const rawHtml = await fs.readFile(filePath, "utf8")

  // 只取 body，避免把整份 html/head 嵌进正文区域
  const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  let html = bodyMatch ? bodyMatch[1] : rawHtml

  // 去掉 script，降低风险
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "")

  // 把相对路径改成基于 public 的绝对路径
  // 例如 73.files/image001.png -> /news-html/73.files/image001.png
  const baseUrl = path.posix.dirname(publicUrl)

  html = html.replace(
    /(src|href)=["'](?!https?:|\/\/|\/|#|data:|mailto:)([^"']+)["']/gi,
    (_match, attr, url) => `${attr}="${path.posix.join(baseUrl, url)}"`
  )

  return html
}

export default async function NewsPost({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = newsData[id]

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

  let content = post.content || ""

  // 如果配置了 htmlUrl，就读取 public 里的 .htm 内容并嵌入当前页面
  if (post.htmlUrl) {
    content = await loadHtmlFromPublic(post.htmlUrl)
  }

  const cleanedContent = content
    .replace(/src="\/images\//g, 'src="/images/')
    .replace(/src="\//g, 'src="/')

  return (
    <div className="container mx-auto px-4 py-20">
      <NewsPostClient post={{ ...post, content: cleanedContent }} />
    </div>
  )
}