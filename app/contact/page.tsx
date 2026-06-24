// app/contact/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/common/InstagramButton';
import { CONTACT } from '@/lib/constants';

export default function ContactPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="contact-hero">
        <Container>
          <div className="hero-content">
            <div className="hero-eyebrow">Contact Vivek Artline</div>
            <h1 className="hero-title">
              Let's Create Something <em>Beautiful Together</em>
            </h1>
            <p className="hero-subtitle">
              Share your vision and Vivek will reply within 24 hours to discuss
              your custom portrait commission.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section" id="contact">
        <Container>
          <SectionHeader
            eyebrow="Commission Your Artwork"
            title="Let's Create Something "
            titleEm="Just for You"
            subtitle="Share your vision and Vivek will reply within 24 hours."
            centered
          />

          <form className="contact-form reveal" id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">WhatsApp Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="+91 xxxxx xxxxx"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Type of Artwork</label>
              <select id="type" required>
                <option value="">Choose a style</option>
                <option value="Pencil Portrait">Pencil Portrait</option>
                <option value="Glass Engraving">Glass Engraving</option>
                <option value="Spiritual Painting">Spiritual Painting</option>
                <option value="Custom">Custom Request</option>
              </select>
            </div>

            <div className="form-group full">
              <label htmlFor="message">Tell Us About Your Vision</label>
              <textarea
                id="message"
                placeholder="Occasion, people, size..."
                rows={4}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Enquiry <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <i className="bi bi-whatsapp"></i>
              <div>
                <h3>WhatsApp</h3>
                <p>
                  <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank"
                    rel="noopener noreferrer">
                    {CONTACT.phone}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="bi bi-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="bi bi-geo-alt"></i>
              <div>
                <h3>Location</h3>
                <p>{CONTACT.location}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <Container>
          <div className="cta-content">
            <h2 className="cta-title">Ready to Commission Your Portrait?</h2>
            <p className="cta-subtitle">
              Let's transform your cherished memories into timeless art
            </p>
            <div className="cta-buttons">
              <Link href="/#gallery" className="btn-secondary">
                <span>View Portfolio</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank"
                rel="noopener noreferrer" className="btn-primary">
                <span>Start via WhatsApp</span>
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
      <WhatsAppButton />

      <style jsx>{`
        /* Contact Page */
        .contact-hero {
          padding: 160px 0 80px;
          background: linear-gradient(to bottom, var(--parchment) 0%, var(--linen) 100%);
          position: relative;
          overflow: hidden;
        }

        .contact-hero::before {
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

        .contact-section {
          padding: var(--space-section) 0;
          background: var(--linen);
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(ellipse at center, rgba(125, 37, 53, 0.06) 0%, rgba(125, 37, 53, 0.03) 40%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
        }

        .contact-inner {
          max-width: 720px;
          margin: 0 auto;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: var(--space-8);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group.full {
          grid-column: span 2;
        }

        .form-group label {
          font-size: 0.625rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-tertiary);
          font-weight: 600;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: var(--parchment);
          border: 1.5px solid var(--border-subtle);
          color: var(--text-primary);
          padding: 0.85rem 1.1rem;
          font-family: 'Jost', sans-serif;
          font-size: var(--text-sm);
          outline: none;
          transition: all 0.3s;
          border-radius: 4px;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--text-tertiary);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--burgundy);
          box-shadow: 0 0 0 3px rgba(125, 37, 53, 0.08);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 110px;
        }

        .submit-button {
          grid-column: span 2;
          background: var(--sienna);
          color: var(--parchment);
          border: none;
          padding: 1.1rem;
          font-family: 'Jost', sans-serif;
          font-size: var(--text-xs);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.35s var(--ease-out);
          margin-top: var(--space-2);
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-button:hover {
          background: var(--burgundy);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(125, 37, 53, 0.2);
        }

        .submit-button:active {
          transform: translateY(-1px);
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: var(--space-10);
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .info-item i {
          font-size: 1.5rem;
          color: var(--burgundy);
        }

        .info-item h3 {
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .info-item p {
          font-size: 0.9375rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .info-item p a {
          color: var(--text-secondary);
          text-decoration: none;
          word-break: break-all;
        }

        .info-item p a:hover {
          text-decoration: underline;
        }

        .contact-cta {
          padding: var(--space-section) 0;
          background: linear-gradient(135deg, var(--burgundy-deep) 0%, var(--burgundy) 100%);
          position: relative;
          overflow: hidden;
        }

        .contact-cta::before {
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
          color: var(--parchment);
          background: transparent;
          border: 1.5px solid var(--parchment);
        }

        .btn-primary:hover {
          background: var(--parchment);
          color: var(--charcoal);
          border-color: var(--parchment);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .btn-secondary {
          color: var(--parchment);
          background: var(--burgundy);
          border: 1.5px solid transparent;
        }

        .btn-secondary:hover {
          background: var(--parchment);
          color: var(--charcoal);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(125, 37, 53, 0.2);
        }

        .btn-primary i,
        .btn-secondary i {
          font-size: 0.75rem;
          transition: transform 0.3s var(--ease-out);
        }

        .btn-primary:hover i,
        .btn-secondary:hover i {
          transform: translateX(3px);
        }

        .btn-primary:focus-visible,
        .btn-secondary:focus-visible {
          outline: 2px solid var(--parchment);
          outline-offset: 3px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-form {
            gap: 0.75rem;
          }
        }

        @media (max-width: 768px) {
          .contact-hero {
            padding: 120px 0 60px;
          }

          .contact-section,
          .contact-cta {
            padding: clamp(3rem, 8vw, 4rem) 0;
          }

          .contact-form {
            grid-template-columns: 1fr;
          }

          .form-group.full,
          .submit-button {
            grid-column: span 1;
          }

          .contact-info {
            grid-template-columns: 1fr;
            gap: 1.5rem;
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
          .contact-hero {
            padding: 100px 0 50px;
          }

          .contact-info {
            gap: 1rem;
          }

          .info-item i {
            font-size: 1.25rem;
          }

          .info-item h3 {
            font-size: 0.75rem;
          }

          .info-item p {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
}