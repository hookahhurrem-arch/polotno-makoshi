#!/usr/bin/env python3
"""Titling face for Полотно Макоши headings.

Klein's original Devils.ttf is a dingbat picture font (not letters).
This file is a text face: condensed, tall, angular, with triangular
cut-outs in the counters — matching the booklet titles (МАТУШКА, КНЯЗЬ).
Cyrillic is real Unicode, not Latin lookalikes. Unicase: lowercase
maps to the same outlines as uppercase.
"""

from pathlib import Path

from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen
from fontTools.ttLib.woff2 import compress
from pathops import OpBuilder, Path as SkiaPath, PathOp

UPM = 1000
CAP = 780
BASE = 0
STEM = 92
THIN = 26
PAD = 42


def _area(pts):
    s = 0.0
    n = len(pts)
    for i, (x, y) in enumerate(pts):
        x2, y2 = pts[(i + 1) % n]
        s += x * y2 - x2 * y
    return abs(s) / 2.0


def _skia(pts):
    p = SkiaPath()
    p.moveTo(pts[0][0], pts[0][1])
    for x, y in pts[1:]:
        p.lineTo(x, y)
    p.close()
    return p


def _bbox(pts):
    xs = [p[0] for p in pts]
    ys = [p[1] for p in pts]
    return min(xs), min(ys), max(xs), max(ys)


def pen_glyph(contours, advance):
    pen = TTGlyphPen(None)
    usable = [c for c in contours if len(c) >= 3]
    if not usable:
        return pen.glyph(), advance
    boxes = [_bbox(c) for c in usable]
    is_hole = [False] * len(usable)
    for i, bi in enumerate(boxes):
        for j, bj in enumerate(boxes):
            if i == j:
                continue
            if bi[0] >= bj[0] and bi[1] >= bj[1] and bi[2] <= bj[2] and bi[3] <= bj[3]:
                is_hole[i] = True
                break
    bodies = [c for c, h in zip(usable, is_hole) if not h]
    holes = [c for c, h in zip(usable, is_hole) if h]
    if not bodies:
        bodies, holes = holes, []
    builder = OpBuilder(fix_winding=True)
    for b in bodies:
        builder.add(_skia(b), PathOp.UNION)
    for h in holes:
        builder.add(_skia(h), PathOp.DIFFERENCE)
    builder.resolve().draw(pen)
    return pen.glyph(), advance


def rect(x, y, w, h):
    return [(x, y), (x + w, y), (x + w, y + h), (x, y + h)]


def tri(a, b, c):
    return [a, b, c]


def diamond(cx, cy, rx, ry):
    return [(cx, cy - ry), (cx + rx, cy), (cx, cy + ry), (cx - rx, cy)]


def stem_v(x, y0, y1, w=STEM):
    return rect(x, y0, w, y1 - y0)


def stem_h(x, y, w, h=STEM):
    return rect(x, y, w, h)


# Outer clockwise, holes counter-clockwise for TrueType fill.
def A():
    w = 560
    return [
        [(w / 2, CAP), (w - PAD, BASE), (w - PAD - STEM, BASE), (w / 2 + 18, CAP - 118), (w / 2 - 18, CAP - 118), (PAD + STEM, BASE), (PAD, BASE)],
        [(w / 2, 210), (w / 2 + 70, 92), (w / 2 - 70, 92)],
        diamond(w / 2, 430, 28, 48),
    ], w


def Be():
    w = 520
    return [
        stem_v(PAD, BASE, CAP),
        stem_h(PAD, CAP - THIN, 300, THIN),
        [
            (PAD + STEM - 8, 410),
            (390, 410),
            (470, 205),
            (390, BASE),
            (PAD + STEM - 8, BASE),
            (PAD + STEM - 8, BASE + STEM),
            (350, BASE + STEM),
            (410, 205),
            (350, 410 - 28),
            (PAD + STEM - 8, 410 - 28),
        ],
        diamond(300, 205, 18, 30),
    ], w


