import { site } from '../data/siteContent'
import { IconMail } from './icons'

export default function Footer() {
  return (
    <section id="contact" className="relative bg-white px-4 pt-4 pb-12">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-6 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Contact
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            相談する
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
        </div>

        <p className="mb-4 text-center text-[12px] leading-relaxed text-bluegray-500">
          お仕事のご相談はお気軽にどうぞ
        </p>

        <div className="flex justify-center">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-mint-200 bg-white px-5 py-2 font-serif text-[12px] font-semibold tracking-[0.06em] text-mint-600 no-underline shadow-sm transition hover:bg-mint-50"
          >
            <IconMail className="h-4 w-4" />
            メールで相談する
          </a>
        </div>
      </div>
    </section>
  )
}
