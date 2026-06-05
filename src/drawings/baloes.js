function balloonPath(cx, cy, rx, ry) {
  return (
    `M ${cx} ${cy + ry} ` +
    `C ${cx - rx * 0.3} ${cy + ry}, ${cx - rx} ${cy + ry * 0.5}, ${cx - rx} ${cy} ` +
    `C ${cx - rx} ${cy - ry * 0.8}, ${cx - rx * 0.5} ${cy - ry}, ${cx} ${cy - ry} ` +
    `C ${cx + rx * 0.5} ${cy - ry}, ${cx + rx} ${cy - ry * 0.8}, ${cx + rx} ${cy} ` +
    `C ${cx + rx} ${cy + ry * 0.5}, ${cx + rx * 0.3} ${cy + ry}, ${cx} ${cy + ry} Z`
  )
}

function stringPath(cx, cy, ry) {
  const base = cy + ry
  return `M ${cx} ${base} Q ${cx + 10} ${base + 18} ${cx - 4} ${base + 35}`
}

const baloes = {
  id: 'baloes',
  label: 'Balões',
  viewBox: '0 0 300 300',
  width: 300,
  height: 300,
  decorations: [
    { type: 'path', d: stringPath(80,  60, 52), fill: 'none', stroke: '#333', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'path', d: stringPath(155, 45, 58), fill: 'none', stroke: '#333', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'path', d: stringPath(230, 65, 48), fill: 'none', stroke: '#333', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'path', d: stringPath(60, 195, 42), fill: 'none', stroke: '#333', strokeWidth: 2, strokeLinecap: 'round' },
    { type: 'path', d: stringPath(220, 190, 44), fill: 'none', stroke: '#333', strokeWidth: 2, strokeLinecap: 'round' },
  ],
  regions: [
    { id: 'fundo', type: 'rect', x: 0, y: 0, width: 300, height: 300 },
    { id: 'b1', type: 'path', d: balloonPath(80,  60,  32, 52) },
    { id: 'b2', type: 'path', d: balloonPath(155, 45,  36, 58) },
    { id: 'b3', type: 'path', d: balloonPath(230, 65,  30, 48) },
    { id: 'b4', type: 'path', d: balloonPath(60,  195, 28, 42) },
    { id: 'b5', type: 'path', d: balloonPath(220, 190, 30, 44) },
  ],
}

export default baloes