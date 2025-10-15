
import React, { useState } from 'react';

interface Tab {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface TabbedContentProps {
  tabs: Tab[];
}

export const TabbedContent: React.FC<TabbedContentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex border-b border-base-300 space-x-2 sm:space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-2 sm:px-4 py-3 text-sm sm:text-base font-medium transition-all duration-300 outline-none
              ${activeTab === tab.id
                ? 'border-b-2 border-brand-primary text-brand-secondary'
                : 'text-text-secondary hover:text-text-primary'
              }`}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
      <div className="mt-8">
        {tabs.map((tab) => (
          <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
