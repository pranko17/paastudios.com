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
        alt: 'Tikkimisraam tikitud lilleniiduga: liblikas, päike, lilled ja kärbseseen, mis ootab veel tikkimist',
      },
      rules: {
        steps: [
          'Arvud iga rea ja veeru kõrval näitavad järjest täidetud ruutude plokke.',
          'Tiki ruudud, mis peavad olema täidetud; märgi tühjaks jäävad ruudud ristiga.',
          'Ettevaatust — vale piste maksab ühe sinu tikitud südametest.',
          'Lahenda ruudustik ja kujund tikitakse stseeni sinu raamis.',
        ],
        alt: 'Peaaegu lahendatud kassiga nonogramm: granaatpunase niidiga tikitud ruudud, tühjades ristid',
      },
      features: [
        {
          title: 'Stseenid tikkimiseks',
          text: 'Lilleniit, Stonehenge, puuviljapiknik, Päikesesüsteem, Jaapani aed, nukumaja, talvine küla, merepõhi — ja palju muud.',
        },
        {
          title: 'Päris tikandipisted',
          text: 'Laduspiste, ahelpiste, kalaluupiste ja prantsuse sõlmed — iga kujund on tikitud oma niidi ja oma tekstuuriga.',
        },
        {
          title: 'Lõputu mustrirätik',
          text: 'Pärast esimest stseeni avaneb rahvamustritega mustrirätik — ja selle mustrid ei saa kunagi otsa.',
        },
        {
          title: 'Vihjed, kui jääd kinni',
          text: 'Ava üks ruut või terve joon ja tiki edasi.',
        },
        {
          title: 'Kingitus iga päev',
          text: 'Tule iga päev tagasi auhinna järele, mis kasvab koos sinu seeriaga.',
        },
        {
          title: 'Silmasõbralik',
          text: 'Pehmed linased toonid, vaiksed pistehääled, pole vaja kontot ega internetti.',
        },
      ],
      supportNote: 'Meiega saab ühendust ka mängus: Profiil → Kirjuta meile.',
    },
  },
};
