/**
 * Desenho: Corações
 * 5 corações espalhados pelo canvas, cada um é uma região clicável
 * Path do coração centralizado em (cx, cy) com tamanho s
 */

function heartPath(cx, cy, s) {
  // Coração usando curvas bezier, centralizado em cx,cy
  const x = cx
  const y = cy + s * 0.25
  return (
    `M ${x} ${y} ` +
    `C ${x} ${y - s * 0.6}, ${x - s} ${y - s * 0.6}, ${x - s} ${y - s * 0.1} ` +
    `C ${x - s} ${y + s * 0.4}, ${x} ${y + s * 0.75}, ${x} ${y + s * 0.9} ` +
    `C ${x} ${y + s * 0.75}, ${x + s} ${y + s * 0.4}, ${x + s} ${y - s * 0.1} ` +
    `C ${x + s} ${y - s * 0.6}, ${x} ${y - s * 0.6}, ${x} ${y} Z`
  )
}

const coracoes = {
  id: 'coracoes',
  label: 'Corações',
  viewBox: '0 0 300 300',
  width: 300,
  height: 300,
  decorations: [],
  regions: [
    { id: 'fundo', type: 'rect', x: 0, y: 0, width: 300, height: 300 },
    { id: 'h1', type: 'path', d: heartPath(80,  65,  38) },
    { id: 'h2', type: 'path', d: heartPath(220, 58,  32) },
    { id: 'h3', type: 'path', d: heartPath(150, 150, 44) },
    { id: 'h4', type: 'path', d: heartPath(58,  218, 30) },
    { id: 'h5', type: 'path', d: heartPath(232, 210, 34) },
  ],
}

export default coracoes
