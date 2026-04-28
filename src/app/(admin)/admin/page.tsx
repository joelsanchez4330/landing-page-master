import { db } from "@/db";
import { siteConfig } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function GlobalSettingsPage() {
  const config = await db.query.siteConfig.findFirst({ 
    where: eq(siteConfig.key, "brand_identity") 
  });

  const brand = (config?.value as any) || { siteName: "My Site", primaryColor: "#000000" };

  async function updateGlobalConfig(formData: FormData) {
    "use server";
    const newConfig = {
      siteName: formData.get("siteName"),
      primaryColor: formData.get("primaryColor"),
    };

    await db.update(siteConfig)
      .set({ value: newConfig })
      .where(eq(siteConfig.key, "brand_identity"));

    revalidatePath("/", "layout");
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold mb-6">Global Settings</h2>
      <form action={updateGlobalConfig} className="space-y-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-2">Site Name</label>
          <input name="siteName" defaultValue={brand.siteName} className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Theme Primary Color</label>
          <input name="primaryColor" type="color" defaultValue={brand.primaryColor} className="h-12 w-full cursor-pointer" />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
          Save Branding
        </button>
      </form>
    </div>
  );
}