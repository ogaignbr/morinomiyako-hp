import { features } from '../data/siteContent'
import { getFeatureIcon } from './icons'

export default function Feature() {
  return (
    <section id="feature" className="relative bg-white py-20 md:py-28">

      <div className="section-padding relative mx-auto max-w-5xl">
        <div className="mb-14 text-center md:mb-20">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Feature
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            選ばれる理由
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {features.map((feature, i) => {
            const Icon = getFeatureIcon(feature.iconKey)
            return (
              <div
                key={i}
                className="glass-card-elevated group flex gap-5 rounded-2xl p-6 transition-all duration-300 md:gap-8 md:p-8"
              >
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-metallic-green text-white shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-bluegray-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="pt-1">
                  <h3 className="mb-2 text-base font-semibold text-bluegray-800 md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-bluegray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
