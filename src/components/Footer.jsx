import { site, navItems } from '../data/siteContent'
import { IconMail } from './icons'

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* CTA - white background */}
      <div className="border-t border-bluegray-100/50 bg-white py-16 md:py-20">
        <div className="section-padding mx-auto max-w-5xl text-center">
          <h2 className="mb-3 text-xl font-bold text-bluegray-800 md:text-2xl">
            お仕事のご相談はこちら
          </h2>
          <p className="mb-8 text-sm text-bluegray-600">
            まずはお気軽にご連絡ください
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bluegray-800 to-bluegray-700 px-8 py-4 text-sm font-medium text-white no-underline shadow-lg transition-all hover:shadow-xl"
          >
            <IconMail className="h-4 w-4" />
            メールで相談する
          </a>
        </div>
      </div>

      {/* Footer bar - green background */}
      <div className="bg-metallic-green py-10 md:py-12">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <a href="#" className="flex items-center gap-2 no-underline">
              <img src={`${import.meta.env.BASE_URL}images/logo-stamp.png`} alt="杜の都工房" className="h-[120px] w-[120px] object-contain" />
              <div>
                <span className="block text-sm font-semibold text-white">{site.name}</span>
                <span className="block text-[11px] text-white/70">宮城県仙台市泉区</span>
              </div>
            </a>

            <nav className="flex flex-wrap justify-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-medium text-white/80 no-underline transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <p className="text-[11px] text-white/60">
              &copy; {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
