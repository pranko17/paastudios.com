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
    madeFor: 'Voor {platforms}',
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
        alts: [
          'Een uil krijgt vorm op een nonogram, met kruisjes in de lege vakjes',
          'De scène “Dierenriem” in de borduurring, figuur voor figuur geborduurd',
          'De scène “Kat bij het raam” van dichtbij: zwaluwen, een vlinder, een kat en een bolletje wol',
        ],
      },
      cardArt: {
        alt: 'Voltooide borduurringen uit het spel: vooraan ‘Kat bij het raam’, daarachter ‘Glas-in-loodvogels’ en ‘Zonnestelsel’, en een naald met granaatrode draad',
      },
      rules: {
        intro:
          'Stitch Tales is gebaseerd op nonogrammen: logicapuzzels met een plaatje, ook bekend als Japanse puzzels, griddlers of hanjie. De getallen naast de rijen en boven de kolommen vertellen welke vakjes je moet vullen; vul je de juiste, dan verschijnt er een verborgen plaatje — hier een figuur die in de scène in je borduurring wordt geborduurd.',
        steps: [
          'De getallen naast een rij of boven een kolom vertellen hoeveel vakjes op een rij je borduurt, en in welke volgorde.',
          'Tussen twee stukken zit altijd minstens één leeg vakje — zet daar een kruisje.',
          'Veeg met je vinger, en de draad volgt hem over de vakjes.',
          'Een verkeerde steek kost een van je drie levens, dus neem de tijd.',
          'Los het raster op, en de figuur wordt geborduurd in de scène in je borduurring.',
        ],
        notes: [
          'De getallen boven een kolom lees je van boven naar beneden, die naast een rij van links naar rechts.',
          'Op de merklap heeft elk getal zijn eigen garenkleur: stukken van verschillende kleuren mogen elkaar raken, maar tussen stukken van dezelfde kleur zit altijd een leeg vakje.',
          'Je eerste figuur neemt je mee langs alle regels.',
        ],
        tips: [
          'Begin met de volste lijnen: tel de stukken op, met telkens één leeg vakje ertussen. Is het totaal gelijk aan de lengte van de lijn, dan is de hele lijn opgelost; scheelt het maar een vakje of twee, dan hebben de langere stukken al vakjes die vaststaan.',
          'Schuif een stuk zo ver mogelijk naar het ene uiteinde en daarna naar het andere: de vakjes die het beide keren bedekt, zijn altijd geborduurd. Een 7 in een lijn van 10 vult altijd de middelste vier.',
          'Een steek helemaal aan de rand van het raster is het begin van het eerste stuk: borduur vanaf daar het hele stuk en zet er een kruisje achter.',
          'Is een lijn opgelost, dan krijgen de lege vakjes kruisjes — en elk kruisje vertelt de lijnen die er dwars overheen lopen waar geen stuk kan liggen.',
          'Gok niet: een verkeerde steek kost een leven. Staat er in een lijn nog niets vast, kom er dan op terug na de lijnen die hem kruisen.',
        ],
        alt: 'Een bijna opgelost nonogram van een kat: granaatrood geborduurde vakjes, kruisjes in de lege',
      },
      screenshots: [
        'Een uil krijgt vorm op een nonogram, met kruisjes in de lege vakjes',
        'De scène “Dierenriem” in de borduurring, figuur voor figuur geborduurd',
        'De scène “Kat bij het raam” van dichtbij: zwaluwen, een vlinder, een kat en een bolletje wol',
        'De kalender: een klein borduurwerkje voor elke dag en een egel voor de hele maand',
        'De eindeloze merklap met kleurrijke volkspatronen',
        'De collectie voltooide borduurringen',
      ],
      features: [
        {
          title: 'Borduurring na borduurring',
          text: 'Een kat bij het raam, glas-in-loodvogels, een winterdorp, de zalen van Asgard, het Wilde Westen en nog veel meer. Elke voltooide borduurring krijgt een plaats in je collectie.',
        },
        {
          title: 'Borduurwerk dat echt lijkt',
          text: 'Elke figuur heeft zijn eigen garens en steken, zachte schaduwen op linnen en de rustige geluiden van naald en borduurring.',
        },
        {
          title: 'Een kalender vol dagelijkse steken',
          text: 'Elke dag wacht er een klein borduurwerkje op je. Borduur de hele maand, en de grote figuur van de maand komt vrij — gemiste dagen wachten op je.',
        },
        {
          title: 'Een eindeloze merklap',
          text: 'Na je eerste voltooide scène gaat er een merklap met volksmotieven open: gekleurde nonogrammen in twee of drie garens die nooit opraken.',
        },
        {
          title: 'Hints voor lastige momenten',
          text: 'Onthul een vakje, een hele lijn of 10 willekeurige vakjes — en een vingerhoed behoedt je voor je volgende fout.',
        },
        {
          title: 'Zonder timer, zonder haast',
          text: 'Elke dag een cadeau, Game Center-prestaties en ranglijsten op iPhone en iPad, en je hebt geen internet nodig om te spelen.',
        },
      ],
      supportNote: 'Je kunt ons ook bereiken vanuit het spel via Profiel → Contact.',
    },
  },
};
