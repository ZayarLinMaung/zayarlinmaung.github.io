import { roles } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-head">
        <p className="eyebrow">02 · Along the way</p>
        <h2>Things I’ve been building</h2>
        <p className="section-lead">
          Teaching, freelancing, and shipping multiplayer experiments—always with
          curiosity as the main fuel.
        </p>
      </div>
      <div className="timeline">
        {roles.map((role) => (
          <Reveal as="article" className="role" key={role.title}>
            <div className="role-meta">
              <time dateTime={role.dateTime}>{role.period}</time>
              <h3>{role.title}</h3>
            </div>
            <div className="role-body">
              {role.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
