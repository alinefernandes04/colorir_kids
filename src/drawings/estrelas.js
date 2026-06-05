/**
 * Desenho: Estrelas
 * 5 estrelas espalhadas pelo canvas, cada uma é uma região clicável
 */

function starPoints(cx, cy, outerR, innerR) {
  const points = []
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2
    const r = i % 2 === 0 ? outerR : innerR
    points.push(`${(cx + Math.cos(angle) * r).toFixed(1)},${(cy + Math.sin(angle) * r).toFixed(1)}`)
  }
  return points.join(' ')
}

const estrelas = {
  id: 'estrelas',
  label: 'Estrelas',
  viewBox: '0 0 300 300',
  width: 300,
  height: 300,
  decorations: [],
  regions: [
    { id: 'fundo', type: 'rect', x: 0, y: 0, width: 300, height: 300 },
    { id: 's1', type: 'polygon', points: starPoints(80,  70,  38, 16) },
    { id: 's2', type: 'polygon', points: starPoints(220, 60,  32, 14) },
    { id: 's3', type: 'polygon', points: starPoints(150, 155, 44, 18) },
    { id: 's4', type: 'polygon', points: starPoints(55,  210, 30, 13) },
    { id: 's5', type: 'polygon', points: starPoints(235, 215, 36, 15) },
  ],
}

export default estrelas
