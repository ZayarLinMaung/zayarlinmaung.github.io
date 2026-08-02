import PixelCharacter from './PixelCharacter'
import SpeechBubble from './SpeechBubble'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="brand">
      <div className="hero-left">
        <div className="hero-copy">
          <p className="eyebrow">▼ PLAYER 1 · MY</p>
          <h1 id="brand">Zayar Lin Maung</h1>
          <p className="lede">
            Turning complex systems into reliable, high-performance platforms— Go backends,
            Linux automation, and production-ready CI/CD.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              ▶ A - Start
            </a>
            <a className="btn btn-ghost" href="#experience">
              B - Select
            </a>
          </div>
        </div>
      </div>
      <div className="hero-character">
        <SpeechBubble />
        <PixelCharacter />
      </div>
    </section>
  )
}
