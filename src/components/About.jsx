import { useEffect, useRef, useState } from 'react'
import { about } from '../data/siteContent'

const B = import.meta.env.BASE_URL

function GentleVideo({ src }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="overflow-hidden rounded-xl shadow-lg md:rounded-3xl">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`aspect-[4/3] w-full object-cover ${visible ? 'animate-gentle-fade' : 'opacity-0'}`}
      />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="section-padding mx-auto max-w-4xl">
        <div className="mb-14 text-center md:mb-20">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            About
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            自己紹介
          </h2>
        </div>

        <h3 className="mb-1 text-base font-bold text-bluegray-800 md:text-xl">
          {about.name}
        </h3>
        <p className="mb-4 text-[11px] font-medium text-bluegray-400 md:mb-6 md:text-sm">
          {about.title}
        </p>

        <div className="flex flex-col gap-5 md:gap-8">
          <div className="flex flex-row items-start gap-4 md:gap-10">
            <div className="w-1/2">
              <p className="text-[11px] leading-relaxed text-bluegray-600 md:text-sm md:leading-loose">
                {about.bio[0]}
              </p>
            </div>
            <div className="w-1/2">
              <GentleVideo src={`${B}images/profile/company-intro.mov`} />
            </div>
          </div>

          <div className="flex flex-row items-start gap-4 md:gap-10">
            <div className="w-1/2">
              <GentleVideo src={`${B}images/profile/intro-video.mov`} />
            </div>
            <div className="w-1/2">
              <p className="mb-2 text-[11px] leading-relaxed text-bluegray-600 md:mb-4 md:text-sm md:leading-loose">
                {about.bio[1]}
              </p>
              <p className="text-[11px] leading-relaxed text-bluegray-600 md:text-sm md:leading-loose">
                {about.bio[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
