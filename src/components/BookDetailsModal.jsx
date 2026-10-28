import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Bookmark, BookOpen, Clock3, Star, X } from 'lucide-react'
import { useState } from 'react'

export default function BookDetailsModal({ book, onClose, onRead, onToggleSave, isSaved }) {
  const [imageFailed, setImageFailed] = useState(false)
  return <AnimatePresence>{book && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
    <motion.section className="details-modal" initial={{ opacity: 0, y: 18, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} transition={{ type: 'spring', damping: 24, stiffness: 250 }} role="dialog" aria-modal="true" aria-label={`${book.title} details`}>
      <button className="modal-close" onClick={onClose} aria-label="Close details"><X size={19} /></button>
      <div className="details-cover" style={{ '--cover-tint': book.color }}>{!imageFailed ? <img src={book.cover} alt={`${book.title} cover`} onError={() => setImageFailed(true)} /> : <div className="cover-fallback"><span className="fallback-ornament">✳</span><span className="fallback-title">{book.title}</span><span className="fallback-author">{book.author}</span></div>}</div>
      <div className="details-copy"><span className="details-category">{book.category} <span>·</span> {book.year < 0 ? 'c. 500 BCE' : book.year}</span><h2>{book.title}</h2><p className="details-author">by {book.author}</p><div className="details-stats"><span><Star size={15} fill="currentColor" /> {book.rating} <small>reader rating</small></span><span><BookOpen size={15} /> {book.pages} <small>pages</small></span><span><Clock3 size={15} /> {book.readTime} <small>approx.</small></span></div><p className="details-description">{book.description}</p><blockquote>“{book.quote}”</blockquote><div className="details-actions"><button className="button-primary" onClick={() => onRead(book)}>Open reader <ArrowRight size={16} /></button><button className={`button-save ${isSaved ? 'is-saved' : ''}`} onClick={() => onToggleSave(book.id)}><Bookmark size={16} fill={isSaved ? 'currentColor' : 'none'} /> {isSaved ? 'Saved to shelf' : 'Save for later'}</button></div><p className="preview-disclaimer">This is a reading preview with sample text, not a full digital edition.</p></div>
    </motion.section>
  </motion.div>}</AnimatePresence>
}
