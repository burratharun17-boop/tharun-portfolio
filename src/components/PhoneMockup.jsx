export default function PhoneMockup({ children, className = '' }) {
  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] shrink-0 ${className}`}
      style={{ aspectRatio: '9/17' }}
    >
      <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 bg-zinc-950 shadow-[0_40px_80px_rgba(0,0,0,0.65)]">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="absolute inset-3 overflow-hidden rounded-[2rem] bg-zinc-900">
          {children}
        </div>
      </div>
    </div>
  );
}
