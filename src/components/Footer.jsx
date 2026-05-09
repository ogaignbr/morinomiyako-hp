import { site } from '../data/siteContent'
import { IconMail, IconMapPin } from './icons'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-white">
      <div className="border-t border-bluegray-100 px-4 py-6">
        <div className="mx-auto w-full max-w-[360px] text-center">
          <p className="font-serif text-[12px] font-semibold tracking-[0.06em] text-bluegray-700">
            お仕事のご相談はこちら
          </p>
          <p className="mt-1 text-[10.5px] text-bluegray-500">
            お気軽にご連絡ください
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-mint-200 bg-white px-4 py-1.5 font-serif text-[11px] font-semibold tracking-[0.06em] text-mint-600 no-underline transition hover:bg-mint-50"
          >
            <IconMail className="h-3.5 w-3.5" />
            メールで相談する
          </a>
        </div>
      </div>

      <div className="border-t border-bluegray-100 px-4 py-4">
        <div className="mx-auto flex w-full max-w-[360px] items-center justify-between gap-2 text-bluegray-400">
          <div className="flex items-center gap-1.5">
            <img
              src={`${import.meta.env.BASE_URL}favicon.png`}
              alt={site.name}
              className="h-5 w-5 object-contain opacity-80"
            />
            <span className="font-serif text-[10.5px] font-medium tracking-[0.06em] text-bluegray-500">
              {site.name}
            </span>
          </div>
          <span className="flex items-center gap-1 text-[9.5px]">
            <IconMapPin className="h-3 w-3" />
            仙台市泉区
          </span>
        </div>
        <p className="mx-auto mt-2 w-full max-w-[360px] text-center text-[9.5px] text-bluegray-400">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
