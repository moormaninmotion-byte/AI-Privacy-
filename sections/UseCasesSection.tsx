
import React from 'react';
import { Section } from '../components/Section';
import { USE_CASES } from '../constants';

const getIcon = (icon: string) => {
    // In a real app, you'd have a map of icons. Here we'll use emojis for simplicity.
    switch(icon) {
        case 'heart': return '❤️';
        case 'dollar': return '💵';
        case 'mobile': return '📱';
        case 'news': return '📰';
        default: return '⚙️';
    }
}

const getPrivacyBadgeColor = (level: string) => {
    switch (level) {
        case 'Very High': return 'bg-red-500/20 text-red-300';
        case 'High': return 'bg-yellow-500/20 text-yellow-300';
        case 'Medium': return 'bg-blue-500/20 text-blue-300';
        default: return 'bg-gray-500/20 text-gray-300';
    }
}

export const UseCasesSection: React.FC = () => {
  return (
    <Section
      id="use-cases"
      title="Privacy in Practice"
      subtitle="From healthcare to finance, privacy-preserving AI is already making an impact. Explore real-world applications where these techniques are crucial."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {USE_CASES.map((useCase, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-xl shadow-lg border border-base-300 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-start justify-between">
                <div className="text-4xl mb-4">{getIcon(useCase.icon)}</div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getPrivacyBadgeColor(useCase.privacyRequirement)}`}>
                    {useCase.privacyRequirement} Privacy
                </span>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{useCase.title}</h3>
            <p className="text-text-secondary mb-4">{useCase.description}</p>
            <div className="flex flex-wrap gap-2">
                {useCase.methods.split(', ').map(method => (
                     <span key={method} className="text-xs font-medium bg-base-300 text-brand-secondary px-2 py-1 rounded-md">{method}</span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
