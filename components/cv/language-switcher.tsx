import Link from "next/link"
import { type Locale, localeLabels, localePath, locales } from "@/lib/cv/locales"

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  return (
    <nav aria-label={label} className="inline-flex h-10 items-center gap-0.5 rounded-full bg-white p-1 shadow-lg sm:h-11">
      {locales.map((option) => {
        const active = option === locale

        return (
          <Link
            key={option}
            href={localePath(option)}
            hrefLang={option}
            aria-current={active ? "page" : undefined}
            className={`inline-flex h-full min-w-[40px] items-center justify-center rounded-full px-3 text-[13px] font-medium leading-none transition-colors sm:text-sm ${
              active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {localeLabels[option]}
          </Link>
        )
      })}
    </nav>
  )
}
