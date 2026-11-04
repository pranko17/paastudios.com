// German translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'de',
  hreflang: 'de',
  name: 'Deutsch',
  ogLocale: 'de_DE',
  ui: {
    skip: 'Zum Inhalt springen',
    navGames: 'Spiele',
    navContact: 'Kontakt',
    fineNoCookies: 'Diese Website setzt keine Cookies und verwendet keine Tracker.',
    fineTrademarks:
      'App Store ist eine Dienstleistungsmarke der Apple Inc. Google Play und das Google Play-Logo sind Marken von Google LLC.',
    appStoreAlt: '{name} im App Store laden',
    googlePlayAlt: '{name} bei Google Play herunterladen',
    comingSoon: 'Demnächst {stores}',
    storeAppStore: 'im App Store',
    storeGooglePlay: 'bei Google Play',
    and: 'und',
    freeOn: 'Kostenlos für {platforms}',
    howToPlay: 'So wird gespielt',
    tips: 'Tipps zum Lösen',
    faq: 'Fragen und Antworten',
    gallery: 'Genauer hingeschaut',
    screenshots: 'Screenshots',
    features: 'Was drinsteckt',
    support: 'Support',
    supportText:
      'Fragen, Ideen oder funktioniert etwas nicht? Schreib uns — wir lesen jede Nachricht.',
    supportPage: 'Support-Seite',
    privacyPolicy: 'Datenschutzrichtlinie',
    moreFrom: 'Mehr von {studio}',
    language: 'Sprache',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Unabhängiges Spielestudio',
    ourGames: 'Unsere Spiele',
    howWeMake: 'Wie wir sie machen',
    sayHello: 'Sag Hallo',
    sayHelloText:
      'Fragen, Ideen, ein Fehler — oder einfach ein nettes Wort. Schreib an das Spiel, das du spielst: Wir lesen jede Nachricht.',
    discover: '{name} entdecken',
    docDescription: '{title} für {name} von {studio}.',
  },
  studio: {
    title: 'PAA Studios — kleine, ruhige Rätselspiele',
    description:
      'PAA Studios macht gemütliche Logikrätsel für iPhone, iPad und Android: Pixtangle und Stitch Tales.',
    headline: 'Kleine, [ruhige]\nRätselspiele.',
    intro:
      'Wir machen gemütliche Logikrätsel für iPhone, iPad und Android. Jedes Rätsel endet mit einem kleinen Bild — einem Tier in Pixel-Art, einem gestickten Schmetterling —, und auf dem Weg dorthin drängt dich nichts.',
    principles: [
      {
        title: 'Funktioniert offline',
        text: 'Keine Verbindung nötig. Rätsle im Flugzeug, in der U-Bahn oder dort, wo es gar keinen Empfang gibt.',
      },
      {
        title: 'Kein Konto',
        text: 'Spiel öffnen und loslegen. Keine Registrierung, kein Login, keine E-Mail-Adresse, die du hergeben musst.',
      },
      {
        title: 'Dein Fortschritt gehört dir',
        text: 'Er bleibt auf deinem Gerät und wird in deinem eigenen iCloud- oder Google-Konto gesichert — wir haben keine Server, an die wir ihn schicken könnten.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku-Logikrätsel',
      tagline: 'Zerschneide das Gitter. Sieh zu, wie Pixel-Art erblüht.',
      summary:
        'Teile das Feld in Rechtecke — jede Zahl gibt die Größe ihres eigenen Rechtecks an. Füll das ganze Gitter, und das Rätsel erblüht zu einem Pixel-Art-Bild für deine Sammlung.',
      platforms: 'iPhone, iPad und Android',
      keywords: [
        'Shikaku',
        'Shikaku-Rätsel',
        'Rechteck-Rätsel',
        'Logikrätsel',
        'Zahlenrätsel',
        'Pixel-Art-Rätsel',
        'Denksport',
        'Knobelspiel',
        'Gehirnjogging',
        'Spiel',
        'Handyspiel',
        'Rätselspiel',
        'kostenloses Spiel',
        'Offline-Spiel',
      ],
      art: {
        alts: [
          'Ein Feld auf „Mittel“ mitten im Lösen',
          'Das fertige Pixel-Art „Kirschblüte“',
          'Die Sammlung der Pixel-Arts nach Kategorien',
        ],
      },
      rules: {
        intro:
          'Pixtangle basiert auf Shikaku, einem japanischen Logikrätsel für Papier und Stift, das auch unter den englischen Namen Rectangles und Divide by Squares bekannt ist. Das Feld ist ein Gitter mit Zahlen in einigen Zellen: Teile es so in Rechtecke, dass jede Zelle zu genau einem davon gehört.',
        steps: [
          'Zieh mit dem Finger über das Feld, um ein Rechteck um eine Zahl zu zeichnen.',
          'Jedes Rechteck enthält genau eine Zahl …',
          '… und diese Zahl ist seine Fläche in Zellen.',
          'Bedecke das ganze Feld, und das Bild erscheint.',
        ],
        notes: [
          'Quadrate zählen als Rechtecke: Eine 4 kann 2 × 2 sein, aber auch 1 × 4.',
          'Ein Fragezeichen steht für ein Rechteck unbekannter Größe: Auch darin steht genau ein Zeichen, aber die Fläche bestimmst du.',
        ],
        tips: [
          'Beginne mit Zahlen, die nur auf eine Weise passen: Eine Zahl, die zwischen Rand und Nachbarn eingeklemmt ist, lässt oft nur eine einzige Form zu.',
          'Eine Primzahl — 2, 3, 5, 7 — kann nur eine gerade Reihe von Zellen sein: eine Zeile oder eine Spalte.',
          'Suche nach Zellen, die nur eine Zahl erreichen kann: Sie gehören zwingend zum Rechteck dieser Zahl.',
          'Große Zahlen in Ecken und an Rändern haben wenig Spielraum — probier sie früh aus.',
          'Kommst du nicht weiter? Ein Hinweis zeigt dir ein richtiges Rechteck, und von dort machst du weiter.',
        ],
        alt: 'Ein Pixtangle-Feld mit sechs mal sechs Zellen: pastellfarbene Rechtecke mit Zahlen, eines wird gerade gezogen',
      },
      screenshots: [
        'Ein Feld auf „Mittel“ mitten im Lösen',
        'Das Kirschblüten-Feld vor dem ersten Rechteck',
        'Das fertige Pixel-Art „Kirschblüte“',
        'Sammlungen von Pixel-Arts nach Kategorien',
        'Der Kalender der täglichen Herausforderung',
        'Ein Marathon-Lauf: Felder gegen die Uhr',
        'Sechs Schwierigkeitsgrade der klassischen Level',
      ],
      features: [
        {
          title: '270+ Pixel-Arts',
          text: 'Zehn Kategorien, von Tieren bis zum Weltall. Jedes Bild ist ein Feld in seiner Form — löse es, um es auszumalen.',
        },
        {
          title: 'Jeden Tag eine neue Herausforderung',
          text: 'Ein tägliches Feld in einzigartiger Form. Halte deine Serie am Leben für größere Belohnungen.',
        },
        {
          title: 'Sechs Schwierigkeitsgrade',
          text: 'Endlose klassische Level, vom schnellen Aufwärmen bis zu Kopfnüssen auf „Wahnsinn“, dazu Bilder aus dem Weg des Meisters für deine Siege.',
        },
        {
          title: 'Jagd auf Seltenheiten',
          text: 'Von gewöhnlich bis legendär: Schließ eine ganze Kategorie ab, um ihr seltenstes Bild freizuschalten.',
        },
        {
          title: 'Erfolge und Bestenlisten',
          text: 'Game Center auf iPhone und iPad: Dutzende Erfolge und wöchentliche Bestenlisten zum Aufsteigen.',
        },
        {
          title: 'Zum Entspannen gemacht',
          text: 'Dunkles und helles Design, sanfte Klänge und Haptik. Kein Konto nötig, funktioniert komplett offline.',
        },
      ],
      faq: [
        {
          q: 'Was ist Shikaku?',
          a: 'Ein Logikrätsel aus Japan: Teile ein Gitter so in Rechtecke, dass jedes genau eine Zahl enthält, die seiner Fläche entspricht. Es ist auch als Rectangles oder Divide by Squares bekannt.',
        },
        {
          q: 'Ist Pixtangle kostenlos?',
          a: 'Ja. Pixtangle ist auf iPhone, iPad und Android kostenlos, mit Werbung und optionalen In-App-Käufen — darunter ein Paket, das die Werbung zwischen den Leveln abschaltet.',
        },
        {
          q: 'Funktioniert es offline?',
          a: 'Ja. Es gibt kein Konto, und du kannst ohne Internet spielen; dein Fortschritt bleibt auf deinem Gerät und wird mit dem Backup deines Telefons gesichert.',
        },
        {
          q: 'Wie schwer wird es?',
          a: 'Sechs Schwierigkeitsgrade führen dich von kleinen Feldern auf „Leicht“ bis zu großen Feldern auf „Wahnsinn“ voller Fragezeichen, dazu kommen die tägliche Herausforderung, jeden Tag neu, und der Marathon gegen die Uhr.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Kreuzstich-Nonogramm',
      tagline: 'Jedes Rätsel ist ein Stich in einem größeren Bild.',
      summary:
        'Lies die Zahlen an Zeilen und Spalten, stick die richtigen Felder — und jedes gelöste Nonogramm wird in eine Szene in deinem Stickrahmen gestickt.',
      platforms: 'iPhone, iPad und Android',
      keywords: [
        'Nonogramm',
        'Nonogram',
        'Picross',
        'Griddlers',
        'Hanjie',
        'japanisches Rätsel',
        'Logikbild',
        'Kreuzstich',
        'Stickerei',
        'Logikrätsel',
        'Pixel-Art-Rätsel',
        'Spiel',
        'Handyspiel',
        'Rätselspiel',
        'kostenloses Spiel',
        'Offline-Spiel',
      ],
      art: {
        alt: 'Ein Stickrahmen mit einer gestickten Blumenwiese: ein Schmetterling, eine Sonne, Blumen und ein Fliegenpilz, der noch gestickt werden will',
      },
      rules: {
        steps: [
          'Die Zahlen neben jeder Zeile und Spalte geben der Reihe nach die Blöcke gefüllter Felder an.',
          'Sticke die Felder, die gefüllt sein müssen; markiere die, die leer bleiben, mit einem Kreuz.',
          'Vorsicht — ein falscher Stich kostet ein Leben, eines deiner gestickten Herzen.',
          'Löse das Gitter, und die Figur wird in die Szene in deinem Stickrahmen gestickt.',
        ],
        alt: 'Ein fast gelöstes Nonogramm mit einer Katze: granatrot gestickte Felder, Kreuze in den leeren',
      },
      features: [
        {
          title: 'Szenen zum Sticken',
          text: 'Eine Blumenwiese, Stonehenge, ein Obstpicknick, das Sonnensystem, ein japanischer Garten, ein Puppenhaus, ein Winterdorf, der Meeresgrund — und noch mehr.',
        },
        {
          title: 'Echte Stickstiche',
          text: 'Plattstich, Kettenstich, Fischgrätstich und Knötchenstich — jede Figur wird mit eigenem Garn und eigener Struktur gestickt.',
        },
        {
          title: 'Ein endloses Mustertuch',
          text: 'Nach deiner ersten Szene öffnet sich ein Mustertuch mit traditionellen Mustern — und seine Muster gehen nie aus.',
        },
        {
          title: 'Hinweise, wenn du feststeckst',
          text: 'Deck ein einzelnes Feld oder eine ganze Linie auf und stick weiter.',
        },
        {
          title: 'Jeden Tag ein Geschenk',
          text: 'Komm jeden Tag wieder: Die Tagesbelohnung wächst mit deiner Serie.',
        },
        {
          title: 'Schonend für die Augen',
          text: 'Sanfte Leinenfarben, leise Stickgeräusche, kein Konto und kein Internet nötig.',
        },
      ],
      supportNote: 'Du erreichst uns auch im Spiel unter Profil → Schreib uns.',
    },
  },
};
