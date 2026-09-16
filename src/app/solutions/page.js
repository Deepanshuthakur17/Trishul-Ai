import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import FloatingLinesBackground from '@/components/FloatingLinesBackground';
import MetallicButton from '@/components/MetallicButton';
import { SOLUTIONS } from '@/lib/data';
import { ArrowUpRight, CheckCircle2, Cpu, Layers } from 'lucide-react';

export const metadata = {
  title: 'AI Solutions & Agents — Trishul AI Automation',
  description: 'Explore Trishul’s specialized AI agents: Lead Agent, Support Agent, Booking Agent, WhatsApp Agent, Voice Agent, and Operations Agent.',
};

export default function SolutionsPage() {
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
            <span>SPECIALIZED AI WORKFORCE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
            AI systems built around{' '}
            <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
              real business problems.
            </span>
          </h1>
          <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            We do not sell generic AI tools. We configure, connect, and deploy dedicated AI agents trained on your specific operational rules.
          </p>
        </div>
      </section>

      <div className="px-6 sm:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* Solutions Detailed List */}
        <section className="space-y-20">
          {SOLUTIONS.map((sol, index) => {
            return (
              <div
                key={sol.id}
                id={sol.id}
                className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-12 space-y-8 scroll-mt-28 shadow-obsidian-card hover:border-gold/30 transition-all"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded font-bold">
                      0{index + 1} • {sol.badge}
                    </span>
                    <h2 className="text-3xl font-bold font-sans text-warm-white mt-3">
                      {sol.name}
                    </h2>
                  </div>
                  <MetallicButton href="/contact" variant="gold" className="px-6 py-3 text-xs">
                    Deploy {sol.name}
                  </MetallicButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  {/* Problem vs Solution */}
                  <div className="space-y-6">
                    <div className="bg-obsidian-surface border border-white/5 p-6 rounded-2xl space-y-2">
                      <h4 className="text-xs font-mono uppercase text-red-400 tracking-wider font-semibold">
                        The Operational Problem:
                      </h4>
                      <p className="text-sm text-warm-secondary leading-relaxed">
                        {sol.problem}
                      </p>
                    </div>

                    <div className="bg-gradient-to-b from-obsidian-surface to-obsidian border border-gold/30 p-6 rounded-2xl space-y-2">
                      <h4 className="text-xs font-mono uppercase text-gold tracking-wider font-semibold">
                        The Trishul Solution:
                      </h4>
                      <p className="text-sm text-warm-white leading-relaxed">
                        {sol.solution}
                      </p>
                    </div>
                  </div>

                  {/* Workflow Diagram & Integrations */}
                  <div className="space-y-6">
                    <div className="bg-obsidian-surface border border-white/5 p-6 rounded-2xl space-y-4">
                      <h4 className="text-xs font-mono uppercase text-gold tracking-wider font-semibold flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        <span>Execution Workflow Architecture:</span>
                      </h4>

                      <div className="space-y-2">
                        {sol.workflow.map((step, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 text-xs text-warm-secondary bg-obsidian/60 p-3 rounded-xl border border-white/5"
                          >
                            <span className="w-6 h-6 rounded-full bg-gold/10 text-gold font-mono font-bold text-xs flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integrations */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase text-warm-muted tracking-wider block font-semibold">
                        Supported Integrations:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {sol.integrations.map((integ, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono text-warm-white bg-obsidian-surface border border-white/10 px-3 py-1.5 rounded-lg"
                          >
                            {integ}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
