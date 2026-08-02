import { studio } from '../data'
import Reveal from './Reveal'

export default function Studio() {
  return (
    <section id="studio" className="section studio">
      <div className="section-head">
        <p className="eyebrow">04 · For the fun of it</p>
        <h2>Side projects & hobbies</h2>
        <p className="section-lead">
          Keyboards, Arch tinkering, and game prototypes—the stuff I happily stay
          up late for.
        </p>
      </div>
      <div className="studio-grid">
        {studio.map((item) => (
          <Reveal as="article" className="studio-item" key={item.title}>
            <span className="studio-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <time dateTime={item.dateTime}>{item.period}</time>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
