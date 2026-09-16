export const metadata = {
  title: 'Privacy Policy — Trishul AI Automation Studio',
  description: 'Trishul privacy policy regarding client data protection and AI model confidentiality.',
};

export default function PrivacyPage() {
  return (
    <div className="py-12 pb-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-8">
      <div className="space-y-4 border-b border-white/5 pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">LEGAL & DATA GOVERNANCE</span>
        <h1 className="text-4xl font-bold font-sans text-warm-white">Privacy Policy</h1>
        <p className="text-xs text-warm-muted font-mono">Last updated: September 16, 2026</p>
      </div>

      <div className="space-y-6 text-sm text-warm-secondary leading-relaxed font-sans">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">1. Data Protection & AI Model Confidentiality</h2>
          <p>
            At TRISHUL, data security and confidentiality are foundational. We never use client proprietary business data, customer conversations, or CRM databases to train public AI models. All knowledge bases created for your business remain isolated within private vector datastores.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">2. Information We Collect</h2>
          <p>
            We collect information provided directly by you through discovery forms, contact inquiries, and contract agreements. This includes contact names, work emails, business URLs, and operational parameters necessary to construct custom AI agents.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">3. Third-Party Integrations</h2>
          <p>
            Our AI agents interface directly with client-authorized APIs (such as WhatsApp Business API, HubSpot, Salesforce, Zendesk, and Cal.com). Data shared across these tools is encrypted in transit (TLS 1.3) and at rest (AES-256).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-warm-white">4. Contact Us</h2>
          <p>
            For questions regarding privacy or data governance, reach out to our engineering team at <span className="text-gold font-mono">privacy@trishul-ai.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
