// English — the source language of the site. A translation is a file next to
// this one with the same shape: `ui` for the interface, `studio` for the
// texts of the home page that override src/studio.mjs and, under `games`, the
// texts of each game that override the English ones in src/games.mjs.
// `{name}`-style placeholders are filled in by the templates.
export default {
  code: 'en',
  hreflang: 'en',
  name: 'English',
  ogLocale: 'en_US',
  ui: {
    skip: 'Skip to content',
    navGames: 'Games',
    navContact: 'Contact',
    fineNoCookies: 'This site sets no cookies and uses no trackers.',
    fineTrademarks:
      'App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.',
    appStoreAlt: 'Download {name} on the App Store',
    googlePlayAlt: 'Get {name} on Google Play',
    comingSoon: 'Coming soon to {stores}',
    storeAppStore: 'the App Store',
    storeGooglePlay: 'Google Play',
    and: 'and',
    freeOn: 'Free on {platforms}',
    howToPlay: 'How to play',
    tips: 'Tips for solving',
    faq: 'Questions and answers',
    gallery: 'A closer look',
    screenshots: 'Screenshots',
    features: 'What’s inside',
    support: 'Support',
    supportText: 'Questions, ideas, or something not working? Write to us — we read every message.',
    supportPage: 'Support page',
    privacyPolicy: 'Privacy Policy',
    moreFrom: 'More from {studio}',
    language: 'Language',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Independent game studio',
    ourGames: 'Our games',
    howWeMake: 'How we make them',
    sayHello: 'Say hello',
    sayHelloText:
      'Questions, ideas, a bug — or just a kind word. Write to the game you play, we read every message.',
    discover: 'Discover {name}',
    docDescription: '{title} of {name} by {studio}.',
  },
  games: {},
};
