import { noteArticles } from '../data/siteContent'
import { IconDocument, IconChevronRight, IconExternalLink } from './icons'

export default function Note() {
  return (
    <section id="note" className="relative bg-white px-4 pt-8 pb-10">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-6 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Blog
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            ブログで発信中
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
          <p className="mx-auto mt-4 text-[12px] leading-relaxed text-bluegray-500">
            AIツールの使い方や、実際に作ったものの裏側を公開中。
          </p>
        </div>

        <div className="space-y-4">
          {noteArticles.map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-elevated group block rounded-2xl p-5 no-underline transition-all duration-300 md:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex shrink-0 items-center justify-center pt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-metallic-green">
                    <IconDocument className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-[11px] font-medium text-bluegray-400">
                    {article.date}
                  </div>
                  <h3 className="mb-1.5 text-sm font-semibold text-bluegray-800 transition-colors group-hover:text-mint-500 group-hover:underline md:text-base">
                    {article.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-bluegray-500 md:text-sm">
                    {article.description}
                  </p>
                </div>
                <div className="shrink-0 pt-2">
                  <IconChevronRight className="h-4 w-4 text-bluegray-300 transition-all group-hover:translate-x-1 group-hover:text-mint-500" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://note.com/gaogao_note/portal"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-metallic-green px-6 py-3 text-[12px] font-semibold tracking-[0.06em] text-white no-underline shadow-md transition-all hover:shadow-lg"
          >
            ブログをもっと見る
            <IconExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
