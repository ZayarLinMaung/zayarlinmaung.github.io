import { useEffect, useState } from 'react'

const LINES = [
  'I use Arch btw :)',
  'pip install caffeine',
  'git commit -m "ship"',
  'sudo make coffee',
  'docker compose up -d',
  'pacman -Syu && chill',
  'kubectl get pods --me',
  'npm run build:vibes',
  'ssh into the weekend',
  'CI green = happy',
  'rtfm then ask nicely',
  'hyprland > mouse',
  'godot go brrr',
  'yay -S motivation',
  'no place like ~/',
  'make test && dance',
]

export default function SpeechBubble({ lines = LINES }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)
  const text = lines[lineIndex % lines.length]

  useEffect(() => {
    let index = 0
    let cancelled = false
    let typeTimer
    let loopTimer
    let startTimer

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const charMs = reduced ? 45 : 160
    const pauseMs = reduced ? 2000 : 3200
    const beginMs = reduced ? 200 : 400

    const typeNext = () => {
      if (cancelled) return
      index += 1
      setShown(text.slice(0, index))
      if (index >= text.length) {
        setDone(true)
        loopTimer = window.setTimeout(() => {
          if (cancelled) return
          setLineIndex((n) => (n + 1) % lines.length)
        }, pauseMs)
        window.clearInterval(typeTimer)
      }
    }

    setShown('')
    setDone(false)
    startTimer = window.setTimeout(() => {
      if (cancelled) return
      index = 0
      typeTimer = window.setInterval(typeNext, charMs)
    }, beginMs)

    return () => {
      cancelled = true
      window.clearTimeout(startTimer)
      window.clearTimeout(loopTimer)
      window.clearInterval(typeTimer)
    }
  }, [text, lines.length])

  return (
    <div className="speech-bubble" role="note" aria-label={text}>
      <p className="speech-text">
        {shown}
        <span className={`speech-cursor${done ? ' blink' : ''}`} aria-hidden="true">
          █
        </span>
      </p>
    </div>
  )
}
