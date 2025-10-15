import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Modal } from '../components/Modal';
import { METHODS } from '../constants';
import { UsersIcon } from '../components/icons/UsersIcon';
import { ShieldCheckIcon } from '../components/icons/ShieldCheckIcon';
import { LockIcon } from '../components/icons/LockIcon';
import { CloudIcon } from '../components/icons/CloudIcon';

type MethodKey = keyof typeof METHODS;
type MethodData = typeof METHODS[MethodKey];

const MethodContent: React.FC<{ method: MethodData }> = ({ method }) => (
  <div className="text-left">
    <p className="text-text-secondary mb-6">{method.description}</p>
    <div className="grid md:grid-cols-2 gap-4 text-sm">
      <div className="bg-base-100 p-4 rounded-lg border border-base-300">
        <h4 className="font-semibold text-text-primary mb-1">Pros</h4>
        <p className="text-text-secondary">{method.pros}</p>
      </div>
      <div className="bg-base-100 p-4 rounded-lg border border-base-300">
        <h4 className="font-semibold text-text-primary mb-1">Cons</h4>
        <p className="text-text-secondary">{method.cons}</p>
      </div>
    </div>
  </div>
);

const icons: Record<MethodKey, React.ReactNode> = {
    fl: <UsersIcon className="h-5 w-5" />,
    dp: <ShieldCheckIcon className="h-5 w-5" />,
    he: <LockIcon className="h-5 w-5" />,
    smpc: <CloudIcon className="h-5 w-5" />,
};

export const MethodsSection: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<MethodData | null>(null);
  const methodKeys = Object.keys(METHODS) as MethodKey[];

  return (
    <Section
      id="methods"
      title="Core Privacy-Preserving Methods"
      subtitle="Discover the fundamental techniques that form the backbone of private AI. Each offers a unique approach to balancing data utility and confidentiality."
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center border-b border-base-300 -mb-px">
          {methodKeys.map((key) => (
            <button
              key={key}
              onClick={() => setSelectedMethod(METHODS[key])}
              className="flex items-center space-x-2 px-4 py-3 text-sm sm:text-base font-medium transition-all duration-300 outline-none border-b-2 border-transparent text-text-secondary hover:text-brand-secondary focus:text-brand-secondary focus:border-brand-primary"
              aria-label={`Learn more about ${METHODS[key].title}`}
            >
              {icons[key]}
              <span>{METHODS[key].title}</span>
            </button>
          ))}
        </div>
        <p className="text-center mt-8 text-text-secondary italic">
          Click on a method above to see the details.
        </p>
      </div>

      {selectedMethod && (
        <Modal
          isOpen={!!selectedMethod}
          onClose={() => setSelectedMethod(null)}
          title={selectedMethod.title}
        >
          <MethodContent method={selectedMethod} />
        </Modal>
      )}
    </Section>
  );
};