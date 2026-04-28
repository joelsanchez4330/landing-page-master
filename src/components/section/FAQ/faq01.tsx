export function FAQ01({ title, subtitle, items }: any) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-stone-900 tracking-tight">{title}</h2>
            <p className="text-stone-500">{subtitle}</p>
          </div>
          <div className="space-y-4">
            {items?.map((item: any, i: number) => (
              <details key={i} className="group border border-stone-200 rounded-2xl p-6 hover:bg-stone-50 transition-all [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-bold text-stone-900">{item.question}</h3>
                  <span className="transition group-open:rotate-180 text-[var(--primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </summary>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }