import { headers } from 'next/headers';
import { getSiteConfig } from "@/lib/actions";
import SectionDispatcher from "@/components/dispatcher";
import { getLiveConfig } from "@/db/fallback";
import { notFound } from "next/navigation";

export default async function RootPage() {
  // 1. Get the domain name from the browser headers
  const headersList = await headers();
  const host = headersList.get('host') || "";

  /**
   * 2. Extract the slug from the subdomain.
   * Example: "luminous-aesthetics.vercel.app" -> "luminous-aesthetics"
   * Example: "blue-wave-plumbing.com" -> "blue-wave-plumbing"
   */
  const clientSlug = host.split('.')[0];

  // 3. Fallback for your main "Factory" domain (e.g., if you visit your main site)
  const finalSlug = (clientSlug === 'localhost:3000' || clientSlug === 'your-main-domain') 
    ? (process.env.NEXT_PUBLIC_DEFAULT_CLIENT_SLUG || 'index')
    : clientSlug;

  // 4. Fetch the data exactly like you did before
  const page = await getSiteConfig(finalSlug);
  const globalConfig = await getLiveConfig();

  if (!page) return notFound();

  return (
    <main>
      {page.sections.map((section: any) => (
        <SectionDispatcher 
          key={section.id} 
          section={section} 
          globalConfig={globalConfig} 
        />
      ))}
    </main>
  );
}