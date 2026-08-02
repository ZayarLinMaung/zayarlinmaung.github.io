const C = {
  dark: '#0f380f',
  mid: '#306230',
  light: '#8bac0f',
  pale: '#9bbc0f',
}

function P({ x, y, w = 1, h = 1, fill }) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} />
}

function PixelArch() {
  return (
    <svg viewBox="0 0 32 32" width="56" height="56" shapeRendering="crispEdges" aria-hidden="true">
      <P x={15} y={1} w={2} h={2} fill={C.pale} />
      <P x={14} y={3} w={4} h={2} fill={C.pale} />
      <P x={13} y={5} w={6} h={2} fill={C.pale} />
      <P x={12} y={7} w={3} h={2} fill={C.light} />
      <P x={17} y={7} w={3} h={2} fill={C.light} />
      <P x={11} y={9} w={3} h={2} fill={C.light} />
      <P x={18} y={9} w={3} h={2} fill={C.light} />
      <P x={10} y={11} w={3} h={2} fill={C.mid} />
      <P x={19} y={11} w={3} h={2} fill={C.mid} />
      <P x={9} y={13} w={3} h={2} fill={C.mid} />
      <P x={20} y={13} w={3} h={2} fill={C.mid} />
      <P x={12} y={13} w={8} h={2} fill={C.pale} />
      <P x={11} y={15} w={10} h={1} fill={C.light} />
      <P x={8} y={15} w={3} h={2} fill={C.mid} />
      <P x={21} y={15} w={3} h={2} fill={C.mid} />
      <P x={7} y={17} w={3} h={2} fill={C.dark} />
      <P x={22} y={17} w={3} h={2} fill={C.dark} />
      <P x={6} y={19} w={3} h={2} fill={C.dark} />
      <P x={23} y={19} w={3} h={2} fill={C.dark} />
      <P x={5} y={21} w={4} h={2} fill={C.dark} />
      <P x={23} y={21} w={4} h={2} fill={C.dark} />
      <P x={4} y={23} w={4} h={2} fill={C.dark} />
      <P x={24} y={23} w={4} h={2} fill={C.dark} />
      <P x={3} y={25} w={5} h={2} fill={C.mid} />
      <P x={24} y={25} w={5} h={2} fill={C.mid} />
      <P x={2} y={27} w={6} h={2} fill={C.light} />
      <P x={24} y={27} w={6} h={2} fill={C.light} />
      <P x={14} y={9} w={4} h={3} fill={C.pale} />
      <P x={13} y={17} w={2} h={2} fill={C.mid} />
      <P x={17} y={17} w={2} h={2} fill={C.mid} />
    </svg>
  )
}

function PixelTerminal() {
  return (
    <svg viewBox="0 0 28 20" width="56" height="40" shapeRendering="crispEdges" aria-hidden="true">
      <P x={1} y={1} w={26} h={18} fill={C.dark} />
      <P x={2} y={2} w={24} h={3} fill={C.mid} />
      <P x={3} y={3} w={2} h={1} fill={C.light} />
      <P x={6} y={3} w={2} h={1} fill={C.pale} />
      <P x={9} y={3} w={2} h={1} fill={C.light} />
      <P x={4} y={8} w={2} h={2} fill={C.pale} />
      <P x={7} y={8} w={10} h={2} fill={C.light} />
      <P x={4} y={12} w={2} h={2} fill={C.pale} />
      <P x={7} y={12} w={2} h={2} fill={C.pale} />
      <P x={10} y={12} w={2} h={2} fill={C.mid} />
    </svg>
  )
}

function PixelGitBranch() {
  return (
    <svg viewBox="0 0 20 24" width="40" height="48" shapeRendering="crispEdges" aria-hidden="true">
      <P x={4} y={2} w={4} h={4} fill={C.pale} />
      <P x={5} y={6} w={2} h={10} fill={C.mid} />
      <P x={4} y={16} w={4} h={4} fill={C.light} />
      <P x={7} y={8} w={6} h={2} fill={C.mid} />
      <P x={12} y={6} w={2} h={4} fill={C.mid} />
      <P x={11} y={3} w={4} h={4} fill={C.pale} />
    </svg>
  )
}

/** Icons scoped to the character stage so they stay clear of about.txt on mobile. */
export default function HeroFloats() {
  return (
    <div className="hero-floats" aria-hidden="true">
      <div className="hero-float hero-float-1" title="Terminal">
        <PixelTerminal />
      </div>
      <div className="hero-float hero-float-2" title="Arch Linux">
        <PixelArch />
      </div>
      <div className="hero-float hero-float-5" title="Git">
        <PixelGitBranch />
      </div>
    </div>
  )
}
