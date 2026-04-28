export function Features01({ title, items }: any) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 text-stone-900">{title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {items?.map((item: any, i: number) => (
              <div key={i} className="space-y-4 p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-xl transition-shadow">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }