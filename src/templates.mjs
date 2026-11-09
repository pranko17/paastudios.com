// Page templates: plain functions from data to HTML strings.
import { readFileSync } from 'node:fs';

const YEAR = new Date().getFullYear();

// The stylesheet goes into every page rather than a <link>: the page paints
// without waiting for a second request. Sharing a cached file between pages
// buys little here — GitHub Pages lets browsers keep files for ten minutes
const CSS = readFileSync(new URL('../assets/site.css', import.meta.url), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .split('\n')
  .map((line) => {
    return line.trim();
  })
  .filter(Boolean)
  .join('\n');

// A picture comes with smaller copies next to it, <name>-<width>.<ext>
// (tools/images.py writes them), and the browser picks by the width the page
// shows it at and the screen density. Widths of the files, the last one is
// the picture itself:
export const IMAGE_WIDTHS = { screen: [360, 600], icon: [128, 256], banner: [720, 1280, 2240] };

export function imageVariant(image, width) {
  return image.replace(/(\.\w+)$/, `-${width}$1`);
}

function srcset(image, widths) {
  const full = widths[widths.length - 1];
  return [
    ...widths.slice(0, -1).map((width) => {
      return `${imageVariant(image, width)} ${width}w`;
    }),
    `${image} ${full}w`,
  ].join(', ');
}

// Widths the screenshots are shown at, after site.css: hero phones take 44% of
// a box up to 520px, gallery shots clamp(190px, 22vw, 250px) less the bezel
const HERO_PHONE_SIZES = '(max-width: 560px) 40vw, 210px';
const SHOT_SIZES = '(max-width: 863px) 170px, (max-width: 1136px) 20vw, 223px';
// The banner fills the content column; on a phone it is cropped to 2 : 1 and
// drawn wider than the column, as wide as its own proportions need
const BANNER_SIZES = '(max-width: 600px) 108vw, (max-width: 1184px) 92vw, 1120px';

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Fills `{name}`-style placeholders of an interface string
function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return values[key] ?? match;
  });
}

// Store link with campaign marks. App Store Connect counts page views and
// downloads per `ct` (only together with the provider token `pt`); Google
// Play hands the referrer to the installed app, and Firebase records it as the
// source of the install. The campaign names the page the link was on
function storeUrl(studio, kind, store, campaign) {
  if (kind === 'appStore') {
    if (!studio.appStoreProviderToken) {
      return store.url;
    }
    const params = new URLSearchParams({ pt: studio.appStoreProviderToken, ct: campaign, mt: '8' });
    return `${store.url}?${params}`;
  }
  const referrer = new URLSearchParams({
    utm_source: 'paastudios.com',
    utm_medium: 'website',
    utm_campaign: campaign,
  });
  return `${store.url}&referrer=${encodeURIComponent(referrer.toString())}`;
}

// The game's colors as CSS variables: its card, mini card and page wear them
function themeStyle(theme) {
  const vars = {
    '--bg': theme.bg,
    '--surface': theme.surface,
    '--surface2': theme.surface2,
    '--line': theme.line,
    '--text': theme.text,
    '--muted': theme.muted,
    '--accent': theme.accent,
    '--accent-text': theme.accentText,
    '--glow': theme.glow,
    '--glow2': theme.glow2,
    '--stitch': theme.stitch,
    '--thread-1': theme.threads?.[0],
    '--thread-2': theme.threads?.[1],
    '--thread-3': theme.threads?.[2],
  };
  return Object.entries(vars)
    .filter(([, value]) => {
      return value;
    })
    .map(([name, value]) => {
      return `${name}:${value}`;
    })
    .join(';');
}

function themeAttrs(game, className) {
  const frame = game.theme.frame ? ` frame-${game.theme.frame}` : '';
  return `class="${className}${frame}" data-scheme="${game.theme.scheme}" style="${esc(themeStyle(game.theme))}"`;
}

const GLOBE =
  '<svg class="lang-globe" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

const CHEVRON =
  '<svg class="lang-chevron" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const CHECK =
  '<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Closes an open language menu on a click outside it and on Escape: the menu
