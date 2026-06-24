// components/Services.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { services } from '@/data/services';

export default function Services(): React.ReactNode {
  return (
    <>
      <section className="services-section" id="services">
        <Container>
          <SectionHeader
            eyebrow="Our Services"
            title="What Can I "
            titleEm="Order?"
            subtitle="Every portrait is hand-drawn with love and attention to detail, capturing the essence of your most treasured memories."
            centered
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="service-card reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="image-overlay"></div>
                </div>

                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>

                  <a href="#contact" className="service-btn">
                    <span>Order Now</span>
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <style jsx>{`
        /* Services Section */
        .services-section {
          padding: clamp(4rem, 10vw, 7.5rem) 0;
          background: var(--parchment);
          position: relative;
        }

        /* Grid System */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          gap: 2rem;
        }

        /* Service Card */
        .service-card {
          position: relative;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow:
            0 1px 3px rgba(28, 24, 20, 0.06),
            0 4px 12px rgba(28, 24, 20, 0.08);
          transition: all 0.4s var(--ease-out);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 4px 12px rgba(28, 24, 20, 0.08),
            0 16px 48px rgba(28, 24, 20, 0.12);
        }

        /* Service Image */
        .service-image {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: var(--linen);
        }

        .service-image :global(img) {
          transition: transform 0.6s var(--ease-out);
        }

        .service-card:hover .service-image :global(img) {
          transform: scale(1.06);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(28, 24, 20, 0.02) 50%,
            rgba(28, 24, 20, 0.08) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover .image-overlay {
          opacity: 1;
        }

        /* Service Content */
        .service-content {
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
        }

        .service-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--charcoal);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .service-description {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 20px;
          letter-spacing: -0.01em;
          flex-grow: 1;
        }

        /* Service Button */
        .service-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          align-self: flex-start;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'Jost', sans-serif;
          text-decoration: none;
          padding: 11px 22px;
          border-radius: 50px;
          color: var(--burgundy);
          background: rgba(125, 37, 53, 0.06);
          border: 1.5px solid rgba(125, 37, 53, 0.15);
          transition: all 0.3s var(--ease-out);
          box-shadow: 0 1px 3px rgba(125, 37, 53, 0.08);
          cursor: pointer;
          user-select: none;
        }

        .service-btn:hover {
          color: var(--parchment);
          background: var(--burgundy);
          border-color: var(--burgundy);
          transform: translateY(-2px);
          box-shadow:
            0 2px 8px rgba(125, 37, 53, 0.16),
            0 8px 24px rgba(125, 37, 53, 0.12);
        }

        .service-btn:active {
          transform: translateY(0);
          box-shadow: 0 1px 4px rgba(125, 37, 53, 0.12);
        }

        .service-btn i {
          font-size: 0.75rem;
          transition: transform 0.3s var(--ease-out);
        }

        .service-btn:hover i {
          transform: translateX(3px);
        }

        .service-btn:focus-visible {
          outline: 2px solid var(--burgundy);
          outline-offset: 3px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
            gap: 1.75rem;
          }

          .service-title {
            font-size: 1.625rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .services-section {
            padding: clamp(3rem, 8vw, 4rem) 0;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-content {
            padding: 24px 20px 20px;
          }

          .service-title {
            font-size: 1.5rem;
            margin-bottom: 10px;
          }

          .service-description {
            font-size: 0.875rem;
            line-height: 1.65;
            margin-bottom: 18px;
          }

          .service-btn {
            width: 100%;
            padding: 13px 24px;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .service-content {
            padding: 20px 18px 18px;
          }

          .service-title {
            font-size: 1.375rem;
          }

          .service-description {
            font-size: 0.8125rem;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .service-image :global(img),
          .service-btn,
          .service-btn i {
            transition: none !important;
          }
        }

        @media (prefers-contrast: high) {
          .service-card {
            border: 2px solid var(--charcoal);
          }

          .service-btn {
            border: 2px solid var(--burgundy);
          }
        }

        @media (prefers-color-scheme: dark) {
          .service-card {
            background: rgba(255, 255, 255, 0.05);
          }
        }
      `}</style>
    </>
  );
}