//app/page.tsx

'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Emotion from '@/components/Emotion';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navigation />
      <Hero />
      <Gallery />
      <Emotion />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}