// is a <details> and works without the script, the script only adds this
const LANG_MENU_SCRIPT = `<script>
document.addEventListener('click', (event) => {
  for (const menu of document.querySelectorAll('.lang-menu[open]')) {
    if (!menu.contains(event.target)) menu.open = false;
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  for (const menu of document.querySelectorAll('.lang-menu[open]')) {
    menu.open = false;
    menu.querySelector('summary').focus();
  }
});
</script>
`;

const ARROW =
  '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// ------------------------------------------------------------------ layout ---

function layout({
  studio,
  games,
  locale,
  title,
  description,
  path,
  image,
  body,
  bodyAttrs,
  head = '',
  alternates = [],
  keywords = [],
  languages = null,
}) {
  const url = `${studio.url}${path}`;
  // Every language version lists all of them, itself included, and English
  // as the fallback for languages the site does not have
  const hreflangs = alternates.length
    ? [
        ...alternates.map((alt) => {
          return `<link rel="alternate" hreflang="${alt.hreflang}" href="${studio.url}${alt.path}">`;
        }),
        `<link rel="alternate" hreflang="x-default" href="${studio.url}${alternates[0].path}">`,
      ].join('\n') + '\n'
    : '';
  const ogAlternates = alternates
    .filter((alt) => {
      return alt.ogLocale !== locale.ogLocale;
    })
    .map((alt) => {
      return `<meta property="og:locale:alternate" content="${alt.ogLocale}">\n`;
    })
    .join('');
  const keywordsMeta = keywords.length
    ? `<meta name="keywords" content="${esc(keywords.join(', '))}">\n`
    : '';
  return `<!doctype html>
<html lang="${locale.hreflang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${keywordsMeta}<link rel="canonical" href="${url}">
${hreflangs}<meta property="og:type" content="website">
<meta property="og:locale" content="${locale.ogLocale}">
${ogAlternates}<meta property="og:site_name" content="${esc(studio.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${studio.url}${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<style>
${CSS}
</style>
${head}</head>
<body ${bodyAttrs}>
<a class="skip" href="#main">${esc(locale.ui.skip)}</a>
${header(studio, locale, languages)}
<main id="main">
${body}
</main>
${footer(studio, games, locale)}
${languages ? LANG_MENU_SCRIPT : ''}</body>
</html>
`;
}

// URL of the home page in a language: English at the root, the rest in a
// folder named by the language code
export function homePath(locale) {
  return locale.code === 'en' ? '/' : `/${locale.code}/`;
}

// URL of the game page in a language: English at the game's root, the rest
// in a folder named by the language code
export function gamePath(game, locale) {
  return locale.code === 'en' ? `/${game.slug}/` : `/${game.slug}/${locale.code}/`;
}

// Link to a game from a page in some language: its page in that language when
// the game is translated into it, the English one otherwise
function gameLink(game, locale) {
  return locale.games?.[game.slug] ? gamePath(game, locale) : gamePath(game, { code: 'en' });
}

// URL of a game's extra page in a language: a translated page sits in the
// language folder of the game, like the game page itself
export function docPath(game, page, locale) {
  return page.translated && locale.code !== 'en'
    ? `/${game.slug}/${locale.code}/${page.path}`
    : `/${game.slug}/${page.path}`;
}

// hreflang links, og:locale alternates and the language menu of a page that
// exists in several languages; `pathOf` gives its URL in a language
function languageVersions(locale, locales, pathOf) {
  if (locales.length < 2) {
    return { alternates: [], languages: null };
  }
  const alternates = locales.map((other) => {
    return {
      code: other.code,
      hreflang: other.hreflang,
      ogLocale: other.ogLocale,
      name: other.name,
      path: pathOf(other),
    };
  });
  const current = alternates.find((alt) => {
    return alt.code === locale.code;
  });
  return { alternates, languages: { current, list: alternates } };
}

// Language menu of a page that exists in several languages: a button with the
// current language opens a card with all of them
function languageMenu(ui, { current, list }) {
  const items = list
    .map((alt) => {
      const active = alt.code === current.code;
      return `<li><a href="${alt.path}" hreflang="${alt.hreflang}" lang="${alt.hreflang}"${active ? ' aria-current="page"' : ''}><span>${esc(alt.name)}</span>${active ? CHECK : ''}</a></li>`;
    })
    .join('\n        ');
  return `<details class="lang-menu">
    <summary aria-label="${esc(ui.language)}: ${esc(current.name)}">${GLOBE}<span class="lang-current">${esc(current.name)}</span>${CHEVRON}</summary>
    <div class="lang-panel">
      <p class="lang-title">${esc(ui.language)}</p>
      <ul>
        ${items}
      </ul>
    </div>
  </details>`;
}

