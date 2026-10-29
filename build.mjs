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
import { docPage, gamePage, homePage, notFoundPage, sitemap } from './src/templates.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));

async function write(file, content) {
  const full = path.join(root, file);
  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, content);
  console.log(file);
}

// Every image a game refers to must be in the repository: a missing file
// would ship as a broken picture. og.jpg is the link preview from tools/og.py
async function checkImages(game) {
  const images = [
    game.icon,
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

await write('index.html', homePage({ studio, games, mosaic }));
for (const game of games) {
  await write(`${game.slug}/index.html`, gamePage({ studio, games, game }));
  for (const page of game.pages) {
    const content = await readFile(path.join(root, 'content', game.slug, page.content), 'utf8');
    await write(`${game.slug}/${page.path}`, docPage({ studio, games, game, page, content }));
  }
}
await write('404.html', notFoundPage({ studio, games }));
await write('sitemap.xml', sitemap({ studio, games }));
