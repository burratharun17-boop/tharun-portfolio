import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const interests = [
  { label: 'Photography', icon: '📷' },
  { label: 'Travelling', icon: '✈️' },
  { label: 'Cricket', icon: '🏏' },
  { label: 'Reading', icon: '📚' },
  { label: 'Cooking', icon: '🍳' },
];

export default function Interests() {
  return (
    <section id="interests" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="INTERESTS" watermark="LIFE" />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {interests.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <motion.div
                className="flex min-w-[140px] items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-medium text-zinc-200"
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.35)' }}
              >
                <span className="text-xl" aria-hidden>
                  {item.icon}
                </span>
                {item.label}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
