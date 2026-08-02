import { skills } from '../data'

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <div className="section-head">
        <p className="eyebrow">01 · SKILL MATRIX</p>
        <h2>Areas of expertise</h2>
        <p className="section-lead">
          Full-stack fluency with a DevOps core—from bare metal to cloud-native delivery.
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
