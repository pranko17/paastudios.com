// The studio itself: what the home page says about it and how to reach it.
// Texts here are English; translations live in src/i18n/<language>.mjs under
// `studio` and replace title, description, headline, intro and principles.
export const studio = {
  name: 'PAA Studios',
  url: 'https://paastudios.com',
  // Provider token of the App Store Connect account: App Store links carry it
  // with a campaign name (ct), and App Analytics → Campaigns counts page views
  // and downloads per campaign. Public — it is part of every such link
  appStoreProviderToken: '129254796',
  title: 'PAA Studios — small, calm puzzle games',
  description:
    'PAA Studios makes cozy logic puzzle games for iPhone, iPad and Android: Pixtangle and Stitch Tales.',
  // [brackets] mark the stitched word, \n the line break
  headline: 'Small, [calm]\npuzzle games.',
  intro:
    'We make cozy logic puzzles for iPhone, iPad and Android. Every puzzle ends with a little picture — a pixel-art animal, an embroidered butterfly — and there is never a rush to get there.',
  principles: [
    {
      title: 'Plays offline',
      text: 'No connection needed. Puzzle on a plane, on the metro or somewhere with no signal at all.',
    },
    {
      title: 'No accounts',
      text: 'Open the game and play. No sign-up, no login, no email address to hand over.',
    },
    {
      title: 'Your progress is yours',
      text: 'It lives on your device and is backed up to your own iCloud or Google account — we keep no servers to send it to.',
    },
  ],
};
