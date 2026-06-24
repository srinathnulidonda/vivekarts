// components/About.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';

export default function About() {
  return (
    <>
      <section className="about-section" id="about">
        <Container>
          <div className="about-grid">
            {/* Visual */}
            <div className="about-visual reveal-l">
              <div className="visual-main">
                <div className="visual-image"></div>
              </div>
              <div className="visual-badge">Vivek</div>
            </div>

            {/* Content */}
            <div className="about-content reveal-r">
              <SectionHeader
                eyebrow="About Vivek"
                title="Handmade Portraits, "
                titleEm="Made with Heart"
              />

              <div className="about-text">
                <p className="lead">
                  Vivek is a Hyderabad-based portrait artist specializing in hand-drawn pencil portraits
                  that capture the essence of your most treasured memories.
                </p>
                <p className="description">
                  Every portrait is created with archival-grade materials and meticulous attention to detail —
                  from couple sketches and family portraits to pet art and memorial tributes.
                </p>
              </div>

              {/* Quote */}
              <div className="about-quote">
                <p className="quote-text">
                  Every portrait begins with a photograph,
                  but ends as a memory preserved forever.
                </p>
                <ul className="quote-tags" role="list">
                  <li className="quote-tag">
                    <span className="tag-mark" aria-hidden="true">✦</span>
                    Hand Drawn
                  </li>
                  <li className="quote-tag">
                    <span className="tag-mark" aria-hidden="true">✦</span>
                    Custom Commissioned
                  </li>
                  <li className="quote-tag">
                    <span className="tag-mark" aria-hidden="true">✦</span>
                    Crafted with Care
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="about-actions">
                <Link href="/about" className="btn-read-more">
                  <span>Read Full Story</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link href="#contact" className="btn-order">
                  <span>Order Portrait</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <style jsx>{`
        /* About Section */
        .about-section {
          padding: clamp(4rem, 10vw, 7.5rem) 0;
          background: var(--linen);
          position: relative;
        }

        /* Grid System */
        .about-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }

        /* Visual */
        .about-visual {
          grid-column: 1 / 6;
          position: relative;
          min-height: 560px;
        }

        .visual-main {
          position: absolute;
          inset: 0 80px 80px 0;          overflow: hidden;
          border:  0px 90px 0;
          overflow: hidden;
          border: 1px solid rgba(28, 24, 20, 0.06);
          border-radius: 2px;
          background: var(--linen);
        }

        .visual-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            155deg,
            #EDD5C8 0%,
            #D9B5A0 25%,
            #C49780 55%,
            #A87B68 75%,
            #8B6856 100%
          );
        }

        .visual-badge {
          position: absolute;
          top: 24px;
          left: -20px;
          background: var(--parchment);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.625rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 12px 16px;
          writing-mode: vertical-rl;
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(28, 24, 20, 0.06);
          z-index: 2;
        }

        /* Content */
        .about-content {
          grid-column: 6 / 13;
        }

        .about-content :global(.section-header) {
          margin-bottom: 24px;
        }

        /* Typography */
        .about-text {
          margin-bottom: 32px;
        }

        .lead {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-primary);
          margin-bottom: 16px;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        .description {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          letter-spacing: -0.01em;
        }

        /* Quote */
        .about-quote {
          padding-left: 28px;
          border-left: 2px solid var(--border-medium);
          margin-bottom: 32px;
        }

        .quote-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.5;
          color: var(--charcoal);
          margin: 0 0 20px;
          max-width: 40ch;
          letter-spacing: -0.01em;
        }

        .quote-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 28px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .quote-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-size: 0.6875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .tag-mark {
          color: var(--sienna);
          font-size: 0.625rem;
          line-height: 1;
        }

        /* Action Buttons */
        .about-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 4px;
        }

        :global(.btn-read-more),
        :global(.btn-order) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 28px;
          font-family: 'Jost', sans-serif;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
        }

        :global(.btn-read-more) {
          color: var(--charcoal);
          background: transparent;
          border: 1.5px solid var(--border-medium);
        }

        :global(.btn-read-more):hover {
          color: var(--burgundy);
          border-color: var(--burgundy);
          background: rgba(125, 37, 53, 0.04);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(125, 37, 53, 0.08);
        }

        :global(.btn-order) {
          color: var(--parchment);
          background: var(--sienna);
          border: 1.5px solid transparent;
          box-shadow: 0 2px 8px rgba(184, 92, 42, 0.16);
        }

        :global(.btn-order):hover {
          background: var(--burgundy);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(125, 37, 53, 0.2);
        }

        :global(.btn-read-more) i,
        :global(.btn-order) i {
          font-size: 0.75rem;
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        :global(.btn-read-more):hover i,
        :global(.btn-order):hover i {
          transform: translateX(3px);
        }

        :global(.btn-read-more):focus-visible,
        :global(.btn-order):focus-visible {
          outline: 2px solid var(--parchment);
          outline-offset: 4px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .about-grid {
            gap: 48px;
          }

          .about-visual {
            grid-column: 1 / 6;
            min-height: 480px;
          }

          .about-content {
            grid-column: 6 / 13;
          }

          .visual-main {
            inset: 0 60px 70px 0;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about-section {
            padding: clamp(3rem, 8vw, 4rem) 0;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-visual {
            grid-column: 1 / -1;
            min-height: 400px;
            max-width: 480px;
            margin: 0 auto;
            width: 100%;
          }

          .about-content {
            grid-column: 1 / -1;
          }

          .visual-main {
            inset: 0 50px 60px 0;
          }

          .about-content :global(.section-header) {
            margin-bottom: 20px;
          }

          .about-text {
            margin-bottom: 28px;
          }

          .lead {
            font-size: 1rem;
            margin-bottom: 14px;
          }

          .description {
            font-size: 0.9375rem;
          }

          .about-quote {
            padding-left: 20px;
            margin-bottom: 28px;
          }

          .quote-text {
            font-size: 1.1875rem;
            max-width: none;
          }

          .quote-tags {
            gap: 8px 20px;
          }

          .about-actions {
            flex-direction: column;
            gap: 10px;
          }

          :global(.btn-read-more),
          :global(.btn-order) {
            width: 100%;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .about-visl the {
            min-height: 360px;
          }

          .visual-main {
            inset: 0 40px 50px 0;
          }

          .visual-badge {
            left: -16px;
            font-size: 0.5625rem;
            padding: 10px 14px;
          }

          .lead {
            font-size: 0.9375rem;
          }

          .description {
            font-size: 0.875rem;
          }

          .quote-text {
            font-size: 1.0625rem;
          }

          .quote-tag {
            font-size: 0.625rem;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          :global(.btn-read-more),
          :global(.btn-order),
          :global(.btn-read-more) i,
          :global(.btn-order) i {
            transition: none !important;
          }
        }

        @media (prefers-contrast: high) {
          :global(.btn-read-more),
          :global(.btn-order) {
            border: 2px solid currentColor;
          }
        }
      `}</style>
    </>
  );
}