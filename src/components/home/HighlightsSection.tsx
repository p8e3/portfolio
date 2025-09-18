export default function HighlightsSection() {
  const highlights: string[] = [
    "12+ years experience",
    "60+ production projects",
    "Full‑stack: FE / BE / DevOps",
    "Domains: E‑commerce · SaaS · Bots",
    "RU / EN",
    "Available for freelance/contract",
  ];

  return (
    <section aria-labelledby="highlights-heading" className="space-y-4">
      <h2 id="highlights-heading" className="sr-only">Highlights</h2>

      <p className="text-center mx-auto max-w-[760px] text-xl md:text-2xl font-semibold text-[color:var(--foreground)]">
        Full‑stack engineer delivering reliable, production‑ready web apps end‑to‑end
      </p>

      <div className="mt-2 flex flex-wrap gap-3 sm:gap-4 sm:justify-center">
        {highlights.map((h) => (
          <div
            key={h}
            className="tech-chip inline-flex items-center !gap-3 rounded-lg border border-neutral-200/60 bg-white/50 !px-5 !py-2.5 !text-base font-medium text-[color:var(--foreground)] shadow-sm ring-1 ring-transparent transition duration-200 transition-colors hover:bg-black/5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 motion-reduce:transition-none dark:border-neutral-800 dark:bg-white/5 dark:hover:border-neutral-700 dark:hover:bg-white/10 whitespace-nowrap min-h-[40px]"
          >
            {h}
          </div>
        ))}
      </div>
    </section>
  );
}
