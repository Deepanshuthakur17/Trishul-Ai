'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Building, Mail, Phone, Globe, MessageSquare } from 'lucide-react';

const AUTOMATION_OPTIONS = [
  'Lead generation',
  'Customer support',
  'WhatsApp',
  'Voice calls',
  'Appointment booking',
  'Internal operations',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    website: '',
    email: '',
    phone: '',
    industry: 'Real Estate',
    selectedAutomations: ['Lead generation', 'WhatsApp'],
    enquiryVolume: '50-200 per month',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleAutomation = (option) => {
    setFormData(prev => {
      const exists = prev.selectedAutomations.includes(option);
      if (exists) {
        return {
          ...prev,
          selectedAutomations: prev.selectedAutomations.filter(o => o !== option)
        };
      } else {
        return {
          ...prev,
          selectedAutomations: [...prev.selectedAutomations, option]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-obsidian-card border border-gold/40 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 shadow-gold-glow">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center mx-auto text-gold animate-bounce">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-bold font-sans text-warm-white">
          Inquiry Received.
        </h3>
        <p className="text-warm-secondary text-base leading-relaxed">
          Thank you, <span className="text-warm-white font-semibold">{formData.name}</span>. We have logged your request for <span className="text-gold font-semibold">{formData.businessName}</span>.
        </p>
        <div className="bg-obsidian-surface border border-white/10 p-4 rounded-xl text-left text-xs font-mono space-y-2 text-warm-secondary">
          <div className="text-gold font-bold uppercase">Summary Log:</div>
          <div>• Industry: {formData.industry}</div>
          <div>• Selected Automations: {formData.selectedAutomations.join(', ')}</div>
          <div>• Volume: {formData.enquiryVolume}</div>
        </div>
        <p className="text-xs text-warm-muted">
          Our founder will personally review your workflow parameters and reach out via WhatsApp/Email within 24 hours with an initial agent blueprint.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 rounded-full border border-gold/40 text-gold text-xs font-semibold hover:bg-gold hover:text-obsidian transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-obsidian-card border border-obsidian-border rounded-2xl p-6 sm:p-10 space-y-8 shadow-obsidian-card">
      <div className="space-y-2 border-b border-white/5 pb-6">
        <h3 className="text-2xl font-bold font-sans text-warm-white">
          Tell us what takes too much time.
        </h3>
        <p className="text-xs sm:text-sm text-warm-secondary">
          We will analyze your business workflow and outline where an AI employee can take over.
        </p>
      </div>

      {/* Multiselect Automation Options */}
      <div className="space-y-3">
        <label className="text-xs font-mono uppercase tracking-widest text-gold font-semibold block">
          What would you like to automate? (Select all that apply)
        </label>
        <div className="flex flex-wrap gap-2.5">
          {AUTOMATION_OPTIONS.map((opt) => {
            const isSelected = formData.selectedAutomations.includes(opt);
            return (
              <button
                type="button"
                key={opt}
                onClick={() => toggleAutomation(opt)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-gold text-obsidian font-semibold shadow-gold-glow'
                    : 'bg-obsidian-surface text-warm-secondary border border-white/10 hover:border-white/30'
                }`}
              >
                {isSelected ? `✓ ${opt}` : opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-xs font-medium text-warm-white block">Full Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Business Name */}
        <div className="space-y-2">
          <label htmlFor="contact-business" className="text-xs font-medium text-warm-white block">Business Name *</label>
          <input
            id="contact-business"
            name="businessName"
            type="text"
            required
            placeholder="e.g. Apex Realty"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="w-full bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Website */}
        <div className="space-y-2">
          <label htmlFor="contact-website" className="text-xs font-medium text-warm-white block">Website URL</label>
          <input
            id="contact-website"
            name="website"
            type="url"
            placeholder="https://yourcompany.com"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="w-full bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-xs font-medium text-warm-white block">Work Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="rahul@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="text-xs font-medium text-warm-white block">Phone / WhatsApp Number *</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        {/* Industry */}
        <div className="space-y-2">
          <label htmlFor="contact-industry" className="text-xs font-medium text-warm-white block">Industry</label>
          <select
            id="contact-industry"
            name="industry"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold transition-colors"
          >
            <option value="Real Estate">Real Estate</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Local Businesses">Local Businesses</option>
            <option value="Other">Other Custom Enterprise</option>
          </select>
        </div>
      </div>

      {/* Enquiry Volume */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-warm-white block">Approximate Monthly Inquiry Volume</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {['< 50 / mo', '50–200 / mo', '200–1,000 / mo', '1,000+ / mo'].map((vol) => (
            <button
              type="button"
              key={vol}
              onClick={() => setFormData({ ...formData, enquiryVolume: vol })}
              className={`py-2.5 px-3 rounded-xl text-xs text-center border transition-all ${
                formData.enquiryVolume === vol
                  ? 'border-gold bg-gold/10 text-gold font-semibold'
                  : 'border-white/10 bg-obsidian text-warm-secondary hover:border-white/20'
              }`}
            >
              {vol}
            </button>
          ))}
        </div>
      </div>

      {/* Additional details */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-warm-white block">Additional Workflow Details</label>
        <textarea
          rows={3}
          placeholder="Tell us briefly about your current software stack (e.g. HubSpot, WhatsApp, Google Sheets) and your biggest bottleneck..."
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full bg-obsidian border border-obsidian-border rounded-xl px-4 py-3 text-sm text-warm-white focus:outline-none focus:border-gold transition-colors resize-none"
        />
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        className="w-full py-4 rounded-full bg-gold text-obsidian font-bold text-base hover:bg-gold-light transition-all shadow-gold-glow flex items-center justify-center space-x-2"
      >
        <span>Show Me What Trishul Can Automate</span>
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </form>
  );
}
