import type { CVContent } from "@/lib/cv/content"

export const cs: CVContent = {
  meta: {
    title: "Ing. Tomáš Chovančák - Full-stack vývojář",
    description: "CV a portfolio Ing. Tomáše Chovančáka - full-stack vývojář, IT specialista, kyberbezpečnost",
  },
  controls: {
    language: "Jazyk",
    print: "Tisknout",
    download: "Stáhnout PDF",
  },
  page1: {
    contactTitle: "Kontakt",
    location: "Košice, Slovensko",
    technologiesTitle: "Technologie",
    techGroups: {
      main: "Hlavní",
      webTools: "Webové nástroje",
      other: "Další",
    },
    languagesTitle: "Jazyky",
    languages: [
      { name: "Slovenština", level: "Mateřský" },
      { name: "Angličtina", level: "B2" },
      { name: "Ruština", level: "B2" },
    ],
    interestsTitle: "Zájmy",
    interests:
      "Slovenský folklor (tančím ve FS Poľana), akordeon, klavír, historie, geografie, webové projekty a tvorba digitálních projektů.",
    role: "Full-stack vývojář / IT specialista / kyberbezpečnost",
    profileTitle: "Profil",
    profile:
      "Full-stack vývojář v CzechGlobe (od 03/2024) a doktorand informatiky na UPJŠ v Košicích. Vyvíjím a provozuji systémy nad meteorologickými daty – od databáze a API přes web a mobilní aplikace až po servery a jejich bezpečnost.",
    experienceTitle: "Pracovní zkušenosti",
    jobs: [
      {
        title: "Softwarový vývojář / IT a kyberbezpečnost",
        period: "03/2024 – současnost",
        company: "CzechGlobe, Brno",
        bullets: [
          "CzechGlobe Mapy – veřejný mapový portál počasí a mobilní aplikace pro Android a iOS: web, mobil, mapový backend i vydávání do obchodů.",
          "Fluxprism a MeteoDBS – informační systém pro meteostanice a nová databáze měření.",
          "Kyberbezpečnost – odhalení a forenzní analýza kompromitací webových serverů, bezpečnostní audity a penetrační testování (Kali Linux, Burp Suite, Metasploit).",
          "Infrastruktura – FreeIPA, DNS, Rocky Linux, systemd, nginx, PostgreSQL, CI/CD.",
        ],
      },
      {
        title: "Full-stack vývojář – vlastní a klientské projekty",
        period: "2020 – současnost",
        company: "Samostatné projekty / GitHub portfolio",
        bullets: [
          "Vývoj webů, interních nástrojů, e-shopů, mobilních aplikací a prototypů.",
          "Realizace projektů od návrhu uživatelského rozhraní přes implementaci až po nasazení.",
          "Správa domén, hostingů, repozitářů a dlouhodobá technická údržba.",
        ],
      },
      {
        title: "Lektor matematiky, fyziky a informatiky",
        period: "09/2018 – současnost",
        company: "Soukromě / EDUHELP Košice",
        bullets: [
          "Individuální doučování matematiky, fyziky a informatiky.",
          "Vysvětlování technických témat jednoduchým a srozumitelným způsobem.",
        ],
      },
    ],
    educationTitle: "Vzdělání",
    education: {
      phd: {
        title: "Ph.D. studium – Informatika",
        school: "UPJŠ Košice, Ústav informatiky",
        detail: "2026 – současnost • neuronové sítě, vývoj AiS2, výuka",
      },
      ing: {
        title: "Ing. – Softwarové inženýrství",
        school: "Masarykova univerzita, FI Brno",
        detail: "2023 – 2025 • Státnice a diplomová práce s hodnocením",
        grade: "prospěl výborně",
      },
      bc: {
        title: "Bc. – Informatika",
        school: "Masarykova univerzita, FI Brno",
        detail: "2020 – 2023",
      },
      gymnasium: {
        title: "Matematická třída",
        school: "Gymnázium Poštová 9, Košice",
        detail: "2016 – 2020",
      },
      music: {
        title: "Hudební vzdělání",
        school: "ZUŠ Krosnianska 6, Košice",
        detail: "2008 – 2020 • Klavír, Akordeon",
      },
    },
  },
  page2: {
    title: "PROJEKTOVÉ PORTFOLIO",
    subtitle: "Výběr realizovaných aplikací, webů a projektů.",
    mainProjectsTitle: "Hlavní projekty",
    fluxprism: {
      subtitle: "Interní firemní aplikace pro CzechGlobe",
      badge: "Hlavní projekt",
      description:
        "Komplexní systém pro evidenci environmentálních měření, meteorologických zařízení, lokalit, uživatelů, rolí, úkolů, souborů a auditních záznamů. Funguje 2 roky v ostrém provozu a obsluhuje půl miliardy meteorologických záznamů v databázi. Součástí systému je i vizualizace a prezentace dat uživatelům.",
    },
    ludovky: {
      description:
        "Folklorní projekt pro vyhledávání a prezentaci slovenských lidových písní, propojující webovou stránku, Android aplikaci vydanou na Google Play a YouTube kanál s téměř milionem zhlédnutí.",
      tag: "Obsah",
    },
    dotykace: {
      description:
        "Realizace projektového nápadu JAMU, interaktivní chatová aplikace s větveným dialogem, vizuálním editorem konverzačních toků, animacemi a responzivním uživatelským zážitkem.",
      tag: "Interaktivní UI",
    },
    hobbyTitle: "Hobby projekty",
    hobby: {
      srandypandy: "Flutter aplikace pro Android zaměřená na vtipy",
      akovybavit: "Informační web s praktickým obsahem",
      hrobyslavnych: "Obsahový web - místa pohřbení slovenských historických osobností",
      sarisskyslovnik: "Regionální slovníkový web",
      gromanka: "Prezentační web spolku",
      youtubeTitle: "YouTube kanál",
      youtube: "Folklorní kanál s lidovými písněmi",
    },
    commercialTitle: "Komerční projekty",
    commercialText:
      "Tyto projekty zahrnují návrh uživatelského rozhraní, implementaci, správu repozitářů, konfiguraci domén, nasazení, úpravy podle požadavků klientů a dlouhodobou technickou údržbu.",
  },
  page3: {
    title: "DALŠÍ PROJEKTY V CZECHGLOBE",
    subtitle: "Novější systémy z let 2025 – 2026: mapový portál, databáze měření a bezpečnost infrastruktury.",
    mapTitle: "Mapový portál",
    mapy: {
      subtitle: "Veřejný mapový portál počasí a mobilní aplikace",
      description:
        "Veřejný mapový portál s aktuálním monitoringem počasí a přibližně desetidenní předpovědí pro Česko: teplota, srážky, radar, vítr, vlhkost, oblačnost a záření na jedné časové ose. Celý systém jsem navrhl a vyvinul – webovou mapu, mobilní aplikaci pro Android a iOS, mapový backend nad GeoServerem s automatickými importy rastrových dat i CI/CD s vydáváním do Google Play a App Store.",
      stats: [
        { value: "15", label: "datových vrstev" },
        { value: "~10 dní", label: "předpověď počasí" },
        { value: "3", label: "platformy: web, Android, iOS" },
      ],
    },
    internalTitle: "Interní systémy",
    meteodbs: {
      subtitle: "Databáze meteorologických měření",
      description:
        "Nová generace databáze meteorologických měření: výběr senzorů, grafy časových řad a streamované exporty i gigabajtových dat. Přihlášení přes FreeIPA a nasazení s návratem při chybě; aktuálně ve zkušebním provozu.",
    },
    cyber: {
      subtitle: "Bezpečnostní server a konzole",
      description:
        "Konzole pro vedení a IT: stav sítě a služeb a živá mapa serverů otevřených do internetu, poskládaná z pravidel firewallu, reverzní proxy a inventáře sítě. Servery posílají data samy, konzole nedrží žádné přístupy k jiným strojům.",
    },
    securityTitle: "Kyberbezpečnost",
    security: [
      {
        title: "Reakce na incidenty",
        text: "Odhalení a forenzní analýza kompromitací veřejných webových serverů: vstupní bod útoku, časová osa a rozsah zásahu.",
      },
      {
        title: "Rekonstrukce útoků",
        text: "Sestavení celého průběhu automatizovaného útoku z logů reverzní proxy a kontrola integrity webových instalací.",
      },
      {
        title: "Audit a prevence",
        text: "Bezpečnostní audit veřejných webů, vystopování zdroje brute-force útoků na SSH a uzavření cesty, kterou přicházely.",
      },
      {
        title: "Identity a PKI",
        text: "Správa FreeIPA, obnova certifikační autority, přihlašování aplikací přes LDAP a HTTPS s OCSP staplingem.",
      },
    ],
  },
}
