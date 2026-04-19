const steps = [
  {
    number: '01',
    title: '情報をコピペ',
    description: '面談の文字起こし、顔写真、基本情報など、手元にある情報をそのまま貼り付けるだけ。整理は不要です。',
    imageHint: '【画像】アプリの入力画面スクリーンショット（テキストをペーストしている様子）',
  },
  {
    number: '02',
    title: 'AIが自動生成',
    description: '約1分でJIS規格に準拠した履歴書・職務経歴書をAIが自動作成。複数タブで同時処理も可能です。',
    imageHint: '【画像】AIが処理中 → 完成した書類のプレビュー画面',
  },
  {
    number: '03',
    title: '確認・出力',
    description: '内容を確認し、必要に応じて手動編集やAI添削で仕上げ。Excel形式でそのまま出力できます。',
    imageHint: '【画像】完成した履歴書のプレビュー + 出力ボタン',
  },
]

const comparisons = [
  { label: '1人分', manual: '60〜90分', bakusoku: '約1分', saved: '最大89分', cost: '約¥2,700' },
  { label: '5人分', manual: '5〜7.5時間', bakusoku: '約3分', saved: '最大7時間', cost: '約¥13,500' },
  { label: '10人分', manual: '10〜15時間', bakusoku: '約5分', saved: '最大15時間', cost: '約¥27,000' },
  { label: '月50人', manual: '50〜75時間', bakusoku: '約50分', saved: '最大74時間', cost: '約¥135,000' },
]

const features = [
  {
    title: 'JIS規格準拠',
    description: '日本標準のフォーマットで自動作成。提出先を選びません。',
  },
  {
    title: '複数タブ同時処理',
    description: '5つ以上のタブを開いて並行作業。大量案件も一気に処理。',
  },
  {
    title: 'AI添削機能',
    description: '生成後もAIが文章を添削。より伝わる表現に自動修正。',
  },
  {
    title: '手動編集も自由',
    description: '自動生成に頼りきりにしない。いつでも手動で微調整可能。',
  },
  {
    title: 'Excel出力',
    description: '完成した書類はExcel形式でダウンロード。すぐに提出・共有できます。',
  },
  {
    title: 'コピペだけで完結',
    description: '文字起こしや基本情報をそのまま貼るだけ。整形や入力は不要です。',
  },
]

import FloatingSymbols from './FloatingSymbols'

export default function BakusokuLP() {
  return (
    <div className="relative min-h-screen bg-white font-sans antialiased">
      <FloatingSymbols count={45} />
      <div className="relative z-10">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl">
          <div className="mx-3 mt-3 rounded-2xl glass-card px-5 py-2 md:mx-6 md:mt-4 md:px-8 md:py-3">
            <div className="flex items-center justify-between">
              <a href="/" className="text-base font-bold tracking-tight text-bluegray-800 no-underline md:text-lg">
                爆速くん
              </a>
              <a
                href="#pricing"
                className="rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white no-underline transition-all hover:bg-blue-700 hover:shadow-lg md:text-sm"
              >
                料金を見る
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-amber-100/30 blur-3xl" />
          </div>

          <div className="section-padding relative mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-blue-50/60 px-4 py-2">
              <span className="text-xs font-semibold text-blue-600">履歴書・職務経歴書を爆速作成</span>
            </div>

            <h1 className="mb-6 text-3xl leading-tight font-bold tracking-tight text-bluegray-800 sm:text-4xl md:text-5xl">
              <span className="block">コピペだけで、</span>
              <span className="block text-blue-600">1分で書類が完成。</span>
            </h1>

            <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-bluegray-600 md:text-lg">
              面談メモや基本情報を貼り付けるだけ。
              <br className="hidden sm:block" />
              AIがJIS規格の履歴書・職務経歴書を自動作成します。
            </p>

            <div className="mx-auto mb-10 max-w-2xl overflow-hidden rounded-2xl border border-bluegray-100 bg-gradient-to-br from-slate-50 to-blue-50 shadow-xl">
              <img
                src="/images/works/work-01.jpg"
                alt="爆速くんのメイン画面"
                className="w-full object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
              >
                料金プランを見る
              </a>
              <a
                href="#how"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-bluegray-200 bg-white px-8 py-4 text-sm font-semibold text-bluegray-700 no-underline transition-all hover:bg-bluegray-50 sm:w-auto"
              >
                使い方を見る
              </a>
            </div>
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="bg-slate-25 py-16 md:py-24">
          <div className="section-padding mx-auto max-w-4xl text-center">
            <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
              Problem
            </span>
            <h2 className="mb-6 text-2xl font-bold text-bluegray-800 md:text-3xl">
              書類作成に、時間を奪われていませんか？
            </h2>
            <p className="mx-auto mb-12 max-w-lg text-sm leading-relaxed text-bluegray-600 md:text-base">
              履歴書・職務経歴書の作成は、1人あたり60〜90分。
              月に何十人も対応するなら、数十時間がこの作業に消えています。
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { number: '60〜90分', label: '1人あたりの作成時間' },
                { number: '50〜75時間', label: '月50人対応した場合' },
                { number: '年600時間↑', label: '年間の書類作成工数' },
              ].map((stat, i) => (
                <div key={i} className="glass-card-elevated rounded-2xl p-6">
                  <div className="mb-2 text-2xl font-bold text-blue-600 md:text-3xl">{stat.number}</div>
                  <div className="text-xs text-bluegray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Cost impact */}
            <div className="mt-10 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6 md:p-8">
              <h3 className="mb-4 text-center text-base font-bold text-bluegray-800 md:text-lg">
                💰 それ、人件費に換算すると…
              </h3>
              <p className="mb-6 text-center text-xs text-bluegray-500">
                一般事務スタッフの時給 約1,800円（社会保険料等の会社負担込み）で算出
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/80 p-5 text-center">
                  <div className="mb-1 text-xs text-bluegray-500">月間コスト</div>
                  <div className="text-2xl font-bold text-amber-600 md:text-3xl">9万〜13.5万円</div>
                  <div className="mt-1 text-[11px] text-bluegray-400">50〜75時間 × ¥1,800</div>
                </div>
                <div className="rounded-xl bg-white/80 p-5 text-center">
                  <div className="mb-1 text-xs text-bluegray-500">年間コスト</div>
                  <div className="text-2xl font-bold text-amber-600 md:text-3xl">108万〜162万円</div>
                  <div className="mt-1 text-[11px] text-bluegray-400">年間600〜900時間分の人件費</div>
                </div>
              </div>
              <p className="mt-5 text-center text-sm font-semibold text-bluegray-700">
                この作業コストが、爆速くんでほぼゼロになります。
              </p>
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how" className="py-16 md:py-24">
          <div className="section-padding mx-auto max-w-4xl">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-blue-500 uppercase">
                How it works
              </span>
              <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                3ステップで完了
              </h2>
            </div>

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
                  {/* Image placeholder */}
                  <div className="w-full overflow-hidden rounded-2xl border border-bluegray-100 bg-gradient-to-br from-slate-50 to-blue-50 md:w-1/2">
                    <div className="flex aspect-[4/3] items-center justify-center p-6">
                      <p className="text-center text-xs text-bluegray-400">{step.imageHint}</p>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="md:w-1/2">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-bluegray-800">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-bluegray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Time comparison ── */}
        <section className="bg-slate-25 py-16 md:py-24">
          <div className="section-padding mx-auto max-w-4xl">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-blue-500 uppercase">
                Comparison
              </span>
              <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                どれだけ時短できる？
              </h2>
              <p className="mx-auto max-w-md text-sm text-bluegray-600">
                手作業と爆速くんの所要時間を比較
              </p>
            </div>

            {/* Mobile: card layout / Desktop: table */}
            <div className="overflow-hidden rounded-2xl border border-bluegray-100 bg-white">
              {/* Table header */}
              <div className="hidden grid-cols-5 border-b border-bluegray-100 bg-bluegray-50 px-6 py-3 sm:grid">
                <div className="text-xs font-semibold text-bluegray-500">対象</div>
                <div className="text-xs font-semibold text-bluegray-500">手作業</div>
                <div className="text-xs font-semibold text-blue-600">爆速くん</div>
                <div className="text-xs font-semibold text-green-600">削減時間</div>
                <div className="text-xs font-semibold text-amber-600">削減コスト</div>
              </div>
              {comparisons.map((row, i) => (
                <div key={i} className={`border-b border-bluegray-50 last:border-0`}>
                  {/* Mobile */}
                  <div className="grid grid-cols-2 gap-3 p-5 sm:hidden">
                    <div className="col-span-2 text-sm font-bold text-bluegray-800">{row.label}</div>
                    <div>
                      <div className="text-[10px] text-bluegray-400">手作業</div>
                      <div className="text-sm text-bluegray-600">{row.manual}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-blue-500">爆速くん</div>
                      <div className="text-sm font-bold text-blue-600">{row.bakusoku}</div>
                    </div>
                    <div className="rounded-lg bg-green-50 px-3 py-1.5 text-center text-xs font-bold text-green-600">
                      {row.saved} 削減
                    </div>
                    <div className="rounded-lg bg-amber-50 px-3 py-1.5 text-center text-xs font-bold text-amber-600">
                      {row.cost} 削減
                    </div>
                  </div>
                  {/* Desktop */}
                  <div className="hidden grid-cols-5 items-center px-6 py-4 sm:grid">
                    <div className="text-sm font-semibold text-bluegray-800">{row.label}</div>
                    <div className="text-sm text-bluegray-600">{row.manual}</div>
                    <div className="text-sm font-bold text-blue-600">{row.bakusoku}</div>
                    <div className="inline-flex">
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                        {row.saved}
                      </span>
                    </div>
                    <div className="inline-flex">
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                        {row.cost}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-bluegray-400">
              ※ 手作業時間は業界平均値に基づく目安です
            </p>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-16 md:py-24">
          <div className="section-padding mx-auto max-w-4xl">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-blue-500 uppercase">
                Features
              </span>
              <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                爆速くんの特長
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <div key={i} className="glass-card-elevated rounded-2xl p-6">
                  <h3 className="mb-2 text-base font-bold text-bluegray-800">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-bluegray-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="bg-slate-25 py-16 md:py-24">
          <div className="section-padding mx-auto max-w-4xl">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-blue-500 uppercase">
                Pricing
              </span>
              <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                料金プラン
              </h2>
              <p className="mx-auto max-w-md text-sm text-bluegray-600">
                削減できる時間と人件費を考えれば、すぐに元が取れます
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'スタート',
                  price: '準備中',
                  desc: '少人数対応の方に',
                  features: ['月○人まで', '基本機能すべて', 'Excel出力', 'メールサポート'],
                },
                {
                  name: 'スタンダード',
                  price: '準備中',
                  desc: '中規模チームに最適',
                  features: ['月○人まで', '基本機能すべて', 'AI添削', '優先サポート'],
                  popular: true,
                },
                {
                  name: 'プロ',
                  price: '準備中',
                  desc: '大量処理が必要な方に',
                  features: ['無制限', '全機能', 'AI添削', '専任サポート'],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 ${
                    plan.popular
                      ? 'border-blue-300 bg-white shadow-xl'
                      : 'border-bluegray-100 bg-white'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 rounded-bl-xl bg-blue-600 px-3 py-1 text-[10px] font-bold text-white">
                      おすすめ
                    </div>
                  )}
                  <h3 className="mb-1 text-lg font-bold text-bluegray-800">{plan.name}</h3>
                  <p className="mb-4 text-xs text-bluegray-500">{plan.desc}</p>
                  <div className="mb-6 text-2xl font-bold text-blue-600">{plan.price}</div>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-bluegray-600">
                        <svg className="h-4 w-4 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:hello@example.com"
                    className={`block rounded-full py-3 text-center text-sm font-semibold no-underline transition-all ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-bluegray-50 text-bluegray-700 hover:bg-bluegray-100'
                    }`}
                  >
                    お問い合わせ
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-bluegray-400">
              ※ 料金は近日公開予定です。お問い合わせいただければ先行案内いたします。
            </p>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-16 md:py-24">
          <div className="section-padding mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
              書類作成の時間を、本来の仕事に。
            </h2>
            <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-bluegray-600">
              まずはお気軽にお問い合わせください。
              デモのご案内も可能です。
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
              >
                お問い合わせ
              </a>
              <a
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-bluegray-200 bg-white px-8 py-4 text-sm font-semibold text-bluegray-700 no-underline transition-all hover:bg-bluegray-50 sm:w-auto"
              >
                杜の都工房トップへ
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-bluegray-100/50 py-8">
        <div className="section-padding mx-auto max-w-5xl text-center">
          <p className="text-[11px] text-bluegray-400">
            &copy; {new Date().getFullYear()} 杜の都工房 — 爆速くん
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}
