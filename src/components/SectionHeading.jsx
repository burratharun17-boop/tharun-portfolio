import Reveal from './Reveal';

export default function SectionHeading({
  title,
  watermark,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`relative mb-12 md:mb-20 lg:mb-28 ${className}`}>
      {watermark && (
        <span
          className="pointer-events-none absolute -top-4 left-1/2 z-0 -translate-x-1/2 select-none font-bebas text-[clamp(4rem,18vw,14rem)] leading-none text-white/[0.04] md:text-[clamp(5rem,22vw,18rem)]"
          aria-hidden
        >
          {watermark}
        </span>
      )}
      <Reveal>
        <h2
          className={`relative z-10 font-bebas text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] tracking-tight text-white ${
            align === 'center' ? 'text-center' : 'text-left'
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
