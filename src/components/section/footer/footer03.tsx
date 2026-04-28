export function Footer03({ brandName, contactEmail, address }: any) {
    return (
      <footer className="bg-stone-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="md:flex justify-between items-end border-b border-stone-800 pb-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-4xl font-black tracking-tight text-[var(--primary)]">{brandName}</h3>
              <p className="text-stone-400 text-xl font-light">{address}</p>
            </div>
            <div className="mt-8 md:mt-0">
              <a href={`mailto:${contactEmail}`} className="text-2xl font-bold border-b-2 border-[var(--primary)] pb-1 hover:text-[var(--primary)] transition-colors">
                {contactEmail}
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-6 text-stone-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <div>Privacy Policy / Terms of Service</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">X / Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }