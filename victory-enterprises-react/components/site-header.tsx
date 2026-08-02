import { MessageCircle, Phone } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/923368631744'

const NAV = [
  { label: 'Products', href: '#products' },
  { label: 'Find Packaging', href: '#finder' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-muted/40 bg-teal/95 backdrop-blur supports-[backdrop-filter]:bg-teal/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-extrabold tracking-tight text-primary-foreground shadow-lg shadow-primary/30">
            VE
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight text-teal-foreground sm:text-base">
              VICTORY ENTERPRISES
            </p>
            <p className="text-[11px] font-medium uppercase tracking-widest text-teal-foreground/60">
              Est. 2002
            </p>
          </div>
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-teal-foreground/75 transition-colors hover:bg-teal-foreground/10 hover:text-teal-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:03368631744"
            aria-label="Call Victory Enterprises"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-teal-foreground/20 text-teal-foreground transition-colors hover:bg-teal-foreground/10 sm:flex"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Victory Enterprises on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform active:scale-90 sm:w-auto sm:gap-2 sm:px-4"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only sm:text-sm sm:font-semibold">
              WhatsApp
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
