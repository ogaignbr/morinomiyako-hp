import { useEffect } from 'react'
import FloatingSymbols from './FloatingSymbols'

const B = import.meta.env.BASE_URL

const flow = [
  {
    number: '01',
    title: 'ヒアリング',
    description:
      'どんな業務を、どうしたいか。まずは1時間のオンライン打ち合わせで、困りごとや理想の状態を丁寧にお聞きします。',
  },
  {
    number: '02',
    title: '設計・試作',
    description:
      'AIと人の手を組み合わせて、最短3日で試作版をお渡し。実際に触っていただきながら、ご一緒にブラッシュアップしていきます。',
  },
  {
    number: '03',
    title: '本制作・導入',
    description:
      '仕上がった試作をもとに本番アプリを制作。使い方レクチャーと、導入後のアフターサポートまで一貫して伴走します。',
  },
]

const examples = [
  {
    title: '履歴書・職務経歴書の自動生成',
    description: '面談メモをコピペするだけで、AIが1分でJIS規格の書類を作成（例：爆速くん）。',
  },
  {
    title: '日報・報告書の自動化',
    description: '箇条書きのメモを貼るだけで、AIが体裁の整った報告書に仕上げます。',
  },
  {
    title: '議事録・面談メモの要約',
    description: '長時間の録音・文字起こしから、要点・決定事項・次のアクションを自動抽出。',
  },
  {
    title: '営業メール・提案文の下書き',
    description: 'お客様の情報と目的を入れるだけで、トンマナに沿った営業文を生成。',
  },
  {
    title: '請求書・見積書のテンプレ自動化',
    description: '案件情報を入れると、書式の整った書類がワンクリックで完成。',
  },
  {
    title: 'SNS投稿・ブログ記事の量産',
    description: 'ネタ元の資料を渡せば、AIがSNS用・記事用の文面を一気に複数案生成。',
  },
  {
    title: '顧客カルテ・要約ツール',
    description: '過去のやり取りをまとめて、担当者が変わっても迷わないサマリーを自動作成。',
  },
  {
    title: '採用応募者の一括評価',
    description: '履歴書や面接メモから、評価基準に沿ってスコアとコメントを自動出力。',
  },
  {
    title: '社内FAQ・問い合わせボット',
    description: '社内資料やマニュアルを読み込み、従業員からの質問にAIが答える仕組みを構築。',
  },
  {
    title: 'アンケート結果の分析・可視化',
    description: '自由記述を含むアンケート回答を、AIがカテゴリ分け・ハイライト・要約。',
  },
]

const plans = [
  {
    name: 'ライト',
    price: '¥50,000〜',
    desc: '1機能・小規模な自動化から',
    features: [
      '業務を1つだけ自動化',
      '簡易UI付き',
      '制作期間：2週間〜',
      '導入レクチャー1回',
    ],
  },
  {
    name: 'スタンダード',
    price: '¥150,000〜',
    desc: '複数機能を備えた業務アプリに',
    features: [
      '複数機能を組み合わせ',
      'ログイン・データ保存対応',
      '制作期間：3〜5週間',
      '導入後1ヶ月の無料サポート',
    ],
    popular: true,
  },
  {
    name: 'オーダーメイド',
    price: '要見積もり',
    desc: '本格的な業務システムに',
    features: [
      '自社業務に合わせたフル設計',
      '既存システムとの連携',
      'チーム展開まで伴走',
      '保守・改修プランあり',
    ],
  },
]

