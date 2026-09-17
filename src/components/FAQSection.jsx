'use client';

import { useState, useEffect, useRef } from 'react';
import { FAQS } from '@/lib/data';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current.querySelectorAll('.faq-item');

      items.forEach((item, idx) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 35,
            scale: 0.96,
            filter: 'blur(6px)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.75,
            delay: idx * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              end: 'bottom 12%',
              toggleActions: 'restart none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto space-y-4">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="faq-item bg-obsidian-card border border-obsidian-border rounded-2xl overflow-hidden transition-colors hover:border-gold/30"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none"
            >
              <span className="text-base sm:text-lg font-bold font-sans text-warm-white hover:text-gold transition-colors">
                {faq.q}
              </span>
              <div className="w-8 h-8 rounded-full bg-obsidian-surface border border-white/10 flex items-center justify-center text-gold shrink-0">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 text-sm text-warm-secondary leading-relaxed border-t border-white/5 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
