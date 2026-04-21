import { socialLinks } from '../data/siteContent'

export default function Links() {
  return (
    <section id="links" className="relative bg-white py-20 md:py-28">
      <div className="section-padding mx-auto max-w-2xl">
        <div className="mb-14 text-center md:mb-16">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Links
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            つながる
          </h2>
        </div>

        <div className="mx-auto grid max-w-lg grid-cols-3 gap-2 md:gap-3">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl border border-bluegray-100 bg-white shadow-md no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="w-full overflow-hidden bg-bluegray-50">
                <img
                  src={link.image}
                  alt={link.name}
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="border-t border-bluegray-100 px-3 py-2 text-center md:py-2.5">
                <span className="text-xs font-semibold text-bluegray-800 md:text-sm">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