export default function BakusokuLP() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased">
      <FloatingSymbols count={45} />
      <div className="relative z-10">
        {/* ── Header ── */}
        <header className="fixed top-0 right-0 left-0 z-50">
          <div className="mx-auto max-w-5xl">
            <div className="glass-card mx-3 mt-3 rounded-2xl px-5 py-2 md:mx-6 md:mt-4 md:px-8 md:py-3">
              <div className="flex items-center justify-between">
                <a
                  href="/"
                  className="text-base font-bold tracking-tight text-bluegray-800 no-underline md:text-lg"
                >
                  オリジナルアプリ制作
                </a>
                <a
                  href="#pricing"
                  className="rounded-full bg-metallic-green px-5 py-2 text-xs font-semibold text-white no-underline transition-all hover:shadow-lg md:text-sm"
                >
                  料金を見る
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* ── Hero ── */}
          <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
            <div className="section-padding relative mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bluegray-100 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-metallic-green" />
                <span className="text-xs font-semibold text-bluegray-600">
                  あなた専用のアプリを、5万円から
                </span>
              </div>

              <h1 className="mb-6 text-2xl leading-tight font-bold tracking-tight text-bluegray-800 sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="block">その「めんどくさい」、</span>
                <span className="text-metallic block">アプリで一気に片づけませんか？</span>
              </h1>

              <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-bluegray-600 md:text-base">
                毎月繰り返す事務作業、書類作成、報告書。
                <br className="hidden sm:block" />
                AIと組み合わせた<strong className="font-bold">オリジナルアプリ</strong>で、
                時間もコストも一気に圧縮できます。
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="#pricing"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-metallic-green px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:shadow-xl sm:w-auto"
                >
                  料金プランを見る
                </a>
                <a
                  href="#examples"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-bluegray-200 bg-white px-8 py-4 text-sm font-semibold text-bluegray-700 no-underline transition-all hover:bg-bluegray-50 sm:w-auto"
                >
                  活用例を見る
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
                その業務、まだ人の手でやっていませんか？
              </h2>
              <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-bluegray-600 md:text-base">
                「毎月、同じ書類を何十件も作っている」
                <br className="hidden sm:block" />
                「業務の8割はコピペと微調整で終わっている」
                <br className="hidden sm:block" />
                そんな仕事こそ、アプリにしてしまえば人がやる必要はありません。
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { number: '60〜90分', label: '書類1件あたりの作業時間' },
                  { number: '50〜75時間', label: '月50件対応した場合の工数' },
                  { number: '年100万円超', label: '年間の人件費換算' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card-elevated rounded-xl p-3 sm:p-5 md:p-6">
                    <div className="text-metallic mb-1 text-sm font-bold sm:mb-2 sm:text-xl md:text-3xl">
                      {stat.number}
                    </div>
                    <div className="text-[10px] leading-snug text-bluegray-500 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Case study: 爆速くん ── */}
          <section className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Case Study
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  たとえば、こんな効果が出ています
                </h2>
                <p className="mx-auto max-w-xl text-sm text-bluegray-600">
                  書類作成アプリ「<strong>爆速くん</strong>」を導入した現場での実例です。
                </p>
              </div>

              <div className="mx-auto mb-10 max-w-2xl overflow-hidden rounded-2xl border border-bluegray-100 bg-gradient-to-br from-slate-50 to-green-50 shadow-xl">
                <img
                  src={`${B}images/works/work-01.jpg`}
                  alt="爆速くんの画面"
                  className="w-full object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass-card-elevated rounded-xl p-4 sm:p-6 md:p-8">
                  <div className="mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase sm:text-xs">
                    作業時間
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-xs text-bluegray-500 line-through sm:text-sm">
                      60〜90分
                    </span>
                    <span className="text-metallic text-xl font-bold sm:text-3xl md:text-4xl">
                      約1分
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-bluegray-500 sm:mt-3 sm:text-xs">
                    1件あたりの書類作成が、手作業から約60倍のスピードに。
                  </p>
                </div>
                <div className="glass-card-elevated rounded-xl p-4 sm:p-6 md:p-8">
                  <div className="mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase sm:text-xs">
                    月間コスト
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-xs text-bluegray-500 line-through sm:text-sm">
                      13万円
                    </span>
                    <span className="text-metallic text-xl font-bold sm:text-3xl md:text-4xl">
                      ほぼ¥0
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-bluegray-500 sm:mt-3 sm:text-xs">
                    月50件×1,800円で試算した人件費が、ほぼゼロに圧縮。
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-xs text-bluegray-400">
                ※ 爆速くんはあくまで一例。あなたの業務に合わせて、同じようなアプリをオリジナルで制作します。
              </p>
            </div>
          </section>

          {/* ── 10 Examples ── */}
          <section id="examples" className="bg-slate-25 py-16 md:py-24">
            <div className="section-padding mx-auto max-w-5xl">
              <div className="mb-14 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Examples
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  こんなアプリも、作れます
                </h2>
                <p className="mx-auto max-w-xl text-sm text-bluegray-600">
                  書類作成だけじゃない。こんな活用例が10個あります。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {examples.map((ex, i) => (
                  <div
                    key={i}
                    className="glass-card-elevated flex items-start gap-2 rounded-xl p-3 sm:gap-3 sm:p-5 md:p-6"
                  >
                    <div className="bg-metallic-green flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white sm:h-8 sm:w-8 sm:text-xs md:h-9 md:w-9">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="mb-1 text-[11px] leading-tight font-bold text-bluegray-800 sm:text-sm md:text-base">
                        {ex.title}
                      </h3>
                      <p className="text-[10px] leading-snug text-bluegray-600 sm:text-xs md:text-sm md:leading-relaxed">
                        {ex.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-center text-sm text-bluegray-600">
                上記はほんの一例です。「これもできる？」というご相談、お気軽にどうぞ。
              </p>

              <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-bluegray-100 bg-white shadow-xl md:mt-14">
                <img
                  src={`${B}images/works/business-improvement.png`}
                  alt="1日30分の積み重ねが生む、年間・人数別の時間換算"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </section>

          {/* ── Flow ── */}
          <section className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-4xl">
              <div className="mb-14 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Flow
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  制作の流れ
                </h2>
              </div>

              <div className="space-y-5 md:space-y-6">
                {flow.map((step, i) => (
                  <div
                    key={i}
                    className="glass-card-elevated flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-start md:gap-8 md:p-8"
                  >
                    <div className="bg-metallic-green flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-bluegray-800">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-bluegray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Pricing ── */}
          <section id="pricing" className="bg-slate-25 py-16 md:py-24">
            <div className="section-padding mx-auto max-w-5xl">
              <div className="mb-14 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Pricing
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  料金プラン
                </h2>
                <p className="mx-auto max-w-lg text-sm text-bluegray-600">
                  まずは<strong className="font-bold">5万円から</strong>。
                  小さく始めて、効果を見ながら拡張していけます。
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                {plans.map((plan, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-xl border p-3 sm:p-5 md:p-8 ${
                      plan.popular
                        ? 'border-green-300 bg-white shadow-xl'
                        : 'border-bluegray-100 bg-white'
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-metallic-green absolute top-0 right-0 rounded-bl-lg px-1.5 py-0.5 text-[8px] font-bold text-white sm:px-3 sm:py-1 sm:text-[10px]">
                        おすすめ
                      </div>
                    )}
                    <h3 className="mb-1 text-xs font-bold text-bluegray-800 sm:text-base md:text-lg">
                      {plan.name}
                    </h3>
                    <p className="mb-2 text-[10px] leading-snug text-bluegray-500 sm:mb-4 sm:text-xs">
                      {plan.desc}
                    </p>
                    <div className="text-metallic mb-3 text-sm font-bold sm:mb-6 sm:text-xl md:text-2xl">
                      {plan.price}
                    </div>
                    <ul className="mb-3 space-y-1 sm:mb-6 sm:space-y-2">
                      {plan.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-1 text-[10px] leading-snug text-bluegray-600 sm:items-center sm:gap-2 sm:text-sm"
                        >
                          <svg
                            className="mt-0.5 h-2.5 w-2.5 shrink-0 text-green-500 sm:mt-0 sm:h-4 sm:w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="mailto:hello@example.com"
                      className={`block rounded-full py-1.5 text-center text-[10px] font-semibold no-underline transition-all sm:py-2.5 sm:text-xs md:py-3 md:text-sm ${
                        plan.popular
                          ? 'bg-metallic-green text-white hover:shadow-lg'
                          : 'bg-bluegray-50 text-bluegray-700 hover:bg-bluegray-100'
                      }`}
                    >
                      お問い合わせ
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-xs text-bluegray-400">
                ※ 機能や要件によって金額は前後します。まずは無料相談でお見積もりをご案内します。
              </p>
            </div>
          </section>

          {/* ── Final CTA ── */}
          <section className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                あなたの業務にも、専用アプリを。
              </h2>
              <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-bluegray-600">
                「うちのこの業務もアプリにできる？」そんな小さな疑問から、お気軽にご相談ください。
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="mailto:hello@example.com"
                  className="bg-metallic-green inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:shadow-xl sm:w-auto"
                >
                  無料で相談する
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
              &copy; {new Date().getFullYear()} 杜の都工房 — オリジナルアプリ制作
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