function header(studio, locale, languages) {
  const { ui } = locale;
  const home = homePath(locale);
  return `<header class="site-header wrap">
  <a class="brand" href="${home}"><img src="/assets/logo.svg" width="34" height="34" alt=""><span>${esc(studio.name)}</span></a>
  <div class="header-actions">
  <nav class="site-nav" aria-label="Main">
    <a href="${home}#games">${esc(ui.navGames)}</a>
    <a href="${home}#contact">${esc(ui.navContact)}</a>
  </nav>
  ${languages ? languageMenu(ui, languages) : ''}
  </div>
</header>`;
}

function footer(studio, games, locale) {
  const { ui } = locale;
  const links = games
    .map((game) => {
      return `<a href="${gameLink(game, locale)}">${esc(game.name)}</a>`;
    })
    .join('\n      ');
  return `<footer class="site-footer">
  <div class="wrap footer-inner">
    <div class="footer-top">
      <a class="brand brand-small" href="${homePath(locale)}"><img src="/assets/logo.svg" width="28" height="28" alt=""><span>${esc(studio.name)}</span></a>
      <nav class="footer-nav" aria-label="${esc(ui.navGames)}">
      ${links}
      </nav>
    </div>
    <p class="fine">© ${YEAR} ${esc(studio.name)}. ${esc(ui.fineNoCookies)}</p>
    <p class="fine">${esc(ui.fineTrademarks)}</p>
  </div>
</footer>`;
}

// ------------------------------------------------------------ game pieces ---

function storeButtons({ studio, game, ui, campaign }) {
  const badges = [];
  const missing = [];
  if (game.stores.appStore) {
    badges.push(
      `<a class="store" href="${esc(storeUrl(studio, 'appStore', game.stores.appStore, campaign))}"><img src="/assets/badges/app-store.svg" width="144" height="48" alt="${esc(fill(ui.appStoreAlt, { name: game.name }))}"></a>`
    );
  } else {
    missing.push(ui.storeAppStore);
  }
  if (game.stores.googlePlay) {
    badges.push(
      `<a class="store" href="${esc(storeUrl(studio, 'googlePlay', game.stores.googlePlay, campaign))}"><img src="/assets/badges/google-play.png" srcset="/assets/badges/google-play-322.png 322w, /assets/badges/google-play.png 564w" sizes="(max-width: 480px) 134px, 161px" width="161" height="48" alt="${esc(fill(ui.googlePlayAlt, { name: game.name }))}"></a>`
    );
  } else {
    missing.push(ui.storeGooglePlay);
  }
  const soon = missing.length
    ? `<p class="soon">${esc(fill(ui.comingSoon, { stores: missing.join(` ${ui.and} `) }))}</p>`
    : '';
  return badges.length ? `<div class="stores">${badges.join('')}</div>${soon}` : soon;
}

// A hero picture: three phones or an illustration (`art` or `cardArt` of a game)
function art(picture, { eager = false } = {}) {
  const loading = eager ? 'eager' : 'lazy';
  if (picture.phones) {
    const [left, center, right] = picture.phones;
    const phone = (shot, position) => {
      return `<figure class="device phone-${position}"><img src="${esc(shot.image)}" srcset="${esc(srcset(shot.image, IMAGE_WIDTHS.screen))}" sizes="${HERO_PHONE_SIZES}" width="600" height="1304" alt="${esc(shot.alt)}" loading="${loading}" decoding="async"></figure>`;
    };
    return `<div class="phones">${phone(left, 'left')}${phone(right, 'right')}${phone(center, 'center')}</div>`;
  }
  return `<img class="art-image" src="${esc(picture.image)}" width="${picture.width}" height="${picture.height}" alt="${esc(picture.alt)}" loading="${loading}" decoding="async">`;
}

function appIcon(game, size, className = 'app-icon') {
  return `<img class="${className}" src="${esc(game.icon)}" srcset="${esc(srcset(game.icon, IMAGE_WIDTHS.icon))}" sizes="${size}px" width="${size}" height="${size}" alt="">`;
}

