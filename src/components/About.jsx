import { about } from '../data/siteContent'

const B = import.meta.env.BASE_URL

function GentleVideo({ src }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="aspect-[4/3] w-full object-cover"
      />
    </div>
  )
}

const blockVideos = [
  `${B}images/profile/company-intro.mov`,
  `${B}images/profile/intro-video.mov`,
  `${B}images/profile/workshop-row3.mov`,
]

export default function About() {
  return (
    <section id="about" className="relative bg-white px-4 pt-8 pb-10">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-6 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            About
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            {about.name}
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
        </div>

        <p className="mb-8 whitespace-pre-line text-center font-serif text-[14px] leading-[1.9] font-semibold tracking-[0.04em] text-bluegray-800">
          {about.title}
        </p>

        {about.lead && (
          <p className="mb-8 text-center text-[12px] leading-relaxed text-bluegray-500">
            {about.lead}
          </p>
        )}

        <div className="space-y-7">
          {about.bio.map((block, i) => (
            <article key={i} className="space-y-3">
              <GentleVideo src={blockVideos[i] || blockVideos[0]} />
              <div className="px-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-serif text-[11px] font-bold tracking-[0.2em] text-mint-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-[15px] font-bold tracking-[0.03em] text-bluegray-800">
                    {block.heading}
                  </h3>
                </div>
                <p className="text-[13px] leading-[1.85] text-bluegray-600">
                  {block.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
