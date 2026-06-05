import styles from './ColorPicker.module.css'

export const COLORS = [
  { name: 'Amarelo',    hex: '#FFD600' },
  { name: 'Laranja',    hex: '#FF8C00' },
  { name: 'Vermelho',   hex: '#FF3B3B' },
  { name: 'Rosa',       hex: '#FF6EB4' },
  { name: 'Roxo',       hex: '#9B5DE5' },
  { name: 'Azul',       hex: '#3A86FF' },
  { name: 'Azul Claro', hex: '#56CFE1' },
  { name: 'Verde',      hex: '#38C270' },
  { name: 'Marrom',     hex: '#A0522D' },
  { name: 'Branco',     hex: '#FFFFFF' },
  { name: 'Preto',      hex: '#000000' },
]

export default function ColorPicker({ selectedColor, onSelectColor }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Escolha uma cor!</p>
      <div className={styles.palette}>
        {COLORS.map((color) => (
          <button
            key={color.hex}
            className={`${styles.swatch} ${selectedColor === color.hex ? styles.selected : ''}`}
            style={{
              background: color.hex,
              border: color.hex === '#FFFFFF' ? '3px solid #ccc' : '3px solid transparent',
            }}
            title={color.name}
            aria-label={color.name}
            onClick={() => onSelectColor(color.hex)}
          />
        ))}
      </div>
    </div>
  )
}
