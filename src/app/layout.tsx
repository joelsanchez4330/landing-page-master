import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// 1. Import the "Merger" function instead of the JSON file
import { getLiveConfig } from "@/db/fallback"; 

// 2. Make the function 'async' so it can wait for the Database
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  // 3. Fetch the config (This gets DB data, falling back to JSON if needed)
  const config = await getLiveConfig();

  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <style>{`
          :root {
            /* 4. Use the brand object from your new merger logic */
            --primary: ${config.brand?.primaryColor || "#3b82f6"};
            --radius: ${config.brand?.borderRadius || "8"}px;
          }
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
    </ClerkProvider>
  );
}