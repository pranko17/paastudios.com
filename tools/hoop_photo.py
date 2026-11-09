#!/usr/bin/env python3
"""The home page card of Stitch Tales: finished hoops from the game itself.

    python3 tools/hoop_photo.py <collection.png>

<collection.png> is the game's collection screen on a 13" iPad in English
(Rectangels: marketing/nonogram/raw/screenshots/ipad/en/06-collection.png),
six finished hoops 882 px across. Three of them are cut out round with a
transparent background and laid like the three phones of Pixtangle's card:
Cat by the window in front, Stained-glass birds peeking from behind at the
top right and the Solar system at the bottom left (across, not as two ears); the needle with the garnet thread of the drawn hoop
(tools/art.py, hoop()) lies at the same place as there. Headless Chrome
composes them, as in tools/og.py, with the front hoop's shadow on the ones
behind it; the page adds the shadow of the whole picture.

Writes stitch-tales/images/hoop-photo.webp (1040 px wide, shown at up to
520 px) and hoop-photo-520.webp, both with alpha.
"""
import os
import subprocess
import sys
import tempfile

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = os.environ.get('CHROME', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
GARNET = '#B3263A'
# Hoops on the collection screen: center and radius of the outer rim
SOURCES = {
    'cat-window': (643, 713, 441),
    'stained-glass-birds': (1558, 713, 441),
    'solar-system': (643, 1689, 441),
}
# The picture in the coordinates of the drawn hoop (600 x 620), back to front:
# scene, center, radius of the rim, turn in degrees
LAYOUT = (
    ('stained-glass-birds', (474, 150), 120, 10),
    ('solar-system', (112, 478), 104, -8),
    ('cat-window', (300, 330), 245, 0),
)
WIDTH, HEIGHT = 600, 620
SCALE = 2
WIDTHS = (1040, 520)
SUPERSAMPLE = 4

NEEDLE = (
    '<path d="M498 540c30 10 60-6 52-34-6-22-40-20-58-4" fill="none" stroke="#7E1726" stroke-width="5" '
    'stroke-linecap="round" stroke-opacity="0.35"/>'
    f'<path d="M498 540c30 10 60-6 52-34-6-22-40-20-58-4" fill="none" stroke="{GARNET}" stroke-width="3.4" '
    'stroke-linecap="round"/>'
    '<g transform="rotate(-38 520 560)"><rect x="450" y="555" width="140" height="9" rx="4.5" fill="#B9B4AA"/>'
    '<rect x="450" y="555" width="140" height="4" rx="2" fill="#E9E6DF"/>'
    '<path d="M590 555l22 4.5-22 4.5Z" fill="#B9B4AA"/>'
    '<rect x="458" y="557.5" width="16" height="4" rx="2" fill="#5F5444"/></g>'
)


def cut_hoop(image, cx, cy, radius):
    """One hoop of the screen, round, with a transparent background."""
    size = radius * 2
    hoop = image.crop((cx - radius, cy - radius, cx + radius, cy + radius)).convert('RGBA')
    mask = Image.new('L', (size * SUPERSAMPLE, size * SUPERSAMPLE), 0)
    # A pixel inside the rim: the linen of the screen must not ring it
    inset = SUPERSAMPLE
    ImageDraw.Draw(mask).ellipse((inset, inset, size * SUPERSAMPLE - inset, size * SUPERSAMPLE - inset), fill=255)
    hoop.putalpha(mask.resize((size, size), Image.LANCZOS))
    return hoop


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    screen = Image.open(sys.argv[1]).convert('RGB')
    width, height = WIDTH * SCALE, HEIGHT * SCALE
    with tempfile.TemporaryDirectory() as folder:
        layers = []
        for scene, (x, y), radius, turn in LAYOUT:
            cut_hoop(screen, *SOURCES[scene]).save(os.path.join(folder, f'{scene}.png'))
            size = radius * 2 * SCALE
            left, top = (x - radius) * SCALE, (y - radius) * SCALE
            # Every hoop casts a soft shadow on the ones behind it
            layers.append(
                f'<img src="{scene}.png" style="left:{left}px;top:{top}px;width:{size}px;height:{size}px;'
                f'transform:rotate({turn}deg);filter:drop-shadow(0 {10 * SCALE}px {12 * SCALE}px rgba(42,35,28,.28))">'
            )
        page = os.path.join(folder, 'card.html')
        with open(page, 'w') as file:
            file.write(
                '<!doctype html><html><head><style>html,body{margin:0;background:transparent}'
                'img,svg{position:absolute}</style></head><body>'
                + ''.join(layers)
                + f'<svg style="left:0;top:0" width="{width}" height="{height}" viewBox="0 0 {WIDTH} {HEIGHT}">'
                f'{NEEDLE}</svg></body></html>'
            )
        shot = os.path.join(folder, 'card.png')
        subprocess.run(
            [CHROME, '--headless', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
             '--default-background-color=00000000', f'--window-size={width},{height}',
             f'--screenshot={shot}', f'file://{page}'],
            check=True,
            capture_output=True,
        )
        card = Image.open(shot).convert('RGBA')

    out = os.path.join(ROOT, 'stitch-tales', 'images')
    for index, target in enumerate(WIDTHS):
        image = card.resize((target, round(card.height * target / card.width)), Image.LANCZOS)
        name = 'hoop-photo.webp' if index == 0 else f'hoop-photo-{target}.webp'
        image.save(os.path.join(out, name), 'WEBP', quality=80, method=6)
        print(f'stitch-tales/images/{name}  {os.path.getsize(os.path.join(out, name)) // 1024} KB')


if __name__ == '__main__':
    main()
