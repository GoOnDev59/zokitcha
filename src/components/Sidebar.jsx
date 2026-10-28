import { Bookmark, Compass, Headphones, Home, LibraryBig, Settings2, Sparkles } from 'lucide-react'
import Logo from './Logo'

const mainLinks = [
  { id: 'home', label: 'Discover', icon: Home },
  { id: 'browse', label: 'Explore books', icon: Compass },
  { id: 'shelf', label: 'My bookshelf', icon: LibraryBig },
]

export default function Sidebar({ view, setView, savedCount, mobileOpen, closeMobile }) {
  const navigate = (id) => { setView(id); closeMobile?.() }
  return (
    <>
      {mobileOpen && <button className="sidebar-scrim" aria-label="Close menu" onClick={closeMobile} />}
      <aside className={`sidebar ${mobileOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-top"><Logo /></div>
        <div className="sidebar-label">YOUR SPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          {mainLinks.map(({ id, label, icon: Icon }) => (
            <button key={id} className={`side-link ${view === id ? 'is-active' : ''}`} onClick={() => navigate(id)}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>
              {id === 'shelf' && savedCount > 0 && <span className="side-count">{savedCount}</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-label sidebar-label--space">PICK A MOOD</div>
        <nav className="mood-nav" aria-label="Browse by category">
          <button onClick={() => { navigate('browse'); }}><span className="mood-dot dot-sage" /> Slow living</button>
          <button onClick={() => navigate('browse')}><span className="mood-dot dot-rose" /> Fiction & stories</button>
          <button onClick={() => navigate('browse')}><span className="mood-dot dot-blue" /> Big ideas</button>
          <button onClick={() => navigate('browse')}><span className="mood-dot dot-ochre" /> Personal growth</button>
        </nav>
        <div className="sidebar-note">
          <span className="note-icon"><Sparkles size={17} /></span>
          <p>A little reading can change the whole shape of a day.</p>
          <span className="note-signature">— your quiet corner</span>
        </div>
        <div className="sidebar-bottom"><span className="online-dot" /> A library for curious minds <span className="sidebar-bottom-icon"><Headphones size={15} /></span></div>
      </aside>
    </>
  )
}
