import { SearchX } from 'lucide-react'
import BookCard from './BookCard'

export default function BookGrid({ books, savedIds, onToggleSave, onOpen }) {
  if (!books.length) return <div className="empty-state"><span><SearchX size={24} /></span><h3>No books found just yet</h3><p>Try another title, author, or category. Your next favourite is out there.</p></div>
  return <div className="book-grid">{books.map((book, index) => <BookCard key={book.id} book={book} index={index} isSaved={savedIds.includes(book.id)} onToggleSave={onToggleSave} onOpen={onOpen} />)}</div>
}
