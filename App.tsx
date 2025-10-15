
import React, { useRef } from 'react';
import { Header } from './components/Header';
import { IntroductionSection } from './sections/IntroductionSection';
import { MethodsSection } from './sections/MethodsSection';
import { UseCasesSection } from './sections/UseCasesSection';
import { ArchitectureSection } from './sections/ArchitectureSection';
import { CodeSamplesSection } from './sections/CodeSamplesSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const sections = {
    introduction: useRef<HTMLDivElement>(null),
    methods: useRef<HTMLDivElement>(null),
    useCases: useRef<HTMLDivElement>(null),
    architectures: useRef<HTMLDivElement>(null),
    code: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sections) => {
    sections[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      <Header onNavigate={scrollToSection} />
      <main className="container mx-auto px-4 md:px-8 pt-24">
        <div ref={sections.introduction}>
          <IntroductionSection onNavigate={() => scrollToSection('methods')} />
        </div>
        <div ref={sections.methods}>
          <MethodsSection />
        </div>
        <div ref={sections.useCases}>
          <UseCasesSection />
        </div>
        <div ref={sections.architectures}>
          <ArchitectureSection />
        </div>
        <div ref={sections.code}>
          <CodeSamplesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
