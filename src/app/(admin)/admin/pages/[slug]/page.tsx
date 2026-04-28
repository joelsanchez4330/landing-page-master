import { db } from "@/db";
import { pages, pageSections } from "@/db/schema";
import { eq, asc } from "drizzle-orm";
import Link from "next/link";

// 1. Change the props type to a Promise
export default async function PageSectionsListView(props: { 
  params: Promise<{ slug: string }> 
}) {
  // Extract the slug from the promise
  const { slug } = await props.params;

  const page = await db.query.pages.findFirst({
    where: eq(pages.slug, slug), 
    with: {
      sections: { orderBy: [asc(pageSections.order)] }
    }
  });

  if (!page) return <div>Page Not Found: {slug}</div>;

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 capitalize">{page.name} Structure</h2>
      <div className="space-y-3">
        {page.sections.map((section) => (
          <Link 
            key={section.id} 
            href={`/admin/pages/${slug}/${section.id}`}
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-500 transition-colors group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-mono text-xs">ORDER {section.order}</span>
              <span className="font-semibold text-slate-700">{section.sectionName}</span>
            </div>
            <span className="text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Edit Content →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}