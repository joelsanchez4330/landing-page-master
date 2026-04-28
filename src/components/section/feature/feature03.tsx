export function Features03({ title, items }: any) {
    return (
      <section className="py-24 bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items?.map((item: any, i: number) => (
              <div 
                key={i} 
                className={`p-8 rounded-3xl bg-stone-900 border border-stone-800 flex flex-col justify-between transition-all hover:bg-stone-800 ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div>
                  <div className="w-12 h-12 bg-[var(--primary)] rounded-xl mb-6 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-8 text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }