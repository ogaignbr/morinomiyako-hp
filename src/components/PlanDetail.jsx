import { plans, planOptions } from '../data/siteContent'
import { IconArrowRight, IconCalendar } from './icons'

const planImages = {
  light: new URL('../../HP画像/スピードライト.png', import.meta.url).href,
  standard: new URL('../../HP画像/スタンダード.png', import.meta.url).href,
  premium: new URL('../../HP画像/プレミアム.png', import.meta.url).href,
  option: new URL('../../HP画像/オプション.png', import.meta.url).href,
}

function CheckIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="5 12 10 17 19 8" />
    </svg>
  )
}

function MinusIcon({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
  )
}

function PrimaryCta({ label = 'このプランで相談する' }) {
  return (
    <a
      href="#/contact"
      className="cta-glint flex items-center justify-center gap-2 rounded-[10px] bg-[linear-gradient(145deg,#1b6f43_0%,#2ea565_45%,#165937_100%)] px-3 py-3 font-serif text-[14px] font-semibold tracking-[0.1em] text-white no-underline shadow-[0_12px_22px_rgba(10,30,18,0.34),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-4px_10px_rgba(0,0,0,0.22)] ring-1 ring-white/25 transition-transform hover:-translate-y-0.5"
    >
      <IconCalendar className="h-4 w-4" />
      {label}
    </a>
  )
}

function BackButton() {
  return (
    <a
      href="#/plan"
      className="flex items-center justify-center gap-1.5 rounded-[10px] border border-bluegray-200 bg-white px-3 py-2.5 font-serif text-[12px] font-semibold tracking-[0.08em] text-bluegray-700 no-underline transition hover:border-mint-300 hover:bg-mint-50 hover:text-mint-600"
    >
      <IconArrowRight className="h-3 w-3 rotate-180" />
      プラン一覧に戻る
    </a>
  )
}

