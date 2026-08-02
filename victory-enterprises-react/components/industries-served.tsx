import {
  ShoppingBag,
  Pill,
  Sparkles,
  Cookie,
  Coffee,
  Shirt,
  Cpu,
  Dog,
} from 'lucide-react'

const INDUSTRIES = [
  { icon: ShoppingBag, title: 'E-commerce & Retail', desc: 'Mailer boxes, shipping cartons and unboxing-ready packaging.' },
  { icon: Pill, title: 'Pharma & Nutraceutical', desc: 'Compliant folding cartons, inserts and tamper-evident boxes.' },
  { icon: Sparkles, title: 'Cosmetics & Beauty', desc: 'Luxury rigid and folding boxes with foiling and soft-touch.' },
  { icon: Cookie, title: 'Food & Confectionery', desc: 'Food-grade pouches, cartons and printed wraps.' },
  { icon: Coffee, title: 'Coffee & Tea', desc: 'Barrier stand-up pouches with valves and zip-locks.' },
  { icon: Shirt, title: 'Apparel & Textile', desc: 'Hang tags, poly-mailers and branded shipping boxes.' },
  { icon: Cpu, title: 'Electronics', desc: 'Protective corrugated inserts and retail cartons.' },
  { icon: Dog, title: 'Pet & Agri', desc: 'Heavy-fill gusseted bags and bulk packaging.' },
]

export function IndustriesServed() {
  return (
    <section
      id="industries"
      className="scroll-mt-20 bg-card py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Industries we serve
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Packaging tuned to your category
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            We understand the material, compliance and shelf-appeal needs of each
            sector we produce for.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.title}
                className="rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm font-bold tracking-tight text-foreground">
                  {ind.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {ind.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
