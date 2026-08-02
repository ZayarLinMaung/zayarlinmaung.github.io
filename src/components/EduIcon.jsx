const C = {
  dark: '#0f380f',
  mid: '#306230',
  light: '#8bac0f',
  pale: '#9bbc0f',
}

function P({ x, y, w = 1, h = 1, fill }) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} />
}

function IconCode() {
  return (
    <svg viewBox="0 0 48 48" width="96" height="96" shapeRendering="crispEdges" aria-hidden="true">
      {/* monitor */}
      <P x={6} y={8} w={36} h={26} fill={C.dark} />
      <P x={8} y={10} w={32} h={20} fill={C.mid} />
      <P x={10} y={12} w={2} h={2} fill={C.pale} />
      <P x={14} y={12} w={12} h={2} fill={C.light} />
      <P x={10} y={16} w={2} h={2} fill={C.pale} />
      <P x={14} y={16} w={8} h={2} fill={C.pale} />
      <P x={10} y={20} w={2} h={2} fill={C.pale} />
      <P x={14} y={20} w={16} h={2} fill={C.light} />
      <P x={10} y={24} w={2} h={2} fill={C.pale} />
      <P x={14} y={24} w={6} h={2} fill={C.mid} />
      {/* stand */}
      <P x={20} y={34} w={8} h={4} fill={C.dark} />
      <P x={14} y={38} w={20} h={3} fill={C.dark} />
      {/* brackets */}
      <P x={2} y={14} w={2} h={10} fill={C.pale} />
      <P x={4} y={14} w={2} h={2} fill={C.pale} />
      <P x={4} y={22} w={2} h={2} fill={C.pale} />
      <P x={44} y={14} w={2} h={10} fill={C.pale} />
      <P x={42} y={14} w={2} h={2} fill={C.pale} />
      <P x={42} y={22} w={2} h={2} fill={C.pale} />
    </svg>
  )
}

function IconBrief() {
  return (
    <svg viewBox="0 0 48 48" width="96" height="96" shapeRendering="crispEdges" aria-hidden="true">
      {/* briefcase */}
      <P x={8} y={18} w={32} h={20} fill={C.dark} />
      <P x={10} y={20} w={28} h={16} fill={C.mid} />
      <P x={18} y={12} w={12} h={8} fill={C.dark} />
      <P x={20} y={14} w={8} h={4} fill={C.mid} />
      <P x={22} y={24} w={4} h={4} fill={C.pale} />
      <P x={10} y={28} w={28} h={2} fill={C.light} />
      {/* chart bars */}
      <P x={12} y={8} w={4} h={6} fill={C.light} />
      <P x={18} y={4} w={4} h={10} fill={C.pale} />
      <P x={24} y={6} w={4} h={8} fill={C.light} />
      <P x={30} y={2} w={4} h={12} fill={C.pale} />
    </svg>
  )
}

function IconNetwork() {
  return (
    <svg viewBox="0 0 48 48" width="96" height="96" shapeRendering="crispEdges" aria-hidden="true">
      {/* nodes */}
      <P x={20} y={4} w={8} h={8} fill={C.pale} />
      <P x={4} y={20} w={8} h={8} fill={C.light} />
      <P x={36} y={20} w={8} h={8} fill={C.light} />
      <P x={12} y={36} w={8} h={8} fill={C.mid} />
      <P x={28} y={36} w={8} h={8} fill={C.mid} />
      {/* links */}
      <P x={22} y={12} w={4} h={8} fill={C.dark} />
      <P x={12} y={22} w={10} h={3} fill={C.dark} />
      <P x={26} y={22} w={10} h={3} fill={C.dark} />
      <P x={14} y={28} w={3} h={8} fill={C.dark} />
      <P x={31} y={28} w={3} h={8} fill={C.dark} />
      <P x={20} y={24} w={8} h={3} fill={C.mid} />
      {/* hub glow */}
      <P x={22} y={6} w={4} h={4} fill={C.light} />
    </svg>
  )
}

const ICONS = {
  code: IconCode,
  brief: IconBrief,
  network: IconNetwork,
}

export default function EduIcon({ type }) {
  const Icon = ICONS[type] || IconCode
  return (
    <div className="edu-icon" aria-hidden="true">
      <Icon />
    </div>
  )
}
