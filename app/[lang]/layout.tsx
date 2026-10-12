import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { notFound } from 'next/navigation'
import { getContent } from '@/lib/cv/content'
import { isLocale, localePath, locales } from '@/lib/cv/locales'
import '../globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

type LayoutProps = Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>

// Only the known languages exist; anything else under "/" is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  const { lang } = await params

  if (!isLocale(lang)) {
    return {}
  }

  const { meta } = getContent(lang)

  return {
    metadataBase: new URL('https://tomas.chovancak.sk'),
    title: meta.title,
    description: meta.description,
    generator: 'v0.app',
    icons: {
      icon: '/tch-icon-favicon.png',
      apple: '/tch-apple-icon.png',
    },
    alternates: {
      canonical: localePath(lang),
      languages: Object.fromEntries(locales.map((locale) => [locale, localePath(locale)])),
    },
  }
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  return (
    <html lang={lang}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
