//components/About.tsx

'use client';

import Link from 'next/link';

export default function About() {
    const badges = [
        '500+ Artworks Delivered',
        '7–10 Day Turnaround',
        'Pan-India Shipping',
        '100% Handcrafted'
    ];

    return (
        <>
            <div className="about-wrap" id="about">
                <div className="about-sec">
                    <div className="about-visual reveal-l">
                        <div className="av-main">
                            <div className="av-main-img"></div>
                        </div>
                        <div className="av-tag">The Artist</div>
                    </div>

                    <div className="about-txt reveal-r">
                        <div className="eyebrow">About the Studio</div>
                        <h2 className="sec-title">
                            Art Created from<br />the <em>Heart</em>
                        </h2>
                        <p className="desc">
                            Vivek is a Hyderabad-based fine artist specializing in hyper-realistic pencil portraits,
                            spiritual paintings, glass engravings, and custom artworks. Every piece is made with
                            archival-grade materials and meticulous attention to detail.
                        </p>
                        <p className="desc">
                            From anniversary gifts to memorial portraits to home centrepieces, Vivek Artline creates
                            art that families treasure for generations. Each work is one-of-a-kind, never replicated.
                        </p>

                        <div className="badges">
                            {badges.map((badge, index) => (
                                <span key={index} className="badge-item">{badge}</span>
                            ))}
                        </div>

                        <Link href="#contact" className="btn-primary">
                            Commission Your Art <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                /*about*/
                .about-wrap {
                    padding: var(--space-16) max(8vw, calc((100% - var(--max-width)) / 2)) var(--space-12);
                    background: var(--linen);
                }

                .about-sec {
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
                    display: block;
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

                .about-txt .desc {
                    font-size: var(--text-base);
                    line-height: 1.85;
                    color: var(--text-secondary);
                    margin-bottom: var(--space-4);
                    font-weight: 400;
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

                .about-txt :global(.btn-primary) {
                    background: var(--sienna);
                    color: var(--parchment);
                    font-size: var(--text-xs);
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 0.9rem 2rem;
                    text-decoration: none;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.35s var(--ease-out);
                    border-radius: 4px;
                    box-shadow: 0 2px 8px rgba(184, 92, 42, 0.2);
                }

                .about-txt :global(.btn-primary):hover {
                    background: var(--burgundy);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(125, 37, 53, 0.24);
                }

                /*responsive*/
                @media(max-width:900px) {
                    .about-sec {
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
                }
            `}</style>
        </>
    );
}