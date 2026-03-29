import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Work', href: '#social-project' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ solid }) {
  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-[100] transition-colors duration-300 ${
        solid ? 'border-b border-white/10 bg-black/75 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 lg:px-16">
        <a
          href="#hero"
          className="font-bebas text-xl tracking-wide text-white md:text-2xl"
        >
          TB
        </a>
        <ul className="hidden gap-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-white hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]"
        >
          Hire
        </a>
      </nav>
    </motion.header>
  );
}
