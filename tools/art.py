#!/usr/bin/env python3
"""Draw the site's illustrations as SVG files.

    python3 tools/art.py

Writes the studio logo and hero mosaic (assets/), the Pixtangle board
(pixtangle/images/board.svg) and the Stitch Tales nonogram and hoop
(stitch-tales/images/). Colors are the games' own palettes, so the pictures
look like the games. The files are committed: rerun this only to redraw them.
"""
import math
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT = "ui-rounded, 'SF Pro Rounded', 'Nunito', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"

# Pixtangle, dark theme
PX_BOARD = '#1A1C2E'
PX_CELL = '#232640'
PX_CLUE_ON_RECT = '#1A1C2E'
PX_CLUE = '#D1D4E5'
PX_ACCENT = '#3D8BFF'
PX_RECTS = ['#EEA5A5', '#A5D3EE', '#EEDCA5', '#C9A5EE', '#A5EEB7', '#F0B2D5', '#B2E5F0', '#F0D5B2']

# Stitch Tales, linen and floss
LINEN = '#F2ECE0'
IVORY = '#FBF8F2'
CLUE_STRIP = '#E7DFCF'
THREAD = '#2A231C'
THREAD_MAJOR = '#1A1511'
CLUE_DONE = '#A2957C'
GARNET = '#B3263A'
GARNET_EDGE = '#7E1726'
GARNET_STITCH = '#F3C4C8'
PINE = '#2E7A52'
HOOP = '#C9A06A'
HOOP_EDGE = '#8F6A3E'


def write(path, svg):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w') as file:
        file.write(svg)
    print(f'{path}  {len(svg) // 1024} KB')


def fmt(value):
    return f'{value:.2f}'.rstrip('0').rstrip('.')


# ---------------------------------------------------------------- patches ---


def trace_loops(cells):
    """Outline of a set of grid cells: loops of corner points, the cells on the
    right of travel (clockwise on screen), collinear points removed."""
    edges = {}
    for x, y in cells:
        sides = [
            ((x, y - 1), (x, y), (x + 1, y)),
            ((x + 1, y), (x + 1, y), (x + 1, y + 1)),
            ((x, y + 1), (x + 1, y + 1), (x, y + 1)),
            ((x - 1, y), (x, y + 1), (x, y)),
        ]
        for neighbour, start, end in sides:
            if neighbour not in cells:
                edges.setdefault(start, []).append(end)

    loops = []
    while edges:
        start = next(iter(edges))
        loop = [start]
        point = start
        previous = None
        while True:
            ends = edges[point]
            if len(ends) > 1 and previous is not None:
                # Two loops touch at a corner: keep turning right
                direction = (point[0] - previous[0], point[1] - previous[1])
                right = (-direction[1], direction[0])
                end = next((e for e in ends if (e[0] - point[0], e[1] - point[1]) == right), ends[0])
            else:
                end = ends[0]
            ends.remove(end)
            if not ends:
                del edges[point]
            previous, point = point, end
            if point == start:
                break
            loop.append(point)
        loops.append(simplify(loop))
    return loops


def simplify(loop):
    result = []
    count = len(loop)
    for index in range(count):
        a, b, c = loop[index - 1], loop[index], loop[(index + 1) % count]
        if (b[0] - a[0]) * (c[1] - b[1]) != (b[1] - a[1]) * (c[0] - b[0]):
            result.append(b)
    return result


def inset(loop, distance):
    """Moves every corner of a clockwise rectilinear loop into the cells."""
    result = []
    count = len(loop)
    for index in range(count):
        a, b, c = loop[index - 1], loop[index], loop[(index + 1) % count]
        normals = []
        for p, q in ((a, b), (b, c)):
            dx, dy = q[0] - p[0], q[1] - p[1]
            length = math.hypot(dx, dy)
            normals.append((-dy / length, dx / length))
        result.append((b[0] + distance * (normals[0][0] + normals[1][0]),
                       b[1] + distance * (normals[0][1] + normals[1][1])))
    return result


