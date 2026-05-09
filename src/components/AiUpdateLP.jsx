import { useEffect } from 'react'
import FloatingSymbols from './FloatingSymbols'

export default function AiUpdateLP() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased text-[#2d3748]">
      <FloatingSymbols count={45} />
      <div className="relative z-10">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl">
          <div className="mx-3 mt-3 rounded-2xl border border-white/40 bg-white/70 px-5 py-2 shadow-lg backdrop-blur-xl md:mx-6 md:mt-4 md:px-8 md:py-3">
            <div className="flex items-center justify-between">
              <a href={import.meta.env.BASE_URL} className="text-base font-bold tracking-tight text-[#2d3748] no-underline md:text-lg">
                AI搭載サポート
              </a>
              <a
                href="#final-cta"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 text-xs font-semibold text-white no-underline shadow-md transition-all hover:shadow-lg hover:brightness-110 md:text-sm"
              >
                相談してみる
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ════════════════════════════════════════════════
            1. ファーストビュー
        ════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32">
          {/* Background image (no blur, full visibility) */}
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/services/ai-equipped-hero-bg.png')` }}
          />

          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50/60 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-xs font-semibold text-cyan-700">AI搭載プログラム</span>
            </div>

            <h1 className="mb-5 text-4xl leading-[1.2] font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-[#2d3748]">あなたに</span>
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">AIを搭載</span>
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-[#718096] md:text-base">
              AIと共に進めたいことを、ひとつずつ形に。<br />
              自分で調べ、自分で実装できるまで伴走します。
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#final-cta"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:brightness-110 sm:w-auto"
              >
                まずは相談してみる
              </a>
              <a
                href="#what"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-8 py-4 text-sm font-semibold text-[#4a5568] no-underline transition-all hover:bg-[#f7fafc] sm:w-auto"
              >
                詳しく見る
              </a>
            </div>

            {/* Scroll hint */}
            <div className="mt-14 flex flex-col items-center gap-2 text-[#a0aec0]">
              <span className="text-[10px] tracking-widest uppercase">Scroll</span>
              <div className="h-8 w-px bg-gradient-to-b from-[#a0aec0] to-transparent" />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            「あなたにAIを搭載」とは何か
        ════════════════════════════════════════════════ */}
        <section id="what" className="bg-[#f7fafc] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                What is it?
              </span>
              <h2 className="mb-6 text-2xl font-bold text-[#2d3748] md:mb-8 md:text-3xl">
                「あなたにAIを搭載」<br className="sm:hidden" />とは何か
              </h2>

              <div className="mx-auto mb-6 max-w-2xl overflow-hidden rounded-2xl shadow-lg md:mb-8 md:rounded-3xl">
                <video
                  src={`${import.meta.env.BASE_URL}images/services/ai-equipped-bg.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-cover"
                />
              </div>

              <p className="mb-8 text-xl font-bold text-[#2d3748] md:mb-10 md:text-2xl">
                あなたの能力を爆発的に拡張します
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            5. このサービスでできること
        ════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                What you can do
              </span>
              <h2 className="mb-6 text-2xl font-bold text-[#2d3748] md:mb-8 md:text-3xl">
                AIを搭載すると、<br className="sm:hidden" />ここまでできる
              </h2>

              <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl md:rounded-3xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/services/ai-equipped.png`}
                  alt="AIを搭載すると"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-8 text-center text-sm text-[#a0aec0]">
              AIと話しながら、ここまで一緒にできる時代です。
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            6. 一般的なAI講座との違い
        ════════════════════════════════════════════════ */}
        <section className="bg-[#f7fafc] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                Difference
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                一般的なAI講座との違い
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
              {/* Header row */}
              <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[#e2e8f0] bg-[#f7fafc]">
                <div className="p-4 text-xs font-semibold text-[#a0aec0]" />
                <div className="border-l border-[#e2e8f0] p-4 text-center text-xs font-semibold text-[#718096]">一般的なAI講座</div>
                <div className="border-l border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 text-center text-xs font-bold text-cyan-700">AI搭載サポート</div>
              </div>
              {[
                { label: '目的', general: '知識を学ぶ', ours: '実務へ伴走して形にする' },
                { label: 'スタイル', general: 'ツール理解が中心', ours: '実務に組み込む' },
                { label: '進め方', general: '講義を受ける', ours: 'AIと共に進む' },
                { label: '成果', general: '学んで終わることも', ours: '仕事・事業が前に進む' },
                { label: 'ゴール', general: 'AIを理解する', ours: '自走できる状態になる' },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-[1fr_1fr_1fr] ${i < 4 ? 'border-b border-[#edf2f7]' : ''}`}>
                  <div className="flex items-center p-4 text-xs font-semibold text-[#4a5568] md:text-sm">{row.label}</div>
                  <div className="flex items-center border-l border-[#edf2f7] p-4 text-xs text-[#718096] md:text-sm">{row.general}</div>
                  <div className="flex items-center border-l border-cyan-50 bg-cyan-50/30 p-4 text-xs font-semibold text-cyan-700 md:text-sm">{row.ours}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            7. 伴走内容・サポート内容
        ════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                Support
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                伴走の進め方
              </h2>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-[#718096] md:text-base">
                教えるのではなく、一緒に考え、一緒に作り、一緒に実装する。<br className="hidden md:block" />
                最初の一歩から、あなたのペースで伴走します。
              </p>
            </div>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm md:rounded-3xl">
              <img
                src={`${import.meta.env.BASE_URL}images/services/support-flow.jpg`}
                alt="伴走の進め方"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            8. 一緒にできること
        ════════════════════════════════════════════════ */}
        <section className="bg-[#f7fafc] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                Together
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                AIと話しながら、<br className="sm:hidden" />ここまで一緒にできる
              </h2>
            </div>

            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-sm md:rounded-3xl">
              <img
                src={`${import.meta.env.BASE_URL}images/services/ai-chat-together-capabilities.jpg`}
                alt="AIと話しながら、ここまで一緒にできる"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            9. 向いている人 / 向いていない人
        ════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                For you?
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                こんな方に向いています
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* 向いている人 */}
              <div className="rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 p-3 sm:rounded-2xl sm:p-5 md:p-8">
                <h3 className="mb-3 flex items-center gap-1.5 text-xs font-bold text-cyan-700 sm:mb-4 sm:gap-2 sm:text-sm md:mb-5 md:text-base">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-[10px] text-white sm:h-6 sm:w-6 sm:text-xs md:h-7 md:w-7 md:text-sm">
                    ✓
                  </span>
                  向いている方
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {[
                    'AIに興味がある',
                    '仕事をもっと早く進めたい',
                    '小さく始めて大きく変えたい',
                    'ひとりで抱え込む働き方を変えたい',
                    'AIと共に生きる感覚を持ちたい',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-[10px] leading-snug text-[#4a5568] sm:gap-2 sm:text-xs md:text-sm md:leading-relaxed"
                    >
                      <span className="mt-0.5 shrink-0 text-cyan-500">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 向いていない人 */}
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f7fafc] p-3 sm:rounded-2xl sm:p-5 md:p-8">
                <h3 className="mb-3 flex items-center gap-1.5 text-xs font-bold text-[#718096] sm:mb-4 sm:gap-2 sm:text-sm md:mb-5 md:text-base">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cbd5e0] text-[10px] text-white sm:h-6 sm:w-6 sm:text-xs md:h-7 md:w-7 md:text-sm">
                    ×
                  </span>
                  向いていない方
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {[
                    '丸投げしたいだけの方',
                    '自分で試す気がない方',
                    '変わる意思がない方',
                    '完璧に理解しないと動けないと思っている方',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 text-[10px] leading-snug text-[#718096] sm:gap-2 sm:text-xs md:text-sm md:leading-relaxed"
                    >
                      <span className="mt-0.5 shrink-0 text-[#cbd5e0]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            Final CTA
        ════════════════════════════════════════════════ */}
        <section id="final-cta" className="relative overflow-hidden py-20 md:py-28">
          {/* Background video (no blur, as-is) */}
          <video
            src={`${import.meta.env.BASE_URL}images/services/footer-bg.mp4`}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8" style={{ textShadow: '0 2px 18px rgba(0,0,0,0.65)' }}>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              お気軽に、<br className="sm:hidden" />
              まずはご相談から
            </h2>
            <p className="mb-3 text-base font-medium text-cyan-200 md:text-lg">
              あなたにAIを搭載する第一歩を、ここから。
            </p>
            <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-white">
              ご希望や課題をお聞かせください。<br />
              あなたの仕事のどこにAIが活きるか、一緒に考えましょう。
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 text-sm font-semibold text-white no-underline shadow-lg shadow-cyan-500/40 transition-all hover:shadow-xl hover:brightness-110 sm:w-auto md:text-base"
              >
                相談してみる
              </a>
              <a
                href={import.meta.env.BASE_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-10 py-4 text-sm font-semibold text-white no-underline backdrop-blur-sm transition-all hover:border-white hover:bg-white/20 sm:w-auto"
              >
                トップに戻る
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1e293b] bg-[#0f172a] py-8">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="text-xs text-[#64748b]">
            &copy; {new Date().getFullYear()} 杜の都工房 — AI搭載サポート
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}
