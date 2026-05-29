import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SummarySection } from './components/SummarySection';

function App() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <HeroSection />
      <SummarySection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default App;
