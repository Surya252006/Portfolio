import { PremiumNavbar } from '@/components/PremiumNavbar';
import { MouseTracker } from '@/components/MouseTracker';
import { HeroSection } from '@/components/HeroSection';
import { LiveTelemetryDashboard } from '@/components/LiveTelemetryDashboard';
import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { InteractiveModelPlayground } from '@/components/InteractiveModelPlayground';
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
    <div className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      <MouseTracker />
      <PremiumNavbar />
      <main>
        <HeroSection />
        <LiveTelemetryDashboard />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <InteractiveModelPlayground />
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

