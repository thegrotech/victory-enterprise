import { Award, Ruler, PackageCheck, Truck } from 'lucide-react'

const FEATURES = [
  {
    icon: Award,
    title: '20+ Years Experience',
    desc: 'Serving Karachi brands since 2002.',
  },
  {
    icon: Ruler,
    title: '100% Custom Dimensions',
    desc: 'Every product built to your exact spec.',
  },
  {
    icon: PackageCheck,
    title: 'Low Minimum Orders',
    desc: 'Start small, scale as you grow.',
  },
  {
    icon: Truck,
    title: 'Fast Karachi Delivery',
    desc: 'In-city dispatch from our factory.',
  },
]

export function TrustGrid() {
  return (
    <section className="bg-teal text-teal-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Why brands choose us
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            A packaging partner you can rely on
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-teal-foreground/10 bg-teal-muted/50 p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold leading-tight sm:text-lg">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-teal-foreground/65">
                  {f.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
