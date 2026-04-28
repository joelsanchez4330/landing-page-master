export function FAQ02({ title, items }: any) {
    return (
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-stone-900 mb-16">{title}</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {items?.map((item: any, i: number) => (
              <div key={i} className="space-y-3">
                <h3 className="text-xl font-bold text-stone-900 flex gap-3">
                  <span className="text-[var(--primary)]">Q.</span>
                  {item.question}
                </h3>
                <p className="text-stone-600 leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }