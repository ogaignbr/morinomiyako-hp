import { useEffect, useRef, useState } from 'react'
import {
  IconBell,
  IconCalendar,
  IconChevronRight,
  IconDocument,
  IconHome,
  IconInstagram,
  IconLine,
  IconMenu,
  IconNote,
  IconUser,
} from './icons'

const homeHeaderImage = new URL('../../HP画像/ヘッダー１.png', import.meta.url).href
const aboutCardImage = new URL('../../HP画像/自己紹介.png', import.meta.url).href
const planCardImage = new URL('../../HP画像/プラン.png', import.meta.url).href
const noteCardImage = new URL('../../HP画像/note.png', import.meta.url).href

const cardItems = [
  {
    title: '杜の都工房とは？',
    description: '工房理念/代表挨拶',
    href: '#/about',
    image: aboutCardImage,
  },
  {
    title: '制作プラン',
    description: '各種プラン詳細',
    href: '#/plan',
    image: planCardImage,
  },
  {
    title: 'ブログ',
    description: '役立つ情報を発信',
    href: '#/note',
    image: noteCardImage,
  },
]

const menuItems = [
  { label: 'ホーム', href: '#/home', icon: IconHome },
  { label: '杜の都工房とは？', href: '#/about', icon: IconUser },
  { label: '制作プラン', href: '#/plan', icon: IconDocument },
  { label: 'ブログ', href: '#/note', icon: IconNote },
  { label: '問い合わせ', href: '#/contact', icon: IconCalendar },
]

export default function AppHomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuWrapperRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e) => {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('touchstart', onClick)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('touchstart', onClick)
    }
  }, [menuOpen])

  return (
    <section className="app-home-screen mx-auto flex min-h-screen w-full flex-col bg-transparent px-2 pt-2 pb-[5.25rem]">
      <div className="rounded-lg border border-bluegray-100 bg-white px-0 pb-2.5 pt-2 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
        <div className="mb-1.5 flex items-start justify-between gap-2 px-2.5">
          <a href="#/home" className="flex items-center gap-1.5 no-underline">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-stamp.png`}
              alt="杜の都工房ロゴ"
              className="h-[58px] w-[58px] object-contain"
            />
            <div>
              <p className="font-serif text-[15px] leading-tight font-semibold tracking-[0.03em] text-bluegray-800">Webアプリ制作</p>
              <p className="font-serif text-[14px] leading-tight font-semibold tracking-[0.06em] text-mint-500">杜の都工房</p>
            </div>
          </a>
          <div className="relative flex items-center gap-0.5 text-bluegray-700" ref={menuWrapperRef}>
            <button className="rounded-md p-1.5 transition hover:bg-bluegray-50" aria-label="Instagram">
              <IconInstagram className="h-6 w-6" />
            </button>
            <button className="rounded-md p-1.5 text-mint-500 transition hover:bg-mint-50" aria-label="LINE">
              <IconLine className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={`rounded-md p-1.5 transition ${menuOpen ? 'bg-mint-50 text-mint-500' : 'hover:bg-bluegray-50'}`}
              aria-label="メニュー"
              aria-expanded={menuOpen}
            >
              <IconMenu className="h-6 w-6" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 top-[42px] z-40 w-[170px] overflow-hidden rounded-lg border border-bluegray-100 bg-white shadow-[0_14px_30px_rgba(10,30,18,0.18)]">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2 border-b border-bluegray-50 px-3 py-2.5 text-bluegray-700 no-underline transition last:border-b-0 hover:bg-mint-50 hover:text-mint-500"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-serif text-[12px] font-semibold tracking-[0.04em]">
                        {item.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            )}
          </div>
        </div>

        <div className="mx-2.5 mb-1.5 flex items-center gap-1.5 rounded-md border border-mint-100 bg-mint-50 px-1.5 py-1.5">
          <span className="inline-flex items-center gap-1 rounded-md bg-metallic-green px-1.5 py-1 text-[9px] font-bold text-white">
            <IconBell className="h-3 w-3" />
            お知らせ
          </span>
          <span className="truncate font-serif text-[10px] font-medium tracking-[0.02em] text-mint-600">ホーム画面を新しく公開しました</span>
          <IconChevronRight className="h-3 w-3 text-mint-500" />
        </div>

        <div className="mb-2.5">
          <img
            src={homeHeaderImage}
            alt="ヘッダー画像"
            className="block h-auto w-full aspect-square object-cover"
          />
        </div>

        <div className="mb-1.5 grid grid-cols-3 gap-1.5 px-2.5">
          {cardItems.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="home-neon-card rounded-md border border-bluegray-100 bg-white p-0.5 text-center no-underline shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="mb-0.5 aspect-square w-full rounded-md border border-bluegray-200 object-cover"
                loading="lazy"
              />
              <p className="font-serif text-[10px] font-semibold tracking-[0.03em] text-bluegray-800">{card.title}</p>
              <p className="text-[8.5px] leading-tight text-bluegray-500">{card.description}</p>
            </a>
          ))}
        </div>

        <div className="relative mt-2.5 px-2.5">
          <a
            href="#/contact"
            className="cta-glint flex items-center justify-center gap-2 rounded-[10px] bg-[linear-gradient(145deg,#1b6f43_0%,#2ea565_45%,#165937_100%)] px-3 py-2.5 font-serif text-[17px] font-semibold tracking-[0.1em] text-white no-underline shadow-[0_14px_24px_rgba(10,30,18,0.4),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-6px_12px_rgba(0,0,0,0.22)] ring-1 ring-white/25 transition-transform hover:-translate-y-0.5"
          >
            <IconCalendar className="h-5 w-5" />
            問い合わせ
          </a>
        </div>
      </div>
    </section>
  )
}
