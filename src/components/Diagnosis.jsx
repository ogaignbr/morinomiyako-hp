import { useState } from 'react'
import { site } from '../data/siteContent'
import SampleRequestForm from './SampleRequestForm'
import ConsultationForm from './ConsultationForm'

// Q1 is shared (yes/no). After that, questions branch.
const firstQuestion = {
  text: '現在、自分のホームページやWebサイトを持っていますか？',
  type: 'yesno',
}

// Branch A: Webサイトを持っている人向け（現状の満足度を聞く）
const questionsHasWeb = [
  { text: '今のWebサイトのデザインに満足している', category: 'web' },
  { text: 'スマホで見たときの表示や使いやすさに問題はない', category: 'web' },
  { text: 'Webサイトからの問い合わせや集客につながっている', category: 'web' },
  { text: 'SNSやLINEへの導線がきちんと整っている', category: 'flow' },
  { text: 'お客様が迷わず予約・問い合わせできる状態になっている', category: 'flow' },
  { text: '予約管理やお客様対応を効率化したいと感じている', category: 'flow', reverse: true },
  { text: '日々の繰り返し作業（通知・連絡など）を自動化したい', category: 'flow', reverse: true },
  { text: 'AIやデジタルツールを積極的に取り入れたい', category: 'future', reverse: true },
  { text: '自分の業務に合ったオリジナルのツールやアプリがほしい', category: 'future', reverse: true },
  { text: 'しっかり作り込んで本格的に運用したい', category: 'future', flag: 'serious', reverse: true },
  { text: 'できるだけ早くWebサイトを公開したい', category: 'future', flag: 'speed', reverse: true },
]

// Branch B: Webサイトを持っていない人向け（何を重視するかを聞く）
const questionsNoWeb = [
  { text: 'Webサイトで自分のサービスや商品の魅力をしっかり伝えたい', category: 'web', reverse: true },
  { text: 'デザインの質や見た目の印象を大切にしたい', category: 'web', reverse: true },
  { text: 'スマホでの見やすさ・使いやすさを重視したい', category: 'web', reverse: true },
  { text: 'SNSやLINEへスムーズに誘導できる仕組みがほしい', category: 'flow', reverse: true },
  { text: 'お客様からの予約や問い合わせをWebで受け付けたい', category: 'flow', reverse: true },
  { text: '予約管理やお客様対応を効率化したい', category: 'flow', reverse: true },
  { text: '日々の繰り返し作業（通知・連絡など）を自動化したい', category: 'flow', reverse: true },
  { text: 'AIやデジタルツールを積極的に取り入れたい', category: 'future', reverse: true },
  { text: '自分の業務に合ったオリジナルのツールやアプリがほしい', category: 'future', reverse: true },
  { text: 'しっかり作り込んで本格的に運用したい', category: 'future', flag: 'serious', reverse: true },
  { text: 'できるだけ早くWebサイトを公開したい', category: 'future', flag: 'speed', reverse: true },
]

const TOTAL_QUESTIONS = 12 // Q1 + 11 branch questions

const scaleLabels = [
  'まったくそう思わない',
  'あまりそう思わない',
  'どちらともいえない',
  'ややそう思う',
  'とてもそう思う',
]

const results = {
  speedlight: {
    title: 'スピードライトプラン',
    price: '8.8万円（税込）',
    description:
      'まずは最短で「見せられる1ページ」を持つことが、今のあなたにぴったりです。低コストで素早く公開でき、LINEやInstagramへの導線も整えられます。名刺代わりのWebサイトとして、最初の一歩に最適なプランです。',
    href: '#/plan-light',
  },
  standard: {
    title: 'スタンダードプラン',
    price: '29.8万円（税込）',
    description:
      'サービス内容や会社情報をしっかり伝え、信頼感のあるWebサイトが必要な段階です。問い合わせフォームや導線設計も含まれており、「ちゃんとしたサイト」を持つことで集客力が大きく変わります。',
    href: '#/plan-standard',
  },
  premium: {
    title: 'プレミアムプラン',
    price: '45.8万円〜（税込）',
    description:
      '予約受付から管理、LINEリマインドまで一気通貫で仕組み化したい方に最適です。お客様にとっては予約しやすく、運営側にとっては管理がラクになる。集客と業務効率化を両立できる本格プランです。',
    href: '#/plan-premium',
  },
  ai_secretary: {
    title: 'AI秘書',
    price: '80,000円〜',
    description:
      '日々の繰り返し作業や通知対応を自動化したいというニーズが強く出ています。AI秘書なら、ルーティンワークをAIに任せて、本当に大切な仕事に集中できる環境を作れます。',
    href: '#/ai-secretary',
  },
  app: {
    title: 'オリジナルアプリ制作',
    price: '50,000円〜',
    description:
      '既製品では解決できない業務課題をお持ちのようです。あなたの業務に合わせた世界にひとつだけのオリジナルアプリで、「あったらいいな」を形にできます。',
    href: '#/bakusoku',
  },
  ai_update: {
    title: 'AI搭載サポート',
    price: '個別相談',
    description:
      'AIへの関心が高く、積極的に取り入れたいという姿勢が見られます。AIを「使う」のではなく「自分に搭載する」。相棒と呼べるまで伴走するサポートプランがおすすめです。',
    href: '#/ai-update',
  },
}

