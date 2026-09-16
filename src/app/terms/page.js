export const metadata = {
  title: 'Terms of Service — Trishul AI Automation Studio',
  description: 'Trishul terms of service and client engineering agreement.',
};

export default function TermsPage() {
  return (
    <div className="py-12 pb-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-4 border-b border-white/5 pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">LEGAL & CONTRACTS</span>
        <h1 className="text-4xl font-bold font-sans text-warm-white">Terms of Service</h1>
        <p className="text-xs text-warm-muted font-mono">Last updated: September 16, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-warm-secondary leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">1. Scope of AI Studio Services</h2>
          <p>
            TRISHUL provides custom software architecture, prompt engineering, API integration, and monthly maintenance for automated business agents. Specific scope items, timelines, and deliverables are defined in individual project Statements of Work (SOW).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">2. Usage Fees & Infrastructure Accounts</h2>
          <p>
            Client is responsible for third-party infrastructure usage fees (including OpenAI API, WhatsApp Business Cloud messaging fees, and Twilio voice charges) incurred by deployed AI agents.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">3. System Guardrails & Intellectual Property</h2>
          <p>
            Upon final payment, client retains ownership of custom prompts, knowledge bases, and software configurations engineered specifically for their business.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">4. Contact & Inquiries</h2>
          <p>
            For legal inquiries, contact <span className="text-gold font-mono">legal@trishul-ai.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
