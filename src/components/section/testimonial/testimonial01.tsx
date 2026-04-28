export function Testimonials01({ title, items }: any) {
    return (
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-stone-900">{title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {items?.map((item: any, i: number) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <p className="text-stone-600 italic leading-relaxed mb-8">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-stone-500 font-medium">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }