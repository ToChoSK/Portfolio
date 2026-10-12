import { notFound } from "next/navigation"
import { CVPage1 } from "@/components/cv/cv-page-1"
import { CVPage2 } from "@/components/cv/cv-page-2"
import { CVPage3 } from "@/components/cv/cv-page-3"
import { LanguageSwitcher } from "@/components/cv/language-switcher"
import { PrintButton } from "@/components/cv/print-button"
import { getContent } from "@/lib/cv/content"
import { isLocale } from "@/lib/cv/locales"

type HomeProps = {
  params: Promise<{
    lang: string
  }>
  searchParams?: Promise<{
    pdf?: string
  }>
}

export default async function Home({ params, searchParams }: HomeProps) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const content = getContent(lang)
  const query = await searchParams
  const pdfMode = query?.pdf === "1"

  return (
    <main className="min-h-screen bg-neutral-100 py-4 md:py-8 print:bg-white print:py-0">
      <div className="flex flex-col items-center gap-4 md:gap-8 print:gap-0">
        <CVPage1 content={content.page1} pdfMode={pdfMode} />
        <CVPage2 content={content.page2} pdfMode={pdfMode} />
        <CVPage3 content={content.page3} pdfMode={pdfMode} />
      </div>
      <div className="fixed bottom-4 left-1/2 z-50 flex w-[min(calc(100vw-2rem),17rem)] -translate-x-1/2 flex-col items-center gap-2 sm:left-auto sm:right-4 sm:w-auto sm:translate-x-0 sm:flex-row print:hidden">
        <LanguageSwitcher locale={lang} label={content.controls.language} />
        <PrintButton locale={lang} labels={content.controls} />
      </div>
    </main>
  )
}