def rounded_path(loop, radius):
    parts = []
    count = len(loop)
    for index in range(count):
        a, b, c = loop[index - 1], loop[index], loop[(index + 1) % count]

        def toward(p, q):
            dx, dy = q[0] - p[0], q[1] - p[1]
            length = math.hypot(dx, dy)
            r = min(radius, length / 2)
            return p[0] + dx / length * r, p[1] + dy / length * r

        before, after = toward(b, a), toward(b, c)
        parts.append(f"{'M' if index == 0 else 'L'}{fmt(before[0])} {fmt(before[1])}"
                     f"Q{fmt(b[0])} {fmt(b[1])} {fmt(after[0])} {fmt(after[1])}")
    return ''.join(parts) + 'Z'


def patch(cells, cell, origin, fill, edge, stitch, texture, radius=None):
    """Cells merged into one soft patch: rounded corners, dark edge, texture
    and a dashed running stitch just inside the edge."""
    ox, oy = origin
    radius = cell / 3 if radius is None else radius
    loops = [[(ox + x * cell, oy + y * cell) for x, y in loop] for loop in trace_loops(set(cells))]
    outline = ''.join(rounded_path(loop, radius) for loop in loops)
    stitch_line = ''.join(rounded_path(inset(loop, cell * 0.2), radius * 0.6) for loop in loops)
    dash = f'{fmt(cell * 0.2)} {fmt(cell * 0.14)}'
    return (
        f'<g filter="url(#shadow)">'
        f'<path d="{outline}" fill="{fill}" fill-rule="evenodd"/>'
        f'<path d="{outline}" fill="url(#{texture})" fill-rule="evenodd"/>'
        f'<path d="{outline}" fill="none" stroke="{edge}" stroke-width="{fmt(cell * 0.05)}" stroke-linejoin="round"/>'
        f'</g>'
        f'<path d="{stitch_line}" fill="none" stroke="{stitch}" stroke-width="{fmt(cell * 0.07)}" '
        f'stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="{dash}"/>'
    )


def cross_mark(cx, cy, size, light=IVORY, dark=THREAD):
    """An empty cell's cross: light thread with a dark edge, second stitch on top."""
    h = size / 2
    parts = []
    for x1, y1, x2, y2 in ((cx - h, cy - h, cx + h, cy + h), (cx + h, cy - h, cx - h, cy + h)):
        line = f'x1="{fmt(x1)}" y1="{fmt(y1)}" x2="{fmt(x2)}" y2="{fmt(y2)}" stroke-linecap="round"'
        parts.append(f'<line {line} stroke="{dark}" stroke-width="{fmt(size * 0.42)}"/>')
        parts.append(f'<line {line} stroke="{light}" stroke-width="{fmt(size * 0.2)}"/>')
    return ''.join(parts)


def hatch(pattern_id, color, opacity, step=6, angle=45, width=1.6):
    return (
        f'<pattern id="{pattern_id}" width="{step}" height="{step}" patternUnits="userSpaceOnUse" '
        f'patternTransform="rotate({angle})">'
        f'<line x1="0" y1="0" x2="0" y2="{step}" stroke="{color}" stroke-opacity="{opacity}" stroke-width="{width}"/>'
        f'</pattern>'
    )


SHADOW = ('<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">'
          '<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2A231C" flood-opacity="0.28"/></filter>')


# ---------------------------------------------------------- Pixtangle board ---

# 6 × 6 board: (x, y, width, height, clue x, clue y)
PX_SOLUTION = [
    (0, 0, 3, 1, 1, 0), (3, 0, 3, 2, 4, 1), (0, 1, 1, 3, 0, 2), (1, 1, 2, 2, 2, 2),
    (3, 2, 1, 4, 3, 4), (4, 2, 2, 2, 5, 3), (1, 3, 2, 1, 1, 3), (0, 4, 3, 2, 1, 5),
    (4, 4, 2, 2, 4, 4),
]
PX_UNPLACED = {5, 7}
PX_DRAWING = 8


