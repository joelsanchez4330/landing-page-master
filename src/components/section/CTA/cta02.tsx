export function CTA02({ title, subtitle, ctaText }: any) {
    return (
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:flex items-center justify-between gap-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tight italic">
              {title}
            </h2>
            <p className="text-lg text-stone-400">
              {subtitle}
            </p>
          </div>
          <div className="mt-8 md:mt-0 shrink-0">
            <button className="bg-[var(--primary)] text-white px-12 py-5 rounded-[var(--radius)] font-bold text-lg hover:brightness-110 transition-all border border-white/10">
              {ctaText}
            </button>
          </div>
        </div>
      </section>
    );
  }