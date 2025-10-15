import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from './icons/XIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    const modalElement = modalRef.current;
    if (isOpen && modalElement) {
      const previouslyFocusedElement = document.activeElement as HTMLElement;
      
      const focusableElements = modalElement.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement?.focus();

      const handleTabKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) { // Shift+Tab
            if (document.activeElement === firstElement) {
              lastElement?.focus();
              event.preventDefault();
            }
          } else { // Tab
            if (document.activeElement === lastElement) {
              firstElement?.focus();
              event.preventDefault();
            }
          }
        }
      };

      modalElement.addEventListener('keydown', handleTabKeyPress);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        modalElement.removeEventListener('keydown', handleTabKeyPress);
        document.removeEventListener('keydown', handleKeyDown);
        previouslyFocusedElement?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-base-100/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-base-200 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-base-300 animate-fade-in-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-base-300 flex-shrink-0">
          <h2 id="modal-title" className="text-xl font-bold text-brand-secondary">{title}</h2>
          <button 
            onClick={onClose} 
            aria-label="Close modal" 
            className="p-1 rounded-full text-text-secondary hover:text-white hover:bg-base-300 transition-colors"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </header>
        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>,
    modalRoot
  );
};