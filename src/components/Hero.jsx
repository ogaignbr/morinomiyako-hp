import { hero } from '../data/siteContent'
import { IconArrowRight, IconExternalLink } from './icons'

export default function Hero() {
  return (
    <section className="flex flex-col">
      {/* ── Cover image: full-width, no overlay ── */}
      {hero.backgroundImage && (
        <div className="relative w-full pt-[60px] md:pt-[72px]">
          <img
            src={hero.backgroundImage}
            alt="杜の都工房"
            className="animate-gentle-fade-slow w-full object-cover"
          />
        </div>
      )}

      {/* ── Text area below the image ── */}
      <div className="relative overflow-hidden bg-white">

        <div className="section-padding relative mx-auto max-w-4xl py-14 md:py-20">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="animate-fade-in-up mb-7 inline-flex items-center gap-2 rounded-full border border-bluegray-100 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-metallic-green" />
              <span className="text-xs font-medium tracking-wide text-bluegray-600">
                {hero.badge}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mb-5 text-2xl leading-tight font-bold tracking-tight text-bluegray-800 sm:text-3xl md:text-4xl lg:text-5xl">
              {hero.heading.filter(Boolean).map((line, i) => (
                <span key={i} className="block">
                  <span className={`title-reveal is-visible ${i === 0 ? 'text-gradient' : ''}`}>
                    <span className="title-reveal-inner">{line}</span>
                  </span>
                </span>
              ))}
            </h1>

            {/* Sub text */}
            <p className="animate-fade-in-up animation-delay-400 mb-9 max-w-xl text-sm leading-relaxed font-light text-bluegray-600 md:text-base">
              {hero.subText[0]}
              <br />
              {hero.subText[1]}
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up animation-delay-600 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              {hero.cta.map((btn) =>
                btn.style === 'primary' ? (
                  <a
                    key={btn.href}
                    href={btn.href}
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-bluegray-800 px-8 py-4 text-sm font-medium text-white no-underline shadow-lg transition-all hover:bg-bluegray-900 hover:shadow-xl sm:px-8 sm:py-3.5"
                  >
                    <span>{btn.label}</span>
                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                ) : (
                  <a
                    key={btn.href}
                    href={btn.href}
                    className="glass-card inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-bluegray-700 no-underline transition-all hover:shadow-lg sm:px-8 sm:py-3.5"
                  >
                    <span>{btn.label}</span>
                    <IconExternalLink className="h-4 w-4" />
                  </a>
                ),
              )}
            </div>

            {/* Scroll hint */}
            <div className="mt-12 flex flex-col items-center gap-2 md:mt-16">
              <span className="text-[10px] font-medium tracking-[0.2em] text-bluegray-400 uppercase">
                Scroll
              </span>
              <div className="h-8 w-px bg-gradient-to-b from-bluegray-300 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
