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
    madeFor: 'Žaidimas {platforms}',
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
        alts: [
          'Pelėda, ryškėjanti nonogramoje, tuščiuose langeliuose — kryželiai',
          'Scena „Zodiakas“ lankelyje, išsiuvinėta figūra po figūros',
          'Scenos „Katė prie lango“ stambus planas: kregždės, drugelis, katė ir siūlų kamuolys',
        ],
      },
      cardArt: {
        alt: 'Žaidime užbaigti siuvinėjimo lankeliai: priekyje „Katė prie lango“, už jos „Vitražo paukščiai“ ir „Saulės sistema“, šalia adata su granato spalvos siūlu',
      },
      rules: {
        intro:
          'Stitch Tales pagrįstas nonogramomis — loginiais galvosūkiais, atskleidžiančiais paveikslėlį. Jie dar vadinami japoniškais kryžiažodžiais, griddlers arba hanjie. Skaičiai prie eilučių ir virš stulpelių nurodo, kuriuos langelius užpildyti; užpildyk tinkamus, ir pasirodys paslėptas paveikslėlis — čia tai figūra, kuri įsiuvinėjama į sceną tavo lankelyje.',
        steps: [
          'Skaičiai prie eilutės ar virš stulpelio nurodo, kiek langelių iš eilės išsiuvinėti ir kokia tvarka.',
          'Tarp dviejų atkarpų visada yra bent vienas tuščias langelis — pažymėk jį kryželiu.',
          'Perbrauk pirštu, ir siūlas seks paskui jį per langelius.',
          'Neteisingas dygsnis atima vieną iš trijų tavo gyvybių, tad neskubėk.',
          'Išspręsk tinklelį, ir figūra bus įsiuvinėta į sceną tavo lankelyje.',
        ],
        notes: [
          'Skaičius virš stulpelio skaityk iš viršaus į apačią, o prie eilutės — iš kairės į dešinę.',
          'Raštuotame rankšluostyje kiekvienas skaičius turi savo siūlo spalvą: skirtingų spalvų atkarpos gali liestis, o tos pačios spalvos atkarpas visada skiria tuščias langelis.',
          'Pirmoji figūra supažindins tave su visomis taisyklėmis.',
        ],
        tips: [
          'Pradėk nuo pilniausių linijų: sudėk atkarpas ir pridėk po vieną tuščią langelį tarp kiekvienų dviejų. Jei suma lygi linijos ilgiui, visa linija išspręsta; jei trūksta tik langelio ar dviejų, ilgesnėse atkarpose jau yra tikrai žinomų langelių.',
          'Pastumk atkarpą kiek tik galima į vieną linijos galą, paskui į kitą: langelius, kuriuos ji uždengia abu kartus, visada reikia išsiuvinėti. 10 langelių linijoje 7 visada užpildo keturis vidurinius langelius.',
          'Dygsnis prie pat tinklelio krašto yra pirmosios atkarpos pradžia: išsiuvinėk nuo jo visą atkarpą ir už jos padėk kryželį.',
          'Kai linija išspręsta, jos tušti langeliai gauna kryželius — ir kiekvienas kryželis skersinėms linijoms parodo, kur atkarpai vietos nėra.',
          'Nespėliok: neteisingas dygsnis kainuoja gyvybę. Jei linijoje dar nėra nieko tikro, grįžk prie jos, kai padirbėsi su ją kertančiomis linijomis.',
        ],
        alt: 'Beveik išspręsta nonograma su kate: granatiniu siūlu išsiuvinėti langeliai, tuščiuose — kryželiai',
      },
      screenshots: [
        'Pelėda, ryškėjanti nonogramoje, tuščiuose langeliuose — kryželiai',
        'Scena „Zodiakas“ lankelyje, išsiuvinėta figūra po figūros',
        'Scenos „Katė prie lango“ stambus planas: kregždės, drugelis, katė ir siūlų kamuolys',
        'Kalendorius: mažas siuvinys kiekvienai dienai ir ežiukas visam mėnesiui',
        'Begalinis rankšluostis su spalvotais liaudies raštais',
        'Baigtų lankelių kolekcija',
      ],
      features: [
        {
          title: 'Lankelis po lankelio',
          text: 'Katė prie lango, vitražo paukščiai, žiemos kaimelis, Asgardo menės, Laukiniai Vakarai ir dar daugiau. Kiekvienas baigtas lankelis užima vietą tavo kolekcijoje.',
        },
        {
          title: 'Tarsi tikras siuvinys',
          text: 'Kiekviena figūra — su savo siūlais ir dygsniais, švelniais šešėliais ant lino ir tyliais adatos bei lankelio garsais.',
        },
        {
          title: 'Kasdienių dygsnių kalendorius',
          text: 'Kiekvieną dieną laukia mažas siuvinys. Išsiuvinėk visas mėnesio dienas, ir atsivers didžioji jo figūra — praleistos dienos tavęs palauks.',
        },
        {
          title: 'Begalinis rankšluostis',
          text: 'Po pirmosios baigtos scenos atsivers raštuotas rankšluostis su liaudies raštais: spalvotos nonogramos dviem ar trimis siūlais, kurios niekada nesibaigia.',
        },
        {
          title: 'Užuominos sunkioms akimirkoms',
          text: 'Atverk langelį, visą liniją ar 10 atsitiktinių langelių — o antpirštis apsaugos nuo kitos klaidos.',
        },
        {
          title: 'Be laikmačio ir skubos',
          text: 'Dovana kasdien, Game Center pasiekimai ir lyderių lentelės iPhone ir iPad įrenginiuose, o žaisti galima be interneto.',
        },
      ],
      supportNote: 'Parašyti mums galima ir iš žaidimo: Profilis → Parašyk mums.',
    },
  },
};
