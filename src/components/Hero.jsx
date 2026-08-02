import PixelCharacter from './PixelCharacter'
import SpeechBubble from './SpeechBubble'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="brand">
      <div className="hero-left">
        <div className="hero-copy">
          <p className="eyebrow">Hey there · DevOps · Malaysia</p>
          <h1 id="brand">Zayar Lin Maung</h1>
          <p className="lede">
            I turn messy systems into calm, reliable platforms—Go backends, Linux
            automation, and CI/CD you can trust in production.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              ▶ Let’s talk
            </a>
            <a className="btn btn-ghost" href="#experience">
              See my work
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
