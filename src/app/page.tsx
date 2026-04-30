import { headers } from 'next/headers';
import { getSiteConfig } from "@/lib/actions";
import SectionDispatcher from "@/components/dispatcher";
import { getLiveConfig } from "@/db/fallback";
import { notFound } from "next/navigation";

export default async function RootPage() {
  const headersList = await headers();
  const host = headersList.get('host') || "";

  // 1. Better Slug Extraction
  let finalSlug = "";

  if (host.includes('localhost:3000')) {
    // If testing locally, use your env default or a hardcoded test slug
    finalSlug = process.env.NEXT_PUBLIC_DEFAULT_CLIENT_SLUG || 'blue-wave-plumbing';
  } else {
    // In production: "luminous-aesthetics.vercel.app" -> "luminous-aesthetics"
    // Also works for custom domains: "plumbing.com" -> "plumbing"
    finalSlug = host.split('.')[0];
  }

  // 2. Fetch Data
  const [page, globalConfig] = await Promise.all([
    getSiteConfig(finalSlug),
    getLiveConfig()
  ]);

  // 3. Robust 404 Check
  if (!page) {
    console.error(`[Factory Error] No DB record found for slug: "${finalSlug}" on host: "${host}"`);
    return notFound();
  }

  return (
    <main className="min-h-screen">
      {page.sections?.map((section: any) => (
        <SectionDispatcher 
          key={section.id} 
          section={section} 
          globalConfig={globalConfig} 
        />
      ))}
    </main>
  );
}