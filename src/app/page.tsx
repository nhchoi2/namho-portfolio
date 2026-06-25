import { AppsSection } from "@/components/sections/apps";
import { CareerSection } from "@/components/sections/career";
import { ContactSection } from "@/components/sections/contact";
import { DocumentsSection } from "@/components/sections/documents";
import { HighlightsSection } from "@/components/sections/highlights";
import { LandingSection } from "@/components/sections/landing";
import { ProfileSection } from "@/components/sections/profile";
import { ProjectsSection } from "@/components/sections/projects";
import { ScrollStorySection } from "@/components/sections/scroll-story";
import { WebsitesSection } from "@/components/sections/websites";
import { YouTubeSection } from "@/components/sections/youtube";
import { siteConfig } from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [siteConfig.youtube],
  jobTitle: "Education, HR and IT Operator",
  knowsAbout: ["Education Administration", "HR", "Web Development", "Mobile Apps"]
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingSection />
      <ScrollStorySection />
      <HighlightsSection />
      <ProfileSection />
      <CareerSection />
      <ProjectsSection />
      <AppsSection />
      <WebsitesSection />
      <YouTubeSection />
      <DocumentsSection />
      <ContactSection />
    </main>
  );
}
