import Link from 'next/link';
import { FileText, ShieldAlert, Cpu, CheckCircle2, ArrowLeft } from 'lucide-react';
import MetallicButton from '@/components/MetallicButton';

export const metadata = {
  title: 'Terms of Service — Trishul AI Automation Studio',
  description: 'Trishul terms of service, AI agent service level agreements, and client engineering contracts.',
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 pb-28 px-6 sm:px-8 max-w-5xl mx-auto space-y-12">
      {/* Back Link */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-gold hover:text-warm-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Studio Home</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-obsidian-card space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-mono text-gold font-bold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20">
          <FileText className="w-4 h-4 text-gold" />
          <span>CLIENT TERMS & AGREEMENT</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold font-sans text-warm-white leading-tight">
          Terms of Service
        </h1>

        <p className="text-warm-secondary text-base leading-relaxed max-w-2xl">
          These Terms of Service govern your access to and use of TRISHUL AI Studio’s custom AI agent engineering, API integration, and monthly workflow maintenance services.
        </p>

        <div className="text-xs text-warm-muted font-mono pt-4 border-t border-white/5">
          Effective Date: September 16, 2026 • Version 1.2
        </div>
      </div>

      {/* Terms Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-sans text-warm-white">Custom Engineering</h3>
          <p className="text-xs text-warm-secondary leading-relaxed">
            All AI agents are configured specifically around your operational rules, brand guidelines, and software stack.
          </p>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-sans text-warm-white">Client IP Ownership</h3>
          <p className="text-xs text-warm-secondary leading-relaxed">
            Upon final project payment, you retain complete ownership of custom prompt architecture and knowledge bases.
          </p>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-sans text-warm-white">Human Handoff Principle</h3>
          <p className="text-xs text-warm-secondary leading-relaxed">
            Our AI architecture mandates graceful human handoff fallback triggers for low-confidence or high-risk queries.
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-12 space-y-10 text-warm-secondary leading-relaxed text-sm">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">01.</span>
            <span>Services & Statement of Work (SOW)</span>
          </h2>
          <p>
            TRISHUL builds, deploys, and maintains custom AI employees, conversational agents, and autonomous backend workflow pipelines. Specific deliverables, timeline milestones, pricing tiers, and integration parameters are set forth in individual Statements of Work (SOW) executed between TRISHUL and the Client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">02.</span>
            <span>Third-Party Infrastructure & API Usage Fees</span>
          </h2>
          <p>
            Client acknowledges that AI agents rely on underlying software infrastructure (including LLM API tokens, WhatsApp Business Cloud messaging fees, and Twilio voice telephony charges). Unless specified in a managed contract:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-warm-secondary">
            <li>Client maintains direct billing accounts with third-party providers (OpenAI, Meta, Twilio, Retell AI).</li>
            <li>TRISHUL is not responsible for service interruptions caused by third-party API outages or depleted API account balances.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">03.</span>
            <span>AI Boundaries & System Guardrails</span>
          </h2>
          <p>
            While TRISHUL implements rigorous prompt engineering, vector context retrieval, and strict guardrails to eliminate hallucinations, non-deterministic AI language models may occasionally produce unexpected outputs. Client agrees to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-warm-secondary">
            <li>Review recommended prompt guardrails and approve domain knowledge rules prior to live deployment.</li>
            <li>Maintain designated human team members to receive real-time handoff alerts for escalated inquiries.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">04.</span>
            <span>Intellectual Property & Licensing</span>
          </h2>
          <p>
            Subject to full payment of agreed project setup fees, Client owns all custom system prompts, vector database assets, and workflow blueprints engineered exclusively for Client’s operational stack. TRISHUL retains ownership of core studio frameworks, underlying open-source modules, and proprietary boilerplate software.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">05.</span>
            <span>Limitation of Liability & SLA Support</span>
          </h2>
          <p>
            TRISHUL shall not be liable for indirect, incidental, or consequential damages resulting from AI operational performance. Post-deployment support, SLA response times, and monthly maintenance audits are provided according to the active maintenance plan selected by the Client.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-white/5">
          <h2 className="text-xl font-bold font-sans text-warm-white">Legal Inquiries & Contracts</h2>
          <p className="text-xs text-warm-secondary">
            For contractual inquiries or master service agreement (MSA) requests, reach out to our legal department:
          </p>
          <div className="bg-obsidian-surface border border-white/5 p-4 rounded-xl flex items-center justify-between">
            <span className="font-mono text-gold text-xs font-bold">legal@trishul-ai.com</span>
            <MetallicButton href="/contact" variant="gold" className="text-xs px-4 py-2">
              Consult Legal Team
            </MetallicButton>
          </div>
        </section>
      </div>
    </div>
  );
}
