
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="py-16 md:py-24 animate-fade-in-up" style={{ animationFillMode: 'backwards' }}>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          {title}
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
};
