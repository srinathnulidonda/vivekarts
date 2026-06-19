// app/page.tsx
'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Lazy load components for better performance
const Services = dynamic(() => import('@/components/Services'));
const FeaturedArtworks = dynamic(() => import('@/components/FeaturedArtworks'));
const Gallery = dynamic(() => import('@/components/Gallery'));
const About = dynamic(() => import('@/components/About'));
const CustomerReactions = dynamic(() => import('@/components/CustomerReactions'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Instagram = dynamic(() => import('@/components/Instagram'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <FeaturedArtworks />
      <Gallery />
      <About />
      <CustomerReactions />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}