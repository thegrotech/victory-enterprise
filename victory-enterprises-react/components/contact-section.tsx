'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  CircleCheck,
  Send,
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/923368631744'
const PRODUCT_OPTIONS = [
  'Flexible Packaging',
  'Corrugated Boxes',
  'Folding Paper Cartons',
  'Rigid Plastic Packaging',
  'Poly Bags & PP Woven Sacks',
  'Commercial Printing',
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Get a quote
          </span>
          <h2 className="mt-2 text-balance text-2xl font-extrabold tracking-tight text-secondary sm:text-3xl lg:text-4xl">
            Tell us what you need to package
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Share a few details and our team will respond with factory-direct
            pricing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* form */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CircleCheck
                  className="h-12 w-12 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold text-secondary">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                  Your inquiry has been received. For the fastest response, chat
                  with us directly on WhatsApp.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-transform active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="h-12 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="whatsapp"
                    className="text-sm font-semibold text-foreground"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    inputMode="tel"
                    placeholder="03XX-XXXXXXX"
                    className="h-12 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="product"
                    className="text-sm font-semibold text-foreground"
                  >
                    Packaging Type
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    defaultValue=""
                    className="h-12 rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {PRODUCT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="specs"
                    className="text-sm font-semibold text-foreground"
                  >
                    Specs / Requirements
                  </label>
                  <textarea
                    id="specs"
                    name="specs"
                    rows={3}
                    placeholder="Sizes, quantities, material, printing, deadline…"
                    className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-95"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Request My Quote
                </button>
              </form>
            )}
          </div>

          {/* location + contact cards */}
          <div className="grid content-start gap-4">
            <div className="overflow-hidden rounded-3xl border border-border bg-secondary text-secondary-foreground">
              <div className="p-6 sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">Nazimabad No. 2</h3>
                <p className="mt-1 text-sm leading-relaxed text-secondary-foreground/70">
                  Victory Enterprises, Nazimabad No. 2, Karachi, Sindh,
                  Pakistan.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-secondary-foreground/80">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  Mon–Sat, 10:00 AM – 7:00 PM
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">0336 8631744</p>
              </div>
            </a>

            <a
              href="tel:03368631744"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">Call Us</p>
                <p className="text-sm text-muted-foreground">0336 8631744</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
