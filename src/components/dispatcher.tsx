import { Hero01 } from "./section/hero/hero01";
import { Hero02 } from "./section/hero/hero02";
import { Hero03 } from "./section/hero/hero03";
import { Features01 } from "./section/feature/feature01";
import { Features02 } from "./section/feature/feature02";
import { Features03 } from "./section/feature/feature03";
import { Gallery01 } from "./section/gallery/gallery01";
import { Gallery02 } from "./section/gallery/gallery02";
import { Gallery03 } from "./section/gallery/gallery03";
import { Testimonials01 } from "./section/testimonial/testimonial01";
import { Testimonials02 } from "./section/testimonial/testimonial02";
import { Testimonials03 } from "./section/testimonial/testimonial03";
import { FAQ01 } from "./section/FAQ/faq01";
import { FAQ02 } from "./section/FAQ/faq02";
import { FAQ03 } from "./section/FAQ/faq03";
import { CTA01 } from "./section/CTA/cta01";
import { CTA02 } from "./section/CTA/cta02";
import { CTA03 } from "./section/CTA/cta03";
import { Footer01 } from "./section/footer/footer01";
import { Footer02 } from "./section/footer/footer02";
import { Footer03 } from "./section/footer/footer03";

const SECTION_MAP: Record<string, React.ComponentType<any>> = {
  Hero01, Hero02, Hero03,
  Features01, Features02, Features03,
  Gallery01, Gallery02, Gallery03,
  Testimonials01, Testimonials02, Testimonials03,
  FAQ01, FAQ02, FAQ03,
  CTA01, CTA02, CTA03,
  Footer01, Footer02, Footer03
};

/**
 * SECTION DISPATCHER
 * * @param section - The section row from the DB (id, sectionName, content, etc.)
 * @param globalConfig - The merged fallback.json + site_config table data
 */
export default function SectionDispatcher({ 
  section, 
  globalConfig 
}: { 
  section: any; 
  globalConfig: any; 
}) {
  // 1. Look up component by DB 'sectionName' column
  const Component = SECTION_MAP[section.sectionName];

  if (!Component) {
    return (
      <div className="p-8 bg-red-50 border-2 border-dashed border-red-200 text-red-600 rounded-lg">
        <strong>Error:</strong> Component "{section.sectionName}" is missing in Dispatcher.
      </div>
    );
  }

  // 2. Combine the Global Settings (Brand/Theme) with Section Content (AI Data)
  // Section content takes priority if there are key overlaps
  const combinedProps = {
    ...globalConfig,
    ...section.content,
  };

  // 3. Render the dynamic component with merged data
  return <Component {...combinedProps} />;
}