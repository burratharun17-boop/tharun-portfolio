import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { socialLinks } from '../data/socialLinks';
import { LinkedInIcon, InstagramIcon, XIcon, FacebookIcon, BehanceIcon } from './SocialIcons';

const iconById = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  x: XIcon,
  facebook: FacebookIcon,
  behance: BehanceIcon,
};

const hoverRing = {
  linkedin: 'hover:border-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_0_28px_rgba(10,102,194,0.35)]',
  instagram:
    'hover:border-pink-500/80 hover:text-pink-400 hover:shadow-[0_0_28px_rgba(236,72,153,0.25)]',
  x: 'hover:border-zinc-300 hover:text-white hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]',
  facebook: 'hover:border-[#0668E1] hover:text-[#0668E1] hover:shadow-[0_0_28px_rgba(6,104,225,0.35)]',
  behance: 'hover:border-[#1769FF] hover:text-[#1769FF] hover:shadow-[0_0_28px_rgba(23,105,255,0.35)]',
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative px-5 pb-16 pt-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1200px] border-t border-white/10 pt-16 text-center">
        <Reveal>
          <h2 className="font-bebas text-[clamp(4rem,18vw,12rem)] leading-none tracking-tight text-white">
            THANK YOU
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-zinc-500">Digital Marketing Portfolio</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {socialLinks.map((s, i) => {
              const Icon = iconById[s.id];
              if (!Icon) return null;
              const ring = hoverRing[s.id] ?? hoverRing.x;
              return (
                <motion.a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in new tab)`}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-zinc-100 transition-colors duration-300 ${ring}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <motion.button
              type="button"
              onClick={scrollTop}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-[0_0_30px_rgba(10,102,194,0.45)] transition hover:bg-[#0958a8]"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
