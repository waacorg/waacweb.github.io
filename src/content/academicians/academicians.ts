import academiciansData from "./data/academiciansData.json"
import type { Academician } from "@/shared/types/content"

const academicians = academiciansData as Academician[]

export function getAcademicians() {
  return academicians
}

export function getFeaturedAcademicians(limit = 3) {
  return academicians.slice(0, limit)
}
