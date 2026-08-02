import { contact } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-head">
        <p className="eyebrow">05 · Your move</p>
        <h2>Let’s make something cool</h2>
        <p className="section-lead">
          Got a DevOps, platform, or full-stack idea? I’d love to hear about it.
        </p>
      </div>
      <Reveal className="contact-panel">
        <a className="contact-link" href={`mailto:${contact.email}`}>
          <span className="contact-label">Email</span>
          <span className="contact-value">{contact.email}</span>
        </a>
        <a className="contact-link" href={contact.phoneHref}>
          <span className="contact-label">Phone</span>
          <span className="contact-value">{contact.phoneDisplay}</span>
        </a>
        <div className="contact-link static">
          <span className="contact-label">Based in</span>
          <span className="contact-value">
            {contact.addressLines[0]}
            <br />
            {contact.addressLines[1]}
          </span>
        </div>
        <div className="contact-meta">
          <p>
            <span>Languages</span> {contact.languages}
          </p>
          <p>
            <span>Born</span> {contact.born}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