def Ve():
    w = 520
    return [
        stem_v(PAD, BASE, CAP),
        [(PAD + STEM - 8, CAP), (430, CAP), (500, 590), (430, 430), (PAD + STEM - 8, 430)],
        [(PAD + STEM - 8, CAP - STEM), (390, CAP - STEM), (430, 590), (390, 430 + 26), (PAD + STEM - 8, 430 + 26)],
        [(PAD + STEM - 8, 390), (430, 390), (500, 195), (430, BASE), (PAD + STEM - 8, BASE)],
        [(PAD + STEM - 8, 390 - 26), (390, 390 - 26), (430, 195), (390, BASE + STEM), (PAD + STEM - 8, BASE + STEM)],
        diamond(318, 590, 18, 28),
        diamond(318, 195, 20, 32),
    ], w


def Ge():
    w = 430
    return [stem_v(PAD, BASE, CAP), stem_h(PAD, CAP - STEM, 330)], w


def De():
    w = 560
    return [
        [(PAD + 30, STEM), (PAD + 30, CAP), (w - PAD - 30, CAP), (w - PAD - 30, STEM), (w - 10, STEM), (w - 10, BASE), (10, BASE), (10, STEM)],
        [(PAD + 30 + STEM, STEM * 2), (w - PAD - 30 - STEM, STEM * 2), (w - PAD - 30 - STEM, CAP - STEM), (PAD + 30 + STEM, CAP - STEM)],
        diamond(w / 2, 430, 24, 40),
    ], w


def Ye():
    w = 500
    return [
        stem_v(PAD, BASE, CAP),
        stem_h(PAD, CAP - STEM, 380),
        stem_h(PAD, 360, 300, THIN + 8),
        stem_h(PAD, BASE, 380),
    ], w


def Yo():
    w, (c, adv) = 500, Ye()
    extra = [tri((210, CAP + 90), (250, CAP + 28), (170, CAP + 28)), tri((330, CAP + 90), (370, CAP + 28), (290, CAP + 28))]
    return c + extra, adv


def Zhe():
    w = 640
    cx = w / 2
    return [
        [(cx - THIN / 2, BASE), (cx + THIN / 2, BASE), (cx + THIN / 2, CAP), (cx - THIN / 2, CAP)],
        [(40, CAP), (40 + STEM, CAP - 20), (cx - 20, 430), (cx - 20, 350), (40 + STEM, BASE + 20), (40, BASE), (20, BASE + 80), (cx - 80, 390), (20, CAP - 80)],
        [(w - 40, CAP), (w - 20, CAP - 80), (cx + 80, 390), (w - 20, BASE + 80), (w - 40, BASE), (w - 40 - STEM, BASE + 20), (cx + 20, 350), (cx + 20, 430), (w - 40 - STEM, CAP - 20)],
        diamond(cx, 390, 22, 36),
    ], w


def Ze():
    w = 480
    return [
        [(80, CAP), (420, CAP), (460, 560), (400, 430), (300, 390), (400, 350), (460, 180), (400, BASE), (80, BASE), (80, BASE + STEM), (340, BASE + STEM), (380, 180), (320, 300), (140, 340), (140, 440), (320, 480), (380, 560), (340, CAP - STEM), (80, CAP - STEM)],
        diamond(300, 560, 18, 24),
        diamond(300, 180, 18, 26),
    ], w


def I():
    w = 520
    return [
        stem_v(PAD, BASE, CAP),
        stem_v(w - PAD - STEM, BASE, CAP),
        [(PAD + STEM - 10, BASE), (w - PAD - STEM + 10, CAP - 40), (w - PAD - STEM + 10, CAP), (PAD + STEM - 10, 40)],
    ], w


def Ishort():
    c, w = I()
    c.append(tri((w / 2, CAP + 100), (w / 2 + 50, CAP + 30), (w / 2 - 50, CAP + 30)))
    return c, w


def Ka():
    w = 540
    return [
        stem_v(PAD, BASE, CAP),
        [(PAD + STEM - 12, 430), (PAD + STEM + 80, 390), (w - 50, CAP), (w - 50 - STEM, CAP), (PAD + STEM + 70, 470)],
        [(PAD + STEM - 12, 350), (PAD + STEM + 90, 390), (w - 40, BASE), (w - 40 - STEM - 8, BASE), (PAD + STEM + 60, 300)],
        diamond(PAD + STEM + 70, 390, 16, 26),
    ], w


