import { MessageCircle, Phone } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/923368631744'

export function CtaBanner() {
  return (
    <section className="bg-background px-4 py-16 sm:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-teal px-6 py-12 text-center text-teal-foreground shadow-xl sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to package your product?
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-teal-foreground/75">
            Send us your requirement today and get a transparent, direct-factory
            quote &mdash; usually within a few hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-transform active:scale-95"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:03368631744"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-teal-foreground/25 bg-teal-foreground/5 px-6 text-base font-semibold text-teal-foreground transition-colors active:bg-teal-foreground/15"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              0318 0033899
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
