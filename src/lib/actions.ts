import { db } from "@/db";
import { pages, pageSections } from "@/db/schema";
import { eq, asc } from "drizzle-orm";

export async function getSiteConfig(slug: string) {
  try {
    const page = await db.query.pages.findFirst({
      where: eq(pages.slug, slug),
      with: {
        sections: {
          orderBy: [asc(pageSections.order)],
        },
      },
    });
    return page || null;
  } catch (e) {
    console.error("Database fetch error", e);
    return null;
  }
}