import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

function IconFacebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const sections = [
  {
    title: 'Campaign Objective',
    text: 'Drive awareness and consideration for seasonal offers while maintaining efficient cost per result across ad platforms.',
  },
  {
    title: 'Target Audience',
    text: 'Interest-based audiences combined with engagement retargeting, focused on high-intent urban users.',
  },
  {
    title: 'Strategy',
    text: 'Creative-first testing approach with audience expansion and optimized frequency control.',
  },
  {
    title: 'Execution',
    text: 'Split campaigns between automated and manual placements with frequent creative updates every 48–72 hours.',
  },
  {
    title: 'Results',
    text: 'Improved engagement rate and stable cost per acquisition after optimized creative iterations.',
  },
];

const metrics = [
  ['Metric', 'Before', 'After'],
  ['Impressions', '128K', '210K'],
  ['Clicks', '1.9K', '3.4K'],
  ['CTR', '1.48%', '1.62%'],
  ['Engagements', '4.2K', '7.1K'],
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="CASE STUDY" watermark="META" />

        <Reveal>
          <div className="mb-10 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Channels
            </span>
            <div className="flex gap-3 text-[#0668E1]">
              <IconFacebook className="h-8 w-8" />
              <IconInstagram className="h-8 w-8 text-pink-500" />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h3 className="mb-2 font-bebas text-2xl text-white md:text-3xl">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{s.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between gap-8">
            <img
                src="/Ad.jpeg"
                alt="ADS"
                className="max-h-[655px] rounded-lg"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-zinc-200 bg-white text-black shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-100">
                  {metrics[0].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.slice(1).map((row) => (
                  <tr key={row[0]} className="border-b border-zinc-200 last:border-0">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 text-zinc-800">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
