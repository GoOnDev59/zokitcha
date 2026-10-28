import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, BookOpen, Sparkles } from 'lucide-react'

export default function Hero({ featuredBook, onRead, onExplore }) {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <motion.div className="hero-kicker" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5 }}><Sparkles size={14} /> A SMALL ESCAPE, EVERY DAY</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .08 }}>Find a little<br /><em>more wonder.</em></motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>Good books make room for new thoughts, slower mornings, and a world a little bigger than yesterday.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}><button className="button-primary" onClick={onExplore}>Explore the library <ArrowRight size={16} /></button><button className="button-quiet" onClick={() => onRead(featuredBook)}><BookOpen size={16} /> Read today's pick</button></motion.div>
        <div className="hero-footnote"><span className="tiny-line" /> A thoughtful collection for curious people</div>
      </div>
      <div className="hero-art" aria-label="Featured books">
        <div className="sun-shape" /><div className="hero-plant plant-one">✳</div><div className="hero-plant plant-two">✦</div>
        <motion.div className="hero-book hero-book--back" animate={{ y: [0, -5, 0], rotate: [-9, -7, -9] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><img src="https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg" alt="The Alchemist book cover" /></motion.div>
        <motion.div className="hero-book hero-book--front" animate={{ y: [0, -9, 0], rotate: [5, 3, 5] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: .4 }}><img src="https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg" alt="Atomic Habits book cover" /></motion.div>
        <div className="hero-sticker"><span>THE</span><strong>joy of<br />getting lost</strong><ArrowDownRight size={17} /></div>
        <div className="hero-caption"><span className="caption-star">✳</span><span>Stories, ideas &<br />other little worlds</span></div>
      </div>
    </section>
  )
}
