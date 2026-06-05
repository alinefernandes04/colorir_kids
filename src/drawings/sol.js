/**
 * Desenho: Sol
 * Regiões clicáveis: raios (r1–r8) + círculo central (center)
 * Todos começam com fill branco (#ffffff)
 */

const sol = {
  id: 'sol',
  label: 'Sol',
  viewBox: '0 0 300 300',
  width: 300,
  height: 300,

  // Elementos decorativos (não clicáveis)
  decorations: [
    // Olho esquerdo
    { type: 'ellipse', cx: 125, cy: 138, rx: 10, ry: 12, fill: '#333' },
    { type: 'ellipse', cx: 128, cy: 133, rx: 3,  ry: 3,  fill: '#ffffff' },
    // Olho direito
    { type: 'ellipse', cx: 175, cy: 138, rx: 10, ry: 12, fill: '#333' },
    { type: 'ellipse', cx: 178, cy: 133, rx: 3,  ry: 3,  fill: '#ffffff' },
    // Sorriso
    { type: 'path', d: 'M 118 168 Q 150 198 182 168', fill: 'none', stroke: '#333', strokeWidth: 4, strokeLinecap: 'round' },
  ],

  // Regiões coloríveis — ordem importa: pintadas de baixo pra cima no SVG
  regions: [
    { id: 'fundo', type: 'rect', x: 0, y: 0, width: 300, height: 300 },
    { id: 'r1', type: 'polygon', points: '150,10 140,70 160,70' },
    { id: 'r2', type: 'polygon', points: '230,30 185,80 205,90' },
    { id: 'r3', type: 'polygon', points: '290,150 230,140 230,160' },
    { id: 'r4', type: 'polygon', points: '230,270 185,220 205,210' },
    { id: 'r5', type: 'polygon', points: '150,290 140,230 160,230' },
    { id: 'r6', type: 'polygon', points: '70,270 115,220 95,210' },
    { id: 'r7', type: 'polygon', points: '10,150 70,140 70,160' },
    { id: 'r8', type: 'polygon', points: '70,30 115,80 95,90' },
    { id: 'center', type: 'circle', cx: 150, cy: 150, r: 80 },
  ],
}

export default sol
