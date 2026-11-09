// Romanian translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'ro',
  hreflang: 'ro',
  name: 'Română',
  ogLocale: 'ro_RO',
  ui: {
    skip: 'Sari la conținut',
    navGames: 'Jocuri',
    navContact: 'Contact',
    fineNoCookies: 'Acest site nu folosește cookie-uri și nici instrumente de urmărire.',
    fineTrademarks:
      'App Store este o marcă de servicii a Apple Inc. Google Play și sigla Google Play sunt mărci comerciale ale Google LLC.',
    appStoreAlt: 'Descarcă {name} din App Store',
    googlePlayAlt: 'Descarcă {name} de pe Google Play',
    comingSoon: 'În curând {stores}',
    storeAppStore: 'în App Store',
    storeGooglePlay: 'pe Google Play',
    and: 'și',
    freeOn: 'Gratuit pe {platforms}',
    madeFor: 'Pentru {platforms}',
    howToPlay: 'Cum se joacă',
    tips: 'Sfaturi de rezolvare',
    faq: 'Întrebări și răspunsuri',
    gallery: 'Mai de aproape',
    screenshots: 'Capturi de ecran',
    features: 'Ce găsești în joc',
    support: 'Asistență',
    supportText: 'Ai o întrebare, o idee sau ceva nu merge? Scrie-ne — citim fiecare mesaj.',
    supportPage: 'Pagina de asistență',
    privacyPolicy: 'Politica de confidențialitate',
    moreFrom: 'Alte jocuri de la {studio}',
    language: 'Limba',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Studio independent de jocuri',
    ourGames: 'Jocurile noastre',
    howWeMake: 'Cum le facem',
    sayHello: 'Scrie-ne',
    sayHelloText:
      'O întrebare, o idee, o eroare — sau doar o vorbă bună. Scrie la adresa jocului pe care îl joci: citim fiecare mesaj.',
    discover: 'Descoperă {name}',
    docDescription: '{title} pentru {name}, un joc de la {studio}.',
  },
  studio: {
    title: 'PAA Studios — puzzle-uri mici și liniștite',
    description:
      'PAA Studios creează jocuri logice relaxante pentru iPhone, iPad și Android: Pixtangle și Stitch Tales.',
    headline: 'Puzzle-uri mici\nși [liniștite].',
    intro:
      'Creăm puzzle-uri logice relaxante pentru iPhone, iPad și Android. Fiecare puzzle se încheie cu o imagine mică — un animal în pixel art, un fluture brodat — și nu e niciodată nevoie să te grăbești până acolo.',
    principles: [
      {
        title: 'Merge fără internet',
        text: 'Nu ai nevoie de conexiune. Rezolvă puzzle-uri în avion, la metrou sau acolo unde nu ai deloc semnal.',
      },
      {
        title: 'Fără conturi',
        text: 'Deschide jocul și joacă. Fără înregistrare, fără autentificare, fără să-ți dai adresa de e-mail.',
      },
      {
        title: 'Progresul tău îți aparține',
        text: 'Rămâne pe dispozitivul tău, iar copia de rezervă stă în propriul tău cont iCloud sau Google — nu avem servere unde să-l trimitem.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Joc logic Shikaku',
      tagline: 'Taie grila. Privește cum înflorește pixel art-ul.',
      summary:
        'Împarte grila în dreptunghiuri — fiecare număr este mărimea propriului dreptunghi. Umple toată grila, iar puzzle-ul înflorește într-un desen pixel art pentru colecția ta.',
      platforms: 'iPhone, iPad și Android',
      keywords: [
        'shikaku',
        'puzzle shikaku',
        'puzzle cu dreptunghiuri',
        'joc logic',
        'jocuri logice',
        'puzzle logic',
        'puzzle cu numere',
        'pixel art',
        'jocuri de gândire',
        'joc',
        'joc pe mobil',
        'joc de puzzle',
        'joc gratuit',
        'joc fără internet',
      ],
      art: {
        alts: [
          'O grilă pe dificultatea Mediu, cu dreptunghiuri în lucru',
          'Desenul pixel art „Sakura” terminat',
          'Colecția de desene pixel art pe categorii',
        ],
      },
      rules: {
        intro:
          'Pixtangle se bazează pe Shikaku, un puzzle logic japonez cu creion și hârtie, cunoscut și sub numele englezești Rectangles sau Divide by Squares. Tabla de joc este o grilă cu numere în unele celule: împarte-o în dreptunghiuri astfel încât fiecare celulă să aparțină exact unuia dintre ele.',
        steps: [
          'Trage cu degetul peste grilă ca să desenezi un dreptunghi în jurul unui număr.',
          'Fiecare dreptunghi conține exact un număr…',
          '…iar acel număr este aria lui, în celule.',
          'Acoperă toată grila și apare desenul.',
        ],
        notes: [
          'Pătratele contează ca dreptunghiuri: un 4 poate fi 2 × 2, dar și 1 × 4.',
          'Semnul întrebării e un dreptunghi de mărime necunoscută: conține și el exact un semn, dar aria lui o alegi tu.',
        ],
        tips: [
          'Începe cu numerele care încap într-un singur fel: un număr prins între margine și vecini lasă adesea o singură formă posibilă.',
          'Un număr prim — 2, 3, 5, 7 — poate fi doar o linie dreaptă de celule: un singur rând sau o singură coloană.',
          'Caută celulele la care ajunge un singur număr: ele trebuie să facă parte din dreptunghiul acelui număr.',
          'Numerele mari din colțuri și de pe margini au puțin loc — încearcă-le devreme.',
          'Te-ai blocat? Un indiciu îți arată un dreptunghi corect, iar de acolo continui tu.',
        ],
        alt: 'O grilă Pixtangle de șase pe șase: dreptunghiuri pastelate cu numere, unul fiind desenat chiar acum',
      },
      screenshots: [
        'O grilă pe dificultatea Mediu, cu dreptunghiuri în lucru',
        'Grila „Sakura” înainte de primul dreptunghi',
        'Desenul pixel art „Sakura” terminat',
        'Colecții de desene pixel art pe categorii',
        'Calendarul provocării zilei',
        'O cursă de Maraton: grilă după grilă, contra cronometru',
        'Șase dificultăți de niveluri clasice',
      ],
      features: [
        {
          title: '270+ desene pixel art',
          text: 'Zece categorii, de la animale la spațiu. Fiecare desen este o grilă în forma imaginii — rezolv-o ca să-l colorezi.',
        },
        {
          title: 'O provocare nouă în fiecare zi',
          text: 'O grilă zilnică cu formă unică. Păstrează-ți seria pentru recompense mai mari.',
        },
        {
          title: 'Șase dificultăți',
          text: 'Niveluri clasice nesfârșite, de la încălziri rapide până la provocări pe Demențial, plus desene din Calea maestrului pentru victoriile tale.',
        },
        {
          title: 'Rarități de vânat',
          text: 'De la comun la legendar: completează o categorie întreagă ca să-i deblochezi cel mai rar desen.',
        },
        {
          title: 'Realizări și clasamente',
          text: 'Game Center pe iPhone și iPad: zeci de realizări și clasamente săptămânale în care să urci tot mai sus.',
        },
        {
          title: 'Făcut pentru relaxare',
          text: 'Temă întunecată și luminoasă, sunete și vibrații discrete. Fără cont, funcționează complet fără internet.',
        },
      ],
      faq: [
        {
          q: 'Ce este Shikaku?',
          a: 'Un puzzle logic din Japonia: împarți o grilă în dreptunghiuri astfel încât fiecare să conțină un singur număr, egal cu aria lui. Este cunoscut și ca Rectangles sau Divide by Squares.',
        },
        {
          q: 'Pixtangle este gratuit?',
          a: 'Da. Pixtangle este gratuit pe iPhone, iPad și Android, cu reclame și achiziții opționale în aplicație — printre ele, un pachet care oprește reclamele dintre niveluri.',
        },
        {
          q: 'Funcționează fără internet?',
          a: 'Da. Nu ai nevoie de cont și poți juca fără internet; progresul rămâne pe dispozitiv și este salvat odată cu copia de rezervă a telefonului.',
        },
        {
          q: 'Cât de greu devine?',
          a: 'Șase dificultăți te duc de la grile mici pe Ușor până la grile mari pe Demențial, pline de semne de întrebare, plus provocarea zilei, nouă în fiecare zi, și Maratonul contra cronometru.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Nonograme brodate',
      tagline: 'Fiecare puzzle e o cusătură dintr-o imagine mai mare.',
      summary:
        'Citește numerele de lângă rânduri și coloane, brodează celulele potrivite — și fiecare nonogramă rezolvată se brodează într-o scenă din ghergheful tău.',
      platforms: 'iPhone, iPad și Android',
      keywords: [
        'nonogramă',
        'nonograme',
        'nonogram',
        'picross',
        'griddlers',
        'puzzle japonez',
        'cusătură în cruce',
        'goblen',
        'broderie',
        'joc logic',
        'puzzle logic',
        'puzzle cu numere',
        'pixel art',
        'joc',
        'joc pe mobil',
        'joc de puzzle',
        'joc gratuit',
        'joc fără internet',
      ],
      art: {
        alts: [
          'O bufniță care prinde contur într-o nonogramă, cu cruci în celulele goale',
          'Scena „Zodiac” în gherghef, brodată figură cu figură',
          'Prim-plan cu scena „Pisica la fereastră”: rândunele, un fluture, o pisică și un ghem de lână',
        ],
      },
      cardArt: {
        alt: 'Un gherghef cu o pajiște brodată: un fluture, un soare, flori și o ciupercă ce urmează să fie brodată',
      },
      rules: {
        intro:
          'Stitch Tales se bazează pe nonograme, puzzle-uri logice cu imagini, cunoscute și ca griddlers, hanjie sau cuvinte încrucișate japoneze. Numerele de lângă rânduri și de deasupra coloanelor îți spun ce celule să umpli; umple-le pe cele potrivite și apare o imagine ascunsă — aici, o figură brodată în scena din ghergheful tău.',
        steps: [
          'Numerele de lângă un rând sau de deasupra unei coloane arată câte celule la rând trebuie brodate și în ce ordine.',
          'Între două bucăți există mereu cel puțin o celulă goală — marcheaz-o cu o cruce.',
          'Glisează cu degetul, iar firul îl urmează peste celule.',
          'O cusătură greșită costă una dintre cele trei vieți, așa că nu te grăbi.',
          'Rezolvă grila, iar figura se brodează în scena din ghergheful tău.',
        ],
        notes: [
          'Numerele de deasupra unei coloane se citesc de sus în jos, iar cele de lângă un rând, de la stânga la dreapta.',
          'Pe ștergar, fiecare număr are culoarea firului său: bucățile de culori diferite se pot atinge, iar cele de aceeași culoare sunt mereu despărțite de o celulă goală.',
          'Prima figură te poartă prin toate regulile.',
        ],
        tips: [
          'Începe cu liniile cele mai pline: adună bucățile, cu câte o celulă goală între ele. Dacă totalul e egal cu lungimea liniei, toată linia e rezolvată; dacă lipsesc doar una sau două celule, bucățile mai lungi au deja celule sigure.',
          'Împinge o bucată cât se poate de mult spre un capăt, apoi spre celălalt: celulele pe care le acoperă de ambele dăți sunt mereu brodate. Un 7 într-o linie de 10 umple întotdeauna cele patru celule din mijloc.',
          'O cusătură chiar la marginea grilei e începutul primei bucăți: brodează de acolo toată bucata și pune o cruce imediat după ea.',
          'Când o linie e rezolvată, celulele ei goale primesc cruci — și fiecare cruce le arată liniilor care o traversează unde nu poate sta o bucată.',
          'Nu broda la noroc: o cusătură greșită costă o viață. Dacă într-o linie nu e încă nimic sigur, revino la ea după ce avansezi pe liniile care o intersectează.',
        ],
        alt: 'O nonogramă aproape rezolvată, cu o pisică: celule brodate cu fir grena, cruci în cele goale',
      },
      screenshots: [
        'O bufniță care prinde contur într-o nonogramă, cu cruci în celulele goale',
        'Scena „Zodiac” în gherghef, brodată figură cu figură',
        'Prim-plan cu scena „Pisica la fereastră”: rândunele, un fluture, o pisică și un ghem de lână',
        'Calendarul: o mică broderie pentru fiecare zi și un arici pentru toată luna',
        'Ștergarul fără sfârșit cu motive populare colorate',
        'Colecția de gherghefuri terminate',
      ],
      features: [
        {
          title: 'Gherghef după gherghef',
          text: 'O pisică la fereastră, păsări de vitraliu, un sat de iarnă, sălile Asgardului, Vestul Sălbatic și multe altele. Fiecare gherghef terminat intră în colecția ta.',
        },
        {
          title: 'O broderie ca adevărată',
          text: 'Fiecare figură are firele și cusăturile ei, umbre moi pe pânza de in și sunetele blânde ale acului și ale gherghefului.',
        },
        {
          title: 'Un calendar cu broderia zilei',
          text: 'În fiecare zi te așteaptă o mică broderie. Brodează toată luna și se deschide figura ei cea mare — zilele ratate te vor aștepta.',
        },
        {
          title: 'Un ștergar fără sfârșit',
          text: 'După prima scenă terminată se deschide un ștergar cu motive populare: nonograme colorate în două sau trei fire, care nu se termină niciodată.',
        },
        {
          title: 'Indicii pentru momentele grele',
          text: 'Dezvăluie o celulă, o linie întreagă sau 10 celule la întâmplare — iar degetarul te ferește de următoarea greșeală.',
        },
        {
          title: 'Fără cronometru, fără grabă',
          text: 'Un cadou în fiecare zi, realizări și clasamente Game Center pe iPhone și iPad, iar ca să joci nu ai nevoie de internet.',
        },
      ],
      supportNote: 'Ne poți scrie și din joc: Profil → Contactează-ne.',
    },
  },
};
