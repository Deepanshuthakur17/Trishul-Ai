import Link from 'next/link';
import { ArrowUpRight, Building2, Stethoscope, ShoppingBag } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Case Studies — Trishul AI Automation Studio',
  description: 'Real-world AI employee implementations and workflow automation blueprints.',
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-20 py-12 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-8">
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold font-mono font-semibold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20">
          <span>DEPLOYED ARCHITECTURE BLUEPRINTS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
          Proven AI employee{' '}
          <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
            case studies.
          </span>
        </h1>
        <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto">
          Detailed technical breakdowns showing how Trishul AI agents automate lead qualification, support tickets, and background operations.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-6 shadow-obsidian-card hover:border-gold/40 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">Real Estate Firm</span>
            <h3 className="text-2xl font-bold font-sans text-warm-white">24/7 WhatsApp Lead Screening</h3>
            <p className="text-sm text-warm-secondary leading-relaxed">
              Automated lead qualification for 1,200+ monthly inquiries, screening buyer budget, location specs, and booking viewing slots automatically.
            </p>
          </div>
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold font-mono">
            <span>✓ 0 Missed Inquiries</span>
            <Link href="/contact" className="hover:text-warm-white flex items-center gap-1">
              <span>Read Blueprint</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-6 shadow-obsidian-card hover:border-gold/40 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">Multi-Specialty Clinic</span>
            <h3 className="text-2xl font-bold font-sans text-warm-white">Patient Intake & Booking AI</h3>
            <p className="text-sm text-warm-secondary leading-relaxed">
              Handled 75%+ of routine patient intake questions, appointment rescheduling, and automated SMS reminders prior to consultation.
            </p>
          </div>
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold font-mono">
            <span>✓ 60% Less No-Shows</span>
            <Link href="/contact" className="hover:text-warm-white flex items-center gap-1">
              <span>Read Blueprint</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-6 shadow-obsidian-card hover:border-gold/40 transition-all flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-gold uppercase tracking-wider font-bold">E-Commerce Brand</span>
            <h3 className="text-2xl font-bold font-sans text-warm-white">Shopify Order Tracking AI</h3>
            <p className="text-sm text-warm-secondary leading-relaxed">
              Connected directly to Shopify API to answer order tracking, returns processing, and pre-purchase queries automatically.
            </p>
          </div>
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold font-mono">
            <span>✓ 80% Ticket Deflection</span>
            <Link href="/contact" className="hover:text-warm-white flex items-center gap-1">
              <span>Read Blueprint</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
