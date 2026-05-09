import { IconCalendar } from './icons'

export default function FloatingContactButton() {
  return (
    <a
      href="#/contact"
      aria-label="診断"
      className="floating-reserve-button cta-glint inline-flex h-[62px] w-[62px] flex-col items-center justify-center rounded-[14px] bg-[linear-gradient(145deg,#1b6f43_0%,#2ea565_45%,#165937_100%)] text-center font-serif text-[9.5px] leading-tight font-semibold tracking-[0.04em] text-white shadow-[0_14px_24px_rgba(10,30,18,0.45),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-4px_10px_rgba(0,0,0,0.28)] animate-float-slow ring-1 ring-white/35"
    >
      <IconCalendar className="mb-0.5 h-4.5 w-4.5" />
      診
      <br />
      断
    </a>
  )
}
