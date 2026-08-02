import { education } from '../data'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-head">
        <p className="eyebrow">03 · SAVE POINTS</p>
        <h2>Education</h2>
        <p className="section-lead">
          Software engineering, networks, and business strategy in parallel.
        </p>
      </div>
      <div className="edu-list">
        {education.map((item) => (
          <Reveal as="article" className="edu" key={item.title}>
            <time dateTime={item.dateTime}>{item.period}</time>
            <h3>{item.title}</h3>
            <p className="org">{item.org}</p>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
