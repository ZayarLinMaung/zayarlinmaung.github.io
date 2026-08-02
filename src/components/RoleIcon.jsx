const C = {
  dark: '#0f380f',
  mid: '#306230',
  light: '#8bac0f',
  pale: '#9bbc0f',
}

function P({ x, y, w = 1, h = 1, fill }) {
  return <rect x={x} y={y} width={w} height={h} fill={fill} />
}

function IconFreelance() {
  return (
    <svg viewBox="0 0 48 48" width="96" height="96" shapeRendering="crispEdges" aria-hidden="true">
      {/* laptop */}
      <P x={6} y={10} w={36} h={22} fill={C.dark} />
      <P x={8} y={12} w={32} h={16} fill={C.mid} />
      <P x={10} y={14} w={2} h={2} fill={C.pale} />
      <P x={14} y={14} w={14} h={2} fill={C.light} />
      <P x={10} y={18} w={2} h={2} fill={C.pale} />
      <P x={14} y={18} w={10} h={2} fill={C.pale} />
      <P x={10} y={22} w={18} h={2} fill={C.light} />
      <P x={4} y={32} w={40} h={4} fill={C.dark} />
      <P x={18} y={34} w={12} h={2} fill={C.mid} />
      {/* wrench accent */}
      <P x={34} y={6} w={8} h={3} fill={C.pale} />
      <P x={38} y={6} w={3} h={10} fill={C.light} />
    </svg>
  )
}

function IconGame() {
  return (
    <svg viewBox="0 0 48 48" width="96" height="96" shapeRendering="crispEdges" aria-hidden="true">
      {/* gamepad body */}
      <P x={6} y={16} w={36} h={18} fill={C.dark} />
      <P x={8} y={18} w={32} h={14} fill={C.mid} />
      {/* D-pad */}
      <P x={14} y={20} w={4} h={10} fill={C.pale} />
      <P x={11} y={23} w={10} h={4} fill={C.pale} />
      {/* buttons */}
      <P x={30} y={21} w={4} h={4} fill={C.light} />
      <P x={34} y={25} w={4} h={4} fill={C.pale} />
      <P x={26} y={25} w={4} h={4} fill={C.pale} />
      <P x={30} y={29} w={4} h={4} fill={C.light} />
      {/* grips */}
      <P x={2} y={22} w={4} h={10} fill={C.dark} />
      <P x={42} y={22} w={4} h={10} fill={C.dark} />
      {/* screen notch */}
      <P x={20} y={12} w={8} h={4} fill={C.light} />
    </svg>
  )
}

function IconTeach() {
  return (
    <svg viewBox="0 0 48 48" width="96" height="96" shapeRendering="crispEdges" aria-hidden="true">
      {/* board */}
      <P x={6} y={6} w={36} h={24} fill={C.dark} />
      <P x={8} y={8} w={32} h={20} fill={C.mid} />
      <P x={10} y={12} w={16} h={2} fill={C.pale} />
      <P x={10} y={16} w={20} h={2} fill={C.light} />
      <P x={10} y={20} w={12} h={2} fill={C.pale} />
      {/* stand */}
      <P x={22} y={30} w={4} h={6} fill={C.dark} />
      <P x={16} y={36} w={16} h={3} fill={C.dark} />
      {/* people dots */}
      <P x={14} y={40} w={4} h={4} fill={C.light} />
      <P x={22} y={40} w={4} h={4} fill={C.pale} />
      <P x={30} y={40} w={4} h={4} fill={C.light} />
    </svg>
  )
}

const ICONS = {
  freelance: IconFreelance,
  game: IconGame,
  teach: IconTeach,
}

export default function RoleIcon({ type }) {
  const Icon = ICONS[type] || IconFreelance
  return (
    <div className="role-icon" aria-hidden="true">
      <Icon />
    </div>
  )
}
