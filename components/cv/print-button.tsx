import type { CVContent } from "@/lib/cv/content"
import { type Locale, pdfFileName } from "@/lib/cv/locales"

export function PrintButton({ locale, labels }: { locale: Locale; labels: CVContent["controls"] }) {
  const fileName = pdfFileName(locale)

  return (
    <div className="flex w-full items-center justify-center gap-2 sm:w-auto">
      <a
        href={`/${fileName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-10 min-w-[86px] items-center justify-center whitespace-nowrap rounded-full bg-white px-3.5 text-center text-[13px] font-medium leading-none text-slate-900 shadow-lg transition-all hover:shadow-xl sm:h-11 sm:min-w-[96px] sm:px-4 sm:text-sm sm:hover:scale-105"
      >
        {labels.print}
      </a>
      <a
        href={`/${fileName}`}
        download={fileName}
        className="inline-flex h-10 min-w-[116px] items-center justify-center whitespace-nowrap rounded-full bg-slate-900 px-3.5 text-center text-[13px] font-medium leading-none text-white shadow-lg transition-all hover:shadow-xl sm:h-11 sm:min-w-[128px] sm:px-4 sm:text-sm sm:hover:scale-105"
      >
        {labels.download}
      </a>
    </div>
  )
}
