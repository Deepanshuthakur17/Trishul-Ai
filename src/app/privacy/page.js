import Link from 'next/link';
import { ShieldCheck, Lock, Database, Eye, FileText, ArrowLeft } from 'lucide-react';
import MetallicButton from '@/components/MetallicButton';

export const metadata = {
  title: 'Privacy Policy — Trishul AI Automation Studio',
  description: 'Trishul privacy policy regarding client data protection, security guardrails, and private AI vector database confidentiality.',
};

export default function PrivacyPage() {
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
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>DATA GOVERNANCE & PRIVACY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold font-sans text-warm-white leading-tight">
          Privacy Policy
        </h1>

        <p className="text-warm-secondary text-base leading-relaxed max-w-2xl">
          At TRISHUL AI Studio, client confidentiality and data security are foundational principles. We engineer private, isolated AI systems built to protect your enterprise intellectual property.
        </p>

        <div className="text-xs text-warm-muted font-mono pt-4 border-t border-white/5">
          Effective Date: September 16, 2026 • Version 1.2
        </div>
      </div>

      {/* Core Privacy Guarantees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-sans text-warm-white">Zero Public Model Training</h3>
          <p className="text-xs text-warm-secondary leading-relaxed">
            Your proprietary business data, customer conversations, and internal notes are never used to train public LLM models.
          </p>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
            <Database className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-sans text-warm-white">Private Vector Datastores</h3>
          <p className="text-xs text-warm-secondary leading-relaxed">
            Knowledge bases are stored in isolated, encrypted vector indexes dedicated exclusively to your business instance.
          </p>
        </div>

        <div className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
            <Eye className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold font-sans text-warm-white">Strict Access Guardrails</h3>
          <p className="text-xs text-warm-secondary leading-relaxed">
            Role-based API credentials and human-in-the-loop triggers ensure zero unauthorized data leakage across systems.
          </p>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="bg-obsidian-card border border-obsidian-border rounded-3xl p-8 sm:p-12 space-y-10 text-warm-secondary leading-relaxed text-sm">
        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">01.</span>
            <span>Information We Collect & Process</span>
          </h2>
          <p>
            TRISHUL collects information strictly necessary to design, configure, and execute automated AI agent workflows on your behalf. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-warm-secondary">
            <li>Account details provided during onboarding (Contact Person, Company Name, Work Email, Phone).</li>
            <li>Operational knowledge documentation (Knowledge base PDFs, FAQs, service guidelines, pricing sheets).</li>
            <li>Authorized API access keys for integrations (WhatsApp Business API tokens, CRM credentials, Calendar OAuth tokens).</li>
            <li>Conversational transcripts and execution logs for audit monitoring and prompt refinement.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">02.</span>
            <span>How We Use Your Business Data</span>
          </h2>
          <p>
            Your information is used strictly to power your dedicated Trishul AI agents and optimize workflow execution performance. We process data to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-warm-secondary">
            <li>Generate contextually accurate responses for customer inquiries over Web, WhatsApp, and Voice.</li>
            <li>Sync lead details, appointment bookings, and ticket summaries directly into your connected CRM.</li>
            <li>Monitor hallucination rates and improve prompt guardrails through continuous audit logging.</li>
            <li>Send critical error notifications and human-in-the-loop handoff alerts to your team.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">03.</span>
            <span>Third-Party API Providers & Data Security</span>
          </h2>
          <p>
            Our infrastructure interfaces with enterprise third-party providers (including OpenAI Enterprise APIs, Meta WhatsApp Cloud API, ElevenLabs Voice AI, and AWS/Vercel Cloud Servers). All data transferred across services is protected by:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-warm-secondary">
            <li>TLS 1.3 encryption in transit and AES-256 encryption at rest.</li>
            <li>Zero-data retention agreements with model providers preventing any third-party training.</li>
            <li>Secure server-side API proxy routing preventing client-side key exposure.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold font-sans text-warm-white flex items-center gap-2 border-b border-white/5 pb-3">
            <span className="text-gold font-mono font-extrabold text-base">04.</span>
            <span>Data Retention & Deletion Rights</span>
          </h2>
          <p>
            You retain 100% ownership of your business data. Upon written request or agreement termination, TRISHUL will permanently purge all vector database indexes, prompt configurations, and historic logs associated with your workspace within 14 business days.
          </p>
        </section>

        <section className="space-y-4 pt-4 border-t border-white/5">
          <h2 className="text-xl font-bold font-sans text-warm-white">Questions or Security Inquiries?</h2>
          <p className="text-xs text-warm-secondary">
            For data protection inquiries, security audit requests, or NDA execution, contact our engineering team directly:
          </p>
          <div className="bg-obsidian-surface border border-white/5 p-4 rounded-xl flex items-center justify-between">
            <span className="font-mono text-gold text-xs font-bold">privacy@trishul-ai.com</span>
            <MetallicButton href="/contact" variant="gold" className="text-xs px-4 py-2">
              Contact Security Team
            </MetallicButton>
          </div>
        </section>
      </div>
    </div>
  );
}
