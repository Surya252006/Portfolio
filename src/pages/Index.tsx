import { PremiumNavbar } from '@/components/PremiumNavbar';
import { MouseTracker } from '@/components/MouseTracker';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SystemArchitectureVisualizer } from '@/components/SystemArchitectureVisualizer';
import { SkillsSection } from '@/components/SkillsSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { GitHubStatsSection } from '@/components/GitHubStatsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { SpoofyChatbot } from '@/components/SpoofyChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <MouseTracker />
      <PremiumNavbar />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SystemArchitectureVisualizer />
        <SkillsSection />
        <AchievementsSection />
        <GitHubStatsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <SpoofyChatbot />
    </div>
  );
};

export default Index;

