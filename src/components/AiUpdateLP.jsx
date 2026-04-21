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
              <a href="/" className="text-base font-bold tracking-tight text-[#2d3748] no-underline md:text-lg">
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
          {/* Decorative background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -left-32 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />
            <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-teal-50/60 blur-3xl" />
          </div>
          {/* Grid pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

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

            <p className="mb-3 text-lg font-medium text-[#4a5568] md:text-xl">
              学ぶのではなく、アップデートする。
            </p>
            <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-[#718096] md:text-base">
              AIを使いこなすのではなく、AIを身につける。<br />
              自分で調べ、自分で実装できるまで伴走します。<br className="hidden sm:block" />
              一度身につければ、時代と共に進化し続けられる自分に。
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
            2. 共感セクション
        ════════════════════════════════════════════════ */}
        <section className="bg-[#f7fafc] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                Empathy
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                AI、気になる。<br className="sm:hidden" />でも難しそうで<br className="sm:hidden" />止まっていませんか？
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {[
                { icon: '🤔', text: '興味はあるけど、\n何から始めればいいかわからない' },
                { icon: '📚', text: '学ばないといけない\n気がして、腰が重い' },
                { icon: '⌨️', text: 'タイピングが遅くて、\nアウトプットに時間がかかる' },
                { icon: '😶', text: '自分の考えを\nうまく言語化できない' },
                { icon: '💭', text: 'ChatGPTを触ったけど、\n仕事に落とし込めていない' },
                { icon: '😩', text: '結局ひとりで抱え込んで、\n手が止まってしまう' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-[#e2e8f0] bg-white p-3 transition-all hover:shadow-md sm:rounded-2xl sm:p-4 md:p-5">
                  <span className="mb-1 block text-lg sm:mb-2 sm:text-xl md:mb-3 md:text-2xl">{item.icon}</span>
                  <p className="text-[10px] leading-snug whitespace-pre-line text-[#4a5568] sm:text-xs md:text-sm md:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm leading-relaxed text-[#718096] md:text-base">
              もし一つでも当てはまるなら、<br className="sm:hidden" />
              それは<span className="font-semibold text-cyan-600">「学びが足りない」のではなく</span>、<br className="sm:hidden" />
              <span className="font-semibold text-cyan-600">「アップデートの仕方を知らないだけ」</span>かもしれません。
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            3. 学ぶではなくアップデート
        ════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                Concept
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                「学ぶ」ではなく<br className="sm:hidden" />「アップデート」する
              </h2>
            </div>

            {/* Comparison cards */}
            <div className="mb-10 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl border border-[#e2e8f0] bg-[#f7fafc] p-4 sm:rounded-2xl sm:p-6 md:p-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#e2e8f0] px-2 py-0.5 sm:mb-3 sm:px-3 sm:py-1">
                  <span className="text-[10px] font-semibold text-[#718096] sm:text-xs">学ぶ</span>
                </div>
                <p className="text-[11px] leading-snug text-[#718096] sm:text-sm sm:leading-relaxed">
                  理解して、覚えて、知識を蓄える。<br />
                  全部わかってからでないと使えない。
                </p>
              </div>
              <div className="rounded-xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:rounded-2xl sm:p-6 md:p-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-0.5 sm:mb-3 sm:px-3 sm:py-1">
                  <span className="text-[10px] font-semibold text-white sm:text-xs">アップデート</span>
                </div>
                <p className="text-[11px] leading-snug text-[#4a5568] sm:text-sm sm:leading-relaxed">
                  すべてを理解していなくても、<br />
                  更新を受け入れるだけで進化する。
                </p>
              </div>
            </div>

            {/* Smartphone analogy */}
            <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-white to-cyan-50/50 p-6 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-2xl shadow-md">📱</span>
                <h3 className="text-base font-bold text-[#2d3748] md:text-lg">スマホのアップデート、中身を全部理解していますか？</h3>
              </div>
              <div className="space-y-4 text-sm leading-[1.9] text-[#4a5568] md:text-base">
                <p>
                  スマートフォンのアップデート通知が来たとき、<br className="hidden md:block" />
                  更新内容を一つひとつ全部理解してからボタンを押す人は、ほとんどいないと思います。
                </p>
                <p>
                  でも、アップデートを受け入れた後の私たちは、<br className="hidden md:block" />
                  前より便利に、前より安全に、前よりスムーズに使えるようになっている。
                </p>
                <p className="font-medium text-[#2d3748]">
                  AIも、同じです。
                </p>
                <p>
                  全部を理解してから始める必要はありません。<br className="hidden md:block" />
                  まずは、自分の働き方に取り入れてみること。<br className="hidden md:block" />
                  自分自身を更新していくこと。
                </p>
                <p className="font-semibold text-cyan-700">
                  それが「AIを学ぶ」のではなく、「AIで自分をアップデートする」ということです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            4.「あなたにAIを搭載」とは何か
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

              <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-2xl shadow-lg md:mb-10 md:rounded-3xl">
                <video
                  src={`${import.meta.env.BASE_URL}images/services/ai-equipped-bg.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-cover"
                />
              </div>

              <p className="mx-auto max-w-lg text-sm leading-relaxed text-[#718096] md:text-base">
                AIを頭の外にある便利なツールとして使うのではなく、<br className="hidden md:block" />
                自分の機能の一部にしていくこと。それが「AI搭載」です。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  icon: '🧠',
                  title: '思考をそのまま形にする',
                  text: '音声入力やAIとの対話を通じて、頭の中のアイデアを直接アウトプットに変換。タイピングに頼らない新しい働き方へ。',
                },
                {
                  icon: '⚡',
                  title: '仕事のスピードが変わる',
                  text: '資料、LP、文章、事業案、設計。これまで何時間もかかっていたアウトプットを、AIと共に圧倒的に高速化します。',
                },
                {
                  icon: '🔍',
                  title: '自分で調べて解決できる',
                  text: 'AIに質問しながら自力で課題を紐解いていく力が身につきます。わからないことを、自分で調べて形にできるようになります。',
                },
                {
                  icon: '🚀',
                  title: '時代と共に進化できる',
                  text: '一度身につければ、新しい技術やツールが出てもAIと対話しながら吸収していける。"変化に強い自分"になれます。',
                },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white bg-white p-4 shadow-sm transition-all hover:shadow-md sm:rounded-2xl sm:p-6 md:p-8">
                  <span className="mb-2 block text-xl sm:mb-3 sm:text-2xl md:mb-4 md:text-3xl">
                    {item.icon}
                  </span>
                  <h3 className="mb-1 text-xs font-bold text-[#2d3748] sm:mb-2 sm:text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[10px] leading-snug text-[#718096] sm:text-xs md:text-sm md:leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
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

            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {[
                { icon: '💬', label: 'AIとの\n対話環境づくり' },
                { icon: '🎙️', label: '音声入力の\n活用' },
                { icon: '🧩', label: '思考整理・\n言語化' },
                { icon: '📝', label: '発信文の\n作成' },
                { icon: '📊', label: '資料作成の\n高速化' },
                { icon: '🌐', label: 'LP・企画の\nたたき台作成' },
                { icon: '💡', label: '事業アイデアの\n整理・設計' },
                { icon: '⚙️', label: '業務効率化の\n仕組みづくり' },
                { icon: '🛠️', label: 'アプリ・ツールの\n壁打ち・実装' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center rounded-xl border border-[#e2e8f0] bg-white p-2 text-center transition-all hover:border-cyan-200 hover:shadow-md sm:rounded-2xl sm:p-4 md:p-5"
                >
                  <span className="mb-1 text-lg transition-transform group-hover:scale-110 sm:mb-2 sm:text-xl md:mb-3 md:text-2xl">
                    {item.icon}
                  </span>
                  <span className="text-[10px] leading-snug font-medium whitespace-pre-line text-[#4a5568] sm:text-xs md:text-sm md:leading-relaxed">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-[#a0aec0]">
              AIと話しながら、ここまでできる時代です。
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
                { label: '目的', general: '知識を学ぶ', ours: '自分をアップデートする' },
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

            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: '一緒に考える',
                  text: 'あなたの仕事や課題をヒアリングし、どこにAIを組み込むと効果的かを一緒に整理します。',
                },
                {
                  num: '02',
                  title: '一緒に作る',
                  text: '資料、LP、発信文、企画書など、AIとの対話を通じて実際のアウトプットを一緒に形にしていきます。',
                },
                {
                  num: '03',
                  title: '一緒に実装する',
                  text: '業務の仕組み化やツール活用、音声入力の環境構築など、あなたの日常にAIを実装していきます。',
                },
                {
                  num: '04',
                  title: '自分で実装できる自分へ',
                  text: '最終的には、自分で調べ、自分でAIと対話し、必要なものを自分で実装できる状態を目指します。一度身につければ、時代が変わっても進化し続けられます。',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 rounded-2xl border border-[#e2e8f0] bg-white p-5 transition-all hover:shadow-md md:gap-6 md:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-sm font-bold text-white shadow-md">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-[#2d3748]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-[#718096]">{step.text}</p>
                  </div>
                </div>
              ))}
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

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { icon: '📄', title: '資料づくり' },
                { icon: '🌐', title: 'LPづくり' },
                { icon: '📢', title: '発信づくり' },
                { icon: '💼', title: '事業づくり' },
                { icon: '📱', title: 'アプリづくり' },
                { icon: '🔧', title: 'ツールづくり' },
                { icon: '🖥️', title: 'システムづくり' },
                { icon: '📋', title: '業務の整理と\n効率化' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center rounded-xl bg-white p-2 shadow-sm transition-all hover:shadow-md sm:rounded-2xl sm:p-4 md:p-5"
                >
                  <span className="mb-1 text-lg sm:mb-2 sm:text-xl md:text-2xl">{item.icon}</span>
                  <span className="text-center text-[9px] leading-snug font-semibold whitespace-pre-line text-[#2d3748] sm:text-xs md:text-sm">
                    {item.title}
                  </span>
                </div>
              ))}
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
            10. 申し込みまでの流れ
        ════════════════════════════════════════════════ */}
        <section className="bg-[#f7fafc] py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                Flow
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                ご相談の流れ
              </h2>
            </div>

            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-cyan-300 to-blue-300 sm:block md:left-8" />

              <div className="space-y-6">
                {[
                  { num: '1', title: '相談申し込み', text: 'フォームまたはメッセージからお気軽にご連絡ください。' },
                  { num: '2', title: '現状ヒアリング', text: 'お仕事内容や課題、AIへの期待を一緒に整理します。' },
                  { num: '3', title: 'どこにAIを搭載するか整理', text: 'あなたの業務のどこにAIを実装すると最も効果的かを設計します。' },
                  { num: '4', title: '伴走スタート', text: '一緒に考え、一緒に作りながら、AI搭載を進めていきます。' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-5 md:gap-6">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-base font-bold text-white shadow-lg md:h-16 md:w-16 md:text-lg">
                      {step.num}
                    </div>
                    <div className="flex-1 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm md:p-6">
                      <h3 className="mb-1 text-base font-bold text-[#2d3748]">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-[#718096]">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            11. FAQ
        ════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="mb-12 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-cyan-600 uppercase">
                FAQ
              </span>
              <h2 className="mb-4 text-2xl font-bold text-[#2d3748] md:text-3xl">
                よくあるご質問
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'AI初心者でも大丈夫ですか？',
                  a: 'はい、まったく問題ありません。AIに触れたことがない方でも、音声入力や簡単な対話から始めて、自然にAIを使えるようになります。',
                },
                {
                  q: 'タイピングが苦手でもできますか？',
                  a: 'もちろんです。むしろ音声入力を活用するので、タイピングに頼らない新しいアウトプットの方法をお伝えします。',
                },
                {
                  q: 'どんな業種でも相談できますか？',
                  a: '個人事業主、副業、小規模事業者の方であれば、業種を問わずご相談いただけます。あなたの仕事に合わせてAIの搭載ポイントを一緒に見つけます。',
                },
                {
                  q: 'ツールやアプリ制作の相談もできますか？',
                  a: 'はい。業務効率化ツール、簡単なアプリ、仕組み化の設計なども、壁打ちや実装支援として一緒に進められます。',
                },
                {
                  q: '本当に学ばなくても大丈夫ですか？',
                  a: '「学ぶ」というより「体験しながら更新されていく」イメージです。スマホのアップデートのように、使いながら自然と進化していく感覚を大切にしています。',
                },
              ].map((item, i) => (
                <details key={i} className="group rounded-2xl border border-[#e2e8f0] bg-white transition-all open:shadow-md">
                  <summary className="flex cursor-pointer items-center gap-3 p-5 text-sm font-semibold text-[#2d3748] md:p-6 md:text-base [&::-webkit-details-marker]:hidden">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-600">Q</span>
                    <span className="flex-1">{item.q}</span>
                    <svg className="h-4 w-4 shrink-0 text-[#a0aec0] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-[#edf2f7] px-5 pb-5 pt-4 md:px-6 md:pb-6">
                    <p className="pl-9 text-sm leading-relaxed text-[#718096]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════
            12. Final CTA
        ════════════════════════════════════════════════ */}
        <section id="final-cta" className="relative overflow-hidden py-20 md:py-28">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0e1a2e] to-[#1a2744]" />
            <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          </div>

          <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              AIを学ぶ前に、<br className="sm:hidden" />
              自分をアップデート<br className="sm:hidden" />しませんか？
            </h2>
            <p className="mb-3 text-base font-medium text-cyan-300 md:text-lg">
              あなたにAIを搭載する第一歩を、ここから。
            </p>
            <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-[#94a3b8]">
              無理に学ぶ必要はありません。<br />
              まずはお話を聞かせてください。<br />
              あなたの仕事のどこにAIを搭載できるか、一緒に考えましょう。
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-10 py-4 text-sm font-semibold text-white no-underline shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:brightness-110 sm:w-auto md:text-base"
              >
                相談してみる
              </a>
              <a
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#475569] px-10 py-4 text-sm font-semibold text-[#94a3b8] no-underline transition-all hover:border-[#64748b] hover:text-white sm:w-auto"
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
