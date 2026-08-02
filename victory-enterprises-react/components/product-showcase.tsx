'use client'

import { useState } from 'react'
import {
  Package,
  Box,
  Layers,
  Milk,
  ShoppingBag,
  Printer,
  Check,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Category = {
  id: string
  short: string
  title: string
  icon: LucideIcon
  description: string
  items: string[]
  badges: string[]
}

const CATEGORIES: Category[] = [
  {
    id: 'flexible',
    short: 'Flexible',
    title: 'Flexible Packaging',
    icon: Package,
    description:
      'High-barrier laminates that keep products fresh and shelf-ready.',
    items: [
      'Stand-up pouches',
      'Sachets',
      'Roll stock',
      'Foil barrier laminates',
    ],
    badges: ['Custom Sizes', 'Low MOQs', 'Flexo Printing'],
  },
  {
    id: 'corrugated',
    short: 'Corrugated',
    title: 'Corrugated Boxes',
    icon: Box,
    description:
      'Durable kraft cartons engineered for shipping and e-commerce.',
    items: [
      '3-Ply kraft cartons',
      '5-Ply heavy-duty boxes',
      '7-Ply export cartons',
      'E-commerce mailers',
    ],
    badges: ['Custom Dimensions', 'Bulk Volumes', 'Fast Delivery'],
  },
  {
    id: 'folding',
    short: 'Cartons',
    title: 'Folding Paper Cartons',
    icon: Layers,
    description:
      'Premium retail cartons with high-end finishes that sell on shelf.',
    items: [
      'Mono cartons',
      'Duplex board packaging',
      'Retail display boxes',
      'Spot UV finishes',
    ],
    badges: ['Offset Printing', 'Spot UV', 'Foiling & Embossing'],
  },
  {
    id: 'rigid',
    short: 'Plastic',
    title: 'Rigid Plastic Packaging',
    icon: Milk,
    description:
      'Blow-molded bottles and containers for liquids, powders and more.',
    items: [
      'HDPE bottles',
      'PET bottles',
      'Blow-molded containers',
      'Caps & closures',
    ],
    badges: ['Custom Molds', 'Food Grade', 'Multiple Volumes'],
  },
  {
    id: 'poly',
    short: 'Poly & Sacks',
    title: 'Poly Bags & PP Woven Sacks',
    icon: ShoppingBag,
    description:
      'Rugged bulk sacks and poly solutions for agriculture and logistics.',
    items: [
      'Bulk agricultural sacks',
      'Shrink wraps',
      'Poly mailers',
      'PP woven bags',
    ],
    badges: ['Bulk Orders', 'Custom Sizes', 'UV Treated'],
  },
  {
    id: 'printing',
    short: 'Printing',
    title: 'Commercial Printing',
    icon: Printer,
    description:
      'High-volume offset printing for marketing and corporate collateral.',
    items: [
      'High-volume offset',
      'Catalogs & brochures',
      'Corporate stationery',
      'Marketing collateral',
    ],
    badges: ['Offset Printing', 'High Volume', 'Fast Turnaround'],
  },
]

export function ProductShowcase() {
  const [active, setActive] = useState(CATEGORIES[0].id)
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0]
  const Icon = current.icon

  return (
    <section id="products" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What we manufacture
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl lg:text-4xl">
            One factory. Every packaging format.
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Tap a category to explore products, specs and finishing options.
          </p>
        </div>

        {/* segmented control */}
        <div
          role="tablist"
          aria-label="Product categories"
          className="mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        >
          {CATEGORIES.map((cat) => {
            const CatIcon = cat.icon
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                  isActive
                    ? 'border-secondary bg-secondary text-secondary-foreground shadow-md'
                    : 'border-border bg-card text-foreground/70 hover:border-secondary/30'
                }`}
              >
                <CatIcon className="h-4 w-4" aria-hidden="true" />
                {cat.short}
              </button>
            )
          })}
        </div>

        {/* detail card */}
        <div
          key={current.id}
          className="mt-6 grid animate-fade-up gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold tracking-tight text-secondary sm:text-2xl">
                {current.title}
              </h3>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {current.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {current.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-bold text-accent-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {current.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl bg-muted px-3.5 py-3 text-sm font-medium text-foreground"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
