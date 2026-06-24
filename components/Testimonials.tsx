// components/Testimonials.tsx
'use client';

import React from 'react';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import { testimonials } from '@/data/testimonials';

export default function Testimonials(): React.ReactNode {
  return (
    <>
      <section className="testimonials-section" id="testimonials">
        <Container>
          <SectionHeader
            eyebrow="Client Stories"
            title="Words from "
            titleEm="Happy Collectors"
            centered
          />

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="quote-mark">"</div>
                <div className="stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initial}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-location">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <style jsx>{`
                .testimonials-section {
                    padding: var(--space-section) 0;
                    background: var(--parchment);
                }

                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-top: var(--space-8);
                }

                .testimonial-card {
                    padding: var(--space-8) var(--space-6);
                    background: var(--parchment);
                    border: 1px solid var(--border-subtle);
                    position: relative;
                    transition: all 0.4s var(--ease-out);
                    border-radius: 2px;
                }

                .testimonial-card:hover {
                    background: var(--linen);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(28, 24, 20, 0.08);
                }

                .quote-mark {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 5rem;
                    color: rgba(125, 37, 53, 0.08);
                    position: absolute;
                    top: 0.5rem;
                    left: 1.5rem;
                    line-height: 1;
                    user-select: none;
                }

                .stars {
                    color: var(--sienna);
                    font-size: 0.875rem;
                    margin-bottom: var(--space-3);
                    letter-spacing: 0.05em;
                }

                .testimonial-text {
                    font-size: var(--text-sm);
                    line-height: 1.8;
                    color: var(--text-secondary);
                    font-style: italic;
                    margin-bottom: var(--space-5);
                    font-weight: 400;
                }

                .testimonial-author {
                    display: flex;
                    align-items: center;
                    gap: 0.85rem;
                }

                .author-avatar {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1.5px solid var(--border-subtle);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: var(--burgundy);
                    flex-shrink: 0;
                    background: var(--linen);
                }

                .author-name {
                    font-size: var(--text-sm);
                    color: var(--text-primary);
                    font-weight: 500;
                }

                .author-location {
                    font-size: 0.7rem;
                    color: var(--text-tertiary);
                    margin-top: 0.125rem;
                }

                @media(max-width: 900px) {
                    .testimonials-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 1.25rem;
                    }
                }

                @media(max-width: 768px) {
                    .testimonials-section {
                        padding: var(--space-section-mobile) 0;
                    }
                }

                @media(max-width: 600px) {
                    .testimonials-grid {
                        grid-template-columns: 1fr;
                    }

                    .testimonial-card {
                        padding: var(--space-6) var(--space-5);
                    }
                }
            `}</style>
    </>
  );
}