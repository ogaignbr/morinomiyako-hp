import { noteArticles } from '../data/siteContent'
import { IconDocument, IconChevronRight, IconExternalLink } from './icons'

export default function Note() {
  return (
    <section id="note" className="relative py-20 md:py-28">
      <div className="section-padding mx-auto max-w-5xl">
        <div className="mb-14 text-center md:mb-20">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Note
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            <span className="title-reveal"><span className="title-reveal-inner">noteで発信中</span></span>
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-bluegray-600">
            AIツールの使い方・実際に作ったものの裏側を公開中。<br />
            1,000円から学べるコンテンツも揃えています。
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

        <div className="mt-10 text-center">
          <a
            href="https://note.com/gaogao_note/portal"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-bluegray-800 px-7 py-3.5 text-sm font-medium text-white no-underline shadow-lg transition-all hover:bg-bluegray-900 hover:shadow-xl"
          >
            noteをもっと見る
            <IconExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
