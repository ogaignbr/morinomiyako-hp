import { useMemo } from 'react'

const SYMBOLS = ['○', '＋', '＊']

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return s / 2147483647
  }
}

export default function FloatingSymbols({ count = 40 }) {
  const items = useMemo(() => {
    const rand = seededRandom(42)
    return Array.from({ length: count }, (_, i) => {
      const symbol = SYMBOLS[i % SYMBOLS.length]
      const size = 10 + rand() * 18
      const left = rand() * 100
      const top = rand() * 100
      const duration = 8 + rand() * 12
      const delay = -(rand() * 30)
      const driftX = 20 + rand() * 40
      const driftY = 15 + rand() * 30
      const rotate = 30 + rand() * 60
      const opacity = 0.06 + rand() * 0.07

      return { id: i, symbol, size, left, top, duration, delay, driftX, driftY, rotate, opacity }
    })
  }, [count])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute select-none font-sans font-light"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            fontSize: `${item.size}px`,
            color: '#000000',
            opacity: item.opacity,
            animation: `symbol-drift-${item.id % 6} ${item.duration}s ease-in-out ${item.delay}s infinite`,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  )
}
