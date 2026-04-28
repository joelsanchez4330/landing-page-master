export function Features02({ title, subtitle, items }: any) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black text-stone-900 tracking-tight">{title}</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">{subtitle}</p>
          </div>
          <div className="space-y-32">
            {items?.map((item: any, i: number) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-16 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <img src={item.imageUrl} alt={item.title} className="rounded-3xl shadow-2xl aspect-[4/3] object-cover" />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm">{item.tagline}</div>
                  <h3 className="text-3xl font-bold text-stone-900">{item.title}</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">{item.description}</p>
                  <ul className="space-y-3">
                    {item.points?.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-stone-700 font-medium">
                        <span className="text-[var(--primary)]">✓</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }