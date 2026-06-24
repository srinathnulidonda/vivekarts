// components/Emotion.tsx
'use client';

import React from 'react';
import Container from './common/Container';

export default function Emotion(): React.ReactNode {
    const occasions = [
        { icon: 'heart', label: 'Memorial Portraits' },
        { icon: 'gift', label: 'Wedding Gifts' },
        { icon: 'people', label: 'Couple Sketches' },
        { icon: 'calendar-heart', label: 'Anniversary Art' }
    ];

    return (
        <>
            <section className="emotion-section" aria-labelledby="emotion-heading">
                <div className="emotion-bg" aria-hidden="true"></div>
                <Container>
                    <div className="emotion-content reveal">
                        <span className="emotion-quote" aria-hidden="true">"</span>

                        <p className="emotion-eyebrow">More Than A Portrait</p>

                        <h2 id="emotion-heading" className="emotion-title">
                            A Gift They'll<br /><em>Never Forget</em>
                        </h2>

                        <p className="emotion-desc">
                            From birthdays and anniversaries to memorial tributes and wedding gifts —
                            every portrait is handcrafted to preserve a moment forever.
                        </p>

                        <ul className="occasion-list">
                            {occasions.map((occasion, index) => (
                                <li key={index} className="occasion-item">
                                    <i className={`bi bi-${occasion.icon}`} aria-hidden="true"></i>
                                    <span>{occasion.label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            <style jsx>{`
                .emotion-section {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-center;
                    background: var(--burgundy-deep);
                    overflow: hidden;
                    padding: var(--space-section) 0;
                }

                .emotion-bg {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(ellipse at 50% 0%, rgba(184, 92, 42, 0.1) 0%, transparent 55%);
                }

                .emotion-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    max-width: 720px;
                    margin: 0 auto;
                }

                .emotion-quote {
                    position: absolute;
                    top: -3.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    font-family: 'Cormorant Garamond', serif;
                    font-size: 11rem;
                    line-height: 1;
                    color: var(--parchment);
                    opacity: 0.05;
                    pointer-events: none;
                    user-select: none;
                }

                .emotion-eyebrow {
                    font-size: var(--text-xs);
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: var(--sienna);
                    font-weight: 600;
                    margin-bottom: var(--space-4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.65rem;
                }

                .emotion-eyebrow::before,
                .emotion-eyebrow::after {
                    content: '';
                    width: 20px;
                    height: 1px;
                    background: rgba(240, 232, 220, 0.3);
                }

                .emotion-title {
                    font-family: 'Cormorant Garamond', serif;
                    font-size: clamp(2.25rem, 4.4vw, 3.5rem);
                    font-weight: 600;
                    line-height: 1.12;
                    color: var(--parchment);
                    margin-bottom: var(--space-5);
                    letter-spacing: -0.01em;
                }

                .emotion-title em {
                    font-style: italic;
                    color: var(--sienna);
                }

                .emotion-desc {
                    font-size: var(--text-base);
                    line-height: 1.75;
                    color: rgba(240, 232, 220, 0.82);
                    margin: 0 auto var(--space-10);
                    max-width: 480px;
                }

                .occasion-list {
                    display: flex;
                    justify-content: center;
                    align-items: stretch;
                    list-style: none;
                    flex-wrap: wrap;
                }

                .occasion-item {
                    display: fit;
                    align-items: center;
                    gap: 0.55rem;
                    font-size: var(--text-sm);
                    color: rgba(240, 232, 220, 0.68);
                    padding: 0 var(--space-6);
                    position: relative;
                    transition: color 0.3s;
                    letter-spacing: 0.01em;
                }

                .occasion-item:not(:last-child)::after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1px;
                    height: 14px;
                    background: rgba(240, 232, 220, 0.18);
                }

                .occasion-item:first-child {
                    padding-left: 0;
                }

                .occasion-item:last-child {
                    padding-right: 0;
                }

                .occasion-item i {
                    font-size: 0.95rem;
                    color: var(--sienna);
                }

                .occasion-item:hover {
                    color: var(--parchment);
                }

                .occasion-item:hover i {
                    color: #D9844A;
                }

                @media (max-width: 768px) {
                    .emotion-section {
                        padding: var(--space-section-mobile) 0;
                    }
                }

                @media (max-width: 700px) {
                    .emotion-quote {
                        font-size: 6rem;
                        top: -1.75rem;
                        opacity: 0.04;
                    }

                    .emotion-eyebrow {
                        margin-bottom: var(--space-3);
                        font-size: 0.625rem;
                    }

                    .emotion-title {
                        margin-bottom: var(--space-4);
                    }

                    .emotion-desc {
                        margin-bottom: var(--space-6);
                        font-size: var(--text-sm);
                        line-height: 1.7;
                    }

                    .occasion-list {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: var(--space-3);
                        justify-items: stretch;
                    }

                    .occasion-item {
                        justify-content: center;
                        gap: var(--space-2);
                        padding: var(--space-3) var(--space-2);
                        background: rgba(240, 232, 220, 0.05);
                        border: 1px solid rgba(240, 232, 220, 0.12);
                        border-radius: 12px;
                        min-height: 44px;
                    }

                    .occasion-item:first-child,
                    .occasion-item:last-child {
                        padding: var(--space-3) var(--space-2);
                    }

                    .occasion-item::after {
                        display: none;
                    }

                    .occasion-item i {
                        file-size: 1.05rem;
                        flex-shrink: 0;
                    }

                    .occasion-item span {
                        font-size: var(--text-xs);
                        line-height: 1.3;
                        text-align: center;
                    }
                }

                @media (max-width: 380px) {
                    .emotion-quote {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}