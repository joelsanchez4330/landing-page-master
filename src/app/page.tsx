export const dynamic = 'force-dynamic';

import { headers } from 'next/headers';
import { getSiteConfig } from "@/lib/actions";
import SectionDispatcher from "@/components/dispatcher";
import { getLiveConfig } from "@/db/fallback";
import { notFound } from "next/navigation";

export default async function RootPage() {
  const headersList = await headers();
  const host = headersList.get('host') || "";
  
  let finalSlug = "";

  // 1. Logic for Local Development
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    finalSlug = process.env.NEXT_PUBLIC_DEFAULT_CLIENT_SLUG || 'luminous-aesthetics';
  } 
  // 2. Logic for Vercel Subdomains (e.g., luminous-aesthetics.vercel.app)
  else {
    // This takes "luminous-aesthetics.vercel.app" and gives "luminous-aesthetics"
    finalSlug = host.split('.')[0];
  }

  // 3. Fetch data from Turso
  const page = await getSiteConfig(finalSlug);
  const globalConfig = await getLiveConfig();

  // 4. Handle Missing Pages
  if (!page) {
    console.error(`❌ 404 Error: No database entry for slug "${finalSlug}"`);
    return notFound();
  }

  return (
    <main>
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