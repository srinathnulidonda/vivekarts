// components/About.tsx
'use client';

import Link from 'next/link';
import Container from './common/Container';
import SectionHeader from './common/SectionHeader';
import Button from './common/Button';

export default function About() {
    const badges = [
        '500+ Portraits Delivered',
        '7–10 Day Turnaround',
        'Pan-India Shipping',
        '100% Handcrafted'
    ];

    const portraitTypes = [
        'Couple Portraits',
        'Family Portraits',
        'Pet Portraits',
        'Memorial Portraits',
        'Wedding Gifts',
        'Custom Requests'
    ];

    return (
        <>
            <section className="about-section" id="about">
                <Container>
                    <div className="about-grid">
                        <div className="about-visual reveal-l">
                            <div className="av-main">
                                <div className="av-main-img"></div>
                            </div>
                            <div className="av-tag">Vivek</div>
                        </div>

                        <div className="about-content reveal-r">
                            <SectionHeader
                                eyebrow="About Vivek"
                                title="Handmade Portraits, "
                                titleEm="Made with Heart"
                            />

                            <p className="desc">
                                Vivek is a Hyderabad-based portrait artist specializing in hand-drawn pencil portraits.
                                Every portrait is created with archival-grade materials and meticulous attention to detail.
                            </p>
                            <p className="desc">
                                From couple sketches and family portraits to pet art and memorial tributes, Vivek transforms
                                your cherished memories into heirloom-quality artwork — treasured for generations.
                            </p>

                            <div className="portrait-types">
                                {portraitTypes.map((type, index) => (
                                    <div key={index} className="pt-item">✓ {type}</div>
                                ))}
                            </div>

                            <div className="badges">
                                {badges.map((badge, index) => (
                                    <span key={index} className="badge-item">{badge}</span>
                                ))}
                            </div>

                            <Button href="#contact" variant="primary" icon="arrow-right">
                                Order Your Portrait
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <style jsx>{`
                .about-section {
                    padding: var(--space-section) 0;
                    background: var(--linen);
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-10);
                    align-items: center;
                }

                .about-visual {
                    position: relative;
                    height: 560px;
                }

                .av-main {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 80px;
                    bottom: 90px;
                    overflow: hidden;
                    border: 1px solid rgba(28, 24, 20, 0.06);
                }

                .av-main-img {
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(155deg, #EDD5C8 0%, #D9B5A0 25%, #C49780 55%, #A87B68 75%, #8B6856 100%);
                }

                .av-tag {
                    position: absolute;
                    top: var(--space-6);
                    left: calc(-1 * var(--space-5));
                    background: var(--parchment);
                    border: 1px solid var(--border-subtle);
                    color: var(--text-secondary);
                    font-size: 0.625rem;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    padding: 0.55rem 1rem;
                    writing-mode: vertical-rl;
                    font-weight: 500;
                    box-shadow: 0 4px 16px rgba(28, 24, 20, 0.06);
                }

                .about-content :global(.section-header) {
                    margin-bottom: var(--space-5);
                }

                .desc {
                    font-size: var(--text-base);
                    line-height: 1.85;
                    color: var(--text-secondary);
                    margin-bottom: var(--space-4);
                    font-weight: 400;
                }

                .portrait-types {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 0.625rem;
                    margin: var(--space-6) 0;
                }

                .pt-item {
                    font-size: var(--text-sm);
                    color: var(--text-primary);
                    font-weight: 500;
                }

                .badges {
                    display: flex;
                    gap: var(--space-5);
                    flex-wrap: wrap;
                    margin: var(--space-6) 0;
                    align-items: center;
                }

                .badge-item {
                    font-size: var(--text-xs);
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: var(--text-tertiary);
                    position: relative;
                    padding-left: 1rem;
                    font-weight: 500;
                }

                .badge-item::before {
                    content: '●';
                    position: absolute;
                    left: 0;
                    color: var(--burgundy);
                    font-size: 0.5rem;
                    top: 0.35rem;
                }

                @media(max-width: 900px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                        gap: var(--space-8);
                    }
                    
                    .about-visual {
                        height: 380px;
                    }
                    
                    .av-main {
                        right: 60px;
                        bottom: 70px;
                    }
                    
                    .portrait-types {
                        grid-template-columns: 1fr;
                    }
                }

                @media(max-width: 768px) {
                    .about-section {
                        padding: var(--space-section-mobile) 0;
                    }
                }
            `}</style>
        </>
    );
}