def El():
    w = 540
    return [
        [(PAD + 20, CAP), (w - PAD, BASE), (w - PAD - STEM - 8, BASE), (PAD + 20 + STEM, CAP - 140), (PAD + 20 + STEM, BASE), (PAD + 20, BASE)],
        diamond(PAD + 90, 430, 16, 28),
    ], w


def Em():
    w = 680
    return [
        [(PAD, BASE), (PAD + STEM, BASE), (PAD + STEM, CAP - 90), (w / 2, 220), (w - PAD - STEM, CAP - 90), (w - PAD - STEM, BASE), (w - PAD, BASE), (w - PAD, CAP), (w - PAD - 70, CAP), (w / 2, 360), (PAD + 70, CAP), (PAD, CAP)],
        diamond(w / 2, 470, 22, 40),
    ], w


def En():
    w = 540
    return [
        stem_v(PAD, BASE, CAP),
        stem_v(w - PAD - STEM, BASE, CAP),
        stem_h(PAD, 360, w - 2 * PAD, THIN + 10),
        diamond(w / 2, 390, 22, 36),
    ], w


def O():
    w = 560
    return [
        [(w / 2, BASE), (w - 30, 180), (w - 30, 600), (w / 2, CAP), (30, 600), (30, 180)],
        [(w / 2, BASE + 88), (w - 30 - 88, 210), (w - 30 - 88, 570), (w / 2, CAP - 88), (30 + 88, 570), (30 + 88, 210)],
        diamond(w / 2, 390, 26, 44),
    ], w


def Pe():
    w = 540
    return [stem_v(PAD, BASE, CAP), stem_v(w - PAD - STEM, BASE, CAP), stem_h(PAD, CAP - STEM, w - 2 * PAD)], w


def Er():
    w = 500
    return [
        stem_v(PAD, BASE, CAP),
        [(PAD + STEM - 8, CAP), (400, CAP), (470, 560), (400, 390), (PAD + STEM - 8, 390)],
        [(PAD + STEM - 8, CAP - STEM), (370, CAP - STEM), (410, 560), (370, 390 + 26), (PAD + STEM - 8, 390 + 26)],
        diamond(300, 560, 18, 28),
    ], w


def Es():
    w = 500
    return [
        [(430, CAP - 40), (360, CAP), (180, CAP), (50, 600), (50, 180), (180, BASE), (360, BASE), (430, BASE + 40), (430 - 70, BASE + 40 + 30), (360, BASE + STEM), (200, BASE + STEM), (50 + STEM, 200), (50 + STEM, 580), (200, CAP - STEM), (360, CAP - STEM), (430 - 70, CAP - 70)],
    ], w


def Te():
    w = 600
    return [
        [(20, CAP - STEM), (80, CAP), (w - 80, CAP), (w - 20, CAP - STEM), (w / 2 + STEM / 2, CAP - STEM), (w / 2 + STEM / 2, BASE), (w / 2 - STEM / 2, BASE), (w / 2 - STEM / 2, CAP - STEM)],
    ], w


def U():
    w = 540
    return [
        [(PAD, CAP), (PAD + STEM + 10, CAP), (w / 2, 300), (w - PAD - STEM - 10, CAP), (w - PAD, CAP), (w / 2 + 36, BASE), (w / 2 - 36, BASE)],
        diamond(w / 2, 430, 20, 34),
    ], w


def Ef():
    w = 620
    return [
        stem_v((w - STEM) / 2, BASE, CAP),
        [(40, 240), (40, 560), (w / 2, 700), (w - 40, 560), (w - 40, 240), (w / 2, 100)],
        [(40 + 80, 280), (40 + 80, 520), (w / 2, 620), (w - 40 - 80, 520), (w - 40 - 80, 280), (w / 2, 180)],
        diamond(w / 2, 390, 22, 36),
    ], w


def Ha():
    w = 540
    return [
        [(PAD, CAP), (PAD + STEM, CAP), (w / 2, 450), (w - PAD - STEM, CAP), (w - PAD, CAP), (w / 2 + 40, 390), (w - PAD, BASE), (w - PAD - STEM, BASE), (w / 2, 330), (PAD + STEM, BASE), (PAD, BASE), (w / 2 - 40, 390)],
        diamond(w / 2, 390, 18, 28),
    ], w


