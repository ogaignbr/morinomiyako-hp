import { IconCalendar } from './icons'

export default function FloatingContactButton() {
  return (
    <a
      href="#/contact"
      aria-label="問い合わせ"
      className="fixed bottom-[74px] left-1/2 z-[60] ml-[142px] inline-flex h-[60px] w-[60px] -translate-x-1/2 flex-col items-center justify-center rounded-full bg-metallic-green text-center font-serif text-[9.5px] leading-tight font-semibold tracking-[0.04em] text-white shadow-[0_12px_24px_rgba(20,90,50,0.35)] animate-float-slow"
    >
      <IconCalendar className="mb-0.5 h-4.5 w-4.5" />
      問い
      <br />
      合わせ
    </a>
  )
}
