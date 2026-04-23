import { services } from '../data/siteContent'
import { getServiceIcon, IconArrowRight } from './icons'

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 md:py-28">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="mb-14 text-center md:mb-20">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Services
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            <span className="title-reveal"><span className="title-reveal-inner">できること</span></span>
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-bluegray-600">
            あなたのアイデアを形にします
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:gap-6">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.iconKey)
            const Wrapper = service.href ? 'a' : 'div'
            const wrapperProps = service.href ? { href: service.href } : {}
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className={`glass-card-elevated group block rounded-xl border-2 border-mint-400/40 p-3 no-underline transition-all duration-300 md:rounded-2xl md:p-8 ${
                  service.iconKey === 'consulting' ? 'card-glow' : ''
                }`}
              >
                <div className={`service-icon-anim-${i % 4} mb-3 h-14 w-14 overflow-hidden rounded-xl shadow-md transition-transform group-hover:scale-105 md:mb-5 md:h-24 md:w-24 md:rounded-2xl`}>
                  {service.video ? (
                    <video
                      src={service.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-metallic-green text-white">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                  )}
                </div>
                <h3 className="mb-1 text-sm font-semibold md:mb-2 md:text-lg">
                  <span
                    className={`service-title-reveal inline rounded bg-mint-400 px-1.5 py-0.5 text-[11px] text-white md:px-2 md:text-base delay-${i % 4}`}
                  >
                    {service.title}
                  </span>
                </h3>
                <p className="mb-2 text-[10px] leading-relaxed text-bluegray-600 md:mb-4 md:text-sm">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-bluegray-50 px-2 py-0.5 text-[9px] font-medium text-bluegray-600 md:px-3 md:py-1 md:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {service.href && (
                  <div className="text-metallic mt-2 flex items-center gap-1 text-[10px] font-semibold md:mt-4 md:text-xs">
                    詳しく見る
                    <IconArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 md:h-3.5 md:w-3.5" />
                  </div>
                )}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
