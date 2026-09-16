import Image from 'next/image';
import FloatingLinesBackground from '@/components/FloatingLinesBackground';
import MetallicButton from '@/components/MetallicButton';

export const metadata = {
  title: 'About Studio — Trishul AI Automation Studio',
  description: 'TRISHUL is a focused, founder-led AI automation studio dedicated to helping growing businesses eliminate repetitive work.',
};

export default function AboutPage() {
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
            <span>FOUNDER-LED STUDIO</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
            Built with one belief:{' '}
            <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
              Repetitive work should be automated.
            </span>
          </h1>
          <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            TRISHUL is a solo-founder AI automation studio engineered to help growing businesses turn manual, repetitive drag into quiet, high-performance systems.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">

      {/* Honest Founder Manifesto */}
      <section className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-14 max-w-4xl mx-auto space-y-8 shadow-obsidian-card">
        <div className="flex items-center space-x-4 border-b border-white/5 pb-6">
          <div className="w-16 h-16 relative flex items-center justify-center bg-gold/10 rounded-full border border-gold/30 shrink-0">
            <Image src="/trishul-logo.png" alt="Trishul Mark" width={38} height={38} className="object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-sans text-warm-white">The Trishul Philosophy</h3>
            <span className="text-xs font-mono text-gold">High-Touch Engineering • No Fluff</span>
          </div>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-warm-secondary leading-relaxed font-sans">
          <p>
            Most AI agencies promise revolutionary transformations using flashy buzzwords and generic SaaS templates. They sell complex AI tools that require hours of configuration, only to leave you with broken workflows and hallucinating chatbots.
          </p>
          <p className="text-warm-white font-medium">
            At TRISHUL, we operate differently.
          </p>
          <p>
            We don't sell bloated software subscriptions or hype. We operate as a hyper-focused AI engineering studio that studies how your business actually functions, identifies repetitive task friction, and builds reliable AI employees directly into your existing tools.
          </p>
          <p>
            Whether it's instant WhatsApp customer qualification, automated appointment scheduling, or background CRM data processing, every system we build is designed to be invisible, powerful, and deeply reliable.
          </p>
        </div>

        {/* 3 Core Operating Commitments */}
        <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-gold font-bold uppercase">01 • Direct Access</div>
            <h4 className="font-bold text-warm-white text-sm">Founder Engineering</h4>
            <p className="text-xs text-warm-secondary">You work directly with the founder and architect building your system—no junior account managers.</p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-gold font-bold uppercase">02 • Zero Testimonial Hype</div>
            <h4 className="font-bold text-warm-white text-sm">Honest Capabilities</h4>
            <p className="text-xs text-warm-secondary">We never make up fake team sizes or vanity metrics. We focus strictly on working production code.</p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-gold font-bold uppercase">03 • Human Handoff</div>
            <h4 className="font-bold text-warm-white text-sm">Guardrails First</h4>
            <p className="text-xs text-warm-secondary">Every AI system includes strict boundaries and graceful human escalation rules.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center space-y-6 max-w-xl mx-auto">
        <h3 className="text-2xl font-bold font-sans text-warm-white">
          Ready to reclaim your team's productive time?
        </h3>
        <MetallicButton href="/contact" variant="gold" className="px-8 py-4">
          Schedule Discovery Call
        </MetallicButton>
      </section>
      </div>
    </div>
  );
}
