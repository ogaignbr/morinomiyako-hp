import { site } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="bg-bluegray-800 px-4 pt-8 pb-28">
      <div className="mx-auto w-full max-w-[360px]">
        {/* Logo & name */}
        <div className="text-center">
          <span className="font-serif text-[16px] font-bold tracking-[0.06em] text-white">
            {site.name}
          </span>
          <p className="mt-1 text-[10px] tracking-[0.15em] text-bluegray-400">
            {site.tagline}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto my-5 h-px w-16 bg-bluegray-600" />

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {[
            { label: 'ホーム', href: '#/home' },
            { label: 'プラン', href: '#/plan' },
            { label: '私たちについて', href: '#/about' },
            { label: 'ブログ', href: '#/note' },
            { label: 'お問い合わせ', href: '#/contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.04em] text-bluegray-400 no-underline transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="mt-6 text-center text-[10px] text-bluegray-500">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
