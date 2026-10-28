import { motion } from 'framer-motion'
import { Bookmark, BookOpen, Star } from 'lucide-react'
import { useState } from 'react'

export default function BookCard({ book, index = 0, isSaved, onToggleSave, onOpen }) {
  const [imageFailed, setImageFailed] = useState(false)
  return (
    <motion.article className="book-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: Math.min(index * 0.045, 0.3) }}>
      <div className="book-cover-wrap" style={{ '--cover-tint': book.color }}>
        <button className="cover-button" onClick={() => onOpen(book)} aria-label={`View ${book.title}`}>
          {!imageFailed ? <img className="book-cover" src={book.cover} alt={`${book.title} book cover`} loading="lazy" onError={() => setImageFailed(true)} /> : <div className="cover-fallback"><span className="fallback-ornament">✳</span><span className="fallback-title">{book.title}</span><span className="fallback-author">{book.author}</span></div>}
          <span className="cover-hover"><BookOpen size={17} /> Quick look</span>
        </button>
        <button className={`save-book ${isSaved ? 'is-saved' : ''}`} onClick={() => onToggleSave(book.id)} aria-label={isSaved ? `Remove ${book.title} from shelf` : `Save ${book.title}`} title={isSaved ? 'Remove from shelf' : 'Save to shelf'}><Bookmark size={17} fill={isSaved ? 'currentColor' : 'none'} /></button>
      </div>
      <div className="book-meta"><span className="book-category">{book.category}</span><span className="book-rating"><Star size={12} fill="currentColor" /> {book.rating}</span></div>
      <button className="book-title-button" onClick={() => onOpen(book)}>{book.title}</button>
      <div className="book-author">{book.author}</div>
    </motion.article>
  )
}
