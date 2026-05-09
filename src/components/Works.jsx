import { works } from '../data/siteContent'
import { IconImage } from './icons'

export default function Works() {
  return (
    <section id="works" className="relative bg-white px-4 pt-6 pb-12">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-5 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Works
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            お仕事
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
          <p className="mx-auto mt-3 text-[12px] leading-relaxed text-bluegray-500">
            制作イメージと料金について
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {works.map((work, i) => {
            const Wrapper = work.href ? 'a' : 'div'
            const wrapperProps = work.href ? { href: work.href } : {}
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className="group flex flex-col overflow-hidden rounded-xl border border-bluegray-100 bg-white no-underline shadow-[0_6px_18px_rgba(15,77,47,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(15,77,47,0.16)]"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-mint-50 to-white">
                  {work.video ? (
                    <video
                      src={work.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : work.image ? (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-bluegray-300">
                      <IconImage className="h-6 w-6 opacity-50" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col items-center justify-between gap-1 px-1.5 py-2 text-center">
                  <p className="font-serif text-[10.5px] font-semibold leading-tight tracking-[0.02em] text-bluegray-800 transition-colors group-hover:text-mint-500">
                    {work.title}
                  </p>
                  {work.price && (
                    <p className="font-serif text-[10.5px] font-bold leading-none tracking-[0.02em] text-mint-500">
                      {work.price}
                    </p>
                  )}
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
