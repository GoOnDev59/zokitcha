import { BookOpen } from 'lucide-react'

export default function Logo({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="Zokitcha home">
      <span className="brand-mark"><BookOpen size={21} strokeWidth={1.8} /></span>
      {!compact && <span className="brand-name">zokitcha<span>.</span><small>THE E-LIBRARY</small></span>}
    </a>
  )
}
