import { Bell, Menu, Search, X } from 'lucide-react'

export default function Header({ query, setQuery, onMenu, view, setView }) {
  const titles = { home: 'Your reading room', browse: 'The whole collection', shelf: 'Your bookshelf' }
  return (
    <header className="topbar">
      <button className="mobile-menu icon-button" onClick={onMenu} aria-label="Open navigation"><Menu size={21} /></button>
      <div className="topbar-context"><span className="eyebrow">WEDNESDAY, OCTOBER 28</span><span className="topbar-title">{titles[view] || 'Your reading room'}</span></div>
      <label className="search-box">
        <Search size={17} />
        <input value={query} onChange={(e) => { setQuery(e.target.value); if (e.target.value) setView('browse') }} placeholder="Find your next favourite..." aria-label="Search books" />
        {query && <button type="button" className="search-clear" onClick={() => setQuery('')} aria-label="Clear search"><X size={15} /></button>}
        {!query && <kbd>⌘ K</kbd>}
      </label>
      <button className="icon-button notification-button" aria-label="Notifications"><Bell size={19} strokeWidth={1.7} /><i /></button>
      <div className="avatar" aria-label="Your profile">O</div>
    </header>
  )
}
