import { representative } from '../data/siteContent'

export default function Representative() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-padding mx-auto max-w-4xl">
        <div className="mb-14 text-center md:mb-20">
          <span className="text-metallic mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase">
            Message
          </span>
          <h2 className="section-line mb-4 text-2xl font-bold tracking-tight text-bluegray-800 md:text-3xl">
            代表挨拶
          </h2>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-12">
          {/* Photo - circle, side-aligned */}
          <div className="shrink-0">
            <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-48 md:w-48">
              <img
                src={representative.photo}
                alt={representative.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-1">
              <span className="text-xs font-semibold text-bluegray-400">{representative.role}</span>
              <h3 className="text-xl font-bold text-bluegray-800 md:text-2xl">
                {representative.name}
              </h3>
            </div>
            <p className="mb-5 text-xs text-bluegray-400">{representative.location}　家族：{representative.family}</p>

            <p className="mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase">Career</p>
            {representative.career.map((paragraph, i) => (
              <p key={i} className="mb-4 text-sm leading-loose text-bluegray-600 last:mb-0">
                {paragraph}
              </p>
            ))}

            <p className="mt-6 mb-1 text-[10px] font-semibold tracking-widest text-bluegray-400 uppercase">Hobbies</p>
            <p className="text-sm leading-loose text-bluegray-600">{representative.hobbies}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
