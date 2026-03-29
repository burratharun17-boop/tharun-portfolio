import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="EDUCATION & CERTIFICATION" watermark="LEARN" />

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Certification
              </p>
              <h3 className="font-bebas text-3xl text-white md:text-4xl">Digital Marketing Course</h3>
              <p className="mt-2 text-zinc-400">DV Academy — Mar 2026</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Education
              </p>
              <ul className="space-y-4 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                  Diploma in Hotel Management
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                  Intermediate (MPC)
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                  SSC
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
