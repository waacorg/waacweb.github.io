import { NewsPostClient } from "@/components/news/NewsPostClient"
import newsDataImport from "@/data/newsData.json"

const newsData = newsDataImport as Record<string, any>;

export async function generateStaticParams() {
    return Object.keys(newsData).map((id) => ({
        id: id,
    }))
}

export default async function NewsPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const post = newsData[id] || {
        title: "Post Not Found",
        date: "",
        content: "<p>The requested news post could not be found.</p>"
    }

    // Clean the content slightly to remove legacy relative paths if any
    const cleanedContent = post.content.replace(/src="\/images\//g, 'src="/images/')
        .replace(/src="\//g, 'src="/');

    return (
        <div className="container mx-auto px-4 py-20">
            <NewsPostClient post={{ ...post, content: cleanedContent }} />
        </div>
    )
}
