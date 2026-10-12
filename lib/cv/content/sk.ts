export const sk = {
  meta: {
    title: "Ing. Tomáš Chovančák - Full-stack vývojár",
    description: "CV a portfólio Ing. Tomáša Chovančáka - Full-stack vývojár, IT špecialista, kyberbezpečnosť",
  },
  controls: {
    language: "Jazyk",
    print: "Tlačiť",
    download: "Stiahnuť PDF",
  },
  page1: {
    contactTitle: "Kontakt",
    location: "Košice, Slovensko",
    technologiesTitle: "Technológie",
    techGroups: {
      main: "Hlavné",
      webTools: "Web nástroje",
      other: "Ďalšie",
    },
    languagesTitle: "Jazyky",
    languages: [
      { name: "Slovenčina", level: "Materinský" },
      { name: "Angličtina", level: "B2" },
      { name: "Ruština", level: "B2" },
    ],
    interestsTitle: "Záujmy",
    interests:
      "Slovenský folklór (tancujem vo FS Poľana), akordeón, klavír, história, geografia, webové projekty a tvorba digitálnych projektov.",
    role: "Full-stack vývojár / IT špecialista / kyberbezpečnosť",
    profileTitle: "Profil",
    profile:
      "Full-stack vývojár v CzechGlobe (od 03/2023) a doktorand informatiky na UPJŠ v Košiciach. Vyvíjam a prevádzkujem systémy nad meteorologickými dátami – od databázy a API cez web a mobilné aplikácie až po servery a ich bezpečnosť.",
    experienceTitle: "Pracovné skúsenosti",
    jobs: [
      {
        title: "Softvérový vývojár / IT a kyberbezpečnosť",
        period: "03/2023 – súčasnosť",
        company: "CzechGlobe, Brno",
        bullets: [
          "CzechGlobe Mapy – verejný mapový portál počasia a mobilná aplikácia pre Android a iOS: web, mobil, mapový backend aj vydávanie do obchodov.",
          "Fluxprism a MeteoDBS – informačný systém pre meteostanice a nová databáza meraní.",
          "Kyberbezpečnosť – odhalenie a forenzná analýza kompromitácií webových serverov, bezpečnostné audity a penetračné testovanie (Kali Linux, Burp Suite, Metasploit).",
          "Infraštruktúra – FreeIPA, DNS, Rocky Linux, systemd, nginx, PostgreSQL, CI/CD.",
        ],
      },
      {
        title: "Full-stack vývojár – vlastné a klientské projekty",
        period: "2020 – súčasnosť",
        company: "Samostatné projekty / GitHub portfólio",
        bullets: [
          "Vývoj webov, interných nástrojov, e-shopov, mobilných aplikácií a prototypov.",
          "Realizácia projektov od návrhu používateľského rozhrania cez implementáciu až po nasadenie.",
          "Správa domén, hostingov, repozitárov a dlhodobá technická údržba.",
        ],
      },
      {
        title: "Lektor matematiky, fyziky a informatiky",
        period: "09/2018 – súčasnosť",
        company: "Súkromne / EDUHELP Košice",
        bullets: [
          "Individuálne doučovanie matematiky, fyziky a informatiky.",
          "Vysvetľovanie technických tém jednoduchým a zrozumiteľným spôsobom.",
        ],
      },
    ],
    educationTitle: "Vzdelanie",
    education: {
      phd: {
        title: "PhD. štúdium – Informatika",
        school: "UPJŠ Košice, Ústav informatiky",
        detail: "2026 – súčasnosť • neurónové siete, vývoj AiS2, výučba",
      },
      ing: {
        title: "Ing. – Softvérové inžinierstvo",
        school: "Masarykova univerzita, FI Brno",
        detail: "2023 – 2025 • Štátnice a diplomová práca s hodnotením",
        grade: "prospel výborne",
      },
      bc: {
        title: "Bc. – Informatika",
        school: "Masarykova univerzita, FI Brno",
        detail: "2020 – 2023",
      },
      gymnasium: {
        title: "Matematická trieda",
        school: "Gymnázium Poštová 9, Košice",
        detail: "2016 – 2020",
      },
      music: {
        title: "Hudobné vzdelanie",
        school: "ZUŠ Krosnianska 6, Košice",
        detail: "2008 – 2020 • Klavír, Akordeón",
      },
    },
  },
  page2: {
    title: "PROJEKTOVÉ PORTFÓLIO",
    subtitle: "Výber realizovaných aplikácií, webov a projektov.",
    mainProjectsTitle: "Hlavné projekty",
    fluxprism: {
      subtitle: "Interná firemná aplikácia pre CzechGlobe",
      badge: "Hlavný projekt",
      description:
        "Komplexný systém pre evidenciu environmentálnych meraní, meteorologických zariadení, lokalít, používateľov, rolí, úloh, súborov a auditných záznamov. Funguje 2 roky v ostrej prevádzke a obsluhuje pol miliardy meteorologických záznamov v databáze. Súčasťou systému je aj vizualizácia a prezentácia dát užívateľom",
    },
    ludovky: {
      description:
        "Folklórny projekt pre vyhľadávanie a prezentáciu slovenských ľudových piesní, prepájajúci webovú stránku, Android aplikáciu vydanú na Google Play a YouTube kanál s takmer miliónom pozretí.",
      tag: "Obsah",
    },
    dotykace: {
      description:
        "Realizácia projektového nápadu JAMU, interaktívna chatová aplikácia s vetveným dialógom, vizuálnym editorom konverzačných tokov, animáciami a responzívnym používateľským zážitkom.",
      tag: "Interaktívne UI",
    },
    hobbyTitle: "Hobby projekty",
    hobby: {
      srandypandy: "Flutter aplikácia pre Android zameraná na vtipy",
      akovybavit: "Informačný web s praktickým obsahom",
      hrobyslavnych: "Obsahový web - miesta pochovania slovenských historických osobností",
      sarisskyslovnik: "Regionálny slovníkový web",
      gromanka: "Prezentačný web OZ",
      youtubeTitle: "YouTube kanál",
      youtube: "Folklórny kanál s ľudovými piesňami",
    },
    commercialTitle: "Komerčné projekty",
    commercialText:
      "Tieto projekty zahŕňajú návrh používateľského rozhrania, implementáciu, správu repozitárov, konfiguráciu domén, nasadenie, úpravy podľa požiadaviek klientov a dlhodobú technickú údržbu.",
  },
  page3: {
    title: "ĎALŠIE PROJEKTY V CZECHGLOBE",
    subtitle: "Novšie systémy z rokov 2025 – 2026: mapový portál, databáza meraní a bezpečnosť infraštruktúry.",
    mapTitle: "Mapový portál",
    mapy: {
      subtitle: "Verejný mapový portál počasia a mobilná aplikácia",
      description:
        "Verejný mapový portál s aktuálnym monitoringom počasia a približne desaťdňovou predpoveďou pre Česko: teplota, zrážky, radar, vietor, vlhkosť, oblačnosť a žiarenie na jednej časovej osi. Celý systém som navrhol a vyvinul – webovú mapu, mobilnú aplikáciu pre Android a iOS, mapový backend nad GeoServerom s automatickými importmi rastrových dát aj CI/CD s vydávaním do Google Play a App Store.",
      stats: [
        { value: "15", label: "dátových vrstiev" },
        { value: "~10 dní", label: "predpoveď počasia" },
        { value: "3", label: "platformy: web, Android, iOS" },
      ],
    },
    internalTitle: "Interné systémy",
    meteodbs: {
      subtitle: "Databáza meteorologických meraní",
      description:
        "Nová generácia databázy meteorologických meraní: výber senzorov, grafy časových radov a streamované exporty aj gigabajtových dát. Prihlásenie cez FreeIPA a nasadenie s návratom pri chybe; aktuálne v skúšobnej prevádzke.",
    },
    cyber: {
      subtitle: "Bezpečnostný server a konzola",
      description:
        "Konzola pre vedenie a IT: stav siete a služieb a živá mapa serverov otvorených do internetu, poskladaná z pravidiel firewallu, reverznej proxy a inventára siete. Servery posielajú dáta samy, konzola nedrží žiadne prístupy k iným strojom.",
    },
    securityTitle: "Kyberbezpečnosť",
    security: [
      {
        title: "Reakcia na incidenty",
        text: "Odhalenie a forenzná analýza kompromitácií verejných webových serverov: vstupný bod útoku, časová os a rozsah zásahu.",
      },
      {
        title: "Rekonštrukcia útokov",
        text: "Zostavenie celého priebehu automatizovaného útoku z logov reverznej proxy a kontrola integrity webových inštalácií.",
      },
      {
        title: "Audit a prevencia",
        text: "Bezpečnostný audit verejných webov, vystopovanie zdroja brute-force útokov na SSH a uzavretie cesty, ktorou prichádzali.",
      },
      {
        title: "Identity a PKI",
        text: "Správa FreeIPA, obnova certifikačnej autority, prihlasovanie aplikácií cez LDAP a HTTPS s OCSP staplingom.",
      },
    ],
  },
}
