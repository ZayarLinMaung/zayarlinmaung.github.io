import { education } from '../data'
import Reveal from './Reveal'
import EduIcon from './EduIcon'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-head">
        <p className="eyebrow">03 · Always learning</p>
        <h2>Where I leveled up</h2>
        <p className="section-lead">
          Software, networks, and a bit of business strategy—because good systems
          need both code and context.
        </p>
      </div>
      <div className="edu-list">
        {education.map((item) => (
          <Reveal as="article" className="edu" key={item.title}>
            <div className="edu-copy">
              <time dateTime={item.dateTime}>{item.period}</time>
              <h3>{item.title}</h3>
              <p className="org">{item.org}</p>
              <p>{item.body}</p>
            </div>
            <EduIcon type={item.icon} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
