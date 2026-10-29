#!/usr/bin/env python3
"""Prepare a game's images for the site: icon and screenshots in WebP.

    python3 tools/images.py <slug> --icon icon-1024.png --screens 01.png 02.png ...

Writes <slug>/images/icon.webp (256 px, shown at up to 120 px) and
<slug>/images/screen-<n>.webp (600 px wide, shown at up to 280 px), numbered in
the order given. Needs Pillow with WebP support.
"""
import argparse
import os

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICON_SIZE = 256
SCREEN_WIDTH = 600


def save_webp(image, path, quality):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    image.save(path, 'WEBP', quality=quality, method=6)
    print(f'{os.path.relpath(path, ROOT)}  {os.path.getsize(path) // 1024} KB')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('slug')
    parser.add_argument('--icon')
    parser.add_argument('--screens', nargs='*', default=[])
    args = parser.parse_args()
    folder = os.path.join(ROOT, args.slug, 'images')

    if args.icon:
        icon = Image.open(args.icon).convert('RGB').resize((ICON_SIZE, ICON_SIZE), Image.LANCZOS)
        save_webp(icon, os.path.join(folder, 'icon.webp'), 90)

    for index, path in enumerate(args.screens, start=1):
        screen = Image.open(path).convert('RGB')
        height = round(screen.height * SCREEN_WIDTH / screen.width)
        screen = screen.resize((SCREEN_WIDTH, height), Image.LANCZOS)
        save_webp(screen, os.path.join(folder, f'screen-{index}.webp'), 82)


if __name__ == '__main__':
    main()
