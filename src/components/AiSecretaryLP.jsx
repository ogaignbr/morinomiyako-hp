import { useEffect } from 'react'
import FloatingSymbols from './FloatingSymbols'

const B = import.meta.env.BASE_URL

const examples = [
  {
    title: '会員サイトの新着メッセージ通知',
    description:
      'マッチングサイトや受発注サイトなど、毎回ログインが必要なサービスをAIが巡回。新着DMだけをLINEへ集約通知。',
  },
  {
    title: 'Slack / Chatwork / Teamsの未読まとめ',
    description:
      '複数のチャットツールに分散した未読を、AIが決まった時間にチェックして重要なものだけを1通のLINEにまとめて通知。',
  },
  {
    title: '予約管理システムの新規予約アラート',
    description:
      '予約システムやフォームに新しい予約が入ったら即LINEへ。キャンセル・変更もリアルタイムで共有できます。',
  },
  {
    title: 'ECサイト・モールの注文・レビュー通知',
    description:
      'BASE・STORES・Shopify・楽天・Amazonなど、複数の販売チャネルの注文・レビューをLINEに一本化。',
  },
  {
    title: '銀行・決済サービスの入出金レポート',
    description:
      'ネットバンクや決済管理画面をAIが毎日巡回し、入金・出金の要点を朝イチでLINEに配信。経理の負担を大幅削減。',
  },
  {
    title: 'SNSのDM・メンション通知',
    description:
      'X（旧Twitter）、Instagram、ThreadsのDMやメンションをAIが監視。反応が必要なものだけをLINEへ通知します。',
  },
  {
    title: 'クラウドソーシング新着案件の監視',
    description:
      'Lancers・クラウドワークスなどの新着案件を条件指定でAIが巡回。該当する案件だけをLINEへ速報。',
  },
  {
    title: '競合サイト・在庫・価格の変動監視',
    description:
      '競合サイトや自社商品ページの在庫・価格・掲載内容の変化を定点監視し、変更があればLINEでレポート。',
  },
  {
    title: '採用管理・求人サイトの応募通知',
    description:
      '複数の求人媒体や採用管理システムを巡回。新規応募・選考状況の更新を担当者のLINEグループへ即共有。',
  },
  {
    title: 'YouTube・note・ブログの反応通知',
    description:
      'コメントや新規フォロワー、売上レポートなどをAIが毎朝まとめてLINEへ。発信に集中できる環境を整えます。',
  },
]

