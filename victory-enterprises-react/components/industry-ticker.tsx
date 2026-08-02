'use client'

import { useState } from 'react'
import { Utensils, Shirt, Pill, ShoppingCart, FlaskConical } from 'lucide-react'

const INDUSTRIES = [
  { label: 'FMCG Food & Spices', icon: Utensils },
  { label: 'Textiles & Garments', icon: Shirt },
  { label: 'Pharma & Cosmetics', icon: Pill },
  { label: 'E-Commerce', icon: ShoppingCart },
  { label: 'Industrial Chemicals', icon: FlaskConical },
]

export function IndustryTicker() {
  const [active, setActive] = useState(0)

  return (
    <section
      aria-label="Industries we serve"
      className="border-b border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-4 py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Industries we package for
        </p>
        <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1 no-scrollbar">
          {INDUSTRIES.map((item, i) => {
            const Icon = item.icon
            const isActive = active === i
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25'
                    : 'border-border bg-background text-foreground/75 hover:border-primary/40'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
