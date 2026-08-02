import { useEffect, useState } from 'react'

const MESSAGE = 'I use Arch btw :)'

export default function SpeechBubble({ text = MESSAGE }) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let index = 0
    let cancelled = false
    let typeTimer
    let loopTimer
    let startTimer

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const charMs = reduced ? 45 : 160
    const pauseMs = reduced ? 2000 : 3200
    const beginMs = reduced ? 250 : 600

    const typeNext = () => {
      if (cancelled) return
      index += 1
      setShown(text.slice(0, index))
      if (index >= text.length) {
        setDone(true)
        loopTimer = window.setTimeout(() => {
          if (cancelled) return
          index = 0
          setShown('')
          setDone(false)
          typeTimer = window.setInterval(typeNext, charMs)
        }, pauseMs)
        window.clearInterval(typeTimer)
        return
      }
    }

    startTimer = window.setTimeout(() => {
      if (cancelled) return
      setShown('')
      setDone(false)
      index = 0
      typeTimer = window.setInterval(typeNext, charMs)
    }, beginMs)

    return () => {
      cancelled = true
      window.clearTimeout(startTimer)
      window.clearTimeout(loopTimer)
      window.clearInterval(typeTimer)
    }
  }, [text])

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
