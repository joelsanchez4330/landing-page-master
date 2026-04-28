export function FAQ03({ title, subtitle, items }: any) {
    return (
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-6">
              <h2 className="text-5xl font-black text-stone-900 leading-[1.1]">{title}</h2>
              <p className="text-lg text-stone-500">{subtitle}</p>
              <div className="p-6 bg-[var(--primary)] bg-opacity-10 rounded-2xl border border-[var(--primary)] border-opacity-20">
                <p className="text-stone-900 font-bold mb-2">Still have questions?</p>
                <p className="text-sm text-stone-600 mb-4">Can't find the answer you're looking for? Please chat with our friendly team.</p>
                <button className="text-[var(--primary)] font-black text-sm uppercase tracking-widest">Contact Support →</button>
              </div>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {items?.map((item: any, i: number) => (
                <div key={i} className="space-y-3 p-6 rounded-2xl bg-stone-50">
                  <h4 className="font-bold text-stone-900">{item.question}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }