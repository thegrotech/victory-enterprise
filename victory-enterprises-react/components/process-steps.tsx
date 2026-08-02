const STEPS = [
  {
    step: '01',
    title: 'Share your requirement',
    desc: 'Send us your product, dimensions, quantity and any existing artwork over WhatsApp or the quote form.',
  },
  {
    step: '02',
    title: 'Quote & dieline',
    desc: 'We recommend the right material and format, then send transparent pricing and a printable dieline.',
  },
  {
    step: '03',
    title: 'Design approval',
    desc: 'Review a digital proof or 3D mockup. We refine until the artwork is exactly right before printing.',
  },
  {
    step: '04',
    title: 'Production',
    desc: 'Printing, finishing, die-cutting and gluing run on our own lines with in-process quality checks.',
  },
  {
    step: '05',
    title: 'QC & delivery',
    desc: 'Every batch is inspected, packed and delivered to your doorstep across Karachi or nationwide.',
  },
]

export function ProcessSteps() {
  return (
    <section id="process" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            How it works
          </span>
          <h2 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            From idea to delivery in five steps
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            A simple, transparent process built around fast approvals and no
            surprises.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-3xl font-extrabold text-primary/25">
                {s.step}
              </span>
              <h3 className="mt-2 text-base font-bold tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
