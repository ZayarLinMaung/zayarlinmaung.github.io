import { skills } from '../data'

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <div className="section-head">
        <p className="eyebrow">01 · What I bring</p>
        <h2>Tools I love using</h2>
        <p className="section-lead">
          A DevOps heart with full-stack hands—comfortable from bare metal up to
          cloud-native delivery.
        </p>
      </div>
      <ul className="skill-rail">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}
