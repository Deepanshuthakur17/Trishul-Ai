import SectionHeading from '@/components/SectionHeading';
import PricingCard from '@/components/PricingCard';
import FAQSection from '@/components/FAQSection';
import FloatingLinesBackground from '@/components/FloatingLinesBackground';
import { PRICING_PLANS } from '@/lib/data';
import { Info } from 'lucide-react';

export const metadata = {
  title: 'Pricing & Investment — Trishul AI Automation Studio',
  description: 'Transparent setup and maintenance pricing for custom AI agents and business workflow automation.',
};

export default function PricingPage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* Hero with Full-Bleed Edge-to-Edge Floating Lines Background */}
      <section className="relative w-full text-center pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden min-h-[45vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <FloatingLinesBackground
            linesGradient={['#F0D58A', '#D6AD55', '#C99A3D']}
            animationSpeed={1}
            interactive
            bendRadius={5}
            bendStrength={-0.5}
            mouseDamping={0.05}
            parallax
            parallaxStrength={0.2}
          />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold font-mono font-semibold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 shadow-gold-glow">
            <span>TRANSPARENT INVESTMENT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
            Simple setup.{' '}
            <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
              Predictable maintenance.
            </span>
          </h1>
          <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            We don't charge per seat or force complex SaaS subscriptions. Pay for setup once, followed by a simple monthly retainer to keep your system refined.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* Pricing Tiers Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_PLANS.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </section>

        {/* Infrastructure Usage Disclaimer */}
        <section className="max-w-4xl mx-auto bg-obsidian-card border border-white/10 rounded-2xl p-6 sm:p-8 flex items-start space-x-4">
          <Info className="w-6 h-6 text-gold shrink-0 mt-1" />
          <div className="space-y-2 text-xs sm:text-sm text-warm-secondary leading-relaxed">
            <h4 className="font-bold text-warm-white font-sans text-base">
              Transparent Usage Infrastructure Note
            </h4>
            <p>
              AI model usage (OpenAI / Anthropic APIs), WhatsApp Business Cloud messaging fees, Telephony voice provider rates (Twilio/Retell), and third-party middleware (Make/Zapier) are billed directly at cost to your business account or added with 0% markup.
            </p>
            <p className="text-gold font-mono text-xs">
              We ensure complete usage visibility so you only pay for what your business actually consumes.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-12">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Everything you need to know about"
            highlightText="Trishul AI."
            centered
          />

          <FAQSection />
        </section>
      </div>
    </div>
  );
}
