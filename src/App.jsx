import { useState } from 'react'
import ColorPicker, { COLORS } from './components/ColorPicker'
import DrawingCanvas from './components/DrawingCanvas'
import DrawingPicker from './components/DrawingPicker'
import sol from './drawings/sol'
import estrelas from './drawings/estrelas'
import coracoes from './drawings/coracoes'
import styles from './App.module.css'

const DRAWINGS = [sol, estrelas, coracoes]

export default function App() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].hex)
  const [currentDrawingId, setCurrentDrawingId] = useState(sol.id)

  const currentDrawing = DRAWINGS.find((d) => d.id === currentDrawingId)

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>🎨 Hora de Colorir!</h1>

      <DrawingCanvas drawing={currentDrawing} selectedColor={selectedColor} />

      <ColorPicker selectedColor={selectedColor} onSelectColor={setSelectedColor} />

      <DrawingPicker
        drawings={DRAWINGS}
        currentId={currentDrawingId}
        onSelect={setCurrentDrawingId}
      />
    </main>
  )
}
