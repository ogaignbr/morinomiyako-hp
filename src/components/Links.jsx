import { socialLinks } from '../data/siteContent'
import { getSocialIcon } from './icons'

export default function Links() {
  return (
    <section id="links" className="relative bg-white py-20 md:py-28">
      <div className="section-padding mx-auto max-w-3xl">
        <div className="mb-14 text-center md:mb-16">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Links
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            つながる
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          {socialLinks.map((link, i) => {
            const Icon = getSocialIcon(link.iconKey)
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-elevated group flex flex-col items-center gap-3 rounded-2xl p-6 no-underline transition-all duration-300 md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bluegray-50 text-bluegray-600 transition-all group-hover:bg-bluegray-800 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-bluegray-600 group-hover:text-bluegray-800">
                  {link.name}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
