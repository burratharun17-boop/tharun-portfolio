import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Tools from './components/Tools';
import SocialMediaProject from './components/SocialMediaProject';
import CaseStudy from './components/CaseStudy';
import WebsiteProject from './components/WebsiteProject';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function App() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1200], [0, 120]);

  const [navSolid, setNavSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <div className="grain" aria-hidden />
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 radial-glow opacity-90"
        style={{ y: bgY }}
        aria-hidden
      />

      <Navigation solid={navSolid} />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Tools />
        <SocialMediaProject />
        <CaseStudy />
        <WebsiteProject />
        <Experience />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
