export function Hero01({ title, subtitle, imageUrl, ctaText }: any) {
    return (
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:flex items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-stone-900 leading-[1.1]">
              {title}
            </h1>
            <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
              {subtitle}
            </p>
            <button className="bg-[var(--primary)] text-white px-8 py-4 rounded-[var(--radius)] font-bold shadow-lg hover:brightness-110 transition-all">
              {ctaText}
            </button>
          </div>
          <div className="flex-1 mt-12 md:mt-0">
            <img src={imageUrl} alt="Hero" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>
    );
  }