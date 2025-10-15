
import React from 'react';

interface IntroductionSectionProps {
  onNavigate: () => void;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-[60vh] flex items-center text-center animate-fade-in-up">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-secondary to-brand-primary">
          Building Trust in AI
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary">
          Explore the cutting-edge techniques that allow us to build powerful Machine Learning and Generative AI models while preserving user privacy and data confidentiality.
        </p>
        <div className="mt-10">
          <button
            onClick={onNavigate}
            className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-lg hover:bg-brand-secondary transform hover:-translate-y-1 transition-all duration-300"
          >
            Discover Methods
          </button>
        </div>
      </div>
    </section>
  );
};
