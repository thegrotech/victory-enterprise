import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/923368631744'

const PRODUCTS = [
  'Flexible pouches',
  'Folding cartons',
  'Corrugated boxes',
  'Labels & stickers',
  'PET bottles & jars',
]

const LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Request a quote', href: '#quote' },
]

export function SiteFooter() {
  return (
    <footer className="bg-teal text-teal-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span <img
    src="/victory-enterprises-logo.jpeg"
    alt="Victory Enterprises"
    className="h-10 w-auto shrink-0 rounded-lg object-contain"
  />
              </span>
              <span className="text-sm font-bold tracking-tight">
                VICTORY ENTERPRISES
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-teal-foreground/70">
              Custom packaging &amp; printing factory serving FMCG, pharma,
              cosmetics and e-commerce brands since 2002.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-foreground/50">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p} className="text-sm text-teal-foreground/75">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-foreground/50">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-teal-foreground/75 transition-colors hover:text-teal-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-teal-foreground/50">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm text-teal-foreground/75">
                  Nazimabad No. 2, Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="tel:03368631744"
                  className="text-sm text-teal-foreground/75 transition-colors hover:text-teal-foreground"
                >
                  0336 8631744
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-teal-foreground/75 transition-colors hover:text-teal-foreground"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm text-teal-foreground/75">
                  Mon–Sat, 9:00 AM – 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-teal-foreground/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-teal-foreground/50">
            © {new Date().getFullYear()} Victory Enterprises. All rights
            reserved.
          </p>
          <p className="text-xs text-teal-foreground/50">
            Custom Packaging &amp; Printing Factory · Karachi
          </p>
        </div>
      </div>
    </footer>
  )
}
