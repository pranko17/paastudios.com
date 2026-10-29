// The catalog: one entry per game, in the order they appear on the home page.
// Adding a game is a new entry here plus its images in <slug>/images/ — the
// home page card, the game page and the sitemap come from this data.
//
// Fields:
//   slug          folder and URL of the game page: paastudios.com/<slug>/
//   name, genre, tagline, summary — what the cards and the page hero say
//   platforms     shown under the store buttons
//   stores        appStore / googlePlay: { url, id }; leave a store out
//                 while the game is not there yet — the page then says
//                 "Coming soon" instead of the badge
//   theme         the game's own colors for its card and page;
//                 scheme 'dark' or 'light'; frame 'grid' (board cells) or
//                 'stitch' (dashed running stitch) decorates the card
//   icon          square app icon (tools/images.py makes it)
//   art           hero picture: { phones: [three screenshots] } or
//                 { image, alt, width, height } for an illustration
//   rules         how to play: steps and an illustration
//   screenshots   gallery of phone screenshots, may be empty
//   features      what's inside: title and text each
//   support       email, optional support page url and note
//   privacyPolicy url of the game's privacy policy; a policy kept in this
//                 repository is listed in `pages` and built from content/
//   pages         extra pages of the game: { path, title, content } —
//                 content/<slug>/<file> holds the page body
export const games = [
  {
    slug: 'pixtangle',
    name: 'Pixtangle',
    genre: 'Shikaku logic puzzle',
    tagline: 'Slice the grid. Watch pixel art bloom.',
    summary:
      'Split the board into rectangles — every number is the size of its own rectangle. Fill the whole grid and the puzzle blooms into a pixel-art picture for your collection.',
    platforms: 'iPhone, iPad and Android',
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
        { image: '/pixtangle/images/screen-3.webp', alt: 'The finished lion pixel art' },
        { image: '/pixtangle/images/screen-4.webp', alt: 'The collection of pixel arts by category' },
      ],
    },
    rules: {
      steps: [
        'Drag across the board to draw a rectangle around a number.',
        'Each rectangle holds exactly one number…',
        '…and that number is its area in cells.',
        'Cover the whole board, and the picture appears.',
      ],
      image: '/pixtangle/images/board.svg',
      alt: 'A six by six Pixtangle board: pastel rectangles with numbers, one being drawn',
      width: 400,
      height: 400,
    },
    screenshots: [
      { image: '/pixtangle/images/screen-1.webp', alt: 'A Medium board with rectangles in progress' },
      { image: '/pixtangle/images/screen-2.webp', alt: 'The sakura board halfway to its pixel art' },
      { image: '/pixtangle/images/screen-3.webp', alt: 'The finished lion pixel art' },
      { image: '/pixtangle/images/screen-4.webp', alt: 'Collections of pixel arts by category' },
      { image: '/pixtangle/images/screen-5.webp', alt: 'The daily challenge calendar' },
      { image: '/pixtangle/images/screen-6.webp', alt: 'Six difficulties of classic levels' },
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
    support: {
      email: 'pixtangle.support@paastudios.com',
      url: 'https://pranko17.github.io/pixtangle-legal/support.html',
    },
    privacyPolicy: 'https://pranko17.github.io/pixtangle-legal/privacy-policy.html',
    pages: [],
  },
  {
    slug: 'stitch-tales',
    name: 'Stitch Tales',
    genre: 'Cross-stitch nonogram',
    tagline: 'Every puzzle is a stitch in a bigger picture.',
    summary:
      'Read the numbers along the rows and columns, fill the right cells — and each solved nonogram is embroidered into a scene in your hoop.',
    platforms: 'iPhone, iPad and Android',
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
        title: 'Eight scenes to embroider',
        text: 'A meadow, Stonehenge, a picnic, the solar system, a Japanese garden, a dollhouse, a winter village and the sea floor.',
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
      { path: 'privacy-policy.html', title: 'Privacy Policy', content: 'privacy-policy.html' },
    ],
  },
];
