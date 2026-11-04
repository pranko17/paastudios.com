// Page templates: plain functions from data to HTML strings.

const YEAR = new Date().getFullYear();

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
  };
  return Object.entries(vars)
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
<link rel="stylesheet" href="/assets/site.css">
${head}</head>
<body ${bodyAttrs}>
<a class="skip" href="#main">${esc(locale.ui.skip)}</a>
${header(studio, locale.ui, languages)}
<main id="main">
${body}
</main>
${footer(studio, games, locale.ui)}
${languages ? LANG_MENU_SCRIPT : ''}</body>
</html>
`;
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

function header(studio, ui, languages) {
  return `<header class="site-header wrap">
  <a class="brand" href="/"><img src="/assets/logo.svg" width="34" height="34" alt=""><span>${esc(studio.name)}</span></a>
  <div class="header-actions">
  <nav class="site-nav" aria-label="Main">
    <a href="/#games">${esc(ui.navGames)}</a>
    <a href="/#contact">${esc(ui.navContact)}</a>
  </nav>
  ${languages ? languageMenu(ui, languages) : ''}
  </div>
</header>`;
}

function footer(studio, games, ui) {
  const links = games
    .map((game) => {
      return `<a href="/${game.slug}/">${esc(game.name)}</a>`;
    })
    .join('\n      ');
  return `<footer class="site-footer">
  <div class="wrap footer-inner">
    <div class="footer-top">
      <a class="brand brand-small" href="/"><img src="/assets/logo.svg" width="28" height="28" alt=""><span>${esc(studio.name)}</span></a>
      <nav class="footer-nav" aria-label="Games">
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
      `<a class="store" href="${esc(storeUrl(studio, 'googlePlay', game.stores.googlePlay, campaign))}"><img src="/assets/badges/google-play.png" width="161" height="48" alt="${esc(fill(ui.googlePlayAlt, { name: game.name }))}"></a>`
    );
  } else {
    missing.push(ui.storeGooglePlay);
  }
  const soon = missing.length
    ? `<p class="soon">${esc(fill(ui.comingSoon, { stores: missing.join(` ${ui.and} `) }))}</p>`
    : '';
  return badges.length ? `<div class="stores">${badges.join('')}</div>${soon}` : soon;
}

function art(game, { eager = false } = {}) {
  const loading = eager ? 'eager' : 'lazy';
  if (game.art.phones) {
    const [left, center, right] = game.art.phones;
    const phone = (shot, position) => {
      return `<figure class="device phone-${position}"><img src="${esc(shot.image)}" width="600" height="1304" alt="${esc(shot.alt)}" loading="${loading}" decoding="async"></figure>`;
    };
    return `<div class="phones">${phone(left, 'left')}${phone(right, 'right')}${phone(center, 'center')}</div>`;
  }
  return `<img class="art-image" src="${esc(game.art.image)}" width="${game.art.width}" height="${game.art.height}" alt="${esc(game.art.alt)}" loading="${loading}" decoding="async">`;
}

