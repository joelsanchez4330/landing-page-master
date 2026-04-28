export function Testimonials03({ title, items }: any) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-stone-900 mb-16 text-center">{title}</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {items?.map((item: any, i: number) => (
              <div key={i} className="break-inside-avoid bg-stone-50 p-6 rounded-3xl border border-stone-100 flex flex-col gap-4">
                <div className="flex gap-1 text-amber-500">
                  {[...Array(5)].map((_, star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="text-stone-700 leading-relaxed font-medium">
                  {item.quote}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white font-bold text-xs uppercase">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{item.name}</h4>
                    <p className="text-[10px] text-stone-500 uppercase tracking-tighter">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }