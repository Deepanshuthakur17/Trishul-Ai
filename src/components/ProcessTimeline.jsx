'use client';

import { PROCESS_STEPS } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function ProcessTimeline() {
  return (
    <div className="relative max-w-5xl mx-auto py-8">
      {/* Central Connector Line */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold/50 via-obsidian-border to-gold/10" />

      <div className="space-y-12 md:space-y-16">
        {PROCESS_STEPS.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.step}
              className={`relative flex flex-col md:flex-row items-center ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-obsidian-surface border border-gold text-gold flex items-center justify-center font-mono font-bold text-sm shadow-gold-glow z-10 my-auto">
                {step.step}
              </div>

              {/* Step Card */}
              <div className="w-full md:w-[45%] pl-14 md:pl-0">
                <div
                  className={`bg-obsidian-card border border-obsidian-border rounded-2xl p-6 sm:p-8 hover:border-gold/40 transition-all duration-300 shadow-obsidian-card group ${
                    isEven ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'
                  }`}
                >
                  <div className="inline-block font-mono text-xs uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded mb-3">
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
