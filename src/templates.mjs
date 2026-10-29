// Page templates: plain functions from data to HTML strings.

const YEAR = new Date().getFullYear();

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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

const ARROW =
  '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const STORE_NAMES = { appStore: 'the App Store', googlePlay: 'Google Play' };

// ------------------------------------------------------------------ layout ---

function layout({ studio, games, title, description, path, image, body, bodyAttrs, head = '' }) {
  const url = `${studio.url}${path}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(studio.name)}">
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
<a class="skip" href="#main">Skip to content</a>
${header(studio)}
<main id="main">
${body}
</main>
${footer(studio, games)}
</body>
</html>
`;
}

function header(studio) {
  return `<header class="site-header wrap">
  <a class="brand" href="/"><img src="/assets/logo.svg" width="34" height="34" alt=""><span>${esc(studio.name)}</span></a>
  <nav class="site-nav" aria-label="Main">
    <a href="/#games">Games</a>
    <a href="/#contact">Contact</a>
  </nav>
</header>`;
}

function footer(studio, games) {
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
    <p class="fine">© ${YEAR} ${esc(studio.name)}. This site sets no cookies and uses no trackers.</p>
    <p class="fine">App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.</p>
  </div>
</footer>`;
}

// ------------------------------------------------------------ game pieces ---

function storeButtons(game) {
  const badges = [];
  const missing = [];
  if (game.stores.appStore) {
    badges.push(
      `<a class="store" href="${esc(game.stores.appStore.url)}"><img src="/assets/badges/app-store.svg" width="144" height="48" alt="Download ${esc(game.name)} on the App Store"></a>`
    );
  } else {
    missing.push(STORE_NAMES.appStore);
  }
  if (game.stores.googlePlay) {
    badges.push(
      `<a class="store" href="${esc(game.stores.googlePlay.url)}"><img src="/assets/badges/google-play.png" width="161" height="48" alt="Get ${esc(game.name)} on Google Play"></a>`
    );
  } else {
    missing.push(STORE_NAMES.googlePlay);
  }
  const soon = missing.length ? `<p class="soon">Coming soon to ${missing.join(' and ')}</p>` : '';
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

function gameCard(game) {
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
    ${storeButtons(game)}
    <a class="more" href="/${game.slug}/">Discover ${esc(game.name)} ${ARROW}</a>
  </div>
  <a class="game-card-art" href="/${game.slug}/" tabindex="-1" aria-hidden="true">${art(game)}</a>
</article>`;
}

export function homePage({ studio, games, mosaic }) {
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
  ${games.map(gameCard).join('\n  ')}
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

export function gamePage({ studio, games, game }) {
  const steps = game.rules.steps
    .map((step) => {
      return `<li>${esc(step)}</li>`;
    })
    .join('\n      ');
  const features = game.features
    .map((feature) => {
      return `<div class="feature"><h3>${esc(feature.title)}</h3><p>${esc(feature.text)}</p></div>`;
    })
    .join('\n    ');
  const gallery = game.screenshots.length
    ? `<section class="block gallery" aria-labelledby="gallery-title">
  <div class="wrap section-head"><h2 id="gallery-title">A closer look</h2></div>
  <div class="shots" tabindex="0" aria-label="Screenshots">
    ${game.screenshots
      .map((shot) => {
        return `<figure class="device shot"><img src="${esc(shot.image)}" width="600" height="1304" alt="${esc(shot.alt)}" loading="lazy" decoding="async"></figure>`;
      })
      .join('\n    ')}
  </div>
</section>`
    : '';
  const supportLinks = [
    game.support.url && `<li><a href="${esc(game.support.url)}">Support page ${ARROW}</a></li>`,
    `<li><a href="${esc(game.privacyPolicy)}">Privacy Policy ${ARROW}</a></li>`,
  ]
    .filter(Boolean)
    .join('\n        ');
  const others = games.filter((other) => {
    return other !== game;
  });
  const moreGames = others.length
    ? `<section class="block wrap" aria-labelledby="more-title">
  <div class="section-head"><h2 id="more-title">More from ${esc(studio.name)}</h2></div>
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
    url: `${studio.url}/${game.slug}/`,
    image: `${studio.url}${game.icon}`,
    applicationCategory: 'GameApplication',
    operatingSystem: 'iOS, Android',
    author: { '@type': 'Organization', name: studio.name, url: studio.url },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
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
    ${storeButtons(game)}
    <p class="platforms">Free on ${esc(game.platforms)}</p>
  </div>
  <div class="game-hero-art">${art(game, { eager: true })}</div>
</section>

<section class="block wrap rules" aria-labelledby="rules-title">
  <div>
    <h2 id="rules-title">How to play</h2>
    <ol class="steps">
      ${steps}
    </ol>
  </div>
  <figure class="rules-art"><img src="${esc(game.rules.image)}" width="${game.rules.width}" height="${game.rules.height}" alt="${esc(game.rules.alt)}" loading="lazy" decoding="async"></figure>
</section>

${gallery}

<section class="block wrap" aria-labelledby="features-title">
  <div class="section-head"><h2 id="features-title">What’s inside</h2></div>
  <div class="feature-grid">
    ${features}
  </div>
</section>

<section class="block wrap" id="support" aria-labelledby="support-title">
  <div class="support-card">
    <div>
      <h2 id="support-title">Support</h2>
      <p>Questions, ideas, or something not working? Write to us — we read every message${game.support.note ? `. ${esc(game.support.note)}` : '.'}</p>
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
    title: `${game.name} — ${game.genre} | ${studio.name}`,
    description: `${game.tagline} ${game.summary}`,
    path: `/${game.slug}/`,
    image: `/${game.slug}/images/og.jpg`,
    body,
    bodyAttrs: themeAttrs(game, 'game-page'),
    head: `${smartBanner}<meta name="theme-color" content="${esc(game.theme.bg)}">\n<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n`,
  });
}

// --------------------------------------------- document and service pages ---

export function docPage({ studio, games, game, page, content }) {
  const body = `<article class="doc">
<p class="crumbs"><a href="/">${esc(studio.name)}</a> · <a href="/${game.slug}/">${esc(game.name)}</a></p>
${content}
</article>`;
  return layout({
    studio,
    games,
    title: `${game.name} — ${page.title}`,
    description: `${page.title} of ${game.name} by ${studio.name}.`,
    path: `/${game.slug}/${page.path}`,
    image: `/${game.slug}/images/og.jpg`,
    body,
    bodyAttrs: themeAttrs(game, 'doc-page'),
  });
}

export function notFoundPage({ studio, games }) {
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
    title: `Page not found | ${studio.name}`,
    description: studio.description,
    path: '/404.html',
    image: '/assets/og.jpg',
    body,
    bodyAttrs: 'class="studio"',
    head: '<meta name="robots" content="noindex">\n',
  });
}

export function sitemap({ studio, games }) {
  const paths = ['/'];
  for (const game of games) {
    paths.push(`/${game.slug}/`);
    for (const page of game.pages) {
      paths.push(`/${game.slug}/${page.path}`);
    }
  }
  const urls = paths
    .map((path) => {
      return `  <url><loc>${studio.url}${path}</loc></url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
