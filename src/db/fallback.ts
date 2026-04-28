import { db } from "./index";
// This is your JSON file sitting in the same folder
import fallbackJson from "./fallback.json"; 

export async function getLiveConfig() {
  try {
    // 1. Fetch from Turso
    const dbRows = await db.query.siteConfig.findMany();
    
    // 2. Format the rows into a usable object
    const dbConfig = dbRows.reduce((acc: any, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {});

    // 3. The Big Merge
    return {
      ...fallbackJson, // Start with JSON defaults
      ...dbConfig,     // Add any top-level DB keys
      // Specifically merge the brand object 
      // (Mapping 'brand_identity' from DB to 'brand' in your code)
      brand: { 
        ...fallbackJson.brand, 
        ...(dbConfig.brand_identity || {}) 
      },
    };
  } catch (error) {
    // If DB is down, your site still looks perfect via JSON
    console.warn("DB offline, using fallback.json");
    return fallbackJson;
  }
}