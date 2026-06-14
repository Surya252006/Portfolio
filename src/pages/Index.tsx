import { PremiumNavbar } from '@/components/PremiumNavbar';
import { ExperienceSection } from '@/components/ExperienceSection';

import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';

import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { AchievementsSection } from '@/components/AchievementsSection';

import { GitHubStatsSection } from '@/components/GitHubStatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PremiumNavbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />

      <SkillsSection />
      <AchievementsSection />
      <GitHubStatsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

