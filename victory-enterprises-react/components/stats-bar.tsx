const STATS = [
  { value: '20+', label: 'Years in production' },
  { value: '5M+', label: 'Units printed monthly' },
  { value: '400+', label: 'Brands served' },
  { value: '7 days', label: 'Average turnaround' },
]

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center gap-1 bg-card px-4 py-8 text-center"
          >
            <span className="text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
