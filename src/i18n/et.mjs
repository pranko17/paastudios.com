// Estonian translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'et',
  hreflang: 'et',
  name: 'Eesti',
  ogLocale: 'et_EE',
  ui: {
    skip: 'Mine sisu juurde',
    navGames: 'Mängud',
    navContact: 'Kontakt',
    fineNoCookies: 'See sait ei kasuta küpsiseid ega jälgijaid.',
    fineTrademarks:
      'App Store on Apple Inc. teenusemärk. Google Play ja Google Play logo on Google LLC kaubamärgid.',
    appStoreAlt: "Laadi {name} alla App Store'ist",
    googlePlayAlt: "Hangi {name} Google Play'st",
    comingSoon: 'Varsti saadaval {stores}',
    storeAppStore: "App Store'is",
    storeGooglePlay: "Google Play's",
    and: 'ja',
    freeOn: 'Tasuta {platforms}',
    madeFor: 'Mäng {platforms}',
    howToPlay: 'Kuidas mängida',
    tips: 'Lahendamise nipid',
    faq: 'Küsimused ja vastused',
    gallery: 'Lähemalt',
    screenshots: 'Ekraanipildid',
    features: 'Mida mäng pakub',
    support: 'Tugi',
    supportText:
      'Küsimusi, ideid või midagi ei tööta? Kirjuta meile — me loeme iga sõnumit.',
    supportPage: 'Tugileht',
    privacyPolicy: 'Privaatsuspoliitika',
    moreFrom: 'Veel mänge stuudiolt {studio}',
    language: 'Keel',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Sõltumatu mängustuudio',
    ourGames: 'Meie mängud',
    howWeMake: 'Kuidas me neid teeme',
    sayHello: 'Ütle tere',
    sayHelloText:
      'Küsimus, idee, viga — või lihtsalt hea sõna. Kirjuta selle mängu aadressile, mida mängid: me loeme iga sõnumit.',
    discover: 'Tutvu mänguga {name}',
    docDescription: '{title}: {name}, mäng stuudiolt {studio}.',
  },
  studio: {
    title: 'PAA Studios — väikesed, rahulikud mõistatusmängud',
    description:
      "PAA Studios teeb hubaseid loogikamõistatusi iPhone'ile, iPadile ja Androidile: Pixtangle ja Stitch Tales.",
    headline: 'Väikesed, [rahulikud]\nmõistatus\u00ADmängud.',
    intro:
      "Teeme hubaseid loogikamõistatusi iPhone'ile, iPadile ja Androidile. Iga mõistatus lõpeb väikese pildiga — pikslikunstis looma või tikitud liblikaga —, ja sinna jõudmisega pole kunagi kiiret.",
    principles: [
      {
        title: 'Töötab võrguta',
        text: 'Ühendust pole vaja. Nuputa lennukis, metroos või seal, kus levi üldse pole.',
      },
      {
        title: 'Kontosid pole',
        text: 'Ava mäng ja mängi. Ei registreerimist, ei sisselogimist, ei e-posti aadressi, mida ära anda.',
      },
      {
        title: 'Sinu edenemine on sinu oma',
        text: "See püsib sinu seadmes ja varundatakse sinu enda iCloudi või Google'i kontole — meil pole servereid, kuhu seda saata.",
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku-loogikamõistatus',
      tagline: 'Jaga väli. Vaata, kuidas pikslikunst õide puhkeb.',
      summary:
        'Jaga väli ristkülikuteks — iga arv on oma ristküliku suurus. Täida kogu ruudustik ja mõistatusest puhkeb õide pikslipilt sinu kogu jaoks.',
      platforms: "iPhone'ile, iPadile ja Androidile",
      keywords: [
        'shikaku',
        'shikaku-mõistatus',
        'ristkülikute mõistatus',
        'loogikamõistatus',
        'loogikamäng',
        'numbrimõistatus',
        'pikslikunst',
        'nuputamine',
        'ajutreening',
        'mäng',
        'mobiilimäng',
        'mõistatusmäng',
        'tasuta mäng',
        'mäng ilma internetita',
        'võrguta mäng',
      ],
      art: {
        alts: [
          'Väli raskusastmel „Keskmine“ lahendamise ajal',
          'Valmis pikslipilt „Sakura“',
          'Pikslipiltide kogu kategooriate kaupa',
        ],
      },
      rules: {
        intro:
          'Pixtangle põhineb shikakul — Jaapani pliiatsi ja paberi loogikamõistatusel, mida tuntakse ka ingliskeelsete nimede Rectangles ja Divide by Squares all. Väli on ruudustik, mille mõnes ruudus on arvud: jaga see ristkülikuteks nii, et iga ruut kuuluks täpselt ühte neist.',
        steps: [
          'Tõmba sõrmega üle välja, et joonistada arvu ümber ristkülik.',
          'Igas ristkülikus on täpselt üks arv…',
          '…ja see arv on tema pindala ruutudes.',
          'Kata kogu väli ja pilt ilmub nähtavale.',
        ],
        notes: [
          'Ka ruudukujulised ristkülikud lähevad arvesse: 4 võib olla nii 2 × 2 kui ka 1 × 4.',
          'Küsimärk on tundmatu suurusega ristkülik: selleski on täpselt üks vihje, kuid pindala valid sina.',
        ],
        tips: [
          'Alusta arvudest, mis mahuvad ainult ühel viisil: serva ja naabrite vahele surutud vihje jätab sageli vaid ühe võimaliku kuju.',
          'Algarv — 2, 3, 5, 7 — saab olla ainult sirge ruutude jada: üks rida või üks veerg.',
          'Otsi ruute, milleni ulatub ainult üks arv: need peavad kuuluma selle arvu ristkülikusse.',
          'Suurtel arvudel nurkades ja servades on vähe ruumi — proovi neid varakult.',
          'Jäid kinni? Vihje näitab ühe õige ristküliku ja sealt jätkad ise.',
        ],
        alt: "Pixtangle'i väli kuus korda kuus ruutu: pastelsed ristkülikud arvudega, üht neist joonistatakse parasjagu",
      },
      screenshots: [
        'Väli raskusastmel „Keskmine“ lahendamise ajal',
        'Sakura väli enne esimest ristkülikut',
        'Valmis pikslipilt „Sakura“',
        'Pikslipiltide kogud kategooriate kaupa',
        'Päeva väljakutse kalender',
        'Maratoni jooks: väli välja järel võidu kellaga',
        'Klassikaliste tasemete kuus raskusastet',
      ],
      features: [
        {
          title: '270+ pikslipilti',
          text: 'Kümme kategooriat loomadest kosmoseni. Iga pilt on pildikujuline väli — lahenda see ja see värvub.',
        },
        {
          title: 'Iga päev uus väljakutse',
          text: 'Päeva väli on alati ainulaadse kujuga. Hoia seeriat ja auhinnad kasvavad.',
        },
        {
          title: 'Kuus raskusastet',
          text: 'Lõputult klassikalisi tasemeid kiirest soojendusest kuni kõvade pähkliteni raskusastmel „Meeletu“, lisaks Meistri tee pildid sinu võitude eest.',
        },
        {
          title: 'Jahi haruldusi',
          text: 'Tavalisest legendaarseni: lõpeta terve kategooria, et avada selle haruldaseim pilt.',
        },
        {
          title: 'Saavutused ja edetabelid',
          text: "Game Center iPhone'is ja iPadis: kümneid saavutusi ja iganädalasi edetabeleid, kus kõrgemale tõusta.",
        },
        {
          title: 'Loodud lõõgastumiseks',
          text: 'Tume ja hele teema, mahedad helid ja vibratsioon. Kontot pole vaja, töötab täielikult võrguta.',
        },
      ],
      faq: [
        {
          q: 'Mis on shikaku?',
          a: 'Jaapanist pärit loogikamõistatus: ruudustik tuleb jagada ristkülikuteks nii, et igas oleks üks arv, mis võrdub selle pindalaga. Inglise keeles nimetatakse seda ka Rectangles või Divide by Squares.',
        },
        {
          q: 'Kas Pixtangle on tasuta?',
          a: "Jah. Pixtangle on iPhone'is, iPadis ja Androidis tasuta, reklaamide ja valikuliste rakendusesiseste ostudega — nende seas on pakett, mis lülitab tasemete vahel näidatavad reklaamid välja.",
        },
        {
          q: 'Kas see töötab võrguta?',
          a: 'Jah. Kontot pole ja mängida saab ilma internetita; sinu edenemine püsib seadmes ja varundatakse koos telefoni varukoopiaga.',
        },
        {
          q: 'Kui raskeks see läheb?',
          a: 'Kuus raskusastet viivad väikestest väljadest raskusastmel „Lihtne“ suurte väljadeni raskusastmel „Meeletu“, mis on täis küsimärgiga vihjeid; lisaks on iga päev uus päeva väljakutse ja Maraton võidu kellaga.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Ristpistes tikitud nonogramm',
      tagline: 'Iga mõistatus on piste suuremas pildis.',
      summary:
        'Loe arve ridade ja veergude kõrval, tiki õiged ruudud — ja iga lahendatud nonogramm tikitakse stseeni sinu raamis.',
      platforms: "iPhone'ile, iPadile ja Androidile",
      keywords: [
        'nonogramm',
        'nonogrammid',
        'jaapani ristsõna',
        'picross',
        'griddlers',
        'ristpiste',
        'tikand',
        'tikkimine',
        'loogikamõistatus',
        'loogikamäng',
        'numbrimõistatus',
        'pikslikunst',
        'mäng',
        'mobiilimäng',
        'mõistatusmäng',
        'tasuta mäng',
        'mäng ilma internetita',
      ],
      art: {
        alts: [
          'Nonogrammil võtab kuju öökull, tühjades ruutudes ristid',
          'Stseen „Sodiaak“ raamis, tikitud kujund kujundi haaval',
          'Lähivaade stseenist „Kass akna juures“: pääsukesed, liblikas, kass ja lõngakera',
        ],
      },
      cardArt: {
        alt: 'Mängus valmis tikitud raamid: ees „Kass akna juures“, selle taga „Vitraažlinnud“ ja „Päikesesüsteem“ ning nõel granaatpunase niidiga',
      },
      rules: {
        intro:
          'Stitch Tales põhineb nonogrammidel — loogikamõistatustel, millest sünnib pilt. Neid tuntakse ka jaapani ristsõnadena ning nimede griddlers ja hanjie all. Ridade kõrval ja veergude kohal olevad arvud näitavad, millised ruudud täita; täida õiged ruudud ja nähtavale tuleb peidetud pilt — siin kujund, mis tikitakse stseeni sinu raamis.',
        steps: [
          'Arvud rea kõrval või veeru kohal näitavad, mitu ruutu järjest tuleb tikkida ja mis järjekorras.',
          'Kahe ploki vahel on alati vähemalt üks tühi ruut — märgi see ristiga.',
          'Libista sõrmega üle ruutude ja niit järgneb sellele.',
          'Vale piste maksab ühe sinu kolmest elust, nii et ära kiirusta.',
          'Lahenda ruudustik ja kujund tikitakse stseeni sinu raamis.',
        ],
        notes: [
          'Veeru kohal olevaid arve loe ülevalt alla ja rea kõrval olevaid vasakult paremale.',
          'Mustrirätikul on igal arvul oma niidivärv: eri värvi plokid võivad üksteist puudutada, sama värvi plokkide vahel peab aga olema tühi ruut.',
          'Esimene kujund viib sind samm-sammult läbi kõigi reeglite.',
        ],
        tips: [
          'Alusta kõige tihedamatest joontest: liida plokid kokku, lisades iga kahe ploki vahele ühe tühja ruudu. Kui summa võrdub joone pikkusega, on terve joon lahendatud; kui puudu jääb vaid ruut või kaks, on pikemates plokkides juba ruute, milles võid kindel olla.',
          'Nihuta plokk nii kaugele kui võimalik joone ühte otsa, seejärel teise: ruudud, mida see mõlemal korral katab, tuleb alati tikkida. 10 ruudu pikkuses joones täidab 7 alati neli keskmist ruutu.',
          'Piste päris ruudustiku serval on esimese ploki algus: tiki sealt terve plokk ja märgi selle järel olev ruut ristiga.',
          'Kui joon on lahendatud, märgitakse selle tühjad ruudud ristiga — ja iga rist näitab ristuvatele joontele, kuhu plokk minna ei saa.',
          'Ära paku huupi: vale piste maksab elu. Kui joonel pole veel midagi kindlat, tule selle juurde tagasi, kui oled ristuvad jooned läbi vaadanud.',
        ],
        alt: 'Peaaegu lahendatud kassiga nonogramm: granaatpunase niidiga tikitud ruudud, tühjades ristid',
      },
      screenshots: [
        'Nonogrammil võtab kuju öökull, tühjades ruutudes ristid',
        'Stseen „Sodiaak“ raamis, tikitud kujund kujundi haaval',
        'Lähivaade stseenist „Kass akna juures“: pääsukesed, liblikas, kass ja lõngakera',
        'Kalender: väike tikand igaks päevaks ja siil terveks kuuks',
        'Lõputu mustrirätik värviliste rahvamustritega',
        'Valmis raamide kogu',
      ],
      features: [
        {
          title: 'Raam raami järel',
          text: 'Kass akna juures, vitraažlinnud, talvine küla, Asgardi saalid, Metsik Lääs ja palju muud. Iga valmis raam saab oma koha sinu kogus.',
        },
        {
          title: 'Tikand nagu päris',
          text: 'Igal kujundil on oma niidid ja pisted, linasel kangal pehmed varjud ning nõela ja raami vaiksed helid.',
        },
        {
          title: 'Igapäevaste pistete kalender',
          text: 'Iga päev ootab väike tikand. Tiki kuu kõik päevad ja avaneb kuu suur kujund — vahele jäänud päevad ootavad sind.',
        },
        {
          title: 'Lõputu mustrirätik',
          text: 'Pärast esimest valmis stseeni avaneb rahvamustritega mustrirätik: värvilised nonogrammid kahe või kolme niidiga, mis ei saa kunagi otsa.',
        },
        {
          title: 'Vihjed keerulisteks hetkedeks',
          text: 'Ava üks ruut, terve joon või 10 juhuslikku ruutu — ja sõrmkübar kaitseb sind järgmise vea eest.',
        },
        {
          title: 'Ei taimerit, ei kiirustamist',
          text: "Kingitus iga päev, Game Center iPhone'is ja iPadis saavutuste ja edetabelitega ning mängimiseks pole internetti vaja.",
        },
      ],
      supportNote: 'Meiega saab ühendust ka mängus: Profiil → Kirjuta meile.',
    },
  },
};
