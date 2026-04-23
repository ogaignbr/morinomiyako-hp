import { useEffect } from 'react'
import FloatingSymbols from './FloatingSymbols'

const B = import.meta.env.BASE_URL

const flow = [
  {
    number: '01',
    title: 'ヒアリング・戦略設計',
    description:
      'まずは2〜3時間しっかりお話を伺います。「誰に、何を、どう伝えたいか」を言語化し、ゴール・ターゲット・訴求軸を一緒に設計していきます。',
  },
  {
    number: '02',
    title: 'ワイヤー・デザイン制作',
    description:
      '動線設計（ワイヤーフレーム）→ ビジュアルデザインの順で制作。AIでたたき台を高速生成し、人の手で細部を磨き込むハイブリッド進行。',
  },
  {
    number: '03',
    title: 'コーディング・公開',
    description:
      'スマホファーストで実装し、公開までサポート。公開後の簡単な修正も対応。運用のしかたまで丁寧にお渡しします。',
  },
]

const examples = [
  {
    title: 'コーポレート・企業サイト',
    description:
      '会社の顔となる信頼性重視のサイト。実績・強み・サービスを整理し、問い合わせまで迷わない導線を設計します。',
  },
  {
    title: 'サービス紹介LP（1枚完結型）',
    description:
      '1商品・1サービスを徹底訴求。購入・申込までの迷いをなくすコピーと動線で、成約率の高いLPに仕上げます。',
  },
  {
    title: '採用サイト・リクルートページ',
    description:
      '社員の声・働く環境・代表からのメッセージを通じて、"合う人"だけを呼び込む採用ページを構築します。',
  },
  {
    title: 'ポートフォリオサイト',
    description:
      '個人事業主・クリエイターの世界観を可視化。作品と人柄が伝わる、次の仕事につながる一枚を制作します。',
  },
  {
    title: '公式LINE構築（リッチメニュー）',
    description:
      'リッチメニュー・自動応答・ステップ配信まで設計。LINE上で顧客とつながり続ける仕組みをワンストップで。',
  },
  {
    title: '予約・申込フォーム付きサイト',
    description:
      '予約・相談・お申込みまでをサイト内で完結。離脱を防ぐUIで、問い合わせ数をしっかり増やします。',
  },
  {
    title: '店舗紹介サイト',
    description:
      'Googleマップ・メニュー・予約導線をスマホ最適化。「通いたくなる」雰囲気を伝える店舗ページに。',
  },
  {
    title: 'イベント告知LP',
    description:
      'セミナー・キャンペーン・期間限定イベント向け。短期集中で成果を出すワンページ構成で制作します。',
  },
  {
    title: 'オンラインスクール・講座LP',
    description:
      '講座内容・講師紹介・受講者の声まで、信頼を積み上げる構成で設計。申込まで迷わせません。',
  },
  {
    title: 'ブログ・メディアサイト',
    description:
      '発信を続けやすい管理画面と、読まれるデザイン。SEOを意識した構成で、ファンが育つメディアに。',
  },
]

const plans = [
  {
    name: 'ライトLP',
    price: '¥130,000〜',
    desc: '1ページ完結型のシンプル構成',
    features: [
      '1ページ構成（5〜7セクション)',
      '戦略設計＋ワイヤー＋デザイン',
      'スマホ最適化',
      '公開後1ヶ月の微修正込み',
    ],
  },
  {
    name: 'スタンダードHP',
    price: '¥280,000〜',
    desc: '複数ページのコーポレート・サービス',
    features: [
      '5〜8ページ構成',
      'お問い合わせフォーム実装',
      '公式LINE連携・SNS導線',
      '公開後3ヶ月の運用サポート',
    ],
    popular: true,
  },
  {
    name: 'プレミアム',
    price: '要見積もり',
    desc: '本格的な戦略設計が必要な方へ',
    features: [
      '無制限のページ数',
      '上位表示対策（SEO）',
      'ブランディング一式',
      '保守・改修プランあり',
    ],
  },
]

