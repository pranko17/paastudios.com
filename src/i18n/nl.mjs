// Dutch translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'nl',
  hreflang: 'nl',
  name: 'Nederlands',
  ogLocale: 'nl_NL',
  ui: {
    skip: 'Naar de inhoud',
    navGames: 'Spellen',
    navContact: 'Contact',
    fineNoCookies: 'Deze website plaatst geen cookies en gebruikt geen trackers.',
    fineTrademarks:
      'App Store is een dienstmerk van Apple Inc. Google Play en het Google Play-logo zijn handelsmerken van Google LLC.',
    appStoreAlt: 'Download {name} in de App Store',
    googlePlayAlt: 'Download {name} via Google Play',
    comingSoon: 'Binnenkort {stores}',
    storeAppStore: 'in de App Store',
    storeGooglePlay: 'op Google Play',
    and: 'en',
    freeOn: 'Gratis voor {platforms}',
    howToPlay: 'Zo speel je',
    tips: 'Tips om op te lossen',
    faq: 'Vragen en antwoorden',
    gallery: 'Van dichtbij',
    screenshots: 'Screenshots',
    features: 'Wat erin zit',
    support: 'Support',
    supportText: 'Vragen, ideeën of werkt er iets niet? Schrijf ons — we lezen elk bericht.',
    supportPage: 'Supportpagina',
    privacyPolicy: 'Privacybeleid',
    moreFrom: 'Meer van {studio}',
    language: 'Taal',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Onafhankelijke gamestudio',
    ourGames: 'Onze spellen',
    howWeMake: 'Hoe we ze maken',
    sayHello: 'Zeg hallo',
    sayHelloText:
      'Vragen, ideeën, een bug — of gewoon een vriendelijk woord. Schrijf naar het spel dat je speelt: we lezen elk bericht.',
    discover: 'Ontdek {name}',
    docDescription: '{title} voor {name} van {studio}.',
  },
  studio: {
    title: 'PAA Studios — kleine, rustige puzzelspellen',
    description:
      'PAA Studios maakt gezellige logische puzzels voor iPhone, iPad en Android: Pixtangle en Stitch Tales.',
    headline: 'Kleine, [rustige]\npuzzelspellen.',
    intro:
      'We maken gezellige logische puzzels voor iPhone, iPad en Android. Elke puzzel eindigt met een klein plaatje — een dier in pixel art, een geborduurde vlinder — en je hoeft je nooit te haasten om er te komen.',
    principles: [
      {
        title: 'Speelt offline',
        text: 'Geen verbinding nodig. Puzzel in het vliegtuig, in de metro of op een plek helemaal zonder bereik.',
      },
      {
        title: 'Geen account',
        text: 'Open het spel en speel. Geen registratie, geen login, geen e-mailadres dat je hoeft af te geven.',
      },
      {
        title: 'Jouw voortgang is van jou',
        text: 'Hij staat op je apparaat, met een back-up in je eigen iCloud- of Google-account — we hebben geen servers om hem naartoe te sturen.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku-logicapuzzel',
      tagline: 'Verdeel het veld. Kijk hoe pixel art opbloeit.',
      summary:
        'Verdeel het veld in rechthoeken — elk getal is de grootte van zijn eigen rechthoek. Vul het hele raster en de puzzel bloeit op tot een plaatje in pixel art voor je collectie.',
      platforms: 'iPhone, iPad en Android',
      keywords: [
        'shikaku',
        'shikaku puzzel',
        'rechthoekenpuzzel',
        'logicapuzzel',
        'logisch spel',
        'cijferpuzzel',
        'pixel art',
        'breinbreker',
        'denkspel',
        'spel',
        'mobiel spel',
        'puzzelspel',
        'gratis spel',
        'spel zonder internet',
      ],
      art: {
        alts: [
          'Een veld op “Gemiddeld” halverwege het oplossen',
          'Het voltooide plaatje “Sakura”',
          'De collectie plaatjes per categorie',
        ],
      },
      rules: {
        intro:
          'Pixtangle is gebaseerd op Shikaku, een Japanse logicapuzzel voor pen en papier, ook bekend onder de Engelse namen Rectangles en Divide by Squares. Het veld is een raster met getallen in sommige vakjes: verdeel het zo in rechthoeken dat elk vakje bij precies één ervan hoort.',
        steps: [
          'Sleep met je vinger over het veld om een rechthoek rond een getal te tekenen.',
          'Elke rechthoek bevat precies één getal…',
          '…en dat getal is zijn oppervlakte in vakjes.',
          'Bedek het hele veld, en het plaatje verschijnt.',
        ],
        notes: [
          'Vierkanten tellen als rechthoeken: een 4 kan 2 × 2 zijn, maar ook 1 × 4.',
          'Een vraagteken is een rechthoek van onbekende grootte: ook daarin staat precies één teken, maar de oppervlakte bepaal jij.',
        ],
        tips: [
          'Begin met getallen die maar op één manier passen: een getal dat klem zit tussen de rand en zijn buren, laat vaak maar één vorm over.',
          'Een priemgetal — 2, 3, 5, 7 — kan alleen een rechte rij vakjes zijn: één rij of één kolom.',
          'Zoek vakjes die maar één getal kan bereiken: die horen gegarandeerd bij de rechthoek van dat getal.',
          'Grote getallen in hoeken en langs de randen kunnen weinig kanten op — probeer ze vroeg.',
          'Kom je er niet uit? Een hint toont je één juiste rechthoek, en vanaf daar ga je zelf verder.',
        ],
        alt: 'Een Pixtangle-veld van zes bij zes vakjes: pastelkleurige rechthoeken met getallen, een ervan wordt net getekend',
      },
      screenshots: [
        'Een veld op “Gemiddeld” halverwege het oplossen',
        'Het Sakura-veld vóór de eerste rechthoek',
        'Het voltooide plaatje “Sakura”',
        'Collecties plaatjes per categorie',
        'De kalender van de dagelijkse uitdaging',
        'Een Marathon-run: velden tegen de klok',
        'Zes moeilijkheden van de klassieke levels',
      ],
      features: [
        {
          title: '270+ pixelplaatjes',
          text: 'Tien categorieën, van dieren tot de ruimte. Elk plaatje is een veld in de vorm van de afbeelding — los het op om het in te kleuren.',
        },
        {
          title: 'Elke dag een nieuwe uitdaging',
          text: 'Een dagelijks veld met een unieke vorm. Houd je reeks vol voor grotere beloningen.',
        },
        {
          title: 'Zes moeilijkheden',
          text: 'Eindeloze klassieke levels, van snelle opwarmers tot breinbrekers op “Waanzinnig”, plus plaatjes van het Meesterpad voor je overwinningen.',
        },
        {
          title: 'Jacht op zeldzaamheden',
          text: 'Van gewoon tot legendarisch: maak een hele categorie compleet om het zeldzaamste plaatje ervan te ontgrendelen.',
        },
        {
          title: 'Prestaties en ranglijsten',
          text: 'Game Center op iPhone en iPad: tientallen prestaties en wekelijkse ranglijsten om in te klimmen.',
        },
        {
          title: 'Gemaakt om te ontspannen',
          text: 'Donker en licht thema, zachte geluiden en trillingen. Geen account nodig, werkt volledig offline.',
        },
      ],
      faq: [
        {
          q: 'Wat is Shikaku?',
          a: 'Een logicapuzzel uit Japan: verdeel een raster zo in rechthoeken dat elke rechthoek precies één getal bevat, gelijk aan zijn oppervlakte. Hij staat ook bekend als Rectangles of Divide by Squares.',
        },
        {
          q: 'Is Pixtangle gratis?',
          a: 'Ja. Pixtangle is gratis op iPhone, iPad en Android, met reclame en optionele aankopen in de app — waaronder een pakket dat de reclame tussen levels uitzet.',
        },
        {
          q: 'Werkt het offline?',
          a: 'Ja. Er is geen account en je kunt spelen zonder internet; je voortgang blijft op je apparaat en gaat mee in de back-up van je telefoon.',
        },
        {
          q: 'Hoe moeilijk wordt het?',
          a: 'Zes moeilijkheden brengen je van kleine velden op “Makkelijk” tot grote velden op “Waanzinnig” vol vraagtekens, plus de dagelijkse uitdaging, elke dag nieuw, en de Marathon tegen de klok.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Kruissteek-nonogram',
      tagline: 'Elke puzzel is een steek in een groter borduurwerk.',
      summary:
        'Lees de getallen langs de rijen en kolommen, borduur de juiste vakjes — en elk opgelost nonogram wordt geborduurd in een scène in je borduurring.',
      platforms: 'iPhone, iPad en Android',
      keywords: [
        'nonogram',
        'nonogrammen',
        'Japanse puzzel',
        'picross',
        'griddlers',
        'hanjie',
        'kruissteek',
        'borduren',
        'logicapuzzel',
        'logisch spel',
        'cijferpuzzel',
        'pixel art',
        'spel',
        'mobiel spel',
        'puzzelspel',
        'gratis spel',
        'spel zonder internet',
      ],
      art: {
        alt: 'Een borduurring met een geborduurde bloemenweide: een vlinder, een zon, bloemen en een vliegenzwam die nog geborduurd moet worden',
      },
      rules: {
        steps: [
          'De getallen naast elke rij en kolom geven op volgorde de groepjes gevulde vakjes aan.',
          'Borduur de vakjes die gevuld moeten zijn; markeer de vakjes die leeg blijven met een kruisje.',
          'Let op — een verkeerde steek kost een leven, een van je geborduurde hartjes.',
          'Los het raster op, en de figuur wordt geborduurd in de scène in je borduurring.',
        ],
        alt: 'Een bijna opgelost nonogram van een kat: granaatrood geborduurde vakjes, kruisjes in de lege',
      },
      features: [
        {
          title: 'Scènes om te borduren',
          text: 'Een bloemenweide, Stonehenge, een fruitpicknick, het zonnestelsel, een Japanse tuin, een poppenhuis, een winterdorp, de zeebodem — en nog meer.',
        },
        {
          title: 'Echte borduursteken',
          text: 'Platsteek, kettingsteek, visgraatsteek en Franse knoopjes — elke figuur wordt geborduurd met zijn eigen garen en textuur.',
        },
        {
          title: 'Een eindeloze merklap',
          text: 'Na je eerste scène gaat er een merklap met traditionele patronen open — en de patronen raken nooit op.',
        },
        {
          title: 'Hints als je vastzit',
          text: 'Onthul één vakje of een hele lijn, en borduur verder.',
        },
        {
          title: 'Elke dag een cadeautje',
          text: 'Kom elke dag terug voor een beloning die groeit met je reeks.',
        },
        {
          title: 'Rustig voor je ogen',
          text: 'Zachte linnenkleuren, stille borduurgeluiden, geen account en geen internet nodig.',
        },
      ],
      supportNote: 'Je kunt ons ook bereiken vanuit het spel via Profiel → Contact.',
    },
  },
};
