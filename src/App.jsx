import { useState, useEffect } from 'react'
import Plans from './components/Plans'
import PlanDetail from './components/PlanDetail'
import Services from './components/Services'
import About from './components/About'
import Representative from './components/Representative'
import Note from './components/Note'
import Links from './components/Links'
import AppHomeScreen from './components/AppHomeScreen'
import AppBottomTabs from './components/AppBottomTabs'
import FloatingContactButton from './components/FloatingContactButton'
import Diagnosis from './components/Diagnosis'
import Footer from './components/Footer'
import BakusokuLP from './components/BakusokuLP'
import AiUpdateLP from './components/AiUpdateLP'
import AiSecretaryLP from './components/AiSecretaryLP'
import WebDesignLP from './components/WebDesignLP'

const aboutHeaderImage = new URL('../HP画像/自己紹介ヘッダー新.png', import.meta.url).href

const PLAN_DETAIL_IDS = ['light', 'standard', 'premium', 'option']

function App() {
  const [page, setPage] = useState(getPage())

  useEffect(() => {
    const onHash = () => {
      setPage(getPage())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

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
      <div className="relative min-h-screen overflow-hidden bg-[#0b0c0c] font-sans antialiased">
        <div className="relative z-20 min-h-screen w-full">
          <AppHomeScreen />
          <AppBottomTabs page={page} />
        </div>
        <FloatingContactButton />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-white font-sans antialiased">
      <div className="relative z-20 min-h-screen w-full pb-24 bg-white text-bluegray-700">
        {page === 'about' && (
          <main>
            <img src={aboutHeaderImage} alt="自己紹介ヘッダー" className="w-full bg-white object-cover" />
            <About />
            <Representative />
          </main>
        )}

        {page === 'plan' && (
          <main>
            <Plans />
            <Services />
          </main>
        )}

        {page.startsWith('plan-') && (
          <main>
            <PlanDetail planId={page.replace('plan-', '')} />
          </main>
        )}

        {page === 'note' && (
          <main>
            <Note />
          </main>
        )}

        {page === 'contact' && (
          <main>
            <Diagnosis />
            <Links />
            <Footer />
          </main>
        )}

        <AppBottomTabs page={page} />
      </div>
      <FloatingContactButton />
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
  for (const id of PLAN_DETAIL_IDS) {
    if (hash === `#/plan-${id}`) return `plan-${id}`
  }
  return 'home'
}

export default App

