import { cs } from "@/lib/cv/content/cs"
import { en } from "@/lib/cv/content/en"
import { sk } from "@/lib/cv/content/sk"
import type { Locale } from "@/lib/cv/locales"

// Slovak is the source text; the other languages have to keep its shape.
export type CVContent = typeof sk

const content: Record<Locale, CVContent> = { sk, en, cs }

export function getContent(locale: Locale): CVContent {
  return content[locale]
}
