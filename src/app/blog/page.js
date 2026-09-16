import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'AI Automation Insights — Trishul Studio Blog',
  description: 'Articles and engineering guides on AI employees, WhatsApp automation, and workflow design.',
};

export default function BlogPage() {
  const articles = [
    {
      title: "Why Generic AI Chatbots Fail (And How AI Employees Differ)",
      excerpt: "Why simple rule-based chatbots frustrate customers while context-aware AI agents execute real business logic.",
      date: "September 12, 2026",
      readTime: "5 min read",
      category: "AI Architecture"
    },
    {
      title: "How to Connect Official WhatsApp Business API to Your CRM",
      excerpt: "A step-by-step technical guide to automating lead capture and appointment scheduling inside WhatsApp.",
      date: "August 28, 2026",
      readTime: "7 min read",
      category: "WhatsApp Automation"
    },
    {
      title: "The Human Handoff Rule: When AI Should Step Aside",
      excerpt: "Why AI agents need strict guardrails and instant escalation protocols to protect your brand reputation.",
      date: "August 15, 2026",
      readTime: "4 min read",
      category: "Guardrails & Safety"
    }
  ];

  return (
    <div className="space-y-20 py-12 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-8">
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold font-mono font-semibold bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20">
          <span>STUDIO ARTICLES & GUIDES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-warm-white leading-tight font-sans">
          AI automation{' '}
          <span className="font-cursive text-gold font-normal text-5xl sm:text-7xl block sm:inline">
            insights.
          </span>
        </h1>
        <p className="text-warm-secondary text-lg leading-relaxed max-w-2xl mx-auto">
          Engineering notes on building reliable AI systems, system guardrails, and enterprise workflow integration.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <div
            key={idx}
            className="bg-obsidian-card border border-obsidian-border rounded-2xl p-8 space-y-6 shadow-obsidian-card hover:border-gold/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-warm-muted">
                <span className="text-gold font-semibold">{art.category}</span>
                <span>{art.readTime}</span>
              </div>
              <h3 className="text-xl font-bold font-sans text-warm-white leading-snug">
                {art.title}
              </h3>
              <p className="text-xs text-warm-secondary leading-relaxed">
                {art.excerpt}
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-warm-muted font-mono">
              <span>{art.date}</span>
              <Link href="/contact" className="text-gold font-semibold flex items-center gap-1 hover:text-warm-white">
                <span>Read Article</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
