/**
 * Desenho: Gato
 * Regiões clicáveis: fundo, rabo, corpo, patas (esquerda/direita),
 * orelhas (esquerda/direita), cabeca, nariz
 * Todos começam com fill branco (#ffffff)
 */

const gato = {
  id: 'gato',
  label: 'Gato',
  viewBox: '0 0 400 400',
  width: 400,
  height: 400,

  // Elementos decorativos (não clicáveis)
  decorations: [
    // Olho esquerdo
    { type: 'circle', cx: 170, cy: 160, r: 8, fill: '#000000' },
    // Olho direito
    { type: 'circle', cx: 230, cy: 160, r: 8, fill: '#000000' },
    // Bigodes esquerdos
    { type: 'line', x1: 190, y1: 195, x2: 130, y2: 185, stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'line', x1: 190, y1: 200, x2: 130, y2: 200, stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'line', x1: 190, y1: 205, x2: 130, y2: 215, stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round' },
    // Bigodes direitos
    { type: 'line', x1: 210, y1: 195, x2: 270, y2: 185, stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'line', x1: 210, y1: 200, x2: 270, y2: 200, stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'line', x1: 210, y1: 205, x2: 270, y2: 215, stroke: '#000000', strokeWidth: 2, strokeLinecap: 'round' },
  ],

  // Regiões coloríveis — ordem importa: pintadas de baixo pra cima no SVG
  regions: [
    { id: 'fundo', type: 'rect', x: 0, y: 0, width: 400, height: 400 },
    { id: 'rabo', type: 'path', d: 'M 280 300 C 340 300, 350 230, 320 200 C 300 180, 285 195, 295 215 C 310 240, 300 280, 270 285 Z' },
    { id: 'corpo', type: 'ellipse', cx: 200, cy: 280, rx: 90, ry: 70 },
    { id: 'pata-esquerda', type: 'ellipse', cx: 160, cy: 345, rx: 22, ry: 30 },
    { id: 'pata-direita', type: 'ellipse', cx: 240, cy: 345, rx: 22, ry: 30 },
    { id: 'orelha-esquerda', type: 'path', d: 'M 130 130 L 100 60 Q 95 50 110 55 L 165 95 Z' },
    { id: 'orelha-direita', type: 'path', d: 'M 270 130 L 300 60 Q 305 50 290 55 L 235 95 Z' },
    { id: 'cabeca', type: 'circle', cx: 200, cy: 170, r: 95 },
    { id: 'nariz', type: 'path', d: 'M 192 185 L 208 185 L 200 195 Z' },
  ],
}

export default gato
