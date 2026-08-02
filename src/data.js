export const navLinks = [
  { href: '#expertise', label: 'Skills' },
  { href: '#experience', label: 'Journey' },
  { href: '#education', label: 'Learning' },
  { href: '#studio', label: 'After Hours' },
  { href: '#contact', label: 'Say Hi' },
]

export const skills = [
  'DevOps',
  'Back-End Development',
  'Front-End Development',
  'Linux',
  'Computer Vision & ML',
  'Game Development',
  'Hardware & Systems Assembly',
  '3D Modeling',
]

export const roles = [
  {
    dateTime: '2025-01',
    period: 'Jan 2025 — Present',
    title: 'Freelance Software Developer',
    paragraphs: [
      'I help ideas become real products—building responsive web and cross-platform apps with Go, PostgreSQL, Node.js, MongoDB, React, and Tailwind. From clean APIs to snappy UIs, I care about work that feels good to use and easy to maintain.',
      'Along the way I shipped a terminal UI that tames multi-server SSH profiles, plus real-time object-tracking and pose-detection pipelines with Python, OpenCV, and YOLOv8—running happily on local hardware acceleration.',
    ],
  },
  {
    dateTime: '2025-10',
    period: 'Oct 2025 — Present',
    title: 'Indie Game Developer',
    paragraphs: [
      'Currently cooking an RTS/MOBA prototype: Nakama + PostgreSQL for sessions, matchmaking, and fair authoritative sync, with a lean Godot 4 (GDScript) loop that mixes 2D physics/navigation and 3D puppets so multiplayer stays smooth without melting the CPU.',
    ],
  },
  {
    dateTime: '2023-02',
    period: 'Feb 2023 — May 2024',
    title: 'Trainer at Genesis Programming, Yangon',
    paragraphs: [
      'I started Genesis Programming to make computer science feel approachable. Through workshops and one-on-one mentoring, I helped 70+ students finish real projects and get ready for internships and junior roles—curriculum, materials, and career chats included.',
    ],
  },
]

export const education = [
  {
    dateTime: '2024-11',
    period: 'Nov 2024 — Present',
    title: 'BSc Software Engineering',
    org: 'Asia Pacific University, Kuala Lumpur',
    body: 'Still leveling up in software engineering—data structures, architecture, databases, distributed systems, and friends. Right now I’m leading a team cloud-native app with Go, PostgreSQL, and React, with CI/CD and tests baked in from day one.',
    icon: 'code',
  },
  {
    dateTime: '2024-01',
    period: 'Jan 2024 — Jun 2024',
    title: 'Master of Business Administration',
    org: 'Swiss School of Business Research, Zürich (Distant) · Honors',
    body: 'Graduated with Honors after diving into process optimization, teamwork across disciplines, and decisions backed by data. It’s the people-and-priorities side of shipping platforms—and it pairs surprisingly well with DevOps.',
    icon: 'brief',
  },
  {
    dateTime: '2019-01',
    period: 'Jan 2019 — Feb 2022',
    title: 'HND Network Engineering',
    org: 'Pearson University, London (Distant) · Merit',
    body: 'Graduated with Merit after lots of hands-on labs: protocols, routing & switching, LAN/WAN design, security, and troubleshooting. Capstone was a campus network designed to stay reliable when things get busy.',
    icon: 'network',
  },
]

export const studio = [
  {
    tag: 'Hardware',
    title: 'Custom Mechanical Keyboards',
    body: 'I build keyboards the long way—layouts, switches, hand-wired PCBs, QMK/VIA firmware, and 3D-printed cases—then keep tweaking until typing feels just right.',
    dateTime: '2021-02',
    period: 'Feb 2021 — Present',
  },
  {
    tag: 'Systems',
    title: 'Linux Workstation Optimization',
    body: 'My daily driver is a minimal, keyboard-first Arch Linux setup with tiling compositors, custom scripts, and automated dotfiles—less clicking, more flow.',
    dateTime: '2020-03',
    period: 'Mar 2020 — Present',
  },
  {
    tag: 'Games',
    title: 'Godot 4 Development',
    body: 'After hours you’ll find me in Godot 4, prototyping navigation, physics, and networked bits—always hunting for that smooth-feel frame time.',
    dateTime: '2025-10',
    period: 'Oct 2025 — Present',
  },
  {
    tag: 'Art',
    title: '3D Art & Asset Pipeline',
    body: 'I model and texture low-poly assets in Blender, play with cel-shading, and trim meshes so games stay light on draw calls and memory.',
    period: 'Ongoing',
  },
]

export const contact = {
  email: 'zayarlinmaung.gruvbox@gmail.com',
  phoneDisplay: '011-1463-5369',
  phoneHref: 'tel:+601114635369',
  addressLines: [
    'G-16-01 Zeta Residence, One South,',
    'Seri Kembangan 43300, Malaysia',
  ],
  languages: 'Myanmar · English',
  born: '18 Sep 2002 · Yangon, Myanmar',
}
