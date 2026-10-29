#!/usr/bin/env python3
"""Render the link previews (Open Graph images, 1200 × 630) with headless Chrome.

    python3 tools/og.py

Writes assets/og.jpg for the studio and <slug>/images/og.jpg for every game
from src/games.mjs, drawn with the site's own stylesheet. Rerun after
changing a game's name, tagline, colors or art. Needs Google Chrome (path in
CHROME to override) and Pillow.
"""
import html
import json
import os
import subprocess
import tempfile

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = os.environ.get('CHROME', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
WIDTH, HEIGHT = 1200, 630

PAGE = """<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="file://{root}/assets/site.css">
<style>
html, body {{ width: {width}px; height: {height}px; margin: 0; overflow: hidden; background: none; }}
*, *::before, *::after {{ animation: none !important; transition: none !important; }}
.og {{ width: {width}px; height: {height}px; margin: 0; padding: 0 0 0 80px; border: 0; border-radius: 0;
  box-shadow: none; display: grid; grid-template-columns: 560px 1fr; gap: 0; align-items: center; }}
.og h1 {{ margin-top: 30px; font-size: 92px; letter-spacing: -0.04em; }}
.og .tagline {{ max-width: 12em; margin-top: 18px; font-size: 38px; }}
.og .by {{ display: flex; align-items: center; gap: 12px; margin-top: 30px; color: var(--muted);
  font-size: 22px; font-weight: 650; }}
.og .by img {{ width: 34px; height: 34px; border-radius: 9px; }}
.og .app-icon {{ width: 136px; height: 136px; }}
.og-art {{ display: flex; align-items: center; justify-content: center; height: {height}px; }}
.og-art .phones {{ width: 500px; }}
.og-art .art-image {{ width: 540px; }}
.og-art svg {{ width: 500px; height: auto; }}
.og .icons img {{ width: 64px; height: 64px; border-radius: 15px; }}
.og .logo {{ width: 120px; height: 120px; border-radius: 30px; }}
</style></head><body>{body}</body></html>"""


def file_url(path):
    return f'file://{ROOT}{path}'


def theme_style(theme):
    names = {'bg': '--bg', 'surface': '--surface', 'surface2': '--surface2', 'line': '--line',
             'text': '--text', 'muted': '--muted', 'accent': '--accent', 'accentText': '--accent-text',
             'glow': '--glow', 'glow2': '--glow2'}
    return ';'.join(f'{names[key]}:{value}' for key, value in theme.items() if key in names)


def game_body(game, studio):
    art = game['art']
    if 'phones' in art:
        left, center, right = art['phones']
        phones = ''.join(
            f'<figure class="device phone-{position}"><img src="{file_url(shot["image"])}" alt=""></figure>'
            for shot, position in ((left, 'left'), (right, 'right'), (center, 'center')))
        picture = f'<div class="phones">{phones}</div>'
    else:
        picture = f'<img class="art-image" src="{file_url(art["image"])}" alt="">'
    frame = f' frame-{game["theme"]["frame"]}' if game['theme'].get('frame') else ''
    return (
        f'<div class="game-card og{frame}" data-scheme="{game["theme"]["scheme"]}" '
        f'style="{html.escape(theme_style(game["theme"]))}">'
        f'<div><img class="app-icon" src="{file_url(game["icon"])}" alt="">'
        f'<h1>{html.escape(game["name"])}</h1><p class="tagline">{html.escape(game["tagline"])}</p>'
        f'<p class="by"><img src="{file_url("/assets/logo.svg")}" alt="">by {html.escape(studio["name"])}</p></div>'
        f'<div class="og-art">{picture}</div></div>'
    )


# The studio card in the dark palette of assets/site.css, whatever the
# appearance of the machine that renders it
STUDIO_DARK = ('--bg:#12111b;--surface:#1b1a26;--line:#2e2c3c;--text:#f4f2f8;--muted:#aca6bb;'
               '--accent:#f4f2f8;--glow:rgba(61,139,255,.2);--glow2:rgba(179,38,58,.18)')


def studio_body(studio, games):
    with open(os.path.join(ROOT, 'assets', 'mosaic.svg')) as file:
        mosaic = file.read()
    icons = ''.join(f'<img src="{file_url(game["icon"])}" alt="">' for game in games)
    return (
        f'<div class="studio game-card og" data-scheme="dark" style="{STUDIO_DARK};background: radial-gradient(900px 600px at 90% 0%, var(--glow), '
        f'transparent 62%), radial-gradient(700px 500px at 0% 100%, var(--glow2), transparent 60%), var(--bg)">'
        f'<div><img class="logo" src="{file_url("/assets/logo.svg")}" alt="">'
        f'<h1>{html.escape(studio["name"])}</h1><p class="tagline">{html.escape(studio["headline"])}</p>'
        f'<p class="by icons">{icons}</p></div>'
        f'<div class="og-art">{mosaic}</div></div>'
    )


def render(body, out):
    with tempfile.TemporaryDirectory() as folder:
        page = os.path.join(folder, 'og.html')
        shot = os.path.join(folder, 'og.png')
        with open(page, 'w') as file:
            file.write(PAGE.format(root=ROOT, width=WIDTH, height=HEIGHT, body=body))
        subprocess.run([CHROME, '--headless', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
                        '--force-device-scale-factor=1', f'--window-size={WIDTH},{HEIGHT}', '--virtual-time-budget=2000',
                        f'--screenshot={shot}', f'file://{page}'], check=True, capture_output=True)
        image = Image.open(shot).convert('RGB').crop((0, 0, WIDTH, HEIGHT))
    path = os.path.join(ROOT, out)
    image.save(path, 'JPEG', quality=88, optimize=True, progressive=True)
    print(f'{out}  {os.path.getsize(path) // 1024} KB')


def main():
    script = ("import { games } from './src/games.mjs'; import { studio } from './src/studio.mjs';"
              'console.log(JSON.stringify({ games, studio }));')
    data = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', script], cwd=ROOT))
    render(studio_body(data['studio'], data['games']), 'assets/og.jpg')
    for game in data['games']:
        render(game_body(game, data['studio']), f'{game["slug"]}/images/og.jpg')


if __name__ == '__main__':
    main()
