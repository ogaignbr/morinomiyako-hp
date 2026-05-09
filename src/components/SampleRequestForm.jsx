import { useState } from 'react'

const GOOGLE_APPS_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || ''

const colorThemes = [
  'ナチュラル・グリーン',
  'クール・ブルー',
  'エレガント・ブラック',
  'ウォーム・オレンジ',
  'フェミニン・ピンク',
  'モノトーン',
  'その他',
]

const industries = [
  '飲食店・カフェ',
  '美容・サロン',
  '医療・クリニック',
  '教育・スクール',
  '不動産',
  '士業（税理士・弁護士等）',
  'EC・ネットショップ',
  'コンサル・コーチング',
  'フリーランス・個人事業',
  'その他',
]

const designStyles = [
  'かっこよく',
  'スタイリッシュに',
  'ポップに',
  'ナチュラルに',
  '高級感のある',
  'やわらかい・親しみやすい',
  'シンプル・ミニマル',
]

export default function SampleRequestForm({ diagnosisResult }) {
  const [form, setForm] = useState({
    companyName: '',
    fullName: '',
    email: '',
    existingUrl: '',
    colorTheme: '',
    industry: '',
    designStyle: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!form.fullName || !form.fullName.trim()) {
      newErrors.fullName = '氏名を入力してください（ニックネーム可）'
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'メールアドレスを正しく入力してください'
    }
    if (!form.colorTheme) newErrors.colorTheme = 'カラーテーマを選択してください'
    if (!form.industry) newErrors.industry = '業種を選択してください'
    if (!form.designStyle) newErrors.designStyle = '制作イメージを選択してください'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSaving(true)
    setSubmitError(null)

    const data = {
      ...form,
      recordSheet: 'サンプル制作',
      diagnosisResult: diagnosisResult || '',
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
      <div className="mt-6 rounded-2xl border border-mint-200 bg-gradient-to-br from-mint-50 to-white p-6 text-center shadow-md">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-mint-500 to-mint-600 text-white shadow">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-[16px] font-bold text-bluegray-800">
          送信完了しました
        </h3>
        <p className="mt-2 text-[12px] leading-relaxed text-bluegray-600">
          ご入力いただいたメールアドレス宛に、<br />
          サンプルデザインをお届けいたします。
        </p>
        <p className="mt-1 text-[11px] text-bluegray-400">
          通常1〜2営業日以内にお届けします
        </p>
      </div>
    )
  }

  return (
    <div className="mt-6 rounded-2xl border border-mint-200 bg-gradient-to-br from-white to-mint-50/30 p-5 shadow-md">
      <div className="mb-4 text-center">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-mint-500 to-mint-600 text-white shadow">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="font-serif text-[16px] font-bold tracking-[0.04em] text-bluegray-800">
          無料サンプル画像を受け取る
        </h3>
        <p className="mt-1.5 text-[11px] leading-relaxed text-bluegray-500">
          以下を入力いただくと、あなた専用のデザインサンプルを<br />
          無料でお作りしてお届けします
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
        {/* Company Name */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
            会社名 <span className="text-[10px] font-normal text-bluegray-400">（任意）</span>
          </label>
          <input
            type="text"
            value={form.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            placeholder="株式会社〇〇 / 個人事業主など"
            className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
            氏名 <span className="text-red-400">*</span>
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

        {/* Email */}
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

        {/* Existing URL */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
            既存サイトURL <span className="text-[10px] font-normal text-bluegray-400">（任意）</span>
          </label>
          <input
            type="url"
            value={form.existingUrl}
            onChange={(e) => handleChange('existingUrl', e.target.value)}
            placeholder="https://example.com"
            className="w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] text-bluegray-800 outline-none transition placeholder:text-bluegray-300 focus:border-mint-400 focus:ring-2 focus:ring-mint-100"
          />
        </div>

        {/* Color Theme */}
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold text-bluegray-600">
            カラーテーマ <span className="text-red-400">*</span>
          </label>
          <div className="flex flex-wrap gap-1.5">
            {colorThemes.map((theme) => (
              <button
                key={theme}
                type="button"
                onClick={() => handleChange('colorTheme', theme)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                  form.colorTheme === theme
                    ? 'border-mint-400 bg-mint-50 text-mint-700 shadow-sm'
                    : 'border-bluegray-150 bg-white text-bluegray-500 hover:border-mint-300 hover:bg-mint-50/50'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
          {errors.colorTheme && (
            <p className="mt-1 text-[10.5px] text-red-400">{errors.colorTheme}</p>
          )}
        </div>

        {/* Industry */}
        <div>
          <label className="mb-1 block text-[11px] font-semibold text-bluegray-600">
            業種 <span className="text-red-400">*</span>
          </label>
          <select
            value={form.industry}
            onChange={(e) => handleChange('industry', e.target.value)}
            className={`w-full rounded-lg border border-bluegray-200 bg-white px-3 py-2.5 text-[13px] outline-none transition focus:border-mint-400 focus:ring-2 focus:ring-mint-100 ${
              form.industry ? 'text-bluegray-800' : 'text-bluegray-300'
            }`}
          >
            <option value="" disabled>業種を選択してください</option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-[10.5px] text-red-400">{errors.industry}</p>
          )}
        </div>

        {/* Design Style */}
        <div>
          <label className="mb-1.5 block text-[11px] font-semibold text-bluegray-600">
            制作イメージ <span className="text-red-400">*</span>
          </label>
          <div className="flex flex-wrap gap-1.5">
            {designStyles.map((style) => (
              <button
                key={style}
                type="button"
                onClick={() => handleChange('designStyle', style)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${
                  form.designStyle === style
                    ? 'border-mint-400 bg-mint-50 text-mint-700 shadow-sm'
                    : 'border-bluegray-150 bg-white text-bluegray-500 hover:border-mint-300 hover:bg-mint-50/50'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
          {errors.designStyle && (
            <p className="mt-1 text-[10.5px] text-red-400">{errors.designStyle}</p>
          )}
        </div>

        {submitError && (
          <p className="text-center text-[11px] text-red-400">{submitError}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={saving}
          className="mt-1 w-full rounded-full bg-gradient-to-r from-mint-600 to-mint-500 py-3 font-serif text-[13px] font-semibold tracking-[0.04em] text-white shadow-md transition hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
        >
          {saving ? '送信中…' : '無料サンプルを受け取る'}
        </button>

        <p className="text-center text-[10px] leading-relaxed text-bluegray-400">
          ご入力いただいた情報はサンプル制作のみに使用します
        </p>
      </form>
    </div>
  )
}
