import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { db } from "@/db";
import Link from "next/link";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Fetch pages to build the sidebar navigation dynamically
  const pagesList = await db.query.pages.findMany();

  return (
    <ClerkProvider>
      <div className="flex h-screen bg-slate-50 text-slate-900">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
          <div className="p-6 border-b">
            <h1 className="font-bold text-xl tracking-tight">Factory Admin</h1>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Link href="/admin" className="block px-3 py-2 text-sm font-medium hover:bg-slate-100 rounded-md">
              Global Branding
            </Link>
            
            <div className="mt-8 mb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Pages
            </div>
            
            {pagesList.map((p) => (
              <Link 
                key={p.id} 
                href={`/admin/pages/${p.slug}`} 
                className="block px-3 py-2 text-sm font-medium hover:bg-slate-100 rounded-md capitalize"
              >
                {p.name}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-200 flex items-center justify-between">
            <UserButton showName />
          </div>
        </aside>

        {/* CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-10">
          {children}
        </main>
      </div>
    </ClerkProvider>
  );
}