export default function AiSecretaryLP() {
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
                  AI秘書
                </a>
                <a
                  href="#secretary-cta"
                  className="rounded-full bg-metallic-pink px-5 py-2 text-xs font-semibold text-white no-underline transition-all hover:shadow-lg md:text-sm"
                >
                  相談する
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
                <span className="h-2 w-2 rounded-full bg-metallic-pink" />
                <span className="text-xs font-semibold text-bluegray-600">
                  通知の取りこぼし、もう終わりにしませんか？
                </span>
              </div>

              <h1 className="mb-6 text-2xl leading-tight font-bold tracking-tight text-bluegray-800 sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="block">複数システムのチェックは、</span>
                <span className="text-metallic-pink block">AI秘書にまかせてLINEで受け取る。</span>
              </h1>

              <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-bluegray-600 md:text-base">
                会員サイト、SNS、チャットツール…。
                <br className="hidden sm:block" />
                あちこち散らばった通知をAIが代わりに点検し、
                <strong className="font-bold">普段使いのLINE</strong>に届けます。
              </p>

              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="#secretary-cta"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-metallic-pink px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:shadow-xl sm:w-auto"
                >
                  無料で相談する
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
                その通知、見逃していませんか？
              </h2>
              <p className="mx-auto mb-12 max-w-xl text-sm leading-relaxed text-bluegray-600 md:text-base">
                チャット、会員サイト、予約システム、SNS…。
                <br className="hidden sm:block" />
                ツールが増えるほど通知も分散し、気づいた時には返信が遅れ、機会を逃してしまう。
                <br className="hidden sm:block" />
                そんな「取りこぼし」はAIに任せれば、一気になくなります。
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { number: '5〜10個', label: '日々チェックする通知元' },
                  { number: '平均4時間', label: '遅れがちな返信までの時間' },
                  { number: '年間◯件', label: '取りこぼした機会損失' },
                ].map((stat, i) => (
                  <div key={i} className="glass-card-elevated rounded-xl p-3 sm:p-5 md:p-6">
                    <div className="text-metallic-pink mb-1 text-sm font-bold sm:mb-2 sm:text-xl md:text-3xl">
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

          {/* ── Case study ── */}
          <section className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <span className="mb-3 inline-block text-xs font-semibold tracking-[0.15em] text-bluegray-400 uppercase">
                  Case Study
                </span>
                <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                  たとえば、こんな使い方
                </h2>
                <p className="mx-auto max-w-xl text-sm text-bluegray-600">
                  複数の会員サイトを<strong>AIが毎日巡回</strong>し、新着メッセージをグループLINEへ集約した例。
                </p>
              </div>

              <div className="mx-auto mb-10 max-w-2xl overflow-hidden rounded-2xl border border-bluegray-100 bg-gradient-to-br from-slate-50 to-pink-50 shadow-xl">
                <img
                  src={`${B}images/works/ai-secretary-card.jpg`}
                  alt="AI秘書のイメージ"
                  className="w-full object-contain"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="glass-card-elevated rounded-xl p-4 sm:p-6 md:p-8">
                  <div className="mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase sm:text-xs">
                    通知の確認
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-xs text-bluegray-500 line-through sm:text-sm">
                      1日数回ログイン
                    </span>
                    <span className="text-metallic-pink text-xl font-bold sm:text-3xl md:text-4xl">
                      LINEで完結
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-bluegray-500 sm:mt-3 sm:text-xs">
                    各サイトを開く手間をなくし、返信までの時間を短縮。
                  </p>
                </div>
                <div className="glass-card-elevated rounded-xl p-4 sm:p-6 md:p-8">
                  <div className="mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase sm:text-xs">
                    チームへの共有
                  </div>
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-xs text-bluegray-500 line-through sm:text-sm">
                      1人が確認
                    </span>
                    <span className="text-metallic-pink text-xl font-bold sm:text-3xl md:text-4xl">
                      全員に即時
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-bluegray-500 sm:mt-3 sm:text-xs">
                    グループLINE＋公式LINEで、関係者へ一斉アナウンス。
                  </p>
                </div>
              </div>

              <p className="mt-8 text-center text-xs text-bluegray-400">
                ※ 上記は一例です。お客様の業務に合わせて、巡回先・通知の内容・タイミングをオーダーメイドで設計します。
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
                  こんなこと、AIに任せられます
                </h2>
                <p className="mx-auto max-w-xl text-sm text-bluegray-600">
                  「ログインして情報を取り、必要な人へ届ける」<br className="hidden sm:block" />
                  定型業務なら、こんな活用例があります。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {examples.map((ex, i) => (
                  <div
                    key={i}
                    className="glass-card-elevated flex items-start gap-2 rounded-xl p-3 sm:gap-3 sm:p-5 md:p-6"
                  >
                    <div className="bg-metallic-pink flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white sm:h-8 sm:w-8 sm:text-xs md:h-9 md:w-9">
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
            </div>
          </section>

          {/* ── Final CTA ── */}
          <section id="secretary-cta" className="py-16 md:py-24">
            <div className="section-padding mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold text-bluegray-800 md:text-3xl">
                通知に振り回される毎日を、卒業しませんか？
              </h2>
              <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-bluegray-600">
                「このサイトも巡回できる？」「こんな通知もLINEにまとめられる？」
                小さなご相談から、お気軽にどうぞ。
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href="mailto:hello@example.com"
                  className="bg-metallic-pink inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:shadow-xl sm:w-auto"
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
              &copy; {new Date().getFullYear()} 杜の都工房 — AI秘書
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
