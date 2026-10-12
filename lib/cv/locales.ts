export const locales = ["sk", "en", "cs"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "sk"

export const localeLabels: Record<Locale, string> = {
  sk: "SK",
  en: "EN",
  cs: "CZ",
}

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale)
}

// The default locale is served at "/", the others under their own prefix.
export function localePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`
}

// The default locale keeps the original file name so existing links to the PDF stay valid.
export function pdfFileName(locale: Locale) {
  return locale === defaultLocale ? "tomas-chovancak-cv.pdf" : `tomas-chovancak-cv-${locale}.pdf`
}
