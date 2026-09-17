'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Building2, Stethoscope, GraduationCap, ShoppingBag, UtensilsCrossed, Briefcase, Wrench, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const INDUSTRY_ICONS = {
  'real-estate': Building2,
  'healthcare': Stethoscope,
  'education': GraduationCap,
  'ecommerce': ShoppingBag,
  'hospitality': UtensilsCrossed,
  'professional-services': Briefcase,
  'local-businesses': Wrench,
  'other': Layers,
};

export default function IndustryCard({ industry, index = 0 }) {
  const cardRef = useRef(null);
  const IconComponent = INDUSTRY_ICONS[industry.id] || Building2;

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          delay: (index % 4) * 0.1,
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
      className="group bg-obsidian-card border border-obsidian-border rounded-2xl p-6 sm:p-8 hover:border-gold/40 hover:bg-obsidian-surface transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:scale-110 transition-transform">
          <IconComponent className="w-5 h-5" />
        </div>
        
        <h3 className="text-xl font-bold font-sans text-warm-white group-hover:text-gold transition-colors mb-2">
          {industry.title}
        </h3>
        
        <p className="text-sm font-medium text-warm-white italic mb-3">
          "{industry.tagline}"
        </p>
        
        <p className="text-xs text-warm-secondary leading-relaxed mb-4">
          {industry.solution}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
        <span className="text-[11px] font-mono text-gold bg-gold/10 px-2.5 py-1 rounded">
          {industry.stats}
        </span>
        <Link
          href={industry.link}
          className="text-xs font-medium text-warm-secondary group-hover:text-warm-white flex items-center gap-1 transition-colors"
        >
          <span>Use Cases</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
