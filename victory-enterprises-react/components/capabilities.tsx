import {
  Printer,
  Scissors,
  Layers,
  Sparkles,
  PenTool,
  Boxes,
  Palette,
  Truck,
} from 'lucide-react'

const CAPABILITIES = [
  {
    icon: PenTool,
    title: 'Design & Pre-press',
    desc: 'Dielines, artwork setup and 3D mockups so you approve before we print.',
  },
  {
    icon: Printer,
    title: 'Offset & Digital Printing',
    desc: 'Sharp CMYK and Pantone spot colours on short and long runs alike.',
  },
  {
    icon: Palette,
    title: 'Flexographic Printing',
    desc: 'High-speed roll printing for pouches, labels and flexible film.',
  },
  {
    icon: Scissors,
    title: 'Die-cutting & Creasing',
    desc: 'Precision cutting of custom shapes, windows and structural folds.',
  },
  {
    icon: Layers,
    title: 'Lamination',
    desc: 'Gloss, matte, soft-touch and barrier lamination for durability.',
  },
  {
    icon: Sparkles,
    title: 'Premium Finishing',
    desc: 'Gold/silver foiling, embossing, debossing and spot-UV highlights.',
  },
  {
    icon: Boxes,
    title: 'Assembly & Gluing',
    desc: 'Auto folder-gluer lines for retail-ready, ship-flat cartons.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    desc: 'Packed, palletised and delivered across Karachi and nationwide.',
  },
]

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-20 bg-teal py-16 text-teal-foreground sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Full production line
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything happens in our factory
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-teal-foreground/75">
            From the first dieline to the loaded delivery truck, no step is
            outsourced. That is how we keep quality high and lead times short.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.title}
                className="rounded-2xl border border-teal-foreground/10 bg-teal-muted/40 p-5 transition-colors hover:border-primary/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-bold tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-teal-foreground/70">
                  {cap.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
