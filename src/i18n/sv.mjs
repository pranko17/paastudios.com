// Swedish translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'sv',
  hreflang: 'sv',
  name: 'Svenska',
  ogLocale: 'sv_SE',
  ui: {
    skip: 'Hoppa till innehållet',
    navGames: 'Spel',
    navContact: 'Kontakt',
    fineNoCookies: 'Den här webbplatsen sätter inga cookies och använder inga spårare.',
    fineTrademarks:
      'App Store är ett servicemärke som tillhör Apple Inc. Google Play och Google Play-logotypen är varumärken som tillhör Google LLC.',
    appStoreAlt: 'Hämta {name} i App Store',
    googlePlayAlt: 'Ladda ned {name} på Google Play',
    comingSoon: 'Snart {stores}',
    storeAppStore: 'i App Store',
    storeGooglePlay: 'på Google Play',
    and: 'och',
    freeOn: 'Gratis för {platforms}',
    howToPlay: 'Så spelar du',
    tips: 'Tips för att lösa',
    faq: 'Frågor och svar',
    gallery: 'En närmare titt',
    screenshots: 'Skärmbilder',
    features: 'Det här ingår',
    support: 'Support',
    supportText:
      'Frågor, idéer eller fungerar något inte? Skriv till oss – vi läser varje meddelande.',
    supportPage: 'Supportsida',
    privacyPolicy: 'Integritetspolicy',
    moreFrom: 'Mer från {studio}',
    language: 'Språk',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Oberoende spelstudio',
    ourGames: 'Våra spel',
    howWeMake: 'Så gör vi dem',
    sayHello: 'Säg hej',
    sayHelloText:
      'Frågor, idéer, en bugg – eller bara ett vänligt ord. Skriv till spelet du spelar: vi läser varje meddelande.',
    discover: 'Upptäck {name}',
    docDescription: '{title} för {name} från {studio}.',
  },
  studio: {
    title: 'PAA Studios – små, lugna pusselspel',
    description:
      'PAA Studios gör mysiga logikpussel för iPhone, iPad och Android: Pixtangle och Stitch Tales.',
    headline: 'Små, [lugna]\npusselspel.',
    intro:
      'Vi gör mysiga logikpussel för iPhone, iPad och Android. Varje pussel slutar med en liten bild – ett djur i pixelkonst, en broderad fjäril – och du behöver aldrig skynda dig dit.',
    principles: [
      {
        title: 'Fungerar offline',
        text: 'Ingen uppkoppling behövs. Lös pussel på flyget, i tunnelbanan eller där det inte finns någon täckning alls.',
      },
      {
        title: 'Inga konton',
        text: 'Öppna spelet och spela. Ingen registrering, ingen inloggning, ingen e-postadress att lämna ut.',
      },
      {
        title: 'Dina framsteg är dina',
        text: 'De sparas på din enhet och säkerhetskopieras till ditt eget iCloud- eller Google-konto – vi har inga servrar att skicka dem till.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku-logikpussel',
      tagline: 'Dela rutnätet. Se pixelkonsten slå ut.',
      summary:
        'Dela spelplanen i rektanglar – varje tal anger storleken på sin egen rektangel. Fyll hela rutnätet så slår pusslet ut i en bild i pixelkonst till din samling.',
      platforms: 'iPhone, iPad och Android',
      keywords: [
        'shikaku',
        'shikaku pussel',
        'rektangelpussel',
        'logikpussel',
        'logikspel',
        'sifferpussel',
        'pixelkonst',
        'tankenöt',
        'hjärngympa',
        'spel',
        'mobilspel',
        'pusselspel',
        'gratis spel',
        'spel utan internet',
      ],
      art: {
        alts: [
          'En spelplan på ”Medel” mitt i lösningen',
          'Den färdiga bilden ”Körsbärsblom”',
          'Samlingen av pixelbilder per kategori',
        ],
      },
      rules: {
        intro:
          'Pixtangle bygger på Shikaku, ett japanskt logikpussel för papper och penna som också är känt under de engelska namnen Rectangles och Divide by Squares. Spelplanen är ett rutnät med tal i några av rutorna: dela den i rektanglar så att varje ruta hör till exakt en av dem.',
        steps: [
          'Dra med fingret över spelplanen för att rita en rektangel runt ett tal.',
          'Varje rektangel innehåller exakt ett tal…',
          '…och talet är dess area i rutor.',
          'Täck hela spelplanen så dyker bilden upp.',
        ],
        notes: [
          'Kvadrater räknas som rektanglar: en 4 kan vara både 2 × 2 och 1 × 4.',
          'Ett frågetecken är en rektangel av okänd storlek: den innehåller också exakt ett tecken, men arean bestämmer du.',
        ],
        tips: [
          'Börja med tal som bara får plats på ett sätt: ett tal som kläms in mellan kanten och sina grannar lämnar ofta bara en enda form.',
          'Ett primtal – 2, 3, 5, 7 – kan bara vara en rak rad av rutor: en rad eller en kolumn.',
          'Leta efter rutor som bara ett tal kan nå: de måste höra till det talets rektangel.',
          'Stora tal i hörn och längs kanterna har få platser att ta vägen – prova dem tidigt.',
          'Kört fast? En ledtråd visar en rätt rektangel, och sedan fortsätter du själv därifrån.',
        ],
        alt: 'En Pixtangle-spelplan med sex gånger sex rutor: rektanglar i pastell med tal, en av dem håller på att ritas',
      },
      screenshots: [
        'En spelplan på ”Medel” mitt i lösningen',
        'Spelplanen för ”Körsbärsblom” före den första rektangeln',
        'Den färdiga bilden ”Körsbärsblom”',
        'Samlingar av pixelbilder per kategori',
        'Kalendern för dagens utmaning',
        'Ett lopp i Maraton: spelplaner mot klockan',
        'Sex svårighetsgrader för klassiska nivåer',
      ],
      features: [
        {
          title: '270+ pixelbilder',
          text: 'Tio kategorier, från djur till rymden. Varje bild är en spelplan i bildens form – lös den för att färglägga den.',
        },
        {
          title: 'En ny utmaning varje dag',
          text: 'En daglig spelplan med unik form. Håll sviten vid liv för större belöningar.',
        },
        {
          title: 'Sex svårighetsgrader',
          text: 'Oändligt många klassiska nivåer, från snabb uppvärmning till hjärnvridare på ”Galen”, plus bilder från Mästarens väg för dina vinster.',
        },
        {
          title: 'Sällsyntheter att jaga',
          text: 'Från vanlig till legendarisk: slutför en hel kategori för att låsa upp dess sällsyntaste bild.',
        },
        {
          title: 'Prestationer och topplistor',
          text: 'Game Center på iPhone och iPad: dussintals prestationer och veckans topplistor att klättra på.',
        },
        {
          title: 'Gjort för att koppla av',
          text: 'Mörkt och ljust tema, mjuka ljud och vibrationer. Inget konto behövs, fungerar helt offline.',
        },
      ],
      faq: [
        {
          q: 'Vad är Shikaku?',
          a: 'Ett logikpussel från Japan: dela ett rutnät i rektanglar så att var och en innehåller ett enda tal som är lika med dess area. Det kallas också Rectangles eller Divide by Squares.',
        },
        {
          q: 'Är Pixtangle gratis?',
          a: 'Ja. Pixtangle är gratis på iPhone, iPad och Android, med reklam och valfria köp i appen – bland annat ett paket som stänger av reklamen mellan nivåerna.',
        },
        {
          q: 'Fungerar det offline?',
          a: 'Ja. Det finns inget konto och du kan spela utan internet; dina framsteg sparas på din enhet och följer med i telefonens säkerhetskopia.',
        },
        {
          q: 'Hur svårt blir det?',
          a: 'Sex svårighetsgrader tar dig från små spelplaner på ”Lätt” till stora på ”Galen” fulla av frågetecken, plus dagens utmaning, ny varje dag, och Maraton mot klockan.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Korsstygnsnonogram',
      tagline: 'Varje pussel är ett stygn i en större bild.',
      summary:
        'Läs talen längs raderna och kolumnerna, brodera rätt rutor – och varje löst nonogram broderas in i en scen i din broderibåge.',
      platforms: 'iPhone, iPad och Android',
      keywords: [
        'nonogram',
        'picross',
        'griddlers',
        'hanjie',
        'korsstygn',
        'broderi',
        'logikpussel',
        'logikspel',
        'sifferpussel',
        'pixelkonst',
        'spel',
        'mobilspel',
        'pusselspel',
        'gratis spel',
        'spel utan internet',
      ],
      art: {
        alt: 'En broderibåge med en broderad blomsteräng: en fjäril, en sol, blommor och en flugsvamp som ännu inte är broderad',
      },
      rules: {
        steps: [
          'Talen bredvid varje rad och kolumn anger i tur och ordning grupperna av fyllda rutor.',
          'Brodera rutorna som ska vara fyllda; markera dem som ska förbli tomma med ett kryss.',
          'Se upp – ett fel stygn kostar ett liv, ett av dina broderade hjärtan.',
          'Lös rutnätet så broderas figuren in i scenen i din broderibåge.',
        ],
        alt: 'Ett nästan löst nonogram med en katt: granatröda broderade rutor, kryss i de tomma',
      },
      features: [
        {
          title: 'Scener att brodera',
          text: 'En blomsteräng, Stonehenge, en fruktpicknick, solsystemet, en japansk trädgård, ett dockskåp, en vinterby, havsbotten – och mer därtill.',
        },
        {
          title: 'Riktiga broderistygn',
          text: 'Plattsöm, kedjesöm, fiskbenssöm och franska knutar – varje figur sys med sin egen tråd och struktur.',
        },
        {
          title: 'En oändlig märkduk',
          text: 'Efter din första scen öppnas en märkduk med traditionella mönster – och dess mönster tar aldrig slut.',
        },
        {
          title: 'Ledtrådar när du kör fast',
          text: 'Visa en enda ruta eller en hel linje, och fortsätt brodera.',
        },
        {
          title: 'En gåva varje dag',
          text: 'Kom tillbaka varje dag för en belöning som växer med din svit.',
        },
        {
          title: 'Skonsamt för ögonen',
          text: 'Mjuka linnefärger, stilla broderiljud, inget konto och inget internet behövs.',
        },
      ],
      supportNote: 'Du når oss också från spelet under Profil → Kontakta oss.',
    },
  },
};
