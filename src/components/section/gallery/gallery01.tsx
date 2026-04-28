export function Gallery01({ title, subtitle, images }: any) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-stone-900">{title}</h2>
            <p className="mt-4 text-stone-500">{subtitle}</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images?.map((img: any, i: number) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <img 
                  src={img.url} 
                  alt={img.alt || "Gallery"} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }