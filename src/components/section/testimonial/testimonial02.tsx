export function Testimonials02({ quote, name, role, logoUrl }: any) {
    return (
      <section className="py-24 bg-stone-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 text-[20rem] font-serif leading-none opacity-5 select-none pointer-events-none translate-x-[-10%] translate-y-[-10%]">
          &ldquo;
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {logoUrl && <img src={logoUrl} alt="Company Logo" className="h-8 mx-auto mb-10 opacity-70 grayscale invert" />}
          <blockquote className="text-3xl md:text-5xl font-medium leading-tight mb-10 tracking-tight">
            "{quote}"
          </blockquote>
          <div>
            <h4 className="text-xl font-bold text-[var(--primary)]">{name}</h4>
            <p className="text-stone-400 uppercase tracking-widest text-xs mt-1">{role}</p>
          </div>
        </div>
      </section>
    );
  }