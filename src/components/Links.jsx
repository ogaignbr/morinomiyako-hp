import { socialLinks } from '../data/siteContent'

export default function Links() {
  return (
    <section id="links" className="relative bg-white px-4 pt-4 pb-12">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-6 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Links
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            つながる
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
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
