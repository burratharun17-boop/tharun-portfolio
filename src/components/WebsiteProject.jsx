import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const details = [
  {
    title: 'Objective',
    text: 'Present services clearly, improve trust signals, and drive contact conversions with a fast, responsive experience.',
  },
  {
    title: 'Tools',
    text: 'React, Vite, Tailwind CSS, responsive component patterns, and performance-minded asset loading.',
  },
  {
    title: 'Features',
    text: 'Hero storytelling, case-study blocks, project showcases, and structured contact pathways.',
  },
  {
    title: 'Outcome',
    text: 'A cohesive dark-mode portfolio that scales from mobile to desktop without losing visual hierarchy.',
  },
];

function PreviewBlock({ className = '', label, tall }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800/60 to-zinc-950 shadow-xl ${className}`}
    >
      <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="flex h-full min-h-[120px] items-center justify-center p-6">
        <span className="font-bebas text-2xl tracking-wide text-white/40 md:text-3xl">{label}</span>
      </div>
      {tall && (
        <div className="absolute bottom-4 left-4 right-4 h-2 rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-white/30" />
        </div>
      )}
    </div>
  );
}

export default function WebsiteProject() {
  return (
    <section id="website-project" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="WEBSITE PROJECT" watermark="WEB" />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
              {details.map((d) => (
                <div key={d.title}>
                  <h3 className="mb-2 font-bebas text-2xl text-white md:text-3xl">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{d.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <PreviewBlock className="col-span-2 min-h-[200px] md:min-h-[240px]" label="DESKTOP PREVIEW" />
              <PreviewBlock className="min-h-[220px] md:min-h-[280px]" label="MOBILE" tall />
              <PreviewBlock className="min-h-[160px]" label="SECTION UI" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
