import { plans, planOptions } from '../data/siteContent'

const planImages = {
  light: new URL('../../HP画像/スピードライト.png', import.meta.url).href,
  standard: new URL('../../HP画像/スタンダード.png', import.meta.url).href,
  premium: new URL('../../HP画像/プレミアム.png', import.meta.url).href,
}

const optionImage = new URL('../../HP画像/オプション.png', import.meta.url).href

const cardStyles =
  'group flex flex-col overflow-hidden rounded-xl border border-bluegray-100 bg-white no-underline shadow-[0_8px_20px_rgba(15,77,47,0.12),inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-3px_8px_rgba(15,77,47,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,77,47,0.2)] active:translate-y-[1px]'

const planNameBg = {
  light: 'bg-[linear-gradient(135deg,#dff8ec_0%,#baf0d5_100%)] text-[#18613c]',
  standard: 'bg-[linear-gradient(135deg,#dff0ff_0%,#c7e4ff_100%)] text-[#1d4c89]',
  premium: 'bg-[linear-gradient(135deg,#f7f1d8_0%,#ebdcab_100%)] text-[#745d16]',
}

export default function Plans() {
  return (
    <section id="plans" className="relative bg-white px-4 pt-8 pb-10">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-5 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Plans
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            制作プラン
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
          <p className="mx-auto mt-3 text-[12px] leading-relaxed text-bluegray-500">
            目的に合わせて選べる、3つのプランと追加オプション。
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {plans.map((plan) => (
            <a key={plan.id} href={`#/plan-${plan.id}`} className={cardStyles}>
              <div className="w-full overflow-hidden bg-bluegray-50">
                <img
                  src={planImages[plan.id]}
                  alt={plan.title}
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className={`px-1.5 py-2 text-center ${planNameBg[plan.id]}`}>
                <p className="font-serif text-[10.5px] font-semibold leading-tight tracking-[0.02em]">
                  {plan.shortTitle}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="my-5 flex items-center gap-3">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-bluegray-200 to-transparent" />
          <span className="text-[10px] font-medium tracking-[0.15em] text-bluegray-400">OPTION</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-bluegray-200 to-transparent" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <a href="#/plan-option" className={`${cardStyles} col-start-2`}>
            <div className="w-full overflow-hidden bg-bluegray-50">
              <img
                src={optionImage}
                alt={planOptions.title}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="px-1.5 py-2 text-center">
              <p className="font-serif text-[10.5px] font-semibold leading-tight tracking-[0.02em] text-bluegray-800">
                オプション
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
