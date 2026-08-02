import Image from 'next/image'
import { MessageCircle, FileText, Zap, ShieldCheck } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/923368631744'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-teal text-teal-foreground">
      {/* gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 hero-grid opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-teal-muted blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pt-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1.5 text-xs font-semibold text-primary">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Custom Packaging &amp; Printing Factory in Karachi
          </span>

          <h1 className="mt-5 text-pretty text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Complete Custom Packaging Solutions Built for Your Brand
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-teal-foreground/75 sm:text-lg">
            From flexible pouches and folding cartons to heavy-duty corrugated
            shipping boxes. Direct factory pricing from Nazimabad&nbsp;#2.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-teal-foreground/25 bg-teal-foreground/5 px-6 py-3.5 text-base font-semibold text-teal-foreground backdrop-blur transition-colors active:bg-teal-foreground/15"
            >
              <FileText className="h-5 w-5" aria-hidden="true" />
              Request a Quote
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2 text-sm text-teal-foreground/70">
            <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Trusted by FMCG, pharma &amp; e-commerce brands since 2002
          </div>
        </div>

        {/* visual */}
        <div className="relative mt-10 lg:mt-0">
          <div className="relative mx-auto aspect-square w-full max-w-md animate-float">
            <div
              className="absolute inset-6 rounded-[2rem] bg-primary/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-teal-foreground/15 bg-teal-muted/60 shadow-2xl">
              <Image
                src="/packaging-hero.png"
                alt="Assortment of custom packaging: foil pouch, corrugated box, folding carton and plastic bottle"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-4 rounded-2xl border border-teal-foreground/15 bg-card px-4 py-2.5 text-card-foreground shadow-xl">
              <p className="text-lg font-extrabold leading-none text-secondary">
                20+
              </p>
              <p className="text-[11px] font-medium text-muted-foreground">
                Years in production
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
