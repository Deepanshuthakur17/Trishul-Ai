'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionHeading({
  eyebrow,
  title,
  highlightText,
  subtitle,
  centered = false,
  serifTitle = false,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current.children,
        {
          opacity: 0,
          y: 35,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 88%',
            end: 'bottom 12%',
            toggleActions: 'restart none none reverse',
          },
        }
      );
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={headingRef}
      className={`space-y-3 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold font-mono font-semibold bg-gold/10 px-3.5 py-1 rounded-full border border-gold/20 shadow-gold-glow">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-warm-white leading-[1.15] ${
          serifTitle ? 'font-editorial font-normal' : 'font-sans'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="font-cursive text-gold font-normal text-4xl sm:text-5xl md:text-6xl inline-block px-1">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-warm-secondary text-base sm:text-lg leading-relaxed pt-1 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
