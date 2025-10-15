
import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <ShieldCheckIcon className="h-6 w-6 text-brand-primary" />
            <span className="text-md font-semibold text-text-primary">Privacy in AI Showcase</span>
          </div>
          <p className="text-sm text-text-secondary text-center md:text-right">
            A conceptual demonstration of privacy-preserving techniques in modern AI systems.
          </p>
        </div>
      </div>
    </footer>
  );
};
