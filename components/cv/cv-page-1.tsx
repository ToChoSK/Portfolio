"use client"

import Image from "next/image"
import { Mail, Phone, MapPin, Github, Briefcase, GraduationCap, Code, Globe } from "lucide-react"

export function CVPage1() {
  return (
    <div className="cv-page w-[210mm] h-[297mm] bg-amber-50/50 shadow-2xl print:shadow-none overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2378350f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700" />
      
      <div className="flex h-full relative">
        {/* Left Sidebar */}
        <div className="w-[75mm] bg-gradient-to-b from-amber-900 to-stone-900 text-white p-6 flex flex-col">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-amber-700/40 shadow-xl">
              <Image
                src="/images/profile.png"
                alt="Tomáš Chovančák"
                width={144}
                height={144}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Contact */}
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-700" />
              Kontakt
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
                <span className="text-xs">Brno, Česko</span>
              </div>
              <a href="https://github.com/ToChoSK" className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors">
                <Github className="w-4 h-4 text-amber-500" />
                <span className="text-xs">github.com/ToChoSK</span>
              </a>
              <a href="https://tomas.chovanak.sk" className="flex items-center gap-3 text-amber-100 hover:text-white transition-colors">
                <Globe className="w-4 h-4 text-amber-500" />
                <span className="text-xs">tomas.chovanak.sk</span>
              </a>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-700" />
              Technológie
            </h3>
            
            <div className="space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">Hlavné</p>
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
                  {["Docker", "Git", "GitLab", "CI/CD", "Linux", "Nginx", "systemd", "Vercel", "DNS", "Cloudflare"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-stone-800/60 rounded text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">Web nástroje</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Google Search Console", "Google Analytics", "Google AdSense"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-stone-800/60 rounded text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-[10px] uppercase tracking-wider text-amber-500 mb-1.5">Ďalšie</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Java", "C#", "Flutter", "React Native"].map((tech) => (
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
              Jazyky
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs">Slovenčina</span>
                <span className="text-[10px] text-amber-400">Materinský</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">Angličtina</span>
                <span className="text-[10px] text-amber-400">B2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs">Ruština</span>
                <span className="text-[10px] text-amber-400">B2</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="mt-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-700" />
              Záujmy
            </h3>
            <p className="text-[10px] text-amber-200 leading-relaxed">
              Slovenský folklór (tancujem vo FS Poľana), akordeón, klavír, história, geografia, webové projekty a tvorba digitálnych projektov.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col">
          {/* Header */}
          <div className="mb-5 pb-5 border-b border-amber-200">
            <h1 className="text-3xl font-bold text-amber-900 tracking-tight mb-1">
              ING. TOMÁŠ CHOVANČÁK
            </h1>
            <p className="text-sm font-medium text-amber-700">
              Full-stack vývojár / IT špecialista / kyberbezpečnosť
            </p>
          </div>

          {/* Profile */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">Profil</h2>
            </div>
            <p className="text-[11px] text-stone-600 leading-relaxed">
              Full-stack vývojár s praxou v CzechGlobe od 03/2023. Zameriavam sa na interné systémy, REST API, databázové modelovanie, Linux infraštruktúru, používateľské rozhrania a prevádzku produkčných aplikácií. Prepájam vývoj, IT prevádzku a praktické riešenie používateľských požiadaviek.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">Pracovné skúsenosti</h2>
            </div>
            
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="relative pl-4 border-l-2 border-amber-300">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-amber-700" />
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xs font-bold text-amber-900">Softvérový vývojár / IT a kyberbezpečnosť</h3>
                  <span className="text-[10px] text-stone-500 whitespace-nowrap ml-2">03/2023 – súčasnosť</span>
                </div>
                <p className="text-[10px] font-medium text-amber-700 mb-2">CzechGlobe, Brno</p>
                <ul className="text-[10px] text-stone-500 space-y-1">
                  <li>• Vývoj, údržba a prevádzka interných webových aplikácií a firemných systémov.</li>
                  <li>• Vývoj systému Fluxprism – databázový model, REST API, frontend, používateľské roly, súbory, auditné záznamy.</li>
                  <li>• Nasadzovanie aplikácií, CI/CD, Rocky Linux, konfigurácia systemd služieb, PostgreSQL.</li>
                  <li>• Kyberbezpečnostné testovanie s využitím Kali Linux, Burp Suite, Metasploit a postupov penetračného testovania.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative pl-4 border-l-2 border-amber-300">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-amber-500" />
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xs font-bold text-amber-900">Full-stack vývojár – vlastné a klientské projekty</h3>
                  <span className="text-[10px] text-stone-500 whitespace-nowrap ml-2">2020 – súčasnosť</span>
                </div>
                <p className="text-[10px] font-medium text-amber-700 mb-2">Samostatné projekty / GitHub portfólio</p>
                <ul className="text-[10px] text-stone-500 space-y-1">
                  <li>• Vývoj webov, interných nástrojov, e-shopov, mobilných aplikácií a prototypov.</li>
                  <li>• Realizácia projektov od návrhu používateľského rozhrania cez implementáciu až po nasadenie.</li>
                  <li>• Správa domén, hostingov, repozitárov a dlhodobá technická údržba.</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="relative pl-4 border-l-2 border-amber-300">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-amber-500" />
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xs font-bold text-amber-900">Lektor matematiky, fyziky a informatiky</h3>
                  <span className="text-[10px] text-stone-500 whitespace-nowrap ml-2">09/2018 – súčasnosť</span>
                </div>
                <p className="text-[10px] font-medium text-amber-700 mb-2">Súkromne / EDUHELP Košice</p>
                <ul className="text-[10px] text-stone-500 space-y-1">
                  <li>• Individuálne doučovanie matematiky, fyziky a informatiky.</li>
                  <li>• Vysvetľovanie technických tém jednoduchým a zrozumiteľným spôsobom.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-700 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-amber-900">Vzdelanie</h2>
            </div>
            
            <div className="space-y-3">
              {/* MUNI Ing */}
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-amber-200">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src="/images/muni-logo.png"
                    alt="Masarykova univerzita"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">Ing. – Softvérové inžinierstvo</p>
                  <p className="text-[10px] text-stone-600">Masarykova univerzita, FI Brno</p>
                  <p className="text-[10px] text-stone-400 font-medium">
                    2023 – 2025 • Štátnice a diplomová práca s hodnotením <span className="text-amber-600">prospel výborne</span>
                  </p>
                </div>
              </div>

              {/* MUNI Bc */}
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-amber-200">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src="/images/muni-logo.png"
                    alt="Masarykova univerzita"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">Bc. – Informatika</p>
                  <p className="text-[10px] text-stone-600">Masarykova univerzita, FI Brno</p>
                  <p className="text-[10px] text-stone-400">2020 – 2023</p>
                </div>
              </div>

              {/* Gympos */}
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-amber-200">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src="/images/gympos-logo.png"
                    alt="Gymnázium Poštová"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">Matematická trieda</p>
                  <p className="text-[10px] text-stone-600">Gymnázium Poštová 9, Košice</p>
                  <p className="text-[10px] text-stone-400">2016 – 2020</p>
                </div>
              </div>

              {/* ZUS */}
              <div className="flex items-center gap-4 p-3 bg-white rounded-lg border border-amber-200">
                <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center">
                  <Image
                    src="/images/szus-logo.png"
                    alt="ZUŠ Krosnianska"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-amber-900">Hudobné vzdelanie</p>
                  <p className="text-[10px] text-stone-600">ZUŠ Krosnianska 6, Košice</p>
                  <p className="text-[10px] text-stone-400">2008 – 2020 • Klavír, Akordeón</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
