import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const items = [
  { label: 'Phone', value: '8179819102', href: 'tel:+918179819102' },
  { label: 'Email', value: 'burratharun17@gmail.com', href: 'mailto:burratharun17@gmail.com' },
  { label: 'Location', value: 'Hyderabad (Hi-Tech City)', href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading title="CONTACT ME" watermark="HELLO" align="center" />

        <div className="mx-auto max-w-2xl space-y-10 text-center">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-lg font-medium text-white transition hover:text-zinc-300 md:text-xl"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-white md:text-xl">{item.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
