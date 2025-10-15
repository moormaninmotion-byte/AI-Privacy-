
import React from 'react';
import { Section } from '../components/Section';
import { FederatedLearningDiagram } from '../components/diagrams/FederatedLearningDiagram';
import { DifferentialPrivacyDiagram } from '../components/diagrams/DifferentialPrivacyDiagram';

export const ArchitectureSection: React.FC = () => {
  return (
    <Section
      id="architectures"
      title="System Architectures"
      subtitle="Visualizing how privacy techniques are integrated into ML workflows. These diagrams illustrate the flow of data and models in private systems."
    >
      <div className="space-y-20 max-w-6xl mx-auto">
        <div className="p-8 bg-base-200 rounded-xl border border-base-300">
          <h3 className="text-2xl font-bold text-center mb-2 text-brand-secondary">Federated Learning Workflow</h3>
          <p className="text-center text-text-secondary mb-8 max-w-3xl mx-auto">
            Data stays on user devices. A central server coordinates training by aggregating encrypted model updates, not raw data.
          </p>
          <FederatedLearningDiagram />
        </div>
        <div className="p-8 bg-base-200 rounded-xl border border-base-300">
          <h3 className="text-2xl font-bold text-center mb-2 text-brand-secondary">Differential Privacy in Data Analysis</h3>
          <p className="text-center text-text-secondary mb-8 max-w-3xl mx-auto">
            A trusted data curator sits between the raw data and analysts. It adds statistical noise to query results to protect individual privacy.
          </p>
          <DifferentialPrivacyDiagram />
        </div>
      </div>
    </Section>
  );
};
