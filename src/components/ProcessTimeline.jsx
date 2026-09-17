'use client';

import { useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Central connector line progressive scrub animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              end: 'bottom 85%',
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Pro entrance animation for each timeline step (re-triggers every time on scroll)
      const stepItems = containerRef.current.querySelectorAll('.timeline-step-item');

      stepItems.forEach((el, index) => {
        const isEven = index % 2 === 0;
        const card = el.querySelector('.timeline-card');
        const node = el.querySelector('.timeline-node');

        const xOffset = isEven ? 90 : -90;

        // Slide & blur entrance for cards
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: xOffset,
            scale: 0.88,
            filter: 'blur(12px)',
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'restart none none reverse',
            },
          }
        );

        // Glow & bounce entrance for center nodes
        gsap.fromTo(
          node,
          {
            scale: 0.3,
            opacity: 0,
            boxShadow: '0 0 0px rgba(214,173,85,0)',
          },
          {
            scale: 1,
            opacity: 1,
            boxShadow: '0 0 30px rgba(214,173,85,0.7)',
            duration: 0.8,
            ease: 'back.out(1.8)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'restart none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-8 overflow-hidden px-4 sm:px-0">
      {/* Central Connector Line */}
      <div
        ref={lineRef}
        className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-gold via-gold/60 to-gold/10 z-0"
      />

      <div className="space-y-12 md:space-y-16 relative z-10">
        {PROCESS_STEPS.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.step}
              className={`timeline-step-item relative flex flex-col md:flex-row items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="timeline-node absolute left-4 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-obsidian-card border-2 border-gold text-gold flex items-center justify-center font-mono font-bold text-sm shadow-gold-glow z-20 my-auto">
                {step.step}
              </div>

              {/* Step Card */}
              <div className="w-full md:w-[45%] pl-14 md:pl-0">
                <div
                  className={`timeline-card bg-obsidian-card border border-obsidian-border rounded-2xl p-6 sm:p-8 hover:border-gold/60 transition-colors duration-300 shadow-obsidian-card group ${
                    isEven ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'
                  }`}
                >
                  <div className="inline-block font-mono text-xs uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1 rounded-full mb-3 border border-gold/20 shadow-gold-glow">
                    Phase {step.step} • {step.name}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-warm-white group-hover:text-gold transition-colors mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-warm-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
