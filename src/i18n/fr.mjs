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
    madeFor: 'Sur {platforms}',
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
    studioEyebrow: 'Studio de jeux indépendant',
    ourGames: 'Nos jeux',
    howWeMake: 'Notre façon de faire',
    sayHello: 'Dites-nous bonjour',
    sayHelloText:
      'Une question, une idée, un bug — ou simplement un mot gentil. Écrivez au jeu auquel vous jouez : nous lisons chaque message.',
    discover: 'Découvrir {name}',
    docDescription: '{title} — {name}, un jeu de {studio}.',
  },
  studio: {
    title: 'PAA Studios — de petits jeux de réflexion apaisants',
    description:
      'PAA Studios crée des casse-têtes logiques tout en douceur pour iPhone, iPad et Android : Pixtangle et Stitch Tales.',
    headline: 'Petits casse-têtes,\ngrand [calme].',
    intro:
      'Nous créons des casse-têtes logiques tout en douceur pour iPhone, iPad et Android. Chaque énigme se termine par une petite image — un animal en pixel art, un papillon brodé — et rien ne presse pour y arriver.',
    principles: [
      {
        title: 'Se joue hors ligne',
        text: 'Aucune connexion nécessaire. Jouez en avion, dans le métro ou là où il n’y a pas de réseau du tout.',
      },
      {
        title: 'Sans compte',
        text: 'Ouvrez le jeu et jouez. Pas d’inscription, pas d’identifiant, pas d’adresse e-mail à fournir.',
      },
      {
        title: 'Votre progression vous appartient',
        text: 'Elle reste sur votre appareil et est sauvegardée sur votre propre compte iCloud ou Google — nous n’avons aucun serveur où l’envoyer.',
      },
    ],
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
    'stitch-tales': {
      genre: 'Logimage au point de croix',
      tagline: 'Chaque énigme est un point dans un tableau plus grand.',
      summary:
        'Lisez les chiffres le long des lignes et des colonnes, brodez les bonnes cases — et chaque logimage résolu vient se broder dans une scène de votre tambour.',
      platforms: 'iPhone, iPad et Android',
      keywords: [
        'logimage',
        'nonogramme',
        'nonogram',
        'picross',
        'hanjie',
        'point de croix',
        'broderie',
        'jeu de logique',
        'casse-tête logique',
        'pixel art',
        'jeu',
        'jeu mobile',
        'jeu de réflexion',
        'jeu gratuit',
        'jeu hors ligne',
      ],
      art: {
        alts: [
          'Un hibou qui prend forme sur un logimage, avec des croix dans les cases vides',
          'La scène « Zodiaque » dans le tambour, brodée figure après figure',
          'Gros plan sur la scène « Chat à la fenêtre » : des hirondelles, un papillon, un chat et une pelote de laine',
        ],
      },
      cardArt: {
        alt: 'Un tambour de broderie avec une prairie fleurie brodée : un papillon, un soleil, des fleurs et un champignon encore à broder',
      },
      rules: {
        intro:
          'Stitch Tales repose sur les logimages, des casse-têtes logiques en images qu’on appelle aussi nonogrammes, griddlers ou hanjie. Les chiffres à côté des lignes et au-dessus des colonnes indiquent quelles cases remplir ; remplissez les bonnes, et une image cachée apparaît — ici, une figure brodée dans la scène de votre tambour.',
        steps: [
          'Les chiffres à côté d’une ligne ou au-dessus d’une colonne indiquent combien de cases d’affilée broder, et dans quel ordre.',
          'Entre deux morceaux, il y a toujours au moins une case vide — marquez-la d’une croix.',
          'Faites glisser le doigt, et le fil le suit de case en case.',
          'Un point mal placé coûte l’une de vos trois vies : prenez votre temps.',
          'Résolvez la grille, et la figure vient se broder dans la scène de votre tambour.',
        ],
        notes: [
          'Les chiffres au-dessus d’une colonne se lisent de haut en bas, ceux à côté d’une ligne de gauche à droite.',
          'Dans le marquoir, chaque chiffre a la couleur de son fil : des morceaux de couleurs différentes peuvent se toucher, mais ceux d’une même couleur sont toujours séparés par une case vide.',
          'Votre première figure vous guide à travers toutes les règles.',
        ],
        tips: [
          'Commencez par les lignes les plus remplies : additionnez les morceaux, avec une case vide entre chacun. Si le total égale la longueur de la ligne, elle est entièrement résolue ; s’il ne manque qu’une case ou deux, les morceaux les plus longs ont déjà des cases sûres.',
          'Poussez un morceau aussi loin que possible vers un bout, puis vers l’autre : les cases qu’il couvre les deux fois sont forcément brodées. Un 7 dans une ligne de 10 remplit toujours les quatre cases du milieu.',
          'Un point tout au bord de la grille est le début du premier morceau : brodez tout le morceau à partir de là et mettez une croix juste après.',
          'Une fois une ligne résolue, ses cases vides reçoivent des croix — et chaque croix montre aux lignes perpendiculaires où un morceau ne peut pas aller.',
          'Ne brodez pas au hasard : un point mal placé coûte une vie. Si rien n’est encore sûr dans une ligne, revenez-y après avoir avancé dans celles qui la croisent.',
        ],
        alt: 'Un logimage de chat presque résolu : des cases brodées grenat, des croix dans les cases vides',
      },
      screenshots: [
        'Un hibou qui prend forme sur un logimage, avec des croix dans les cases vides',
        'La scène « Zodiaque » dans le tambour, brodée figure après figure',
        'Gros plan sur la scène « Chat à la fenêtre » : des hirondelles, un papillon, un chat et une pelote de laine',
        'Le calendrier : une petite broderie pour chaque jour et un hérisson pour tout le mois',
        'Le marquoir sans fin aux motifs folkloriques colorés',
        'La collection de tambours terminés',
      ],
      features: [
        {
          title: 'Tambour après tambour',
          text: 'Un chat à la fenêtre, des oiseaux en vitrail, un village d’hiver, les salles d’Asgard, le Far West et bien d’autres. Chaque tambour terminé rejoint votre collection.',
        },
        {
          title: 'Une broderie plus vraie que nature',
          text: 'Chaque figure a ses fils et ses points, des ombres douces sur le lin et les bruits feutrés de l’aiguille et du tambour.',
        },
        {
          title: 'Un calendrier de broderies du jour',
          text: 'Une petite broderie vous attend chaque jour. Brodez tout le mois, et sa grande figure se débloque — les jours manqués vous attendront.',
        },
        {
          title: 'Un marquoir sans fin',
          text: 'Après votre première scène terminée, un marquoir aux motifs folkloriques s’ouvre : des logimages en couleur à deux ou trois fils, qui ne s’épuisent jamais.',
        },
        {
          title: 'Des indices pour les passages délicats',
          text: 'Révélez une case, une ligne entière ou 10 cases au hasard — et le dé à coudre vous protège de votre prochaine erreur.',
        },
        {
          title: 'Sans chrono ni hâte',
          text: 'Un cadeau chaque jour, des succès et des classements Game Center sur iPhone et iPad, et nul besoin d’internet pour jouer.',
        },
      ],
      supportNote: 'Vous pouvez aussi nous écrire depuis le jeu : Profil → Nous écrire.',
    },
  },
};