def pixtangle_board():
    cell, gap, pad = 56, 6, 14
    step = cell + gap
    size = pad * 2 + 6 * cell + 5 * gap
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}">',
           f'<rect width="{size}" height="{size}" rx="26" fill="{PX_BOARD}"/>']
    for y in range(6):
        for x in range(6):
            out.append(f'<rect x="{pad + x * step}" y="{pad + y * step}" width="{cell}" height="{cell}" rx="9" fill="{PX_CELL}"/>')

    def text(cx, cy, value, color):
        return (f'<text x="{fmt(cx)}" y="{fmt(cy)}" text-anchor="middle" dominant-baseline="central" '
                f'font-family="{FONT}" font-weight="700" font-size="26" fill="{color}">{value}</text>')

    for index, (x, y, w, h, clue_x, clue_y) in enumerate(PX_SOLUTION):
        rx, ry = pad + x * step, pad + y * step
        rw, rh = w * cell + (w - 1) * gap, h * cell + (h - 1) * gap
        center = (pad + clue_x * step + cell / 2, pad + clue_y * step + cell / 2)
        if index in PX_UNPLACED:
            out.append(text(*center, w * h, PX_CLUE))
        elif index == PX_DRAWING:
            out.append(f'<rect x="{rx}" y="{ry}" width="{rw}" height="{rh}" rx="12" fill="{PX_ACCENT}" fill-opacity="0.22" '
                       f'stroke="{PX_ACCENT}" stroke-width="3"/>')
            out.append(text(*center, w * h, '#E2EEFF'))
            hx, hy = rx + rw, ry + rh
            out.append(f'<circle cx="{hx - 4}" cy="{hy - 4}" r="11" fill="#FFFFFF" stroke="{PX_ACCENT}" stroke-width="4"/>')
        else:
            out.append(f'<rect x="{rx}" y="{ry}" width="{rw}" height="{rh}" rx="12" fill="{PX_RECTS[index % len(PX_RECTS)]}"/>')
            out.append(text(*center, w * h, PX_CLUE_ON_RECT))
    out.append('</svg>')
    return ''.join(out)


# ------------------------------------------------------ Stitch Tales puzzle ---

CAT = [
    'X........X',
    'XX......XX',
    'XXXXXXXXXX',
    'XX.XXXX.XX',
    'XXXXXXXXXX',
    'XXXX..XXXX',
    '.XXXXXXXX.',
    '..XXXXXX..',
]
CAT_SOLVED_ROWS = 7


def runs(line):
    result, count = [], 0
    for value in line:
        if value:
            count += 1
        elif count:
            result.append(count)
            count = 0
    if count:
        result.append(count)
    return result or [0]