def Tse():
    w = 560
    c, _ = Pe()
    c.append(rect(w - PAD - 20, BASE - 90, 70, 90))
    return c, w


def Che():
    w = 520
    return [
        stem_v(w - PAD - STEM, BASE, CAP),
        [(PAD, CAP), (PAD + STEM, CAP), (PAD + STEM, 420), (w - PAD - STEM, 420), (w - PAD - STEM, 420 + STEM), (PAD, 420 + STEM)],
    ], w


def Sha():
    w = 660
    return [
        stem_v(PAD, BASE, CAP),
        stem_v((w - STEM) / 2, BASE, CAP),
        stem_v(w - PAD - STEM, BASE, CAP),
        stem_h(PAD, BASE, w - 2 * PAD, STEM),
        diamond(w / 2, 430, 20, 36),
    ], w


def Shcha():
    c, w = Sha()
    c.append(rect(w - PAD - 20, BASE - 90, 70, 90))
    return c, w


def Hard():
    w = 480
    return [
        stem_h(20, CAP - STEM, 140, STEM),
        stem_v(120, BASE, CAP),
        [(120 + STEM - 8, 360), (430, 360), (460, 180), (430, BASE), (120 + STEM - 8, BASE)],
        [(120 + STEM - 8, 360 - 26), (390, 360 - 26), (410, 180), (390, BASE + STEM), (120 + STEM - 8, BASE + STEM)],
        diamond(300, 180, 16, 26),
    ], w


def Yeru():
    w = 640
    return [
        stem_v(PAD, BASE, CAP),
        [(PAD + STEM - 8, 340), (300, 340), (340, 170), (300, BASE), (PAD + STEM - 8, BASE)],
        [(PAD + STEM - 8, 340 - 26), (270, 340 - 26), (300, 170), (270, BASE + STEM), (PAD + STEM - 8, BASE + STEM)],
        stem_v(w - PAD - STEM, BASE, CAP),
        diamond(230, 170, 16, 26),
    ], w


def Soft():
    w = 460
    return [
        stem_v(PAD, BASE, CAP),
        [(PAD + STEM - 8, 360), (400, 360), (440, 180), (400, BASE), (PAD + STEM - 8, BASE)],
        [(PAD + STEM - 8, 360 - 26), (360, 360 - 26), (390, 180), (360, BASE + STEM), (PAD + STEM - 8, BASE + STEM)],
        diamond(270, 180, 16, 26),
    ], w


def E():
    w = 520
    return [
        [(90, CAP - 40), (160, CAP), (340, CAP), (470, 600), (470, 180), (340, BASE), (160, BASE), (90, BASE + 40), (90 + 70, BASE + 70), (180, BASE + STEM), (330, BASE + STEM), (470 - STEM, 200), (470 - STEM, 580), (330, CAP - STEM), (180, CAP - STEM), (90 + 70, CAP - 70)],
        stem_h(200, 360, 250, THIN + 8),
        diamond(330, 500, 16, 24),
    ], w


def Yu():
    w = 740
    bodies = [
        stem_v(PAD, BASE, CAP),
        stem_h(PAD, 360, 190, THIN + 8),
        [(320, 40), (320, 740), (530, 800), (720, 600), (720, 180), (530, BASE - 20)],
        [(320 + 88, 160), (320 + 88, 620), (530, 700), (720 - 88, 560), (720 - 88, 220), (530, 80)],
    ]
    return bodies + [diamond(530, 390, 24, 40)], w


def Ya():
    w = 560
    return [
        stem_v(w - PAD - STEM, BASE, CAP),
        [
            (70, CAP),
            (w - PAD - STEM + 8, CAP),
            (w - PAD - STEM + 8, 400),
            (70, 400),
        ],
        [
            (70 + 70, CAP - STEM),
            (w - PAD - STEM + 8 - 10, CAP - STEM),
            (w - PAD - STEM + 8 - 10, 400 + 28),
            (70 + 70, 400 + 28),
        ],
        [
            (w - PAD - STEM + 8, 370),
            (w - PAD - STEM - 80, 370),
            (36, BASE),
            (36 + STEM + 16, BASE),
            (w - PAD - STEM + 8, 280),
        ],
        diamond(210, 560, 18, 28),
    ], w


def LatinA():
    return A()


def LatinB():
    return Ve()


def LatinC():
    return Es()


def LatinE():
    return Ye()


def LatinH():
    return En()


def LatinK():
    return Ka()


def LatinM():
    return Em()


def LatinO():
    return O()


def LatinP():
    return Er()


def LatinT():
    return Te()


def LatinX():
    return Ha()


def LatinY():
    return U()


def N0():
    c, w = O()
    return c, w


def N1():
    w = 320
    return [stem_v((w - STEM) / 2, BASE, CAP), [(PAD, CAP - 140), (PAD + 80, CAP - 140), ((w + STEM) / 2, CAP), ((w - STEM) / 2, CAP)]], w


def N2():
    w = 460
    return [
        [(70, CAP - 50), (150, CAP), (340, CAP), (410, 620), (340, 500), (70, 220), (70, BASE), (400, BASE), (400, BASE + STEM), (160, BASE + STEM), (160, 180), (400, 470), (400, 620), (340, CAP - STEM), (160, CAP - STEM), (120, CAP - 90)],
    ], w


def N3():
    return Ze()[0], 460


def N4():
    w = 500
    return [
        stem_v(w - PAD - STEM, BASE, CAP),
        [(60, 360), (60, 380 + STEM), (w - PAD - STEM, 380 + STEM), (w - PAD - STEM, 360)],
        [(60, 360 + STEM), (60 + STEM, 360 + STEM), (w - PAD - STEM, CAP), (w - PAD, CAP)],
    ], w


def N5():
    w = 460
    return [
        stem_h(70, CAP - STEM, 330),
        stem_v(70, 400, CAP),
        [(70, 400), (330, 400), (410, 240), (330, BASE), (80, BASE), (80, BASE + STEM), (300, BASE + STEM), (350, 240), (300, 400 - 26), (70 + STEM, 400 - 26)],
    ], w


def N6():
    w = 480
    return [
        [(400, CAP - 30), (330, CAP), (180, CAP), (60, 580), (60, 180), (180, BASE), (340, BASE), (420, 180), (420, 340), (340, 430), (180, 430), (60 + STEM, 340)],
        [(60 + STEM, 200), (60 + STEM, 330), (180, 430 - 80), (330, 430 - 80), (420 - STEM, 320), (420 - STEM, 200), (330, BASE + STEM), (180, BASE + STEM)],
        diamond(250, 210, 16, 24),
    ], w


def N7():
    w = 460
    return [stem_h(50, CAP - STEM, 360), [(410, CAP - STEM), (410, CAP), (130, BASE), (50, BASE), (50 + 70, BASE), (330, CAP - STEM)]], w


def N8():
    w = 480
    return [
        [(240, 400), (400, 520), (340, CAP), (140, CAP), (80, 520)],
        [(140, CAP - STEM), (340, CAP - STEM), (360, 520), (240, 430), (120, 520)],
        [(240, 360), (80, 220), (140, BASE), (340, BASE), (400, 220)],
        [(140, BASE + STEM), (340, BASE + STEM), (360, 220), (240, 300), (120, 220)],
        diamond(240, 520, 14, 20),
        diamond(240, 220, 14, 20),
    ], w


def N9():
    w = 480
    return [
        [(80, BASE + 30), (150, BASE), (300, BASE), (420, 200), (420, 580), (300, CAP), (150, CAP), (60, 580), (60, 430), (150, 350), (300, 350), (420 - STEM, 430)],
        [(150, CAP - STEM), (300, CAP - STEM), (420 - STEM, 560), (420 - STEM, 450), (300, 350 + 70), (150, 350 + 70), (60 + STEM, 450), (60 + STEM, 560)],
        diamond(240, 560, 16, 24),
    ], w


def hyphen():
    w = 340
    return [stem_h(40, 360, 260, THIN + 8)], w


def emdash():
    w = 640
    return [stem_h(40, 360, 560, THIN + 8)], w


def period():
    w = 220
    return [diamond(110, 70, 28, 28)], w


def comma():
    w = 220
    return [[(80, 90), (140, 90), (110, 20), (70, -40), (40, -20)]], w


def colon():
    w = 220
    return [diamond(110, 560, 24, 24), diamond(110, 160, 24, 24)], w


