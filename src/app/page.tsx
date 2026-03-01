import { HeroSection } from "@/components/sections/HeroSection";
import { UrgentSection } from "@/components/sections/UrgentSection";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { CeoSection } from "@/components/sections/CeoSection";
import { MovieSection } from "@/components/sections/MovieSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { FacilitySection } from "@/components/sections/FacilitySection";
import { SupportSection } from "@/components/sections/SupportSection";
import { ColumnSection } from "@/components/sections/ColumnSection";
import { GuidebookSection } from "@/components/sections/GuidebookSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UrgentSection />
      <ReasonsSection />
      <CeoSection />
      <MovieSection />
      <PlansSection />
      <CasesSection />
      <FacilitySection />
      <SupportSection />
      <ColumnSection />
      <GuidebookSection />
    </>
  );
}
