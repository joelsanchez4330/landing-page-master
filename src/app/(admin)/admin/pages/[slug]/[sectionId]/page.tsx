import { db } from "@/db";
import { pageSections } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SectionEditForm({ 
  params 
}: { 
  params: Promise<{ slug: string, sectionId: string }> 
}) {
  const { slug, sectionId } = await params;
  const idAsNumber = Number(sectionId);

  const section = await db.query.pageSections.findFirst({
    where: eq(pageSections.id, idAsNumber)
  });

  if (!section) return <div>Section Not Found</div>;

  // Cast content to an object so we can loop over it
  const content = (section.content as Record<string, any>) || {};

  async function handleSave(formData: FormData) {
    "use server";
    
    // Convert FormData back into a JSON object
    const updatedContent: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (key !== "sectionId") {
        updatedContent[key] = value;
      }
    });
    
    await db.update(pageSections)
      .set({ content: updatedContent })
      .where(eq(pageSections.id, idAsNumber));

    revalidatePath(`/[[...slug]]`, "layout");
    redirect(`/admin/pages/${slug}`);
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href={`/admin/pages/${slug}`} className="text-slate-400 hover:text-slate-600 text-sm">
          ← Back to List
        </Link>
        <h2 className="text-2xl font-bold">Edit {section.sectionName}</h2>
      </div>

      <form action={handleSave} className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
        <div className="space-y-6">
          {Object.entries(content).map(([key, value]) => (
            <div key={key} className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              
              {/* If the text is long, use a textarea, otherwise a standard input */}
              {typeof value === 'string' && value.length > 50 ? (
                <textarea
                  name={key}
                  defaultValue={value}
                  rows={4}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              ) : (
                <input
                  name={key}
                  type="text"
                  defaultValue={value as string}
                  className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}