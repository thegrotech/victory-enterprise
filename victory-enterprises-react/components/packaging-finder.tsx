'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  MessageCircle,
  Check,
  Search,
  SlidersHorizontal,
  Package,
  Boxes,
  Truck,
  Tag,
} from 'lucide-react'

const WHATSAPP_NUMBER = '923368631744'

type Product = {
  id: string
  name: string
  blurb: string
  material: 'Flexible' | 'Paperboard' | 'Corrugated' | 'Plastic'
  useCases: string[]
  industries: string[]
  moq: string
  lead: string
}

const PRODUCTS: Product[] = [
  {
    id: 'standup-pouch',
    name: 'Stand-Up Zip Pouch',
    blurb:
      'Resealable stand-up foil pouch with matte finish and tear-notch. Great shelf presence for retail.',
    material: 'Flexible',
    useCases: ['Retail shelf', 'Food & edible', 'Resealable'],
    industries: ['Food & Beverage', 'Health & Supplements', 'Pet'],
    moq: '5,000 pcs',
    lead: '10–14 days',
  },
  {
    id: 'gusset-pouch',
    name: 'Side-Gusset Coffee Bag',
    blurb:
      'Classic side-gusset bag with degassing valve and tin-tie option for coffee and loose-leaf tea.',
    material: 'Flexible',
    useCases: ['Food & edible', 'Retail shelf'],
    industries: ['Food & Beverage'],
    moq: '5,000 pcs',
    lead: '12–16 days',
  },
  {
    id: 'spout-pouch',
    name: 'Spout Liquid Pouch',
    blurb:
      'Leak-proof spouted pouch for juices, sauces and liquid detergents with a child-safe cap.',
    material: 'Flexible',
    useCases: ['Liquid & viscous', 'Resealable'],
    industries: ['Food & Beverage', 'Home & Cleaning'],
    moq: '10,000 pcs',
    lead: '14–18 days',
  },
  {
    id: 'tuck-carton',
    name: 'Reverse Tuck Carton',
    blurb:
      'Premium SBS folding carton with spot-UV and foil options — the go-to for beauty and pharma.',
    material: 'Paperboard',
    useCases: ['Retail shelf', 'Luxury finish', 'Rigid protection'],
    industries: ['Beauty & Cosmetics', 'Pharma & Nutra', 'Electronics'],
    moq: '1,000 pcs',
    lead: '7–10 days',
  },
  {
    id: 'autolock-carton',
    name: 'Auto-Lock Bottom Box',
    blurb:
      'Crash-lock base carton that pops up fast on the line and carries heavier retail products.',
    material: 'Paperboard',
    useCases: ['Retail shelf', 'Rigid protection'],
    industries: ['Beauty & Cosmetics', 'Food & Beverage', 'Electronics'],
    moq: '1,000 pcs',
    lead: '8–12 days',
  },
  {
    id: 'rigid-box',
    name: 'Rigid Gift Box',
    blurb:
      'Luxury two-piece rigid box with wrap, magnetic closure and foam insert for premium unboxing.',
    material: 'Paperboard',
    useCases: ['Luxury finish', 'Rigid protection', 'Gifting'],
    industries: ['Beauty & Cosmetics', 'Electronics'],
    moq: '500 pcs',
    lead: '14–20 days',
  },
  {
    id: 'mailer-box',
    name: 'E-Commerce Mailer',
    blurb:
      'Die-cut corrugated mailer with tuck flaps and printed interior — perfect for subscription boxes.',
    material: 'Corrugated',
    useCases: ['Shipping & transit', 'Rigid protection', 'Gifting'],
    industries: ['E-commerce', 'Beauty & Cosmetics'],
    moq: '1,000 pcs',
    lead: '10–14 days',
  },
  {
    id: 'shipping-carton',
    name: 'Shipping Master Carton',
    blurb:
      'Heavy-duty 5-ply corrugated carton for bulk transit and warehouse stacking with print options.',
    material: 'Corrugated',
    useCases: ['Shipping & transit', 'Rigid protection'],
    industries: ['E-commerce', 'Food & Beverage', 'Home & Cleaning'],
    moq: '500 pcs',
    lead: '7–10 days',
  },
  {
    id: 'pet-bottle',
    name: 'PET Bottle + Label',
    blurb:
      'Food-grade PET bottle with roll-fed label or shrink sleeve for beverages and personal care.',
    material: 'Plastic',
    useCases: ['Liquid & viscous', 'Retail shelf'],
    industries: ['Food & Beverage', 'Beauty & Cosmetics', 'Home & Cleaning'],
    moq: '10,000 pcs',
    lead: '14–18 days',
  },
  {
    id: 'labels',
    name: 'Roll-Fed Labels',
    blurb:
      'Pressure-sensitive labels and shrink sleeves on rolls with waterproof and foil finishes.',
    material: 'Plastic',
    useCases: ['Retail shelf', 'Luxury finish'],
    industries: ['Food & Beverage', 'Beauty & Cosmetics', 'Health & Supplements'],
    moq: '5,000 pcs',
    lead: '5–8 days',
  },
]

