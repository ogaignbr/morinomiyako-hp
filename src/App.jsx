import { useState, useEffect } from 'react'
import Services from './components/Services'
import Works from './components/Works'
import About from './components/About'
import Representative from './components/Representative'
import Note from './components/Note'
import Links from './components/Links'
import Footer from './components/Footer'
import AppHomeScreen from './components/AppHomeScreen'
import AppBottomTabs from './components/AppBottomTabs'
import BakusokuLP from './components/BakusokuLP'
import AiUpdateLP from './components/AiUpdateLP'
import AiSecretaryLP from './components/AiSecretaryLP'
import WebDesignLP from './components/WebDesignLP'

function App() {
  const [page, setPage] = useState(getPage())

  useEffect(() => {
    const onHash = () => setPage(getPage())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    // Home only is locked to one-screen app layout.
    document.body.style.overflowY = page === 'home' ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [page])

  if (page === 'bakusoku') {
    return <BakusokuLP />
  }

  if (page === 'ai-update') {
    return <AiUpdateLP />
  }

  if (page === 'ai-secretary') {
    return <AiSecretaryLP />
  }

  if (page === 'web-design') {
    return <WebDesignLP />
  }

  if (page === 'home') {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-cyan-50/60 to-white font-sans antialiased">
        <div className="pointer-events-none absolute -left-12 top-8 h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -right-16 top-1/3 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute left-1/2 top-3/4 h-48 w-48 -translate-x-1/2 rounded-full bg-mint-200/25 blur-3xl animate-float-slow" />

        <div className="relative mx-auto min-h-screen w-full max-w-[390px] bg-white shadow-[0_12px_50px_rgba(0,0,0,0.14)] ring-1 ring-bluegray-100 md:my-2 md:min-h-[calc(100dvh-16px)] md:rounded-[20px]">
          <AppHomeScreen />
          <AppBottomTabs page={page} />
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-cyan-50/60 to-white font-sans antialiased">
      <div className="pointer-events-none absolute -left-12 top-8 h-44 w-44 rounded-full bg-cyan-300/30 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute left-1/2 top-3/4 h-48 w-48 -translate-x-1/2 rounded-full bg-mint-200/25 blur-3xl animate-float-slow" />

      <div className="relative mx-auto min-h-screen w-full max-w-[390px] bg-white pb-24 shadow-[0_12px_50px_rgba(0,0,0,0.14)] ring-1 ring-bluegray-100 md:my-2 md:min-h-[calc(100dvh-16px)] md:rounded-[20px]">
        {page === 'about' && (
          <main>
            <About />
            <Representative />
          </main>
        )}

        {page === 'plan' && (
          <main>
            <Services />
            <Works />
          </main>
        )}

        {page === 'note' && (
          <main>
            <Note />
            <Links />
          </main>
        )}

        {page === 'contact' && (
          <main>
            <Footer />
          </main>
        )}

        <AppBottomTabs page={page} />
      </div>
    </div>
  )
}

function getPage() {
  const hash = window.location.hash
  if (!hash || hash === '#/' || hash === '#/home') return 'home'
  if (hash === '#/about') return 'about'
  if (hash === '#/plan') return 'plan'
  if (hash === '#/note') return 'note'
  if (hash === '#/contact') return 'contact'
  if (hash === '#/bakusoku') return 'bakusoku'
  if (hash === '#/ai-update') return 'ai-update'
  if (hash === '#/ai-secretary') return 'ai-secretary'
  if (hash === '#/web-design') return 'web-design'
  return 'home'
}

export default App
