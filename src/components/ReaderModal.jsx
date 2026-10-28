import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Bookmark, BookOpen, X } from 'lucide-react'
import { useEffect } from 'react'

export default function ReaderModal({ book, page, setPage, onClose, onToggleSave, isSaved }) {
  const paragraphs = book?.sample || []
  const totalPages = Math.max(1, paragraphs.length)
  useEffect(() => {
    if (!book) return
    const onKey = (e) => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') setPage((p) => Math.min(totalPages - 1, p + 1)); if (e.key === 'ArrowLeft') setPage((p) => Math.max(0, p - 1)) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [book, onClose, setPage, totalPages])
  return <AnimatePresence>{book && <motion.div className="modal-backdrop reader-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
    <motion.section className="reader-modal" initial={{ opacity: 0, y: 22, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} transition={{ type: 'spring', damping: 25, stiffness: 230 }} role="dialog" aria-modal="true" aria-label={`Read ${book.title}`}>
      <div className="reader-topbar"><div className="reader-brand"><BookOpen size={17} /><span>ZOKITCHA <i>/</i> READER</span></div><div className="reader-top-actions"><button className={`reader-icon ${isSaved ? 'is-saved' : ''}`} onClick={() => onToggleSave(book.id)} aria-label="Save book"><Bookmark size={17} fill={isSaved ? 'currentColor' : 'none'} /></button><button className="reader-icon" onClick={onClose} aria-label="Close reader"><X size={19} /></button></div></div>
      <div className="reader-stage"><div className="reader-book" key={`${book.id}-${page}`}><div className="reader-page reader-page--left"><span className="page-overline">{book.category.toUpperCase()}</span><div className="page-ornament">✳</div><h2>{book.title}</h2><p className="reader-author">{book.author}</p><div className="page-rule" /><p className="reader-blurb">{book.description}</p><span className="page-number">{page * 2 + 1}</span></div><div className="reader-page reader-page--right"><span className="page-overline">{page === 0 ? 'A LITTLE SOMETHING TO BEGIN' : 'KEEP TURNING'}</span><p className="reader-paragraph">{paragraphs[page] || 'Let the next idea find you when you are ready. Every good book leaves a little room for your own thoughts.'}</p><p className="reader-paragraph reader-paragraph--muted">{page === 0 ? book.quote : 'Take your time. There is nowhere else you need to be right now.'}</p><span className="page-number">{page * 2 + 2}</span></div></div></div>
      <div className="reader-controls"><div className="reader-progress-label"><span>PREVIEW EDITION</span><span>Spread {page + 1} of {totalPages}</span></div><div className="reader-progress"><span style={{ width: `${((page + 1) / totalPages) * 100}%` }} /></div><div className="reader-control-buttons"><button className="reader-page-btn" disabled={page <= 0} onClick={() => setPage((p) => Math.max(0, p - 1))}><ArrowLeft size={16} /> Previous</button><span className="reader-hint">A little slower. One page at a time.</span><button className="reader-page-btn reader-page-btn--next" disabled={page >= totalPages - 1} onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}>Next page <ArrowRight size={16} /></button></div></div>
    </motion.section>
  </motion.div>}</AnimatePresence>
}
