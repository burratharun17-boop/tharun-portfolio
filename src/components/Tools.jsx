import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import {
  IconMeta,
  IconGoogleAds,
  IconLinkedIn,
  IconX,
  IconWordPress,
  IconWooCommerce,
  IconElementor,
  IconGA4,
  IconGTM,
  IconCanva,
  IconPremierePro,
  IconAfterEffects,
  IconAdobeExpress,
  IconCapCut,
  IconPhotoshop,
} from './ToolIcons';

const groups = [
  {
    label: 'Marketing',
    tools: [
      { name: 'Meta Ads', Icon: IconMeta },
      { name: 'Google Ads', Icon: IconGoogleAds },
      { name: 'LinkedIn Ads', Icon: IconLinkedIn },
      { name: 'X Ads', Icon: IconX },
    ],
  },
  {
    label: 'Development',
    tools: [
      { name: 'WordPress', Icon: IconWordPress },
      { name: 'WooCommerce', Icon: IconWooCommerce },
      { name: 'Elementor', Icon: IconElementor },
    ],
  },
  {
    label: 'Analytics',
    tools: [
      { name: 'Google Analytics', Icon: IconGA4 },
      { name: 'Tag Manager', Icon: IconGTM },
    ],
  },
  {
    label: 'Design & Video',
    tools: [
      { name: 'Canva', Icon: IconCanva },
      { name: 'Premiere Pro', Icon: IconPremierePro },
      { name: 'After Effects', Icon: IconAfterEffects },
      { name: 'Adobe Express', Icon: IconAdobeExpress },
      { name: 'CapCut', Icon: IconCapCut },
      { name: 'Photoshop', Icon: IconPhotoshop },
    ],
  },
];

function ToolTile({ name, Icon, iconWide }) {
  return (
    <motion.div
      className="flex min-h-[58px] items-center gap-3 rounded-2xl border border-white/12 bg-zinc-950/65 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:min-w-[200px]"
      whileHover={{
        scale: 1.02,
        y: -2,
        borderColor: 'rgba(255,255,255,0.28)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 24px rgba(255,255,255,0.06)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl bg-black/45 ring-1 ring-inset ring-white/[0.08] ${
          iconWide ? 'h-11 min-w-[4.75rem] px-1.5' : 'h-11 w-11'
        }`}
      >
        <Icon />
      </div>
      <span className="text-left text-sm font-semibold leading-tight text-white">{name}</span>
    </motion.div>
  );
}

export default function Tools() {
  return (
    <section id="tools" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="TOOLS" watermark="STACK" />
        <div className="space-y-14">
          {groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.08}>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {group.tools.map((t) => (
                    <ToolTile key={t.name} name={t.name} Icon={t.Icon} iconWide={t.iconWide} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
