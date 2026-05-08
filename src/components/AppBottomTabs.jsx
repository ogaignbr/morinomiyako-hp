import { IconCalendar, IconDocument, IconHome, IconNote, IconUser } from './icons'

const tabs = [
  { id: 'home', label: 'ホーム', href: '#/home', icon: IconHome },
  { id: 'about', label: '自己紹介', href: '#/about', icon: IconUser },
  { id: 'plan', label: 'プラン', href: '#/plan', icon: IconDocument },
  { id: 'note', label: 'note', href: '#/note', icon: IconNote },
  { id: 'contact', label: '問い合わせ', href: '#/contact', icon: IconCalendar },
]

export default function AppBottomTabs({ page }) {
  return (
    <nav className="fixed bottom-0 left-1/2 z-50 flex w-[min(390px,calc(100%-12px))] -translate-x-1/2 items-center justify-between rounded-t-lg border border-bluegray-100 bg-white px-1.5 py-1.5 shadow-[0_-6px_20px_rgba(0,0,0,0.06)]">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const active = page === tab.id
        return (
          <a
            key={tab.id}
            href={tab.href}
            className={`flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-md px-1 py-0.5 no-underline transition ${
              active ? 'text-cyan-500' : 'text-bluegray-500 hover:bg-bluegray-50'
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="truncate font-serif text-[9px] font-medium tracking-[0.02em]">{tab.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
