"use client"

import { ExternalLink, Star, ShoppingCart, Youtube } from "lucide-react"
import Image from "next/image"

type CVPage2Props = {
  pdfMode?: boolean
}

const pdfImage = (name: string) => `/images/pdf/${name}.webp`

export function CVPage2({ pdfMode = false }: CVPage2Props) {
  return (
    <div className="cv-page w-[210mm] h-[297mm] bg-amber-50/50 shadow-2xl print:shadow-none overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2378350f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700" />
      
      <div className="p-8 pt-10 pb-24 relative">
        {/* Header */}
        <div className="mb-5 pb-4 border-b border-amber-200">
          <h1 className="text-2xl font-bold text-amber-900 tracking-tight">PROJEKTOVÉ PORTFÓLIO</h1>
          <p className="text-sm text-stone-500 mt-1">Výber realizovaných aplikácií, webov a projektov.</p>
        </div>

        {/* Main Projects */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">Hlavné projekty</h2>
          </div>

          {/* Fluxprism - Featured */}
          <div className="mb-4 p-5 bg-gradient-to-br from-amber-800 to-stone-900 rounded-xl text-white">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Image
                  src={pdfMode ? pdfImage("fluxprism-logo") : "/images/fluxprism-logo.png"}
                  alt="Fluxprism"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  unoptimized={pdfMode}
                />
                <div>
                  <h3 className="text-lg font-bold">Fluxprism</h3>
                  <p className="text-sm text-amber-300">Interná firemná aplikácia pre CzechGlobe</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium">
                Hlavný projekt
              </div>
            </div>
            <p className="text-xs text-amber-100 leading-relaxed mb-4">
              Komplexný systém pre evidenciu environmentálnych meraní, meteorologických zariadení, lokalít, používateľov, rolí, úloh, súborov a auditných záznamov. Funguje 2 roky v ostrej prevádzke a obsluhuje 150 miliónov meteorologických záznamov v databáze. Súčasťou systému je aj vizualizácia a prezentácia dát užívateľom
            </p>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "React", "Next.js", "Tailwind CSS", "Docker", "Rocky Linux"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 rounded text-[10px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Other Main Projects Grid */}
          <div className="grid grid-cols-2 gap-3">
            <ProjectCard
              title="Slovenské ľudovky"
              url="slovenskeludovky.sk"
              description="Folklórny projekt pre vyhľadávanie a prezentáciu slovenských ľudových piesní, prepájajúci webovú stránku, Android aplikáciu vydanú na Google Play a YouTube kanál s takmer miliónom pozretí."
              tags={["React Native", "Google Play", "Obsah"]}
              logo="/images/slovenskeludovky-logo.png"
              pdfLogo={pdfImage("slovenskeludovky-logo")}
              pdfMode={pdfMode}
            />
            <ProjectCard
              title="Dotykáče"
              url="app.dotykace.com"
              description="Realizácia projektového nápadu JAMU, interaktívna chatová aplikácia s vetveným dialógom, vizuálnym editorom konverzačných tokov, animáciami a responzívnym používateľským zážitkom."
              tags={["Next.js", "Firestore", "Interaktívne UI"]}
              logo="/images/dotykace-logo.png"
              pdfLogo={pdfImage("dotykace-logo")}
              pdfMode={pdfMode}
            />
          </div>
        </div>

        {/* Hobby Projects */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-700" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">Hobby projekty</h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <MiniProjectCard 
              title="SrandyPandy" 
              url="Google Play"
              href="https://play.google.com/store/apps/details?id=sk.tocho.srandypandy&pcampaignid=web_share"
              description="Flutter aplikácia pre Android zameraná na vtipy" 
              logo="/images/srandypandy-logo.png"
              pdfLogo={pdfImage("srandypandy-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="akovybavit.eu" 
              url="akovybavit.eu" 
              href="https://akovybavit.eu"
              description="Informačný web s praktickým obsahom" 
              logo="/images/akovybavit-logo.png"
              pdfLogo={pdfImage("akovybavit-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="Hroby slávnych" 
              url="hrobyslavnych.sk" 
              href="https://hrobyslavnych.sk"
              description="Obsahový web - miesta pochovania slovenských historických osobností"
              logo="/images/hrobyslavnych-logo.png"
              pdfLogo={pdfImage("hrobyslavnych-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="Šarišský slovník" 
              url="slovniksaris.eu" 
              href="https://slovniksaris.eu"
              description="Regionálny slovníkový web" 
              logo="/images/sarisskyslovnik-logo.png"
              pdfLogo={pdfImage("sarisskyslovnik-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="Gromanka" 
              url="gromanka.eu" 
              href="https://gromanka.eu"
              description="Prezentačný web OZ"
              logo="/images/gromanka-logo.png"
              pdfLogo={pdfImage("gromanka-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="YouTube kanál" 
              url="Slovenské ľudovky" 
              href="https://www.youtube.com/@slovenskeludovky"
              description="Folklórny kanál s ľudovými piesňami" 
              icon="youtube"
            />
          </div>
        </div>

        {/* Commercial Projects */}
        <div className="mb-0">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-amber-700" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">Komerčné projekty</h2>
          </div>

          <div className="p-4 bg-white rounded-xl border border-amber-200">
            <div className="flex flex-wrap gap-2.5 mb-3">
              {[
                { label: "stabera.sk", href: "https://stabera.sk" },
                { label: "valtim.sk", href: "https://valtim.sk" },
                { label: "hlklima.eu", href: "https://hlklima.eu" },
                { label: "chovancak.sk (e-shop)", href: "https://chovancak.sk" },
                { label: "3E-vision.sk", href: "https://3e-vision.sk" },
                { label: "satyrobiacloveka.sk", href: "https://satyrobiacloveka.sk" },
              ].map((site) => (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-amber-50 rounded-lg text-xs font-medium text-amber-800 border border-amber-200 hover:border-amber-400 transition-colors"
                >
                  {site.label}
                </a>
              ))}
            </div>
            <p className="text-[10px] text-stone-500 leading-relaxed">
              Tieto projekty zahŕňajú návrh používateľského rozhrania, implementáciu, správu repozitárov, konfiguráciu domén, nasadenie, úpravy podľa požiadaviek klientov a dlhodobú technickú údržbu.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 right-8 pt-4 border-t border-amber-200 flex justify-between items-center">
          <p className="text-[10px] text-stone-400">
            Ing. Tomáš Chovančák | tchovancak10@gmail.com | +421 917 917 384
          </p>
          <p className="text-[10px] text-stone-400">
            tomas.chovanak.sk | github.com/ToChoSK
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ 
  title, 
  url, 
  description, 
  tags, 
  logo,
  pdfLogo,
  pdfMode = false,
}: { 
  title: string
  url?: string
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

function MiniProjectCard({ 
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
