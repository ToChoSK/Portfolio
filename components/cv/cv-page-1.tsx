"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Github, Briefcase, GraduationCap, Code, Globe } from "lucide-react"
import type { CVContent } from "@/lib/cv/content"

type CVPage1Props = {
  content: CVContent["page1"]
  pdfMode?: boolean
}

const pdfImage = (name: string) => `/images/pdf/${name}.webp`

export function CVPage1({ content: t, pdfMode = false }: CVPage1Props) {
  return (
    <div className="cv-page w-full md:w-[210mm] md:h-[297mm] bg-amber-50/50 shadow-2xl print:shadow-none overflow-hidden relative print:w-[210mm] print:h-[297mm]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2378350f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700" />
      
      <div className="flex flex-col md:flex-row h-full relative">
        {/* Left Sidebar */}
        <div className="hidden md:flex w-full md:w-[75mm] bg-gradient-to-b from-amber-900 to-stone-900 text-white p-6 flex-col print:flex print:w-[75mm]">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-amber-700/40 shadow-xl">
              <Image
                src={pdfMode ? "/images/pdf/profile.jpg" : "/images/profile.jpg"}
                alt="Tomáš Chovančák"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                unoptimized={pdfMode}
              />
            </div>
          </div>

          {/* Contact */}
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-700" />
              {t.contactTitle}
            </h3>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:tchovancak10@gmail.com" className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="text-xs">tchovancak10@gmail.com</span>
              </a>
              <a href="tel:+421917917384" className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-amber-500" />
                <span className="text-xs">+421 917 917 384</span>
              </a>
              <div className="flex items-center gap-3 text-amber-100">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-xs">{t.location}</span>
              </div>
              <a href="https://github.com/ToChoSK" className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors">
                <Github className="w-4 h-4 text-amber-500" />
                <span className="text-xs">github.com/ToChoSK</span>
              </a>
              <a href="https://tomas.chovancak.sk" className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-amber-500" />
                <span className="text-xs">tomas.chovancak.sk</span>
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-700" />
              {t.technologiesTitle}
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">{t.techGroups.main}</p>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Prisma"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-amber-800/50 rounded text-[10px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">Frontend</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Tailwind CSS", "Figma", "Responsive"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-stone-800/60 rounded text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">Backend & DB</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Express", "REST API", "JWT", "Zod", "Swagger", "Firebase", "Supabase"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-stone-800/60 rounded text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">DevOps</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Docker", "Git", "GitLab", "CI/CD", "Linux", "Nginx", "systemd", "Vercel", "DNS", "Cloudflare", "FreeIPA", "SELinux"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-stone-800/60 rounded text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">{t.techGroups.webTools}</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Google Search Console", "Google Analytics", "Google AdSense"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-stone-800/60 rounded text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">{t.techGroups.other}</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Java", "C#", "Flutter", "React Native", "Expo", "MapLibre GL"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-stone-800/60 rounded text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-700" />
              {t.languagesTitle}
            </h3>
            <div className="space-y-2">
              {t.languages.map((language) => (
                <div key={language.name} className="flex justify-between items-center">
                  <span className="text-xs">{language.name}</span>
                  <span className="text-[10px] text-amber-400">{language.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="mt-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-700" />
              {t.interestsTitle}
            </h3>
            <p className="text-[10px] text-amber-200 leading-relaxed">
              {t.interests}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 flex flex-col print:p-8">
           <div className="mb-4 flex justify-center md:hidden print:hidden">
             <div className="h-24 w-24 overflow-hidden rounded-full bg-amber-100 shadow-lg ring-4 ring-amber-700/20">
               <Image
                 src={pdfMode ? "/images/pdf/profile.jpg" : "/images/profile.jpg"}
                 alt="Tomáš Chovančák"
                 width={96}
                 height={96}
                 className="h-full w-full object-cover"
                 unoptimized={pdfMode}
               />
             </div>
           </div>

           {/* Header */}
           <div className="mb-3 md:mb-5 pb-3 md:pb-5 border-b border-amber-200">
             <h1 className="text-lg md:text-3xl font-bold text-amber-900 tracking-tight mb-1">
               ING. TOMÁŠ CHOVANČÁK
             </h1>
             <p className="text-xs md:text-sm font-medium text-amber-700">
               {t.role}
             </p>
           </div>

          {/* Profile */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.profileTitle}</h2>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              {t.profile}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.experienceTitle}</h2>
            </div>
            
            <div className="space-y-4">
              {t.jobs.map((job, index) => (
                <div key={job.title} className="relative pl-4 border-l-2 border-amber-300">
                  <div className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${index === 0 ? "bg-amber-700" : "bg-amber-500"}`} />
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xs font-bold text-amber-900">{job.title}</h3>
                    <span className="text-[10px] text-stone-500 whitespace-nowrap ml-2">{job.period}</span>
                  </div>
                  <p className="text-[10px] font-medium text-amber-700 mb-2">{job.company}</p>
                  <ul className="text-[10px] text-stone-500 space-y-1">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">{t.educationTitle}</h2>
            </div>
            
            <div className="space-y-2">
              {/* UPJS PhD */}
              <div className="flex items-center gap-4 p-2 bg-white rounded-lg border border-amber-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <span className="text-[10px] font-bold tracking-tight text-amber-800">UPJŠ</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">{t.education.phd.title}</p>
                  <p className="text-[10px] text-stone-600">{t.education.phd.school}</p>
                  <p className="text-[10px] text-stone-400">{t.education.phd.detail}</p>
                </div>
              </div>

              {/* MUNI Ing */}
              <div className="flex items-center gap-4 p-2 bg-white rounded-lg border border-amber-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src={pdfMode ? pdfImage("muni-logo") : "/images/muni-logo.png"}
                    alt="Masarykova univerzita"
                    width={40}
                    height={40}
                    className="object-contain"
                    unoptimized={pdfMode}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">{t.education.ing.title}</p>
                  <p className="text-[10px] text-stone-600">{t.education.ing.school}</p>
                  <p className="text-[10px] text-stone-400 font-medium">
                    {t.education.ing.detail} <span className="text-amber-600">{t.education.ing.grade}</span>
                  </p>
                </div>
              </div>

              {/* MUNI Bc */}
              <div className="flex items-center gap-4 p-2 bg-white rounded-lg border border-amber-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src={pdfMode ? pdfImage("muni-logo") : "/images/muni-logo.png"}
                    alt="Masarykova univerzita"
                    width={40}
                    height={40}
                    className="object-contain"
                    unoptimized={pdfMode}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">{t.education.bc.title}</p>
                  <p className="text-[10px] text-stone-600">{t.education.bc.school}</p>
                  <p className="text-[10px] text-stone-400">{t.education.bc.detail}</p>
                </div>
              </div>

              {/* Gympos */}
              <div className="flex items-center gap-4 p-2 bg-white rounded-lg border border-amber-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src={pdfMode ? pdfImage("gympos-logo") : "/images/gympos-logo.png"}
                    alt="Gymnázium Poštová"
                    width={40}
                    height={40}
                    className="object-contain"
                    unoptimized={pdfMode}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">{t.education.gymnasium.title}</p>
                  <p className="text-[10px] text-stone-600">{t.education.gymnasium.school}</p>
                  <p className="text-[10px] text-stone-400">{t.education.gymnasium.detail}</p>
                </div>
              </div>

              {/* ZUS */}
              <div className="flex items-center gap-4 p-2 bg-white rounded-lg border border-amber-200">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src={pdfMode ? pdfImage("szus-logo") : "/images/szus-logo.png"}
                    alt="ZUŠ Krosnianska"
                    width={40}
                    height={40}
                    className="object-contain"
                    unoptimized={pdfMode}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">{t.education.music.title}</p>
                  <p className="text-[10px] text-stone-600">{t.education.music.school}</p>
                  <p className="text-[10px] text-stone-400">{t.education.music.detail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
