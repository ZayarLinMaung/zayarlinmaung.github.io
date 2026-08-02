import PixelCharacter from './PixelCharacter'
import SpeechBubble from './SpeechBubble'
import HeroWorld from './HeroWorld'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="brand">
      <HeroWorld />

      <div className="hero-left">
        <div className="hero-copy">
          <div className="hero-window-bar">
            <span className="window-title">about.txt</span>
            <span className="window-dots" aria-hidden="true">
              <i /><i /><i />
            </span>
          </div>
          <p className="eyebrow">Player 1 · caffeine-powered · MY</p>
          <h1 id="brand">Zayar Lin Maung</h1>
          <p className="lede">
            I turn messy systems into calm, reliable platforms—Go backends, Linux
            automation, and CI/CD you can trust in production.
          </p>
          <p className="hero-flavor">
            Currently grinding: Arch ricing · Godot nights · green pipelines
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
        <div className="hero-nameplate">ZLM · LV.24</div>
        <PixelCharacter />
      </div>
    </section>
  )
}
