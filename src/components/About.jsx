import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const paragraphs = [
  "I'm a passionate Digital Marketing professional with expertise in performance marketing across Meta Ads, Google Ads, LinkedIn Ads, and X Ads. I combine creative storytelling with data-backed decisions to build campaigns that reach the right audience, reduce wasted spend, and drive measurable business outcomes.",
  'I enjoy turning complex analytics into clear insights—optimizing funnels, refining targeting, and testing creative angles until performance compounds. Whether it is awareness, consideration, or conversion goals, I focus on alignment between brand message, platform capabilities, and user behavior.',
  'Beyond paid media, I stay curious about emerging formats, attribution models, and automation—always aiming to deliver growth that is both scalable and sustainable for the brands I support.',
];

export default function About() {
  return (
    <section id="about" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="ABOUT ME" watermark="ABOUT" />
        <div className="relative z-10 mx-auto max-w-3xl space-y-6">
          {paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-left text-base font-light leading-relaxed text-zinc-300 md:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
