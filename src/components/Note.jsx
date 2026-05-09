export default function Note() {
  return (
    <section id="note" className="relative bg-white px-4 pt-8 pb-10">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Blog
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            ブログ
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-bluegray-100 bg-bluegray-50/40 py-14 px-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-mint-100 to-mint-200 text-mint-500">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <h3 className="font-serif text-[16px] font-bold tracking-[0.04em] text-bluegray-700">
            Coming Soon
          </h3>
          <p className="mt-2 text-[12px] leading-relaxed text-bluegray-400">
            ブログ記事を準備中です。<br />
            公開までしばらくお待ちください。
          </p>
        </div>
      </div>
    </section>
  )
}
