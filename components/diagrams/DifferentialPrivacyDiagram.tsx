
import React from 'react';
import { UsersIcon } from '../icons/UsersIcon';
import { ShieldCheckIcon } from '../icons/ShieldCheckIcon';

export const DifferentialPrivacyDiagram: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-4 min-h-[300px] space-y-12 md:space-y-0 md:space-x-8">

      {/* Raw Data */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center">
            <UsersIcon className="h-12 w-12 text-red-300" />
          </div>
        </div>
        <h4 className="font-bold mt-4 text-lg">Raw Sensitive Data</h4>
        <p className="text-xs text-text-secondary max-w-[200px]">Database containing individual user information.</p>
      </div>
      
      {/* Arrow */}
      <div className="text-text-secondary transform rotate-90 md:rotate-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
      </div>

      {/* DP Mechanism */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-28 h-28 bg-brand-primary/20 rounded-full flex items-center justify-center animate-pulse-slow">
            <ShieldCheckIcon className="h-16 w-16 text-brand-secondary" />
          </div>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-3xl text-brand-secondary opacity-50">+ ε</span>
        </div>
        <h4 className="font-bold mt-4 text-lg">DP Mechanism</h4>
        <p className="text-xs text-text-secondary max-w-[200px]">Adds calibrated noise to queries or data exports.</p>
      </div>
      
      {/* Arrow */}
      <div className="text-text-secondary transform rotate-90 md:rotate-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
      </div>

      {/* Safe Output */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-green-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
            </svg>
          </div>
        </div>
        <h4 className="font-bold mt-4 text-lg">Private Aggregates</h4>
        <p className="text-xs text-text-secondary max-w-[200px]">Safe for analysis, training, or public release.</p>
      </div>
    </div>
  );
};
