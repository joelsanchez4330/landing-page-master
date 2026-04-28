export function Gallery02({ title, images }: any) {
    return (
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-stone-900 border-l-4 border-[var(--primary)] pl-4">{title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images?.map((img: any, i: number) => (
              <div key={i} className={`relative group overflow-hidden rounded-xl aspect-square ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                <img 
                  src={img.url} 
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                  alt="Gallery" 
                />
                <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-medium text-sm">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }