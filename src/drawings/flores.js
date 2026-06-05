function petalPath(cx, cy, angle, rx, ry) {
  const rad = (angle * Math.PI) / 180
  const cos = Math.cos(rad), sin = Math.sin(rad)
  const tip = { x: cx + cos * ry, y: cy + sin * ry }
  const c1  = { x: cx + cos * ry * 0.4 - sin * rx, y: cy + sin * ry * 0.4 + cos * rx }
  const c2  = { x: tip.x - sin * rx * 0.6, y: tip.y + cos * rx * 0.6 }
  const c3  = { x: tip.x + sin * rx * 0.6, y: tip.y - cos * rx * 0.6 }
  const c4  = { x: cx + cos * ry * 0.4 + sin * rx, y: cy + sin * ry * 0.4 - cos * rx }
  return `M ${cx} ${cy} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${tip.x} ${tip.y} C ${c3.x} ${c3.y} ${c4.x} ${c4.y} ${cx} ${cy} Z`
}

const flores = {
  id: 'flores',
  label: 'Flores',
  viewBox: '0 0 300 300',
  width: 300,
  height: 300,
  decorations: [],
  regions: [
    { id: 'fundo', type: 'rect', x: 0, y: 0, width: 300, height: 300 },

    // Flor 1 — grande, centro
    { id: 'f1p1', type: 'path', d: petalPath(150, 145, 270, 22, 55) },
    { id: 'f1p2', type: 'path', d: petalPath(150, 145,  90, 22, 55) },
    { id: 'f1p3', type: 'path', d: petalPath(150, 145,   0, 22, 55) },
    { id: 'f1p4', type: 'path', d: petalPath(150, 145, 180, 22, 55) },
    { id: 'f1p5', type: 'path', d: petalPath(150, 145,  45, 22, 55) },
    { id: 'f1p6', type: 'path', d: petalPath(150, 145, 135, 22, 55) },
    { id: 'f1p7', type: 'path', d: petalPath(150, 145, 225, 22, 55) },
    { id: 'f1p8', type: 'path', d: petalPath(150, 145, 315, 22, 55) },
    { id: 'f1c',  type: 'circle', cx: 150, cy: 145, r: 26 },

    // Flor 2 — pequena, canto sup esq
    { id: 'f2p1', type: 'path', d: petalPath(65, 65, 270, 14, 34) },
    { id: 'f2p2', type: 'path', d: petalPath(65, 65,  90, 14, 34) },
    { id: 'f2p3', type: 'path', d: petalPath(65, 65,   0, 14, 34) },
    { id: 'f2p4', type: 'path', d: petalPath(65, 65, 180, 14, 34) },
    { id: 'f2p5', type: 'path', d: petalPath(65, 65,  45, 14, 34) },
    { id: 'f2p6', type: 'path', d: petalPath(65, 65, 135, 14, 34) },
    { id: 'f2c',  type: 'circle', cx: 65, cy: 65, r: 16 },

    // Flor 3 — pequena, canto sup dir
    { id: 'f3p1', type: 'path', d: petalPath(238, 72, 270, 14, 34) },
    { id: 'f3p2', type: 'path', d: petalPath(238, 72,  90, 14, 34) },
    { id: 'f3p3', type: 'path', d: petalPath(238, 72,   0, 14, 34) },
    { id: 'f3p4', type: 'path', d: petalPath(238, 72, 180, 14, 34) },
    { id: 'f3p5', type: 'path', d: petalPath(238, 72,  45, 14, 34) },
    { id: 'f3p6', type: 'path', d: petalPath(238, 72, 135, 14, 34) },
    { id: 'f3c',  type: 'circle', cx: 238, cy: 72, r: 16 },

    // Flor 4 — pequena, canto inf esq
    { id: 'f4p1', type: 'path', d: petalPath(68, 238, 270, 14, 34) },
    { id: 'f4p2', type: 'path', d: petalPath(68, 238,  90, 14, 34) },
    { id: 'f4p3', type: 'path', d: petalPath(68, 238,   0, 14, 34) },
    { id: 'f4p4', type: 'path', d: petalPath(68, 238, 180, 14, 34) },
    { id: 'f4p5', type: 'path', d: petalPath(68, 238,  45, 14, 34) },
    { id: 'f4p6', type: 'path', d: petalPath(68, 238, 135, 14, 34) },
    { id: 'f4c',  type: 'circle', cx: 68, cy: 238, r: 16 },

    // Flor 5 — pequena, canto inf dir
    { id: 'f5p1', type: 'path', d: petalPath(235, 235, 270, 14, 34) },
    { id: 'f5p2', type: 'path', d: petalPath(235, 235,  90, 14, 34) },
    { id: 'f5p3', type: 'path', d: petalPath(235, 235,   0, 14, 34) },
    { id: 'f5p4', type: 'path', d: petalPath(235, 235, 180, 14, 34) },
    { id: 'f5p5', type: 'path', d: petalPath(235, 235,  45, 14, 34) },
    { id: 'f5p6', type: 'path', d: petalPath(235, 235, 135, 14, 34) },
    { id: 'f5c',  type: 'circle', cx: 235, cy: 235, r: 16 },
  ],
}

export default flores