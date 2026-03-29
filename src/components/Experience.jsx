import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const bullets = [
  'Analyzing business situations to identify growth constraints and opportunities.',
  'Providing strategic advice across digital channels, budgets, and measurement.',
  'Supporting digital transformation initiatives with practical execution guidance.',
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="EXPERIENCE" watermark="WORK" />

        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <div className="mb-8 flex flex-col gap-2 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="font-bebas text-3xl tracking-wide text-white md:text-4xl">
                  Consultant – DPS Associates
                </h3>
                <p className="mt-2 text-sm text-zinc-400">May 2023 – Oct 2025</p>
              </div>
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-zinc-300">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
