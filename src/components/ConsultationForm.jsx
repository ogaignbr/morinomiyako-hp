import { useState } from 'react'

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || ''

const TOTAL_STEPS = 6

const consultationTypes = [
  'ホームページ・LP制作',
  'オリジナルアプリ制作',
  'AI秘書（業務自動化）',
  'AI搭載サポート（AI活用の伴走）',
  'その他',
]

const budgetOptions = [
  '〜10万円',
  '10〜30万円',
  '30〜50万円',
  '50万円以上',
  'まだ決まっていない',
]

const timelineOptions = [
  'できるだけ早く',
  '1ヶ月以内',
  '3ヶ月以内',
  '半年以内',
  '特に急いでいない',
]

export default function ConsultationForm({ onBack }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    consultationType: '',
    consultationTypeOther: '',
    hasWebsite: null,
    existingUrl: '',
    details: '',
    budget: '',
    timeline: '',
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
  })
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const progress = (step / TOTAL_STEPS) * 100

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const handleNext = () => {
    const newErrors = {}

    if (step === 1 && !form.consultationType) {
      newErrors.consultationType = '相談の種類を選択してください'
    }
    if (step === 1 && form.consultationType === 'その他' && !form.consultationTypeOther.trim()) {
      newErrors.consultationTypeOther = '内容を入力してください'
    }
    if (step === 2 && form.hasWebsite === null) {
      newErrors.hasWebsite = '選択してください'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setStep((s) => s + 1)
  }

  const handleBack = () => {
    if (step === 1) {
      onBack?.()
    } else {
      setStep((s) => s - 1)
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim()) {
      newErrors.fullName = 'お名前を入力してください'
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'メールアドレスを正しく入力してください'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return

    setSaving(true)
    setSubmitError(null)

    const data = {
      recordSheet: '問い合わせ',
      formType: '相談フォーム',
      consultationType:
        form.consultationType === 'その他'
          ? `その他: ${form.consultationTypeOther}`
          : form.consultationType,
      hasWebsite: form.hasWebsite ? 'はい' : 'いいえ',
      existingUrl: form.existingUrl,
      details: form.details,
      budget: form.budget || '未回答',
      timeline: form.timeline || '未回答',
      fullName: form.fullName,
      email: form.email,
      phone: form.phone || '未入力',
      businessName: form.businessName || '未入力',
      submittedAt: new Date().toISOString(),
    }

    try {
      if (!GOOGLE_APPS_SCRIPT_URL) {
        throw new Error('送信先が設定されていません')
      }
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSubmitted(true)
    } catch {
      setSubmitError('送信に失敗しました。通信環境を確認のうえ、もう一度お試しください。')
    } finally {
      setSaving(false)
    }
  }

  if (submitted) {
    return (
      <section className="bg-white px-4 py-8">
        <div className="mx-auto w-full max-w-[360px] text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-mint-500 to-mint-600 text-white shadow">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-[20px] font-bold text-bluegray-800">
            送信完了しました
          </h2>
          <p className="mt-3 text-[12px] leading-relaxed text-bluegray-600">
            ご相談内容を確認のうえ、<br />
            ご入力いただいたメールアドレス宛にご連絡いたします。
          </p>
          <p className="mt-1 text-[11px] text-bluegray-400">
            通常1〜2営業日以内にご返信します
          </p>
          <button
            onClick={onBack}
            className="mt-6 text-[12px] font-medium text-bluegray-400 underline transition hover:text-bluegray-600"
          >
            トップに戻る
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto w-full max-w-[360px]">
        {/* Progress */}
        <div className="mb-1 flex items-center justify-between text-[10px] text-bluegray-400">
          <span>Step {step} / {TOTAL_STEPS}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-bluegray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-mint-400 to-mint-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="min-h-[220px]">
          {/* Step 1: 相談の種類 */}
          {step === 1 && (
            <>
              <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
                どのようなご相談ですか？
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {consultationTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleChange('consultationType', type)}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-[12.5px] font-medium transition active:scale-[0.98] ${
                      form.consultationType === type
                        ? 'border-mint-400 bg-mint-50 text-mint-700 shadow-sm'
                        : 'border-bluegray-100 bg-white text-bluegray-700 shadow-sm hover:border-mint-300 hover:bg-mint-50'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                        form.consultationType === type
                          ? 'border-mint-500 bg-mint-500'
                          : 'border-bluegray-200'
                      }`}
                    >
                      {form.consultationType === type && (
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {type}
                  </button>
                ))}
              </div>
              {form.consultationType === 'その他' && (
                <div className="mt-3">
                  <input
                    type="text"
                    value={form.consultationTypeOther}
                    onChange={(e) => handleChange('consultationTypeOther', e.target.value)}
                    placeholder="ご相談内容を入力してください"
                    className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
                  />
                  {errors.consultationTypeOther && (
                    <p className="mt-1 text-[10.5px] text-red-400">{errors.consultationTypeOther}</p>
                  )}
                </div>
              )}
              {errors.consultationType && (
                <p className="mt-2 text-[10.5px] text-red-400">{errors.consultationType}</p>
              )}
            </>
          )}

          {/* Step 2: Webサイトの有無 */}
          {step === 2 && (
            <>
              <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
                現在、ホームページやWebサイトをお持ちですか？
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleChange('hasWebsite', true)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition active:scale-[0.98] ${
                    form.hasWebsite === true
                      ? 'border-mint-400 bg-mint-50 text-mint-700 shadow-sm'
                      : 'border-bluegray-100 bg-white text-bluegray-700 shadow-sm hover:border-mint-300 hover:bg-mint-50'
                  }`}
                >
                  <svg className="h-5 w-5 text-mint-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  はい
                </button>
                <button
                  onClick={() => handleChange('hasWebsite', false)}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-[13px] font-semibold transition active:scale-[0.98] ${
                    form.hasWebsite === false
                      ? 'border-mint-400 bg-mint-50 text-mint-700 shadow-sm'
                      : 'border-bluegray-100 bg-white text-bluegray-700 shadow-sm hover:border-mint-300 hover:bg-mint-50'
                  }`}
                >
                  <svg className="h-5 w-5 text-bluegray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  いいえ
                </button>
              </div>
              {form.hasWebsite === true && (
                <div className="mt-4">
                  <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
                    サイトURL <span className="text-[10px] font-normal text-bluegray-400">（任意）</span>
                  </label>
                  <input
                    type="url"
                    value={form.existingUrl}
                    onChange={(e) => handleChange('existingUrl', e.target.value)}
                    placeholder="https://example.com"
                    className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
                  />
                </div>
              )}
              {errors.hasWebsite && (
                <p className="mt-2 text-[10.5px] text-red-400">{errors.hasWebsite}</p>
              )}
            </>
          )}

          {/* Step 3: 相談内容（自由入力） */}
          {step === 3 && (
            <>
              <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
                具体的にどんなことを聞きたい・相談したいですか？
              </p>
              <p className="mt-2 text-[11px] text-bluegray-400">
                例：予約機能付きのホームページを作りたい / LINE連携を導入したい / AIで業務を効率化したい
              </p>
              <textarea
                value={form.details}
                onChange={(e) => handleChange('details', e.target.value)}
                placeholder="ご自由にお書きください"
                rows={5}
                className="mt-4 w-full resize-none rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] leading-relaxed text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
              />
            </>
          )}

          {/* Step 4: 予算感（任意） */}
          {step === 4 && (
            <>
              <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
                ご予算のイメージはありますか？
              </p>
              <p className="mt-1 text-[11px] text-bluegray-400">任意 - スキップしても大丈夫です</p>
              <div className="mt-5 flex flex-col gap-2">
                {budgetOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleChange('budget', form.budget === option ? '' : option)}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-[12.5px] font-medium transition active:scale-[0.98] ${
                      form.budget === option
                        ? 'border-mint-400 bg-mint-50 text-mint-700 shadow-sm'
                        : 'border-bluegray-100 bg-white text-bluegray-700 shadow-sm hover:border-mint-300 hover:bg-mint-50'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                        form.budget === option
                          ? 'border-mint-500 bg-mint-500'
                          : 'border-bluegray-200'
                      }`}
                    >
                      {form.budget === option && (
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 5: 時期（任意） */}
          {step === 5 && (
            <>
              <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
                いつ頃までに完成・導入したいですか？
              </p>
              <p className="mt-1 text-[11px] text-bluegray-400">任意 - スキップしても大丈夫です</p>
              <div className="mt-5 flex flex-col gap-2">
                {timelineOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleChange('timeline', form.timeline === option ? '' : option)}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-[12.5px] font-medium transition active:scale-[0.98] ${
                      form.timeline === option
                        ? 'border-mint-400 bg-mint-50 text-mint-700 shadow-sm'
                        : 'border-bluegray-100 bg-white text-bluegray-700 shadow-sm hover:border-mint-300 hover:bg-mint-50'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                        form.timeline === option
                          ? 'border-mint-500 bg-mint-500'
                          : 'border-bluegray-200'
                      }`}
                    >
                      {form.timeline === option && (
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Step 6: 連絡先 */}
          {step === 6 && (
            <>
              <p className="font-serif text-[15px] font-bold leading-relaxed tracking-[0.02em] text-bluegray-800">
                最後に、ご連絡先を教えてください
              </p>
              <div className="mt-5 flex flex-col gap-3.5">
                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
                    お名前 <span className="text-red-400">*</span>
                    <span className="text-[10px] font-normal text-bluegray-400">（ニックネーム可）</span>
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    placeholder="山田 太郎 / たろう など"
                    className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[10.5px] text-red-400">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
                    メールアドレス <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="example@email.com"
                    className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
                  />
                  {errors.email && (
                    <p className="mt-1 text-[10.5px] text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
                    電話番号 <span className="text-[10px] font-normal text-bluegray-400">（任意）</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="090-1234-5678"
                    className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
                    事業名・屋号 <span className="text-[10px] font-normal text-bluegray-400">（任意）</span>
                  </label>
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={(e) => handleChange('businessName', e.target.value)}
                    placeholder="株式会社〇〇 / 〇〇サロン など"
                    className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
                  />
                </div>
              </div>

              {submitError && (
                <p className="mt-3 text-center text-[11px] text-red-400">{submitError}</p>
              )}
            </>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-[12px] font-medium text-bluegray-400 transition hover:text-bluegray-600"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {step === 1 ? '戻る' : '前の質問に戻る'}
          </button>

          {step < TOTAL_STEPS ? (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-mint-600 to-mint-500 px-5 py-2.5 font-serif text-[12px] font-semibold tracking-[0.04em] text-white shadow-md transition hover:shadow-lg active:scale-[0.97]"
            >
              次へ
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={saving}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-mint-600 to-mint-500 px-5 py-2.5 font-serif text-[12px] font-semibold tracking-[0.04em] text-white shadow-md transition hover:shadow-lg active:scale-[0.97] disabled:opacity-60"
            >
              {saving ? '送信中...' : '送信する'}
            </button>
          )}
        </div>

        <p className="mt-4 text-center text-[10px] leading-relaxed text-bluegray-400">
          ご入力いただいた情報はご相談対応のみに使用します
        </p>
      </div>
    </section>
  )
}
