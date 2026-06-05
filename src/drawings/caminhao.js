const caminhao = {
  id: 'caminhao',
  label: 'Caminhão',
  viewBox: '0 0 300 300',
  width: 300,
  height: 300,
  decorations: [
    // janela da cabine
    { type: 'rect', x: 210, y: 148, width: 48, height: 36, rx: 6, fill: '#fff', stroke: '#333', strokeWidth: 2.5 },
    // farol
    { type: 'rect', x: 254, y: 172, width: 14, height: 10, rx: 3, fill: '#fff', stroke: '#333', strokeWidth: 2 },
  ],
  regions: [
    { id: 'fundo',   type: 'rect', x: 0,   y: 0,   width: 300, height: 300 },

    // baú (carroceria)
    { id: 'bau',     type: 'rect', x: 30,  y: 130, width: 175, height: 80,  rx: 6 },

    // cabine
    { id: 'cabine',  type: 'rect', x: 200, y: 138, width: 70,  height: 72,  rx: 8 },

    // teto da cabine
    { id: 'teto',    type: 'path', d: 'M 205 138 Q 220 108 255 112 L 270 138 Z' },

    // roda traseira
    { id: 'roda1',   type: 'circle', cx: 90,  cy: 222, r: 26 },
    // aro roda traseira
    { id: 'aro1',    type: 'circle', cx: 90,  cy: 222, r: 12 },

    // roda dianteira
    { id: 'roda2',   type: 'circle', cx: 228, cy: 222, r: 26 },
    // aro roda dianteira
    { id: 'aro2',    type: 'circle', cx: 228, cy: 222, r: 12 },

    // para-choque
    { id: 'parachoque', type: 'rect', x: 262, y: 192, width: 16, height: 14, rx: 4 },
  ],
}

export default caminhao