'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const WORKFLOW_ITEMS = [
  {
    badge: 'Web & Landing Page Blueprint',
    title: 'High-Converting AI-Integrated Web Engineering',
    description:
      'We engineer bespoke, obsidian & gold high-performance websites and landing pages equipped with embedded Trishul AI employees, fast GSAP micro-animations, and instant WhatsApp/Voice lead qualification engines.',
    result: 'Result: 3.5x higher visitor-to-lead conversion rate.',
  },
  {
    badge: 'Real Estate Blueprint',
    title: 'Automated Property Lead Screening',
    description:
      'When a lead inquires about a listing on 99acres, MagicBricks, or Facebook Ads, Trishul instantly messages them on WhatsApp, screens their budget and target possession date, presents 3 matching properties, and schedules a site visit.',
    result: 'Result: 0 missed leads, 4x faster site visit bookings.',
  },
  {
    badge: 'Healthcare Blueprint',
    title: '24/7 Patient Intake & Scheduling',
    description:
      'Trishul Voice & WhatsApp agents handle routine appointment queries, patient intake pre-screening, doctor availability checks, and automated appointment confirmations without front desk burnout.',
    result: 'Result: 60% reduction in missed consultation slots.',
  },
  {
    badge: 'E-Commerce Blueprint',
    title: 'WISMO & Product Recommendation AI',
    description:
      'Directly connected to Shopify, Trishul handles 80%+ of "Where is my order?" inquiries instantly over WhatsApp and web chat while recommending cross-sell products based on cart history.',
    result: 'Result: 80% decrease in support tickets during sales.',
  },
  {
    badge: 'Professional Services Blueprint',
    title: 'High-Intent Client Discovery Screening',
    description:
      'Before booking a consultation with legal or accounting partners, Trishul collects scope parameters, budget thresholds, and urgency metrics to ensure partner time is reserved for high-value contracts.',
    result: 'Result: Eliminate un-qualified discovery calls completely.',
  },
];

export default function DetailedWorkflows() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll('.workflow-card-item');

      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 55,
            scale: 0.93,
            filter: 'blur(10px)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.9,
            delay: (idx % 2) * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
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

  return (
    <div ref={containerRef} className="space-y-12 pt-12 border-t border-obsidian-border">
      <div className="flex flex-col space-y-2">
        <span className="text-xs uppercase tracking-[0.2em] font-mono text-gold font-bold">
          DEEP DIVE DEPLOYMENTS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-sans text-warm-white">
          Detailed Industry Workflows
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORKFLOW_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="workflow-card-item bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-4 hover:border-gold/40 transition-colors shadow-obsidian-card group"
          >
            <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold bg-gold/10 px-3 py-1 rounded-full border border-gold/20 inline-block">
              {item.badge}
            </span>
            <h3 className="text-2xl font-bold text-warm-white font-sans group-hover:text-gold transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-warm-secondary leading-relaxed">
              {item.description}
            </p>
            <div className="text-xs text-gold font-mono pt-2 border-t border-white/5 font-semibold">
              ✓ {item.result}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
