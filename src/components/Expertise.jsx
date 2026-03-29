import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const items = [
  {
    title: 'Performance Marketing',
    points: [
      'Paid social & search strategy',
      'Campaign structure & scaling',
      'A/B testing & iteration',
    ],
  },
  {
    title: 'Analytics & Growth',
    points: ['KPI frameworks', 'Funnel diagnostics', 'Reporting & insights'],
  },
  {
    title: 'Full-Stack Digital',
    points: ['Landing experience alignment', 'Tracking & pixels', 'Cross-channel coherence'],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="EXPERTISE" watermark="GROW" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <motion.article
                className="flex h-full flex-col rounded-[2rem] border border-white/15 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]"
                whileHover={{ y: -4 }}
              >
                <h3 className="mb-5 font-bebas text-3xl tracking-wide text-white md:text-4xl">
                  {item.title}
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
