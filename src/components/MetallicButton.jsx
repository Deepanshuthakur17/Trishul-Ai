'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function MetallicButton({
  children,
  href,
  onClick,
  variant = 'gold', // 'gold' | 'outline' | 'dark'
  className = '',
  icon = true,
  type = 'button',
  ...props
}) {
  const baseClasses =
    'relative inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden shadow-gold-glow group cursor-pointer border';

  const variants = {
    gold: 'bg-gradient-to-r from-[#F0D58A] via-[#D6AD55] to-[#C99A3D] text-obsidian border-[#F0D58A]/50 hover:shadow-[0_0_35px_rgba(214,173,85,0.4)] hover:scale-[1.02] active:scale-[0.98]',
    outline: 'bg-obsidian/80 backdrop-blur-md text-warm-white border-[#D6AD55]/40 hover:border-[#D6AD55] hover:bg-[#D6AD55] hover:text-obsidian hover:shadow-[0_0_30px_rgba(214,173,85,0.3)] hover:scale-[1.02] active:scale-[0.98]',
    dark: 'bg-obsidian-card text-warm-white border-obsidian-border hover:border-[#D6AD55]/50 hover:bg-obsidian-surface hover:scale-[1.02] active:scale-[0.98]',
  };

  const content = (
    <>
      {/* Metallic Sheen Overlay */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
}
