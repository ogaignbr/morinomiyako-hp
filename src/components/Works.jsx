import { works } from '../data/siteContent'
import { IconImage, IconArrowRight } from './icons'

const gradients = [
  'from-[#1a2332] to-[#0f1923]',
  'from-[#151e2d] to-[#1a2740]',
  'from-[#182030] to-[#111a28]',
  'from-[#1c2536] to-[#121c2b]',
]

export default function Works() {
  return (
    <section id="works" className="relative py-20 md:py-28">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-20">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Works
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            <span className="title-reveal"><span className="title-reveal-inner">制作実績</span></span>
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-bluegray-600">
            AIとデザインで形にしてきた、これまでの仕事
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          {works.map((work, i) => {
            const Wrapper = work.href ? 'a' : 'div'
            const wrapperProps = work.href ? { href: work.href } : {}
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className="glass-card-elevated group block cursor-pointer overflow-hidden rounded-xl no-underline transition-all duration-300 md:rounded-2xl"
              >
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradients[i % gradients.length]}`}>
                  {work.video ? (
                    <div className="flex h-full w-full items-center justify-center p-2 md:p-6">
                      <video
                        src={work.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full rounded-lg object-contain"
                      />
                    </div>
                  ) : work.image ? (
                    <div className="flex h-full w-full items-center justify-center p-2 md:p-6">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="h-full w-full rounded-lg object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-white/30">
                        <IconImage className="h-6 w-6 opacity-30 md:h-10 md:w-10" />
                        <span className="text-[9px] font-medium opacity-40 md:text-xs">Image</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-3 md:p-6">
                  <h3 className="mb-1 text-xs font-semibold text-bluegray-800 transition-colors group-hover:text-mint-500 md:mb-2 md:text-lg">
                    {work.title}
                  </h3>
                  <p className="mb-2 text-[10px] leading-relaxed text-bluegray-600 md:mb-4 md:text-sm">
                    {work.description}
                  </p>
                  <div className="mb-2 flex flex-wrap gap-1 md:mb-3 md:gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-bluegray-100 bg-white px-1.5 py-0.5 text-[8px] font-medium text-bluegray-600 md:px-2.5 md:text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {work.price && (
                    <p className="text-xs font-semibold text-mint-500 md:text-sm">{work.price}</p>
                  )}
                  {work.href && (
                    <div className="text-metallic mt-2 flex items-center gap-1 text-[10px] font-semibold md:mt-4 md:text-xs">
                      詳しく見る
                      <IconArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 md:h-3.5 md:w-3.5" />
                    </div>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium text-bluegray-600 no-underline transition-colors hover:text-mint-500"
          >
            すべての実績を見る
            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