// -------------------------------------------------------------- home page ---

const PRINCIPLE_ICONS = [
  // Plane
  '<path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" fill="currentColor"/>',
  // Person, crossed out
  '<circle cx="12" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 20c.9-3.6 3.6-5.6 7-5.6s6.1 2 7 5.6M4 4l16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  // Phone with a heart
  '<rect x="6.5" y="2.5" width="11" height="19" rx="2.8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 15.2c-2.3-1.5-3.4-2.7-3.4-4a1.8 1.8 0 0 1 3.4-.9 1.8 1.8 0 0 1 3.4.9c0 1.3-1.1 2.5-3.4 4z" fill="currentColor"/>',
];

function gameCard({ studio, game: source, locale }) {
  const game = localizeGame(source, locale);
  const { ui } = locale;
  const link = gameLink(source, locale);
  return `<article ${themeAttrs(game, 'game-card')} id="${game.slug}">
  <div class="game-card-text">
    <div class="game-id">
      ${appIcon(game, 76)}
      <div>
        <h3>${esc(game.name)}</h3>
        <p class="genre">${esc(game.genre)}</p>
      </div>
    </div>
    <p class="tagline">${esc(game.tagline)}</p>
    <p class="summary">${esc(game.summary)}</p>
    ${storeButtons({ studio, game, ui, campaign: `home-${locale.code}` })}
    <a class="more" href="${link}">${esc(fill(ui.discover, { name: game.name }))} ${ARROW}</a>
  </div>
  <a class="game-card-art" href="${link}" tabindex="-1" aria-hidden="true">${art(game.cardArt ?? game.art)}</a>
</article>`;
}

// The studio in one language: the translation's texts over src/studio.mjs
export function localizeStudio(studio, locale) {
  return { ...studio, ...locale.studio };
}

// The headline marks its stitched word with [brackets] and its line break with
// a newline, so each language puts both where its own wording needs them
function headline(text) {
  return esc(text)
    .replace(/\[([^\]]+)\]/g, '<span class="stitched">$1</span>')
    .replace(/\n/g, '<br>');
}

