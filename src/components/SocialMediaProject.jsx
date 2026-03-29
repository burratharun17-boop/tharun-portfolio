import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import PhoneMockup from './PhoneMockup';

const blocks = [
  {
    title: 'Objective',
    items: [
      'Increase qualified engagement for a focused product launch.',
      'Improve reach efficiency while maintaining brand-safe placements.',
      'Establish a repeatable creative testing cadence.',
    ],
  },
  {
    title: 'Work Done',
    items: [
      'Audience segmentation with lookalikes and interest layering.',
      'Creative variations for hooks, headlines, and CTA tests.',
      'Budget pacing with dayparting and placement exclusions.',
    ],
  },
  {
    title: 'Results',
    items: [
      'Stronger CTR vs. baseline after creative iteration.',
      'Lower cost per engagement through targeting refinement.',
      'Clear reporting narrative for stakeholders.',
    ],
  },
];

export default function SocialMediaProject() {
  return (
    <section id="social-project" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="SOCIAL MEDIA PROJECT" watermark="SOCIAL" />

        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md md:p-10 lg:p-12">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
              <div className="min-w-0 flex-1 space-y-10">
                {blocks.map((b) => (
                  <div key={b.title}>
                    <h3 className="mb-4 font-bebas text-2xl tracking-wide text-white md:text-3xl">
                      {b.title}
                    </h3>
                    <ul className="space-y-2 text-sm leading-relaxed text-zinc-400">
                      {b.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <PhoneMockup className="lg:sticky lg:top-28">
              <img
                src="/socialmedia-ad.jpeg"
                alt="MOBILE"
                className="min-h-[160px] rounded-lg"
              />
              </PhoneMockup>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
