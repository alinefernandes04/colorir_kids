/**
 * Desenho: Casinha Simples
 * Regiões clicáveis: céu, telhado, parede, porta, maçaneta, janelas, chaminé e grama
 * Todos começam com fill branco (#ffffff)
 */

const casinha = {
  id: 'casinha',
  label: 'Casinha',
  viewBox: '0 0 300 300',
  width: 300,
  height: 300,

  // Elementos decorativos (não clicáveis)
  decorations: [
    // Divisórias da janela esquerda
    { type: 'line', x1: 92, y1: 165, x2: 128, y2: 165, stroke: '#333', strokeWidth: 3, strokeLinecap: 'round' },
    { type: 'line', x1: 110, y1: 147, x2: 110, y2: 183, stroke: '#333', strokeWidth: 3, strokeLinecap: 'round' },

    // Divisórias da janela direita
    { type: 'line', x1: 172, y1: 165, x2: 208, y2: 165, stroke: '#333', strokeWidth: 3, strokeLinecap: 'round' },
    { type: 'line', x1: 190, y1: 147, x2: 190, y2: 183, stroke: '#333', strokeWidth: 3, strokeLinecap: 'round' },

    // Linha da base da casa
    { type: 'line', x1: 65, y1: 240, x2: 235, y2: 240, stroke: '#333', strokeWidth: 4, strokeLinecap: 'round' },
  ],

  // Regiões coloríveis — ordem importa: pintadas de baixo pra cima no SVG
  regions: [
    // Céu / fundo
    { id: 'ceu', type: 'rect', x: 20, y: 20, width: 260, height: 250, rx: 12, ry: 12 },

    // Grama
    { id: 'grama', type: 'rect', x: 20, y: 235, width: 260, height: 35, rx: 8, ry: 8 },

    // Chaminé — fica atrás do telhado
    { id: 'chamine', type: 'rect', x: 200, y: 65, width: 28, height: 60, rx: 3, ry: 3 },

    // Parede da casa
    { id: 'parede', type: 'rect', x: 65, y: 125, width: 170, height: 115, rx: 4, ry: 4 },

    // Telhado
    { id: 'telhado', type: 'polygon', points: '45,130 150,55 255,130' },

    // Porta
    { id: 'porta', type: 'rect', x: 130, y: 175, width: 40, height: 65, rx: 5, ry: 5 },

    // Maçaneta
    { id: 'macaneta', type: 'circle', cx: 160, cy: 210, r: 5 },

    // Janela esquerda
    { id: 'janela_esquerda', type: 'rect', x: 90, y: 145, width: 40, height: 40, rx: 5, ry: 5 },

    // Janela direita
    { id: 'janela_direita', type: 'rect', x: 170, y: 145, width: 40, height: 40, rx: 5, ry: 5 },
  ],
}

export default casinha