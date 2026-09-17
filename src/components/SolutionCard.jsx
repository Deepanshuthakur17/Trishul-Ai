'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolutionCard({ solution, index }) {
  const cardRef = useRef(null);
  const isHighlighted = index % 3 === 0;

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 45,
          scale: 0.94,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.85,
          delay: (index % 3) * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 88%',
            end: 'bottom 12%',
            toggleActions: 'restart none none reverse',
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group rounded-2xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between relative overflow-hidden border ${
        isHighlighted
          ? 'bg-gradient-to-b from-obsidian-card via-obsidian-card to-obsidian border-gold/40 shadow-gold-glow hover:border-gold'
          : 'bg-obsidian-card border-obsidian-border hover:border-gold/30 hover:bg-obsidian-surface'
      }`}
    >
      {/* Background Subtle Badge */}
      <div className="flex items-center justify-between pb-6 border-b border-white/5">
        <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest px-2.5 py-1 rounded bg-gold/10 border border-gold/20">
          {solution.badge}
        </span>
        <span className="text-xs font-mono text-warm-muted">0{index + 1}</span>
      </div>

      {/* Main Content */}
      <div className="py-6 space-y-4">
        <h3 className="text-2xl font-bold font-sans text-warm-white group-hover:text-gold transition-colors">
          {solution.name}
        </h3>
        <p className="text-sm font-medium text-gold/90 italic font-sans">
          "{solution.tagline}"
        </p>
        <p className="text-xs sm:text-sm text-warm-secondary leading-relaxed">
          {solution.description}
        </p>

        {/* Example Workflow Snippet */}
        <div className="pt-2">
          <span className="text-[10px] font-mono text-warm-muted uppercase tracking-wider block mb-2 font-semibold">
            Example Workflow:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {solution.workflow.slice(0, 4).map((step, idx) => (
              <span
                key={idx}
                className="text-[11px] text-warm-secondary bg-obsidian-surface px-2.5 py-1 rounded border border-white/5 flex items-center gap-1"
              >
                {idx > 0 && <span className="text-gold font-mono">→</span>}
                <span>{step}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-xs text-warm-muted">
          <span>{solution.integrations.length}+ Integrations</span>
        </div>
        <Link
          href={`/solutions#${solution.id}`}
          className="inline-flex items-center space-x-1 text-xs font-semibold text-gold group-hover:text-warm-white transition-colors"
        >
          <span>Explore solution</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
