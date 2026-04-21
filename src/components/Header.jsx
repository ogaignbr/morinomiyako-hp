import { useState } from 'react'
import { navItems, site } from '../data/siteContent'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl">
        <div className="mx-3 mt-3 rounded-2xl glass-card px-5 py-2 md:mx-6 md:mt-4 md:px-8 md:py-2">
          <div className="flex items-center justify-between">
            <a href="#" className="-my-4 flex items-center gap-2.5 no-underline">
              <img src={`${import.meta.env.BASE_URL}images/logo-stamp.png`} alt="杜の都工房" className="h-[88px] w-[88px] object-contain mix-blend-multiply" />
              <span className="text-sm font-semibold tracking-tight text-bluegray-800 md:text-base">
                {site.name}
              </span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-bluegray-600 no-underline transition-colors hover:text-mint-500"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-bluegray-800 px-5 py-2 text-sm font-medium text-white no-underline transition-all hover:bg-bluegray-900 hover:shadow-lg"
              >
                Contact
              </a>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-transparent transition-colors hover:bg-bluegray-50 md:hidden"
              aria-label="メニュー"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-bluegray-700 transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-bluegray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-bluegray-700 transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
                />
              </div>
            </button>
          </div>

          {isOpen && (
            <nav className="mt-4 flex flex-col gap-1 border-t border-bluegray-100/50 pt-4 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-bluegray-700 no-underline transition-colors hover:bg-bluegray-50"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-bluegray-800 px-5 py-3 text-center text-sm font-medium text-white no-underline"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
