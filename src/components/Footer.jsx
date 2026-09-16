import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-obsidian-border text-warm-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-obsidian-border">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3.5">
              <Image
                src="/trishul-logo.png"
                alt="TRISHUL Logo"
                width={56}
                height={56}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-sans font-bold text-3xl tracking-[0.2em] text-warm-white">
                  TRISHUL
                </span>
                <span className="text-[10px] uppercase tracking-widest text-warm-secondary font-mono">
                  AI AUTOMATION STUDIO
                </span>
              </div>
            </Link>
            <p className="text-warm-secondary text-sm max-w-sm leading-relaxed">
              TRISHUL builds custom AI employees and autonomous workflow systems for forward-thinking businesses. One system. Multiple workflows.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-gold">
              <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="tracking-wider uppercase font-mono">Build AI systems that work while you work.</span>
            </div>
          </div>

          {/* Three Pillars Overview */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold font-mono">
              The Three Blades
            </h4>
            <ul className="space-y-3 text-sm text-warm-secondary">
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold text-xs">01</span>
                <div>
                  <strong className="text-warm-white font-medium block">ACQUIRE</strong>
                  <span className="text-xs text-warm-muted">Lead capture, qualification & sales automation.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold text-xs">02</span>
                <div>
                  <strong className="text-warm-white font-medium block">SERVE</strong>
                  <span className="text-xs text-warm-muted">WhatsApp, support desks, booking & voice AI.</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold font-bold text-xs">03</span>
                <div>
                  <strong className="text-warm-white font-medium block">OPERATE</strong>
                  <span className="text-xs text-warm-muted">CRM updates, internal workflows & data processing.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold font-mono">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-warm-secondary">
              <li>
                <Link href="/solutions" className="hover:text-warm-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-warm-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-warm-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-warm-white transition-colors">
                  Interactive Demo
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-warm-white transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-warm-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact / CTA Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold font-mono">
              Get In Touch
            </h4>
            <p className="text-xs text-warm-secondary">
              Ready to deploy your first AI employee?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-1.5 text-sm font-medium text-gold hover:text-warm-white transition-colors"
            >
              <span>Build My AI Agent</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-muted">
          <div>
            © {new Date().getFullYear()} TRISHUL Studio. All rights reserved.
          </div>
          <div className="font-cursive text-base text-gold/80 italic">
            "Built for businesses that want to move faster."
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-warm-secondary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-warm-secondary cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