const MATERIAL_ICON: Record<Product['material'], typeof Package> = {
  Flexible: Package,
  Paperboard: Boxes,
  Corrugated: Truck,
  Plastic: Tag,
}

// ---- Quiz configuration ----
type StepKey = 'industry' | 'useCase' | 'quantity' | 'priority'

const INDUSTRY_OPTIONS = [
  'Food & Beverage',
  'Beauty & Cosmetics',
  'Pharma & Nutra',
  'Health & Supplements',
  'E-commerce',
  'Home & Cleaning',
  'Electronics',
  'Pet',
]

const USE_CASE_OPTIONS = [
  'Retail shelf',
  'Shipping & transit',
  'Food & edible',
  'Liquid & viscous',
  'Luxury finish',
  'Rigid protection',
  'Resealable',
  'Gifting',
]

const QUANTITY_OPTIONS = ['Under 1,000', '1,000 – 5,000', '5,000 – 20,000', '20,000+']

const PRIORITY_OPTIONS = [
  'Lowest price',
  'Fastest turnaround',
  'Premium look',
  'Eco-friendly',
]

const STEPS: { key: StepKey; title: string; hint: string; options: string[] }[] = [
  {
    key: 'industry',
    title: 'What industry are you in?',
    hint: 'Pick the closest match — it helps us suggest the right format.',
    options: INDUSTRY_OPTIONS,
  },
  {
    key: 'useCase',
    title: 'How will the packaging be used?',
    hint: 'Choose the primary job your packaging needs to do.',
    options: USE_CASE_OPTIONS,
  },
  {
    key: 'quantity',
    title: 'Roughly how many units?',
    hint: 'A ballpark is fine — it affects pricing and format.',
    options: QUANTITY_OPTIONS,
  },
  {
    key: 'priority',
    title: "What matters most to you?",
    hint: 'We will highlight options that fit your priority.',
    options: PRIORITY_OPTIONS,
  },
]

type Answers = Partial<Record<StepKey, string>>

const MATERIAL_FILTERS: Array<Product['material'] | 'All'> = [
  'All',
  'Flexible',
  'Paperboard',
  'Corrugated',
  'Plastic',
]

