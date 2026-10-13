import type { CVContent } from "@/lib/cv/content"

export const en: CVContent = {
  meta: {
    title: "Ing. Tomáš Chovančák - Full-stack developer",
    description: "CV and portfolio of Ing. Tomáš Chovančák - full-stack developer, IT specialist, cybersecurity",
  },
  controls: {
    language: "Language",
    print: "Print",
    download: "Download PDF",
  },
  page1: {
    contactTitle: "Contact",
    location: "Košice, Slovakia",
    technologiesTitle: "Technologies",
    techGroups: {
      main: "Core",
      webTools: "Web tools",
      other: "Other",
    },
    languagesTitle: "Languages",
    languages: [
      { name: "Slovak", level: "Native" },
      { name: "English", level: "B2" },
      { name: "Russian", level: "B2" },
    ],
    interestsTitle: "Interests",
    interests:
      "Slovak folklore (I dance in the Poľana folk ensemble), accordion, piano, history, geography, web projects and building digital projects.",
    role: "Full-stack developer / IT specialist / cybersecurity",
    profileTitle: "Profile",
    profile:
      "Full-stack developer at CzechGlobe (since 03/2024) and PhD student in computer science at UPJŠ in Košice. I build and operate systems for meteorological data – from the database and API through web and mobile apps to the servers and their security.",
    experienceTitle: "Work experience",
    jobs: [
      {
        title: "Software developer / IT and cybersecurity",
        period: "03/2024 – present",
        company: "CzechGlobe, Brno",
        bullets: [
          "CzechGlobe Mapy – public weather map portal and mobile app for Android and iOS: web, mobile, map backend and releases to the app stores.",
          "Fluxprism and MeteoDBS – information system for weather stations and a new measurement database.",
          "Cybersecurity – detection and forensic analysis of web server compromises, security audits and penetration testing (Kali Linux, Burp Suite, Metasploit).",
          "Infrastructure – FreeIPA, DNS, Rocky Linux, systemd, nginx, PostgreSQL, CI/CD.",
        ],
      },
      {
        title: "Full-stack developer – own and client projects",
        period: "2020 – present",
        company: "Independent projects / GitHub portfolio",
        bullets: [
          "Development of websites, internal tools, e-shops, mobile apps and prototypes.",
          "Delivering projects from user interface design through implementation to deployment.",
          "Management of domains, hosting and repositories, and long-term technical maintenance.",
        ],
      },
      {
        title: "Tutor of mathematics, physics and computer science",
        period: "09/2018 – present",
        company: "Private tutoring / EDUHELP Košice",
        bullets: [
          "One-to-one tutoring in mathematics, physics and computer science.",
          "Explaining technical topics in a simple and understandable way.",
        ],
      },
    ],
    educationTitle: "Education",
    education: {
      phd: {
        title: "PhD studies – Computer Science",
        school: "UPJŠ Košice, Institute of Computer Science",
        detail: "2026 – present • neural networks, AiS2 development, teaching",
      },
      ing: {
        title: "Master's degree (Ing.) – Software Engineering",
        school: "Masaryk University, Faculty of Informatics, Brno",
        detail: "2023 – 2025 • State exam and master's thesis graded",
        grade: "excellent",
      },
      bc: {
        title: "Bachelor's degree (Bc.) – Informatics",
        school: "Masaryk University, Faculty of Informatics, Brno",
        detail: "2020 – 2023",
      },
      gymnasium: {
        title: "Mathematics-focused class",
        school: "Gymnázium Poštová 9, Košice (grammar school)",
        detail: "2016 – 2020",
      },
      music: {
        title: "Music education",
        school: "Elementary Art School (ZUŠ) Krosnianska 6, Košice",
        detail: "2008 – 2020 • Piano, Accordion",
      },
    },
  },
  page2: {
    title: "PROJECT PORTFOLIO",
    subtitle: "A selection of delivered applications, websites and projects.",
    mainProjectsTitle: "Main projects",
    fluxprism: {
      subtitle: "Internal company application for CzechGlobe",
      badge: "Main project",
      description:
        "A comprehensive system for managing environmental measurements, meteorological devices, sites, users, roles, tasks, files and audit records. It has been running in production for 2 years and serves half a billion meteorological records in the database. The system also includes data visualisation and presentation for users.",
    },
    ludovky: {
      description:
        "A folklore project for searching and presenting Slovak folk songs, connecting a website, an Android app published on Google Play and a YouTube channel with almost a million views.",
      tag: "Content",
    },
    dotykace: {
      description:
        "Implementation of a JAMU project idea: an interactive chat app with branching dialogue, a visual editor of conversation flows, animations and a responsive user experience.",
      tag: "Interactive UI",
    },
    hobbyTitle: "Hobby projects",
    hobby: {
      srandypandy: "Flutter app for Android focused on jokes",
      akovybavit: "Informational website with practical content",
      hrobyslavnych: "Content website – burial places of Slovak historical figures",
      sarisskyslovnik: "Regional dictionary website",
      gromanka: "Website of a civic association",
      youtubeTitle: "YouTube channel",
      youtube: "Folklore channel with folk songs",
    },
    commercialTitle: "Commercial projects",
    commercialText:
      "These projects include user interface design, implementation, repository management, domain configuration, deployment, changes based on client requests and long-term technical maintenance.",
  },
  page3: {
    title: "MORE PROJECTS AT CZECHGLOBE",
    subtitle: "Newer systems from 2025 – 2026: map portal, measurement database and infrastructure security.",
    mapTitle: "Map portal",
    mapy: {
      subtitle: "Public weather map portal and mobile app",
      description:
        "A public map portal with current weather monitoring and a roughly ten-day forecast for Czechia: temperature, precipitation, radar, wind, humidity, cloud cover and radiation on a single timeline. I designed and built the whole system – the web map, the mobile app for Android and iOS, the map backend on GeoServer with automated raster data imports, and CI/CD with releases to Google Play and the App Store.",
      stats: [
        { value: "15", label: "data layers" },
        { value: "~10 days", label: "weather forecast" },
        { value: "3", label: "platforms: web, Android, iOS" },
      ],
    },
    internalTitle: "Internal systems",
    meteodbs: {
      subtitle: "Meteorological measurement database",
      description:
        "A new generation of the meteorological measurement database: sensor selection, time-series charts and streamed exports of even gigabyte-sized data. Sign-in via FreeIPA and deployment with rollback on failure; currently in trial operation.",
    },
    cyber: {
      subtitle: "Security server and console",
      description:
        "A console for management and IT: network and service status and a live map of internet-facing servers, built from firewall rules, the reverse proxy and the network inventory. Servers send their own data; the console holds no access to other machines.",
    },
    securityTitle: "Cybersecurity",
    security: [
      {
        title: "Incident response",
        text: "Detection and forensic analysis of compromises of public web servers: the attack's entry point, timeline and scope of impact.",
      },
      {
        title: "Attack reconstruction",
        text: "Reconstructing the full course of an automated attack from reverse proxy logs and checking the integrity of web installations.",
      },
      {
        title: "Audit and prevention",
        text: "Security audit of public websites, tracing the source of SSH brute-force attacks and closing the path they came through.",
      },
      {
        title: "Identity and PKI",
        text: "FreeIPA administration, certificate authority recovery, application sign-in via LDAP and HTTPS with OCSP stapling.",
      },
    ],
  },
}
