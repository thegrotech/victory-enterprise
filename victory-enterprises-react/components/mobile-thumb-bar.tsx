import { MessageCircle, Phone } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/923368631744'

export function MobileThumbBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform active:scale-95"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Chat on WhatsApp
        </a>
        <a
          href="tel:03368631744"
          aria-label="Call Victory Enterprises"
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-secondary bg-secondary text-secondary-foreground transition-transform active:scale-95"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
