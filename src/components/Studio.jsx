import { studio } from '../data'
import Reveal from './Reveal'

export default function Studio() {
  return (
    <section id="studio" className="section studio">
      <div className="section-head">
        <p className="eyebrow">04 · SIDE QUESTS</p>
        <h2>Studio & practice</h2>
        <p className="section-lead">
          Hardware craft, Arch Linux workflows, and game systems built after hours.
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