function getRecommendation(hasWebsite, branchAnswers, branchQuestions) {
  const catScores = { web: 0, flow: 0, future: 0 }
  const catCounts = { web: 0, flow: 0, future: 0 }
  const flags = { serious: 0, speed: 0 }

  branchQuestions.forEach((q, i) => {
    const raw = branchAnswers[i] ?? 3
    const score = q.reverse ? raw : 6 - raw
    catScores[q.category] += score
    catCounts[q.category] += 1
    if (q.flag) flags[q.flag] = raw
  })

  const avg = {
    web: catScores.web / catCounts.web,
    flow: catScores.flow / catCounts.flow,
    future: catScores.future / catCounts.future,
  }

  const webNeed = avg.web
  const flowNeed = avg.flow
  const futureNeed = avg.future

  const candidates = []

  if (!hasWebsite) {
    // No website: recommend based on what they want
    if (flags.speed >= 4 && webNeed < 4) {
      candidates.push({ key: 'speedlight', score: 6 + flags.speed * 0.3 })
    }
    if (flags.serious >= 4 && flowNeed >= 3.5) {
      candidates.push({ key: 'premium', score: 5.5 + flowNeed * 0.3 + flags.serious * 0.2 })
    }
    if (flags.serious >= 3 && webNeed >= 3.5) {
      candidates.push({ key: 'standard', score: 5 + webNeed * 0.2 + flags.serious * 0.2 })
    }
    if (flowNeed >= 4) {
      candidates.push({ key: 'premium', score: flowNeed + 2 })
    }
    // Default for no-website
    if (flags.speed >= 4) {
      candidates.push({ key: 'speedlight', score: 5 })
    } else {
      candidates.push({ key: 'standard', score: 4 })
    }
  } else {
    // Has website: recommend based on dissatisfaction
    if (webNeed >= 3.5) {
      if (flags.serious >= 4 && flowNeed >= 3.5) {
        candidates.push({ key: 'premium', score: webNeed + flowNeed + flags.serious * 0.3 })
      }
      if (flags.serious >= 3) {
        candidates.push({ key: 'standard', score: webNeed + flags.serious * 0.2 })
      }
      candidates.push({ key: 'standard', score: webNeed })
    }
    if (flags.speed >= 4 && webNeed >= 3) {
      candidates.push({ key: 'speedlight', score: webNeed + flags.speed * 0.3 })
    }
  }

  // Flow / automation needs (common)
  if (flowNeed >= 3.5) {
    candidates.push({ key: 'premium', score: flowNeed + 1 })
    candidates.push({ key: 'ai_secretary', score: flowNeed + 0.5 })
  }
  if (flowNeed >= 4) {
    candidates.push({ key: 'ai_secretary', score: flowNeed + 1.5 })
  }

  // AI / future needs (common)
  if (futureNeed >= 3.5) {
    candidates.push({ key: 'ai_update', score: futureNeed + 0.5 })
    candidates.push({ key: 'app', score: futureNeed })
  }
  if (futureNeed >= 4) {
    candidates.push({ key: 'ai_update', score: futureNeed + 1.5 })
    candidates.push({ key: 'app', score: futureNeed + 1 })
  }

  // Fallback
  if (candidates.length === 0) {
    candidates.push({ key: 'standard', score: 3 })
  }

  const best = {}
  candidates.forEach((c) => {
    if (!best[c.key] || c.score > best[c.key].score) {
      best[c.key] = c
    }
  })

  const sorted = Object.values(best).sort((a, b) => b.score - a.score)

  const primary = results[sorted[0]?.key] || results.standard
  let secondary = null
  if (sorted.length > 1 && sorted[1].key !== sorted[0].key) {
    secondary = results[sorted[1].key]
  }

  return { primary, secondary }
}

