'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingCard({ plan, index = 0 }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          scale: plan.featured ? 0.98 : 0.93,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          scale: plan.featured ? 1.05 : 1,
          filter: 'blur(0px)',
          duration: 0.9,
          delay: (index % 3) * 0.15,
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
  }, [index, plan.featured]);

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between relative border ${
        plan.featured
          ? 'bg-gradient-to-b from-obsidian-card via-obsidian-card to-obsidian border-gold shadow-gold-glow scale-105 z-10'
          : 'bg-obsidian-card border-obsidian-border hover:border-gold/30'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-obsidian font-mono text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
          {plan.badge}
        </div>
      )}

      <div>
        {/* Tier Header */}
        <div className="border-b border-white/5 pb-6">
          <h3 className="text-2xl font-bold font-sans text-warm-white tracking-wide">
            {plan.name}
          </h3>
          <p className="text-xs text-warm-secondary mt-2 leading-relaxed min-h-[36px]">
            {plan.tagline}
          </p>

          <div className="mt-6 space-y-1">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-extrabold text-warm-white font-sans">{plan.setup}</span>
              <span className="text-xs text-warm-muted uppercase font-mono">Setup</span>
            </div>
            <div className="text-lg font-semibold text-gold font-sans">
              {plan.monthly}
            </div>
            <span className="text-[10px] text-warm-muted block font-mono">
              {plan.setupSub}
            </span>
          </div>
        </div>

        {/* Feature List */}
        <div className="py-6 space-y-3.5">
          <span className="text-[11px] font-mono text-gold uppercase tracking-wider block font-semibold">
            Included Capabilities:
          </span>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-warm-secondary">
                <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-6 border-t border-white/5">
        <Link
          href="/contact"
          className={`w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${
            plan.featured
              ? 'bg-gold text-obsidian hover:bg-gold-light shadow-gold-glow'
              : 'bg-obsidian-surface text-warm-white border border-gold/40 hover:bg-gold hover:text-obsidian hover:border-gold'
          }`}
        >
          <span>{plan.cta}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
