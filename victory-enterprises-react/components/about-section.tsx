import Image from 'next/image'
import { CircleCheck } from 'lucide-react'

const POINTS = [
  'In-house design studio and pre-press team',
  'Offset, digital and flexographic printing lines',
  'Automatic die-cutting, folding and gluing',
  'Lamination, foiling, embossing and spot UV finishing',
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-card py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <div className="relative order-last aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-lg lg:order-first">
          <Image
            src="/factory-floor.png"
            alt="Interior of the Victory Enterprises printing and packaging factory floor"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-2xl bg-teal px-5 py-3 text-teal-foreground shadow-xl">
            <p className="text-sm font-semibold">Nazimabad No. 2, Karachi</p>
            <p className="text-xs text-teal-foreground/70">
              Own manufacturing facility
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who we are
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A packaging factory, not a middleman
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Victory Enterprises has manufactured custom packaging in Karachi
            since 2002. Because we own every stage of production, you get direct
            factory pricing, tighter quality control and faster turnaround than
            working through trading agents.
          </p>

          <ul className="mt-6 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CircleCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
