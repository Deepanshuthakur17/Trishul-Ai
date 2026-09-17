import Link from 'next/link';
import { INDUSTRIES } from '@/lib/data';
import IndustryCard from '@/components/IndustryCard';
import DetailedWorkflows from '@/components/DetailedWorkflows';
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

          {/* Deep Dive Industry Use Cases with GSAP Animations */}
          <DetailedWorkflows />
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
