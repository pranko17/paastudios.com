// Norwegian Bokmål translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'nb',
  hreflang: 'nb',
  name: 'Norsk bokmål',
  ogLocale: 'nb_NO',
  ui: {
    skip: 'Gå til innholdet',
    navGames: 'Spill',
    navContact: 'Kontakt',
    fineNoCookies:
      'Dette nettstedet setter ingen informasjonskapsler og bruker ingen sporingsverktøy.',
    fineTrademarks:
      'App Store er et tjenestemerke som tilhører Apple Inc. Google Play og Google Play-logoen er varemerker som tilhører Google LLC.',
    appStoreAlt: 'Last ned {name} fra App Store',
    googlePlayAlt: 'Hent {name} på Google Play',
    comingSoon: 'Kommer snart {stores}',
    storeAppStore: 'i App Store',
    storeGooglePlay: 'på Google Play',
    and: 'og',
    freeOn: 'Gratis for {platforms}',
    howToPlay: 'Slik spiller du',
    tips: 'Tips for å løse',
    faq: 'Spørsmål og svar',
    gallery: 'En nærmere titt',
    screenshots: 'Skjermbilder',
    features: 'Dette får du',
    support: 'Brukerstøtte',
    supportText:
      'Spørsmål, ideer, eller er det noe som ikke virker? Skriv til oss – vi leser hver eneste melding.',
    supportPage: 'Side for brukerstøtte',
    privacyPolicy: 'Personvernerklæring',
    moreFrom: 'Mer fra {studio}',
    language: 'Språk',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Uavhengig spillstudio',
    ourGames: 'Spillene våre',
    howWeMake: 'Slik lager vi dem',
    sayHello: 'Si hei',
    sayHelloText:
      'Spørsmål, ideer, en feil – eller bare et vennlig ord. Skriv til spillet du spiller: Vi leser hver eneste melding.',
    discover: 'Oppdag {name}',
    docDescription: '{title} for {name} fra {studio}.',
  },
  studio: {
    title: 'PAA Studios – små, rolige puslespill',
    description:
      'PAA Studios lager koselige logikkspill for iPhone, iPad og Android: Pixtangle og Stitch Tales.',
    headline: 'Små, [rolige]\npuslespill.',
    intro:
      'Vi lager koselige logikkspill for iPhone, iPad og Android. Hver oppgave ender med et lite bilde – et dyr i pikselkunst, en brodert sommerfugl – og du trenger aldri å skynde deg dit.',
    principles: [
      {
        title: 'Fungerer uten nett',
        text: 'Ingen tilkobling trengs. Løs oppgaver på flyet, på T-banen eller et sted helt uten dekning.',
      },
      {
        title: 'Ingen kontoer',
        text: 'Åpne spillet og spill. Ingen registrering, ingen innlogging, ingen e-postadresse å gi fra seg.',
      },
      {
        title: 'Fremgangen din er din',
        text: 'Den ligger på enheten din og sikkerhetskopieres til din egen iCloud- eller Google-konto – vi har ingen servere å sende den til.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku-logikkoppgave',
      tagline: 'Del opp rutenettet. Se pikselkunsten blomstre.',
      summary:
        'Del brettet i rektangler – hvert tall er størrelsen på sitt eget rektangel. Fyll hele rutenettet, så blomstrer oppgaven opp til et bilde i pikselkunst til samlingen din.',
      platforms: 'iPhone, iPad og Android',
      keywords: [
        'shikaku',
        'shikaku-oppgave',
        'rektangeloppgave',
        'logikkoppgave',
        'logikkspill',
        'tallgåte',
        'pikselkunst',
        'hjernetrim',
        'tankenøtt',
        'spill',
        'mobilspill',
        'puslespill',
        'gratis spill',
        'spill uten internett',
      ],
      art: {
        alts: [
          'Et brett på «Middels» midt i løsningen',
          'Det ferdige bildet «Kirsebærblomst»',
          'Samlingen av pikselbilder etter kategori',
        ],
      },
      rules: {
        intro:
          'Pixtangle bygger på Shikaku, en japansk logikkoppgave for papir og blyant som også er kjent under de engelske navnene Rectangles og Divide by Squares. Brettet er et rutenett med tall i noen av rutene: Del det i rektangler slik at hver rute hører til nøyaktig ett av dem.',
        steps: [
          'Dra fingeren over brettet for å tegne et rektangel rundt et tall.',
          'Hvert rektangel inneholder nøyaktig ett tall…',
          '…og det tallet er arealet i ruter.',
          'Dekk hele brettet, så kommer bildet fram.',
        ],
        notes: [
          'Kvadrater teller som rektangler: En firer kan være både 2 × 2 og 1 × 4.',
          'Et spørsmålstegn er et rektangel av ukjent størrelse: Også det inneholder nøyaktig ett tegn, men arealet bestemmer du.',
        ],
        tips: [
          'Begynn med tall som bare passer på én måte: Et tall som er klemt inne mellom kanten og naboene sine, gir ofte bare én mulig form.',
          'Et primtall – 2, 3, 5, 7 – kan bare være en rett rekke ruter: én rad eller én kolonne.',
          'Se etter ruter som bare ett tall kan nå: De må høre til det tallets rektangel.',
          'Store tall i hjørner og langs kantene har få steder å gå – prøv dem tidlig.',
          'Står du fast? Et hint viser ett riktig rektangel, og derfra fortsetter du selv.',
        ],
        alt: 'Et Pixtangle-brett på seks ganger seks ruter: pastellfargede rektangler med tall, ett av dem holder på å bli tegnet',
      },
      screenshots: [
        'Et brett på «Middels» midt i løsningen',
        'Brettet med «Kirsebærblomst» før det første rektangelet',
        'Det ferdige bildet «Kirsebærblomst»',
        'Samlinger av pikselbilder etter kategori',
        'Kalenderen for dagens utfordring',
        'Et løp i Maraton: brett mot klokka',
        'Seks vanskelighetsgrader for klassiske brett',
      ],
      features: [
        {
          title: '270+ pikselbilder',
          text: 'Ti kategorier, fra dyr til rommet. Hvert bilde er et brett formet som bildet – løs det for å fargelegge det.',
        },
        {
          title: 'En ny utfordring hver dag',
          text: 'Et daglig brett med unik form. Hold rekken i gang for større belønninger.',
        },
        {
          title: 'Seks vanskelighetsgrader',
          text: 'Endeløse klassiske brett, fra rask oppvarming til hjernetrim på «Vanvittig», pluss bilder fra Mesterens vei for seirene dine.',
        },
        {
          title: 'Sjeldenheter å jakte på',
          text: 'Fra vanlig til legendarisk: Fullfør en hel kategori for å låse opp det sjeldneste bildet i den.',
        },
        {
          title: 'Prestasjoner og topplister',
          text: 'Game Center på iPhone og iPad: dusinvis av prestasjoner og ukentlige topplister å klatre på.',
        },
        {
          title: 'Laget for å slappe av',
          text: 'Mørkt og lyst tema, myke lyder og vibrasjon. Ingen konto, fungerer helt uten nett.',
        },
      ],
      faq: [
        {
          q: 'Hva er Shikaku?',
          a: 'En logikkoppgave fra Japan: Del et rutenett i rektangler slik at hvert av dem inneholder ett tall som er lik arealet. Den kalles også Rectangles eller Divide by Squares.',
        },
        {
          q: 'Er Pixtangle gratis?',
          a: 'Ja. Pixtangle er gratis på iPhone, iPad og Android, med reklame og valgfrie kjøp i appen – blant annet en pakke som slår av reklamen mellom brettene.',
        },
        {
          q: 'Fungerer det uten nett?',
          a: 'Ja. Det finnes ingen konto, og du kan spille uten internett; fremgangen din blir liggende på enheten og kommer med i sikkerhetskopien av telefonen.',
        },
        {
          q: 'Hvor vanskelig blir det?',
          a: 'Seks vanskelighetsgrader tar deg fra små brett på «Lett» til store brett på «Vanvittig» fulle av spørsmålstegn – pluss dagens utfordring, ny hver dag, og Maraton mot klokka.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Korssting-nonogram',
      tagline: 'Hver oppgave er et sting i et større bilde.',
      summary:
        'Les tallene langs radene og kolonnene, broder de riktige rutene – og hvert løst nonogram blir brodert inn i en scene i broderiringen din.',
      platforms: 'iPhone, iPad og Android',
      keywords: [
        'nonogram',
        'nonogrammer',
        'picross',
        'griddlers',
        'hanjie',
        'korssting',
        'broderi',
        'logikkoppgave',
        'logikkspill',
        'tallgåte',
        'pikselkunst',
        'spill',
        'mobilspill',
        'puslespill',
        'gratis spill',
        'spill uten internett',
      ],
      art: {
        alt: 'En broderiring med en brodert blomstereng: en sommerfugl, en sol, blomster og en fluesopp som ennå ikke er brodert',
      },
      rules: {
        steps: [
          'Tallene ved hver rad og kolonne viser gruppene av fylte ruter, i rekkefølge.',
          'Broder rutene som skal fylles; merk dem som skal stå tomme, med et kryss.',
          'Forsiktig – et feil sting koster et liv, ett av de broderte hjertene dine.',
          'Løs rutenettet, så blir figuren brodert inn i scenen i broderiringen din.',
        ],
        alt: 'Et nesten løst nonogram med en katt: granatrøde broderte ruter, kryss i de tomme',
      },
      features: [
        {
          title: 'Scener å brodere',
          text: 'En blomstereng, Stonehenge, en fruktpiknik, solsystemet, en japansk hage, et dukkehus, en vinterlandsby, havbunnen – og mer til.',
        },
        {
          title: 'Ekte broderisting',
          text: 'Plattsøm, kjedesøm, fiskebeinsøm og franske knuter – hver figur er sydd med sitt eget garn og sin egen struktur.',
        },
        {
          title: 'En endeløs mønsterduk',
          text: 'Etter den første scenen åpner det seg en mønsterduk med tradisjonelle mønstre – og mønstrene på den tar aldri slutt.',
        },
        {
          title: 'Hint når du står fast',
          text: 'Avslør en enkelt rute eller en hel linje, og broder videre.',
        },
        {
          title: 'En gave hver dag',
          text: 'Kom tilbake hver dag for en belønning som vokser med rekken din.',
        },
        {
          title: 'Skånsomt for øynene',
          text: 'Myke linfarger, stille broderilyder, ingen konto og ikke noe internett nødvendig.',
        },
      ],
      supportNote: 'Du kan også nå oss fra spillet under Profil → Kontakt oss.',
    },
  },
};
