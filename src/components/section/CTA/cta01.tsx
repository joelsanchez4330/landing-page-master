export function CTA01({ title, subtitle, ctaText }: any) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[var(--primary)] rounded-[var(--radius)] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
  
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                {title}
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto font-medium">
                {subtitle}
              </p>
              <div className="pt-6">
                <button className="bg-white text-stone-900 px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl">
                  {ctaText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }