import { motion } from 'framer-motion';
import Reveal from './Reveal';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-32 lg:px-16"
    >
      <div className="radial-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-12 lg:gap-4 lg:pt-4">
        {/* Left — label, PORTFOLIO, identity, CTAs */}
        <div className="relative z-20 lg:col-span-7">
          <Reveal>
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-400 md:text-xs">
              Performance Marketer
            </p>
          </Reveal>

          <div className="relative mb-8 md:mb-10">
            <motion.h1
              className="font-bebas text-[clamp(4rem,20vw,11rem)] leading-[0.82] tracking-tight text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              PORTFOLIO
            </motion.h1>
          </div>

          <Reveal delay={0.05}>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Tharun Burra
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-base font-medium text-zinc-300 md:text-lg">
              Digital Marketer | Performance Marketing Enthusiast
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-10 max-w-xl text-sm font-light leading-relaxed text-zinc-400 md:text-base">
              Driving Growth Through Data & Creativity
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <motion.button
                type="button"
                onClick={() => scrollTo('social-project')}
                className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.15)] transition hover:bg-zinc-200 hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollTo('contact')}
                className="rounded-full border border-white/40 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </div>
          </Reveal>
        </div>

        {/* Right — portrait overlapping headline (Behance-style depth) */}
        <div className="relative z-30 flex min-h-[340px] items-center justify-center lg:col-span-5 lg:min-h-[70vh] lg:justify-end">
          <motion.div
            className="relative w-full max-w-[400px] lg:-ml-16 lg:max-w-[440px] xl:-ml-24"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-800/50 to-zinc-950 shadow-[0_40px_100px_rgba(0,0,0,0.85)]"
              style={{ transform: 'translateZ(0)' }}
            >
              <img
                src="/hero.jpeg"
                alt="Tharun Burra"
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
