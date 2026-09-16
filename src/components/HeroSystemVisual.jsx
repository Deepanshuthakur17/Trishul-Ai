'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MessageSquare, ShieldCheck, Database, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const SIMULATED_STREAMS = [
  {
    channel: "WhatsApp Business",
    customer: "Real Estate Buyer",
    input: "Looking for 3BHK penthouse in South City under ₹2.5Cr.",
    intent: "High-Intent Buyer Qualification",
    action: "Matched 3 listings & booked viewing slot",
    output: "HubSpot CRM Updated + WhatsApp Confirmation Sent",
    color: "from-amber-500/20 to-gold/10"
  },
  {
    channel: "Web Inbound",
    customer: "SaaS Enterprise Lead",
    input: "Need API access & SOC2 compliance info for 50 seats.",
    intent: "Security & Sales Qualification",
    action: "Verified SOC2 PDF & scored lead 94/100",
    output: "Assigned to Senior Rep + Calendar Link Sent",
    color: "from-gold/20 to-amber-600/10"
  },
  {
    channel: "Voice AI Inbound",
    customer: "Healthcare Patient",
    input: "Want to reschedule Dr. Sharma appointment for Friday 4PM.",
    intent: "Patient Schedule Rescheduling",
    action: "Checked EHR system & modified slot",
    output: "EHR Synced + Patient SMS Reminder Dispatched",
    color: "from-amber-400/20 to-yellow-600/10"
  }
];

export default function HeroSystemVisual() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SIMULATED_STREAMS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const stream = SIMULATED_STREAMS[activeIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 lg:mt-16 p-1 rounded-2xl bg-gradient-to-b from-gold/30 via-obsidian-border to-transparent">
      <div className="bg-obsidian-card rounded-2xl p-6 sm:p-8 md:p-10 border border-obsidian-border overflow-hidden relative shadow-obsidian-card">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Header Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-obsidian-border gap-3">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
            </span>
            <span className="font-mono text-xs text-warm-secondary uppercase tracking-widest">
              Live System Pipeline • Real-time Routing
            </span>
          </div>
          <div className="text-xs font-mono text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            One system. Multiple workflows.
          </div>
        </div>

        {/* System Pipeline Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-8 relative items-center">
          {/* Step 1: Customer */}
          <div className="bg-obsidian-surface border border-obsidian-border p-4 rounded-xl flex flex-col justify-between min-h-[140px] relative group hover:border-gold/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-warm-muted tracking-wider">01 • INBOUND</span>
              <User className="w-4 h-4 text-warm-secondary" />
            </div>
            <div>
              <div className="text-xs font-bold text-warm-white truncate">{stream.customer}</div>
              <div className="text-[11px] text-warm-muted truncate mt-0.5">{stream.channel}</div>
            </div>
            <div className="text-[11px] text-warm-secondary bg-obsidian/60 p-2 rounded border border-white/5 line-clamp-2">
              "{stream.input}"
            </div>
          </div>

          <div className="hidden md:flex justify-center text-gold/50">
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>

          {/* Step 2: Trishul Core Engine */}
          <div className="bg-gradient-to-b from-obsidian-surface to-obsidian border border-gold/40 p-5 rounded-xl flex flex-col items-center justify-center min-h-[180px] relative shadow-gold-glow text-center">
            <div className="w-16 h-16 relative mb-2 animate-float">
              <Image src="/trishul-logo.png" alt="Trishul Core" fill className="object-contain" />
            </div>
            <span className="text-xs font-bold tracking-widest text-warm-white uppercase">TRISHUL AI</span>
            <span className="text-[10px] font-mono text-gold mt-1">Autonomous Engine</span>
            <div className="mt-2 flex items-center space-x-1 text-[9px] font-mono text-warm-muted">
              <ShieldCheck className="w-3 h-3 text-gold" />
              <span>Guardrails Active</span>
            </div>
          </div>

          <div className="hidden md:flex justify-center text-gold/50">
            <ArrowRight className="w-5 h-5 animate-pulse" />
          </div>

          {/* Step 3: Acts & Workflow Output */}
          <div className="bg-obsidian-surface border border-obsidian-border p-4 rounded-xl flex flex-col justify-between min-h-[140px] relative group hover:border-gold/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase text-gold tracking-wider">02 • EXECUTION</span>
              <CheckCircle2 className="w-4 h-4 text-gold" />
            </div>
            <div>
              <div className="text-xs font-bold text-warm-white truncate">{stream.intent}</div>
              <div className="text-[11px] text-warm-secondary truncate mt-0.5">{stream.action}</div>
            </div>
            <div className="text-[11px] text-gold font-mono bg-gold/5 p-2 rounded border border-gold/20 truncate">
              ✓ {stream.output}
            </div>
          </div>
        </div>

        {/* Live Stream Switcher Dots */}
        <div className="flex items-center justify-between pt-4 border-t border-obsidian-border text-xs text-warm-secondary">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono uppercase text-warm-muted">Simulated Scenarios:</span>
            {SIMULATED_STREAMS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === activeIndex ? 'bg-gold scale-125' : 'bg-white/20 hover:bg-white/40'
                }`}
                title={s.channel}
              />
            ))}
          </div>
          <div className="font-mono text-[11px] text-warm-muted hidden sm:block">
            Latency: <span className="text-warm-white">0.42s</span> • Security: <span className="text-warm-white">AES-256</span>
          </div>
        </div>
      </div>
    </div>
  );
}
