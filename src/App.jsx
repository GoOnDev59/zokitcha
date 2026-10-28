import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Sparkles, X } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import BookDetailsModal from './components/BookDetailsModal'
import ReaderModal from './components/ReaderModal'
import DiscoverPage from './pages/DiscoverPage'
import BrowsePage from './pages/BrowsePage'
import ShelfPage from './pages/ShelfPage'
import { books as allBooks } from './data/books'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function App() {
  const [view, setView] = useState('home')
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All books')
  const [sort, setSort] = useState('recommended')
  const [savedIds, setSavedIds] = useLocalStorage('zokitcha-saved-books', ['alchemist', 'meditations'])
  const [detailBook, setDetailBook] = useState(null)
  const [readerBook, setReaderBook] = useState(null)
  const [readerPage, setReaderPage] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [toast, setToast] = useState('')

  const notify = useCallback((message) => {
    setToast(message)
    window.clearTimeout(window.__zokitchaToast)
    window.__zokitchaToast = window.setTimeout(() => setToast(''), 2400)
  }, [])

  const toggleSave = useCallback((id) => {
    const exists = savedIds.includes(id)
    setSavedIds((current) => exists ? current.filter((savedId) => savedId !== id) : [...current, id])
    const title = allBooks.find((book) => book.id === id)?.title
    notify(exists ? `${title} removed from your shelf` : `${title} saved to your shelf`)
  }, [savedIds, setSavedIds, notify])

  const openReader = useCallback((book) => {
    setDetailBook(null)
    setReaderPage(0)
    setReaderBook(book)
  }, [])

  const filteredBooks = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    const filtered = allBooks.filter((book) => {
      const matchesCategory = activeCategory === 'All books' || book.category === activeCategory
      const matchesQuery = !normalized || `${book.title} ${book.author} ${book.category} ${book.description}`.toLowerCase().includes(normalized)
      const matchesShelf = view !== 'shelf' || savedIds.includes(book.id)
      return matchesCategory && matchesQuery && matchesShelf
    })
    if (sort === 'rating') return filtered.sort((a, b) => b.rating - a.rating)
    if (sort === 'title') return filtered.sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'year') return filtered.sort((a, b) => a.year - b.year)
    return filtered
  }, [query, activeCategory, sort, view, savedIds])

  useEffect(() => {
    const handleKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        document.querySelector('.search-box input')?.focus()
      }
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const navigate = (nextView) => {
    setView(nextView)
    if (nextView !== 'browse') { setActiveCategory('All books'); setQuery('') }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return <div className="app-shell">
    <Sidebar view={view} setView={navigate} savedCount={savedIds.length} mobileOpen={mobileOpen} closeMobile={() => setMobileOpen(false)} />
    <main className="main-area">
      <Header query={query} setQuery={setQuery} onMenu={() => setMobileOpen(true)} view={view} setView={setView} />
      <AnimatePresence mode="wait">
        <motion.div key={view} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: .22 }}>
          {view === 'home' && <DiscoverPage books={allBooks} savedIds={savedIds} onToggleSave={toggleSave} onOpen={setDetailBook} onRead={openReader} onExplore={() => navigate('browse')} onShelf={() => navigate('shelf')} />}
          {view === 'browse' && <BrowsePage books={filteredBooks} savedIds={savedIds} onToggleSave={toggleSave} onOpen={setDetailBook} activeCategory={activeCategory} setActiveCategory={setActiveCategory} sort={sort} setSort={setSort} query={query} />}
          {view === 'shelf' && <ShelfPage books={allBooks} savedIds={savedIds} onToggleSave={toggleSave} onOpen={setDetailBook} onExplore={() => navigate('browse')} />}
        </motion.div>
      </AnimatePresence>
    </main>
    <BookDetailsModal book={detailBook} onClose={() => setDetailBook(null)} onRead={openReader} onToggleSave={toggleSave} isSaved={detailBook ? savedIds.includes(detailBook.id) : false} />
    <ReaderModal book={readerBook} page={readerPage} setPage={setReaderPage} onClose={() => setReaderBook(null)} onToggleSave={toggleSave} isSaved={readerBook ? savedIds.includes(readerBook.id) : false} />
    <AnimatePresence>{toast && <motion.div className="toast-message" initial={{ opacity: 0, y: 14, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}><span><Check size={15} /></span>{toast}<button onClick={() => setToast('')} aria-label="Dismiss notification"><X size={14} /></button></motion.div>}</AnimatePresence>
    <div className="floating-sparkle" aria-hidden="true"><Sparkles size={15} /></div>
  </div>
}
