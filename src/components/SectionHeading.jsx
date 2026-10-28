import { ArrowRight } from 'lucide-react'

export default function SectionHeading({ eyebrow, title, action, onAction, note }) {
  return (
    <div className="section-heading">
      <div>{eyebrow && <div className="section-eyebrow">{eyebrow}</div>}<h2>{title}</h2>{note && <p>{note}</p>}</div>
      {action && <button className="text-action" onClick={onAction}>{action}<ArrowRight size={16} /></button>}
    </div>
  )
}
