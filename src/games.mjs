// The catalog: one entry per game, in the order they appear on the home page.
// Adding a game is a new entry here plus its images in <slug>/images/ — the
// home page card, the game page and the sitemap come from this data.
//
// Fields:
//   slug          folder and URL of the game page: paastudios.com/<slug>/
//   name, genre, tagline, summary — what the cards and the page hero say
//   platforms     shown under the store buttons
//   keywords      search terms for the page's meta keywords and structured data
//   stores        appStore / googlePlay: { url, id }; leave a store out
//                 while the game is not there yet — the page then says
//                 "Coming soon" instead of the badge
//   theme         the game's own colors for its card and page;
//                 scheme 'dark' or 'light'; frame 'grid' (board cells) or
//                 'stitch' (dashed running stitch) decorates the card
//   icon          square app icon (tools/images.py makes it)
//   art           hero picture: { phones: [three screenshots] } or
//                 { image, alt, width, height } for an illustration
//   rules         how to play: intro, steps, notes, tips for solving (all but
//                 steps optional) and an illustration
//   screenshots   gallery of phone screenshots, may be empty
//   features      what's inside: title and text each
//   faq           optional questions and answers: { q, a }
//   support       email, optional support page url and note
//   privacyPolicy url of the game's privacy policy; a policy kept in this
//                 repository is listed in `pages` and built from content/
//   pages         extra pages of the game: { path, titleKey, content,
//                 translated } — content/<slug>/<file> holds the page body,
//                 titleKey names its title among the interface strings
//                 (src/i18n); a translated page has its body in every language
//                 of the game, content/<slug>/<code>/<file>, and lives at
//                 /<slug>/<code>/<path>
//
// Texts here are English; translations live in src/i18n/<language>.mjs under
// `games.<slug>` and replace them on the game page in that language (the
// support note — as `supportNote`).
export const games = [
  {
    slug: 'pixtangle',
    name: 'Pixtangle',
    genre: 'Shikaku logic puzzle',
    tagline: 'Slice the grid. Watch pixel art bloom.',
    summary:
      'Split the board into rectangles — every number is the size of its own rectangle. Fill the whole grid and the puzzle blooms into a pixel-art picture for your collection.',
    platforms: 'iPhone, iPad and Android',
    keywords: [
      'shikaku',
      'shikaku puzzle',
      'rectangles puzzle',
      'divide by squares',
      'logic puzzle',
      'number puzzle',
      'pixel art puzzle',
      'brain teaser',
      'puzzle game',
      'mobile game',
      'free game',
      'offline game',
      'iphone game',
      'android game',
    ],
    stores: {
      appStore: { url: 'https://apps.apple.com/app/id6802114673', id: '6802114673' },
      googlePlay: {
        url: 'https://play.google.com/store/apps/details?id=com.pixtangle',
        id: 'com.pixtangle',
      },
    },
    theme: {
      scheme: 'dark',
      bg: '#0E0F1A',
      surface: '#1A1C2E',
      surface2: '#232640',
      line: '#2E3250',
      text: '#F2F3F8',
      muted: '#B0B5D2',
      accent: '#3D8BFF',
      accentText: '#FFFFFF',
      glow: 'rgba(61, 139, 255, 0.28)',
      glow2: 'rgba(78, 205, 196, 0.16)',
      frame: 'grid',
    },
    icon: '/pixtangle/images/icon.webp',
    art: {
      phones: [
        { image: '/pixtangle/images/screen-1.webp', alt: 'A Medium board with rectangles in progress' },
        { image: '/pixtangle/images/screen-3.webp', alt: 'The finished sakura pixel art' },
        { image: '/pixtangle/images/screen-4.webp', alt: 'The collection of pixel arts by category' },
      ],
    },
    rules: {
      intro:
        'Pixtangle is built on Shikaku, a Japanese pencil-and-paper logic puzzle also known as Rectangles or Divide by Squares. The board is a grid with numbers in some cells: split it into rectangles so that every cell belongs to exactly one of them.',
      steps: [
        'Drag across the board to draw a rectangle around a number.',
        'Each rectangle holds exactly one number…',
        '…and that number is its area in cells.',
        'Cover the whole board, and the picture appears.',
      ],
      notes: [
        'Squares count as rectangles: a 4 can be 2 × 2 as well as 1 × 4.',
        'A question mark is a rectangle of unknown size: it still holds exactly one clue, and its area is up to you.',
      ],
      tips: [
        'Start with numbers that fit only one way: a clue hemmed in by the edge and its neighbors often leaves a single shape.',
        'A prime number — 2, 3, 5, 7 — can only be a straight line of cells, one row or one column.',
        'Look for cells that only one number can reach: they must belong to that number’s rectangle.',
        'Big numbers in corners and along the edges have few places to go — try them early.',
        'Stuck? A hint lights up one correct rectangle, and you carry on from there.',
      ],
      image: '/pixtangle/images/board.svg',
      alt: 'A six by six Pixtangle board: pastel rectangles with numbers, one being drawn',
      width: 400,
      height: 400,
    },
    screenshots: [
      { image: '/pixtangle/images/screen-1.webp', alt: 'A Medium board with rectangles in progress' },
      { image: '/pixtangle/images/screen-2.webp', alt: 'The sakura board before the first rectangle' },
      { image: '/pixtangle/images/screen-3.webp', alt: 'The finished sakura pixel art' },
      { image: '/pixtangle/images/screen-4.webp', alt: 'Collections of pixel arts by category' },
      { image: '/pixtangle/images/screen-5.webp', alt: 'The daily challenge calendar' },
      { image: '/pixtangle/images/screen-6.webp', alt: 'A Marathon run: boards against the clock' },
      { image: '/pixtangle/images/screen-7.webp', alt: 'Six difficulties of classic levels' },
    ],
    features: [
      {
        title: '270+ pixel arts',
        text: 'Ten categories, from animals to space. Each art is a board shaped like the picture — solve it to color it in.',
      },
      {
        title: 'A fresh challenge every day',
        text: 'A uniquely shaped daily board. Keep your streak alive for bigger rewards.',
      },
      {
        title: 'Six difficulties',
        text: 'Endless classic levels, from quick warm-ups to Insane brain-benders, plus Master’s Path arts for your wins.',
      },
      {
        title: 'Rarities to hunt',
        text: 'From common to legendary: complete a whole category to unlock its rarest art.',
      },
      {
        title: 'Achievements and leaderboards',
        text: 'Game Center on iPhone and iPad: dozens of achievements and weekly leaderboards to climb.',
      },
      {
        title: 'Made to relax',
        text: 'Dark and light themes, gentle sounds and haptics. No account, works fully offline.',
      },
    ],
    faq: [
      {
        q: 'What is Shikaku?',
        a: 'A logic puzzle from Japan: divide a grid into rectangles so that each one holds a single number equal to its area. It is also called Rectangles or Divide by Squares.',
      },
      {
        q: 'Is Pixtangle free?',
        a: 'Yes. Pixtangle is free on iPhone, iPad and Android, with ads and optional in-app purchases — including a bundle that turns the ads between levels off.',
      },
      {
        q: 'Does it work offline?',
        a: 'Yes. There is no account and you can play without the internet; your progress stays on your device and is backed up with your phone’s backup.',
      },
      {
        q: 'How hard does it get?',
        a: 'Six difficulties take you from small Easy boards to large Insane ones full of question-mark clues, plus a new daily challenge and a timed Marathon.',
      },
    ],
    support: {
      email: 'pixtangle.support@paastudios.com',
      url: '/pixtangle/support.html',
    },
    privacyPolicy: '/pixtangle/privacy-policy.html',
    pages: [
      { path: 'privacy-policy.html', titleKey: 'privacyPolicy', content: 'privacy-policy.html' },
      { path: 'support.html', titleKey: 'support', content: 'support.html', translated: true },
    ],
  },
  {
    slug: 'stitch-tales',
    name: 'Stitch Tales',
    genre: 'Cross-stitch nonogram',
    tagline: 'Every puzzle is a stitch in a bigger picture.',
    summary:
      'Read the numbers along the rows and columns, fill the right cells — and each solved nonogram is embroidered into a scene in your hoop.',
    platforms: 'iPhone, iPad and Android',
    keywords: [
      'nonogram',
      'cross stitch',
      'embroidery',
      'picross',
      'griddlers',
      'japanese crossword',
      'logic puzzle',
      'pixel art puzzle',
      'puzzle game',
      'mobile game',
      'free game',
      'offline game',
      'iphone game',
      'android game',
    ],
    stores: {},
    theme: {
      scheme: 'light',
      bg: '#F2ECE0',
      surface: '#FBF8F2',
      surface2: '#E7DFCF',
      line: '#D3C6AE',
      text: '#2A231C',
      muted: '#5F5444',
      accent: '#B3263A',
      accentText: '#FFFFFF',
      glow: 'rgba(179, 38, 58, 0.12)',
      glow2: 'rgba(46, 122, 82, 0.12)',
      frame: 'stitch',
    },
    icon: '/stitch-tales/images/icon.webp',
    art: {
      image: '/stitch-tales/images/hoop.svg',
      alt: 'An embroidery hoop with a stitched meadow: a butterfly, a sun, flowers and a mushroom still to be stitched',
      width: 600,
      height: 620,
    },
    rules: {
      steps: [
        'The numbers beside each row and column are the runs of filled cells, in order.',
        'Stitch the cells that must be filled; mark the ones that stay empty with a cross.',
        'Careful — a wrong stitch costs one of your embroidered hearts.',
        'Solve the grid, and the figure is embroidered into the scene in your hoop.',
      ],
      image: '/stitch-tales/images/nonogram.svg',
      alt: 'A nonogram of a cat, almost solved: garnet stitched cells, crosses in the empty ones',
      width: 474,
      height: 410,
    },
    screenshots: [],
    features: [
      {
        title: 'Scenes to embroider',
        text: 'A meadow, Stonehenge, a picnic, the solar system, a Japanese garden, a dollhouse, a winter village, the sea floor — and more.',
      },
      {
        title: 'Real embroidery stitches',
        text: 'Satin, chain, fishbone and French knots — every figure is sewn in its own thread and texture.',
      },
      {
        title: 'An endless sampler',
        text: 'After your first scene, a sampler of folk patterns opens up — and its patterns never run out.',
      },
      {
        title: 'Hints when you’re stuck',
        text: 'Reveal a single cell or a whole line, and keep stitching.',
      },
      {
        title: 'A gift every day',
        text: 'Come back daily for a reward that grows with your streak.',
      },
      {
        title: 'Easy on the eyes',
        text: 'Soft linen colors, gentle stitching sounds, no account and no internet needed.',
      },
    ],
    support: {
      email: 'stitchtales.support@paastudios.com',
      note: 'You can also reach us from the game under Profile → Contact us.',
    },
    privacyPolicy: '/stitch-tales/privacy-policy.html',
    pages: [
      { path: 'privacy-policy.html', titleKey: 'privacyPolicy', content: 'privacy-policy.html' },
    ],
  },
];
