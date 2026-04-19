import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Works from './components/Works'
import About from './components/About'
import Representative from './components/Representative'
import Story from './components/Story'
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
          <Services />
          <Works />
          <About />
          <Representative />
          <Story />
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