def excl():
    w = 240
    return [stem_v((w - THIN) / 2, 200, CAP, THIN + 8), diamond(w / 2, 70, 24, 24)], w


def quest():
    w = 460
    return [
        [(80, 560), (140, 700), (320, 700), (400, 560), (320, 430), (240, 360), (240, 220), (240 - 40, 220), (240 - 40, 390), (320, 470), (360, 560), (320, 640), (140, 640), (120, 560)],
        diamond(w / 2 - 20, 70, 24, 24),
    ], w


def lquote():
    w = 280
    return [[(200, 620), (80, 500), (80, 380), (160, 380), (160, 460), (200, 500)]], w


def rquote():
    w = 280
    return [[(80, 620), (200, 500), (200, 380), (120, 380), (120, 460), (80, 500)]], w


def space():
    return [], 280


GLYPHS = {
    ".notdef": ( [rect(40, 0, 200, 700), rect(80, 40, 120, 620)] , 280),
    "space": space(),
    "exclam": excl(),
    "comma": comma(),
    "period": period(),
    "hyphen": hyphen(),
    "colon": colon(),
    "question": quest(),
    "quotedblleft": lquote(),
    "quotedblright": rquote(),
    "endash": hyphen(),
    "emdash": emdash(),
    "uni00A0": space(),
    "zero": N0(),
    "one": N1(),
    "two": N2(),
    "three": N3(),
    "four": N4(),
    "five": N5(),
    "six": N6(),
    "seven": N7(),
    "eight": N8(),
    "nine": N9(),
}

LATIN = {
    "A": A, "B": LatinB, "C": LatinC, "E": LatinE, "H": LatinH,
    "K": LatinK, "M": LatinM, "O": LatinO, "P": LatinP, "T": LatinT,
    "X": LatinX, "Y": LatinY,
    "D": De, "G": Ge, "I": lambda: (stem_v(40, BASE, CAP) and [stem_v(40, BASE, CAP)], 180) or ([stem_v(40, BASE, CAP)], 180),
    "N": En, "R": Er, "S": Es, "U": U, "V": U, "W": Em, "Z": Ze, "L": El, "F": Ge,
}

CYR = {
    "afii10017": A,       # А
    "afii10018": Be,      # Б
    "afii10019": Ve,      # В
    "afii10020": Ge,      # Г
    "afii10021": De,      # Д
    "afii10022": Ye,      # Е
    "afii10024": Zhe,     # Ж
    "afii10025": Ze,      # З
    "afii10026": I,       # И
    "afii10027": Ishort,  # Й
    "afii10028": Ka,      # К
    "afii10029": El,      # Л
    "afii10030": Em,      # М
    "afii10031": En,      # Н
    "afii10032": O,       # О
    "afii10033": Pe,      # П
    "afii10034": Er,      # Р
    "afii10035": Es,      # С
    "afii10036": Te,      # Т
    "afii10037": U,       # У
    "afii10038": Ef,      # Ф
    "afii10039": Ha,      # Х
    "afii10040": Tse,     # Ц
    "afii10041": Che,     # Ч
    "afii10042": Sha,     # Ш
    "afii10043": Shcha,   # Щ
    "afii10044": Hard,    # Ъ
    "afii10045": Yeru,    # Ы
    "afii10046": Soft,    # Ь
    "afii10047": E,       # Э
    "afii10048": Yu,      # Ю
    "afii10049": Ya,      # Я
    "afii10023": Yo,      # Ё
}

# Prefer Unicode cmap over Adobe names — use uniXXXX
def uni(cp, fn):
    return f"uni{cp:04X}", fn


CYR_MAP = {
    0x0410: A, 0x0411: Be, 0x0412: Ve, 0x0413: Ge, 0x0414: De,
    0x0415: Ye, 0x0416: Zhe, 0x0417: Ze, 0x0418: I, 0x0419: Ishort,
    0x041A: Ka, 0x041B: El, 0x041C: Em, 0x041D: En, 0x041E: O,
    0x041F: Pe, 0x0420: Er, 0x0421: Es, 0x0422: Te, 0x0423: U,
    0x0424: Ef, 0x0425: Ha, 0x0426: Tse, 0x0427: Che, 0x0428: Sha,
    0x0429: Shcha, 0x042A: Hard, 0x042B: Yeru, 0x042C: Soft,
    0x042D: E, 0x042E: Yu, 0x042F: Ya, 0x0401: Yo,
}