def nonogram():
    rows = [[c == 'X' for c in row] for row in CAT]
    width, height = len(rows[0]), len(rows)
    columns = [[rows[y][x] for y in range(height)] for x in range(width)]
    row_clues = [runs(row) for row in rows]
    column_clues = [runs(column) for column in columns]

    cell, clue = 40, 22
    left = max(len(c) for c in row_clues) * clue + 16
    top = max(len(c) for c in column_clues) * 24 + 14
    pad = 16
    board_w, board_h = width * cell, height * cell
    view_w, view_h = pad * 2 + left + board_w, pad * 2 + top + board_h
    ox, oy = pad + left, pad + top

    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {view_w} {view_h}" width="{view_w}" height="{view_h}">',
           '<defs>', SHADOW, hatch('satin', '#000000', 0.16, step=5, angle=-35, width=1.4),
           '</defs>',
           f'<rect width="{view_w}" height="{view_h}" rx="24" fill="{LINEN}"/>']

    # Clue strips, every other section of five a touch darker
    for section in range(0, width, 5):
        shade = 0.05 if (section // 5) % 2 else 0
        out.append(f'<rect x="{ox + section * cell}" y="{pad}" width="{min(5, width - section) * cell}" height="{top - 6}" '
                   f'fill="{CLUE_STRIP}"/>')
        if shade:
            out.append(f'<rect x="{ox + section * cell}" y="{pad}" width="{min(5, width - section) * cell}" height="{top - 6}" '
                       f'fill="{THREAD}" fill-opacity="{shade}"/>')
    for section in range(0, height, 5):
        out.append(f'<rect x="{pad}" y="{oy + section * cell}" width="{left - 6}" height="{min(5, height - section) * cell}" '
                   f'fill="{CLUE_STRIP}"/>')
        if (section // 5) % 2:
            out.append(f'<rect x="{pad}" y="{oy + section * cell}" width="{left - 6}" height="{min(5, height - section) * cell}" '
                       f'fill="{THREAD}" fill-opacity="0.05"/>')

    def number(x, y, value, color):
        return (f'<text x="{fmt(x)}" y="{fmt(y)}" text-anchor="middle" dominant-baseline="central" '
                f'font-family="{FONT}" font-weight="700" font-size="17" fill="{color}">{value}</text>')

    for y, clues in enumerate(row_clues):
        color = CLUE_DONE if y < CAT_SOLVED_ROWS else THREAD
        for index, value in enumerate(reversed(clues)):
            out.append(number(ox - 6 - clue / 2 - 4 - index * clue, oy + y * cell + cell / 2, value, color))
    for x, clues in enumerate(column_clues):
        done = not any(rows[y][x] for y in range(CAT_SOLVED_ROWS, height))
        color = CLUE_DONE if done else THREAD
        for index, value in enumerate(reversed(clues)):
            out.append(number(ox + x * cell + cell / 2, oy - 6 - 12 - 4 - index * 24, value, color))

    # Grid: a double thread, a major line every five cells and around the edge
    for x in range(width + 1):
        major = x % 5 == 0 or x == width
        out.append(f'<line x1="{ox + x * cell + 1}" y1="{oy}" x2="{ox + x * cell + 1}" y2="{oy + board_h}" '
                   f'stroke="{IVORY}" stroke-opacity="{0.85 if major else 0.5}" stroke-width="{2 if major else 1}"/>')
        out.append(f'<line x1="{ox + x * cell}" y1="{oy}" x2="{ox + x * cell}" y2="{oy + board_h}" '
                   f'stroke="{THREAD_MAJOR if major else THREAD}" stroke-opacity="{0.85 if major else 0.4}" '
                   f'stroke-width="{2 if major else 1}"/>')
    for y in range(height + 1):
        major = y % 5 == 0 or y == height
        out.append(f'<line x1="{ox}" y1="{oy + y * cell + 1}" x2="{ox + board_w}" y2="{oy + y * cell + 1}" '
                   f'stroke="{IVORY}" stroke-opacity="{0.85 if major else 0.5}" stroke-width="{2 if major else 1}"/>')
        out.append(f'<line x1="{ox}" y1="{oy + y * cell}" x2="{ox + board_w}" y2="{oy + y * cell}" '
                   f'stroke="{THREAD_MAJOR if major else THREAD}" stroke-opacity="{0.85 if major else 0.4}" '
                   f'stroke-width="{2 if major else 1}"/>')

    # Stitched cells merge into one soft patch over the grid; empty cells of
    # solved rows get a cross
    stitched = [(x, y) for y in range(CAT_SOLVED_ROWS) for x in range(width) if rows[y][x]]
    out.append(patch(stitched, cell, (ox, oy), GARNET, GARNET_EDGE, GARNET_STITCH, 'satin'))
    for y in range(CAT_SOLVED_ROWS):
        for x in range(width):
            if not rows[y][x]:
                out.append(cross_mark(ox + x * cell + cell / 2, oy + y * cell + cell / 2, cell * 0.36))
    out.append('</svg>')
    return ''.join(out)


# ------------------------------------------------------- Stitch Tales hoop ---


def circle_patch(cx, cy, r, fill, texture, stitch, edge=None):
    edge = edge or THREAD
    return (
        f'<g filter="url(#shadow)"><circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}"/>'
        f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="url(#{texture})"/>'
        f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{edge}" stroke-opacity="0.35" stroke-width="1.5"/></g>'
        f'<circle cx="{cx}" cy="{cy}" r="{fmt(r - 7)}" fill="none" stroke="{stitch}" stroke-width="2.4" '
        f'stroke-linecap="round" stroke-dasharray="7 5"/>'
    )


def path_patch(d, inner, fill, texture, stitch, transform=''):
    t = f' transform="{transform}"' if transform else ''
    return (
        f'<g{t}><g filter="url(#shadow)"><path d="{d}" fill="{fill}"/><path d="{d}" fill="url(#{texture})"/>'
        f'<path d="{d}" fill="none" stroke="{THREAD}" stroke-opacity="0.3" stroke-width="1.5"/></g>'
        f'<path d="{inner}" fill="none" stroke="{stitch}" stroke-width="2.4" stroke-linecap="round" '
        f'stroke-dasharray="7 5"/></g>'
    )


def wing(cx, cy, rx, ry, angle, fill, texture, stitch):
    d = (f'M{cx - rx} {cy}a{rx} {ry} 0 1 0 {2 * rx} 0a{rx} {ry} 0 1 0 {-2 * rx} 0Z')
    inner_rx, inner_ry = rx - 6, ry - 6
    inner = (f'M{cx - inner_rx} {cy}a{inner_rx} {inner_ry} 0 1 0 {2 * inner_rx} 0'
             f'a{inner_rx} {inner_ry} 0 1 0 {-2 * inner_rx} 0Z')
    return path_patch(d, inner, fill, texture, stitch, f'rotate({angle} {cx} {cy})')


def knot(cx, cy, r, color):
    """A French knot: a small round bump of thread."""
    return (f'<circle cx="{fmt(cx)}" cy="{fmt(cy + 1)}" r="{fmt(r)}" fill="{THREAD}" fill-opacity="0.25"/>'
            f'<circle cx="{fmt(cx)}" cy="{fmt(cy)}" r="{fmt(r)}" fill="{color}"/>'
            f'<circle cx="{fmt(cx - r * 0.3)}" cy="{fmt(cy - r * 0.35)}" r="{fmt(r * 0.35)}" fill="#FFFFFF" fill-opacity="0.45"/>')


def flower(cx, cy, color, petal=6.5):
    out = [f'<path d="M{cx} {cy + 8}q-4 26 2 52" fill="none" stroke="{PINE}" stroke-width="3" '
           f'stroke-linecap="round" stroke-dasharray="6 4"/>']
    for index in range(6):
        a = index * math.pi / 3
        out.append(knot(cx + math.cos(a) * petal * 1.25, cy + math.sin(a) * petal * 1.25, petal, color))
    out.append(knot(cx, cy, petal * 0.8, '#E9A93B'))
    return ''.join(out)


def hoop():
    w, h = 600, 620
    cx, cy, r = 300, 330, 236
    fabric = r - 14
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">',
           '<defs>', SHADOW,
           '<filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="14"/></filter>',
           hatch('satin', '#000000', 0.14, step=5, angle=-35, width=1.4),
           hatch('satinLight', '#FFFFFF', 0.22, step=5, angle=35, width=1.4),
           hatch('chain', '#000000', 0.1, step=7, angle=80, width=2.6),
           ('<pattern id="weave" width="4" height="4" patternUnits="userSpaceOnUse">'
            f'<path d="M0 .5H4M.5 0V4" stroke="{THREAD}" stroke-opacity="0.07" stroke-width="1"/></pattern>'),
           f'<clipPath id="fabric"><circle cx="{cx}" cy="{cy}" r="{fabric}"/></clipPath>',
           (f'<radialGradient id="light" cx="40%" cy="30%" r="75%"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.16"/>'
            f'<stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>'),
           (f'<linearGradient id="wood" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E0BC86"/>'
            f'<stop offset="0.5" stop-color="{HOOP}"/><stop offset="1" stop-color="#B08350"/></linearGradient>'),
           '</defs>']

    # Soft shadow under the hoop
    out.append(f'<ellipse cx="{cx + 10}" cy="{cy + 24}" rx="{r}" ry="{r - 6}" fill="{THREAD}" fill-opacity="0.22" filter="url(#soft)"/>')

    # Linen in the hoop and the scene stitched on it
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{fabric}" fill="{LINEN}"/>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{fabric}" fill="url(#weave)"/>')
    out.append('<g clip-path="url(#fabric)">')
    # Sun with running-stitch rays
    sun_x, sun_y = 400, 214
    for index in range(10):
        a = index * math.pi / 5 + 0.2
        out.append(f'<line x1="{fmt(sun_x + math.cos(a) * 58)}" y1="{fmt(sun_y + math.sin(a) * 58)}" '
                   f'x2="{fmt(sun_x + math.cos(a) * 78)}" y2="{fmt(sun_y + math.sin(a) * 78)}" stroke="#E9A93B" '
                   f'stroke-width="3" stroke-linecap="round" stroke-dasharray="6 5"/>')
    out.append(circle_patch(sun_x, sun_y, 46, '#EDB04A', 'satinLight', '#FFF3D6', edge=HOOP_EDGE))
    # Cloud
    cloud = ('M150 214c-18 0-28-12-26-26 2-14 16-22 30-18 6-16 22-24 38-20 14 3 24 14 25 27 13-1 25 8 25 20 '
             '0 10-8 17-20 17Z')
    cloud_in = ('M152 205c-12 0-18-7-17-16 1-9 10-14 20-11l6 2 2-6c4-11 15-16 26-14 10 2 17 10 18 20l1 6 7-1c8 0 '
                '16 5 16 12 0 5-4 8-11 8Z')
    out.append(path_patch(cloud, cloud_in, IVORY, 'chain', '#C9BBA0'))
    # Hills
    back_hill = f'M{cx - fabric - 10} 420C150 330 260 340 330 392S470 380 {cx + fabric + 10} 360V{cy + fabric + 10}H{cx - fabric - 10}Z'
    back_in = 'M70 416C150 346 258 356 326 404'
    out.append(path_patch(back_hill, back_in, '#8DB27A', 'satin', '#E3F0D6'))
    front_hill = f'M{cx - fabric - 10} 500C140 452 250 430 340 452S480 470 {cx + fabric + 10} 430V{cy + fabric + 10}H{cx - fabric - 10}Z'
    front_in = 'M96 482C170 452 256 440 338 466S470 480 520 452'
    out.append(path_patch(front_hill, front_in, PINE, 'chain', '#BFE3CC'))
    # Flowers of French knots
    out.append(flower(150, 420, GARNET))
    out.append(flower(205, 446, IVORY))
    out.append(flower(470, 410, '#E9A93B'))
    # The next figure: only its dashed outline, waiting to be stitched
    mushroom = 'M370 430c0-28 22-46 50-46s50 18 50 46Z M404 430h32v34c0 6-6 10-16 10s-16-4-16-10Z'
    out.append(f'<path d="{mushroom}" fill="none" stroke="{THREAD}" stroke-opacity="0.55" stroke-width="2.4" '
               f'stroke-linecap="round" stroke-dasharray="7 6" stroke-linejoin="round"/>')
    # Butterfly and its looping flight in running stitch
    out.append('<path d="M236 290c-40 10-70 40-60 70 8 24 44 22 46 0 2-18-28-24-44-8-14 14-22 34-38 46" fill="none" '
               f'stroke="{GARNET}" stroke-opacity="0.75" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="7 6"/>')
    bx, by = 272, 262
    out.append(wing(bx - 28, by - 18, 32, 24, -30, GARNET, 'satin', GARNET_STITCH))
    out.append(wing(bx + 28, by - 18, 32, 24, 30, GARNET, 'satin', GARNET_STITCH))
    out.append(wing(bx - 20, by + 20, 20, 15, 30, '#D9576A', 'satin', GARNET_STITCH))
    out.append(wing(bx + 20, by + 20, 20, 15, -30, '#D9576A', 'satin', GARNET_STITCH))
    out.append(f'<rect x="{bx - 5}" y="{by - 34}" width="10" height="66" rx="5" fill="{THREAD}"/>')
    out.append(f'<path d="M{bx - 2} {by - 32}q-6-18-18-22M{bx + 2} {by - 32}q6-18 18-22" fill="none" stroke="{THREAD}" '
               'stroke-width="2.4" stroke-linecap="round"/>')
    out.append(knot(bx - 20, by - 54, 3.5, THREAD))
    out.append(knot(bx + 20, by - 54, 3.5, THREAD))
    out.append('</g>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{fabric}" fill="url(#light)"/>')

    # Wooden hoop: inner ring, outer ring with grain, clamp on top
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{fabric + 2}" fill="none" stroke="{HOOP_EDGE}" stroke-width="5"/>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="{HOOP_EDGE}" stroke-width="28"/>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="url(#wood)" stroke-width="22"/>')
    for offset, dash, opacity in ((-6, '120 60 40 90', 0.28), (2, '80 110 160 50', 0.22), (7, '50 140 90 70', 0.2)):
        out.append(f'<circle cx="{cx}" cy="{cy}" r="{r + offset}" fill="none" stroke="{HOOP_EDGE}" '
                   f'stroke-opacity="{opacity}" stroke-width="1.6" stroke-dasharray="{dash}"/>')
    out.append(f'<circle cx="{cx}" cy="{cy}" r="{r - 8}" fill="none" stroke="#F1D7AE" stroke-opacity="0.8" '
               f'stroke-width="2" stroke-dasharray="260 200" stroke-dashoffset="-40"/>')
    top = cy - r
    out.append(f'<rect x="{cx - 34}" y="{top - 30}" width="26" height="40" rx="6" fill="url(#wood)" stroke="{HOOP_EDGE}" stroke-width="3"/>')
    out.append(f'<rect x="{cx + 8}" y="{top - 30}" width="26" height="40" rx="6" fill="url(#wood)" stroke="{HOOP_EDGE}" stroke-width="3"/>')
    out.append(f'<rect x="{cx - 52}" y="{top - 22}" width="104" height="14" rx="7" fill="#C8C2B4" stroke="#7D776B" stroke-width="2.5"/>')
    for x in range(-40, 44, 8):
        out.append(f'<line x1="{cx + x}" y1="{top - 20}" x2="{cx + x + 4}" y2="{top - 10}" stroke="#7D776B" stroke-width="1.5"/>')
    out.append(f'<rect x="{cx + 52}" y="{top - 30}" width="22" height="30" rx="9" fill="#D9D3C5" stroke="#7D776B" stroke-width="2.5"/>')

    # Needle with garnet thread running back into the hoop
    out.append('<path d="M498 540c30 10 60-6 52-34-6-22-40-20-58-4" fill="none" stroke="#7E1726" stroke-width="5" '
               'stroke-linecap="round" stroke-opacity="0.35"/>')
    out.append(f'<path d="M498 540c30 10 60-6 52-34-6-22-40-20-58-4" fill="none" stroke="{GARNET}" stroke-width="3.4" '
               'stroke-linecap="round"/>')
    out.append('<g transform="rotate(-38 520 560)"><rect x="450" y="555" width="140" height="9" rx="4.5" fill="#B9B4AA"/>'
               '<rect x="450" y="555" width="140" height="4" rx="2" fill="#E9E6DF"/>'
               '<path d="M590 555l22 4.5-22 4.5Z" fill="#B9B4AA"/>'
               '<rect x="458" y="557.5" width="16" height="4" rx="2" fill="#5F5444"/></g>')
    out.append('</svg>')
    return ''.join(out)


# ------------------------------------------------------------ Studio mosaic ---

# (x, y, width, height, kind, value): a board that is half Pixtangle, half Stitch Tales
MOSAIC = [
    (0, 0, 2, 1, 'rect', ('#EEA5C0', 2)), (2, 0, 1, 2, 'patch', None), (3, 0, 2, 1, 'rect', ('#A5D3EE', 2)),
    (0, 1, 1, 3, 'rect', ('#A5EEB7', 3)), (1, 1, 1, 1, 'cross', None), (3, 1, 1, 1, 'cross', None),
    (4, 1, 1, 2, 'rect', ('#EEDCA5', 2)), (1, 2, 2, 2, 'pixels', None), (3, 2, 1, 2, 'rect', ('#C9A5EE', 2)),
    (4, 3, 1, 1, 'rect', ('#F0BEB2', 1)),
]
HEART = ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...']


def mosaic():
    cell, gap = 80, 12
    step = cell + gap
    w, h = 5 * cell + 4 * gap, 4 * cell + 3 * gap
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 {w + 24} {h + 24}" width="{w + 24}" height="{h + 24}">',
           '<defs>', SHADOW, hatch('satin', '#000000', 0.14, step=5, angle=-35, width=1.4),
           '<style>.mosaic-tile{animation:mosaic-pop .7s cubic-bezier(.2,.9,.3,1.2) both;transform-box:fill-box;transform-origin:center}'
           '@keyframes mosaic-pop{from{opacity:0;transform:scale(.6)}}'
           '@media (prefers-reduced-motion:reduce){.mosaic-tile{animation:none}}</style>',
           '</defs>']
    for index, (x, y, tw, th, kind, value) in enumerate(MOSAIC):
        px, py = x * step, y * step
        pw, ph = tw * cell + (tw - 1) * gap, th * cell + (th - 1) * gap
        out.append(f'<g class="mosaic-tile" style="animation-delay:{index * 70}ms">')
        if kind == 'rect':
            color, number = value
            out.append(f'<rect x="{px}" y="{py}" width="{pw}" height="{ph}" rx="18" fill="{color}"/>')
            out.append(f'<text x="{px + cell / 2}" y="{py + cell / 2}" text-anchor="middle" dominant-baseline="central" '
                       f'font-family="{FONT}" font-weight="700" font-size="32" fill="{PX_BOARD}">{number}</text>')
        elif kind == 'patch':
            out.append(f'<rect x="{px}" y="{py}" width="{pw}" height="{ph}" rx="18" fill="{LINEN}"/>')
            out.append(patch([(0, 0), (0, 1), (0, 2)], 52, (px + 14, py + 8), GARNET, GARNET_EDGE, GARNET_STITCH, 'satin'))
        elif kind == 'cross':
            out.append(f'<rect x="{px}" y="{py}" width="{pw}" height="{ph}" rx="18" fill="{LINEN}"/>')
            out.append(cross_mark(px + cell / 2, py + cell / 2, cell * 0.34))
        elif kind == 'pixels':
            out.append(f'<rect x="{px}" y="{py}" width="{pw}" height="{ph}" rx="18" fill="{PX_CELL}"/>')
            size = 18
            hx = px + (pw - 7 * size) / 2
            hy = py + (ph - 6 * size) / 2 + 4
            shades = ['#F0B2D5', '#EEA5C0', '#E48BAD']
            for row, line in enumerate(HEART):
                for column, value in enumerate(line):
                    if value == 'X':
                        color = shades[min(2, (row + column) // 4)]
                        out.append(f'<rect x="{fmt(hx + column * size)}" y="{fmt(hy + row * size)}" width="{size}" '
                                   f'height="{size}" fill="{color}"/>')
            out.append(f'<rect x="{fmt(hx + 2 * size)}" y="{fmt(hy + 1 * size)}" width="{size}" height="{size}" '
                       'fill="#FFFFFF" fill-opacity="0.75"/>')
        out.append('</g>')
    out.append('</svg>')
    return ''.join(out)


# ---------------------------------------------------------------- the logo ---


def logo():
    """Studio mark: two puzzle tiles and a stitched patch with a cross."""
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">'
        '<rect width="64" height="64" rx="16" fill="#1D1A2B"/>'
        f'<rect x="10" y="10" width="19" height="44" rx="6" fill="{PX_ACCENT}"/>'
        '<rect x="34" y="10" width="20" height="19" rx="6" fill="#F0B2D5"/>'
        f'<rect x="34" y="35" width="20" height="19" rx="6" fill="{GARNET}"/>'
        f'<rect x="37.5" y="38.5" width="13" height="12" rx="3.5" fill="none" stroke="{GARNET_STITCH}" '
        'stroke-width="1.4" stroke-dasharray="2.6 2"/>'
        '</svg>'
    )


def main():
    write('assets/logo.svg', logo())
    write('assets/mosaic.svg', mosaic())
    write('pixtangle/images/board.svg', pixtangle_board())
    write('stitch-tales/images/nonogram.svg', nonogram())
    write('stitch-tales/images/hoop.svg', hoop())


if __name__ == '__main__':
    main()
