import { about } from '../data/siteContent'
import { IconUser } from './icons'

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

        <div className="flex flex-row items-center gap-5 md:gap-14">
          {/* Text - left side */}
          <div className="w-1/2">
            <h3 className="mb-1 text-base font-bold text-bluegray-800 md:text-xl">
              {about.name}
            </h3>
            <p className="mb-3 text-[11px] font-medium text-bluegray-400 md:mb-6 md:text-sm">
              {about.title}
            </p>
            {about.bio.map((paragraph, i) => (
              <p
                key={i}
                className="mb-2 text-[11px] leading-relaxed text-bluegray-600 last:mb-0 md:mb-4 md:text-sm md:leading-loose"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-4 flex flex-wrap gap-1.5 md:mt-8 md:gap-2">
              {about.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-bluegray-200 bg-white px-2 py-0.5 text-[9px] font-medium text-bluegray-700 md:px-3 md:py-1 md:text-[11px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Video - right side */}
          <div className="w-1/2">
            <div className="relative overflow-hidden rounded-xl shadow-lg md:rounded-3xl">
              <video
                src="/images/profile/intro-video.mov"
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
