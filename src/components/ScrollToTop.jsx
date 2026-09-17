'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import MetallicButton from '@/components/MetallicButton';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <MetallicButton
        onClick={scrollToTop}
        aria-label="Scroll to top"
        variant="gold"
        icon={false}
        className="!p-3.5 !rounded-full !px-3.5 !py-3.5"
      >
        <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
      </MetallicButton>
    </div>
  );
}
