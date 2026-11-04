// French translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'fr',
  hreflang: 'fr',
  name: 'Français',
  ogLocale: 'fr_FR',
  ui: {
    skip: 'Aller au contenu',
    navGames: 'Jeux',
    navContact: 'Contact',
    fineNoCookies: 'Ce site ne dépose aucun cookie et n’utilise aucun traceur.',
    fineTrademarks:
      'App Store est une marque de service d’Apple Inc. Google Play et le logo Google Play sont des marques de Google LLC.',
    appStoreAlt: 'Télécharger {name} dans l’App Store',
    googlePlayAlt: 'Obtenir {name} sur Google Play',
    comingSoon: 'Bientôt sur {stores}',
    storeAppStore: 'l’App Store',
    storeGooglePlay: 'Google Play',
    and: 'et',
    freeOn: 'Gratuit sur {platforms}',
    howToPlay: 'Comment jouer',
    tips: 'Astuces pour résoudre',
    faq: 'Questions et réponses',
    gallery: 'De plus près',
    screenshots: 'Captures d’écran',
    features: 'Au programme',
    support: 'Assistance',
    supportText:
      'Une question, une idée, quelque chose ne marche pas ? Écrivez-nous — nous lisons chaque message.',
    supportPage: 'Page d’assistance',
    privacyPolicy: 'Politique de confidentialité',
    moreFrom: 'Autres jeux de {studio}',
    language: 'Langue',
    gameTitle: '{name} — {genre} | {studio}',
  },
  games: {
    pixtangle: {
      genre: 'Casse-tête de logique shikaku',
      tagline: 'Découpez la grille. Regardez le pixel art éclore.',
      summary:
        'Divisez la grille en rectangles — chaque nombre indique la taille de son propre rectangle. Remplissez toute la grille, et le puzzle s’épanouit en un pixel art pour votre collection.',
      platforms: 'iPhone, iPad et Android',
      keywords: [
        'shikaku',
        'puzzle shikaku',
        'casse-tête rectangles',
        'jeu de logique',
        'casse-tête logique',
        'puzzle de nombres',
        'pixel art',
        'casse-tête',
        'jeu de réflexion',
        'jeu',
        'jeu mobile',
        'jeu gratuit',
        'jeu hors ligne',
      ],
      art: {
        alts: [
          'Une grille de difficulté Moyen en cours de résolution',
          'Le pixel art « Cerisier en fleurs » terminé',
          'La collection de pixel arts par catégorie',
        ],
      },
      rules: {
        intro:
          'Pixtangle repose sur le shikaku, un casse-tête logique japonais sur papier, connu aussi sous les noms anglais Rectangles et Divide by Squares. La grille comporte des nombres dans certaines cases : divisez-la en rectangles de sorte que chaque case appartienne à un seul rectangle.',
        steps: [
          'Faites glisser le doigt sur la grille pour tracer un rectangle autour d’un nombre.',
          'Chaque rectangle contient exactement un nombre…',
          '…et ce nombre est son aire en cases.',
          'Couvrez toute la grille, et l’image apparaît.',
        ],
        notes: [
          'Les carrés comptent comme des rectangles : un 4 peut faire 2 × 2 aussi bien que 1 × 4.',
          'Un point d’interrogation désigne un rectangle de taille inconnue : il contient lui aussi un seul symbole, mais son aire, c’est vous qui la choisissez.',
        ],
        tips: [
          'Commencez par les nombres qui ne se placent que d’une façon : un nombre coincé entre le bord et ses voisins ne laisse souvent qu’une seule forme possible.',
          'Un nombre premier — 2, 3, 5, 7 — ne peut être qu’une ligne droite de cases : une seule ligne ou une seule colonne.',
          'Cherchez les cases qu’un seul nombre peut atteindre : elles appartiennent forcément au rectangle de ce nombre.',
          'Les grands nombres dans les coins et le long des bords ont peu de place — essayez-les tôt.',
          'Une impasse ? Un indice éclaire un rectangle correct, et vous repartez de là.',
        ],
        alt: 'Une grille Pixtangle de six sur six : des rectangles pastel avec des nombres, dont un en cours de tracé',
      },
      screenshots: [
        'Une grille de difficulté Moyen en cours de résolution',
        'La grille du cerisier en fleurs avant le premier rectangle',
        'Le pixel art « Cerisier en fleurs » terminé',
        'Les collections de pixel arts par catégorie',
        'Le calendrier du défi quotidien',
        'Une partie de Marathon : des grilles contre la montre',
        'Six difficultés de niveaux classiques',
      ],
      features: [
        {
          title: '270+ pixel arts',
          text: 'Dix catégories, des animaux à l’espace. Chaque œuvre est une grille à la forme de l’image — résolvez-la pour la mettre en couleurs.',
        },
        {
          title: 'Un nouveau défi chaque jour',
          text: 'Une grille quotidienne à la forme unique. Entretenez votre série pour des récompenses plus grandes.',
        },
        {
          title: 'Six difficultés',
          text: 'Des niveaux classiques à l’infini, de l’échauffement rapide aux casse-têtes en Démentiel, plus des œuvres de la Voie du maître pour vos victoires.',
        },
        {
          title: 'Des raretés à chasser',
          text: 'Du commun au légendaire : complétez une catégorie entière pour débloquer son œuvre la plus rare.',
        },
        {
          title: 'Succès et classements',
          text: 'Game Center sur iPhone et iPad : des dizaines de succès et des classements hebdomadaires à gravir.',
        },
        {
          title: 'Conçu pour se détendre',
          text: 'Thèmes sombre et clair, sons doux et retours haptiques. Sans compte, fonctionne entièrement hors ligne.',
        },
      ],
      faq: [
        {
          q: 'Qu’est-ce que le shikaku ?',
          a: 'Un casse-tête logique venu du Japon : divisez une grille en rectangles de sorte que chacun contienne un seul nombre, égal à son aire. On l’appelle aussi Rectangles ou Divide by Squares.',
        },
        {
          q: 'Pixtangle est-il gratuit ?',
          a: 'Oui. Pixtangle est gratuit sur iPhone, iPad et Android, avec des publicités et des achats intégrés facultatifs — dont un pack qui supprime les publicités entre les niveaux.',
        },
        {
          q: 'Fonctionne-t-il hors ligne ?',
          a: 'Oui. Aucun compte n’est nécessaire et vous pouvez jouer sans internet ; votre progression reste sur votre appareil et est sauvegardée avec la sauvegarde de votre téléphone.',
        },
        {
          q: 'Jusqu’où va la difficulté ?',
          a: 'Six difficultés vous mènent des petites grilles Facile aux grandes grilles Démentiel remplies de points d’interrogation, avec en plus un défi quotidien, nouveau chaque jour, et un Marathon chronométré.',
        },
      ],
    },
  },
};