export default function WebDesignLP() {
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
                  href={import.meta.env.BASE_URL}
                  className="text-base font-bold tracking-tight text-bluegray-800 no-underline md:text-lg"
                >
                  Webページ制作
                </a>
                <a
                  href="#pricing"
                  className="bg-metallic-blue rounded-full px-5 py-2 text-xs font-semibold text-white no-underline transition-all hover:shadow-lg md:text-sm"
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
                <span className="bg-metallic-blue h-2 w-2 rounded-full" />
                <span className="text-xs font-semibold text-bluegray-600">
                  見た目だけで終わらない、動線設計型Webページ
                </span>
              </div>

              <h1 className="mb-6 text-2xl leading-tight font-bold tracking-tight text-bluegray-800 sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="block">"誰に・何を"を突き詰めた、</span>
                <span className="text-metallic-blue block">伝わるWebページを。</span>
              </h1>

              <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-bluegray-600 md:text-base">
                丁寧なヒアリングと動線設計で、
                <strong className="font-bold">"あなたの会社に合った"</strong>
                ページを1枚ずつ形に。
                <br className="hidden sm:block" />
                AIを活用するから、通常より<strong className="font-bold">スピーディ</strong>に仕上がります。
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="#pricing"
                  className="bg-metallic-blue inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:shadow-xl sm:w-auto"
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
                "作っただけ"で終わっていませんか？
              </h2>
              <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-bluegray-600 md:text-base">
                きれいなだけのホームページは、もう成果を生みません。
                <br className="hidden sm:block" />
                「誰に何を届けるか」が曖昧なままだと、
                どれだけ見た目を磨いても問い合わせも予約も増えないままです。
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { number: '見た目だけ', label: '動線設計がないHP' },
                  { number: '月0件', label: '問い合わせのない状態' },
                  { number: '更新停止', label: '放置されたサイト' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card-elevated rounded-xl p-3 sm:p-5 md:p-6">
                    <div className="text-metallic-blue mb-1 text-sm font-bold sm:mb-2 sm:text-xl md:text-3xl">
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

          {/* ── 3 Strengths ── */}
          <section className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Our Strength
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  杜の都工房の3つのこだわり
                </h2>
                <p className="mx-auto max-w-xl text-sm text-bluegray-600">
                  見た目だけじゃない、成果につなげるための設計思想。
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                {[
                  {
                    number: '01',
                    title: '動線設計',
                    desc: '"誰に・何を・どう伝えるか"を突き詰め、お問い合わせ・申込みまで迷わない構成を設計します。',
                  },
                  {
                    number: '02',
                    title: '丁寧な対話',
                    desc: '2〜3時間のヒアリングから、会社の色・大切にしたい想いを引き出し、ページに落とし込みます。',
                  },
                  {
                    number: '03',
                    title: 'AIで高速化',
                    desc: 'たたき台をAIで高速生成し、人の手で仕上げる。だから通常の制作スピードより早く形になります。',
                  },
                ].map((item, i) => (
                  <div key={i} className="glass-card-elevated rounded-xl p-3 sm:p-5 md:p-8">
                    <div className="bg-metallic-blue mb-2 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white sm:mb-3 sm:h-9 sm:w-9 sm:text-xs md:h-10 md:w-10">
                      {item.number}
                    </div>
                    <h3 className="mb-1 text-xs font-bold text-bluegray-800 sm:mb-2 sm:text-sm md:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-[10px] leading-snug text-bluegray-600 sm:text-xs md:text-sm md:leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Case study ── */}
          <section className="bg-slate-25 py-16 md:py-24">
            <div className="section-padding mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Case Study
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  たとえば、こんな仕上がりに
                </h2>
                <p className="mx-auto max-w-xl text-sm text-bluegray-600">
                  実際に制作した<strong>ブランドLP</strong>の一例。
                  ヒアリングで出てきた想いを、動画とコピーで丁寧に表現しました。
                </p>
              </div>

              <div className="mx-auto mb-10 max-w-2xl overflow-hidden rounded-2xl border border-bluegray-100 bg-gradient-to-br from-slate-50 to-blue-50 shadow-xl">
                <video
                  src={`${B}images/works/brand-lp-card.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass-card-elevated rounded-xl p-4 sm:p-6 md:p-8">
                  <div className="mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase sm:text-xs">
                    制作期間
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-xs text-bluegray-500 line-through sm:text-sm">
                      通常1〜2ヶ月
                    </span>
                    <span className="text-metallic-blue text-xl font-bold sm:text-3xl md:text-4xl">
                      最短2週間
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-bluegray-500 sm:mt-3 sm:text-xs">
                    AIでたたき台を高速化。人の手で仕上げるハイブリッド進行。
                  </p>
                </div>
                <div className="glass-card-elevated rounded-xl p-4 sm:p-6 md:p-8">
                  <div className="mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase sm:text-xs">
                    ヒアリング
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-xs text-bluegray-500 line-through sm:text-sm">
                      表面的な打合せ
                    </span>
                    <span className="text-metallic-blue text-xl font-bold sm:text-3xl md:text-4xl">
                      2〜3時間
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-bluegray-500 sm:mt-3 sm:text-xs">
                    深いヒアリングで、会社の想いと動線を一緒に設計します。
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-xs text-bluegray-400">
                ※ 掲載は一例です。お客様のブランドに合わせて、世界観・構成・トーンをオーダーメイドで制作します。
              </p>
            </div>
          </section>

          {/* ── 10 Examples ── */}
          <section id="examples" className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-5xl">
              <div className="mb-14 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Examples
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  こんなWebページを作れます
                </h2>
                <p className="mx-auto max-w-xl text-sm text-bluegray-600">
                  業種や目的に合わせて、10種類以上のページを制作しています。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {examples.map((ex, i) => (
                  <div
                    key={i}
                    className="glass-card-elevated flex items-start gap-2 rounded-xl p-3 sm:gap-3 sm:p-5 md:p-6"
                  >
                    <div className="bg-metallic-blue flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white sm:h-8 sm:w-8 sm:text-xs md:h-9 md:w-9">
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
                上記はほんの一例です。「こんなページ作れる？」というご相談、お気軽にどうぞ。
              </p>
            </div>
          </section>

          {/* ── Flow ── */}
          <section className="bg-slate-25 py-16 md:py-24">
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
                    <div className="bg-metallic-blue flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-bluegray-800">{step.title}</h3>
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
          <section id="pricing" className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-5xl">
              <div className="mb-14 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Pricing
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  料金プラン
                </h2>
                <p className="mx-auto max-w-lg text-sm text-bluegray-600">
                  <strong className="font-bold">13万円から</strong>
                  。まずは1枚、あなたの会社に合ったページから始めましょう。
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                {plans.map((plan, i) => (
                  <div
                    key={i}
                    className={`relative overflow-hidden rounded-xl border p-3 sm:p-5 md:p-8 ${
                      plan.popular
                        ? 'border-blue-300 bg-white shadow-xl'
                        : 'border-bluegray-100 bg-white'
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-metallic-blue absolute top-0 right-0 rounded-bl-lg px-1.5 py-0.5 text-[8px] font-bold text-white sm:px-3 sm:py-1 sm:text-[10px]">
                        おすすめ
                      </div>
                    )}
                    <h3 className="mb-1 text-xs font-bold text-bluegray-800 sm:text-base md:text-lg">
                      {plan.name}
                    </h3>
                    <p className="mb-2 text-[10px] leading-snug text-bluegray-500 sm:mb-4 sm:text-xs">
                      {plan.desc}
                    </p>
                    <div className="text-metallic-blue mb-3 text-sm font-bold sm:mb-6 sm:text-xl md:text-2xl">
                      {plan.price}
                    </div>
                    <ul className="mb-3 space-y-1 sm:mb-6 sm:space-y-2">
                      {plan.features.map((f, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-1 text-[10px] leading-snug text-bluegray-600 sm:items-center sm:gap-2 sm:text-sm"
                        >
                          <svg
                            className="mt-0.5 h-2.5 w-2.5 shrink-0 text-blue-500 sm:mt-0 sm:h-4 sm:w-4"
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
                          ? 'bg-metallic-blue text-white hover:shadow-lg'
                          : 'bg-bluegray-50 text-bluegray-700 hover:bg-bluegray-100'
                      }`}
                    >
                      お問い合わせ
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-xs text-bluegray-400">
                ※ ページ数・機能・写真撮影の有無などによって金額は前後します。まずは無料相談でお見積もりをご案内します。
              </p>
            </div>
          </section>

          {/* ── Final CTA ── */}
          <section className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                "あなたの会社に合った"1枚を、一緒に作りませんか？
              </h2>
              <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-bluegray-600">
                制作のご依頼はもちろん、「まだ方向性が固まっていない」段階のご相談も大歓迎です。
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="mailto:hello@example.com"
                  className="bg-metallic-blue inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:shadow-xl sm:w-auto"
                >
                  無料で相談する
                </a>
                <a
                  href={import.meta.env.BASE_URL}
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
              &copy; {new Date().getFullYear()} 杜の都工房 — Webページ制作
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
