import { useState, useEffect } from 'react'
import { useSound } from '../hooks/useSound'
import styles from './DrawingCanvas.module.css'

const DEFAULT_FILL = '#ffffff'

function renderDecoration(dec, i) {
  if (dec.type === 'ellipse') {
    return (
      <ellipse
        key={i}
        cx={dec.cx} cy={dec.cy}
        rx={dec.rx} ry={dec.ry}
        fill={dec.fill}
        pointerEvents="none"
      />
    )
  }
  if (dec.type === 'path') {
    return (
      <path
        key={i}
        d={dec.d}
        fill={dec.fill}
        stroke={dec.stroke}
        strokeWidth={dec.strokeWidth}
        strokeLinecap={dec.strokeLinecap}
        pointerEvents="none"
      />
    )
  }
  return null
}

function renderRegion(region, fill, onClick) {
  const sharedProps = {
    key: region.id,
    className: styles.region,
    fill,
    onClick: () => onClick(region.id),
  }
  
  if (region.type === 'rect') {
  return <rect {...sharedProps} x={region.x} y={region.y} width={region.width} height={region.height} />
  }
  if (region.type === 'polygon') {
    return <polygon {...sharedProps} points={region.points} />
  }
  if (region.type === 'circle') {
    return <circle {...sharedProps} cx={region.cx} cy={region.cy} r={region.r} />
  }
  if (region.type === 'ellipse') {
    return <ellipse {...sharedProps} cx={region.cx} cy={region.cy} rx={region.rx} ry={region.ry} />
  }
  if (region.type === 'path') {
    return <path {...sharedProps} d={region.d} />
  }
  return null
}

export default function DrawingCanvas({ drawing, selectedColor }) {
  const initialFills = Object.fromEntries(
    drawing.regions.map((r) => [r.id, DEFAULT_FILL])
  )
  const [fills, setFills] = useState(initialFills)
  const [completed, setCompleted] = useState(false)
  const { playClick, playComplete } = useSound()

  // Reseta estado quando troca de desenho
  useEffect(() => {
    setFills(Object.fromEntries(drawing.regions.map((r) => [r.id, DEFAULT_FILL])))
    setCompleted(false)
  }, [drawing.id])

  const handleRegionClick = (id) => {

    const newFills = { ...fills, [id]: selectedColor }
    setFills(newFills)
    playClick()

    // Verifica se todas as regiões foram coloridas (nenhuma branca)
    const allColored = drawing.regions.every((r) => newFills[r.id] !== DEFAULT_FILL)
    if (allColored) {
      setCompleted(true)
      setTimeout(() => playComplete(), 80)
    }
  }

  const handleReset = () => {
    setFills(initialFills)
    setCompleted(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.canvasCard} ${completed ? styles.completed : ''}`}>
        {completed && <div className={styles.completedBadge}>🌟 Incrível!</div>}
        <svg
          width={drawing.width}
          height={drawing.height}
          viewBox={drawing.viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          {drawing.regions.map((region) =>
            renderRegion(region, fills[region.id], handleRegionClick)
          )}
          {drawing.decorations.map((dec, i) => renderDecoration(dec, i))}
        </svg>
      </div>

      <button className={styles.resetBtn} onClick={handleReset}>
        🔄 Recomeçar
      </button>
    </div>
  )
}
