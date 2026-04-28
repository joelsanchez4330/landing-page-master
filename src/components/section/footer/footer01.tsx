export function Footer01({ brandName, description, columns, socialLinks }: any) {
    return (
      <footer className="bg-white border-t border-stone-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <h3 className="text-xl font-black tracking-tighter text-stone-900 uppercase">{brandName}</h3>
              <p className="text-stone-500 max-w-xs leading-relaxed">{description}</p>
              <div className="flex gap-4">
                {socialLinks?.map((link: any, i: number) => (
                  <a key={i} href={link.url} className="text-stone-400 hover:text-[var(--primary)] transition-colors">
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
            {columns?.map((col: any, i: number) => (
              <div key={i} className="space-y-6">
                <h4 className="text-sm font-bold text-stone-900 uppercase tracking-widest">{col.title}</h4>
                <ul className="space-y-4">
                  {col.links?.map((link: any, j: number) => (
                    <li key={j}>
                      <a href={link.url} className="text-stone-500 hover:text-stone-900 text-sm transition-colors">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-stone-100 text-center md:text-left">
            <p className="text-xs text-stone-400">© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }