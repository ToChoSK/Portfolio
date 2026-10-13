"use client"

import { Star, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { MiniProjectCard, ProjectCard } from "@/components/cv/project-card"
import type { CVContent } from "@/lib/cv/content"

type CVPage2Props = {
  content: CVContent["page2"]
  pdfMode?: boolean
}

const pdfImage = (name: string) => `/images/pdf/${name}.webp`

export function CVPage2({ content: t, pdfMode = false }: CVPage2Props) {
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

        {/* Main Projects */}
         <div className="mb-6">
           <div className="flex items-center gap-2 mb-3">
             <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
               <Star className="w-4 h-4 text-white" />
             </div>
             <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.mainProjectsTitle}</h2>
           </div>

           {/* Fluxprism - Featured */}
           <div className="mb-4 p-5 bg-gradient-to-br from-amber-800 to-stone-900 rounded-xl text-white">
             <div className="flex flex-col md:flex-row items-start justify-between mb-3">
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
                   <p className="text-sm text-amber-300">{t.fluxprism.subtitle}</p>
                 </div>
               </div>
               <div className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium whitespace-nowrap mt-2 md:mt-0">
                 {t.fluxprism.badge}
               </div>
             </div>
             <p className="text-xs text-amber-100 leading-relaxed mb-4">
               {t.fluxprism.description}
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
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <ProjectCard
              title="Slovenské ľudovky"
              url="slovenskeludovky.sk"
              description={t.ludovky.description}
              tags={["React Native", "Google Play", t.ludovky.tag]}
              logo="/images/slovenskeludovky-logo.png"
              pdfLogo={pdfImage("slovenskeludovky-logo")}
              pdfMode={pdfMode}
            />
            <ProjectCard
              title="Dotykáče"
              url="app.dotykace.com"
              description={t.dotykace.description}
              tags={["Next.js", "Firestore", t.dotykace.tag]}
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
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.hobbyTitle}</h2>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <MiniProjectCard
              title="SrandyPandy" 
              url="Google Play"
              href="https://play.google.com/store/apps/details?id=sk.tocho.srandypandy&pcampaignid=web_share"
              description={t.hobby.srandypandy}
              logo="/images/srandypandy-logo.png"
              pdfLogo={pdfImage("srandypandy-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="akovybavit.eu" 
              url="akovybavit.eu" 
              href="https://akovybavit.eu"
              description={t.hobby.akovybavit}
              logo="/images/akovybavit-logo.png"
              pdfLogo={pdfImage("akovybavit-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="Hroby slávnych" 
              url="hrobyslavnych.sk" 
              href="https://hrobyslavnych.sk"
              description={t.hobby.hrobyslavnych}
              logo="/images/hrobyslavnych-logo.png"
              pdfLogo={pdfImage("hrobyslavnych-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="Šarišský slovník" 
              url="slovniksaris.eu" 
              href="https://slovniksaris.eu"
              description={t.hobby.sarisskyslovnik}
              logo="/images/sarisskyslovnik-logo.png"
              pdfLogo={pdfImage("sarisskyslovnik-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title="Gromanka" 
              url="gromanka.eu" 
              href="https://gromanka.eu"
              description={t.hobby.gromanka}
              logo="/images/gromanka-logo.png"
              pdfLogo={pdfImage("gromanka-logo")}
              pdfMode={pdfMode}
            />
            <MiniProjectCard 
              title={t.hobby.youtubeTitle}
              url="Slovenské ľudovky" 
              href="https://www.youtube.com/@slovenskeludovky"
              description={t.hobby.youtube}
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
            <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.commercialTitle}</h2>
          </div>

          <div className="p-4 bg-white rounded-xl border border-amber-200">
            <div className="flex flex-wrap gap-2.5 mb-3">
              {[
                { label: "stabera.sk", href: "https://stabera.sk" },
                { label: "valtim.sk", href: "https://valtim.sk" },
                { label: "hlklima.eu", href: "https://hlklima.eu" },
                { label: "chovancak.sk (e-shop)", href: "https://chovancak.sk" },
                { label: "3E-vision.sk", href: "https://3e-vision.sk" },
                { label: "tpzvar.sk", href: "https://tpzvar.sk" },
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
              {t.commercialText}
            </p>
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
