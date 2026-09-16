export default function SectionHeading({
  eyebrow,
  title,
  highlightText,
  subtitle,
  centered = false,
  serifTitle = false,
}) {
  return (
    <div className={`space-y-3 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-gold font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-warm-white leading-[1.15] ${
          serifTitle ? 'font-editorial font-normal' : 'font-sans'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="font-cursive text-gold font-normal text-4xl sm:text-5xl md:text-6xl inline-block px-1">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-warm-secondary text-base sm:text-lg leading-relaxed pt-1 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
