import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const categories = [
  {
    name: 'Digital Marketing',
    bullets: [
      'Meta & Instagram campaigns',
      'Google Ads (Search, Display, Performance Max)',
      'LinkedIn & X Ads',
      'Audience research & persona building',
      'Creative briefing & ad copy',
    ],
  },
  {
    name: 'Web Development',
    bullets: [
      'Responsive landing pages',
      'HTML, CSS, JavaScript fundamentals',
      'Component-based UI with React',
      'Performance & Core Web Vitals awareness',
      'Form & CTA optimization',
    ],
  },
  {
    name: 'Technical SEO',
    bullets: [
      'Site structure & internal linking',
      'Schema & metadata hygiene',
      'Page speed & crawlability basics',
      'Indexation & Search Console review',
      'Content clusters & keyword mapping',
    ],
  },
  {
    name: 'Analytics',
    bullets: [
      'Conversion tracking setup',
      'UTM discipline & attribution hygiene',
      'Dashboards & executive summaries',
      'Funnel drop-off analysis',
      'Experiment design & readouts',
    ],
  },
  {
    name: 'Design & Video',
    bullets: [
      'Social creative direction',
      'Short-form hooks & thumbnails',
      'Brand-consistent layouts',
      'Light motion & transitions',
      'Canva / design-tool workflows',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="SKILLS" watermark="CRAFT" />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.06}>
              <motion.article
                className="h-full rounded-2xl border border-white/12 bg-zinc-950/40 p-6 md:p-8"
                whileHover={{
                  borderColor: 'rgba(255,255,255,0.22)',
                  boxShadow: '0 0 36px rgba(255,255,255,0.05)',
                }}
              >
                <h3 className="mb-4 font-bebas text-2xl tracking-wide text-white md:text-3xl">
                  {cat.name}
                </h3>
                <ul className="space-y-2.5 text-sm leading-relaxed text-zinc-400">
                  {cat.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      {b}
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
