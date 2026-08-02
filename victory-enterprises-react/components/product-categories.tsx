import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/923368631744'

const CATEGORIES = [
  {
    title: 'Flexible Pouches',
    image: '/cat-pouches.png',
    blurb:
      'Stand-up, three-side seal and gusseted pouches with zip-lock, spout or tear-notch options.',
    items: ['Coffee & tea', 'Snacks & spices', 'Pet food', 'Powders & supplements'],
  },
  {
    title: 'Folding Cartons',
    image: '/cat-cartons.png',
    blurb:
      'Retail-ready tuck-end and auto-lock boxes on premium SBS and kraft board with luxury finishes.',
    items: ['Cosmetics & beauty', 'Pharma & nutraceutical', 'Confectionery', 'Electronics'],
  },
  {
    title: 'Corrugated Boxes',
    image: '/cat-corrugated.png',
    blurb:
      'Heavy-duty shipping cartons, e-commerce mailers and die-cut inserts in 3 and 5-ply board.',
    items: ['E-commerce shipping', 'Master cartons', 'Mailer boxes', 'Protective inserts'],
  },
  {
    title: 'Labels & Bottles',
    image: '/cat-labels.png',
    blurb:
      'Roll-fed and sheet labels, shrink sleeves plus PET bottles and jars for liquids and cosmetics.',
    items: ['Product labels', 'Shrink sleeves', 'PET bottles', 'Jars & closures'],
  },
]

export function ProductCategories() {
  return (
    <section id="products" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What we make
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Every format of packaging, under one roof
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Whether you need 500 luxury cartons or a full container of shipping
            boxes, our factory produces it end-to-end &mdash; design, printing,
            die-cutting, lamination and finishing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <article
              key={cat.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={`${cat.title} produced by Victory Enterprises`}
                  fill
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-secondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-accent-foreground"
                >
                  Get pricing
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