LATIN_MAP = {ord(ch): fn for ch, fn in {
    "A": A, "B": Ve, "C": Es, "D": De, "E": Ye, "F": Ge, "G": Ge,
    "H": En, "I": lambda: ([stem_v(44, BASE, CAP)], 180),
    "J": lambda: ([stem_v(80, BASE + 80, CAP), stem_h(20, BASE, 140, STEM)], 220),
    "K": Ka, "L": El, "M": Em, "N": En, "O": O, "P": Er, "R": Er,
    "S": Es, "T": Te, "U": lambda: ([stem_v(PAD, 200, CAP), stem_v(420, 200, CAP), stem_h(PAD, BASE, 420 + STEM, STEM)], 540),
    "V": U, "W": Em, "X": Ha, "Y": U, "Z": Ze,
}.items()}

DIGIT_MAP = {
    ord("0"): N0, ord("1"): N1, ord("2"): N2, ord("3"): N3, ord("4"): N4,
    ord("5"): N5, ord("6"): N6, ord("7"): N7, ord("8"): N8, ord("9"): N9,
}


def build():
    glyphs = {".notdef": pen_glyph(*GLYPHS[".notdef"])[0], "space": pen_glyph([], 280)[0]}
    cmap = {32: "space", 160: "space"}
    metrics = {".notdef": (280, 40), "space": (280, 0)}

    def add(name, contours, adv, cp=None):
        g, a = pen_glyph(contours, adv)
        glyphs[name] = g
        metrics[name] = (a, PAD // 2)
        if cp is not None:
            cmap[cp] = name
            # unicase lowercase
            if 0x0410 <= cp <= 0x042F:
                cmap[cp + 0x20] = name
            elif 0x0401 == cp:
                cmap[0x0451] = name
            elif 0x41 <= cp <= 0x5A:
                cmap[cp + 0x20] = name

    add("period", *period(), 0x2E)
    add("comma", *comma(), 0x2C)
    add("hyphen", *hyphen(), 0x2D)
    add("colon", *colon(), 0x3A)
    add("exclam", *excl(), 0x21)
    add("question", *quest(), 0x3F)
    add("endash", *hyphen(), 0x2013)
    add("emdash", *emdash(), 0x2014)
    add("guillemotleft", *lquote(), 0xAB)
    add("guillemotright", *rquote(), 0xBB)
    add("quotedbl", *lquote(), 0x22)
    add("quotesingle", *period(), 0x27)

    for cp, fn in {**CYR_MAP, **LATIN_MAP, **DIGIT_MAP}.items():
        contours, adv = fn()
        add(f"uni{cp:04X}", contours, adv, cp)

    fb = FontBuilder(UPM, isTTF=True)
    order = [".notdef", "space"] + sorted(n for n in glyphs if n not in {".notdef", "space"})
    fb.setupGlyphOrder(order)
    fb.setupGlyf({n: glyphs[n] for n in order})
    fb.setupHorizontalMetrics({n: metrics[n] for n in order})
    fb.setupHorizontalHeader(ascent=920, descent=-180)
    fb.setupNameTable({
        "familyName": "Devils",
        "styleName": "Regular",
        "fullName": "Devils",
        "psName": "Devils",
        "version": "1.0",
        "designer": "Полотно Макоши",
        "description": "Titling Cyrillic for Полотно Макоши. Angular cut-out display. Unicase.",
    })
    fb.setupCharacterMap(cmap)
    fb.setupOS2(sTypoAscender=920, sTypoDescender=-180, usWinAscent=920, usWinDescent=180, achVendID="MAKO")
    fb.setupPost()
    out = Path("/workspace/public/fonts")
    out.mkdir(parents=True, exist_ok=True)
    ttf = out / "Devils.ttf"
    fb.save(str(ttf))
    compress(str(ttf), str(out / "Devils.woff2"))
    print("wrote", ttf, ttf.stat().st_size, "woff2", (out / "Devils.woff2").stat().st_size)


if __name__ == "__main__":
    build()
