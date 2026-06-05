import { useRef, useCallback } from 'react'

export function useSound() {
  const ctxRef = useRef(null)

  function getCtx() {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }
    return ctxRef.current
  }

  // Estalinho curto e alegre ao colorir uma região
  const playClick = useCallback(() => {
    try {
      const ctx = getCtx()
      const now = ctx.currentTime

      // Dois osciladores sobrepostos dão o "pop" alegre
      const freqs = [880, 1100]
      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now)
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.06)

        gain.gain.setValueAtTime(0.18 - i * 0.04, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12)

        osc.start(now)
        osc.stop(now + 0.13)
      })
    } catch (_) {}
  }, [])

  // Fanfarrinha de conclusão — sequência de notas ascendentes
  const playComplete = useCallback(() => {
    try {
      const ctx = getCtx()
      const now = ctx.currentTime

      const melody = [
        { freq: 523, t: 0.00 },   // Dó
        { freq: 659, t: 0.12 },   // Mi
        { freq: 784, t: 0.24 },   // Sol
        { freq: 1047, t: 0.36 },  // Dó agudo
        { freq: 1047, t: 0.52 },  // Dó agudo (sustain)
      ]

      melody.forEach(({ freq, t }) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.type = 'triangle'
        osc.frequency.setValueAtTime(freq, now + t)

        const duration = t === 0.52 ? 0.4 : 0.14
        gain.gain.setValueAtTime(0.22, now + t)
        gain.gain.exponentialRampToValueAtTime(0.001, now + t + duration)

        osc.start(now + t)
        osc.stop(now + t + duration + 0.05)
      })
    } catch (_) {}
  }, [])

  return { playClick, playComplete }
}
