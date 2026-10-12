"use client"

import { ExternalLink, Layers, Map as MapIcon, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { ProjectCard } from "@/components/cv/project-card"
import type { CVContent } from "@/lib/cv/content"

type CVPage3Props = {
  content: CVContent["page3"]
  pdfMode?: boolean
}

const pdfImage = (name: string) => `/images/pdf/${name}.webp`

const mapLinks = [
  { label: "mapy.czechglobe.cz", href: "https://mapy.czechglobe.cz" },
  { label: "Google Play", href: "https://play.google.com/store/apps/details?id=cz.czechglobe.mapy" },
  { label: "App Store", href: "https://apps.apple.com/cz/app/czechglobe-mapy/id6796352172" },
]

export function CVPage3({ content: t, pdfMode = false }: CVPage3Props) {
  return (
    <div className="cv-page w-full md:w-[210mm] md:h-[297mm] bg-amber-50/50 shadow-2xl print:shadow-none overflow-hidden relative print:w-[210mm] print:h-[297mm]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2378350f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700" />

      <div className="relative p-4 pt-10 pb-7 md:p-8 md:pb-24 print:h-full print:p-8 print:pb-24">
        {/* Header */}
        <div className="mb-5 pb-4 border-b border-amber-200">
          <h1 className="text-2xl font-bold text-amber-900 tracking-tight">{t.title}</h1>
          <p className="text-sm text-stone-500 mt-1">{t.subtitle}</p>
        </div>

        {/* Map Portal */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
              <MapIcon className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.mapTitle}</h2>
          </div>

          {/* CzechGlobe Mapy - Featured */}
          <div className="p-5 bg-gradient-to-br from-amber-800 to-stone-900 rounded-xl text-white">
            <div className="flex flex-col md:flex-row items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Image
                  src={pdfMode ? pdfImage("czechglobe-mapy-logo") : "/images/czechglobe-mapy-logo.png"}
                  alt="CzechGlobe Mapy"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  unoptimized={pdfMode}
                />
                <div>
                  <h3 className="text-lg font-bold">CzechGlobe Mapy</h3>
                  <p className="text-sm text-amber-300">{t.mapy.subtitle}</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium whitespace-nowrap mt-2 md:mt-0">
                Web · Android · iOS
              </div>
            </div>
            <p className="text-xs text-amber-100 leading-relaxed mb-4">
              {t.mapy.description}
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {t.mapy.stats.map((stat) => (
                <div key={stat.label} className="px-3 py-2 bg-white/10 rounded-lg">
                  <p className="text-lg font-bold leading-tight text-amber-300">{stat.value}</p>
                  <p className="text-[10px] text-amber-100">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {mapLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 rounded-full text-[10px] font-medium text-amber-200 hover:bg-amber-500/30 transition-colors"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Vite", "MapLibre GL", "React Native", "Expo", "GeoServer", "WMS / WMTS", "Python", "Docker", "GitLab CI/CD", "EAS", "Fastlane"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 rounded text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Internal Systems */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Layers className="w-4 h-4 text-amber-700" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.internalTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ProjectCard
              title="MeteoDBS"
              subtitle={t.meteodbs.subtitle}
              description={t.meteodbs.description}
              tags={["Next.js", "MySQL", "FreeIPA / LDAP", "GitLab CI/CD"]}
              logo="/images/meteodbs-logo.png"
              pdfLogo={pdfImage("meteodbs-logo")}
              pdfMode={pdfMode}
            />
            <ProjectCard
              title="Cyber CzechGlobe"
              subtitle={t.cyber.subtitle}
              description={t.cyber.description}
              tags={["Next.js", "SQLite", "FreeIPA", "SELinux", "systemd"]}
              logo="/images/cyber-czechglobe-logo.png"
              pdfLogo={pdfImage("cyber-czechglobe-logo")}
              pdfMode={pdfMode}
            />
          </div>
        </div>

        {/* Cybersecurity */}
        <div className="mb-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.securityTitle}</h2>
          </div>

          <div className="p-4 bg-white rounded-xl border border-amber-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
              {t.security.map((item) => (
                <div key={item.title}>
                  <h4 className="text-[11px] font-bold text-amber-900 mb-0.5">{item.title}</h4>
                  <p className="text-[10px] text-stone-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: text above the divider line. On print we keep absolute positioning at bottom. */}
        <div className="mt-4 md:mt-6 print:mt-0 print:absolute print:bottom-8 print:left-8 print:right-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[10px] text-stone-400">
            <p className="whitespace-nowrap">
              Ing. Tomáš Chovančák | tchovancak10@gmail.com | +421 917 917 384
            </p>
            <p className="whitespace-nowrap">
              tomas.chovancak.sk | github.com/ToChoSK
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
