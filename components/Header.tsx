
import React, { useState, useEffect } from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

interface HeaderProps {
  onNavigate: (section: 'introduction' | 'methods' | 'useCases' | 'architectures' | 'code') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'methods', label: 'Methods' },
    { key: 'useCases', label: 'Use Cases' },
    { key: 'architectures', label: 'Architectures' },
    { key: 'code', label: 'Code Samples' },
  ] as const;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base-200/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => onNavigate('introduction')} className="flex items-center space-x-3 text-text-primary hover:text-brand-secondary transition-colors">
            <ShieldCheckIcon className="h-8 w-8 text-brand-primary" />
            <span className="text-xl font-bold tracking-tight">Privacy in AI</span>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => onNavigate(item.key)} className="text-sm font-semibold text-text-secondary hover:text-brand-secondary transition-colors">
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
