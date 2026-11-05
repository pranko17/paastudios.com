// Builds the site from src/ and content/ into the HTML that GitHub Pages
// serves from the repository root.
//
//   node build.mjs
//
// No dependencies. The generated pages are committed together with the sources.
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { games } from './src/games.mjs';
import { studio } from './src/studio.mjs';
import en from './src/i18n/en.mjs';
import {
  docPage,
  docPath,
  gamePage,
  homePage,
  homePath,
  IMAGE_WIDTHS,
  imageVariant,
  notFoundPage,
  sitemap,
} from './src/templates.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));

// Languages in the order of the language menu. English is the source; a
// language whose file is missing is skipped, and a game page is built only in
// the languages that translate that game
const LOCALE_ORDER = [
  'en',
  'ru',
  'uk',
  'be',
  'de',
  'fr',
  'es',
  'it',
  'pt',
  'pl',
  'nl',
  'sv',
  'da',
  'nb',
  'fi',
  'cs',
  'ro',
  'hu',
  'el',
  'lt',
  'lv',
  'et',
  'tr',
  'ja',
  'ko',
  'zh-hans',
  'zh-hant',
  'hi',
  'id',
  'vi',
];

// Texts of src/studio.mjs that a translation carries under `studio`
const STUDIO_KEYS = ['title', 'description', 'headline', 'intro', 'principles'];

async function loadLocales() {
  const locales = [];
  for (const code of LOCALE_ORDER) {
    const file = path.join(root, 'src/i18n', `${code}.mjs`);
    try {
      await access(file);
    } catch {
      continue;
    }
    const { default: locale } = await import(file);
    // A translation without some interface string would leave a hole on the
    // page: English fills it, and the build says which keys are missing
    const missing = Object.keys(en.ui).filter((key) => {
      return !(key in locale.ui);
    });
    // The same for the studio texts of the home page
    if (code !== 'en') {
      missing.push(
        ...STUDIO_KEYS.filter((key) => {
          return !locale.studio?.[key];
        }).map((key) => {
          return `studio.${key}`;
        })
      );
    }
    if (missing.length) {
      console.warn(`${code}: no ${missing.join(', ')} — English used`);
    }
    locales.push({ ...locale, ui: { ...en.ui, ...locale.ui } });
  }
  return locales;
}

const locales = await loadLocales();

function localesOf(game) {
  return locales.filter((locale) => {
    return locale.code === 'en' || locale.games?.[game.slug];
  });
}

// A translated page from content/ exists in every language of its game,
// the rest only in English
function docLocalesOf(game, page) {
  return page.translated ? localesOf(game) : [en];
}

async function write(file, content) {
  const full = path.join(root, file);
  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, content);
  console.log(file);
}

// Every image a game refers to must be in the repository: a missing file
// would ship as a broken picture. og.jpg is the link preview from tools/og.py;
// the icon and screenshots also have their smaller copies
async function checkImages(game) {
  const screens = [...(game.art.phones ?? []), ...game.screenshots].map((shot) => {
    return shot.image;
  });
  const images = [
    game.icon,
    imageVariant(game.icon, IMAGE_WIDTHS.icon[0]),
    ...screens.map((image) => {
      return imageVariant(image, IMAGE_WIDTHS.screen[0]);
    }),
    `/${game.slug}/images/og.jpg`,
    game.rules.image,
    game.art.image,
    ...(game.art.phones ?? []).map((shot) => {
      return shot.image;
    }),
    ...game.screenshots.map((shot) => {
      return shot.image;
    }),
  ].filter(Boolean);
  for (const image of images) {
    try {
      await access(path.join(root, image));
    } catch {
      throw new Error(`${game.slug}: no file ${image}`);
    }
  }
}

const mosaic = await readFile(path.join(root, 'assets/mosaic.svg'), 'utf8');

for (const game of games) {
  await checkImages(game);
}

for (const locale of locales) {
  await write(
    `${homePath(locale).slice(1)}index.html`,
    homePage({ studio, games, mosaic, locale, locales })
  );
}
for (const game of games) {
  const gameLocales = localesOf(game);
  for (const locale of gameLocales) {
    const folder = locale.code === 'en' ? game.slug : `${game.slug}/${locale.code}`;
    await write(`${folder}/index.html`, gamePage({ studio, games, game, locale, locales: gameLocales }));
  }
  for (const page of game.pages) {
    const pageLocales = docLocalesOf(game, page);
    for (const locale of pageLocales) {
      // English is content/<slug>/<file>, a translation content/<slug>/<code>/<file>
      const folder = locale.code === 'en' ? game.slug : `${game.slug}/${locale.code}`;
      const file = path.join(root, 'content', folder, page.content);
      let content;
      try {
        content = await readFile(file, 'utf8');
      } catch {
        throw new Error(`${game.slug}: ${page.path} is translated, but there is no ${path.relative(root, file)}`);
      }
      await write(
        docPath(game, page, locale).slice(1),
        docPage({ studio, games, game, page, content, locale, locales: pageLocales })
      );
    }
  }
}
await write('404.html', notFoundPage({ studio, games, locale: en }));
await write('sitemap.xml', sitemap({ studio, games, locales, localesOf, docLocalesOf }));
