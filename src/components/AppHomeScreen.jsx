import { IconBell, IconCalendar, IconChevronRight, IconInstagram, IconLine, IconMail, IconMapPin, IconMenu } from './icons'
import { site } from '../data/siteContent'

const cardItems = [
  {
    title: '自己紹介',
    description: '杜の都工房をご紹介',
    href: '#/about',
  },
  {
    title: 'プラン',
    description: 'できることとお仕事',
    href: '#/plan',
  },
  {
    title: 'note',
    description: '最新の発信をお知らせ',
    href: '#/note',
  },
]

export default function AppHomeScreen() {
  return (
    <section className="app-home-screen mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-transparent px-2 pb-21 pt-2">
      <div className="rounded-lg border border-bluegray-100 bg-white py-2 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
        <div className="mb-1.5 flex items-start justify-between gap-2 px-2.5">
          <div className="flex items-center gap-1.5">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-stamp.png`}
              alt="杜の都工房ロゴ"
              className="h-[58px] w-[58px] object-contain"
            />
            <div>
              <p className="font-serif text-[15px] leading-tight font-semibold tracking-[0.03em] text-bluegray-800">Webアプリ制作</p>
              <p className="font-serif text-[14px] leading-tight font-semibold tracking-[0.06em] text-mint-500">杜の都工房</p>
            </div>
          </div>
          <div className="flex items-center gap-0.5 text-bluegray-700">
            <button className="rounded-md p-1.5 transition hover:bg-bluegray-50" aria-label="Instagram">
              <IconInstagram className="h-6 w-6" />
            </button>
            <button className="rounded-md p-1.5 text-mint-500 transition hover:bg-mint-50" aria-label="LINE">
              <IconLine className="h-6 w-6" />
            </button>
            <button className="rounded-md p-1.5 transition hover:bg-bluegray-50" aria-label="メニュー">
              <IconMenu className="h-6 w-6" />
            </button>
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
            src={`${import.meta.env.BASE_URL}images/hero/bg.jpg`}
            alt="ヘッダー画像"
            className="block h-auto w-full aspect-square object-cover"
          />
        </div>

        <div className="mb-1.5 grid grid-cols-3 gap-1.5 px-2.5">
          {cardItems.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="rounded-md border border-bluegray-100 bg-white p-0.5 text-center no-underline shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-0.5 aspect-square rounded-md border border-bluegray-200 bg-bluegray-50" />
              <p className="font-serif text-[10px] font-semibold tracking-[0.03em] text-bluegray-800">{card.title}</p>
              <p className="text-[8.5px] leading-tight text-bluegray-500">{card.description}</p>
            </a>
          ))}
        </div>

        <div className="my-3 relative px-2.5">
          <a
            href="#/contact"
            className="flex items-center justify-center gap-2 rounded-md bg-metallic-green px-3 py-2 font-serif text-[17px] font-semibold tracking-[0.1em] text-white no-underline shadow-md"
          >
            <IconCalendar className="h-5 w-5" />
            問い合わせ
          </a>
        </div>

        <div className="mx-2.5 rounded-md border border-bluegray-100 bg-bluegray-50 px-2 py-1.5">
          <p className="mb-0.5 font-serif text-[11px] font-semibold tracking-[0.03em] text-mint-600">{site.name}</p>
          <p className="text-[9px] leading-relaxed text-bluegray-600">〒981-3133 宮城県仙台市泉区</p>
          <p className="mt-0.5 flex items-center gap-1 text-[10px] text-bluegray-600">
            <IconMapPin className="h-3.5 w-3.5 text-mint-500" />
            仙台市泉区
          </p>
          <a href={`mailto:${site.email}`} className="mt-0.5 flex items-center gap-1 text-[10px] text-bluegray-700 no-underline">
            <IconMail className="h-3.5 w-3.5 text-mint-500" />
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
