import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import HeroSystemVisual from '@/components/HeroSystemVisual';
import SolutionCard from '@/components/SolutionCard';
import IndustryCard from '@/components/IndustryCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import InteractiveDemo from '@/components/InteractiveDemo';
import PredictiveArcCanvas from '@/components/PredictiveArcCanvas';
import MetallicButton from '@/components/MetallicButton';

import {
  BRAND,
  THREE_PILLARS,
  SOLUTIONS,
  INDUSTRIES,
  WHY_TRISHUL_PRINCIPLES,
} from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* ================================================== */}
      {/* SECTION 1 — HERO (FULL SCREEN EDGE-TO-EDGE) */}
      {/* ================================================== */}
      <section className="relative w-full pt-12 md:pt-20 overflow-hidden min-h-[85vh] flex flex-col items-center justify-center">
        {/* Full Screen Edge-to-Edge Predictive Arc Background Shader */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none">
          <PredictiveArcCanvas mode="dark" speed={1.0} hue={0} saturation={1.0} brightness={1.0} />
        </div>

        {/* Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[400px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Foreground Hero Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold font-mono font-semibold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 mb-6 shadow-gold-glow">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span>{BRAND.eyebrow}</span>
          </div>

          {/* Main Headline with Dancing Script Accent */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-warm-white max-w-5xl mx-auto leading-[1.1] font-sans">
            AI employees for{' '}
            <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl md:text-8xl inline-block px-1">
              modern
            </span>{' '}
            businesses.
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-lg sm:text-xl text-warm-secondary max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            {BRAND.subheadline}
          </p>

          {/* Hero CTAs with Metallic Gold Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MetallicButton href="/contact" variant="gold">
              Build My AI Agent
            </MetallicButton>
            <MetallicButton href="/demo" variant="outline">
              See How It Works
            </MetallicButton>
          </div>

          {/* Visual Intelligent System Architecture */}
          <HeroSystemVisual />
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2 — THE PROBLEM */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-obsidian-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Editorial Statement */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-widest text-gold font-mono font-semibold">
                OPERATIONAL FRICTION
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial text-warm-white leading-tight">
                Your team shouldn't have to do the same task twice.
              </h2>
              <p className="text-warm-secondary text-sm sm:text-base leading-relaxed">
                Growing businesses lose thousands of hours every month because high-value employees are bogged down by repetitive administrative labor.
              </p>
            </div>

            {/* Right Problem Matrix */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Answering Same Questions', desc: 'Answering repetitive pricing, timing, and feature inquiries daily.' },
                { title: 'Manual Lead Follow-ups', desc: 'Delaying follow-ups with qualified leads due to human lag.' },
                { title: 'Scheduling Phone Tag', desc: 'Endless back-and-forth emails negotiating appointment slots.' },
                { title: 'Manual CRM Updates', desc: 'Copy-pasting notes between WhatsApp, email, and databases.' },
                { title: 'WhatsApp Backlogs', desc: 'Missing valuable client inquiries on chat channels.' },
                { title: 'Disconnected Software', desc: 'Moving data manually between un-synced enterprise tools.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-obsidian-surface border border-white/5 rounded-xl p-5 hover:border-gold/30 transition-colors"
                >
                  <div className="text-gold text-xs font-mono font-bold mb-1">0{idx + 1}</div>
                  <h4 className="text-warm-white font-bold text-base mb-1">{item.title}</h4>
                  <p className="text-warm-secondary text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 3 — TRISHUL'S THREE PILLARS */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="BRAND SYSTEM"
          title="One AI workforce."
          highlightText="Three directions."
          subtitle="The Trishul has three blades. We deploy AI intelligence across the three foundational drivers of modern business growth."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {THREE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-obsidian-card border border-obsidian-border hover:border-gold/50 rounded-2xl p-8 space-y-6 transition-all duration-300 group shadow-obsidian-card flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="font-mono text-3xl font-extrabold text-gold tracking-tighter">
                    {pillar.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-warm-muted">
                    BLADE {pillar.number}
                  </span>
                </div>

                <h3 className="text-3xl font-bold font-sans tracking-wide text-warm-white group-hover:text-gold transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-sm font-semibold text-gold/90 font-sans italic">
                  "{pillar.subtitle}"
                </p>

                <p className="text-xs sm:text-sm text-warm-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2">
                <span className="text-[10px] font-mono uppercase text-warm-muted tracking-wider block font-semibold">
                  Core Focus Areas:
                </span>
                {pillar.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-warm-white">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 4 — AI SOLUTIONS */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="THE WORKFORCE"
          title="Give every repetitive task an"
          highlightText="AI employee."
          subtitle="Specialized intelligent agents configured specifically around your operational guidelines and software stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol, index) => (
            <SolutionCard key={sol.id} solution={sol} index={index} />
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 5 — HOW TRISHUL WORKS */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="METHODOLOGY"
          title="From repetitive work to"
          highlightText="automated systems."
          subtitle="A battle-tested 5-step engineering process to deploy secure AI agents without operational downtime."
          centered
        />

        <ProcessTimeline />
      </section>

      {/* ================================================== */}
      {/* SECTION 6 — INTERACTIVE AI DEMO */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="INTERACTIVE SANDBOX"
          title="Don't take our word for it."
          highlightText="Talk to Trishul."
          subtitle="Test our simulated AI employee below. Select a business scenario or type your own question to see how Trishul responds."
          centered
        />

        <InteractiveDemo />
      </section>

      {/* ================================================== */}
      {/* SECTION 7 — INDUSTRIES */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="TAILORED DEPLOYMENTS"
          title="Built around your business, not the"
          highlightText="other way around."
          subtitle="Domain-specific AI employee templates tailored for your specific industry requirements and workflow standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} />
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 8 — WHY TRISHUL */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-12 md:p-16 space-y-12 shadow-obsidian-card">
          <SectionHeading
            eyebrow="STUDIO PHILOSOPHY"
            title="Automation should feel"
            highlightText="invisible."
            subtitle="We build AI systems that sit silently behind your existing business tools—doing heavy lifting without altering how you work."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_TRISHUL_PRINCIPLES.map((prin, idx) => (
              <div
                key={idx}
                className="bg-obsidian-surface border border-white/5 rounded-2xl p-6 hover:border-gold/30 transition-colors space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-bold font-sans text-warm-white">
                  {prin.title}
                </h4>
                <p className="text-xs sm:text-sm text-warm-secondary leading-relaxed">
                  {prin.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Human Handoff Highlight banner */}
          <div className="bg-gradient-to-r from-gold/10 via-obsidian border border-gold/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-warm-white font-sans flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>The Trishul Guarantee: Human Handoff</span>
              </h4>
              <p className="text-xs text-warm-secondary">
                Our AI agents know their boundaries. If a conversation becomes nuanced or requires human decision making, it instantly alerts your team with complete transcript logs.
              </p>
            </div>
            <MetallicButton href="/contact" variant="gold" className="shrink-0 text-xs px-5 py-2.5">
              Talk to Founder
            </MetallicButton>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 9 — CINEMATIC CTA */}
      {/* ================================================== */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-b from-obsidian-card via-obsidian-surface to-obsidian border border-gold/40 rounded-3xl p-10 sm:p-16 text-center space-y-8 relative overflow-hidden shadow-gold-glow">
          {/* Background Arc Effect */}
          <PredictiveArcCanvas mode="dark" speed={0.6} brightness={0.8} />

          <div className="w-24 h-24 sm:w-28 sm:h-28 relative mx-auto mb-4 animate-float">
            <Image src="/trishul-logo.png" alt="Trishul Mark" fill className="object-contain" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-warm-white max-w-4xl mx-auto leading-tight relative z-10">
            What would you automate if your business had{' '}
            <span className="font-cursive text-gold font-normal text-4xl sm:text-6xl md:text-7xl block sm:inline">
              another employee?
            </span>
          </h2>

          <p className="text-warm-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed relative z-10">
            Tell us what takes your team too much time. We'll show you where AI can take over.
          </p>

          <div className="relative z-10">
            <MetallicButton href="/contact" variant="gold" className="text-base px-9 py-4">
              Build My AI Agent
            </MetallicButton>
          </div>
        </div>
      </section>
    </div>
  );
}
