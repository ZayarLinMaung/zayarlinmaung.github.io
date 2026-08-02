import { useReveal } from '../hooks/useReveal'

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const { ref, visible } = useReveal()
  const classes = ['reveal', visible ? 'visible' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  )
}
