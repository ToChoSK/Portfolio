import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ing. Tomáš Chovančák - Full-stack vývojár',
  description: 'CV a portfólio Ing. Tomáša Chovančáka - Full-stack vývojár, IT špecialista, kyberbezpečnosť',
  generator: 'v0.app',
  icons: {
    icon: '/tch-icon-favicon.png',
    apple: '/tch-apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
