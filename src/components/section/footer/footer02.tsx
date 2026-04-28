export function Footer02({ brandName, links }: any) {
    return (
      <footer className="py-12 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <h3 className="text-2xl font-black text-stone-900 italic uppercase">{brandName}</h3>
          <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {links?.map((link: any, i: number) => (
              <a key={i} href={link.url} className="text-stone-600 font-bold hover:text-[var(--primary)] text-sm uppercase tracking-widest">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="h-[1px] w-20 bg-stone-300 mx-auto"></div>
          <p className="text-xs text-stone-400 font-medium tracking-tight">
            Crafted with care by {brandName} &copy; 2026
          </p>
        </div>
      </footer>
    );
  }