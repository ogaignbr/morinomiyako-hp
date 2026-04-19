import { story } from '../data/siteContent'

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-white py-20 md:py-28">

      <div className="section-padding relative mx-auto max-w-3xl">
        <div className="mb-14 text-center md:mb-16">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Story
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            {story.heading}
          </h2>
        </div>

        <div className="space-y-6">
          {story.paragraphs.map((text, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 md:p-8">
              <p className="text-sm leading-loose text-bluegray-600 md:text-base md:leading-loose">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <blockquote className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl font-light text-bluegray-200">
              &ldquo;
            </div>
            <p className="pt-6 text-lg leading-relaxed font-medium text-bluegray-800 italic md:text-xl">
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
