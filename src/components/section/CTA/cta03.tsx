export function CTA03({ title, subtitle, ctaText, imageUrl }: any) {
    return (
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            className="w-full h-full object-cover" 
            alt="CTA Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
            {title}
          </h2>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto italic">
            {subtitle}
          </p>
          <button className="inline-flex items-center gap-3 text-white text-xl font-bold group">
            <span className="bg-[var(--primary)] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              →
            </span>
            {ctaText}
          </button>
        </div>
      </section>
    );
  }