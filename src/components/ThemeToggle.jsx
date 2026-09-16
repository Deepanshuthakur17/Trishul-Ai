'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = (event) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    // Circle Blur View Transition implementation
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme);
      return;
    }

    const button = buttonRef.current || event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath,
          filter: ['blur(12px)', 'blur(0px)']
        },
        {
          duration: 650,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  };

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-obsidian-surface border border-white/10" />;
  }

  const isDark = theme === 'dark' || theme === undefined;

  return (
    <button
      ref={buttonRef}
      onClick={handleToggleTheme}
      aria-label="Toggle Theme"
      className="relative p-2.5 rounded-full border border-gold/40 bg-gold/10 text-gold hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-300 shadow-gold-glow flex items-center justify-center group"
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 text-gold group-hover:text-obsidian" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12 text-gold group-hover:text-obsidian" />
      )}
    </button>
  );
}
