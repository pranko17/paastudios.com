// Danish translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'da',
  hreflang: 'da',
  name: 'Dansk',
  ogLocale: 'da_DK',
  ui: {
    skip: 'Gå til indholdet',
    navGames: 'Spil',
    navContact: 'Kontakt',
    fineNoCookies: 'Dette websted sætter ingen cookies og bruger ingen trackere.',
    fineTrademarks:
      'App Store er et servicemærke tilhørende Apple Inc. Google Play og Google Play-logoet er varemærker tilhørende Google LLC.',
    appStoreAlt: 'Hent {name} i App Store',
    googlePlayAlt: 'Hent {name} på Google Play',
    comingSoon: 'Snart {stores}',
    storeAppStore: 'i App Store',
    storeGooglePlay: 'på Google Play',
    and: 'og',
    freeOn: 'Gratis til {platforms}',
    howToPlay: 'Sådan spiller du',
    tips: 'Tips til at løse',
    faq: 'Spørgsmål og svar',
    gallery: 'Et nærmere kig',
    screenshots: 'Skærmbilleder',
    features: 'Det får du',
    support: 'Support',
    supportText:
      'Spørgsmål, idéer, eller virker noget ikke? Skriv til os – vi læser hver eneste besked.',
    supportPage: 'Supportside',
    privacyPolicy: 'Privatlivspolitik',
    moreFrom: 'Mere fra {studio}',
    language: 'Sprog',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Uafhængigt spilstudie',
    ourGames: 'Vores spil',
    howWeMake: 'Sådan laver vi dem',
    sayHello: 'Sig hej',
    sayHelloText:
      'Spørgsmål, idéer, en fejl – eller bare et venligt ord. Skriv til det spil, du spiller: vi læser hver eneste besked.',
    discover: 'Opdag {name}',
    docDescription: '{title} for {name} fra {studio}.',
  },
  studio: {
    title: 'PAA Studios – små, rolige puslespil',
    description:
      'PAA Studios laver hyggelige logikspil til iPhone, iPad og Android: Pixtangle og Stitch Tales.',
    headline: 'Små, [rolige]\npuslespil.',
    intro:
      'Vi laver hyggelige logikspil til iPhone, iPad og Android. Hver opgave ender med et lille billede – et dyr i pixelkunst, en broderet sommerfugl – og der er aldrig travlt med at nå dertil.',
    principles: [
      {
        title: 'Virker offline',
        text: 'Ingen forbindelse nødvendig. Løs opgaver i flyet, i metroen eller et sted helt uden dækning.',
      },
      {
        title: 'Ingen konti',
        text: 'Åbn spillet, og spil. Ingen tilmelding, intet login, ingen e-mailadresse, du skal give fra dig.',
      },
      {
        title: 'Dine fremskridt er dine',
        text: 'De gemmes på din enhed og sikkerhedskopieres til din egen iCloud- eller Google-konto – vi har ingen servere at sende dem til.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku-logikopgave',
      tagline: 'Del gitteret. Se pixelkunsten blomstre.',
      summary:
        'Del brættet i rektangler – hvert tal er størrelsen på sit eget rektangel. Fyld hele gitteret, og opgaven blomstrer op til et billede i pixelkunst til din samling.',
      platforms: 'iPhone, iPad og Android',
      keywords: [
        'shikaku',
        'shikaku-opgave',
        'rektangelopgave',
        'logikopgave',
        'logikspil',
        'talgåde',
        'pixelkunst',
        'hjernetræning',
        'tankespil',
        'spil',
        'mobilspil',
        'puslespil',
        'gratis spil',
        'spil uden internet',
      ],
      art: {
        alts: [
          'Et bræt på »Mellem« midt i løsningen',
          'Det færdige billede »Kirsebærblomst«',
          'Samlingen af pixelbilleder efter kategori',
        ],
      },
      rules: {
        intro:
          'Pixtangle bygger på Shikaku, en japansk logikopgave til papir og blyant, som også er kendt under de engelske navne Rectangles og Divide by Squares. Brættet er et gitter med tal i nogle af felterne: del det i rektangler, så hvert felt hører til præcis ét af dem.',
        steps: [
          'Træk fingeren hen over brættet for at tegne et rektangel omkring et tal.',
          'Hvert rektangel indeholder præcis ét tal…',
          '…og det tal er dets areal i felter.',
          'Dæk hele brættet, så dukker billedet frem.',
        ],
        notes: [
          'Kvadrater tæller som rektangler: et 4-tal kan være både 2 × 2 og 1 × 4.',
          'Et spørgsmålstegn er et rektangel af ukendt størrelse: det indeholder også præcis ét tegn, men arealet bestemmer du.',
        ],
        tips: [
          'Begynd med tal, der kun passer på én måde: et tal, der er klemt inde mellem kanten og sine naboer, efterlader ofte kun én form.',
          'Et primtal – 2, 3, 5, 7 – kan kun være en lige række felter: én række eller én kolonne.',
          'Kig efter felter, som kun ét tal kan nå: de skal høre til det tals rektangel.',
          'Store tal i hjørner og langs kanterne har få steder at gå hen – prøv dem tidligt.',
          'Sidder du fast? Et hint viser ét rigtigt rektangel, og derfra fortsætter du selv.',
        ],
        alt: 'Et Pixtangle-bræt på seks gange seks felter: pastelfarvede rektangler med tal, ét af dem er ved at blive tegnet',
      },
      screenshots: [
        'Et bræt på »Mellem« midt i løsningen',
        'Brættet med »Kirsebærblomst« før det første rektangel',
        'Det færdige billede »Kirsebærblomst«',
        'Samlinger af pixelbilleder efter kategori',
        'Kalenderen for dagens udfordring',
        'Et løb i Maraton: brætter mod uret',
        'Seks sværhedsgrader af klassiske baner',
      ],
      features: [
        {
          title: '270+ pixelbilleder',
          text: 'Ti kategorier, fra dyr til rummet. Hvert billede er et bræt formet som billedet – løs det for at farvelægge det.',
        },
        {
          title: 'En ny udfordring hver dag',
          text: 'Et dagligt bræt med en unik form. Hold din serie i live for større belønninger.',
        },
        {
          title: 'Seks sværhedsgrader',
          text: 'Endeløse klassiske baner, fra hurtig opvarmning til hjernevridere på »Vanvittig«, plus billeder fra Mesterens vej for dine sejre.',
        },
        {
          title: 'Sjældenheder at jage',
          text: 'Fra almindelig til legendarisk: fuldfør en hel kategori for at låse dens sjældneste billede op.',
        },
        {
          title: 'Præstationer og ranglister',
          text: 'Game Center på iPhone og iPad: snesevis af præstationer og ugentlige ranglister at klatre op ad.',
        },
        {
          title: 'Lavet til at slappe af',
          text: 'Mørkt og lyst tema, bløde lyde og vibration. Ingen konto, virker helt offline.',
        },
      ],
      faq: [
        {
          q: 'Hvad er Shikaku?',
          a: 'En logikopgave fra Japan: del et gitter i rektangler, så hvert af dem indeholder ét tal, der svarer til dets areal. Den kaldes også Rectangles eller Divide by Squares.',
        },
        {
          q: 'Er Pixtangle gratis?',
          a: 'Ja. Pixtangle er gratis på iPhone, iPad og Android, med reklamer og valgfrie køb i appen – blandt andet en pakke, der slår reklamerne mellem banerne fra.',
        },
        {
          q: 'Virker det offline?',
          a: 'Ja. Der er ingen konto, og du kan spille uden internet; dine fremskridt bliver på din enhed og kommer med i din telefons sikkerhedskopi.',
        },
        {
          q: 'Hvor svært bliver det?',
          a: 'Seks sværhedsgrader fører dig fra små brætter på »Let« til store brætter på »Vanvittig« fulde af spørgsmålstegn – plus dagens udfordring, ny hver dag, og Maraton mod uret.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Korssting-nonogram',
      tagline: 'Hver opgave er et sting i et større billede.',
      summary:
        'Læs tallene langs rækker og kolonner, brodér de rigtige felter – og hvert løst nonogram bliver broderet ind i en scene i din broderiring.',
      platforms: 'iPhone, iPad og Android',
      keywords: [
        'nonogram',
        'nonogrammer',
        'picross',
        'griddlers',
        'hanjie',
        'korssting',
        'broderi',
        'logikopgave',
        'logikspil',
        'talgåde',
        'pixelkunst',
        'spil',
        'mobilspil',
        'puslespil',
        'gratis spil',
        'spil uden internet',
      ],
      art: {
        alt: 'En broderiring med en broderet blomstereng: en sommerfugl, en sol, blomster og en fluesvamp, der endnu ikke er broderet',
      },
      rules: {
        steps: [
          'Tallene ved hver række og kolonne angiver i rækkefølge grupperne af udfyldte felter.',
          'Brodér de felter, der skal udfyldes; markér dem, der skal forblive tomme, med et kryds.',
          'Pas på – et forkert sting koster et liv, et af dine broderede hjerter.',
          'Løs gitteret, så bliver figuren broderet ind i scenen i din broderiring.',
        ],
        alt: 'Et næsten løst nonogram med en kat: granatrøde broderede felter, kryds i de tomme',
      },
      features: [
        {
          title: 'Scener at brodere',
          text: 'En blomstereng, Stonehenge, en frugtpicnic, solsystemet, en japansk have, et dukkehus, en vinterlandsby, havbunden – og mere til.',
        },
        {
          title: 'Ægte broderisting',
          text: 'Fladsting, kædesting, fiskebenssting og franske knuder – hver figur er syet med sit eget garn og sin egen struktur.',
        },
        {
          title: 'En endeløs navneklud',
          text: 'Efter din første scene åbner en navneklud med traditionelle mønstre – og dens mønstre slipper aldrig op.',
        },
        {
          title: 'Hints, når du sidder fast',
          text: 'Afslør et enkelt felt eller en hel linje, og brodér videre.',
        },
        {
          title: 'En gave hver dag',
          text: 'Kom tilbage hver dag efter en belønning, der vokser med din serie.',
        },
        {
          title: 'Skånsomt for øjnene',
          text: 'Bløde hørfarver, stille broderilyde, ingen konto og intet internet nødvendigt.',
        },
      ],
      supportNote: 'Du kan også kontakte os fra spillet under Profil → Kontakt os.',
    },
  },
};
