import { ArrowRight, BookMarked, CalendarDays, ChevronRight, Quote, Sparkles } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import BookGrid from '../components/BookGrid'

export default function DiscoverPage({ books, savedIds, onToggleSave, onOpen, onRead, onExplore, onShelf }) {
  const popular = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4)
  const fresh = books.filter((book) => ['Technology', 'Self-growth', 'Philosophy'].includes(book.category)).slice(2, 6)
  const featured = books.find((book) => book.id === 'alchemist') || books[0]
  return <div className="page-content discover-page">
    <Hero featuredBook={featured} onRead={onRead} onExplore={onExplore} />
    <div className="welcome-strip"><div className="welcome-icon"><CalendarDays size={17} /></div><div><strong>A gentle reminder for today</strong><span>You don't have to finish a book today. Just begin one.</span></div><span className="welcome-flower">✳</span></div>
    <section className="content-section"><SectionHeading eyebrow="A FEW GOOD PLACES TO START" title="Reader favourites" action="See all books" onAction={onExplore} note="The books people keep coming back to." /><BookGrid books={popular} savedIds={savedIds} onToggleSave={onToggleSave} onOpen={onOpen} /></section>
    <section className="quote-band"><div className="quote-mark"><Quote size={22} /></div><div className="quote-text"><p>“A reader lives a thousand lives before he dies. The man who never reads lives only one.”</p><span>— George R. R. Martin</span></div><div className="quote-decoration">✳</div></section>
    <section className="content-section content-section--last"><SectionHeading eyebrow="FOLLOW YOUR CURIOSITY" title="A little of everything" action="Explore collection" onAction={onExplore} note="For the question you haven't thought to ask yet." /><BookGrid books={fresh} savedIds={savedIds} onToggleSave={onToggleSave} onOpen={onOpen} /></section>
    <div className="shelf-cta"><div className="shelf-cta-icon"><BookMarked size={22} /></div><div><h3>Keep the good ones close.</h3><p>Build a little bookshelf of books you want to return to.</p></div><button onClick={onShelf}>Visit my shelf <ChevronRight size={17} /></button></div>
    <footer className="site-footer"><span>© 2026 Zokitcha E-Library</span><span>Made for curious minds, with a little care <Sparkles size={13} /></span></footer>
  </div>
}