function PlanContent({ plan }) {
  return (
    <section className="relative bg-white pb-10">
      <div className="bg-gradient-to-b from-mint-50/60 to-white">
        <img
          src={planImages[plan.id]}
          alt={plan.title}
          className="block h-auto w-full"
          loading="eager"
        />
      </div>

      <div className="mx-auto w-full max-w-[360px] px-4 pt-5">
        <div className="mb-4">
          <div className="mb-2 flex flex-wrap gap-1.5">
            {plan.badges?.map((b) => (
              <span
                key={b}
                className="inline-flex items-center rounded-full bg-mint-50 px-2 py-0.5 font-serif text-[10px] font-semibold tracking-[0.04em] text-mint-600 ring-1 ring-mint-100"
              >
                {b}
              </span>
            ))}
          </div>
          <h2 className="font-serif text-[22px] font-bold tracking-[0.04em] text-bluegray-800">
            {plan.title}
          </h2>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-serif text-[30px] font-bold leading-none text-mint-500">
              {plan.price}
            </span>
            {plan.priceNote && (
              <span className="text-[10px] text-bluegray-500">{plan.priceNote}</span>
            )}
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-bluegray-700">{plan.tagline}</p>
        </div>

        <div className="space-y-5">
          <section className="rounded-xl border border-mint-100 bg-mint-50/40 px-4 py-3">
            <h3 className="mb-2 font-serif text-[12px] font-bold tracking-[0.08em] text-mint-600">
              こんな方におすすめ
            </h3>
            <ul className="space-y-1">
              {plan.recommendedFor.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-1.5 text-[12px] leading-relaxed text-bluegray-700"
                >
                  <CheckIcon className="mt-[3px] h-3.5 w-3.5 shrink-0 text-mint-500" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="mb-1.5 font-serif text-[12px] font-bold tracking-[0.08em] text-mint-600">
              内容
            </h3>
            <p className="text-[12px] leading-relaxed text-bluegray-700 whitespace-pre-line">
              {plan.overview}
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-serif text-[12px] font-bold tracking-[0.08em] text-mint-600">
              含まれるもの
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
              {plan.included.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-1 text-[11.5px] leading-relaxed text-bluegray-700"
                >
                  <CheckIcon className="mt-[3px] h-3 w-3 shrink-0 text-mint-500" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </section>

          {plan.notIncluded && plan.notIncluded.length > 0 && (
            <section>
              <h3 className="mb-2 font-serif text-[12px] font-bold tracking-[0.08em] text-bluegray-500">
                含まれないもの
              </h3>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                {plan.notIncluded.map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1 text-[11.5px] leading-relaxed text-bluegray-500"
                  >
                    <MinusIcon className="mt-[3px] h-3 w-3 shrink-0 text-bluegray-400" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {plan.pageStructure && (
            <section className="rounded-xl border border-bluegray-100 bg-bluegray-50/60 px-4 py-3">
              <h3 className="mb-2 font-serif text-[12px] font-bold tracking-[0.08em] text-mint-600">
                ページ構成例
              </h3>
              <ol className="space-y-1.5">
                {plan.pageStructure.map((p, i) => (
                  <li
                    key={p}
                    className="flex items-start gap-1.5 text-[12px] leading-relaxed text-bluegray-700"
                  >
                    <span className="mt-[1px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint-100 font-serif text-[9px] font-bold text-mint-600">
                      {i + 1}
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {plan.automation && (
            <section className="rounded-xl border border-mint-100 bg-white px-4 py-3 shadow-[0_4px_14px_rgba(15,77,47,0.06)]">
              <h3 className="mb-2 font-serif text-[12px] font-bold tracking-[0.08em] text-mint-600">
                自動化の例
              </h3>
              <ol className="space-y-2">
                {plan.automation.map((step, i) => (
                  <li key={step} className="flex items-start gap-2">
                    <span className="mt-[1px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-metallic-green font-serif text-[10px] font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-[12px] leading-relaxed text-bluegray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <p className="rounded-xl border border-bluegray-100 bg-bluegray-50/60 px-4 py-3 text-[12px] leading-relaxed text-bluegray-600 whitespace-pre-line">
            {plan.closing}
          </p>
        </div>

        <div className="mt-6 space-y-2.5">
          <PrimaryCta />
          <BackButton />
        </div>
      </div>
    </section>
  )
}

function OptionContent() {
  return (
    <section className="relative bg-white pb-10">
      <div className="bg-gradient-to-b from-mint-50/60 to-white">
        <img
          src={planImages.option}
          alt={planOptions.title}
          className="block h-auto w-full"
          loading="eager"
        />
      </div>

      <div className="mx-auto w-full max-w-[360px] px-4 pt-5">
        <div className="mb-4">
          <div className="mb-2">
            <span className="inline-flex items-center rounded-full bg-mint-50 px-2 py-0.5 font-serif text-[10px] font-semibold tracking-[0.04em] text-mint-600 ring-1 ring-mint-100">
              組み合わせ自由
            </span>
          </div>
          <h2 className="font-serif text-[22px] font-bold tracking-[0.04em] text-bluegray-800">
            {planOptions.title}
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-bluegray-700">
            {planOptions.tagline}
          </p>
        </div>

        <div className="space-y-3">
          {planOptions.items.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-bluegray-100 bg-white px-3 py-3 shadow-[0_4px_14px_rgba(15,77,47,0.06)]"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-metallic-green font-serif text-[11px] font-bold text-white">
                  {item.number}
                </span>
                <h3 className="flex-1 font-serif text-[13px] font-semibold tracking-[0.04em] text-bluegray-800">
                  {item.title}
                </h3>
              </div>
              <p className="mt-1.5 font-serif text-[15px] font-bold tracking-[0.02em] text-mint-500">
                {item.price}
              </p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-bluegray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-2.5">
          <PrimaryCta label="オプションを相談する" />
          <BackButton />
        </div>
      </div>
    </section>
  )
}

export default function PlanDetail({ planId }) {
  if (planId === 'option') return <OptionContent />
  const plan = plans.find((p) => p.id === planId)
  if (!plan) return null
  return <PlanContent plan={plan} />
}
