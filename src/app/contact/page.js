import ContactForm from '@/components/ContactForm';
import GalaxyBackground from '@/components/GalaxyBackground';
import { ShieldCheck, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Contact Studio — Trishul AI Automation',
  description: 'Tell us what repetitive work takes too much time in your business. We will show you how Trishul AI agents can automate it.',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-24">
      {/* Hero with Full-Bleed Edge-to-Edge Galaxy Background */}
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
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
            Tell us what takes{' '}
            <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
              too much time.
            </span>
          </h1>
          <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            Fill out the qualification parameters below. We will review your workflow bottleneck and present a clear AI agent implementation plan.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-8 max-w-7xl mx-auto space-y-16">
        {/* Main Contact Form & Info Grid */}
        <section className="max-w-5xl mx-auto">
          <ContactForm />
        </section>

        {/* Trust Badges */}
        <section className="max-w-3xl mx-auto text-center space-y-4 pt-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-warm-muted font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Direct Founder Review</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>24-Hour Response SLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold"></span>
              <span>No Sales Hype Guaranteed</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
