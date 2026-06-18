//components/Testimonials.tsx

'use client';

import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
    return (
        <>
            <section className="testi-sec" id="testimonials">
                <div className="t-header reveal">
                    <div className="eyebrow">Client Stories</div>
                    <h2 className="sec-title">
                        Words from <em>Happy Collectors</em>
                    </h2>
                </div>

                <div className="t-grid reveal">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="t-card">
                            <div className="t-q">"</div>
                            <div className="t-stars">
                                {'★'.repeat(testimonial.rating)}
                            </div>
                            <p className="t-text">{testimonial.text}</p>
                            <div className="t-auth">
                                <div className="t-av">{testimonial.initial}</div>
                                <div>
                                    <div className="t-name">{testimonial.name}</div>
                                    <div className="t-loc">{testimonial.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                /*testimonials*/
                .testi-sec {
                    padding: var(--space-12) max(8vw, calc((100% - var(--max-width)) / 2)) var(--space-16);
                    background: var(--parchment);
                }

                .t-header {
                    text-align: center;
                    max-width: 580px;
                    margin: 0 auto var(--space-10);
                }

                .t-header .eyebrow {
                    justify-content: center;
                }

                .t-header .eyebrow::before {
                    display: none;
                }

                .t-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                }

                .t-card {
                    padding: var(--space-8) var(--space-6);
                    background: var(--parchment);
                    border: 1px solid var(--border-subtle);
                    position: relative;
                    transition: all 0.4s var(--ease-out);
                    border-radius: 2px;
                }

                .t-card:hover {
                    background: var(--linen);
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(28, 24, 20, 0.08);
                }

                .t-q {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 5rem;
                    color: rgba(125, 37, 53, 0.08);
                    position: absolute;
                    top: 0.5rem;
                    left: 1.5rem;
                    line-height: 1;
                }

                .t-stars {
                    color: var(--sienna);
                    font-size: 0.875rem;
                    margin-bottom: var(--space-3);
                    letter-spacing: 0.05em;
                }

                .t-text {
                    font-size: var(--text-sm);
                    line-height: 1.8;
                    color: var(--text-secondary);
                    font-style: italic;
                    margin-bottom: var(--space-5);
                    font-weight: 400;
                }

                .t-auth {
                    display: flex;
                    align-items: center;
                    gap: 0.85rem;
                }

                .t-av {
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

                .t-name {
                    font-size: var(--text-sm);
                    color: var(--text-primary);
                    font-weight: 500;
                }

                .t-loc {
                    font-size: 0.7rem;
                    color: var(--text-tertiary);
                    margin-top: 0.125rem;
                }

                /*responsive*/
                @media(max-width:900px) {
                    .t-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 1.25rem;
                    }
                }

                @media(max-width:600px) {
                    .t-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    );
}