import { db } from "./index";
import { siteConfig, pages, pageSections } from "./schema";

async function seed() {
  console.log("🌱 Starting Factory Seed...");

  try {
    // 1. Wipe everything to start fresh
    await db.delete(pageSections);
    await db.delete(pages);
    await db.delete(siteConfig);

    // 2. Global Brand Config
    await db.insert(siteConfig).values({
      key: "brand_identity",
      value: {
        siteName: "My AI Agency",
        primaryColor: "#3b82f6",
        borderRadius: "8",
      },
    });

    // 3. Create the Pages (Home and About)
    const [homePage] = await db.insert(pages).values({ 
      name: "Home Page", 
      slug: "index" 
    }).returning();

    const [aboutPage] = await db.insert(pages).values({ 
      name: "About Us", 
      slug: "about" 
    }).returning();

    // 4. Create Sections for Home
    await db.insert(pageSections).values([
      {
        pageId: homePage.id,
        sectionName: "Hero01",
        order: 1,
        content: { title: "Welcome Home", subtitle: "Built via Database" },
      },
      {
        pageId: homePage.id,
        sectionName: "Features01",
        order: 2,
        content: { title: "Our Services" },
      },
    ]);

    // 5. Create Sections for About
    await db.insert(pageSections).values({
      pageId: aboutPage.id,
      sectionName: "Hero02",
      order: 1,
      content: { title: "About Our Story", subtitle: "We scale businesses with AI." },
    });

    console.log("✅ Seed Successful!");
  } catch (error) {
    console.error("❌ Seed Failed:", error);
  }
}

seed();