/** Decorative pixel scenery for the hero — pure atmosphere. */
export default function HeroWorld() {
  const light = '#8bac0f'
  const mid = '#306230'
  const pale = '#9bbc0f'

  return (
    <div className="hero-world" aria-hidden="true">
      <svg className="hero-sun" viewBox="0 0 48 48" shapeRendering="crispEdges">
        <rect x="16" y="16" width="16" height="16" fill={light} />
        <rect x="12" y="20" width="4" height="8" fill={light} />
        <rect x="32" y="20" width="4" height="8" fill={light} />
        <rect x="20" y="12" width="8" height="4" fill={light} />
        <rect x="20" y="32" width="8" height="4" fill={light} />
        <rect x="8" y="8" width="4" height="4" fill={mid} />
        <rect x="36" y="8" width="4" height="4" fill={mid} />
        <rect x="8" y="36" width="4" height="4" fill={mid} />
        <rect x="36" y="36" width="4" height="4" fill={mid} />
        <rect x="22" y="22" width="4" height="4" fill={pale} />
      </svg>

      <svg className="hero-cloud hero-cloud-a" viewBox="0 0 64 24" shapeRendering="crispEdges">
        <rect x="12" y="8" width="40" height="8" fill={pale} />
        <rect x="20" y="4" width="24" height="4" fill={pale} />
        <rect x="16" y="16" width="16" height="4" fill={pale} />
        <rect x="8" y="12" width="8" height="4" fill={light} />
      </svg>
      <svg className="hero-cloud hero-cloud-b" viewBox="0 0 48 20" shapeRendering="crispEdges">
        <rect x="8" y="8" width="32" height="6" fill={pale} />
        <rect x="14" y="4" width="18" height="4" fill={pale} />
        <rect x="4" y="10" width="6" height="4" fill={light} />
      </svg>

      <div className="hero-float hero-float-1">
        <span>{'>_'}</span>
      </div>
      <div className="hero-float hero-float-2">
        <span>mug</span>
      </div>
      <div className="hero-float hero-float-3">
        <span>[A]</span>
      </div>

      <div className="hero-grass">
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            className="blade"
            style={{ left: `${4 + i * 5.4}%`, animationDelay: `${(i % 5) * 0.15}s` }}
          />
        ))}
      </div>

      <div className="hero-path" />

      <div className="hero-stamp">
        <span className="stamp-led" />
        POWER
      </div>
    </div>
  )
}
