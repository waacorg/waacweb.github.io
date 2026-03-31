import newsData from "./data/newsData.json"
import type { NewsPost } from "@/shared/types/content"

const rawNewsPosts = Object.entries(newsData).map(([id, post]) => ({
  ...post,
  id,
})) as NewsPost[]

function parseNewsDate(date: string) {
  return new Date(date.replace(/\//g, "-"))
}

export function getAllNewsPosts() {
  return [...rawNewsPosts].sort((left, right) => {
    return parseNewsDate(right.date).getTime() - parseNewsDate(left.date).getTime()
  })
}

export function getLatestNewsPosts(limit = 3) {
  return getAllNewsPosts().slice(0, limit)
}

export function getNewsPostById(id: string) {
  return rawNewsPosts.find((post) => post.id === id)
}

export function getNewsPostIds() {
  return rawNewsPosts.map((post) => post.id)
}
