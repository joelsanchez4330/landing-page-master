export function Hero02({ title, subtitle, imageUrl, ctaText }: any) {
    return (
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img src={imageUrl} alt="Bg" className="w-full h-full object-cover brightness-[0.3]" />
        </div>
        <div className="relative z-10 max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight uppercase">
            {title}
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
          <div className="pt-4">
            <button className="bg-[var(--primary)] text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              {ctaText}
            </button>
          </div>
        </div>
      </section>
    );
  }