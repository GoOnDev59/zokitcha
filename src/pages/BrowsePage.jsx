import { ArrowDownWideNarrow, SlidersHorizontal } from 'lucide-react'
import { categories } from '../data/books'
import SectionHeading from '../components/SectionHeading'
import BookGrid from '../components/BookGrid'

export default function BrowsePage({ books, savedIds, onToggleSave, onOpen, activeCategory, setActiveCategory, sort, setSort, query }) {
  return <div className="page-content browse-page">
    <div className="browse-intro"><div><span className="section-eyebrow">A SHELF WITHOUT WALLS</span><h1>Follow your <em>curiosity.</em></h1><p>From stories that stay with you to ideas that shift your point of view.</p></div><div className="browse-stamp"><span>THE</span><strong>open<br />shelf</strong><span>EST. 2026</span></div></div>
    <div className="browse-controls"><div className="category-pills" role="group" aria-label="Filter by category">{categories.map((category) => <button key={category} className={activeCategory === category ? 'is-active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><label className="sort-select"><SlidersHorizontal size={15} /><span>Sort</span><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort books"><option value="recommended">Recommended</option><option value="rating">Top rated</option><option value="title">Title A–Z</option><option value="year">Oldest first</option></select><ArrowDownWideNarrow size={14} /></label></div>
    <div className="browse-results"><SectionHeading eyebrow={query ? 'SEARCH RESULTS' : 'THE COLLECTION'} title={query ? `Found for “${query}”` : activeCategory === 'All books' ? 'All books, all moods' : activeCategory} note={`${books.length} ${books.length === 1 ? 'book' : 'books'} to get lost in`} /><BookGrid books={books} savedIds={savedIds} onToggleSave={onToggleSave} onOpen={onOpen} /></div>
    <footer className="site-footer"><span>© 2026 Zokitcha E-Library</span><span>Take your time. The books aren't going anywhere.</span></footer>
  </div>
}
