import { representative } from '../data/siteContent'

export default function Representative() {
  return (
    <section className="relative bg-white px-4 pt-4 pb-12">
      <div className="mx-auto w-full max-w-[360px]">
        <div className="mb-6 text-center">
          <span className="text-metallic mb-2 inline-block text-[10px] font-semibold tracking-[0.25em] uppercase">
            Message
          </span>
          <h2 className="font-serif text-[20px] font-bold tracking-[0.04em] text-bluegray-800">
            代表挨拶
          </h2>
          <div className="mx-auto mt-3 h-[1.5px] w-12 rounded-full bg-metallic-green" />
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg ring-1 ring-bluegray-100">
            <img
              src={representative.photo}
              alt={representative.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-center">
            <span className="text-[10px] font-semibold tracking-[0.18em] text-bluegray-400 uppercase">
              {representative.role}
            </span>
            <h3 className="font-serif text-[18px] font-bold tracking-[0.04em] text-bluegray-800">
              {representative.name}
            </h3>
            <p className="mt-1 text-[11px] text-bluegray-500">{representative.location}</p>
            <p className="text-[11px] text-bluegray-500">家族：{representative.family}</p>
          </div>
        </div>

        <div className="mt-7 space-y-4">
          {representative.greeting.map((paragraph, i) => (
            <p
              key={i}
              className="whitespace-pre-line text-[13px] leading-[1.95] text-bluegray-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
