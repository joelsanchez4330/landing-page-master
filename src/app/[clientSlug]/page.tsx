import { getSiteConfig } from "@/lib/actions";
import SectionDispatcher from "@/components/dispatcher";
import { getLiveConfig } from "@/db/fallback";
import { notFound } from "next/navigation";

export default async function ClientPage({ 
  params 
}: { 
  params: Promise<{ clientSlug: string }> 
}) {
  const { clientSlug } = await params;
  
  // Use the helper we just fixed in actions.ts
  const page = await getSiteConfig(clientSlug);
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