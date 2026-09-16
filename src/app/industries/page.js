import Link from 'next/link';
import { INDUSTRIES } from '@/lib/data';
import IndustryCard from '@/components/IndustryCard';
import GalaxyBackground from '@/components/GalaxyBackground';
import MetallicButton from '@/components/MetallicButton';
import { ArrowUpRight, CheckCircle2, Building2, Stethoscope, GraduationCap, ShoppingBag, UtensilsCrossed, Briefcase, Wrench, Layers } from 'lucide-react';

export const metadata = {
  title: 'Industry AI Automation — Real Estate, Healthcare, E-commerce | Trishul',
  description: 'Trishul builds custom AI agents tailored for Real Estate, Healthcare, Education, E-commerce, Hospitality, and Professional Services.',
};

export default function IndustriesPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero with Full-Bleed Edge-to-Edge Galaxy Interactive Background */}
      <section className="relative w-full text-center pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden min-h-[45vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <GalaxyBackground
            starSpeed={0.5}
            density={1}
            hueShift={45}
            speed={1}
            glowIntensity={0.3}
            saturation={0.8}
            mouseRepulsion
            repulsionStrength={2}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            transparent
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold font-mono font-semibold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 shadow-gold-glow">
            <span>INDUSTRY BLUEPRINTS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
            Every business has repetitive work.{' '}
            <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
              We automate it.
            </span>
          </h1>
          <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            See how Trishul AI agents integrate into specific business models to eliminate operational lag and scale capacity without hiring.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* Industries Grid & Detailed Sections */}
        <section className="space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <IndustryCard key={ind.id} industry={ind} />
            ))}
          </div>

          {/* Deep Dive Industry Use Cases */}
          <div className="space-y-12 pt-12 border-t border-obsidian-border">
            <h2 className="text-2xl font-bold font-sans text-warm-white">
              Detailed Industry Workflows
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-4">
                <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">Real Estate Blueprint</span>
                <h3 className="text-2xl font-bold text-warm-white font-sans">Automated Property Lead Screening</h3>
                <p className="text-sm text-warm-secondary leading-relaxed">
                  When a lead inquires about a listing on 99acres, MagicBricks, or Facebook Ads, Trishul instantly messages them on WhatsApp, screens their budget and target possession date, presents 3 matching properties, and schedules a site visit.
                </p>
                <div className="text-xs text-gold font-mono pt-2">Result: 0 missed leads, 4x faster site visit bookings.</div>
              </div>

              <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-4">
                <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">Healthcare Blueprint</span>
                <h3 className="text-2xl font-bold text-warm-white font-sans">24/7 Patient Intake & Scheduling</h3>
                <p className="text-sm text-warm-secondary leading-relaxed">
                  Trishul Voice & WhatsApp agents handle routine appointment queries, patient intake pre-screening, doctor availability checks, and automated appointment confirmations without front desk burnout.
                </p>
                <div className="text-xs text-gold font-mono pt-2">Result: 60% reduction in missed consultation slots.</div>
              </div>

              <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-4">
                <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">E-Commerce Blueprint</span>
                <h3 className="text-2xl font-bold text-warm-white font-sans">WISMO & Product Recommendation AI</h3>
                <p className="text-sm text-warm-secondary leading-relaxed">
                  Directly connected to Shopify, Trishul handles 80%+ of "Where is my order?" inquiries instantly over WhatsApp and web chat while recommending cross-sell products based on cart history.
                </p>
                <div className="text-xs text-gold font-mono pt-2">Result: 80% decrease in support tickets during sales.</div>
              </div>

              <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-4">
                <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">Professional Services Blueprint</span>
                <h3 className="text-2xl font-bold text-warm-white font-sans">High-Intent Client Discovery Screening</h3>
                <p className="text-sm text-warm-secondary leading-relaxed">
                  Before booking a consultation with legal or accounting partners, Trishul collects scope parameters, budget thresholds, and urgency metrics to ensure partner time is reserved for high-value contracts.
                </p>
                <div className="text-xs text-gold font-mono pt-2">Result: Eliminate un-qualified discovery calls completely.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-obsidian-card via-obsidian-surface to-obsidian border border-gold/40 rounded-3xl p-10 text-center space-y-6">
          <h2 className="text-3xl font-bold font-sans text-warm-white">
            Don't see your specific industry listed?
          </h2>
          <p className="text-warm-secondary text-sm max-w-xl mx-auto">
            We engineer custom AI workflows for any business with repeatable operational rules and software tools.
          </p>
          <MetallicButton href="/contact" variant="gold" className="px-8 py-3.5">
            Discuss Custom Architecture
          </MetallicButton>
        </section>
      </div>
    </div>
  );
}
