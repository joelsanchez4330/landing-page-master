export function Hero03({ title, subtitle, ctaText }: any) {
    return (
      <section className="bg-stone-50 py-32 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl space-y-12">
            <div className="inline-block px-4 py-1.5 bg-stone-200 text-stone-600 text-xs font-bold uppercase tracking-widest rounded-full">
              Est. 2026 / Agency
            </div>
            <h1 className="text-6xl md:text-8xl font-medium text-stone-950 tracking-tight italic">
              {title}
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <p className="text-xl text-stone-500 max-w-sm">
                {subtitle}
              </p>
              <a href="#" className="group flex items-center gap-2 text-xl font-bold text-stone-900 border-b-2 border-stone-900 pb-1">
                {ctaText}
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }