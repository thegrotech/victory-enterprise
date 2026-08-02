'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'What is your minimum order quantity (MOQ)?',
    a: 'MOQ depends on the product. Folding cartons and pouches typically start at 500–1,000 units, while corrugated shipping boxes can start lower. Share your requirement and we will confirm the exact MOQ.',
  },
  {
    q: 'Do you help with design and dielines?',
    a: 'Yes. Our in-house studio prepares dielines, sets up your artwork and sends a digital proof or 3D mockup for approval before anything goes to print — at no extra cost on most orders.',
  },
  {
    q: 'How long does production take?',
    a: 'Most orders are delivered within 7 working days after artwork approval. Rush timelines are possible depending on the format and finishing.',
  },
  {
    q: 'Can you match specific brand (Pantone) colours?',
    a: 'Absolutely. We print in CMYK and can match Pantone spot colours for consistent brand colour across every batch.',
  },
  {
    q: 'Do you deliver outside Karachi?',
    a: 'Yes. We deliver across Karachi directly and ship nationwide via trusted logistics partners, palletised and protected.',
  },
  {
    q: 'What finishing options are available?',
    a: 'Gloss/matte/soft-touch lamination, gold and silver foiling, embossing, debossing, spot UV, windows and more. We will recommend what suits your product and budget.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 bg-card py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Questions
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-background">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-muted/50"
                  >
                    <span className="text-sm font-bold text-foreground sm:text-base">
                      {faq.q}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-secondary">
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div className="animate-fade-up px-5 pb-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
