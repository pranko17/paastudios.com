// The catalog: one entry per game, in the order they appear on the home page.
// Adding a game is a new entry here plus its images in <slug>/images/ — the
// home page card, the game page and the sitemap come from this data.
//
// Fields:
//   slug          folder and URL of the game page: paastudios.com/<slug>/
//   name, genre, tagline, summary — what the cards and the page hero say
//   platforms     shown under the store buttons
//   mentionFree   false: that line names the platforms without "Free" — for a
//                 game whose texts don't talk about price
//   keywords      search terms for the page's meta keywords and structured data
//   stores        appStore / googlePlay: { url, id }; leave a store out
//                 while the game is not there yet — the page then says
//                 "Coming soon" instead of the badge
//   theme         the game's own colors for its card and page;
//                 scheme 'dark' or 'light'; frame 'grid' (board cells) or
//                 'stitch' (dashed running stitch) decorates the card; a
//                 'stitch' page also takes `stitch`, the thread of the running
//                 stitch on its cards, and `threads`, three floss colors for
//                 the cross-stitch marks
//   icon          square app icon (tools/images.py makes it)
//   art           hero picture: { phones: [three screenshots] } or
//                 { image, alt, width, height } for an illustration
//   cardArt       optional picture for the home page card instead of `art`,
//                 { image, alt, width, height }
//   banner        optional wide picture under the hero, { image, alt, width,
//                 height } (tools/images.py --banner makes it and its copies)
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
    mentionFree: false,
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
    stores: {
      appStore: { url: 'https://apps.apple.com/app/id6822948115', id: '6822948115' },
    },
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
      stitch: '#E7B7BE',
      threads: ['#B3263A', '#2E7A52', '#C9A06A'],
    },
    icon: '/stitch-tales/images/icon.webp',
    art: {
      phones: [
        {
          image: '/stitch-tales/images/screen-1.webp',
          alt: 'An owl taking shape on a nonogram, with crosses in the empty cells',
        },
        {
          image: '/stitch-tales/images/screen-2.webp',
          alt: 'The Zodiac scene in the hoop, stitched figure by figure',
        },
        {
          image: '/stitch-tales/images/screen-3.webp',
          alt: 'A close-up of the Cat by the window scene: swallows, a butterfly, a cat and a ball of yarn',
        },
      ],
    },
    cardArt: {
      image: '/stitch-tales/images/hoop.svg',
      alt: 'An embroidery hoop with a stitched meadow: a butterfly, a sun, flowers and a mushroom still to be stitched',
      width: 600,
      height: 620,
    },
    banner: {
      image: '/stitch-tales/images/banner.webp',
      alt: 'A patchwork of nonograms turning into embroidery: an octopus with clownfish, a toucan, a torii gate, swallows, a fox, a Christmas tree and more',
      width: 2240,
      height: 960,
    },
    rules: {
      intro:
        'Stitch Tales is built on nonograms, picture logic puzzles also known as griddlers, hanjie or Japanese crosswords. The numbers beside the rows and above the columns tell you which cells to fill; fill the right ones, and a hidden picture appears — here, a figure embroidered into the scene in your hoop.',
      steps: [
        'The numbers beside a row or above a column tell you how many cells in a row to stitch, and in what order.',
        'Between two runs there is always at least one empty cell — mark it with a cross.',
        'Swipe your finger, and the thread follows it across the cells.',
        'A wrong stitch costs one of your three lives, so take your time.',
        'Solve the grid, and the figure is embroidered into the scene in your hoop.',
      ],
      notes: [
        'Read the numbers above a column from top to bottom, and those beside a row from left to right.',
        'In the sampler every number has its own thread color: runs of different colors may touch, while runs of the same color need an empty cell between them.',
        'Your first figure walks you through every rule.',
      ],
      tips: [
        'Start with the fullest lines: add up the runs with one empty cell between each. If the total equals the length of the line, the whole line is solved; if it falls short by just a cell or two, the longer runs already have cells you can be sure of.',
        'Slide a run as far as it goes to one end, then to the other: the cells it covers both times are always stitched. A 7 in a line of 10 always fills its middle four.',
        'A stitch right at the edge of the board is the start of the first run: stitch the whole run from there and put a cross after it.',
        'Once a line is solved, its empty cells get crosses — and every cross tells the lines across it where a run cannot go.',
        'Don’t guess: a wrong stitch costs a life. If nothing in a line is certain yet, come back to it after the lines that cross it.',
      ],
      image: '/stitch-tales/images/nonogram.svg',
      alt: 'A nonogram of a cat, almost solved: garnet stitched cells, crosses in the empty ones',
      width: 474,
      height: 410,
    },
    screenshots: [
      {
        image: '/stitch-tales/images/screen-1.webp',
        alt: 'An owl taking shape on a nonogram, with crosses in the empty cells',
      },
      {
        image: '/stitch-tales/images/screen-2.webp',
        alt: 'The Zodiac scene in the hoop, stitched figure by figure',
      },
      {
        image: '/stitch-tales/images/screen-3.webp',
        alt: 'A close-up of the Cat by the window scene: swallows, a butterfly, a cat and a ball of yarn',
      },
      {
        image: '/stitch-tales/images/screen-4.webp',
        alt: 'The calendar: a small embroidery for every day and a hedgehog for the whole month',
      },
      { image: '/stitch-tales/images/screen-5.webp', alt: 'The endless sampler of colored folk patterns' },
      { image: '/stitch-tales/images/screen-6.webp', alt: 'The collection of finished hoops' },
    ],
    features: [
      {
        title: 'Hoop after hoop',
        text: 'A cat by the window, stained-glass birds, a winter village, the halls of Asgard, the Wild West and many more. Every finished hoop joins your collection.',
      },
      {
        title: 'Embroidery that feels real',
        text: 'Every figure has its own threads and stitches, soft shadows on linen and the gentle sounds of needle and hoop.',
      },
      {
        title: 'A calendar of daily stitches',
        text: 'A small piece of embroidery waits every day. Stitch the whole month, and its big figure opens — missed days will wait for you.',
      },
      {
        title: 'An endless sampler',
        text: 'After your first finished scene, a sampler of folk patterns opens: colored nonograms in two or three threads that never run out.',
      },
      {
        title: 'Hints for the tricky moments',
        text: 'Reveal a cell, a whole line or 10 random cells — and a thimble saves you from your next mistake.',
      },
      {
        title: 'No timer, no rush',
        text: 'A gift every day, Game Center achievements and leaderboards on iPhone and iPad, and no internet needed to play.',
      },
    ],
    support: {
      email: 'stitchtales.support@paastudios.com',
      url: '/stitch-tales/support.html',
      note: 'You can also reach us from the game under Profile → Contact us.',
    },
    privacyPolicy: '/stitch-tales/privacy-policy.html',
    pages: [
      { path: 'privacy-policy.html', titleKey: 'privacyPolicy', content: 'privacy-policy.html' },
      { path: 'support.html', titleKey: 'support', content: 'support.html', translated: true },
    ],
  },
];
