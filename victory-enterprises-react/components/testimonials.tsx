import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  {
    quote:
      'Victory has printed our cosmetic cartons for three years. The foiling quality is consistent and they always hit the deadline.',
    name: 'Ayesha K.',
    role: 'Founder, Beauty brand',
  },
  {
    quote:
      'We moved our e-commerce mailer boxes to Victory and cut packaging cost by 22%. Direct factory pricing is real.',
    name: 'Bilal R.',
    role: 'Ops lead, Online store',
  },
  {
    quote:
      'Their team fixed our dieline, sent a mockup the same day, and delivered 10,000 pouches within a week. Highly recommended.',
    name: 'Hamza S.',
    role: 'Coffee roaster',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Client feedback
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Trusted by brands across Pakistan
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
              <div
                className="mt-3 flex gap-0.5 text-primary"
                aria-label="Rated 5 out of 5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                {r.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