export function homePage({ studio: source, games, mosaic, locale, locales }) {
  const studio = localizeStudio(source, locale);
  const { ui } = locale;
  const { alternates, languages } = languageVersions(locale, locales, homePath);
  const chips = games
    .map((game) => {
      return `<a class="chip" href="#${game.slug}">${appIcon(game, 36, '')}<span>${esc(game.name)}</span></a>`;
    })
    .join('\n        ');
  const principles = studio.principles
    .map((principle, index) => {
      return `<div class="principle">
        <div class="principle-icon"><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">${PRINCIPLE_ICONS[index % PRINCIPLE_ICONS.length]}</svg></div>
        <h3>${esc(principle.title)}</h3>
        <p>${esc(principle.text)}</p>
      </div>`;
    })
    .join('\n      ');
  const contacts = games
    .map((game) => {
      return `<a class="contact-item" href="mailto:${esc(game.support.email)}">${appIcon(game, 44, '')}<span><strong>${esc(game.name)}</strong><span>${esc(game.support.email)}</span></span></a>`;
    })
    .join('\n      ');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: studio.name,
    url: studio.url,
    logo: `${studio.url}/assets/apple-touch-icon.png`,
  };
  const body = `<section class="hero wrap">
  <div class="hero-text">
    <p class="eyebrow">${esc(ui.studioEyebrow)}</p>
    <h1>${headline(studio.headline)}</h1>
    <p class="lead">${esc(studio.intro)}</p>
    <div class="hero-games">
        ${chips}
    </div>
  </div>
  <div class="hero-art" aria-hidden="true">${mosaic}</div>
</section>

<section class="games wrap" id="games" aria-labelledby="games-title">
  <div class="section-head">
    <h2 id="games-title">${esc(ui.ourGames)}</h2>
  </div>
  ${games
    .map((game) => {
      return gameCard({ studio, game, locale });
    })
    .join('\n  ')}
</section>

<section class="block wrap" aria-labelledby="principles-title">
  <div class="section-head">
    <h2 id="principles-title">${esc(ui.howWeMake)}</h2>
  </div>
  <div class="principles-grid">
      ${principles}
  </div>
</section>

<section class="contact wrap" id="contact" aria-labelledby="contact-title">
  <h2 id="contact-title">${esc(ui.sayHello)}</h2>
  <p class="lead">${esc(ui.sayHelloText)}</p>
  <div class="contact-list">
      ${contacts}
  </div>
</section>`;
  return layout({
    studio,
    games,
    locale,
    title: studio.title,
    description: studio.description,
    path: homePath(locale),
    image: '/assets/og.jpg',
    body,
    bodyAttrs: 'class="studio"',
    head: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n`,
    alternates,
    languages,
  });
}

// -------------------------------------------------------------- game page ---

// The game in one language: the translation's texts over the English entry.
// Pictures, colors and store links stay the entry's own; alts follow the
// pictures by position
export function localizeGame(game, locale) {
  const text = locale.games?.[game.slug];
  if (!text) {
    return game;
  }
  const withAlts = (shots, alts) => {
    return shots.map((shot, index) => {
      return { ...shot, alt: alts?.[index] ?? shot.alt };
    });
  };
  // A single picture takes its translated alt, if there is one
  const withAlt = (picture, translated) => {
    return picture && translated?.alt ? { ...picture, alt: translated.alt } : picture;
  };
  const art = game.art.phones
    ? { ...game.art, phones: withAlts(game.art.phones, text.art?.alts) }
    : withAlt(game.art, text.art);
  return {
    ...game,
    genre: text.genre ?? game.genre,
    tagline: text.tagline ?? game.tagline,
    summary: text.summary ?? game.summary,
    platforms: text.platforms ?? game.platforms,
    keywords: text.keywords ?? game.keywords,
    art,
    cardArt: withAlt(game.cardArt, text.cardArt),
    banner: withAlt(game.banner, text.banner),
    rules: { ...game.rules, ...text.rules },
    screenshots: withAlts(game.screenshots, text.screenshots),
    features: text.features ?? game.features,
    faq: text.faq ?? game.faq,
    support: { ...game.support, note: text.supportNote ?? game.support.note },
  };
}

export function gamePage({ studio, games, game: source, locale, locales }) {
  const game = localizeGame(source, locale);
  const { ui } = locale;
  const path = gamePath(game, locale);
  const { alternates, languages } = languageVersions(locale, locales, (other) => {
    return gamePath(game, other);
  });
  const list = (items, className) => {
    return items?.length
      ? `<ul class="${className}">
      ${items
        .map((item) => {
          return `<li>${esc(item)}</li>`;
        })
        .join('\n      ')}
    </ul>`
      : '';
  };
  const steps = game.rules.steps
    .map((step) => {
      return `<li>${esc(step)}</li>`;
    })
    .join('\n      ');
  const intro = game.rules.intro ? `<p class="rules-intro">${esc(game.rules.intro)}</p>` : '';
  const tips = game.rules.tips?.length
    ? `<section class="block wrap" aria-labelledby="tips-title">
  <div class="section-head"><h2 id="tips-title">${esc(ui.tips)}</h2></div>
  <ol class="tips">
    ${game.rules.tips
      .map((tip) => {
        return `<li>${esc(tip)}</li>`;
      })
      .join('\n    ')}
  </ol>
</section>`
    : '';
  const faq = game.faq?.length
    ? `<section class="block wrap" aria-labelledby="faq-title">
  <div class="section-head"><h2 id="faq-title">${esc(ui.faq)}</h2></div>
  <div class="faq">
    ${game.faq
      .map((item) => {
        return `<details><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`;
      })
      .join('\n    ')}
  </div>
</section>`
    : '';
  const banner = game.banner
    ? `<figure class="banner wrap"><img src="${esc(game.banner.image)}" srcset="${esc(srcset(game.banner.image, IMAGE_WIDTHS.banner))}" sizes="${BANNER_SIZES}" width="${game.banner.width}" height="${game.banner.height}" alt="${esc(game.banner.alt)}" loading="lazy" decoding="async"></figure>`
    : '';
  const features = game.features
    .map((feature) => {
      return `<div class="feature"><h3>${esc(feature.title)}</h3><p>${esc(feature.text)}</p></div>`;
    })
    .join('\n    ');
  const gallery = game.screenshots.length
    ? `<section class="block gallery" aria-labelledby="gallery-title">
  <div class="wrap section-head"><h2 id="gallery-title">${esc(ui.gallery)}</h2></div>
  <div class="shots" tabindex="0" aria-label="${esc(ui.screenshots)}">
    ${game.screenshots
      .map((shot) => {
        return `<figure class="device shot"><img src="${esc(shot.image)}" srcset="${esc(srcset(shot.image, IMAGE_WIDTHS.screen))}" sizes="${SHOT_SIZES}" width="600" height="1304" alt="${esc(shot.alt)}" loading="lazy" decoding="async"></figure>`;
      })
      .join('\n    ')}
  </div>
</section>`
    : '';
  // The support page in this language when it is one of the game's
  // translated pages
  const supportPage = game.pages.find((page) => {
    return `/${game.slug}/${page.path}` === game.support.url;
  });
  const supportUrl = supportPage ? docPath(game, supportPage, locale) : game.support.url;
  const supportLinks = [
    supportUrl && `<li><a href="${esc(supportUrl)}">${esc(ui.supportPage)} ${ARROW}</a></li>`,
    `<li><a href="${esc(game.privacyPolicy)}">${esc(ui.privacyPolicy)} ${ARROW}</a></li>`,
  ]
    .filter(Boolean)
    .join('\n        ');
  const others = games.filter((other) => {
    return other !== source;
  });
  const moreGames = others.length
    ? `<section class="block wrap" aria-labelledby="more-title">
  <div class="section-head"><h2 id="more-title">${esc(fill(ui.moreFrom, { studio: studio.name }))}</h2></div>
  <div class="more-games">
    ${others
      .map((other) => {
        const text = localizeGame(other, locale);
        return `<a ${themeAttrs(other, 'mini-card')} href="${gameLink(other, locale)}">${appIcon(other, 72)}<span><strong>${esc(other.name)}</strong><span>${esc(text.tagline)}</span></span>${ARROW}</a>`;
      })
      .join('\n    ')}
  </div>
</section>`
    : '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: game.name,
    description: game.summary,
    url: `${studio.url}${path}`,
    image: `${studio.url}${game.icon}`,
    inLanguage: locale.hreflang,
    applicationCategory: 'GameApplication',
    applicationSubCategory: game.genre,
    operatingSystem: 'iOS, Android',
    author: { '@type': 'Organization', name: studio.name, url: studio.url },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  if (game.keywords?.length) {
    jsonLd.keywords = game.keywords.join(', ');
  }
  if (game.screenshots.length) {
    jsonLd.screenshot = game.screenshots.map((shot) => {
      return `${studio.url}${shot.image}`;
    });
  }
  const storeUrls = Object.values(game.stores).map((store) => {
    return store.url;
  });
  if (storeUrls.length) {
    jsonLd.sameAs = storeUrls;
  }
  const smartBanner = game.stores.appStore
    ? `<meta name="apple-itunes-app" content="app-id=${esc(game.stores.appStore.id)}">\n`
    : '';

  const body = `<section class="game-hero wrap">
  <div class="game-hero-text">
    ${appIcon(game, 112, 'app-icon app-icon-lg')}
    <p class="eyebrow">${esc(game.genre)}</p>
    <h1>${esc(game.name)}</h1>
    <p class="tagline">${esc(game.tagline)}</p>
    <p class="lead">${esc(game.summary)}</p>
    ${storeButtons({ studio, game, ui, campaign: `${game.slug}-${locale.code}` })}
    <p class="platforms">${esc(fill(game.mentionFree === false ? ui.madeFor : ui.freeOn, { platforms: game.platforms }))}</p>
  </div>
  <div class="game-hero-art">${art(game.art, { eager: true })}</div>
</section>
${banner ? `\n${banner}\n` : ''}
<section class="block wrap rules" aria-labelledby="rules-title">
  <div>
    <h2 id="rules-title">${esc(ui.howToPlay)}</h2>
    ${intro}
    <ol class="steps">
      ${steps}
    </ol>
    ${list(game.rules.notes, 'rule-notes')}
  </div>
  <figure class="rules-art"><img src="${esc(game.rules.image)}" width="${game.rules.width}" height="${game.rules.height}" alt="${esc(game.rules.alt)}" loading="lazy" decoding="async"></figure>
</section>

${tips}

${gallery}

<section class="block wrap" aria-labelledby="features-title">
  <div class="section-head"><h2 id="features-title">${esc(ui.features)}</h2></div>
  <div class="feature-grid">
    ${features}
  </div>
</section>

${faq}

<section class="block wrap" id="support" aria-labelledby="support-title">
  <div class="support-card">
    <div>
      <h2 id="support-title">${esc(ui.support)}</h2>
      <p>${esc(ui.supportText)}${game.support.note ? ` ${esc(game.support.note)}` : ''}</p>
      <a class="button" href="mailto:${esc(game.support.email)}">${esc(game.support.email)}</a>
    </div>
    <ul class="link-list">
        ${supportLinks}
    </ul>
  </div>
</section>

${moreGames}`;
  return layout({
    studio,
    games,
    locale,
    title: fill(ui.gameTitle, { name: game.name, genre: game.genre, studio: studio.name }),
    description: `${game.tagline} ${game.summary}`,
    path,
    image: `/${game.slug}/images/og.jpg`,
    body,
    bodyAttrs: themeAttrs(game, 'game-page'),
    head: `${smartBanner}<meta name="theme-color" content="${esc(game.theme.bg)}">\n<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n`,
    alternates,
    keywords: game.keywords ?? [],
    languages,
  });
}

// --------------------------------------------- document and service pages ---

// A page from content/: `locales` are the languages it exists in, English
// alone for a page that is not translated
export function docPage({ studio, games, game, page, content, locale, locales }) {
  const { ui } = locale;
  const title = ui[page.titleKey];
  const { alternates, languages } = languageVersions(locale, locales, (other) => {
    return docPath(game, page, other);
  });
  const body = `<article class="doc">
<p class="crumbs"><a href="${homePath(locale)}">${esc(studio.name)}</a> · <a href="${gameLink(game, locale)}">${esc(game.name)}</a></p>
${content}
</article>`;
  return layout({
    studio,
    games,
    locale,
    title: `${game.name} — ${title}`,
    description: fill(ui.docDescription, { title, name: game.name, studio: studio.name }),
    path: docPath(game, page, locale),
    image: `/${game.slug}/images/og.jpg`,
    body,
    bodyAttrs: themeAttrs(game, 'doc-page'),
    alternates,
    languages,
  });
}

export function notFoundPage({ studio, games, locale }) {
  const body = `<section class="not-found wrap">
  <p class="eyebrow">404</p>
  <h1>This piece is missing.</h1>
  <p class="lead">The page you were looking for isn’t on the board. Try one of our games instead.</p>
  <div class="hero-games">
    ${games
      .map((game) => {
        return `<a class="chip" href="/${game.slug}/">${appIcon(game, 36, '')}<span>${esc(game.name)}</span></a>`;
      })
      .join('\n    ')}
  </div>
</section>`;
  return layout({
    studio,
    games,
    locale,
    title: `Page not found | ${studio.name}`,
    description: studio.description,
    path: '/404.html',
    image: '/assets/og.jpg',
    body,
    bodyAttrs: 'class="studio"',
    head: '<meta name="robots" content="noindex">\n',
  });
}

// Language versions of a page are listed with their alternates, the same set
// as the hreflang links in the pages: search engines pair them by either
export function sitemap({ studio, games, locales, localesOf, docLocalesOf }) {
  const entries = [];
  const add = (pageLocales, pathOf) => {
    const alternates =
      pageLocales.length > 1
        ? pageLocales.map((locale) => {
            return { hreflang: locale.hreflang, path: pathOf(locale) };
          })
        : [];
    for (const locale of pageLocales) {
      entries.push({ path: pathOf(locale), alternates });
    }
  };
  add(locales, homePath);
  for (const game of games) {
    add(localesOf(game), (locale) => {
      return gamePath(game, locale);
    });
    for (const page of game.pages) {
      add(docLocalesOf(game, page), (locale) => {
        return docPath(game, page, locale);
      });
    }
  }
  const urls = entries
    .map(({ path, alternates }) => {
      const links = alternates
        .map((alt) => {
          return `\n    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${studio.url}${alt.path}"/>`;
        })
        .join('');
      return `  <url><loc>${studio.url}${path}</loc>${links}${links ? '\n  ' : ''}</url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
