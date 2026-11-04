// Italian translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'it',
  hreflang: 'it',
  name: 'Italiano',
  ogLocale: 'it_IT',
  ui: {
    skip: 'Vai al contenuto',
    navGames: 'Giochi',
    navContact: 'Contatti',
    fineNoCookies: 'Questo sito non imposta cookie e non usa tracker.',
    fineTrademarks:
      'App Store è un marchio di servizio di Apple Inc. Google Play e il logo Google Play sono marchi di Google LLC.',
    appStoreAlt: 'Scarica {name} su App Store',
    googlePlayAlt: 'Scarica {name} da Google Play',
    comingSoon: 'Presto su {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: 'e',
    freeOn: 'Gratis su {platforms}',
    howToPlay: 'Come si gioca',
    tips: 'Consigli per risolvere',
    faq: 'Domande e risposte',
    gallery: 'Uno sguardo da vicino',
    screenshots: 'Screenshot',
    features: 'Cosa trovi',
    support: 'Assistenza',
    supportText:
      'Domande, idee o qualcosa non funziona? Scrivici: leggiamo ogni messaggio.',
    supportPage: 'Pagina di assistenza',
    privacyPolicy: 'Informativa sulla privacy',
    moreFrom: 'Altri giochi di {studio}',
    language: 'Lingua',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Studio di giochi indipendente',
    ourGames: 'I nostri giochi',
    howWeMake: 'Come li facciamo',
    sayHello: 'Salutaci',
    sayHelloText:
      'Domande, idee, un bug — o anche solo una parola gentile. Scrivi al gioco a cui giochi: leggiamo ogni messaggio.',
    discover: 'Scopri {name}',
    docDescription: '{title} di {name}, un gioco di {studio}.',
  },
  studio: {
    title: 'PAA Studios — piccoli rompicapi rilassanti',
    description:
      'PAA Studios crea rompicapi logici rilassanti per iPhone, iPad e Android: Pixtangle e Stitch Tales.',
    headline: 'Piccoli rompicapi,\ntanta [calma].',
    intro:
      'Creiamo rompicapi logici rilassanti per iPhone, iPad e Android. Ogni rompicapo si conclude con un piccolo disegno — un animale in pixel art, una farfalla ricamata — e non c’è mai fretta di arrivarci.',
    principles: [
      {
        title: 'Si gioca offline',
        text: 'Non serve la connessione. Gioca in aereo, in metro o dove non c’è proprio campo.',
      },
      {
        title: 'Nessun account',
        text: 'Apri il gioco e gioca. Niente registrazione, niente login, nessun indirizzo email da lasciare.',
      },
      {
        title: 'I tuoi progressi sono tuoi',
        text: 'Restano sul tuo dispositivo e vengono salvati nel tuo account iCloud o Google — non abbiamo server a cui inviarli.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Rompicapo di logica shikaku',
      tagline: 'Taglia la griglia. Guarda sbocciare il pixel art.',
      summary:
        'Dividi la griglia in rettangoli: ogni numero è la dimensione del suo rettangolo. Riempi tutta la griglia e il rompicapo sboccerà in un pixel art per la tua collezione.',
      platforms: 'iPhone, iPad e Android',
      keywords: [
        'shikaku',
        'puzzle shikaku',
        'puzzle rettangoli',
        'gioco di logica',
        'rompicapo logico',
        'puzzle numerico',
        'pixel art',
        'rompicapo',
        'giochi per la mente',
        'gioco',
        'gioco per cellulare',
        'gioco rompicapo',
        'gioco gratis',
        'gioco offline',
      ],
      art: {
        alts: [
          'Una griglia di livello Medio in corso di risoluzione',
          'Il pixel art «Sakura» completato',
          'La collezione di pixel art per categoria',
        ],
      },
      rules: {
        intro:
          'Pixtangle si basa sullo shikaku, un rompicapo logico giapponese da carta e matita, noto anche con i nomi inglesi Rectangles e Divide by Squares. Il campo è una griglia con numeri in alcune celle: dividila in rettangoli in modo che ogni cella appartenga esattamente a uno di essi.',
        steps: [
          'Trascina il dito sulla griglia per disegnare un rettangolo attorno a un numero.',
          'Ogni rettangolo contiene esattamente un numero…',
          '…e quel numero è la sua area in celle.',
          'Copri tutta la griglia e apparirà l’immagine.',
        ],
        notes: [
          'Anche i quadrati sono rettangoli: un 4 può essere 2 × 2 oppure 1 × 4.',
          'Un punto interrogativo è un rettangolo di dimensione sconosciuta: contiene comunque un solo simbolo, ma la sua area la decidi tu.',
        ],
        tips: [
          'Inizia dai numeri che entrano in un solo modo: un numero stretto tra il bordo e i vicini spesso lascia una sola forma possibile.',
          'Un numero primo — 2, 3, 5, 7 — può essere solo una linea dritta di celle: una riga o una colonna.',
          'Cerca le celle che un solo numero può raggiungere: devono appartenere al rettangolo di quel numero.',
          'I numeri grandi negli angoli e lungo i bordi hanno poco spazio: provali presto.',
          'Non sai come andare avanti? Un indizio illumina un rettangolo corretto e da lì prosegui tu.',
        ],
        alt: 'Una griglia Pixtangle sei per sei: rettangoli pastello con numeri, uno in fase di disegno',
      },
      screenshots: [
        'Una griglia di livello Medio in corso di risoluzione',
        'La griglia della sakura prima del primo rettangolo',
        'Il pixel art «Sakura» completato',
        'Collezioni di pixel art per categoria',
        'Il calendario della sfida giornaliera',
        'Una corsa in Maratona: griglie contro il tempo',
        'Sei difficoltà dei livelli classici',
      ],
      features: [
        {
          title: '270+ pixel art',
          text: 'Dieci categorie, dagli animali allo spazio. Ogni opera è una griglia a forma di disegno: risolvila per colorarla.',
        },
        {
          title: 'Una sfida nuova ogni giorno',
          text: 'Una griglia giornaliera dalla forma unica. Mantieni viva la serie per ricompense più ricche.',
        },
        {
          title: 'Sei difficoltà',
          text: 'Livelli classici infiniti, dai riscaldamenti veloci ai rompicapi a livello Folle, più le opere della Via del maestro per le tue vittorie.',
        },
        {
          title: 'Rarità da scovare',
          text: 'Dal comune al leggendario: completa un’intera categoria per sbloccare la sua opera più rara.',
        },
        {
          title: 'Obiettivi e classifiche',
          text: 'Game Center su iPhone e iPad: decine di obiettivi e classifiche settimanali da scalare.',
        },
        {
          title: 'Fatto per rilassarsi',
          text: 'Temi scuro e chiaro, suoni delicati e feedback aptico. Nessun account, funziona completamente offline.',
        },
      ],
      faq: [
        {
          q: 'Che cos’è lo shikaku?',
          a: 'Un rompicapo logico nato in Giappone: dividi una griglia in rettangoli in modo che ognuno contenga un solo numero, uguale alla sua area. È chiamato anche Rectangles o Divide by Squares.',
        },
        {
          q: 'Pixtangle è gratis?',
          a: 'Sì. Pixtangle è gratis su iPhone, iPad e Android, con pubblicità e acquisti in-app facoltativi, tra cui un pacchetto che toglie la pubblicità tra un livello e l’altro.',
        },
        {
          q: 'Funziona offline?',
          a: 'Sì. Non serve un account e puoi giocare senza internet; i tuoi progressi restano sul dispositivo e vengono salvati con il backup del telefono.',
        },
        {
          q: 'Quanto diventa difficile?',
          a: 'Sei difficoltà ti portano dalle piccole griglie Facile alle grandi griglie Folle piene di punti interrogativi, più una sfida giornaliera nuova ogni giorno e una Maratona a tempo.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Nonogramma a punto croce',
      tagline: 'Ogni rompicapo è un punto di un disegno più grande.',
      summary:
        'Leggi i numeri lungo righe e colonne, ricama le caselle giuste — e ogni nonogramma risolto viene ricamato in una scena del tuo telaio.',
      platforms: 'iPhone, iPad e Android',
      keywords: [
        'nonogramma',
        'nonogram',
        'crucipixel',
        'picross',
        'hanjie',
        'griddlers',
        'punto croce',
        'ricamo',
        'gioco di logica',
        'rompicapo logico',
        'pixel art',
        'gioco',
        'gioco per cellulare',
        'gioco rompicapo',
        'gioco gratis',
        'gioco offline',
      ],
      art: {
        alt: 'Un telaio da ricamo con un prato fiorito ricamato: una farfalla, un sole, dei fiori e un fungo ancora da ricamare',
      },
      rules: {
        steps: [
          'I numeri accanto a ogni riga e colonna sono, in ordine, i gruppi di caselle piene.',
          'Ricama le caselle da riempire; segna con una croce quelle che restano vuote.',
          'Attenzione: un punto sbagliato ti costa una vita, uno dei tuoi cuori ricamati.',
          'Risolvi la griglia e la figura verrà ricamata nella scena del tuo telaio.',
        ],
        alt: 'Il nonogramma di un gatto quasi risolto: caselle ricamate color granata, croci in quelle vuote',
      },
      features: [
        {
          title: 'Scene da ricamare',
          text: 'Un prato fiorito, Stonehenge, un picnic di frutta, il sistema solare, un giardino giapponese, una casa delle bambole, un villaggio d’inverno, il fondale marino… e molte altre.',
        },
        {
          title: 'Veri punti di ricamo',
          text: 'Punto pieno, catenella, spina di pesce e nodi francesi: ogni figura è cucita con il suo filo e la sua trama.',
        },
        {
          title: 'Un imparaticcio infinito',
          text: 'Dopo la prima scena si apre un imparaticcio di motivi tradizionali, e i suoi motivi non finiscono mai.',
        },
        {
          title: 'Aiuti quando ti blocchi',
          text: 'Rivela una sola casella o un’intera linea e continua a ricamare.',
        },
        {
          title: 'Un regalo ogni giorno',
          text: 'Torna ogni giorno per una ricompensa che cresce con la tua serie.',
        },
        {
          title: 'Riposante per gli occhi',
          text: 'Morbidi colori del lino, il suono delicato dei punti, nessun account e nessuna connessione necessaria.',
        },
      ],
      supportNote: 'Puoi scriverci anche dal gioco, in Profilo → Scrivici.',
    },
  },
};
