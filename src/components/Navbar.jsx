'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MetallicButton from './MetallicButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Demo', href: '/demo' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-b border-obsidian-border py-4 shadow-obsidian-card'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/trishul-logo.png"
              alt="TRISHUL Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-2xl tracking-[0.2em] text-warm-white group-hover:text-gold transition-colors">
              TRISHUL
            </span>
            <span className="text-[9px] uppercase tracking-widest text-warm-secondary -mt-1 font-mono">
              AI STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-gold'
                    : 'text-warm-secondary hover:text-warm-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Theme Toggle & Metallic CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <MetallicButton href="/contact" variant="outline" className="px-5 py-2">
            Get Started
          </MetallicButton>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-warm-white p-2 focus:outline-none focus:ring-1 focus:ring-gold rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-obsidian-card/95 backdrop-blur-xl border-b border-obsidian-border px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium tracking-wide py-2 border-b border-white/5 ${
                  pathname === link.href ? 'text-gold' : 'text-warm-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <MetallicButton
                href="/contact"
                variant="gold"
                className="w-full justify-center py-3.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Build My AI Agent
              </MetallicButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
