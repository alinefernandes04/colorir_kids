import styles from './DrawingPicker.module.css'

// Mini preview SVG de cada desenho
function Thumbnail({ drawing }) {
  return (
    <svg
      viewBox={drawing.viewBox}
      width="60"
      height="60"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.thumbSvg}
    >
      {drawing.regions.map((region) => {
        const props = {
          key: region.id,
          fill: '#e0e0e0',
          stroke: '#999',
          strokeWidth: 4,
        }
        if (region.type === 'polygon') return <polygon {...props} points={region.points} />
        if (region.type === 'circle')  return <circle  {...props} cx={region.cx} cy={region.cy} r={region.r} />
        if (region.type === 'path')    return <path    {...props} d={region.d} />
        return null
      })}
    </svg>
  )
}

export default function DrawingPicker({ drawings, currentId, onSelect }) {
  return (
    <div className={styles.wrapper}>
      {drawings.map((drawing) => (
        <button
          key={drawing.id}
          className={`${styles.thumb} ${currentId === drawing.id ? styles.active : ''}`}
          onClick={() => onSelect(drawing.id)}
          title={drawing.label}
          aria-label={drawing.label}
        >
          <Thumbnail drawing={drawing} />
          <span className={styles.label}>{drawing.label}</span>
        </button>
      ))}
    </div>
  )
}
