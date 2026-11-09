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
    madeFor: 'Til {platforms}',
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
        alts: [
          'En ugle tager form på et nonogram med kryds i de tomme felter',
          'Scenen »Dyrekredsen« i broderiringen, broderet figur for figur',
          'Scenen »Kat i vinduet« tæt på: svaler, en sommerfugl, en kat og et garnnøgle',
        ],
      },
      cardArt: {
        alt: 'En broderiring med en broderet blomstereng: en sommerfugl, en sol, blomster og en fluesvamp, der endnu ikke er broderet',
      },
      banner: {
        alt: 'Et kludetæppe af nonogrammer, der bliver til broderi: en blæksprutte med klovnfisk, en tukan, en torii-port, svaler, en ræv, et juletræ og mere til',
      },
      rules: {
        intro:
          'Stitch Tales bygger på nonogrammer, logiske billedopgaver, der også er kendt som griddlers, hanjie eller japanske krydsord. Tallene ved rækkerne og over kolonnerne viser, hvilke felter du skal udfylde; udfylder du de rigtige, kommer et skjult billede frem – her en figur, der bliver broderet ind i scenen i din broderiring.',
        steps: [
          'Tallene ved en række eller over en kolonne viser, hvor mange felter i træk der skal broderes, og i hvilken rækkefølge.',
          'Mellem to stykker er der altid mindst ét tomt felt – markér det med et kryds.',
          'Stryg med fingeren, så følger tråden med hen over felterne.',
          'Et forkert sting koster et af dine tre liv, så tag dig god tid.',
          'Løs gitteret, så bliver figuren broderet ind i scenen i din broderiring.',
        ],
        notes: [
          'Tallene over en kolonne læses oppefra og ned, og tallene ved en række fra venstre mod højre.',
          'På navnekluden har hvert tal sin egen garnfarve: stykker i forskellige farver må røre hinanden, mens stykker i samme farve skal have et tomt felt imellem.',
          'Din første figur guider dig gennem alle reglerne.',
        ],
        tips: [
          'Begynd med de mest fyldte linjer: læg stykkerne sammen med ét tomt felt imellem hvert. Er summen lig med linjens længde, er hele linjen løst; mangler der kun et felt eller to, har de længere stykker allerede felter, du kan være sikker på.',
          'Skub et stykke så langt som muligt mod den ene ende og derefter mod den anden: de felter, det dækker begge gange, er altid broderet. Et 7-tal i en linje på 10 fylder altid de fire midterste.',
          'Et sting helt ude ved kanten af gitteret er begyndelsen på det første stykke: brodér hele stykket derfra, og sæt et kryds efter det.',
          'Når en linje er løst, får dens tomme felter kryds – og hvert kryds viser de tværgående linjer, hvor et stykke ikke kan ligge.',
          'Gæt ikke: et forkert sting koster et liv. Er der endnu intet sikkert i en linje, så vend tilbage til den efter de linjer, der krydser den.',
        ],
        alt: 'Et næsten løst nonogram med en kat: granatrøde broderede felter, kryds i de tomme',
      },
      screenshots: [
        'En ugle tager form på et nonogram med kryds i de tomme felter',
        'Scenen »Dyrekredsen« i broderiringen, broderet figur for figur',
        'Scenen »Kat i vinduet« tæt på: svaler, en sommerfugl, en kat og et garnnøgle',
        'Kalenderen: et lille broderi for hver dag og et pindsvin for hele måneden',
        'Den endeløse navneklud med farverige folkemønstre',
        'Samlingen af færdige broderiringe',
      ],
      features: [
        {
          title: 'Broderiring efter broderiring',
          text: 'En kat i vinduet, fugle i glasmosaik, en vinterlandsby, Asgårds haller, det vilde vesten og mange flere. Hver færdig broderiring får sin plads i din samling.',
        },
        {
          title: 'Broderi, der føles ægte',
          text: 'Hver figur har sit eget garn og sine egne sting, bløde skygger på hørlærredet og de stille lyde af nål og broderiring.',
        },
        {
          title: 'En kalender med dagens sting',
          text: 'Et lille broderi venter hver dag. Brodér hele måneden, så låses månedens store figur op – de dage, du er gået glip af, venter på dig.',
        },
        {
          title: 'En endeløs navneklud',
          text: 'Efter din første færdige scene åbner en navneklud med folkelige motiver: farvede nonogrammer i to eller tre slags garn, der aldrig slipper op.',
        },
        {
          title: 'Hints til de svære øjeblikke',
          text: 'Afslør et felt, en hel linje eller 10 tilfældige felter – og et fingerbøl redder dig fra din næste fejl.',
        },
        {
          title: 'Uden tidtagning, uden hast',
          text: 'En gave hver dag, Game Center-præstationer og ranglister på iPhone og iPad, og du behøver ikke internet for at spille.',
        },
      ],
      supportNote: 'Du kan også kontakte os fra spillet under Profil → Kontakt os.',
    },
  },
};
