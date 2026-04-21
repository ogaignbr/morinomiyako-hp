import { story } from '../data/siteContent'

const STEP_OFFSET = 75

function StepCard({ step, index }) {
  return (
    <div
      className="sticky"
      style={{
        top: `${110 + index * STEP_OFFSET}px`,
        zIndex: index + 1,
      }}
    >
      <div
        className="relative w-full overflow-hidden rounded-[40px] border-2 border-green-400 bg-white px-7 pb-8 pt-6 shadow-lg md:rounded-[60px] md:px-12 md:pb-10 md:pt-8"
        style={{
          boxShadow: '0 -8px 30px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <span
          className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white md:mb-4 md:h-12 md:w-12 md:text-base"
          style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
        >
          {step.number}
        </span>

        <h3 className="mb-2 text-base font-bold tracking-tight text-bluegray-800 md:text-lg">
          {step.title}
        </h3>
        <p className="text-[11px] leading-relaxed text-bluegray-600 md:text-sm md:leading-loose">
          {step.body}
        </p>
      </div>
    </div>
  )
}

export default function Story() {
  return (
    <section id="story" className="relative bg-white pt-20 pb-40 md:pt-28 md:pb-52">
      <div className="section-padding relative mx-auto max-w-2xl">
        <div className="mb-14 text-center md:mb-16">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Story
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            {story.heading}
          </h2>
        </div>

        <div className="flex flex-col gap-[55vh] pb-[50vh]">
          {story.steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        <div className="mt-20 text-center md:mt-28">
          <blockquote className="relative">
            <p className="text-lg leading-relaxed font-medium text-bluegray-800 italic md:text-xl">
              {story.quote.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < story.quote.length - 1 && <br />}
                </span>
              ))}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