function appIcon(game, size, className = 'app-icon') {
  return `<img class="${className}" src="${esc(game.icon)}" width="${size}" height="${size}" alt="">`;
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

function gameCard({ studio, game, ui }) {
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
    ${storeButtons({ studio, game, ui, campaign: 'home' })}
    <a class="more" href="/${game.slug}/">Discover ${esc(game.name)} ${ARROW}</a>
  </div>
  <a class="game-card-art" href="/${game.slug}/" tabindex="-1" aria-hidden="true">${art(game)}</a>
</article>`;
}

export function homePage({ studio, games, mosaic, locale }) {
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
    <p class="eyebrow">Independent game studio</p>
    <h1>Small, <span class="stitched">calm</span><br>puzzle games.</h1>
    <p class="lead">${esc(studio.intro)}</p>
    <div class="hero-games">
        ${chips}
    </div>
  </div>
  <div class="hero-art" aria-hidden="true">${mosaic}</div>
</section>

<section class="games wrap" id="games" aria-labelledby="games-title">
  <div class="section-head">
    <h2 id="games-title">Our games</h2>
  </div>
  ${games
    .map((game) => {
      return gameCard({ studio, game, ui: locale.ui });
    })
    .join('\n  ')}
</section>

<section class="block wrap" aria-labelledby="principles-title">
  <div class="section-head">
    <h2 id="principles-title">How we make them</h2>
  </div>
  <div class="principles-grid">
      ${principles}
  </div>
</section>

<section class="contact wrap" id="contact" aria-labelledby="contact-title">
  <h2 id="contact-title">Say hello</h2>
  <p class="lead">Questions, ideas, a bug — or just a kind word. Write to the game you play, we read every message.</p>
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
    path: '/',
    image: '/assets/og.jpg',
    body,
    bodyAttrs: 'class="studio"',
    head: `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n`,
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
  return {
    ...game,
    genre: text.genre ?? game.genre,
    tagline: text.tagline ?? game.tagline,
    summary: text.summary ?? game.summary,
    platforms: text.platforms ?? game.platforms,
    keywords: text.keywords ?? game.keywords,
    art: game.art.phones ? { ...game.art, phones: withAlts(game.art.phones, text.art?.alts) } : game.art,
    rules: { ...game.rules, ...text.rules },
    screenshots: withAlts(game.screenshots, text.screenshots),
    features: text.features ?? game.features,
    faq: text.faq ?? game.faq,
  };
}

// URL of the game page in a language: English at the game's root, the rest
// in a folder named by the language code
export function gamePath(game, locale) {
  return locale.code === 'en' ? `/${game.slug}/` : `/${game.slug}/${locale.code}/`;
}

export function gamePage({ studio, games, game: source, locale, locales }) {
  const game = localizeGame(source, locale);
  const { ui } = locale;
  const path = gamePath(game, locale);
  const alternates = locales.map((other) => {
    return {
      code: other.code,
      hreflang: other.hreflang,
      ogLocale: other.ogLocale,
      name: other.name,
      path: gamePath(game, other),
    };
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
        return `<figure class="device shot"><img src="${esc(shot.image)}" width="600" height="1304" alt="${esc(shot.alt)}" loading="lazy" decoding="async"></figure>`;
      })
      .join('\n    ')}
  </div>
</section>`
    : '';
  const supportLinks = [
    game.support.url && `<li><a href="${esc(game.support.url)}">${esc(ui.supportPage)} ${ARROW}</a></li>`,
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
        return `<a ${themeAttrs(other, 'mini-card')} href="/${other.slug}/">${appIcon(other, 72)}<span><strong>${esc(other.name)}</strong><span>${esc(other.tagline)}</span></span>${ARROW}</a>`;
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
    <p class="platforms">${esc(fill(ui.freeOn, { platforms: game.platforms }))}</p>
  </div>
  <div class="game-hero-art">${art(game, { eager: true })}</div>
</section>

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
      <p>${esc(ui.supportText)}${game.support.note && locale.code === 'en' ? ` ${esc(game.support.note)}` : ''}</p>
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
    alternates: alternates.length > 1 ? alternates : [],
    keywords: game.keywords ?? [],
    languages:
      alternates.length > 1
        ? {
            current: alternates.find((alt) => {
              return alt.code === locale.code;
            }),
            list: alternates,
          }
        : null,
  });
}

// --------------------------------------------- document and service pages ---

export function docPage({ studio, games, game, page, content, locale }) {
  const body = `<article class="doc">
<p class="crumbs"><a href="/">${esc(studio.name)}</a> · <a href="/${game.slug}/">${esc(game.name)}</a></p>
${content}
</article>`;
  return layout({
    studio,
    games,
    locale,
    title: `${game.name} — ${page.title}`,
    description: `${page.title} of ${game.name} by ${studio.name}.`,
    path: `/${game.slug}/${page.path}`,
    image: `/${game.slug}/images/og.jpg`,
    body,
    bodyAttrs: themeAttrs(game, 'doc-page'),
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

// Language versions of a game page are listed with their alternates, the same
// set as the hreflang links in the pages: search engines pair them by either
export function sitemap({ studio, games, localesOf }) {
  const entries = [{ path: '/', alternates: [] }];
  for (const game of games) {
    const locales = localesOf(game);
    const alternates =
      locales.length > 1
        ? locales.map((locale) => {
            return { hreflang: locale.hreflang, path: gamePath(game, locale) };
          })
        : [];
    for (const locale of locales) {
      entries.push({ path: gamePath(game, locale), alternates });
    }
    for (const page of game.pages) {
      entries.push({ path: `/${game.slug}/${page.path}`, alternates: [] });
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
