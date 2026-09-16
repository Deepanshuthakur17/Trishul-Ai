import Link from 'next/link';
import Image from 'next/image';
import PredictiveArcCanvas from '@/components/PredictiveArcCanvas';
import { ArrowUpRight, Home, Cpu, Sparkles, MessageSquare } from 'lucide-react';

export const metadata = {
  title: '404 Page Not Found — Trishul AI Automation',
  description: 'The requested page or AI workflow could not be found.',
};

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-16 overflow-hidden">
      {/* Predictive Arc Background Shader */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <PredictiveArcCanvas mode="dark" speed={0.8} hue={0} saturation={1.0} brightness={0.9} />
      </div>

      {/* Glow Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-8">
        {/* Brand Mark & Badge */}
        <div className="space-y-4">
          <div className="w-16 h-16 relative mx-auto mb-2 animate-float">
            <Image src="/trishul-logo.png" alt="Trishul Mark" fill className="object-contain" />
          </div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-gold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 shadow-gold-glow">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span>404 • ROUTE NOT FOUND</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warm-white font-sans leading-tight">
          Lost in the{' '}
          <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl md:text-8xl inline-block px-1">
            workflow?
          </span>
        </h1>

        <p className="text-warm-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-sans">
          The page or system endpoint you are trying to reach has been re-routed, updated, or does not exist. Let's get your business moving again.
        </p>

        {/* Quick Navigator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 max-w-lg mx-auto">
          <Link
            href="/"
            className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-card border border-obsidian-border hover:border-gold/50 text-warm-white transition-all group"
          >
            <div className="flex items-center space-x-3">
              <Home className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold font-sans">Back to Homepage</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-warm-muted group-hover:text-gold transition-colors" />
          </Link>

          <Link
            href="/solutions"
            className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-card border border-obsidian-border hover:border-gold/50 text-warm-white transition-all group"
          >
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold font-sans">Explore AI Solutions</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-warm-muted group-hover:text-gold transition-colors" />
          </Link>

          <Link
            href="/demo"
            className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-card border border-obsidian-border hover:border-gold/50 text-warm-white transition-all group"
          >
            <div className="flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold font-sans">Test AI Demo</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-warm-muted group-hover:text-gold transition-colors" />
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-between p-4 rounded-2xl bg-obsidian-card border border-obsidian-border hover:border-gold/50 text-warm-white transition-all group"
          >
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold font-sans">Contact Studio</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-warm-muted group-hover:text-gold transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
