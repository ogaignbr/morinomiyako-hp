import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import About from './components/About'
import Representative from './components/Representative'
import Note from './components/Note'
import Links from './components/Links'
import Footer from './components/Footer'
import BakusokuLP from './components/BakusokuLP'
import AiUpdateLP from './components/AiUpdateLP'
import FloatingSymbols from './components/FloatingSymbols'

function App() {
  const [page, setPage] = useState(getPage())

  useEffect(() => {
    const onHash = () => setPage(getPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (page !== 'home') return

    const sections = document.querySelectorAll('main > section:not(:first-child), footer')
    sections.forEach((el) => el.classList.add('scroll-reveal'))

    const childSelectors = [
      'main > section:not(:first-child) > div > div > h2',
      'main > section:not(:first-child) > div > div > h3',
      'main > section:not(:first-child) .glass-card',
      'main > section:not(:first-child) .glass-card-elevated',
    ].join(', ')
    const children = document.querySelectorAll(childSelectors)
    children.forEach((el) => el.classList.add('scroll-reveal-child'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const titles = document.querySelectorAll('.title-reveal')

    sections.forEach((el) => observer.observe(el))
    children.forEach((el) => observer.observe(el))
    titles.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [page])

  if (page === 'bakusoku') {
    return <BakusokuLP />
  }

  if (page === 'ai-update') {
    return <AiUpdateLP />
  }

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased">
      <FloatingSymbols count={45} />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Representative />
          <Services />
          <Works />
          <Note />
          <Links />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function getPage() {
  const hash = window.location.hash
  if (hash === '#/bakusoku') return 'bakusoku'
  if (hash === '#/ai-update') return 'ai-update'
  return 'home'
}

export default App
