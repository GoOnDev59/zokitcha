import { Bookmark, BookOpen, Heart, Sparkles } from 'lucide-react'
import BookGrid from '../components/BookGrid'
import SectionHeading from '../components/SectionHeading'

export default function ShelfPage({ books, savedIds, onToggleSave, onOpen, onExplore }) {
  const savedBooks = books.filter((book) => savedIds.includes(book.id))
  return <div className="page-content shelf-page">
    <div className="shelf-intro"><span className="section-eyebrow">YOUR LITTLE COLLECTION</span><h1>Books to <em>come back to.</em></h1><p>Every book you save is a thought worth keeping nearby.</p><div className="shelf-stat-row"><div><strong>{savedBooks.length.toString().padStart(2, '0')}</strong><span>saved books</span></div><div className="shelf-stat-divider" /><div><strong>{savedBooks.reduce((sum, book) => sum + book.pages, 0).toLocaleString()}</strong><span>pages waiting</span></div><div className="shelf-stat-flower">✳</div></div></div>
    {savedBooks.length ? <section className="content-section"><SectionHeading eyebrow="SAVED FOR A QUIETER MOMENT" title="Your bookshelf" note="No rush. Read them when you're ready." /><BookGrid books={savedBooks} savedIds={savedIds} onToggleSave={onToggleSave} onOpen={onOpen} /></section> : <div className="empty-shelf"><div className="empty-shelf-illustration"><div className="empty-book empty-book--one" /><div className="empty-book empty-book--two" /><div className="empty-book empty-book--three" /><span>✳</span></div><span className="section-eyebrow">A SPACE TO FILL</span><h2>Your shelf is waiting for a story.</h2><p>When a book catches your eye, tap the little bookmark. We'll keep it here for you.</p><button className="button-primary" onClick={onExplore}><BookOpen size={16} /> Find your first book</button></div>}
    <div className="shelf-note"><Heart size={17} /><span>“There is no friend as loyal as a book.”</span><Sparkles size={15} /></div>
    <footer className="site-footer"><span>© 2026 Zokitcha E-Library</span><span>Made for curious minds, with a little care</span></footer>
  </div>
}
