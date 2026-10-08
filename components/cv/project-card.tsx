"use client"

import { ExternalLink, Youtube } from "lucide-react"
import Image from "next/image"

export function ProjectCard({
  title,
  url,
  subtitle,
  description,
  tags,
  logo,
  pdfLogo,
  pdfMode = false,
}: {
  title: string
  url?: string
  subtitle?: string
  description: string
  tags: string[]
  logo: string
  pdfLogo?: string
  pdfMode?: boolean
}) {
  const href = url ? `https://${url}` : undefined
  const content = (
    <>
      <div className="flex items-start justify-between mb-2">
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-amber-50 flex items-center justify-center">
          <Image
            src={pdfMode && pdfLogo ? pdfLogo : logo}
            alt={title}
            width={40}
            height={40}
            className="object-cover"
            unoptimized={pdfMode}
          />
        </div>
        {url && (
          <span className="text-stone-400 group-hover:text-amber-600 transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        )}
      </div>
      <h3 className="text-sm font-bold text-amber-900 mb-1">{title}</h3>
      {url && <p className="text-[10px] text-stone-500 mb-2">{url}</p>}
      {!url && subtitle && <p className="text-[10px] text-stone-500 mb-2">{subtitle}</p>}
      <p className="text-[11px] text-stone-600 leading-relaxed mb-3">{description}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 bg-amber-50 rounded text-[9px] text-amber-700">
            {tag}
          </span>
        ))}
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full p-4 bg-white rounded-xl border border-amber-200 hover:border-amber-400 transition-colors group"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="h-full p-4 bg-white rounded-xl border border-amber-200 hover:border-amber-400 transition-colors group">
      {content}
    </div>
  )
}

export function MiniProjectCard({
  title,
  url,
  href,
  description,
  logo,
  pdfLogo,
  pdfMode = false,
  icon,
}: {
  title: string
  url?: string
  href?: string
  description: string
  logo?: string
  pdfLogo?: string
  pdfMode?: boolean
  icon?: "youtube"
}) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-amber-50 flex-shrink-0 flex items-center justify-center">
        {icon === "youtube" ? (
          <Youtube className="w-7 h-7 text-red-600" />
        ) : (
          <Image
            src={pdfMode && pdfLogo ? pdfLogo : logo ?? ""}
            alt={title}
            width={40}
            height={40}
            className="object-cover"
            unoptimized={pdfMode}
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-[11px] font-bold text-amber-900 mb-0.5">{title}</h4>
        {url && <p className="text-[9px] text-stone-500 mb-1">{url}</p>}
        <p className="text-[10px] text-stone-500">{description}</p>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-full min-h-[80px] p-3 bg-white rounded-lg border border-amber-200 flex gap-3 hover:border-amber-400 transition-colors"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="h-full min-h-[80px] p-3 bg-white rounded-lg border border-amber-200 flex gap-3">
      {content}
    </div>
  )
}
