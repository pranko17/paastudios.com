// Finnish translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'fi',
  hreflang: 'fi',
  name: 'Suomi',
  ogLocale: 'fi_FI',
  ui: {
    skip: 'Siirry sisältöön',
    navGames: 'Pelit',
    navContact: 'Yhteystiedot',
    fineNoCookies: 'Tämä sivusto ei aseta evästeitä eikä käytä seurantatyökaluja.',
    fineTrademarks:
      'App Store on Apple Inc:n palvelumerkki. Google Play ja Google Play -logo ovat Google LLC:n tavaramerkkejä.',
    appStoreAlt: 'Lataa {name} App Storesta',
    googlePlayAlt: 'Hanki {name} Google Playsta',
    comingSoon: 'Tulossa pian {stores}',
    storeAppStore: 'App Storeen',
    storeGooglePlay: 'Google Playhin',
    and: 'ja',
    freeOn: 'Ilmainen {platforms}',
    howToPlay: 'Näin pelaat',
    tips: 'Vinkkejä ratkaisemiseen',
    faq: 'Kysymyksiä ja vastauksia',
    gallery: 'Lähempää katsottuna',
    screenshots: 'Kuvakaappaukset',
    features: 'Mitä pelissä on',
    support: 'Tuki',
    supportText:
      'Kysyttävää, ideoita tai jokin ei toimi? Kirjoita meille — luemme jokaisen viestin.',
    supportPage: 'Tukisivu',
    privacyPolicy: 'Tietosuojakäytäntö',
    moreFrom: 'Muut {studio} -pelit',
    language: 'Kieli',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Itsenäinen pelistudio',
    ourGames: 'Pelimme',
    howWeMake: 'Näin teemme ne',
    sayHello: 'Sano hei',
    sayHelloText:
      'Kysymys, idea, bugi — tai vain ystävällinen sana. Kirjoita sen pelin osoitteeseen, jota pelaat: luemme jokaisen viestin.',
    discover: 'Tutustu peliin {name}',
    docDescription: '{title}: {name}, peli studiolta {studio}.',
  },
  studio: {
    title: 'PAA Studios — pieniä, rauhallisia pulmapelejä',
    description:
      'PAA Studios tekee kodikkaita logiikkapulmia iPhonelle, iPadille ja Androidille: Pixtangle ja Stitch Tales.',
    headline: 'Pieniä, [rauhallisia]\npulmapelejä.',
    intro:
      'Teemme kodikkaita logiikkapulmia iPhonelle, iPadille ja Androidille. Jokainen pulma päättyy pieneen kuvaan — pikselitaiteen eläimeen tai kirjottuun perhoseen — eikä perille ole koskaan kiire.',
    principles: [
      {
        title: 'Toimii ilman verkkoa',
        text: 'Yhteyttä ei tarvita. Ratkaise pulmia lentokoneessa, metrossa tai paikassa, jossa ei ole kenttää lainkaan.',
      },
      {
        title: 'Ei tilejä',
        text: 'Avaa peli ja pelaa. Ei rekisteröitymistä, ei kirjautumista, ei sähköpostiosoitetta luovutettavaksi.',
      },
      {
        title: 'Edistymisesi on sinun',
        text: 'Se pysyy laitteellasi ja varmuuskopioituu omalle iCloud- tai Google-tilillesi — meillä ei ole palvelimia, joille sen voisi lähettää.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku-logiikkapulma',
      tagline: 'Jaa ruudukko. Katso pikselitaiteen puhkeavan kukkaan.',
      summary:
        'Jaa ruudukko suorakulmioihin — jokainen numero on oman suorakulmionsa koko. Täytä koko ruudukko, niin pulma puhkeaa pikselikuvaksi kokoelmaasi.',
      platforms: 'iPhonelle, iPadille ja Androidille',
      keywords: [
        'shikaku',
        'shikaku-pulma',
        'suorakulmiopulma',
        'logiikkapulma',
        'logiikkapeli',
        'numeropulma',
        'pikselitaide',
        'älypeli',
        'aivopähkinä',
        'peli',
        'mobiilipeli',
        'pulmapeli',
        'ilmainen peli',
        'peli ilman nettiä',
        'offline-peli',
      ],
      art: {
        alts: [
          'Keskitason ruudukko kesken ratkaisun',
          'Valmis pikselikuva ”Kirsikankukka”',
          'Pikselikuvien kokoelma kategorioittain',
        ],
      },
      rules: {
        intro:
          'Pixtangle perustuu shikakuun, japanilaiseen kynä ja paperi -logiikkapulmaan, joka tunnetaan myös englanninkielisillä nimillä Rectangles ja Divide by Squares. Ruudukon osassa ruuduista on numeroita: jaa se suorakulmioihin niin, että jokainen ruutu kuuluu tasan yhteen niistä.',
        steps: [
          'Piirrä sormella ruudukon yli suorakulmio numeron ympärille.',
          'Jokaisessa suorakulmiossa on tasan yksi numero…',
          '…ja se numero on suorakulmion pinta-ala ruutuina.',
          'Peitä koko ruudukko, niin kuva tulee esiin.',
        ],
        notes: [
          'Neliöt ovat myös suorakulmioita: 4 voi olla 2 × 2 tai yhtä hyvin 1 × 4.',
          'Kysymysmerkki on suorakulmio, jonka kokoa ei tiedetä: siinäkin on tasan yksi vihje, mutta sen pinta-alan päätät sinä.',
        ],
        tips: [
          'Aloita numeroista, jotka mahtuvat vain yhdellä tavalla: reunan ja naapurien väliin puristuva vihje jättää usein vain yhden mahdollisen muodon.',
          'Alkuluku — 2, 3, 5, 7 — voi olla vain suora ruutujono: yksi rivi tai yksi sarake.',
          'Etsi ruutuja, joihin ulottuu vain yksi numero: niiden on kuuluttava sen numeron suorakulmioon.',
          'Isoilla numeroilla kulmissa ja reunoilla on vähän liikkumavaraa — kokeile niitä ajoissa.',
          'Jumissa? Vihje näyttää yhden oikean suorakulmion, ja jatkat siitä.',
        ],
        alt: 'Kuuden kertaa kuuden ruudun Pixtangle-ruudukko: pastellisävyisiä suorakulmioita numeroineen, yhtä piirretään parhaillaan',
      },
      screenshots: [
        'Keskitason ruudukko kesken ratkaisun',
        'Kirsikankukan ruudukko ennen ensimmäistä suorakulmiota',
        'Valmis pikselikuva ”Kirsikankukka”',
        'Pikselikuvien kokoelmat kategorioittain',
        'Päivän haasteen kalenteri',
        'Maratonin kierros: ruudukoita kelloa vastaan',
        'Klassisten tasojen kuusi vaikeustasoa',
      ],
      features: [
        {
          title: '270+ pikselikuvaa',
          text: 'Kymmenen kategoriaa eläimistä avaruuteen. Jokainen kuva on kuvan muotoinen ruudukko — ratkaise se, niin se värittyy.',
        },
        {
          title: 'Uusi haaste joka päivä',
          text: 'Ainutlaatuisen muotoinen päivän ruudukko. Pidä putkesi yllä, niin palkinnot kasvavat.',
        },
        {
          title: 'Kuusi vaikeustasoa',
          text: 'Loputtomasti klassisia tasoja nopeista lämmittelyistä Mieletön-tason aivopähkinöihin sekä Mestarin polun kuvia voitoistasi.',
        },
        {
          title: 'Harvinaisuuksien metsästystä',
          text: 'Tavallisesta legendaariseen: kokoa koko kategoria, niin sen harvinaisin kuva avautuu.',
        },
        {
          title: 'Saavutukset ja tulostaulukot',
          text: 'Game Center iPhonella ja iPadilla: kymmeniä saavutuksia ja viikoittaiset tulostaulukot, joilla kiivetä ylöspäin.',
        },
        {
          title: 'Tehty rentoutumiseen',
          text: 'Tumma ja vaalea teema, pehmeät äänet ja värinä. Ei tiliä, toimii täysin ilman verkkoyhteyttä.',
        },
      ],
      faq: [
        {
          q: 'Mikä on shikaku?',
          a: 'Japanilainen logiikkapulma: ruudukko jaetaan suorakulmioihin niin, että jokaisessa on yksi numero, joka on sen pinta-ala. Englanniksi sitä kutsutaan myös nimillä Rectangles ja Divide by Squares.',
        },
        {
          q: 'Onko Pixtangle ilmainen?',
          a: 'On. Pixtangle on ilmainen iPhonella, iPadilla ja Androidilla. Pelissä on mainoksia ja vapaaehtoisia sovelluksen sisäisiä ostoja — muun muassa paketti, joka poistaa tasojen väliset mainokset.',
        },
        {
          q: 'Toimiiko peli ilman verkkoyhteyttä?',
          a: 'Toimii. Tiliä ei tarvita, ja voit pelata ilman internetiä; edistymisesi pysyy laitteellasi ja varmuuskopioituu puhelimesi varmuuskopion mukana.',
        },
        {
          q: 'Kuinka vaikeaksi peli käy?',
          a: 'Kuusi vaikeustasoa vie pienistä Helppo-ruudukoista suuriin Mieletön-ruudukoihin, jotka ovat täynnä kysymysmerkkivihjeitä. Lisäksi joka päivä on uusi päivän haaste, ja Maratonissa pelataan aikaa vastaan.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Ristipistoin kirjottu nonogrammi',
      tagline: 'Jokainen pulma on pisto suuremmassa kuvassa.',
      summary:
        'Lue rivien ja sarakkeiden numerot, kirjo oikeat ruudut — ja jokainen ratkaistu nonogrammi kirjotaan kuvaan kirjontakehyksessäsi.',
      platforms: 'iPhonelle, iPadille ja Androidille',
      keywords: [
        'nonogrammi',
        'nonogrammit',
        'japanilainen ristikko',
        'picross',
        'griddlers',
        'ristipisto',
        'kirjonta',
        'logiikkapulma',
        'logiikkapeli',
        'numeropulma',
        'pikselitaide',
        'peli',
        'mobiilipeli',
        'pulmapeli',
        'ilmainen peli',
        'peli ilman nettiä',
      ],
      art: {
        alt: 'Kirjontakehys, johon on kirjottu kukkaniitty: perhonen, aurinko, kukkia ja kärpässieni, joka odottaa vielä kirjomista',
      },
      rules: {
        steps: [
          'Rivin tai sarakkeen vieressä olevat numerot kertovat järjestyksessä, kuinka pitkiä täytettyjen ruutujen jonoja siinä on.',
          'Kirjo ruudut, jotka on täytettävä; merkitse tyhjiksi jäävät ruudut ristillä.',
          'Varovasti — väärä pisto vie yhden kirjotuista sydämistäsi.',
          'Ratkaise ruudukko, niin kuvio kirjotaan kuvaan kirjontakehyksessäsi.',
        ],
        alt: 'Lähes ratkaistu nonogrammi, jossa on kissa: granaatinpunaisella langalla kirjotut ruudut, tyhjissä ruuduissa ristit',
      },
      features: [
        {
          title: 'Kirjottavia kuvia',
          text: 'Kukkaniitty, Stonehenge, hedelmäpiknik, aurinkokunta, japanilainen puutarha, nukkekoti, talvikylä, merenpohja — ja paljon muuta.',
        },
        {
          title: 'Oikeita kirjontapistoja',
          text: 'Laakapisto, ketjupisto, kalanruotopisto ja ranskalaiset solmut — jokainen kuvio kirjotaan omalla langallaan ja omalla pintarakenteellaan.',
        },
        {
          title: 'Loputon merkkausliina',
          text: 'Ensimmäisen kuvan jälkeen avautuu kansanomaisten kuvioiden merkkausliina — eivätkä sen kuviot lopu koskaan.',
        },
        {
          title: 'Vihjeitä, kun jäät jumiin',
          text: 'Paljasta yksi ruutu tai kokonainen linja ja jatka kirjomista.',
        },
        {
          title: 'Lahja joka päivä',
          text: 'Palaa joka päivä hakemaan palkinto, joka kasvaa putkesi mukana.',
        },
        {
          title: 'Silmäystävällinen',
          text: 'Pehmeät pellavan sävyt ja hiljaiset pistojen äänet. Tiliä tai internetiä ei tarvita.',
        },
      ],
      supportNote: 'Voit ottaa meihin yhteyttä myös pelissä: Profiili → Ota yhteyttä.',
    },
  },
};