export default function Diagnosis() {
  const [started, setStarted] = useState(false)
  const [consultationMode, setConsultationMode] = useState(false)
  const [hasWebsite, setHasWebsite] = useState(null)
  const [current, setCurrent] = useState(0) // index within branch questions
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)
  const [recommendation, setRecommendation] = useState(null)

  const branchQuestions = hasWebsite ? questionsHasWeb : questionsNoWeb

  const handleStart = () => {
    setStarted(true)
    setHasWebsite(null)
    setCurrent(0)
    setAnswers([])
    setFinished(false)
    setRecommendation(null)
  }

  const handleFirstAnswer = (yes) => {
    setHasWebsite(yes)
    setCurrent(0)
    setAnswers([])
  }

  const handleAnswer = (value) => {
    const next = [...answers, value]
    setAnswers(next)
    const qs = hasWebsite ? questionsHasWeb : questionsNoWeb
    if (current + 1 >= qs.length) {
      setRecommendation(getRecommendation(hasWebsite, next, qs))
      setFinished(true)
    } else {
      setCurrent(current + 1)
    }
  }

  const handleBack = () => {
    if (current > 0) {
      setCurrent(current - 1)
      setAnswers(answers.slice(0, -1))
    } else {
      // Go back to Q1
      setHasWebsite(null)
      setCurrent(0)
      setAnswers([])
    }
  }

  // Consultation form
  if (consultationMode) {
    return (
      <ConsultationForm
        onBack={() => setConsultationMode(false)}
      />
    )
  }

  // Landing
  if (!started) {
    return (
      <section className="bg-white px-4 pt-4 pb-8">
        <div className="mx-auto w-full max-w-[360px]">
          <div className="mb-6 text-center">
            <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
              Contact
            </span>
            <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
              お問い合わせ
            </h2>
            <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleStart}
              className="cta-glint flex flex-col items-center rounded-2xl bg-[linear-gradient(145deg,#1b6f43_0%,#2ea565_45%,#165937_100%)] p-5 text-center shadow-[0_10px_24px_rgba(10,30,18,0.35),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-4px_10px_rgba(0,0,0,0.2)] ring-1 ring-white/25 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(10,30,18,0.45),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-4px_10px_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-[0_4px_10px_rgba(10,30,18,0.3),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <span className="font-serif text-[15px] font-bold tracking-[0.06em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                診断する
              </span>
              <p className="mt-1.5 text-[10.5px] leading-relaxed text-white/80">
                質問に答えて最適なプランを見つける
              </p>
            </button>

            <button
              onClick={() => setConsultationMode(true)}
              className="cta-glint flex flex-col items-center rounded-2xl bg-[linear-gradient(145deg,#1b6f43_0%,#2ea565_45%,#165937_100%)] p-5 text-center shadow-[0_10px_24px_rgba(10,30,18,0.35),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-4px_10px_rgba(0,0,0,0.2)] ring-1 ring-white/25 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(10,30,18,0.45),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-4px_10px_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-[0_4px_10px_rgba(10,30,18,0.3),inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-serif text-[15px] font-bold tracking-[0.06em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                相談する
              </span>
              <p className="mt-1.5 text-[10.5px] leading-relaxed text-white/80">
                質問に答えてお気軽にご相談
              </p>
            </button>
          </div>
        </div>
      </section>
    )
  }

  // Result screen
  if (finished && recommendation) {
    const { primary, secondary } = recommendation
    return (
      <section className="bg-white px-4 py-8">
        <div className="mx-auto w-full max-w-[360px]">
          <div className="text-center">
            <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
              Result
            </span>
            <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
              診断結果
            </h2>
            <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
          </div>

          <div className="mt-6 rounded-2xl border border-mint-200 bg-gradient-to-br from-mint-50 to-white p-5 shadow-md">
            <div className="mb-1 text-[10px] font-semibold tracking-[0.1em] text-mint-500 uppercase">
              Best Match
            </div>
            <h3 className="font-serif text-[18px] font-bold text-bluegray-800">
              {primary.title}
            </h3>
            <p className="mt-0.5 text-[13px] font-semibold text-mint-600">{primary.price}</p>
            <p className="mt-3 text-[12px] leading-relaxed text-bluegray-600">
              {primary.description}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={primary.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-mint-600 to-mint-500 px-5 py-2 font-serif text-[12px] font-semibold tracking-[0.04em] text-white no-underline shadow-md transition hover:shadow-lg active:scale-[0.97]"
              >
                このプランを詳しく見る
              </a>
              <a
                href={`mailto:${site.email}?subject=%E8%A8%BA%E6%96%AD%E7%B5%90%E6%9E%9C%E3%81%8B%E3%82%89%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87`}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-mint-200 bg-white px-5 py-2 font-serif text-[12px] font-semibold tracking-[0.04em] text-mint-600 no-underline transition hover:bg-mint-50"
              >
                メールで相談する
              </a>
            </div>
          </div>

          {secondary && (
            <div className="mt-4 rounded-xl border border-bluegray-100 bg-bluegray-50/50 p-4">
              <div className="mb-1 text-[10px] font-semibold tracking-[0.1em] text-bluegray-400 uppercase">
                Also Recommended
              </div>
              <h4 className="font-serif text-[15px] font-bold text-bluegray-700">
                {secondary.title}
              </h4>
              <p className="mt-0.5 text-[12px] font-semibold text-bluegray-500">{secondary.price}</p>
              <p className="mt-2 text-[11.5px] leading-relaxed text-bluegray-500">
                {secondary.description}
              </p>
              <a
                href={secondary.href}
                className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold text-mint-600 no-underline transition hover:text-mint-700"
              >
                詳しく見る
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}

          {!hasWebsite && primary.href !== '#/plan-light' && (
            <div className="mt-4 rounded-2xl border-2 border-dashed border-mint-300 bg-mint-50/60 p-5 text-center">
              <p className="font-serif text-[13px] font-bold tracking-[0.02em] text-bluegray-800">
                まずはすぐ作りましょう
              </p>
              <p className="mt-2 text-[11.5px] leading-relaxed text-bluegray-600">
                Webサイトがない状態が一番もったいないです。まずは8.8万円のスピードライトプランで最短3日で公開し、そこから必要に応じてステップアップするのがおすすめです。
              </p>
              <a
                href="#/plan-light"
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-mint-600 to-mint-500 px-5 py-2 font-serif text-[12px] font-semibold tracking-[0.04em] text-white no-underline shadow-md transition hover:shadow-lg active:scale-[0.97]"
              >
                スピードライトプランを見る
              </a>
            </div>
          )}

          <SampleRequestForm diagnosisResult={primary.title} />

          <div className="mt-6 text-center">
            <button
              onClick={handleStart}
              className="text-[12px] font-medium text-bluegray-400 underline transition hover:text-bluegray-600"
            >
              もう一度診断する
            </button>
          </div>
        </div>
      </section>
    )
  }

  // Q1: yes/no (before branch is decided)
  if (hasWebsite === null) {
    return (
      <section className="bg-white px-4 py-8">
        <div className="mx-auto w-full max-w-[360px]">
          <div className="mb-1 flex items-center justify-between text-[10px] text-bluegray-400">
            <span>Q1 / {TOTAL_QUESTIONS}</span>
            <span>0%</span>
          </div>
          <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-bluegray-100">
            <div className="h-full w-0 rounded-full bg-gradient-to-r from-mint-400 to-mint-500" />
          </div>

          <div className="min-h-[180px]">
            <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
              {firstQuestion.text}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleFirstAnswer(true)}
                className="flex items-center justify-center gap-2 rounded-xl border border-bluegray-100 bg-white px-4 py-3.5 text-[13px] font-semibold text-bluegray-700 shadow-sm transition hover:border-mint-300 hover:bg-mint-50 active:scale-[0.98]"
              >
                <svg className="h-5 w-5 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                はい
              </button>
              <button
                onClick={() => handleFirstAnswer(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-bluegray-100 bg-white px-4 py-3.5 text-[13px] font-semibold text-bluegray-700 shadow-sm transition hover:border-mint-300 hover:bg-mint-50 active:scale-[0.98]"
              >
                <svg className="h-5 w-5 text-bluegray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                いいえ
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Branch questions (Q2-Q12)
  const q = branchQuestions[current]
  const displayIndex = current + 2 // Q1 was first
  const progress = (displayIndex - 1) / TOTAL_QUESTIONS * 100

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-1 flex items-center justify-between text-[10px] text-bluegray-400">
          <span>Q{displayIndex} / {TOTAL_QUESTIONS}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-bluegray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-mint-400 to-mint-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="min-h-[180px]">
          <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
            {q.text}
          </p>

          <div className="mt-6 flex flex-col gap-2">
            {scaleLabels.map((label, i) => {
              const value = 5 - i
              return (
                <button
                  key={value}
                  onClick={() => handleAnswer(value)}
                  className="flex items-center gap-3 rounded-xl border border-bluegray-100 bg-white px-4 py-3 text-left text-[12.5px] font-medium text-bluegray-700 shadow-sm transition hover:border-mint-300 hover:bg-mint-50 active:scale-[0.98]"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-bluegray-200 text-[10px] font-bold text-bluegray-400">
                    {value}
                  </span>
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        <button
          onClick={handleBack}
          className="mt-4 flex items-center gap-1 text-[12px] font-medium text-bluegray-400 transition hover:text-bluegray-600"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          前の質問に戻る
        </button>
      </div>
    </section>
  )
}