function buildWhatsappUrl(product: Product, answers: Answers) {
  const lines = [
    `Hi Victory Enterprises! I used the packaging finder and I'm interested in:`,
    `• Product: ${product.name}`,
    answers.industry ? `• Industry: ${answers.industry}` : '',
    answers.useCase ? `• Use case: ${answers.useCase}` : '',
    answers.quantity ? `• Quantity: ${answers.quantity} units` : '',
    answers.priority ? `• Priority: ${answers.priority}` : '',
    ``,
    `Please share pricing and lead time. Thanks!`,
  ].filter(Boolean)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

export function PackagingFinder() {
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [showResults, setShowResults] = useState(false)

  // Catalog filters (used after the quiz, but adjustable anytime)
  const [materialFilter, setMaterialFilter] = useState<Product['material'] | 'All'>(
    'All',
  )
  const [query, setQuery] = useState('')

  const currentStep = STEPS[stepIndex]
  const progress = showResults
    ? 100
    : Math.round((stepIndex / STEPS.length) * 100)

  function selectOption(value: string) {
    const key = currentStep.key
    const next = { ...answers, [key]: value }
    setAnswers(next)

    // Seed catalog filters from the quiz answers
    if (key === 'useCase') {
      // keep material 'All' but the ranking below will sort by match
    }

    if (stepIndex < STEPS.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  function goBack() {
    if (showResults) {
      setShowResults(false)
      setStepIndex(STEPS.length - 1)
      return
    }
    if (stepIndex > 0) setStepIndex(stepIndex - 1)
  }

  function restart() {
    setAnswers({})
    setStepIndex(0)
    setShowResults(false)
    setMaterialFilter('All')
    setQuery('')
  }

  // Rank + filter products based on quiz answers and manual filters
  const ranked = useMemo(() => {
    const q = query.trim().toLowerCase()
    const scored = PRODUCTS.map((p) => {
      let score = 0
      if (answers.industry && p.industries.includes(answers.industry)) score += 3
      if (answers.useCase && p.useCases.includes(answers.useCase)) score += 3
      if (answers.priority === 'Fastest turnaround') {
        const low = parseInt(p.lead, 10)
        if (!Number.isNaN(low) && low <= 8) score += 1
      }
      if (answers.priority === 'Eco-friendly' &&
        (p.material === 'Corrugated' || p.material === 'Paperboard')) {
        score += 1
      }
      return { product: p, score }
    })

    return scored
      .filter(({ product }) =>
        materialFilter === 'All' ? true : product.material === materialFilter,
      )
      .filter(({ product }) =>
        q
          ? product.name.toLowerCase().includes(q) ||
            product.blurb.toLowerCase().includes(q) ||
            product.useCases.some((u) => u.toLowerCase().includes(q))
          : true,
      )
      .sort((a, b) => b.score - a.score)
  }, [answers, materialFilter, query])

  const topMatchId = showResults && ranked.length > 0 && ranked[0].score > 0
    ? ranked[0].product.id
    : null

  return (
    <section
      id="finder"
      className="scroll-mt-20 bg-teal py-16 text-teal-foreground sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            Packaging finder
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Not sure what you need? Let&apos;s find it in 4 taps
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-teal-foreground/70">
            Answer a few quick questions and we&apos;ll shortlist the right
            packaging formats. Refine the results, then send your pick straight
            to our team on WhatsApp.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-teal-foreground/15 bg-teal-muted/40 shadow-2xl">
          {/* Progress bar */}
          <div className="h-1.5 w-full bg-teal-foreground/10">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Finder progress"
            />
          </div>

          {!showResults ? (
            /* ---------- QUIZ ---------- */
            <div className="p-6 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-foreground/50">
                  Step {stepIndex + 1} of {STEPS.length}
                </p>
                {stepIndex > 0 && (
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium text-teal-foreground/70 transition-colors hover:bg-teal-foreground/10 hover:text-teal-foreground"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                )}
              </div>

              <h3 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                {currentStep.title}
              </h3>
              <p className="mt-2 text-sm text-teal-foreground/60">
                {currentStep.hint}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {currentStep.options.map((option) => {
                  const active = answers[currentStep.key] === option
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => selectOption(option)}
                      className={`group flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-base font-semibold transition-all active:scale-[0.98] ${
                        active
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-teal-foreground/15 bg-teal-foreground/5 text-teal-foreground hover:border-primary/60 hover:bg-teal-foreground/10'
                      }`}
                    >
                      {option}
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                          active
                            ? 'bg-primary-foreground/20'
                            : 'bg-teal-foreground/10 group-hover:bg-primary/20'
                        }`}
                      >
                        {active ? (
                          <Check className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            /* ---------- RESULTS + FILTERS ---------- */
            <div className="p-6 sm:p-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Your packaging matches
                  </h3>
                  <p className="mt-2 text-sm text-teal-foreground/60">
                    {ranked.length} option{ranked.length === 1 ? '' : 's'} based on{' '}
                    {[answers.industry, answers.useCase]
                      .filter(Boolean)
                      .join(' · ') || 'your selection'}
                    . Refine below.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-teal-foreground/20 px-3 py-2 text-sm font-medium text-teal-foreground/80 transition-colors hover:bg-teal-foreground/10"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-teal-foreground/20 px-3 py-2 text-sm font-medium text-teal-foreground/80 transition-colors hover:bg-teal-foreground/10"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Restart
                  </button>
                </div>
              </div>

              {/* Filter controls */}
              <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-teal-foreground/10 bg-teal-foreground/5 p-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap gap-2">
                  {MATERIAL_FILTERS.map((m) => {
                    const active = materialFilter === m
                    return (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMaterialFilter(m)}
                        className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                          active
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-teal-foreground/10 text-teal-foreground/75 hover:bg-teal-foreground/20'
                        }`}
                      >
                        {m}
                      </button>
                    )
                  })}
                </div>
                <div className="relative w-full lg:w-64">
                  <Search
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-foreground/50"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search formats…"
                    aria-label="Search packaging formats"
                    className="w-full rounded-xl border border-teal-foreground/15 bg-teal py-2.5 pl-9 pr-3 text-sm text-teal-foreground placeholder:text-teal-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              {/* Results grid */}
              {ranked.length === 0 ? (
                <div className="mt-8 rounded-2xl border border-dashed border-teal-foreground/20 p-10 text-center">
                  <p className="text-base font-semibold">No exact matches</p>
                  <p className="mt-1 text-sm text-teal-foreground/60">
                    Try clearing filters — or just message us and we&apos;ll
                    recommend the best option.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Ask an expert
                  </a>
                </div>
              ) : (
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {ranked.map(({ product }) => {
                    const Icon = MATERIAL_ICON[product.material]
                    const isTop = product.id === topMatchId
                    return (
                      <article
                        key={product.id}
                        className={`relative flex flex-col rounded-2xl border bg-teal p-5 transition-shadow hover:shadow-xl ${
                          isTop
                            ? 'border-primary ring-2 ring-primary/40'
                            : 'border-teal-foreground/12'
                        }`}
                      >
                        {isTop && (
                          <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                            Best match
                          </span>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <h4 className="text-base font-bold leading-tight">
                              {product.name}
                            </h4>
                            <p className="text-xs font-medium uppercase tracking-wider text-teal-foreground/50">
                              {product.material}
                            </p>
                          </div>
                        </div>

                        <p className="mt-3 flex-1 text-sm leading-relaxed text-teal-foreground/70">
                          {product.blurb}
                        </p>

                        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                          <div className="rounded-lg bg-teal-foreground/8 px-3 py-2">
                            <dt className="text-teal-foreground/50">MOQ</dt>
                            <dd className="font-bold">{product.moq}</dd>
                          </div>
                          <div className="rounded-lg bg-teal-foreground/8 px-3 py-2">
                            <dt className="text-teal-foreground/50">Lead time</dt>
                            <dd className="font-bold">{product.lead}</dd>
                          </div>
                        </dl>

                        <a
                          href={buildWhatsappUrl(product, answers)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-transform active:scale-95"
                        >
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          Get this on WhatsApp
                        </a>
                      </article>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
