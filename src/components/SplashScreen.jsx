import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [phase, setPhase] = useState('show')

  useEffect(() => {
    const hideAt = setTimeout(() => setPhase('hide'), 2800)
    const removeAt = setTimeout(() => setPhase('done'), 3500)
    return () => {
      clearTimeout(hideAt)
      clearTimeout(removeAt)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`splash-screen ${phase === 'hide' ? 'splash-screen-hide' : ''}`}>
      <div className="splash-inner">
        <img
          src={`${import.meta.env.BASE_URL}favicon.png`}
          alt="杜の都工房"
          className="splash-logo"
        />
        <p className="splash-caption">
          <span>Webアプリ制作</span>
          <span>杜の都工房</span>
        </p>
        <div className="splash-bar">
          <span className="splash-bar-fill" />
        </div>
      </div>
    </div>
  )
}
