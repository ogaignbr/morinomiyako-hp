import { services, works } from '../data/siteContent'
import { getServiceIcon, IconArrowRight, IconImage } from './icons'

function ServiceCard({ item }) {
  const Wrapper = item.href ? 'a' : 'div'
  const wrapperProps = item.href ? { href: item.href } : {}
  const Icon = item.iconKey ? getServiceIcon(item.iconKey) : null

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-stretch gap-3 overflow-hidden rounded-xl border border-bluegray-100 bg-white p-2.5 no-underline shadow-[0_6px_18px_rgba(15,77,47,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(15,77,47,0.16)]"
    >
      <div className="aspect-square w-[88px] shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-mint-50 to-white shadow-md">
        {item.video ? (
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : Icon ? (
          <div className="flex h-full w-full items-center justify-center bg-metallic-green text-white">
            <Icon className="h-7 w-7" />
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-bluegray-300">
            <IconImage className="h-6 w-6 opacity-50" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div>
          <h4 className="mb-1">
            <span className="font-serif text-[12.5px] font-semibold tracking-[0.04em] text-bluegray-800 transition-colors group-hover:text-mint-500">
              {item.title}
            </span>
          </h4>
          <p className="line-clamp-2 text-[10.5px] leading-relaxed text-bluegray-600">
            {item.description}
          </p>
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1">
            {item.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-bluegray-50 px-1.5 py-0.5 text-[9px] font-medium text-bluegray-600"
              >
                {tag}
              </span>
            ))}
          </div>
          {item.href && (
            <span className="text-metallic flex shrink-0 items-center gap-0.5 font-serif text-[10px] font-semibold tracking-[0.06em]">
              詳しく
              <IconArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

function WorkCard({ item }) {
  const Wrapper = item.href ? 'a' : 'div'
  const wrapperProps = item.href ? { href: item.href } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex items-stretch gap-3 overflow-hidden rounded-xl border border-bluegray-100 bg-white p-2.5 no-underline shadow-[0_6px_18px_rgba(15,77,47,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(15,77,47,0.16)]"
    >
      <div className="aspect-[16/9] w-[120px] shrink-0 self-center overflow-hidden rounded-lg bg-gradient-to-br from-mint-50 to-white shadow-md">
        {item.video ? (
          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-bluegray-300">
            <IconImage className="h-6 w-6 opacity-50" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between py-0.5">
        <div>
          <h4 className="mb-1 font-serif text-[12.5px] font-semibold tracking-[0.04em] text-bluegray-800 transition-colors group-hover:text-mint-500">
            {item.title}
          </h4>
          <p className="line-clamp-2 text-[10.5px] leading-relaxed text-bluegray-600">
            {item.description}
          </p>
        </div>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1">
            {item.tags?.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-bluegray-50 px-1.5 py-0.5 text-[9px] font-medium text-bluegray-600"
              >
                {tag}
              </span>
            ))}
            {item.price && (
              <span className="font-serif text-[10.5px] font-bold text-mint-500">
                {item.price}
              </span>
            )}
          </div>
          {item.href && (
            <span className="text-metallic flex shrink-0 items-center gap-0.5 font-serif text-[10px] font-semibold tracking-[0.06em]">
              詳しく
              <IconArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative bg-white px-4 pt-6 pb-10">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-5 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Services
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            できること
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
          <p className="mx-auto mt-3 text-[12px] leading-relaxed text-bluegray-500">
            あなたのアイデアを形にします
          </p>
        </div>

        <div className="mb-3 flex items-center gap-2">
          <span className="h-[1px] flex-1 bg-mint-100" />
          <span className="font-serif text-[10.5px] font-semibold tracking-[0.18em] text-mint-600">
            AI伴走・実装サポート
          </span>
          <span className="h-[1px] flex-1 bg-mint-100" />
        </div>

        <div className="space-y-3">
          {services.map((service, i) => (
            <ServiceCard key={`s-${i}`} item={service} />
          ))}
        </div>

        <div className="mt-7 mb-3 flex items-center gap-2">
          <span className="h-[1px] flex-1 bg-bluegray-100" />
          <span className="font-serif text-[10.5px] font-semibold tracking-[0.18em] text-bluegray-600">
            制作サービス
          </span>
          <span className="h-[1px] flex-1 bg-bluegray-100" />
        </div>

        <div className="space-y-3">
          {works.map((work, i) => (
            <WorkCard key={`w-${i}`} item={work} />
          ))}
        </div>
      </div>
    </section>
  )
}
