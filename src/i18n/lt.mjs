// Lithuanian translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'lt',
  hreflang: 'lt',
  name: 'Lietuvių',
  ogLocale: 'lt_LT',
  ui: {
    skip: 'Pereiti prie turinio',
    navGames: 'Žaidimai',
    navContact: 'Kontaktai',
    fineNoCookies: 'Ši svetainė nenaudoja slapukų ir sekimo priemonių.',
    fineTrademarks:
      'App Store yra Apple Inc. paslaugų ženklas. Google Play ir Google Play logotipas yra Google LLC prekių ženklai.',
    appStoreAlt: 'Atsisiųsk {name} iš App Store',
    googlePlayAlt: 'Gauk {name} iš Google Play',
    comingSoon: 'Jau greitai: {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: 'ir',
    freeOn: 'Nemokamai {platforms}',
    howToPlay: 'Kaip žaisti',
    tips: 'Sprendimo patarimai',
    faq: 'Klausimai ir atsakymai',
    gallery: 'Iš arčiau',
    screenshots: 'Ekrano nuotraukos',
    features: 'Ką rasi žaidime',
    support: 'Pagalba',
    supportText:
      'Turi klausimų, idėjų ar kažkas neveikia? Parašyk mums — skaitome kiekvieną laišką.',
    supportPage: 'Pagalbos puslapis',
    privacyPolicy: 'Privatumo politika',
    moreFrom: 'Kiti {studio} žaidimai',
    language: 'Kalba',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Nepriklausoma žaidimų studija',
    ourGames: 'Mūsų žaidimai',
    howWeMake: 'Kaip juos kuriame',
    sayHello: 'Pasisveikink',
    sayHelloText:
      'Klausimas, idėja, klaida — ar tiesiog geras žodis. Rašyk to žaidimo, kurį žaidi, adresu: skaitome kiekvieną laišką.',
    discover: 'Susipažink su {name}',
    docDescription: '{title}: {name}, studijos {studio} žaidimas.',
  },
  studio: {
    title: 'PAA Studios — maži, ramūs galvosūkių žaidimai',
    description:
      'PAA Studios kuria jaukius loginius galvosūkius iPhone, iPad ir Android įrenginiams: Pixtangle ir Stitch Tales.',
    headline: 'Maži, [ramūs]\ngalvosūkių žaidimai.',
    intro:
      'Kuriame jaukius loginius galvosūkius iPhone, iPad ir Android įrenginiams. Kiekvienas galvosūkis baigiasi mažu paveikslėliu — pikselių žvėreliu ar išsiuvinėtu drugeliu, — ir skubėti prie jo niekada nereikia.',
    principles: [
      {
        title: 'Veikia be interneto',
        text: 'Ryšio nereikia. Spręsk lėktuve, metro ar ten, kur nėra jokio signalo.',
      },
      {
        title: 'Jokių paskyrų',
        text: 'Atsidaryk žaidimą ir žaisk. Be registracijos, be prisijungimo, be el. pašto adreso.',
      },
      {
        title: 'Tavo pažanga — tavo',
        text: 'Ji saugoma tavo įrenginyje, o atsarginė kopija — tavo iCloud arba Google paskyroje. Savų serverių, į kuriuos galėtume ją siųsti, neturime.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku loginis galvosūkis',
      tagline: 'Padalyk tinklelį. Stebėk, kaip pražysta pikselių menas.',
      summary:
        'Padalyk lauką į stačiakampius — kiekvienas skaičius yra savo stačiakampio dydis. Užpildyk visą tinklelį, ir galvosūkis pražys pikselių piešiniu tavo kolekcijai.',
      platforms: 'iPhone, iPad ir Android įrenginiams',
      keywords: [
        'shikaku',
        'shikaku galvosūkis',
        'stačiakampių galvosūkis',
        'loginis galvosūkis',
        'loginis žaidimas',
        'skaičių galvosūkis',
        'pikselių menas',
        'smegenų mankšta',
        'žaidimai protui',
        'žaidimas',
        'mobilusis žaidimas',
        'galvosūkių žaidimas',
        'nemokamas žaidimas',
        'žaidimas be interneto',
      ],
      art: {
        alts: [
          'Sprendžiamas laukas, sunkumo lygis „Vidutinis“',
          'Baigtas pikselių piešinys „Sakura“',
          'Pikselių piešinių kolekcija pagal kategorijas',
        ],
      },
      rules: {
        intro:
          'Pixtangle pagrįstas shikaku — japonišku loginiu galvosūkiu, sprendžiamu pieštuku ant popieriaus, dar žinomu angliškais pavadinimais Rectangles ir Divide by Squares. Laukas — tai tinklelis su skaičiais kai kuriuose langeliuose: padalyk jį į stačiakampius taip, kad kiekvienas langelis priklausytų lygiai vienam iš jų.',
        steps: [
          'Perbrauk pirštu per lauką, kad nubrėžtum stačiakampį aplink skaičių.',
          'Kiekviename stačiakampyje yra lygiai vienas skaičius…',
          '…ir tas skaičius yra jo plotas langeliais.',
          'Uždenk visą lauką, ir pasirodys piešinys.',
        ],
        notes: [
          'Kvadratai irgi yra stačiakampiai: 4 gali būti ir 2 × 2, ir 1 × 4.',
          'Klaustukas — nežinomo dydžio stačiakampis: jame irgi lygiai viena užuomina, bet jo plotą renkiesi tu.',
        ],
        tips: [
          'Pradėk nuo skaičių, kurie telpa tik vienu būdu: krašto ir kaimynų suspausta užuomina dažnai palieka vienintelę formą.',
          'Pirminis skaičius — 2, 3, 5, 7 — gali būti tik tiesi langelių linija: viena eilutė arba vienas stulpelis.',
          'Ieškok langelių, kuriuos pasiekia tik vienas skaičius: jie turi priklausyti to skaičiaus stačiakampiui.',
          'Dideliems skaičiams kampuose ir pakraščiuose mažai vietos — išbandyk juos anksčiau.',
          'Užstrigai? Užuomina parodys vieną teisingą stačiakampį, o toliau tęsi pats.',
        ],
        alt: 'Pixtangle laukas iš 6 × 6 langelių: pasteliniai stačiakampiai su skaičiais, vienas jų brėžiamas',
      },
      screenshots: [
        'Sprendžiamas laukas, sunkumo lygis „Vidutinis“',
        'Sakuros laukas prieš pirmąjį stačiakampį',
        'Baigtas pikselių piešinys „Sakura“',
        'Pikselių piešinių kolekcijos pagal kategorijas',
        'Dienos iššūkio kalendorius',
        'Maratono bėgimas: laukas po lauko prieš laikrodį',
        'Šeši Klasikos sunkumo lygiai',
      ],
      features: [
        {
          title: '270+ pikselių piešinių',
          text: 'Dešimt kategorijų — nuo gyvūnų iki kosmoso. Kiekvienas piešinys — piešinio formos laukas: išspręsk jį ir nuspalvinsi.',
        },
        {
          title: 'Kasdien naujas iššūkis',
          text: 'Ypatingos formos dienos laukas. Išlaikyk seriją, ir prizai bus didesni.',
        },
        {
          title: 'Šeši sunkumo lygiai',
          text: 'Begaliniai klasikiniai lygiai — nuo greito apšilimo iki galvą laužančių „Beprotiško“ lygio laukų, o dar Meistro kelio piešiniai už tavo pergales.',
        },
        {
          title: 'Retenybių medžioklė',
          text: 'Nuo paprastų iki legendinių: užbaik visą kategoriją ir atrakink jos rečiausią piešinį.',
        },
        {
          title: 'Pasiekimai ir lyderių lentelės',
          text: 'Game Center iPhone ir iPad įrenginiuose: dešimtys pasiekimų ir savaitinės lyderių lentelės, kuriose gali kilti vis aukščiau.',
        },
        {
          title: 'Sukurtas atsipalaiduoti',
          text: 'Tamsi ir šviesi temos, švelnūs garsai ir vibracija. Be paskyros, veikia visiškai be interneto.',
        },
      ],
      faq: [
        {
          q: 'Kas yra shikaku?',
          a: 'Loginis galvosūkis iš Japonijos: tinklelį reikia padalyti į stačiakampius taip, kad kiekviename būtų vienas skaičius, lygus jo plotui. Angliškai jis dar vadinamas Rectangles arba Divide by Squares.',
        },
        {
          q: 'Ar Pixtangle nemokamas?',
          a: 'Taip. Pixtangle nemokamas iPhone, iPad ir Android įrenginiuose, su reklamomis ir neprivalomais pirkiniais programėlėje — tarp jų yra rinkinys, išjungiantis reklamas tarp lygių.',
        },
        {
          q: 'Ar galima žaisti be interneto?',
          a: 'Taip. Paskyros nereikia, žaisti galima be interneto; pažanga saugoma įrenginyje ir išsaugoma kartu su telefono atsargine kopija.',
        },
        {
          q: 'Kiek sunku gali būti?',
          a: 'Šeši sunkumo lygiai veda nuo mažų „Lengvo“ lygio laukų iki didelių „Beprotiško“ lygio laukų, pilnų klaustukų užuominų, — o dar yra kasdien naujas dienos iššūkis ir Maratonas prieš laikrodį.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Kryželiu siuvinėta nonograma',
      tagline: 'Kiekvienas galvosūkis — dygsnis didesniame paveiksle.',
      summary:
        'Skaityk skaičius prie eilučių ir stulpelių, siuvinėk tinkamus langelius — ir kiekviena išspręsta nonograma bus įsiuvinėta į sceną tavo lankelyje.',
      platforms: 'iPhone, iPad ir Android įrenginiams',
      keywords: [
        'nonograma',
        'nonogramos',
        'japoniškas kryžiažodis',
        'japoniški kryžiažodžiai',
        'picross',
        'griddlers',
        'siuvinėjimas kryželiu',
        'siuvinėjimas',
        'loginis galvosūkis',
        'loginis žaidimas',
        'skaičių galvosūkis',
        'pikselių menas',
        'žaidimas',
        'mobilusis žaidimas',
        'galvosūkių žaidimas',
        'nemokamas žaidimas',
        'žaidimas be interneto',
      ],
      art: {
        alt: 'Siuvinėjimo lankelis su išsiuvinėta gėlių pieva: drugelis, saulė, gėlės ir musmirė, kurią dar reikia išsiuvinėti',
      },
      rules: {
        steps: [
          'Skaičiai prie kiekvienos eilutės ir stulpelio — iš eilės einančių užpildytų langelių grupės, ta pačia tvarka.',
          'Siuvinėk langelius, kurie turi būti užpildyti, o tuos, kurie lieka tušti, pažymėk kryželiu.',
          'Atsargiai — neteisingas dygsnis atima vieną iš tavo išsiuvinėtų širdelių.',
          'Išspręsk tinklelį, ir figūra bus įsiuvinėta į sceną tavo lankelyje.',
        ],
        alt: 'Beveik išspręsta nonograma su kate: granatiniu siūlu išsiuvinėti langeliai, tuščiuose — kryželiai',
      },
      features: [
        {
          title: 'Scenos siuvinėti',
          text: 'Gėlių pieva, Stounhendžas, vaisių piknikas, Saulės sistema, japoniškas sodas, lėlių namelis, žiemos kaimelis, jūros dugnas — ir dar daugiau.',
        },
        {
          title: 'Tikri siuvinėjimo dygsniai',
          text: 'Lygusis dygsnis, grandinėlė, žuvies ašakos dygsnis ir prancūziški mazgeliai — kiekviena figūra išsiuvinėta savo siūlu ir savo faktūra.',
        },
        {
          title: 'Begalinis rankšluostis',
          text: 'Po pirmosios scenos atsivers raštuotas rankšluostis su liaudies raštais — ir jo raštai niekada nesibaigia.',
        },
        {
          title: 'Užuominos, kai užstringi',
          text: 'Atverk vieną langelį ar visą liniją ir siuvinėk toliau.',
        },
        {
          title: 'Dovana kasdien',
          text: 'Grįžk kasdien atsiimti dovanos, kuri didėja kartu su tavo serija.',
        },
        {
          title: 'Malonu akims',
          text: 'Švelnios lino spalvos, tylūs dygsnių garsai, nereikia nei paskyros, nei interneto.',
        },
      ],
      supportNote: 'Parašyti mums galima ir iš žaidimo: Profilis → Parašyk mums.',
    },
  },
};
