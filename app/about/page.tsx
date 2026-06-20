// app/about/page.tsx
'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Container from '@/components/common/Container';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/common/InstagramButton';

export default function AboutPage() {
  const portraitTypes = [
    { icon: 'heart', label: 'Couple Portraits', description: 'Celebrate your love story' },
    { icon: 'people', label: 'Family Portraits', description: 'Preserve family bonds' },
    { icon: 'heart-pulse', label: 'Pet Portraits', description: 'Honor your furry friends' },
    { icon: 'flower1', label: 'Memorial Portraits', description: 'Cherish loving memories' },
    { icon: 'gift', label: 'Wedding Gifts', description: 'Unique & meaningful presents' },
    { icon: 'stars', label: 'Custom Requests', description: 'Your vision, our craft' }
  ];

  const values = [
    {
      icon: 'palette',
      title: 'Archival Quality',
      description: 'Premium materials that last generations without fading'
    },
    {
      icon: 'hand-thumbs-up',
      title: '100% Handcrafted',
      description: 'Every stroke drawn by hand, never digital or printed'
    },
    {
      icon: 'heart-fill',
      title: 'Made with Love',
      description: 'Each portrait infused with care and attention to detail'
    },
    {
      icon: 'shield-check',
      title: 'Satisfaction Guaranteed',
      description: 'Unlimited revisions until you absolutely love it'
    }
  ];

  const process = [
    { step: '01', title: 'Share Your Vision', description: 'Send us your photos and ideas via WhatsApp or email' },
    { step: '02', title: 'Approve the Sketch', description: 'Review and approve the initial pencil outline' },
    { step: '03', title: 'Creation Begins', description: 'Vivek brings your portrait to life with meticulous detail' },
    { step: '04', title: 'Delivery & Joy', description: 'Securely packaged and delivered to your doorstep' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <div className="hero-content">
            <div className="hero-eyebrow">About Vivek Artline</div>
            <h1 className="hero-title">
              Preserving Memories, One <em>Portrait</em> at a Time
            </h1>
            <p className="hero-subtitle">
              From a passion for art to a mission of preserving cherished memories —
              discover the story, craft, and heart behind every portrait.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <Container>
          <div className="story-grid">
            <div className="story-visual">
              <div className="story-image"></div>
              <div className="story-badge">Est. 2018</div>
            </div>

            <div className="story-content">
              <div className="section-eyebrow">The Story</div>
              <h2 className="section-title">From Sketch to <em>Legacy</em></h2>

              <div className="story-text">
                <p>
                  Vivek discovered his passion for portraiture at a young age, spending countless hours
                  perfecting his craft with pencil and paper. What began as a hobby evolved into a calling —
                  to transform photographs into timeless artworks that families treasure forever.
                </p>
                <p>
                  Based in Hyderabad, Vivek has delivered over 500 custom portraits across India,
                  each one telling a unique story of love, loss, celebration, and memory. Every commission
                  is treated with the utmost care, using archival-grade materials to ensure your portrait
                  remains vibrant for generations.
                </p>
                <p>
                  From couple sketches and family heirlooms to pet tributes and memorial art,
                  Vivek's mission is simple: to capture the essence of what makes your memories precious,
                  and preserve them in a form that transcends time.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Portrait Types */}
      <section className="types-section">
        <Container>
          <div className="section-header-center">
            <div className="section-eyebrow">What We Create</div>
            <h2 className="section-title">Portrait <em>Specialties</em></h2>
          </div>

          <div className="types-grid">
            {portraitTypes.map((type, index) => (
              <div key={index} className="type-card">
                <div className="type-icon">
                  <i className={`bi bi-${type.icon}`}></i>
                </div>
                <h3 className="type-label">{type.label}</h3>
                <p className="type-description">{type.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <Container>
          <div className="section-header-center">
            <div className="section-eyebrow">Our Promise</div>
            <h2 className="section-title">Why Choose <em>Vivek Artline</em></h2>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={`bi bi-${value.icon}`}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <Container>
          <div className="section-header-center">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="section-title">Simple 4-Step <em>Process</em></h2>
          </div>

          <div className="process-timeline">
            {process.map((item, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{item.title}</h3>
                  <p className="step-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2 className="cta-title">Ready to Create Your Portrait?</h2>
            <p className="cta-subtitle">
              Let's transform your cherished memories into timeless art
            </p>
            <div className="cta-buttons">
              <Link href="/#contact" className="btn-primary">
                <span>Start Your Portrait</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href="/#gallery" className="btn-secondary">
                <span>View Gallery</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <WhatsAppButton />

      <style jsx>{`
        /* ============================================
           ABOUT PAGE - Elite Design System
        ============================================ */

        /* Hero Section */
        .about-hero {
          padding: 160px 0 80px;
          background: linear-gradient(to bottom, var(--parchment) 0%, var(--linen) 100%);
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(
            ellipse at center,
            rgba(125, 37, 53, 0.06) 0%,
            rgba(125, 37, 53, 0.03) 35%,
            transparent 70%
          );
          filter: blur(80px);
          pointer-events: none;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .hero-eyebrow {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--burgundy);
          margin-bottom: 24px;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 600;
          line-height: 1.1;
          color: var(--charcoal);
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .hero-title em {
          color: var(--burgundy);
          font-style: italic;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 640px;
          margin: 0 auto;
        }

        /* Story Section */
        .story-section {
          padding: clamp(4rem, 10vw, 7.5rem) 0;
          background: var(--linen);
        }

        .story-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }

        .story-visual {
          grid-column: 1 / 6;
          position: relative;
          min-height: 560px;
        }

        .story-image {
          position: absolute;
          inset: 0 80px 90px 0;
          background: linear-gradient(
            155deg,
            #EDD5C8 0%,
            #D9B5A0 25%,
            #C49780 55%,
            #A87B68 75%,
            #8B6856 100%
          );
          border: 1px solid rgba(28, 24, 20, 0.06);
        }

        .story-badge {
          position: absolute;
          bottom: 40px;
          right: 40px;
          background: var(--parchment);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.625rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 12px 20px;
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(28, 24, 20, 0.08);
        }

        .story-content {
          grid-column: 6 / 13;
        }

        .section-eyebrow {
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--burgundy);
          margin-bottom: 16px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 600;
          line-height: 1.1;
          color: var(--charcoal);
          margin-bottom: 32px;
          letter-spacing: -0.02em;
        }

        .section-title em {
          color: var(--burgundy);
          font-style: italic;
        }

        .story-text p {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .story-text p:last-child {
          margin-bottom: 0;
        }

        /* Types Section */
        .types-section {
          padding: clamp(4rem, 10vw, 7.5rem) 0;
          background: var(--parchment);
        }

        .section-header-center {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 64px;
        }

        .types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .type-card {
          text-align: center;
          padding: 40px 24px;
          background: white;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .type-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(28, 24, 20, 0.08);
        }

        .type-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(125, 37, 53, 0.1);
          color: var(--burgundy);
        }

        .type-icon i {
          font-size: 1.75rem;
        }

        .type-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.375rem;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 8px;
        }

        .type-description {
          font-size: 0.9375rem;
          color: var(--text-secondary);
        }

        /* Values Section */
        .values-section {
          padding: clamp(4rem, 10vw, 7.5rem) 0;
          background: var(--linen);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .value-card {
          display: flex;
          gap: 24px;
          padding: 32px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
        }

        .value-icon {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--burgundy);
          color: white;
        }

        .value-icon i {
          font-size: 1.5rem;
        }

        .value-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 8px;
        }

        .value-description {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Process Section */
        .process-section {
          padding: clamp(4rem, 10vw, 7.5rem) 0;
          background: var(--parchment);
        }

        .process-timeline {
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          gap: 32px;
          margin-bottom: 48px;
          position: relative;
        }

        .process-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 31px;
          top: 64px;
          width: 2px;
          height: calc(100% + 16px);
          background: linear-gradient(to bottom, var(--burgundy), transparent);
          opacity: 0.2;
        }

        .process-step:last-child {
          margin-bottom: 0;
        }

        .step-number {
          width: 64px;
          height: 64px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--burgundy);
          color: white;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .step-content {
          flex: 1;
          padding-top: 8px;
        }

        .step-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 8px;
        }

        .step-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* CTA Section */
        .cta-section {
          padding: clamp(4rem, 10vw, 7.5rem) 0;
          background: linear-gradient(135deg, var(--burgundy-deep) 0%, var(--burgundy) 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.4;
          pointer-events: none;
        }

        .cta-content {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.2;
          color: var(--parchment);
          margin-bottom: 16px;
        }

        .cta-subtitle {
          font-size: 1.125rem;
          color: rgba(240, 232, 220, 0.8);
          margin-bottom: 32px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'Jost', sans-serif;
          text-decoration: none;
          padding: 16px 32px;
          border-radius: 100px;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }

        .btn-primary {
          color: var(--charcoal);
          background: var(--parchment);
          border: 1.5px solid transparent;
        }

        .btn-primary:hover {
          background: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          color: var(--parchment);
          background: transparent;
          border: 1.5px solid rgba(240, 232, 220, 0.3);
        }

        .btn-secondary:hover {
          border-color: var(--parchment);
          background: rgba(240, 232, 220, 0.1);
        }

        /* ============================================
           RESPONSIVE BREAKPOINTS
        ============================================ */

        @media (max-width: 1024px) {
          .story-grid {
            gap: 48px;
          }

          .values-grid {
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 120px 0 60px;
          }

          .story-section,
          .types-section,
          .values-section,
          .process-section,
          .cta-section {
            padding: clamp(3rem, 8vw, 4rem) 0;
          }

          .story-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .story-visual {
            grid-column: 1 / -1;
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }

          .story-content {
            grid-column: 1 / -1;
          }

          .story-image {
            inset: 0 50px 60px 0;
          }

          .types-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .type-card {
            padding: 32px 20px;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .value-card {
            padding: 24px;
          }

          .process-step {
            gap: 20px;
          }

          .process-step:not(:last-child)::after {
            left: 23px;
          }

          .step-number {
            width: 48px;
            height: 48px;
            font-size: 1.25rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: 100px 0 50px;
          }

          .story-visual {
            min-height: 360px;
          }

          .story-image {
            inset: 0 40px 50px 0;
          }

          .process-step {
            gap: 16px;
          }

          .step-number {
            width: 44px;
            height: 44px;
            font-size: 1.125rem;
          }

          .process-step:not(:last-child)::after {
            left: 21px;
          }
        }
      `}</style>
    </>
  );
}