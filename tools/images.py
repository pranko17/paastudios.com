#!/usr/bin/env python3
"""Prepare a game's images for the site: icon and screenshots in WebP.

    python3 tools/images.py <slug> --icon icon-1024.png --screens 01.png 02.png ...
    python3 tools/images.py <slug> --banner header.png
    python3 tools/images.py <slug>      # only the smaller copies, from the files there

--island draws the camera cutout on the screenshots: the simulator leaves it in
some frames and not in others, and side by side they look like different phones.

Writes <slug>/images/icon.webp (256 px, shown at up to 112 px) and
<slug>/images/screen-<n>.webp (600 px wide, shown at up to 230 px), numbered in
the order given, and next to each smaller copies — icon-128.webp and
screen-<n>-240/-360/-480.webp — so every screen density gets a file near the
size it shows (srcset in src/templates.mjs, IMAGE_WIDTHS). Copies of new
screenshots are made from the source, not from the 600 px file: a second lossy
pass would add its own artifacts. --banner writes <slug>/images/banner.webp
(2240 px wide, shown across the content column) and its copies
banner-720.webp and banner-1280.webp.

--quality and --soften are for screenshots of fine texture (the threads of
Stitch Tales): such a frame barely compresses, and a slight blur before a
lower quality takes a third off without a difference at the size it is shown.

Needs Pillow with WebP support.
"""
import argparse
import glob
import os
import re

from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICON_SIZE = 256
SCREEN_WIDTH = 600
# Widths of the smaller copies, as in IMAGE_WIDTHS of src/templates.mjs
ICON_SMALL = 128
SCREEN_SMALL = (240, 360, 480)
BANNER_WIDTH = 2240
BANNER_SMALL = (720, 1280)
# The cutout as measured on a 1320 x 2868 frame of the 6.9" iPhone
ISLAND_BOX = (518 / 1320, 42 / 1320, 802 / 1320, 152 / 1320)


def save_webp(image, path, quality):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    image.save(path, 'WEBP', quality=quality, method=6)
    print(f'{os.path.relpath(path, ROOT)}  {os.path.getsize(path) // 1024} KB')


def resized(image, width, soften=0):
    height = round(image.height * width / image.width)
    small = image.resize((width, height), Image.LANCZOS)
    return small.filter(ImageFilter.GaussianBlur(soften)) if soften else small


def save_small(path, width, quality):
    image = Image.open(path).convert('RGB')
    base, ext = os.path.splitext(path)
    save_webp(resized(image, width), f'{base}-{width}{ext}', quality)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('slug')
    parser.add_argument('--icon')
    parser.add_argument('--screens', nargs='*', default=[])
    parser.add_argument('--island', action='store_true')
    parser.add_argument('--banner')
    parser.add_argument('--quality', type=int, default=82, help='WebP quality of the screenshots')
    parser.add_argument('--soften', type=float, default=0, help='blur radius before encoding')
    args = parser.parse_args()
    folder = os.path.join(ROOT, args.slug, 'images')

    if args.icon:
        icon = Image.open(args.icon).convert('RGB').resize((ICON_SIZE, ICON_SIZE), Image.LANCZOS)
        save_webp(icon, os.path.join(folder, 'icon.webp'), 90)

    for index, path in enumerate(args.screens, start=1):
        screen = Image.open(path).convert('RGB')
        if args.island:
            box = [round(side * screen.width) for side in ISLAND_BOX]
            ImageDraw.Draw(screen).rounded_rectangle(box, (box[3] - box[1]) // 2, fill=(0, 0, 0))
        save_webp(
            resized(screen, SCREEN_WIDTH, args.soften),
            os.path.join(folder, f'screen-{index}.webp'),
            args.quality,
        )
        for width in SCREEN_SMALL:
            save_webp(
                resized(screen, width, args.soften),
                os.path.join(folder, f'screen-{index}-{width}.webp'),
                args.quality,
            )

    # The banner is a wide picture of fine thread texture: a notch below the
    # quality of the screenshots keeps its full size near 600 KB, and the
    # difference does not show in the threads
    if args.banner:
        banner = Image.open(args.banner).convert('RGB')
        height = round(banner.height * BANNER_WIDTH / banner.width)
        banner = banner.resize((BANNER_WIDTH, height), Image.LANCZOS)
        save_webp(banner, os.path.join(folder, 'banner.webp'), 75)

    icon_path = os.path.join(folder, 'icon.webp')
    if os.path.exists(icon_path):
        save_small(icon_path, ICON_SMALL, 90)
    # Copies of screenshots that came without a source this run, from their
    # 600 px file
    if not args.screens:
        for path in sorted(glob.glob(os.path.join(folder, 'screen-*.webp'))):
            if re.search(r'screen-\d+\.webp$', path):
                for width in SCREEN_SMALL:
                    save_small(path, width, args.quality)
    banner_path = os.path.join(folder, 'banner.webp')
    if os.path.exists(banner_path):
        for width in BANNER_SMALL:
            save_small(banner_path, width, 75)


if __name__ == '__main__':
    main()
