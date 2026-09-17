import SectionHeading from '@/components/SectionHeading';
import InteractiveDemo from '@/components/InteractiveDemo';
import TrishulVoiceAgent from '@/components/TrishulVoiceAgent';
import GalaxyBackground from '@/components/GalaxyBackground';
import MetallicButton from '@/components/MetallicButton';
import { Bot, Zap, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Interactive AI Demo — Trishul AI Voice Agent & Employee Simulator',
  description: 'Experience live Trishul AI voice consultant and simulated AI employees for lead qualification, customer support, and appointment booking.',
};

export default function DemoPage() {
  return (
    <div className="space-y-20 pb-24">
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
            <span>LIVE INTERACTIVE DEMO & VOICE AGENT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
            See what an AI employee{' '}
            <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
              can actually do.
            </span>
          </h1>
          <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Talk directly with our live voice agent or test simulated conversation flows, logic guardrails, automated action triggers, and CRM sync steps.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-8 max-w-7xl mx-auto space-y-20">
        {/* Live ElevenLabs Conversational Voice Agent */}
        <section className="pt-2">
          <TrishulVoiceAgent />
        </section>

        {/* Main Interactive Text Demo Unit */}
        <section className="pt-4">
          <SectionHeading
            badge="WORKFLOW SANDBOX"
            title="Explore Automated Workflow Simulators"
            description="Test interactive text scenarios for lead capture, support, WhatsApp, and automated calendar scheduling."
          />
          <div className="mt-8">
            <InteractiveDemo />
          </div>
        </section>

        {/* Capability Feature Highlights */}
        <section className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto shadow-obsidian-card space-y-8">
          <h3 className="text-2xl font-bold font-sans text-warm-white text-center">
            Behind the Scenes: What Makes Trishul Different
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-obsidian-surface border border-white/5 p-6 rounded-2xl space-y-3">
              <Bot className="w-6 h-6 text-gold" />
              <h4 className="font-bold text-warm-white text-base">Domain Context</h4>
              <p className="text-xs text-warm-secondary leading-relaxed">
                Agents don't hallucinate because they are locked strictly to your uploaded documentation and vector database.
              </p>
            </div>

            <div className="bg-obsidian-surface border border-white/5 p-6 rounded-2xl space-y-3">
              <Zap className="w-6 h-6 text-gold" />
              <h4 className="font-bold text-warm-white text-base">Real-time API Actions</h4>
              <p className="text-xs text-warm-secondary leading-relaxed">
                Trishul doesn't just reply—it queries software APIs, books slots on Cal.com, and creates deals in HubSpot automatically.
              </p>
            </div>

            <div className="bg-obsidian-surface border border-white/5 p-6 rounded-2xl space-y-3">
              <Sparkles className="w-6 h-6 text-gold" />
              <h4 className="font-bold text-warm-white text-base">Human Fallback</h4>
              <p className="text-xs text-warm-secondary leading-relaxed">
                Low confidence triggers immediate notification to your human team with transcript context.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <MetallicButton href="/contact" variant="gold" className="px-8 py-3.5">
              Request Custom Agent Prototype
            </MetallicButton>
          </div>
        </section>
      </div>
    </div>
  );
}
